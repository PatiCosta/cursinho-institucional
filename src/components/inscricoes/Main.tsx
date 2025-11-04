import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Button,
  useToast,
  VStack
} from '@chakra-ui/react';
import { ArrowForwardIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { StudentForm } from '@/components/inscricoes/StudentForm';
import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { Turma } from '@/types';
import { PixDisplayModal } from './PixDisplayModal'; // Importamos nosso novo modal
import { useRouter } from 'next/router';

interface MainProps {
  schoolClassList: Turma[];
}

// Interface para os dados do PIX que esperamos receber do backend
interface PixData {
  txid: string; // O txid é essencial para o polling
  qrCodePayload: string;
  copiaECola: string;
  valor: string;
}

type PaymentStatus = 'IDLE' | 'PENDENTE' | 'CONCLUIDA' | 'ERRO';


export function Main({ schoolClassList }: MainProps) {
  const [selectedTurma, setSelectedTurma] = useState<Turma | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pixData, setPixData] = useState<PixData | null>(null); // State para guardar os dados do PIX
  const [isPixModalOpen, setIsPixModalOpen] = useState(false); // State para controlar o modal
  const toast = useToast();
  const router = useRouter();
  // O estado do pagamento agora vive no componente PAI
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('IDLE');

  const handleSelectTurma = (turma: Turma) => {
    setSelectedTurma(turma);
  };

  const handleBack = () => {
    setSelectedTurma(null);
  };

  const handleStudentSubmit = async (studentData: FieldValues) => {
    if (!selectedTurma) return;

    setIsSubmitting(true);

    try {

      delete studentData.confirmacaoEmail
      const payload = {
        ...studentData,
        schoolClassID: selectedTurma.id,
        // Este campo 'price' é usado apenas para a lógica e será removido no backend
        price: (selectedTurma.subscriptions.price / 100).toFixed(2),
      };

      console.log("Enviando para o novo endpoint /inscriptions:", payload);

      // Chamamos a nova rota do backend que usa o serviço do Santander
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/inscriptions`, payload);

      // Em vez de redirecionar, guardamos os dados do PIX e abrimos o modal
      setPixData(response.data);
      setIsPixModalOpen(true);

    } catch (error: any) {
      let errorMessage = "Não foi possível processar a inscrição. Tente novamente mais tarde.";
      let errorTitle = 'Erro na Inscrição.';

      // Verifica se o erro é o 409 (Conflict) que o backend agora envia
      if (error.response?.status === 409) {
        errorTitle = 'Você já está inscrito';
        errorMessage = error.response.data.details; // Pega a mensagem "Você já está inscrito..."
      } else {
        // Pega outras mensagens de erro genéricas
        errorMessage = error.response?.data?.details || error.response?.data?.error || errorMessage;
      }

      toast({
        title: errorTitle,
        description: errorMessage,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      // Garantimos que o estado de 'submitting' seja resetado mesmo se der erro
      setIsSubmitting(false);
    }
  };

  // **LÓGICA DE POLLING MOVIDA PARA CÁ**
  useEffect(() => {
    // Só roda o polling se tiver um txid e o status for PENDENTE
    if (paymentStatus !== 'PENDENTE' || !pixData?.txid) {
      return;
    }

    console.log(`Iniciando polling para o txid: ${pixData.txid}`);

    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/inscriptions/status/${pixData.txid}`
        );

        const newStatus: PaymentStatus = response.data.status;
        console.log(`Status recebido: ${newStatus}`);

        if (newStatus === 'CONCLUIDA') {
          setPaymentStatus('CONCLUIDA');
        }
      } catch (error) {
        console.error("Erro no polling:", error);
      }
    };

    // Inicia o timer (Interval) para verificar a cada 5 segundos
    const intervalId = setInterval(checkPaymentStatus, 5000);

    // Função de "limpeza": para o timer se o status mudar (para CONCLUIDA) ou o componente for desmontado
    return () => {
      console.log("Parando polling.");
      clearInterval(intervalId);
    };

  }, [paymentStatus, pixData?.txid]); // Depende do status e do txid


  // **LÓGICA DE REDIRECIONAMENTO MOVIDA PARA CÁ**
  useEffect(() => {
    if (paymentStatus === 'CONCLUIDA') {
      setIsPixModalOpen(true); // Garante que o modal esteja aberto para mostrar "sucesso"

      toast({
        title: 'Pagamento confirmado!',
        description: 'Sua inscrição foi recebida com sucesso.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Espera 2 segundos e redireciona
      setTimeout(() => {
        setIsPixModalOpen(false); // Fecha o modal
        router.push('/inscricoes/sucesso'); // Redireciona
      }, 2000);
    }
  }, [paymentStatus, router, toast]);

  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box py={12} px={6}>
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="stretch"
        gap={8}
      >
        {selectedTurma ? (
          <StudentForm
            selectedTurma={selectedTurma}
            onBack={handleBack}
            onSubmit={handleStudentSubmit}
          />
        ) : (
          <>
            <Heading as="h1" size="xl" textAlign="center" w="100%" mb={4}>
              Turmas com Inscrições Abertas
            </Heading>
            {schoolClassList.map((turma) => (
              <Box
                key={turma.id}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="lg"
                overflow="hidden"
                p={6}
                bg={cardBg}
                boxShadow="lg"
                transition="all 0.2s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
                width={{ base: '100%', sm: '400px' }}
                display="flex"
                flexDirection="column"
              >
                <VStack align="stretch" spacing={4} flex="1">
                  <Box bg={turma.informations.color || 'blue.500'} p={4} borderRadius="md" color="white">
                    <Heading as="h3" size="md">{turma.title}</Heading>
                  </Box>
                  <Text noOfLines={3}>{turma.informations.description}</Text>
                  <VStack align="stretch" spacing={2}>
                    <Flex align="center">
                      <CalendarIcon mr={2} />
                      <Text fontSize="sm">{turma.informations.dateSchedule}</Text>
                    </Flex>
                    <Flex align="center">
                      <TimeIcon mr={2} />
                      <Text fontSize="sm">{turma.informations.hourSchedule}</Text>
                    </Flex>
                  </VStack>
                  <Box flex="1" />
                  <Flex justify="space-between" align="center" mt={4}>
                    <Text fontWeight="bold" fontSize="lg">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(turma.subscriptions.price / 100)}
                    </Text>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="blue"
                      onClick={() => handleSelectTurma(turma)}
                    >
                      Inscrever-se
                    </Button>
                  </Flex>
                </VStack>
              </Box>
            ))}
          </>
        )}
      </Flex>
      {/* Finalmente, renderizamos o modal aqui */}
      <PixDisplayModal
        isOpen={isPixModalOpen}
        onClose={() => setIsPixModalOpen(false)}
        pixData={pixData}
        status={paymentStatus} // Passamos o status como prop
      />
    </Box>
  );
}

