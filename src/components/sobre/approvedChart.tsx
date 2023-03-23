import { Box, Divider, Flex, Grid, Highlight, Text } from "@chakra-ui/react";

export function ApprovedChart() {
    return (
        <Box bgColor='blue.800' borderRadius='24px' w='70vw' position='absolute' top='-35%' left='15%' px={12} py={8} textAlign='center'>
            <Text fontSize={40} color='gray.50' fontWeight='bold'>
                <Highlight query='aprovados' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                    Nossos aprovados ao longo dos anos
                </Highlight>
            </Text>
            <Flex direction='column' gap={8} mt={8} position='relative'>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>200</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>150</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>100</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>050</Text>
                    <Divider />
                </Flex>
                <Flex alignItems='end' gap={4}>
                    <Text color='gray.50' fontWeight='light' fontSize={16}>000</Text>
                    <Divider />
                </Flex>
                <Flex position='absolute' bottom='0' left='0' w='80vw' px={32} gap={14} alignItems='end'>
                    <Grid templateRows='1.3fr .7fr' templateColumns='120px' h={24} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={16} position='absolute' bottom='-25px' left='35%'>2019</Text>
                    </Grid>
                    <Grid templateRows='1.6fr .4fr' templateColumns='120px' h={48} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={16} position='absolute' bottom='-25px' left='35%'>2020</Text>
                    </Grid>
                    <Grid templateRows='1.3fr .7fr' templateColumns='120px' h={20} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={16} position='absolute' bottom='-25px' left='35%'>2020</Text>
                    </Grid>
                    <Grid templateRows='1.52fr .48fr' templateColumns='120px' h={32} borderRadius='16px 16px 0 0' position='relative'>
                        <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
                        <Box bgColor='yellow.400'></Box>
                        <Text color='gray.50' fontWeight='light' fontSize={16} position='absolute' bottom='-25px' left='35%'>2022</Text>
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