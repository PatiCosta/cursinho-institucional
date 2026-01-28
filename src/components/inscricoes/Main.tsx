import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Button,
  useToast,
  VStack,
  Center,
  Spinner,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  // useDisclosure foi removido daqui
  Link,
  Collapse,
  Image,
  Highlight,
  Tag
} from '@chakra-ui/react';
import { ArrowForwardIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { StudentForm } from '@/components/inscricoes/StudentForm';
import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { Turma } from '@/types';
import { PixDisplayModal } from './PixDisplayModal'; // Importamos nosso novo modal
import { useRouter } from 'next/router';
import { Book } from 'phosphor-react';

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

type PaymentStatus = 'PENDENTE' | 'CONCLUIDA' | 'ERRO';


export function Main({ schoolClassList }: MainProps) {
  // const { isOpen, onToggle } = useDisclosure() // REMOVIDO: Este era o bug

  // ADICIONADO: Estado para controlar qual card está aberto
  const [openTurmaDocs, setOpenTurmaDocs] = useState<string | null>(null);

  const [selectedTurma, setSelectedTurma] = useState<Turma | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pixData, setPixData] = useState<PixData | null>(null); // State para guardar os dados do PIX
  const [isPixModalOpen, setIsPixModalOpen] = useState(false); // State para controlar o modal
  const toast = useToast();
  const router = useRouter();

  // --- LÓGICA DO PORTÃO DE SENHA ---
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Começa checando

  // 1. Verifica no sessionStorage se já está autenticado
  useEffect(() => {
    const storedPass = sessionStorage.getItem('dev_pass');
    if (storedPass === 'cursinho2025') {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false); // Termina a checagem
  }, []);

  // 2. Função para tentar autenticar
  const handlePasswordSubmit = () => {
    if (password === 'cursinho2025') {
      sessionStorage.setItem('dev_pass', 'cursinho2025');
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };
  // --- FIM DA LÓGICA DO PORTÃO ---

  // O estado do pagamento agora vive no componente PAI
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('PENDENTE');

  const handleSelectTurma = (turma: Turma) => {
    setSelectedTurma(turma);
  };

  const handleBack = () => {
    setSelectedTurma(null);
  };

  // ADICIONADO: Função de toggle específica para os documentos
  const handleToggleDocs = (turmaId: string) => {
    // Se o ID clicado for o mesmo que já está aberto, fecha (seta para null).
    // Se for um ID diferente, abre o novo (seta para o turmaId).
    setOpenTurmaDocs(prevId => (prevId === turmaId ? null : turmaId));
  };

  const handleStudentSubmit = async (studentData: FieldValues) => {

    if (!selectedTurma) return;

    setIsSubmitting(true);

    try {
      delete studentData.confirmacaoEmail;
      const paymentMethod = studentData.paymentMethod;

      const payload = {
        ...studentData,
        schoolClassID: selectedTurma.id,
        price: (selectedTurma.subscriptions.price / 100).toFixed(2),
      };

      if (paymentMethod === 'credit_card') {
        // --- FLUXO CARTÃO (STRIPE) ---
        console.log("Iniciando checkout com cartão...");
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/inscriptions/checkout`, {
          ...payload,
          // O Stripe espera 'value' em centavos e como número, não string fixa
          value: selectedTurma.subscriptions.price,
          interval: 'one_time', // Inscrição é sempre one_time
          cycles: 1
        });

        if (response.data.url) {
          // Redireciona para o Stripe
          window.location.href = response.data.url;
          return; // Encerra a função aqui para não abrir o modal de PIX
        }

      } else {
        // --- FLUXO PIX (SANTANDER) ---
        console.log("Iniciando pagamento via PIX...");
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/inscriptions`, payload);

        setPixData(response.data);
        setIsPixModalOpen(true);
        setPaymentStatus('PENDENTE');
      }

    } catch (error: any) {
      let errorMessage = "Não foi possível processar a inscrição. Tente novamente mais tarde.";
      let errorTitle = 'Erro na Inscrição.';

      if (error.response?.status === 409) {
        errorTitle = 'Inscrição Duplicada';
        errorMessage = error.response.data.details || "Você já está inscrito para esta turma.";
      } else {
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
      // Se não for redirecionamento de cartão, libera o botão
      if (studentData.paymentMethod !== 'credit_card') {
        setIsSubmitting(false);
      }
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

  // --- RENDERIZAÇÃO DO PORTÃO DE SENHA ---

  // 3. Mostra um spinner enquanto verifica o sessionStorage
  if (isCheckingAuth) {
    return (
      <Center h="80vh">
        <Spinner boxSize="md" />
      </Center>
    );
  }

  // 4. Se não estiver autenticado, mostra o Modal de Senha
  if (!isAuthenticated) {
    return (
      <Modal isOpen={true} onClose={() => { }} isCentered closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalHeader>Acesso Restrito</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Text>Esta é uma página de desenvolvimento. Por favor, insira a senha para continuar.</Text>
              <FormControl isInvalid={authError}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                />
                {authError && <FormErrorMessage>Senha incorreta.</FormErrorMessage>}
              </FormControl>
              <Button colorScheme="blue" onClick={handlePasswordSubmit} w="100%">
                Entrar
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
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
            isSubmitting={isSubmitting}
          />
        ) : (
          <Flex flexDir={'column'}>
            <Image
              src={'img/logos_turmas.png'}
              maxW={80}
              mx='auto'
            />
            <Text fontSize={{ base: 32, lg: 48 }} fontWeight="bold" textAlign="center">
              <Highlight query='turmas' styles={{ bg: 'transparent', color: 'yellow.500' }}>
                Nossas turmas
              </Highlight>
            </Text>
            <Box bgColor='blue.800' h='2px' w={{ base: '300px', lg: '600px' }}></Box>
            <Text fontSize={{ base: 14, lg: 16 }} w={{ base: '300px', lg: '800px' }} textAlign='center' mt={4}>
              As aulas são ministradas na Faculdade de Economia, Administração, Contabilidade e Atuária da USP (FEA USP), onde também se encontra a nossa coordenação. Nosso ensino, porém, não é direcionado apenas para estes cursos. Preparamos nossos alunos para prestar os principais vestibulares paulistas e o ENEM, para qualquer curso que ele desejar.
            </Text>

            <Flex wrap="wrap" justifyContent="center" alignItems="stretch" gap={8} mt={8}>
              {schoolClassList.map((turma) => {

                if (turma.subscriptions.status !== 'Aberto') return null; // Apenas mostra turmas abertas
                return (

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
                      <Tag size='lg' variant='solid' colorScheme={
                        turma.subscriptions.status === 'Aberto' ? 'green' : turma.subscriptions.status === 'Fechado' ? 'red' : 'gray'
                      }>
                        Inscrições {turma.subscriptions.status === 'Aberto' ? 'abertas!' : turma.subscriptions.status === 'Fechado' ? 'encerradas!' : 'em breve!'}
                      </Tag>
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
                        {/* {turma.documents && turma.documents.length > 0 &&
                        <Flex
                          alignItems='center'
                          ml={-1}
                          justifyContent='start'
                          gap={2}
                          py={1}
                          cursor='pointer'
                          onClick={() => handleToggleDocs(turma.id)} // CORRIGIDO
                        >
                          <Book size={24} color={'#3b3a65'} weight="duotone" />
                          <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Informações do processo seletivo:</Text>
                        </Flex>
                      } */}
                      </VStack>
                      {turma.documents && turma.documents.length > 0 &&
                        // <Collapse in={openTurmaDocs === turma.id} animateOpacity> {/* CORRIGIDO */}
                        <Box
                          bg='gray.50'
                          borderBottomRadius='2xl'
                        >
                          {/* CORRIGIDO */}
                          {/* <Button size='sm' onClick={() => handleToggleDocs(turma.id)} marginLeft='88%'>x</Button> */}
                          {turma.documents.map(document => {
                            if (document.title.toLowerCase().includes('entrevista')) { return '' }
                            return (
                              <Flex
                                as={Link}
                                href={document.downloadLink}
                                alignItems='center'
                                justifyContent='start'
                                gap={2}
                                py={2}
                                cursor='pointer'
                                key={document.docsID}
                              >
                                <Book size={20} color={'#3b3a65'} weight="duotone" style={{ flexShrink: '0' }} />
                                <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>{document.title}</Text>
                              </Flex>
                            )
                          }
                          )}
                        </Box>
                        // </Collapse>
                      }
                      <Box flex="1" /> {/* Empurra o conteúdo abaixo para o fundo */}
                      <Flex justify="space-between" align="center" flexDir={'column'} gap={4} mt={4}>
                        <Text fontWeight="bold" fontSize="lg">
                          Valor: {" "}
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(turma.subscriptions.price / 100)}
                        </Text>

                        <Button
                          rightIcon={<ArrowForwardIcon />}
                          colorScheme="blue"
                          isDisabled={turma.subscriptions.status !== 'Aberto'}
                          w='100%'
                          onClick={() => handleSelectTurma(turma)}
                        >
                          Inscrever-se
                        </Button>
                      </Flex>

                    </VStack>
                  </Box>
                )
              })}
            </Flex>
          </Flex>
        )}
      </Flex>
      {/* Finalmente, renderizamos o modal aqui */}
      <PixDisplayModal
        isOpen={isPixModalOpen}
        onClose={() => setIsPixModalOpen(false)}
        pixData={pixData}
        status={paymentStatus} // Passamos o status como prop
      />
    </Box >
  );
}