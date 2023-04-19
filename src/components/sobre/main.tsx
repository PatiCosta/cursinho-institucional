import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";

export function Main() {
    return (
        <Box h='86vh' bgImage='static/img/us.png' bgPosition='bottom' bgSize='cover'>
            <Box h={4}>

            </Box>
            <Flex 
                w='100%' 
                h={{base: 32, lg: 24}} 
                bgColor='#2a255aa5'
                alignItems='center' 
                justifyContent={{base: 'center', lg: 'space-between' }}
                px={12}
                direction={{base: 'column', lg: 'row'}}
                gap={{base: 4, lg: 0}}
            >
                <Image 
                    src={'static/img/changing_lifes.png'} 
                    maxH={{base: 12, lg: 20}}
                />
                <Button 
                    bgColor='gray.50' 
                    color='blue.800' 
                    borderRadius='2xl' 
                    transition='all .3s ease' 
                    _hover={{
                        bgColor: 'yellow.500',
                        color: 'blue.800'
                    }} 
                    display='flex' 
                    alignItems='center' 
                    gap={2}
                    as={Link}
                    href={`/turmas`} 
                >
                    <Text>Faça parte também!</Text>
                    <ArrowCircleUpRight 
                        size={24} 
                        color="#023047" 
                        weight="fill" 
                        style={{
                            transition: 'all 0.2s ease'
                            
                        }} 
                    />
                </Button>
            </Flex>
        </Box>
    )
}