import { Box, Flex, Grid, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import { Money, CalendarBlank } from "phosphor-react";
import { Carousel } from "../Carousel";
import { ColumnInfoLabel } from "../InfoLabel/column";
import { ReverseRowInfoLabel } from "../InfoLabel/row";

const img1 = 'img/estudantada_1.png'
const img2 = 'img/estudantada_2.png'
const img3 = 'img/estudantada_3.png'
const img4 = 'img/estudantada_4.png'
const img5 = 'img/estudantada_5.png'


export function Estudantada() {
    const isLg = useBreakpointValue({base: false, lg: true})

    return (
        <Box pb={8} pt={4} w='100vw'>
            <Flex alignItems='center' w='100%' px={12} justifyContent='center' gap={4}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center'>
                    <Highlight query='Estudantada' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Estudantada
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
                    {isLg ? <ReverseRowInfoLabel 
                        title='SOBRE O EVENTO' 
                        info={
                            <>
                                <Text>No fim do ano, após passar um ano inteiro de intensos estudos e cansaço, sabemos como os alunos estão desgastados e ansiosos pré-vestibular e para isso, nós de Eventos organizamos um momento de desestressar e relaxar com os alunos antes de realizar o tão esperado vestibular.</Text>
                                <Text>Iniciamos no auditório com vídeos e depoimentos dos professores / coordenadores para motivar todos os alunos nessa reta final e depois nos encaminhamos para a vivência para realizar uma parte mais descontraída e de relaxamento com música, comida e alguns prêmios!</Text>
                            </>
                        }
                        alignItems='flex-start'
                        bgColor='blue.800'
                    /> : <ColumnInfoLabel 
                        title='Sobre o evento'
                        info={
                            <>
                                <Text>No fim do ano, após passar um ano inteiro de intensos estudos e cansaço, sabemos como os alunos estão desgastados e ansiosos pré-vestibular e para isso, nós de Eventos organizamos um momento de desestressar e relaxar com os alunos antes de realizar o tão esperado vestibular.</Text>
                                <Text>Iniciamos no auditório com vídeos e depoimentos dos professores / coordenadores para motivar todos os alunos nessa reta final e depois nos encaminhamos para a vivência para realizar uma parte mais descontraída e de relaxamento com música, comida e alguns prêmios!</Text>
                            </>
                        }
                        bgColor='blue.800'
                    />}
                    <Grid flex='1' templateColumns='1fr 1fr' gap={{base: 2, lg: 8}} px={{base: 4, lg: 12}} mt={{base: 6, lg: 12}}>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <CalendarBlank 
                                size={isLg ? 40 : 28} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold' fontSize={{base: 14, lg: 16}}>QUANDO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={{base: 2, lg: 4}}>Novembro</Text>
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