import { Box, Flex, Highlight, Text } from "@chakra-ui/react";
import { Bus, ChalkboardTeacher, Wallet } from "@phosphor-icons/react";

export function Objective() {
    return (
    <Flex 
        w='100vw' 
        px={{base: 6, lg: 12}} 
        py={{base: 12, lg: 24}}
        alignItems='center' 
        justifyContent='center' 
        gap={{base: 8, lg: 4}}
        direction={{base: 'column', lg: 'row'}}
        textAlign='center'
    >
        <Box
            display={{base: 'grid', lg: 'flex'}}
            gridTemplateColumns='1fr 1fr'
            alignItems='center' 
            justifyContent={{base: 'space-between', lg: 'center'}} 
            w={{base: '100%', lg: 'fit-content'}}
            gap={{base: 4, lg: 4}}
        >
            <Box textAlign='center' minW='50%'>
                <Text fontSize={{base: 24, lg: 32}} fontWeight="medium" color='blue.800'>
                    Em que suas doações
                </Text>
                <Text fontSize={{base: 24, lg: 32}} fontWeight="bold" color='yellow.400'>
                    nos ajudam?
                </Text>
            </Box>
            <Flex direction='column' alignItems='center' justifyContent='start' gap={2}>
                <Bus 
                    size={66} 
                    color="#E9C46A" 
                    weight="duotone" 
                />
                <Text fontSize={{base: 12, lg: 14}} w={{base: '80%', lg: '60%'}}>
                    Criamos um fundo para financiar o Auxílio Transporte dos nossos alunos.
                </Text>
            </Flex>
        </Box>
        <Box
            display={{base: 'grid', lg: 'flex'}}
            gridTemplateColumns='1fr 10px 1fr'
            alignItems='center' 
            justifyContent={{base: 'space-between', lg: 'center'}} 
            w={{base: '100%', lg: 'fit-content'}}
            gap={{base: 4, lg: 4}}
        >
            <Box bgColor='blue.800' w='8px' h='8px' borderRadius='100%' display={{base: 'none', lg: 'block'}} flexShrink='0' />
            <Flex direction='column' alignItems='center' justifyContent='start' gap={2}>
                <Wallet 
                    size={66} 
                    color="#E9C46A" 
                    weight="duotone" 
                />
                <Text fontSize={{base: 12, lg: 14}} w={{base: '80%', lg: '60%'}}>
                    Financiamos o pagamento das taxas de inscrição dos vestibulares prestados por nossos alunos.
                </Text>
            </Flex>
            <Box bgColor='blue.800' w='8px' h='8px' borderRadius='100%' flexShrink='0' />
            <Flex direction='column' alignItems='center' justifyContent='start' gap={2}>
                <ChalkboardTeacher 
                    size={66} 
                    color="#E9C46A" 
                    weight="duotone" 
                />
                <Text fontSize={{base: 12, lg: 14}} w={{base: '80%', lg: '60%'}}>
                    Direcionamos para o funcionamento geral da entidade, como pagamento de professores e correção de simulados.
                </Text>
            </Flex>
        </Box>
    </Flex>
    )
}