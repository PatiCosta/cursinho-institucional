import { Box, Flex, Grid, Highlight, Text, useBreakpointValue } from "@chakra-ui/react";
import { Money, CalendarBlank, MapPin } from "phosphor-react";
import { Carousel } from "../Carousel";
import { ColumnInfoLabel } from "../InfoLabel/column";
import { RowInfoLabel } from "../InfoLabel/row";

const img1 = 'img/semana_do_cursinho_1.png'
const img2 = 'img/semana_do_cursinho_2.png'
const img3 = 'img/semana_do_cursinho_3.png'
const img4 = 'img/semana_do_cursinho_4.png'
const img5 = 'img/semana_do_cursinho_5.png'


export function SemanaDoCursinho() {
    const isLg = useBreakpointValue({base: false, lg: true})
    return (
        <Box pb={8} pt={4} w='100vw'>
            <Flex alignItems='center' w='100vw' px={{base: 4, lg: 12}} justifyContent='center' gap={4}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center'>
                    <Highlight query='Cursinho' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Semana do Cursinho
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
                                <Text>A Semana do Cursinho ocorre ao longo de uma Semana de Setembro e nosso intuito com essa semana é criar eventos em dias diferentes com o intuito de arrecadar dinheiro para pagar as taxas de inscrição dos vestibulares dos alunos.</Text>
                                <Text>Vendemos comidas, organizamos bingos com prêmios e nosso público alvo são os alunos da graduação e quem quiser contribuir para nosso propósito.</Text>
                                <Text>Ano passado a Semana se encerrou com uma palestra com o cantor Rincon Sapiência e, com todo dinheiro arrecadado, fomos capazes de abarcar todos os pedidos de ajuda com as taxas.</Text>
                            </>
                        }
                        alignItems='flex-start'
                        bgColor='yellow.400'
                    /> : <ColumnInfoLabel 
                        title='Sobre o evento'
                        info={
                            <>
                                <Text>A Semana do Cursinho ocorre ao longo de uma Semana de Setembro e nosso intuito com essa semana é criar eventos em dias diferentes com o intuito de arrecadar dinheiro para pagar as taxas de inscrição dos vestibulares dos alunos.</Text>
                                <Text>Vendemos comidas, organizamos bingos com prêmios e nosso público alvo são os alunos da graduação e quem quiser contribuir para nosso propósito.</Text>
                                <Text>Ano passado a Semana se encerrou com uma palestra com o cantor Rincon Sapiência e, com todo dinheiro arrecadado, fomos capazes de abarcar todos os pedidos de ajuda com as taxas.</Text>
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
                            <Text fontWeight='light' fontSize={14} mt={{base: 2, lg: 4}}>Setembro</Text>
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