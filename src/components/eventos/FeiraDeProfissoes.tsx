import { Box, Flex, Grid, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import { Money, CalendarBlank, MapPin } from "phosphor-react";
import { Carousel } from "../Carousel";
import { ColumnInfoLabel } from "../InfoLabel/column";
import { RowInfoLabel } from "../InfoLabel/row";

const img1 = 'static/img/feira_de_profissoes_1.png'
const img2 = 'static/img/feira_de_profissoes_2.png'
const img3 = 'static/img/feira_de_profissoes_3.png'
const img4 = 'static/img/feira_de_profissoes_4.png'
const img5 = 'static/img/feira_de_profissoes_5.png'


export function FeiraDeProfissoes() {
    const isLg = useBreakpointValue({base: false, lg: true})

    return (
        <Box pb={8} pt={4} w='100vw'>
            <Flex alignItems='center' w='100%' px={12} justifyContent='center' gap={4}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center'>
                    <Highlight query='Profissões' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Feira de Profissões
                    </Highlight>
                </Text>
                <Box h='2px' bgColor='blue.800' flex='1' />
            </Flex>
            <Flex py={8} alignItems='start' gap={8} direction={{base: 'column', lg: 'row'}}>
                <Box flex='.95'>
                    {isLg ? <RowInfoLabel 
                        title='SOBRE O EVENTO' 
                        info={
                            <>
                                <Text>A Feira de profissões é um evento que organizamos anualmente para que todos os alunos, tanto do nosso quanto de outros Cursinhos, sejam capazes de ter contato com diversas áreas e cursos diferentes para que todos consigam formar suas decisões tranquilos e confiantes.</Text>
                                <Text>Realizamos ela em um domingo em algum instituto da USP e contamos com diversas parcerias e alunos para nos ajudar com todo esse trabalho.</Text>
                            </>
                        }
                        alignItems='flex-start'
                        bgColor='yellow.400'
                    /> : <ColumnInfoLabel 
                        title='Sobre o evento'
                        info={
                            <>
                                <Text>A Feira de profissões é um evento que organizamos anualmente para que todos os alunos, tanto do nosso quanto de outros Cursinhos, sejam capazes de ter contato com diversas áreas e cursos diferentes para que todos consigam formar suas decisões tranquilos e confiantes.</Text>
                                <Text>Realizamos ela em um domingo em algum instituto da USP e contamos com diversas parcerias e alunos para nos ajudar com todo esse trabalho.</Text>
                            </>
                        }
                        bgColor='yellow.400'
                    />}
                    <Grid flex='1' templateColumns='1fr 1fr' gap={{base: 2, lg: 8}} px={{base: 4, lg: 12}} mt={{base: 6, lg: 12}}>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <CalendarBlank 
                                size={isLg ? 40 : 28}
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold' fontSize={{base: 14, lg: 16}}>QUANDO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={{base: 2, lg: 4}}>Agosto</Text>
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
                <Box flex='1.05' pr={{base: 4, lg: 12}} pl={{base: 4, lg: 0}} borderRadius='2xl'>
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
            </Flex>
        </Box>
    )
}