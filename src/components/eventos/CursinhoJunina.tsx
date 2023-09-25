import { Box, Flex, Grid, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import { Money, CalendarBlank, MapPin } from "phosphor-react";
import { Carousel } from "../Carousel";
import { ReverseRowInfoLabel } from "../InfoLabel/row";

const img1 = 'static/img/cursinho_junina_1.jpeg'
const img2 = 'static/img/cursinho_junina_2.jpeg'
const img3 = 'static/img/cursinho_junina_3.jpeg'
const img4 = 'static/img/cursinho_junina_4.png'
const img5 = 'static/img/cursinho_junina_5.png'


export function CursinhoJunina() {
    const isLg = useBreakpointValue({base: false, lg: true})

    return (
        <Box pb={8} w='100vw'>
            <Flex alignItems='center' w='100%' px={12} justifyContent='center' gap={4}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center'>
                    <Highlight query='Junina' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Cursinho Junina
                    </Highlight>
                </Text>
                <Box h='2px' bgColor='blue.800' flex='1' />
            </Flex>
            <Flex py={8} alignItems='start' gap={8} direction={{base: 'column', lg: 'row'}}>
                <Box flex='1.05' pl={{base: 4, lg: 12}} pr={{base: 4, lg: 0}} borderRadius='2xl'>
                    <Carousel 
                        images={[
                            img1,
                            img2,
                            img3,
                            img4,
                            img5
                        ]} 
                    />
                </Box>
                <Box flex='.95'>
                    <ReverseRowInfoLabel 
                        title='SOBRE O EVENTO' 
                        info={
                            <>
                                <Text>Arraial do Cursinho!</Text>
                                <Text>Todo ano, nós da área de eventos, organizamos a nossa festa junina para os alunos, coordenadores e professores para que todos consigam descontrair e se sentir à vontade em um dos feriados mais marcantes do ano! </Text>
                                <Text>Realizamos jogos para descontrair, fazemos comida e fazemos uma quadrilha para que todos possam se divertir e fazer parte dessa festa conosco fazendo de forma totalmente gratuita.</Text>
                            </>
                        }
                        alignItems='flex-start'
                        bgColor='blue.800'
                    />
                    <Grid flex='1' templateColumns='1fr 1fr' gap={{base: 2, lg: 8}} px={{base: 4, lg: 12}} mt={{base: 6, lg: 12}}>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <CalendarBlank 
                                size={isLg ? 40 : 28} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold' fontSize={{base: 14, lg: 16}}>QUANDO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={{base: 2, lg: 4}}>Junho</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <Money 
                                size={isLg ? 40 : 28} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold' fontSize={{base: 14, lg: 16}}>QUANTO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={{base: 2, lg: 4}}>Gratuito!</Text>
                        </Flex>
                    </Grid>
                </Box>
            </Flex>
        </Box>
    )
}