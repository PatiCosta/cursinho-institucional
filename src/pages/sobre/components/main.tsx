import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowCircleUpRight } from "phosphor-react";

export default function Main() {
    return (
        <Box h='86vh' bgImage='static/img/us.png' bgPosition='bottom' bgSize='cover'>
            <Box h={4}>

            </Box>
            <Flex w='100%' h={24} bgColor='#2a255aa5' alignItems='center' justifyContent='space-between' px={12}>
                <Image 
                    src={'static/img/changing_lifes.png'} 
                    maxH={20}
                />
            <Button bgColor='gray.50' color='blue.800' borderRadius='2xl' transition='all .3s ease' _hover={{
                bgColor: 'yellow.500',
                color: 'blue.800'
            }} display='flex' alignItems='center' gap={2}>
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