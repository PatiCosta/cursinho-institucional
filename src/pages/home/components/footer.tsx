import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUpRight, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "phosphor-react";
import Lottie from "lottie-react";
import donateAnimation from "../../../animations/donate.json";

export default function Footer() {
    return (
        <Box bgImage={'static/img/footer-background.png'} h='100vh' mt={60} position='relative' px={24}>
            <Flex bgColor='yellow.400' borderRadius='24px' w='60vw' position='absolute' top='-25%' left='20%' p={12}>
                <Lottie animationData={donateAnimation} />
                <Box textAlign='start'>
                    <Text fontSize="40px" color='gray.800' fontWeight='light'>
                        <Highlight query='doar' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                            Gostaria de doar etc?
                        </Highlight>
                    </Text>
                    <Text fontSize='16px' mt={4}>
                        Algum texto motivacional sobre ajudar os estudos dos alunos necessitados Lorem Ipsum is simply dummy text ofLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                    <Button 
                        mt={12} 
                        bgColor='gray.50' 
                        borderRadius='2xl' 
                        size='lg' 
                        display='flex' 
                        alignItems='center' 
                        gap={2} 
                        fontSize='24px' 
                        fontWeight='regular'
                        _hover={{
                            opacity: 0.9
                        }}
                    >
                        <Text>Saiba mais</Text>
                        <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                    </Button>
                </Box>
            </Flex>
            <Flex justifyContent='space-between' alignItems='start'>
                <Flex mt={56} alignItems='center' direction='column'>
                    <Flex gap={4} alignItems='center' mb={4}>
                        <Text fontSize="40px" color='gray.800' fontWeight='light' textAlign='center'>
                            <Highlight query='encontre' styles={{bg: 'transparent', fontWeight: 'bold' }}>
                                Nos encontre aqui
                            </Highlight>
                        </Text>
                        <ArrowCircleDown size={32} color="#023047" weight="fill" />
                    </Flex>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.6385060957161!2d-46.72989269187177!3d-23.558492546171053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56158eccf83b%3A0x76f2fe97090f63f3!2sAv.%20Prof.%20Luciano%20Gualberto%2C%20908%20-%20Butant%C3%A3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005508-010!5e0!3m2!1spt-BR!2sbr!4v1678147179004!5m2!1spt-BR!2sbr" width="500" height="400" loading="lazy"></iframe>
                    <Text textAlign='center' fontSize='16px' mt={4} w='500px' >
                        Av. Prof. Luciano Gualberto, 908 - Butantã, São Paulo - SP, 05508-010, Brasil
                    </Text>
                </Flex>
                <Flex mt={56} alignItems='center' direction='column'>
                    <Text fontSize="40px" color='gray.800' fontWeight='light' textAlign='center' mb={6}>
                        <Highlight query='Fale' styles={{bg: 'transparent', fontWeight: 'bold' }}>
                            Fale conosco!
                        </Highlight>
                    </Text>
                    <Flex alignItems='center' justifyContent='space-between' gap={24}>
                        <Box>
                            <Text fontWeight='bold' fontSize='20px'>Divulgação e comunicação</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={32} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize='16px'>cursinhofeausp.marketing@gmail.com</Text>
                            </Flex>
                            <Text fontWeight='bold' fontSize='20px' mt={8}>Parcerias</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={32} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize='16px'>captacao.cursinho@gmail.com</Text>
                            </Flex>
                            <Text fontWeight='bold' fontSize='20px' mt={8}>Processos Seletivos</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={32} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize='16px'>ps.cfeausp@gmail.com</Text>
                            </Flex>
                        </Box>
                        <Flex direction='column' alignItems='center' justifyContent='center' gap={4}>
                            <FacebookLogo size={48} color="#023047" weight="duotone" />
                            <InstagramLogo size={48} color="#023047" weight="duotone" />
                            <LinkedinLogo size={48} color="#023047" weight="duotone" />
                            <YoutubeLogo size={48} color="#023047" weight="duotone" />
                        </Flex>
                    </Flex>
                    <Text fontWeight='light' fontSize='14px' mt={32} w='500px' >
                        O Cursinho FEAUSP não possui nenhuma relação institucional com a Universidade de São Paulo (USP).
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}