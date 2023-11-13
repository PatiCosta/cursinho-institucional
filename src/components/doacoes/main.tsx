import { Box, Highlight, Text } from "@chakra-ui/react";

export function Main() {
    return (
        <Box 
            py={4} 
            pl={{base: 0, lg: 12}} 
            pr={{base: 0, lg: 0}}
            minH='86vh' 
            bgImage={'img/doacao_fundo.png' }
            bgPosition='center' 
            bgSize='cover' 
            bgRepeat='no-repeat'
        >
            <Box
               w={{base: '90vw', lg: '35vw'}} 
               textAlign={{base: 'center', sm: 'center', lg: 'start'}} 
               bgColor='#f7fafc7a'
               px={8}
               py={8}
               borderRadius='2xl'
               mx={{base: 'auto', lg: 0}}
               ml={{base: 'auto', lg: 6}}
            >
                <Text 
                    fontWeight='semibold' 
                    fontSize={{base: 20, sm: 20, lg: 40}} 
                    color='blue.800'
                >
                    <Highlight query={['ajude', 'voarem!']} styles={{bg: 'transparent', fontWeight: 'extrabold', color: 'blue.800' }}>
                        Ajude os nossos alunos a voarem!
                    </Highlight>
                </Text>

                <Text 
                    fontSize={{base: 14, sm: 14, lg: 18}} 
                    mt={{base: 4, sm: 4, lg: 8}} 
                >
                    Você sabia que a sua doação fará a diferença na vida de nossos alunos diretamente? Toda a renda advinda desta aba constituirá um Fundo para financiar o Auxílio Transporte dos nossos alunos. Atualmente, beneficiamos um número pequeno de estudantes, porém, a demanda chega a ser 5x maior. E aí, bora ajudar quem sonha em entrar em uma universidade?
                </Text>
            </Box>
        </Box>
    )
}