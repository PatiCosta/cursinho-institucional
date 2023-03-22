import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowCircleUpRight } from "phosphor-react";

export default function Classes() {
    return (
        <Box>
            <Flex px={48} alignItems='center' justifyContent='center' gap={8}>
                <Box>
                    <Text fontSize={40} fontWeight="bold">NOSSAS</Text>
                    <Text color='yellow.500' ml={8} fontSize={40} fontWeight="bold">TURMAS</Text>
                </Box>
                <Box h='4px' bgColor='blue.800' w='500px'></Box>
                <Button 
                    bgColor='blue.800' 
                    color='gray.50' 
                    borderRadius='2xl' 
                    size='lg' 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='space-between'
                    gap={2}
                    fontSize='18px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                >
                    <Text>Saiba mais</Text>
                    <ArrowCircleUpRight size={18} color="#F7FAFC" weight="fill" />
                </Button>
            </Flex>
            <Image 
                src={'static/img/turmas_fundo.png'} 
                maxW='100vw'
            />
        </Box>
    )
}