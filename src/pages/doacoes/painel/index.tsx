import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  Box, Container, VStack, Heading, Text, Card, CardBody, Badge, Button,
  useToast, Center, Spinner, AlertDialog, AlertDialogBody, AlertDialogFooter,
  AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure,
  SimpleGrid, Divider, Flex
} from '@chakra-ui/react';
import { WarningCircle, CheckCircle, XCircle, Calendar, CurrencyDollar } from '@phosphor-icons/react';
import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Subscription {
    id: string; 
    externalId: string;
    status: string;
    value: number;
    nextDueDate: string;
    description: string;
}

export default function PainelDoador() {
  const router = useRouter();
  const { token } = router.query;
  const toast = useToast();
  
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [userName, setUserName] = useState(''); // Estado para o nome
  const [error, setError] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [canceling, setCanceling] = useState(false);
  const [idToCancel, setIdToCancel] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    if (!token) {
        setError('Link inválido ou expirado.');
        setLoading(false);
        return;
    }

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/donates/portal/info`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
        // Verifica o novo formato da resposta { userName, subscriptions }
        if (res.data.subscriptions) {
            setSubscriptions(res.data.subscriptions);
            setUserName(res.data.userName);
        } else if (Array.isArray(res.data)) {
            // Fallback para formato antigo (apenas array)
            setSubscriptions(res.data);
        } else {
             // Fallback para objeto único antigo
            setSubscriptions([res.data]); 
        }
    })
    .catch((err) => {
        console.error(err);
        setError('Não foi possível carregar os dados. O link pode ter expirado.');
    })
    .finally(() => setLoading(false));

  }, [router.isReady, token]);

  const confirmCancel = (id: string) => {
      setIdToCancel(id);
      onOpen();
  }

  const handleCancel = async () => {
      if (!idToCancel) return;
      setCanceling(true);
      try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/donates/portal/cancel`, 
          { donationId: idToCancel }, 
          {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          toast({ title: 'Assinatura cancelada com sucesso.', status: 'success' });
          
          setSubscriptions(prev => prev.map(sub => 
              sub.id === idToCancel ? { ...sub, status: 'CANCELLED' } : sub
          ));
          
          onClose();
      } catch (err) {
          toast({ title: 'Erro ao cancelar. Tente novamente.', status: 'error' });
      } finally {
          setCanceling(false);
          setIdToCancel(null);
      }
  };

  const getStatusBadge = (status: string) => {
      const s = status.toUpperCase();
      if (s === 'ACTIVE') return <Badge colorScheme="green" px={2} borderRadius="full">Ativa</Badge>;
      if (s === 'CANCELLED' || s === 'DELETED') return <Badge colorScheme="red" px={2} borderRadius="full">Cancelada</Badge>;
      if (s === 'OVERDUE') return <Badge colorScheme="orange" px={2} borderRadius="full">Atrasada</Badge>;
      return <Badge px={2} borderRadius="full">{status}</Badge>;
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Container maxW="container.md" py={12}>
        <VStack spacing={8} align="stretch">
            <Box textAlign="center">
                <Heading size="lg" color="blue.800">Painel do Doador</Heading>
                
                {/* Exibição do Nome */}
                {userName && (
                    <Text fontSize="xl" mt={2} color="gray.700">
                        Olá, <strong>{userName}</strong>
                    </Text>
                )}
                
                <Text color="gray.500" fontSize="sm" mt={1}>Gerencie suas doações recorrentes</Text>
            </Box>

            {loading ? (
                <Center h="200px"><Spinner size="xl" color="blue.500" /></Center>
            ) : error ? (
                <Card bg="white"><CardBody textAlign="center" color="red.500"><WarningCircle size={32} style={{margin:'0 auto 10px'}}/>{error}</CardBody></Card>
            ) : subscriptions.length === 0 ? (
                 <Card bg="white">
                    <CardBody textAlign="center" py={10}>
                        <Text color="gray.500">Nenhuma assinatura ativa encontrada para este e-mail.</Text>
                    </CardBody>
                 </Card>
            ) : (
                <VStack spacing={4}>
                    {subscriptions.map(sub => (
                        <Card key={sub.id} bg="white" borderRadius="xl" boxShadow="sm" w="100%" border="1px solid" borderColor="gray.100">
                            <CardBody>
                                <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
                                    <VStack align="start" spacing={0}>
                                        <Text fontSize="sm" color="gray.500" fontWeight="bold" textTransform="uppercase">Descrição</Text>
                                        <Text fontSize="lg" fontWeight="semibold" color="blue.900">{sub.description}</Text>
                                    </VStack>
                                    {getStatusBadge(sub.status)}
                                </Flex>
                                
                                <Divider mb={4} />

                                <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                                    <Box>
                                        <Flex align="center" gap={2} color="gray.500" mb={1}>
                                            <CurrencyDollar size={18} />
                                            <Text fontSize="sm">Valor Mensal</Text>
                                        </Flex>
                                        <Text fontSize="xl" fontWeight="bold">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sub.value)}
                                        </Text>
                                    </Box>

                                    <Box>
                                        <Flex align="center" gap={2} color="gray.500" mb={1}>
                                            <Calendar size={18} />
                                            <Text fontSize="sm">Próxima Cobrança</Text>
                                        </Flex>
                                        <Text fontSize="lg">
                                            {sub.status === 'ACTIVE' && sub.nextDueDate
                                                ? new Date(sub.nextDueDate).toLocaleDateString('pt-BR') 
                                                : '-'}
                                        </Text>
                                    </Box>
                                </SimpleGrid>

                                {(sub.status === 'ACTIVE' || sub.status === 'OVERDUE') && (
                                    <Box mt={6} pt={4} borderTop="1px dashed" borderColor="gray.200">
                                        <Button 
                                            size="sm" 
                                            colorScheme="red" 
                                            variant="ghost" 
                                            onClick={() => confirmCancel(sub.id)} 
                                            leftIcon={<XCircle size={18} />}
                                        >
                                            Cancelar esta assinatura
                                        </Button>
                                    </Box>
                                )}
                            </CardBody>
                        </Card>
                    ))}
                </VStack>
            )}
        </VStack>

        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">Cancelar Doação</AlertDialogHeader>
                <AlertDialogBody>
                    Tem certeza que deseja cancelar sua doação recorrente? 
                    <br/><br/>
                    Esta ação encerrará as cobranças futuras imediatamente.
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>Voltar</Button>
                    <Button colorScheme="red" onClick={handleCancel} ml={3} isLoading={canceling}>
                        Confirmar Cancelamento
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>

      </Container>
    </Box>
  );
}