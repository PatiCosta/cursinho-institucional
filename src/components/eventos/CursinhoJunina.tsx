import { Box, Flex, Grid, Highlight, Text } from "@chakra-ui/react";
import { Money, CalendarBlank, MapPin } from "phosphor-react";
import { Carousel } from "../Carousel";
import { InfoLabel, ReverseInfoLabel } from "../InfoLabel";

const img1 = 'static/img/cursinho_junina_1.jpeg'
const img2 = 'static/img/cursinho_junina_2.jpeg'
const img3 = 'static/img/cursinho_junina_3.jpeg'
const img4 = 'static/img/cursinho_junina_4.png'
const img5 = 'static/img/cursinho_junina_5.png'


export function CursinhoJunina() {
    return (
        <Box pb={8} w='100vw'>
            <Flex alignItems='center' w='100%' px={12} justifyContent='center' gap={4}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={40}  fontWeight='semibold'>
                    <Highlight query='Junina' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Cursinho Junina
                    </Highlight>
                </Text>
                <Box h='2px' bgColor='blue.800' flex='1' />
            </Flex>
            <Flex py={8} alignItems='start' gap={8}>
                <Box flex='1.05' pl={12} borderRadius='2xl'>
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
                    <ReverseInfoLabel 
                        title='SOBRE O EVENTO' 
                        info='Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. Texto explicativo sobre o evento. ' 
                        alignItems='flex-start'
                        bgColor='blue.800'
                    />
                    <Grid flex='1' templateColumns='1fr 1fr 1fr' gap={8} px={12} mt={12}>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <CalendarBlank 
                                size={40} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold'>QUANDO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={4}>Julho</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <MapPin 
                                size={40} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold'>ONDE?</Text>
                            <Text fontWeight='light' fontSize={14} mt={4}>CRUSP</Text>
                        </Flex>
                        <Flex direction='column' alignItems='center' bgColor='gray.100' borderRadius='xl' p={4}>
                            <Money 
                                size={40} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='bold'>QUANTO?</Text>
                            <Text fontWeight='light' fontSize={14} mt={4}>Gratuito!</Text>
                        </Flex>
                    </Grid>
                </Box>
            </Flex>
        </Box>
    )
}