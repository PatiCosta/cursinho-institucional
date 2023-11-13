import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

export function Main() {
    return (
        <Box h='86vh' bgImage='img/us-1.png' bgPosition='top' bgSize='cover'>
            <Box h={{base: 0, lg: 4}}>

            </Box>
            <Flex 
                w='100%' 
                h={{base: 32, lg: 24}} 
                alignItems='center' 
                justifyContent={{base: 'center', lg: 'space-between' }}
                px={{base: 12, lg: 24}}
                direction={{base: 'column', lg: 'row'}}
                gap={{base: 2, lg: 0}}
            >
                <Image 
                    src={'img/changing_lifes.png'} 
                    maxH={20}
                />
                <Box>
                    <Text fontSize={12} w={{base: '80vw', lg: '25vw'}} fontWeight='light' display={{base: 'none', lg: 'inline-block'}}>
                        Anualmente, o Cursinho FEAUSP ajuda 480 vidas a conquistarem seu sonho de ingressar no ensino superior.
                    </Text>
                    <Button 
                        bgColor='yellow.400' 
                        color='gray.50' 
                        mt={2}
                        transition='all .3s ease' 
                        _hover={{
                            bgColor: 'yellow.400',
                            color: 'gray.50'
                        }} 
                        display='flex' 
                        alignItems='center' 
                        w='fit-content'
                        gap={2}
                        as={Link}
                        href={`/turmas`} 
                        size='sm'
                    >
                        <Text>Faça parte também!</Text>
                        <ArrowCircleUpRight 
                            size={18} 
                            color="#F7FAFC" 
                            weight="fill" 
                            style={{
                                transition: 'all 0.2s ease'
                                
                            }} 
                        />
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}