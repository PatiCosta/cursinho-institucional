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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Badge,
    Card,
    CardBody,
    Icon,
    Center,
    Spinner,
    InputGroup,
    InputRightElement,
    IconButton,
    Flex,
    TableContainer,
    Link,
    Divider,
    Skeleton,
} from '@chakra-ui/react';
import {
    MagnifyingGlass,
    IdentificationCard,
    CalendarBlank,
    CheckCircle,
    Clock,
    WarningCircle,
    Receipt
} from '@phosphor-icons/react';
import axios from 'axios';
import Header from '@/components/Header'; // Ajuste o caminho se necessário (ex: ../../components/Header)
import Footer from '@/components/Footer';

interface Subscription {
    schoolClassID: string;
    productName: string;
    paymentStatus: 'PENDENTE' | 'CONCLUIDA' | 'ERRO';
    matriculaID: string | null;
    paymentDate: string | null;
    valuePaid: number;
}

interface TrackingData {
    name: string;
    email: string;
    subscriptions: Subscription[];
}

export default function AcompanharInscricao() {
    const [identifier, setIdentifier] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<TrackingData | null>(null);
    const toast = useToast();

    const handleTrack = async () => {
        if (!identifier) {
            toast({
                title: 'Campo vazio',
                description: 'Por favor, informe seu CPF ou E-mail.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);
        setData(null);

        try {
            // Remove caracteres especiais se for CPF para facilitar a busca no backend
            const cleanIdentifier = identifier.includes('@') ? identifier : identifier.replace(/\D/g, '');

            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/inscriptions/track/${cleanIdentifier}`);
            setData(response.data);
        } catch (error: any) {
            const message = error.response?.status === 404
                ? 'Nenhuma inscrição encontrada com os dados informados.'
                : 'Ocorreu um erro ao buscar seus dados. Tente novamente mais tarde.';

            toast({
                title: 'Busca sem resultados',
                description: message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'CONCLUIDA':
                return (
                    <Badge colorScheme="green" p={1} borderRadius="md" display="flex" alignItems="center" w="fit-content" gap={1}>
                        <Icon as={CheckCircle} weight="fill" /> PAGO
                    </Badge>
                );
            case 'PENDENTE':
                return (
                    <Badge colorScheme="yellow" p={1} borderRadius="md" display="flex" alignItems="center" w="fit-content" gap={1}>
                        <Icon as={Clock} weight="fill" /> AGUARDANDO
                    </Badge>
                );
            default:
                return (
                    <Badge colorScheme="red" p={1} borderRadius="md" display="flex" alignItems="center" w="fit-content" gap={1}>
                        <Icon as={WarningCircle} weight="fill" /> ERRO
                    </Badge>
                );
        }
    };

    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="gray.50">
            <Header />

            <Container maxW="container.lg" py={20} flex="1">
                <VStack spacing={8} align="stretch">
                    <Box textAlign="center">
                        <Heading as="h1" size="xl" mb={2} color="blue.800">
                            Acompanhar Inscrição
                        </Heading>
                        <Text color="gray.600" fontSize="lg">
                            Consulte o status das suas inscrições informando seu CPF, E-mail ou o código da transação.
                        </Text>
                    </Box>

                    {/* Seção de Busca */}
                    <Card variant="outline" boxShadow="sm" bg="white">
                        <CardBody>
                            <VStack spacing={6}>
                                <FormControl>
                                    <FormLabel fontWeight="bold" fontSize="md">Digite seu CPF ou E-mail</FormLabel>
                                    <InputGroup size="lg">
                                        <Input
                                            placeholder="Digite seu CPF ou E-mail"
                                            value={identifier}
                                            onChange={(e) => setIdentifier(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                                            bg="white"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <IconButton
                                                h="1.75rem"
                                                size="sm"
                                                aria-label="Buscar"
                                                icon={<Icon as={MagnifyingGlass} weight="bold" />}
                                                colorScheme="blue"
                                                onClick={handleTrack}
                                                isLoading={isLoading}
                                            />
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    w="100%"
                                    colorScheme="blue"
                                    size="lg"
                                    onClick={handleTrack}
                                    isLoading={isLoading}
                                    leftIcon={<Icon as={MagnifyingGlass} weight="bold" />}
                                    borderRadius="md"
                                >
                                    Consultar Inscrições
                                </Button>
                            </VStack>
                        </CardBody>
                    </Card>

                    {/* Resultados */}
                    {isLoading && (
                        <Center py={10}>
                            <Spinner size="xl" color="blue.500" thickness='4px' />
                        </Center>
                    )}

                    {data && (
                        <VStack spacing={6} align="stretch">
                            <Card variant="filled" bg="blue.50" border="1px" borderColor="blue.100">
                                <CardBody>
                                    <Text fontSize="xs" fontWeight="bold" color="blue.600" textTransform="uppercase" letterSpacing="wide">
                                        Inscrito
                                    </Text>
                                    <Heading size="md" color="gray.800" mt={1}>{data.name}</Heading>
                                    <Text fontSize="md" color="gray.600">{data.email}</Text>
                                </CardBody>
                            </Card>

                            <Flex alignItems="center" justifyContent="space-between" mt={4}>
                                <Heading size="md" color="gray.700">Histórico de Inscrições</Heading>
                                <Badge colorScheme="blue" borderRadius="full" px={3} py={1}>
                                    {data.subscriptions.length} {data.subscriptions.length === 1 ? 'item' : 'itens'}
                                </Badge>
                            </Flex>

                            <Card variant="outline" boxShadow="sm" overflow="hidden">
                                <TableContainer>
                                    <Table variant="simple">
                                        <Thead bg="gray.50">
                                            <Tr>
                                                <Th>Turma</Th>
                                                <Th>Status</Th>
                                                <Th>Matrícula</Th>
                                                <Th>Data Pagto</Th>
                                                <Th isNumeric>Valor</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data.subscriptions.map((sub) => (
                                                <Tr key={sub.schoolClassID} _hover={{ bg: 'gray.50' }}>
                                                    <Td fontWeight="semibold" color="gray.700">{sub.productName}</Td>
                                                    <Td>{getStatusBadge(sub.paymentStatus)}</Td>
                                                    <Td>
                                                        {sub.matriculaID ? (
                                                            <Badge variant="outline" colorScheme="blue" p={1} borderRadius="md" display="flex" alignItems="center" w="fit-content" gap={1}>
                                                                <Icon as={IdentificationCard} weight="duotone" /> {sub.matriculaID}
                                                            </Badge>
                                                        ) : (
                                                            <Text fontSize="sm" color="gray.400" fontStyle="italic">Pendente</Text>
                                                        )}
                                                    </Td>
                                                    <Td fontSize="sm">
                                                        {sub.paymentDate ? (
                                                            <VStack align="start" spacing={0}>
                                                                <Flex align="center" gap={1}>
                                                                    <Icon as={CalendarBlank} color="gray.500" />
                                                                    <Text>{sub.paymentDate.split(' ')[0]}</Text>
                                                                </Flex>
                                                                <Text fontSize="xs" color="gray.500" pl={5}>{sub.paymentDate.split(' ')[1]}</Text>
                                                            </VStack>
                                                        ) : '-'}
                                                    </Td>
                                                    <Td isNumeric fontWeight="bold" color="gray.700">
                                                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sub.valuePaid/100)}
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Card>

                            <Center mt={6}>
                                <VStack spacing={2}>
                                        <Text fontSize="sm" color="gray.500" w='100%' textAlign="center">
                                            Problemas com sua inscrição?
                                        </Text>
                                    <Link href="tel:1130916491" _hover={{ textDecoration: 'none', transition: '0.3s' }} target='_blank'>
                                        <Button
                                            variant="solid"
                                            colorScheme="blue"
                                            size="sm"
                                            color={'white'}
                                            leftIcon={<Icon as={Receipt} />}
                                        >
                                            Ligue para o suporte: (11) 3091-6491
                                        </Button>
                                    </Link>
                                </VStack>
                            </Center>
                        </VStack>
                    )}
                </VStack>
            </Container>
        </Box>
    );
}