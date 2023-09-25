import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export function Approvals() {
    return (
        <Flex 
            bgColor='blue.800' 
            w='100vw' 
            p={{base: 8, lg: 12}} 
            mt={12} 
            alignItems='center' 
            justifyContent='center' 
            gap={12}
            direction={{base: 'column', lg: 'row'}}
        >
            <Box textAlign='center' mr={{base: 0, lg: 12}}>
                <Text fontSize={{base: 28, lg: 32}} fontWeight="bold" color='yellow.500'>
                    Aprovações
                </Text>
                <Text fontSize={{base: 28, lg: 32}} fontWeight="bold" color='gray.50'>
                    em 2022
                </Text>
            </Box>
            <Box
                display={{base: 'grid', lg: 'flex'}}
                gridTemplateColumns='1fr 10px 1fr'
                alignItems='center' 
                justifyContent={{base: 'space-between', lg: 'center'}} 
                w={{base: '100%', lg: 'fit-content'}}
                gap={{base: 4, lg: 12}}
            >
                <Box textAlign='center' color='gray.50'>
                    <Text fontWeight='bold' fontSize={{base: 28, lg: 40}}>40</Text>
                    <Text fontSize={{base: 16, lg: 20}}>USP</Text>
                </Box>
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
                <Box textAlign='center' color='gray.50'>
                    <Text fontWeight='bold' fontSize={{base: 28, lg: 40}}>15</Text>
                    <Text fontSize={{base: 16, lg: 20}}>UNICAMP</Text>
                </Box>
            </Box>
            <Box
                display={{base: 'grid', lg: 'flex'}}
                gridTemplateColumns='1fr 10px 1fr'
                alignItems='center' 
                justifyContent={{base: 'space-between', lg: 'center'}} 
                w={{base: '100%', lg: 'fit-content'}}
                gap={{base: 4, lg: 12}}
            >
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' display={{base: 'none', lg: 'block'}} />
                <Box textAlign='center' color='gray.50'>
                    <Text fontWeight='bold' fontSize={{base: 28, lg: 40}}>21</Text>
                    <Text fontSize={{base: 16, lg: 20}}>UNESP</Text>
                </Box>
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
                <Box textAlign='center' color='gray.50'>
                    <Text fontWeight='bold' fontSize={{base: 28, lg: 40}}>52</Text>
                    <Text fontSize={{base: 16, lg: 20}}>Federais e Estaduais</Text>
                </Box>
            </Box>
        </Flex>
    )
}