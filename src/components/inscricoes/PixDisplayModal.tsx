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
  Heading
} from '@chakra-ui/react';
import { QRCodeSVG } from 'qrcode.react';

// A lógica de polling e redirecionamento foi MOVIDA para o 'Main.tsx'

interface PixData {
  qrCodePayload: string; // Este é o EMV (Copia e Cola)
  copiaECola: string;
  valor: string;
  txid: string;
}

type PaymentStatus = 'IDLE' | 'PENDENTE' | 'CONCLUIDA' | 'ERRO';

interface PixDisplayModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixData: PixData | null;
  status: PaymentStatus; // Recebe o status como prop
}

export function PixDisplayModal({ isOpen, onClose, pixData, status }: PixDisplayModalProps) {
  const toast = useToast();

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

  if (!pixData) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      isCentered 
      size="md" 
      closeOnOverlayClick={false} // Impede de fechar clicando fora
      closeOnEsc={false} // Impede de fechar com a tecla ESC
    >
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader textAlign="center">Finalize sua Inscrição</ModalHeader>
        {/* Só permite fechar se o pagamento ainda estiver pendente */}
        <ModalCloseButton isDisabled={status !== 'PENDENTE'} />
        <ModalBody>
          
          {/* TELA DE SUCESSO */}
          {status === 'CONCLUIDA' ? (
            <VStack spacing={6} my={8}>
                <Spinner size="xl" color="green.500" thickness="4px" />
                <Heading as="h3" size="lg" color="green.500">Pagamento Confirmado!</Heading>
                <Text textAlign="center">Sua inscrição foi recebida. Você será redirecionado em instantes...</Text>
            </VStack>
          ) : (
            
            /* TELA DE PAGAMENTO (PENDENTE) */
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

              <VStack w="100%" spacing={1} pt={4}>
                 <Spinner size="sm" />
                 <Text fontSize="sm" color="gray.500">
                    Aguardando confirmação de pagamento...
                 </Text>
                 <Text fontSize="xs" color="gray.400" textAlign="center">
                    (Você pode fechar esta janela, a confirmação continua em segundo plano)
                 </Text>
              </VStack>

            </VStack>
          )}

        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

