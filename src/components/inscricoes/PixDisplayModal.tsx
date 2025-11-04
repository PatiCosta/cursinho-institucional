import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Button,
  useToast,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  Spinner,
  CircularProgress,
  Collapse,
  Heading,
} from '@chakra-ui/react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface PixData {
  txid: string; // O txid é essencial para o polling
  qrCodePayload: string;
  copiaECola: string;
  valor: string;
}

interface PixDisplayModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixData: PixData | null;
}

// Estados do modal
enum PaymentStatus {
  PENDING, // A aguardar pagamento
  VERIFYING, // A verificar (o polling está ativo)
  SUCCESS,   // Pagamento confirmado
}

export function PixDisplayModal({ isOpen, onClose, pixData }: PixDisplayModalProps) {
  const toast = useToast();
  const [status, setStatus] = useState<PaymentStatus>(PaymentStatus.PENDING);
  const router = useRouter()
  
  // Usamos useRef para guardar o ID do intervalo e podermos limpá-lo
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = () => {
    if (pixData?.copiaECola) {
      navigator.clipboard.writeText(pixData.copiaECola);
      toast({
        title: 'Código PIX copiado!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Esta é a função que verifica o status do pagamento
  const checkPaymentStatus = async () => {
    if (!pixData) return;
    
    // Assim que começamos a verificar, mudamos o status
    if (status === PaymentStatus.PENDING) {
      setStatus(PaymentStatus.VERIFYING);
    }
    
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/inscriptions/status/${pixData.txid}`);
      
      if (response.data.status === 'CONCLUIDA') {
        console.log('Pagamento confirmado!');
        setStatus(PaymentStatus.SUCCESS);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        // Aguarda 3 segundos para o utilizador ver a mensagem de sucesso e fecha o modal
        setTimeout(() => {
          onClose();
          router.push('/inscricoes/sucesso');
        }, 3000);
      } else {
        // Se ainda estiver pendente, o loop continua...
        console.log('Pagamento ainda pendente...');
      }
    } catch (error) {
      console.error('Erro ao verificar status do PIX:', error);
      // Mesmo se der erro na verificação, não paramos o loop
    }
  };

  // Este useEffect controla o início e o fim do polling
  useEffect(() => {
    // Se o modal for aberto e tivermos os dados do PIX...
    if (isOpen && pixData) {
      // Começamos a verificar imediatamente...
      checkPaymentStatus();
      // ...e depois verificamos a cada 5 segundos.
      intervalRef.current = setInterval(checkPaymentStatus, 5000);
    }

    // Função de limpeza: é chamada quando o modal é fechado
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Para o loop
      }
      setStatus(PaymentStatus.PENDING); // Reseta o status para a próxima vez
    };
  }, [isOpen, pixData]); // O hook reage à abertura/fecho do modal

  if (!pixData) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader textAlign="center">Finalize sua Inscrição</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6}>
            
            {/* Estado de Sucesso */}
            <Collapse in={status === PaymentStatus.SUCCESS}>
              <VStack spacing={4} py={10}>
                <CheckCircleIcon w={20} h={20} color="green.500" />
                <Heading size="lg">Pagamento Confirmado!</Heading>
                <Text>Sua inscrição foi recebida. Você pode fechar esta janela.</Text>
              </VStack>
            </Collapse>

            {/* Estado de Pendente / Verificando */}
            <Collapse in={status !== PaymentStatus.SUCCESS}>
              <VStack spacing={6}>
                <Text textAlign="center">
                  Pague com PIX para confirmar. Aponte a câmera do seu celular para o QR Code ou use o código "copia e cola".
                </Text>
                
                <Center>
                  <Box border="2px solid" borderColor="gray.300" borderRadius="md" p={2}>
                    <QRCodeSVG value={pixData.qrCodePayload} size={256} />
                  </Box>
                </Center>

                <VStack w="100%" align="start">
                    <Text fontSize="sm" fontWeight="bold">Copia e Cola:</Text>
                    <InputGroup size="md">
                        <Input
                            isReadOnly
                            value={pixData.copiaECola}
                            pr="4.5rem"
                            variant="filled"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleCopy}>
                            Copiar
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </VStack>

                {/* Feedback de verificação */}
                {status === PaymentStatus.VERIFYING && (
                  <VStack pt={4}>
                    <CircularProgress isIndeterminate color="blue.300" size="24px" />
                    <Text fontSize="sm" color="gray.500">
                      Aguardando confirmação do pagamento...
                    </Text>
                  </VStack>
                )}
              </VStack>
            </Collapse>

          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

