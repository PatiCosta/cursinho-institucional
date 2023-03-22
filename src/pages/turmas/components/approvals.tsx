import { Box, Flex, Highlight, Image, Text } from "@chakra-ui/react";

export default function Approvals() {
    return (
        <Flex bgColor='blue.800' w='100vw' p={12} mt={12} alignItems='center' justifyContent='center' gap={12}>
            <Box textAlign='center' mr={12}>
                <Text fontSize={32} fontWeight="bold" color='yellow.500'>
                    Aprovações
                </Text>
                <Text fontSize={32} fontWeight="bold" color='gray.50'>
                    em 2022
                </Text>
            </Box>
            <Box textAlign='center' color='gray.50'>
                <Text fontWeight='bold' fontSize={40}>29</Text>
                <Text fontSize={20}>USP</Text>
            </Box>
            <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
            <Box textAlign='center' color='gray.50'>
                <Text fontWeight='bold' fontSize={40}>15</Text>
                <Text fontSize={20}>UNICAMP</Text>
            </Box>
            <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
            <Box textAlign='center' color='gray.50'>
                <Text fontWeight='bold' fontSize={40}>21</Text>
                <Text fontSize={20}>UNESP</Text>
            </Box>
            <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
            <Box textAlign='center' color='gray.50'>
                <Text fontWeight='bold' fontSize={40}>52</Text>
                <Text fontSize={20}>Federais e Estaduais</Text>
            </Box>
        </Flex>
    )
}