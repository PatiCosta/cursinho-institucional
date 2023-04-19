import { Box, Divider, Flex, Grid, Highlight, Text } from "@chakra-ui/react";

export function ApprovedChart() {
    return (
        <Box 
            bgColor='blue.800' 
            borderRadius='24px' 
            w={{base: '90vw', lg: '70vw'}} 
            position='absolute' 
            // top='-35%' 
            // left='15%' 
            px={{base: 4, lg: 12}} 
            // py={8} 
            mx={{base: '5vw', lg: '15vw'}} 
            top={{base: '-25%', lg: '-35%'}} 
            py={{base: 6, lg: 8}}
            textAlign='center'
        >
            <Text fontSize={{base: 24, lg: 40}} color='gray.50' fontWeight='bold'>
                <Highlight query='aprovados' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                    Nossos aprovados ao longo dos anos
                </Highlight>
            </Text>
            <Flex direction='column' gap={8} mt={8} position='relative'>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}}>200</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}}>150</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}}>100</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}}>050</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}}>000</Text>
                    <Divider />
                </Flex>
                <Flex position='absolute' bottom='0' left='0' w='80vw' px={{base: 12, lg: 32}} gap={{base: 6, lg: 14}} alignItems='end'>
                    <Grid templateRows='1.3fr .7fr' templateColumns={{base: '40px', lg: '120px'}} h={24} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2019</Text>
                    </Grid>
                    <Grid templateRows='1.6fr .4fr' templateColumns={{base: '40px', lg: '120px'}} h={48} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2020</Text>
                    </Grid>
                    <Grid templateRows='1.3fr .7fr' templateColumns={{base: '40px', lg: '120px'}} h={20} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2020</Text>
                    </Grid>
                    <Grid templateRows='1.52fr .48fr' templateColumns={{base: '40px', lg: '120px'}} h={32} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2022</Text>
                    </Grid>
                </Flex>
            </Flex>
            <Flex alignItems='center' gap={4} justifyContent='center' mt={8}>
                <Flex alignItems='center' gap={2}>
                    <Box h='12px' w='12px' bgColor='yellow.400' borderRadius='100%'></Box>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>USP</Text>
                </Flex>
                <Flex alignItems='center' gap={2}>
                    <Box h='12px' w='12px' bgColor='gray.50' borderRadius='100%'></Box>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>Públicas e PROUNI</Text>
                </Flex>
            </Flex>
        </Box>
    )
}