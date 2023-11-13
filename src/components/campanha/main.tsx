import { Box, Highlight, Image, Text } from "@chakra-ui/react";

export function Main() {
    return (
        <Box 
            py={4} 
            pl={{base: 4, lg: 12}} 
            pr={{base: 4, lg: 0}}
            minH='86vh' 
            position='relative' 
            bgImage={{base: 'none', lg: 'img/climb4.png' }}
            bgPosition='right' 
            bgSize='contain' 
            bgRepeat='no-repeat'
        >
            <Text 
                fontWeight='bold' 
                fontSize={{base: 20, sm: 20, lg: 40}} 
                textAlign={{base: 'center', sm: 'center', lg: 'start'}}
            >
                <Highlight query={['ajude', 'voarem!']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Nos ajude a fazer nossos alunos voarem!
                </Highlight>
            </Text>

            <Image 
                src={'img/climb4.png'} 
                ml={{base: 'auto', sm: 'auto', lg: 0}}
                mr={{base: 'auto', lg: 0}}
                display={{base: 'block', lg: 'none'}}
                maxH='30VH'
            />

            <Text 
                fontSize={{base: 14, sm: 14, lg: 16}} 
                mt={{base: 4, sm: 4, lg: 10}} 
                textAlign={{base: 'center', sm: 'center', lg: 'start'}} 
                w={{base: '90vw', lg: '30vw'}}
            >
                Desde 2019, o Cursinho FEAUSP oferece aos seus alunos auxílio para pagamento das taxas de inscrição de diversos vestibulares. Para isso realizamos campanhas com o objetivo de captar doações externas de pessoas, empresas ou entidades. A partir do montante arrecadado, oferecemos auxílio parcial ou integral para alunos que não obtiveram a isenção pelo próprio vestibular, fazendo com que o valor da taxa de inscrição não seja uma barreira para a realização do sonho de ingressar na faculdade.
            </Text>

            <Text 
                fontStyle='italic' 
                fontWeight='light' 
                fontSize={{base: 12, sm: 12, lg: 14}} 
                mt={{base: 4, sm: 4, lg: 8}} 
                textAlign={{base: 'center', sm: 'center', lg: 'start'}} 
                w={{base: '90vw', lg: '30vw'}}
            >
                Tem interesse? Fique atento aos canais institucionais para não perder a oportunidade de contribuir!
            </Text>

            <Image 
                src={'img/todos_podem_voar.png'} 
                maxH={'40px'}
                position={{base: 'relative', lg: 'absolute'}}
                bottom={{base: 0, lg: 8}}
                left={{base: 0, lg: 12}}
                ml={{base: 'auto', sm: 'auto', lg: 0}}
                mr={{base: 'auto', lg: 0}}
                mt={{base: 4, lg: 0}}
            />
        </Box>
    )
}