import { Box, BoxProps, Flex, Highlight, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowCircleDown, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import React from "react";

interface footerProps extends BoxProps {
    children: React.ReactNode;
}

export default function Footer({children, ...rest}: footerProps) {
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

    return (
        <Box bgImage={'img/footer-background.png'} position='relative' px={{base: 0, lg: 0}} {...rest}>
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
                            <Text fontWeight='bold' fontSize='18px' mt={8}>Processos Seletivos de Novos Alunos</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={isLg ? 32 : 24} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize={{base: 14, lg: 16}}>ps.cfeausp@gmail.com</Text>
                            </Flex>
                            <Text fontWeight='bold' fontSize='20px' mt={8}>Financeiro</Text>
                            <Flex alignItems='center' justifyContent='start' gap={2} mt={1}>
                                <Envelope size={isLg ? 32 : 24} color="#023047" weight="duotone" />
                                <Text fontWeight='light' fontSize={{base: 14, lg: 16}}>fin.cursinhofeausp@gmail.com</Text>
                            </Flex>
                        </Box>
                        <Flex direction='column' alignItems='center' justifyContent='center' gap={4} display={{base: 'none', lg: 'flex'}}>
                            <Link href='https://www.facebook.com/cursinhofeauspsp/?locale=pt_BR' isExternal><FacebookLogo size={36} color="#023047" weight="duotone" /></Link>
                            <Link href='https://www.instagram.com/cursinhofeausp/' isExternal><InstagramLogo size={36} color="#023047" weight="duotone" /></Link>
                            <Link href='https://br.linkedin.com/company/cursinho-fea-usp' isExternal><LinkedinLogo size={36} color="#023047" weight="duotone" /></Link>
                            <Link href='https://www.youtube.com/user/cursinhofeausp' isExternal><YoutubeLogo size={36} color="#023047" weight="duotone" /></Link>
                            <Link href='https://www.tiktok.com/@cursinhofeausp' isExternal><TiktokLogo size={36} color="#023047" weight="duotone" /></Link>
                            <Link href='https://twitter.com/cursinhofeausp' isExternal><TwitterLogo size={36} color="#023047" weight="duotone" /></Link>
                        </Flex>
                    </Flex>
                    <Flex 
                        alignItems='center' 
                        justifyContent='center' 
                        gap={4}
                        mt={8}
                        display={{base: 'flex', lg: 'none'}}
                    >
                        <Link href='https://www.facebook.com/cursinhofeauspsp/?locale=pt_BR' isExternal><FacebookLogo size={32} color="#023047" weight="duotone" /></Link>
                        <Link href='https://www.instagram.com/cursinhofeausp/' isExternal><InstagramLogo size={32} color="#023047" weight="duotone" /></Link>
                        <Link href='https://br.linkedin.com/company/cursinho-fea-usp' isExternal><LinkedinLogo size={32} color="#023047" weight="duotone" /></Link>
                        <Link href='https://www.youtube.com/user/cursinhofeausp' isExternal><YoutubeLogo size={32} color="#023047" weight="duotone" /></Link>
                        <Link href='https://www.tiktok.com/@cursinhofeausp' isExternal><TiktokLogo size={32} color="#023047" weight="duotone" /></Link>
                        <Link href='https://twitter.com/cursinhofeausp' isExternal><TwitterLogo size={32} color="#023047" weight="duotone" /></Link>
                    </Flex>
                    <Text 
                        fontWeight='light' 
                        fontSize={{base: 12, lg: 14}}
                        mt={{base: 8, lg: 4}} 
                        w={{base: '90vw', lg: '500px'}}
                    >
                        O Cursinho FEAUSP não possui nenhuma relação institucional com a Universidade de São Paulo (USP).
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}