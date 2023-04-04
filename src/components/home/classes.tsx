import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ArrowCircleUpRight } from "phosphor-react";

export function Classes() {
    return (
        <Box>
            <Flex px={{base: 12, lg: 48}} alignItems='center' justifyContent='center' gap={{base: 4, lg: 8}} direction={{base: 'column', lg: 'row'}}>
                <Box>
                    <Text fontSize={{base: 24, lg: 40}} fontWeight="bold">NOSSAS</Text>
                    <Text color='yellow.500' ml={8} fontSize={{base: 24, lg: 40}} fontWeight="bold">TURMAS</Text>
                </Box>
                <Box 
                    h={{base: '2px', lg: '4px'}} 
                    bgColor='blue.800' 
                    w={{base: '90vw', lg: '500px'}}
                />
                <Button 
                    bgColor='blue.800' 
                    color='gray.50' 
                    borderRadius='2xl' 
                    size={{base: 'sm', lg: 'lg'}} 
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
                mt={{base: 4, lg: 0}}
            />
        </Box>
    )
}