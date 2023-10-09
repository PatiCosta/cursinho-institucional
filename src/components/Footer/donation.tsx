import { Box, Button, Flex, Highlight, Image, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowCircleDown, ArrowCircleUpRight, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

export function DonationFooter() {
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

    return (
        <Flex 
            bgColor='yellow.400' 
            borderRadius='24px' 
            w={{base: '90vw', lg: '60vw'}} 
            position='absolute' 
            mx={{base: '5vw', lg: '20vw'}} 
            top={{base: '-20%', lg: '-25%'}} 
            py={{base: 8, lg: 12}}
            px={{base: 4, lg: 12}} 
            gap={4}
        >
            {isLg && <Image src='static/img/donate.png' maxH={60} my='auto' />}
            <Box textAlign={{base: 'center', lg: 'start'}}>
                <Text fontSize={{base: 28, lg: 32}} color='gray.800' fontWeight='light'>
                    <Highlight query='voarem!' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                    Ajude os nossos alunos a voarem!
                    </Highlight>
                </Text>
                <Text fontSize={{base: 12, lg: 14}} mt={4}>
                Você sabia que a sua doação fará a diferença na vida de nossos alunos diretamente? Toda a renda advinda desta aba constituirá um Fundo para financiar o Auxílio Transporte dos nossos alunos. Atualmente, beneficiamos um número pequeno de estudantes, porém, a demanda chega a ser 5x maior. E aí, bora ajudar quem sonha em entrar em uma universidade?

                </Text>
                <Button 
                    mt={8} 
                    bgColor='gray.50' 
                    borderRadius='2xl' 
                    size={{base: 'sm', lg: 'lg'}} 
                    display='flex' 
                    alignItems='center' 
                    gap={2} 
                    fontSize='24px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                    mx={{base: 'auto', lg: 0}}
                >
                    <Text>Saiba mais</Text>
                    <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                </Button>
            </Box>
        </Flex>
    )
}