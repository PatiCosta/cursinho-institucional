import { Box, Button, Flex, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { CheckCircle, ArrowRight, Student } from "@phosphor-icons/react";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import Head from "next/head";

export default function InscricaoSucesso() {
    return (
        <>
            <Head>
                Inscrição Confirmada | Cursinho FEA USP
            </Head>
            
            <Header />

            <Flex 
                minH="70vh" 
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
                    borderTop="8px solid"
                    borderColor="green.500"
                >
                    <VStack spacing={6}>
                        <Box position="relative">
                            <Icon as={Student} w={24} h={24} color="blue.500" weight="duotone" />
                            <Icon 
                                as={CheckCircle} 
                                w={10} h={10} 
                                color="green.500" 
                                weight="fill" 
                                position="absolute" 
                                bottom={0} 
                                right={-2} 
                                bg="white" 
                                borderRadius="full" 
                            />
                        </Box>
                        
                        <Heading as="h1" size="xl" color="green.600">
                            Inscrição Confirmada!
                        </Heading>
                        
                        <Text fontSize="lg" fontWeight="medium" color="gray.700">
                            Seu pagamento foi recebido com sucesso.
                        </Text>
                        
                        <Text color="gray.500" fontSize="md">
                            Você receberá um e-mail com o seu <strong>número de matrícula</strong> e as próximas instruções sobre o processo seletivo (entrevistas e documentos).
                        </Text>
                        
                        <Box bg="green.50" p={4} borderRadius="lg" w="100%">
                            <Text fontSize="sm" color="green.800" fontWeight="bold">
                                Fique atento ao seu e-mail e WhatsApp!
                            </Text>
                            <Text fontSize="xs" color="green.700" mt={1}>
                                Nossa equipe entrará em contato em breve.
                            </Text>
                        </Box>

                        <Box pt={4} w="100%">
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <Button 
                                    colorScheme="blue" 
                                    size="lg" 
                                    rightIcon={<ArrowRight />}
                                    w="full"
                                    borderRadius="xl"
                                >
                                    Voltar para o Início
                                </Button>
                            </Link>
                        </Box>
                    </VStack>
                </Box>
            </Flex>

        </>
    );
}