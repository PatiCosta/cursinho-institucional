import { Box, Flex, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowCircleDown, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "phosphor-react";
import React from "react";

interface footerProps {
    children: React.ReactNode;
    marginTop: number;
}

export default function Footer({children, marginTop}: footerProps) {
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

    return (
        <Box bgImage={'static/img/footer-background.png'} mt={marginTop} position='relative' px={{base: 0, lg: 0}}>
            {children}
            <Flex justifyContent='space-between' alignItems='start' direction={{base: 'column', lg: 'row'}} px={{base: 4, lg: 24}}>
                <Flex mt={{base: '50%', lg: '20%'}} alignItems={{base: 'center', lg: 'start'}} direction='column' w='100%' justifyContent='center'>
                    <Flex gap={4} alignItems='center' mb={4} justifyContent='center' w={{lg: '500px'}}>
                        <Text fontSize={{base: 28, lg: 40}} color='gray.800' fontWeight='light' textAlign='center'>
                            <Highlight query='encontre' styles={{bg: 'transparent', fontWeight: 'bold' }}>
                                Nos encontre aqui
                            </Highlight>
                        </Text>
                        <ArrowCircleDown size={32} color="#023047" weight="fill" />
                    </Flex>
                    <Box
                        w={{base: '90vw', lg: '500px'}}
                        h={{base: '300px', lg: '400px'}}
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.6385060957161!2d-46.72989269187177!3d-23.558492546171053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56158eccf83b%3A0x76f2fe97090f63f3!2sAv.%20Prof.%20Luciano%20Gualberto%2C%20908%20-%20Butant%C3%A3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005508-010!5e0!3m2!1spt-BR!2sbr!4v1678147179004!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="100%" 
                            loading="lazy"
                        >
                        </iframe>
                    </Box>
                    <Text textAlign='center' fontSize='16px' mt={4} w={{base: '90vw', lg: '500px'}}>
                        Av. Prof. Luciano Gualberto, 908 - Butantã, São Paulo - SP, 05508-010, Brasil
                    </Text>
                </Flex>
                <Flex mt={{base: 12, lg: '20%'}} alignItems='center' direction='column'>
                    <Text fontSize={{base: 28, lg: 40}} color='gray.800' fontWeight='light' textAlign='center' mb={6}>
                        <Highlight query='Fale' styles={{bg: 'transparent', fontWeight: 'bold' }}>
                            Fale conosco!
                        </Highlight>
                    </Text>
                    <Flex alignItems='center' justifyContent='space-between' gap={24}>
                        <Box>
                            <Text fontWeight='bold' fontSize='20px'>Divulgação e comunicação</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={isLg ? 32 : 24} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize={{base: 14, lg: 16}}>cursinhofeausp.marketing@gmail.com</Text>
                            </Flex>
                            <Text fontWeight='bold' fontSize='20px' mt={8}>Parcerias</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={isLg ? 32 : 24} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize={{base: 14, lg: 16}}>captacao.cursinho@gmail.com</Text>
                            </Flex>
                            <Text fontWeight='bold' fontSize='20px' mt={8}>Processos Seletivos</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={isLg ? 32 : 24} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize={{base: 14, lg: 16}}>ps.cfeausp@gmail.com</Text>
                            </Flex>
                        </Box>
                        <Flex direction='column' alignItems='center' justifyContent='center' gap={4} display={{base: 'none', lg: 'flex'}}>
                            <FacebookLogo size={48} color="#023047" weight="duotone" />
                            <InstagramLogo size={48} color="#023047" weight="duotone" />
                            <LinkedinLogo size={48} color="#023047" weight="duotone" />
                            <YoutubeLogo size={48} color="#023047" weight="duotone" />
                        </Flex>
                    </Flex>
                    <Flex 
                        alignItems='center' 
                        justifyContent='center' 
                        gap={4}
                        mt={8}
                        display={{base: 'flex', lg: 'none'}}
                    >
                        <FacebookLogo size={40} color="#023047" weight="duotone" />
                        <InstagramLogo size={40} color="#023047" weight="duotone" />
                        <LinkedinLogo size={40} color="#023047" weight="duotone" />
                        <YoutubeLogo size={40} color="#023047" weight="duotone" />
                    </Flex>
                    <Text 
                        fontWeight='light' 
                        fontSize={{base: 12, lg: 14}}
                        mt={{base: 8, lg: 32}} 
                        w={{base: '90vw', lg: '500px'}}
                    >
                        O Cursinho FEAUSP não possui nenhuma relação institucional com a Universidade de São Paulo (USP).
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}