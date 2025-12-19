import { Box, Button, Center, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { CheckCircle, ArrowRight } from "phosphor-react";
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { DonationFooter } from "@/components/Footer/donation";

export default function DoacaoSucesso() {
    return (
        <>
            <Head>
               Doação Confirmada | Cursinho FEA USP
            </Head>

            <Header />

            <Flex
                minH="60vh"
                align="center"
                justify="center"
                bg="gray.50"
                px={4}
                py={20}
            >
                <Box
                    bg="white"
                    p={{ base: 8, md: 12 }}
                    borderRadius="2xl"
                    boxShadow="xl"
                    textAlign="center"
                    maxW="600px"
                    w="100%"
                >
                    <VStack spacing={6}>
                        <Icon as={CheckCircle} w={24} h={24} color="green.500" weight="fill" />

                        <Heading as="h1" size="xl" color="blue.800">
                            Muito obrigado!
                        </Heading>

                        <Text fontSize="lg" color="gray.600">
                            Sua doação foi processada com sucesso.
                        </Text>

                        <Text color="gray.500">
                            Graças ao seu apoio, continuamos transformando vidas através da educação.
                            Você receberá um e-mail de confirmação em breve.
                        </Text>

                        <Box pt={4} w="100%">
                            <Button
                                as={Link}
                                href="/"
                                colorScheme="blue"
                                size="lg"
                                rightIcon={<ArrowRight />}
                                w="full"
                                borderRadius="xl"
                            >
                                Voltar para o Início
                            </Button>
                        </Box>
                    </VStack>
                </Box>
            </Flex>

            <Footer mt={{ base: 64, lg: 64 }}>
                <DonationFooter />
            </Footer>
        </>
    );
}