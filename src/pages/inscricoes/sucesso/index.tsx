import React from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

import {
    Box,
    Flex,
    VStack,
    Heading,
    Text,
    Button,
    Icon,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { Clipboard } from '@phosphor-icons/react';
import { House } from 'phosphor-react';

const SucessoInscricao: NextPage = () => {
    const router = useRouter();
    const { nome, id } = router.query;

    const bg = useColorModeValue('gray.50', 'gray.800');
    const cardBg = useColorModeValue('white', 'gray.700');

    return (
        <Flex minH="100vh" align="center" justify="center" bg={bg} p={4}>
            <Box
                maxW="720px"
                w="full"
                bg={cardBg}
                rounded="lg"
                shadow="lg"
                p={{ base: 6, md: 10 }}
                textAlign="center"
            >
                <VStack spacing={6}>
                    <Icon
                        as={CheckCircleIcon}
                        boxSize={{ base: 16, md: 20 }}
                        color="green.400"
                        aria-hidden
                    />

                    <Heading as="h1" size="lg">
                        Inscrição realizada com sucesso!
                    </Heading>

                    <Text fontSize="md" color="muted">
                        {nome ? (
                            <>
                                Obrigado, <strong>{String(nome)}</strong>. Sua inscrição foi confirmada.
                            </>
                        ) : (
                            'Sua inscrição foi processada com sucesso.'
                        )}
                    </Text>

                    {id && (
                        <Box>
                            <Text fontSize="sm" color="gray.500">
                                Código da inscrição:
                            </Text>
                            <Text fontWeight="bold" mt={1}>
                                {String(id)}
                            </Text>
                        </Box>
                    )}

                    <Text fontSize="sm" color="gray.500" mt={2}>
                        Obrigado por se inscrever! Fique atento(a) ao seu e-mail, pois
                        entraremos em contato por lá para agendar a entrevista e informar os
                        próximos passos do processo seletivo.
                    </Text>
                </VStack>
            </Box>
        </Flex>
    );
};

export default SucessoInscricao;