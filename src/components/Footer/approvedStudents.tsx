import { Box, Divider, Flex, Grid, Highlight, Text } from "@chakra-ui/react";

export function ApprovedStudentsFooter() {
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
                    <Grid templateRows='1.52fr .48fr' templateColumns={{base: '40px', lg: '120px'}} h={32} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2022</Text>
                    </Grid>
                    <Grid templateRows='1fr' templateColumns={{base: '40px', lg: '120px'}} h={{base: '105px', lg: '118px'}} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.300' borderRadius='16px 16px 0 0'></Box>
                        <Text color='gray.50' fontWeight='bold' fontSize={{base: 12, lg: 16}} position='absolute' top={{base: '-20px', lg: '-26px'}} w='100%' textAlign='center'>105</Text>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2023</Text>
                    </Grid>
                    <Grid templateRows='1fr' templateColumns={{base: '40px', lg: '120px'}} h={{base: '69px', lg: '77px'}} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.300' borderRadius='16px 16px 0 0'></Box>
                        <Text color='gray.50' fontWeight='bold' fontSize={{base: 12, lg: 16}} position='absolute' top={{base: '-20px', lg: '-26px'}} w='100%' textAlign='center'>69</Text>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2024</Text>
                    </Grid>
                    <Grid templateRows='1fr' templateColumns={{base: '40px', lg: '120px'}} h={{base: '80px', lg: '90px'}} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.300' borderRadius='16px 16px 0 0'></Box>
                        <Text color='gray.50' fontWeight='bold' fontSize={{base: 12, lg: 16}} position='absolute' top={{base: '-20px', lg: '-26px'}} w='100%' textAlign='center'>80</Text>
                        <Text color='gray.50' fontWeight='light' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '35%'}}>2025</Text>
                    </Grid>
                </Flex>
            </Flex>
            <Flex alignItems='center' gap={4} justifyContent='center' mt={8} flexWrap='wrap'>
                <Flex alignItems='center' gap={2}>
                    <Box h='12px' w='12px' bgColor='yellow.400' borderRadius='100%'></Box>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>USP</Text>
                </Flex>
                <Flex alignItems='center' gap={2}>
                    <Box h='12px' w='12px' bgColor='gray.50' borderRadius='100%'></Box>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>Públicas e PROUNI</Text>
                </Flex>
                <Flex alignItems='center' gap={2}>
                    <Box h='12px' w='12px' bgColor='gray.300' borderRadius='100%'></Box>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>Total do ano</Text>
                </Flex>
            </Flex>
        </Box>
    )
}