import { useState } from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    useToast,
    Card,
    CardBody,
    Icon,
    Center,
} from '@chakra-ui/react';
import { EnvelopeSimple, PaperPlaneRight } from '@phosphor-icons/react';
import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DonationFooter } from '@/components/Footer/donation';

export default function GerenciarDoacao() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleSendLink = async () => {
        if (!email) {
            toast({
                title: 'Campo vazio',
                description: 'Por favor, informe o e-mail utilizado na doação.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);

        try {
            // Chama a rota que criámos no backend
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/donates/portal`, {
                email: email
            });

            // Por segurança, mostramos sempre mensagem de sucesso (para não revelar se o e-mail existe ou não)
            toast({
                title: 'Solicitação enviada',
                description: 'Se o e-mail estiver cadastrado, você receberá um link de acesso em instantes.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });

            setEmail(''); // Limpa o campo

        } catch (error) {
            toast({
                title: 'Erro na solicitação',
                description: 'Ocorreu um erro ao processar seu pedido. Tente novamente.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
            <Header />

            <Container maxW="container.sm" py={20} flex="1">
                <VStack spacing={8} align="stretch">
                    <Box textAlign="center">
                        <Heading as="h1" size="xl" mb={2} color="blue.800">
                            Gerenciar Minhas Doações
                        </Heading>
                        <Text color="gray.600">
                            Deseja alterar seu cartão de crédito, baixar recibos ou cancelar sua doação mensal?
                            Informe seu e-mail abaixo para receber um link de acesso seguro.
                        </Text>
                    </Box>

                    <Card variant="outline" boxShadow="md" bg="white">
                        <CardBody>
                            <VStack spacing={6}>
                                <FormControl>
                                    <FormLabel fontWeight="bold">E-mail cadastrado</FormLabel>
                                    <Input
                                        placeholder="exemplo@email.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendLink()}
                                        size="lg"
                                    />
                                </FormControl>

                                <Button
                                    w="100%"
                                    colorScheme="blue"
                                    size="lg"
                                    onClick={handleSendLink}
                                    isLoading={isLoading}
                                    loadingText="Enviando..."
                                    rightIcon={<Icon as={PaperPlaneRight} weight="bold" />}
                                >
                                    Enviar Link de Acesso
                                </Button>

                                <Center>
                                    <Text fontSize="sm" color="gray.500" display="flex" alignItems="center" gap={1}>
                                        <Icon as={EnvelopeSimple} /> O link será enviado para a sua caixa de entrada.
                                    </Text>
                                </Center>
                            </VStack>
                        </CardBody>
                    </Card>
                </VStack>
            </Container>

            <Footer mt={{ base: 64, lg: 64 }}>
                <DonationFooter />
            </Footer>
        </Box>
    );
}