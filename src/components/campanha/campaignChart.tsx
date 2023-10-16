import { Box, Divider, Flex, Grid, Highlight, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";

export function CampaignChart() {
    return (
        // <Box 
        //     bgColor='yellow.400' 
        //     px={{base: 4, lg: 12}} 
        //     py={{base: 6, lg: 16}}
        //     textAlign='center'
        //     mt={8}
        // >
        //     <Text fontSize={{base: 24, lg: 32}} color='blue.800' fontWeight='regular'>
        //         <Highlight query={['alunos', 'campanha']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
        //             Alunos beneficiados a cada ano com a ajuda da campanha
        //         </Highlight>
        //     </Text>
        //     <Flex direction='column' gap={4} mt={8} position='relative'>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>160</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>140</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>120</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>100</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>080</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>060</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>040</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>020</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex alignItems='end' gap={4}>
        //             <Text color='blue.800' fontWeight='regular' fontSize={{base: 12, lg: 16}} w='40px' lineHeight='none'>000</Text>
        //             <Divider borderColor='blue.600' />
        //         </Flex>
        //         <Flex position='absolute' bottom='0' left='0' maxW='80vw' px={{base: 4, lg: 48}} gap={{base: 6, lg: 16}} alignItems='end'>
        //             <Grid templateRows='0fr 2fr' templateColumns={{base: '40px', lg: '180px'}} h='5.25rem' borderRadius='16px 16px 0 0' position='relative'>
        //                 <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
        //                 <Box bgColor='blue.600' borderRadius='16px 16px 0 0'></Box>
        //                 <Text color='blue.800' fontWeight='medium' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '40%'}}>2019</Text>
        //             </Grid>
        //             <Grid templateRows='.4fr 1.6fr' templateColumns={{base: '40px', lg: '180px'}} h={14} borderRadius='16px 16px 0 0' position='relative'>
        //                 <Box bgColor='gray.50' borderRadius='16px 16px 0 0'></Box>
        //                 <Box bgColor='blue.600'></Box>
        //                 <Text color='blue.800' fontWeight='medium' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '40%'}}>2020*</Text>
        //             </Grid>
        //             <Grid templateRows='.5fr .6fr 1.9fr' templateColumns={{base: '40px', lg: '180px'}} h={36} borderRadius='16px 16px 0 0' position='relative'>
        //                 <Box bgColor='gray.400' borderRadius='16px 16px 0 0'></Box>
        //                 <Box bgColor='gray.50'></Box>
        //                 <Box bgColor='blue.600'></Box>
        //                 <Text color='blue.800' fontWeight='medium' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '40%'}}>2021</Text>
        //             </Grid>
        //             <Grid templateRows='.3fr .35fr 2.35fr' templateColumns={{base: '40px', lg: '180px'}} h={60} borderRadius='16px 16px 0 0' position='relative'>
        //                 <Box bgColor='gray.400' borderRadius='16px 16px 0 0'></Box>
        //                 <Box bgColor='gray.50'></Box>
        //                 <Box bgColor='blue.600'></Box>
        //                 <Text color='blue.800' fontWeight='medium' fontSize={{base: 12, lg: 16}} position='absolute' bottom='-25px' left={{base: '16%', lg: '40%'}}>2022</Text>
        //             </Grid>
        //         </Flex>
        //     </Flex>
        //     <Flex alignItems='center' gap={4} justifyContent='center' mt={12}>
        //         <Flex alignItems='center' gap={2}>
        //             <Box h='12px' w='12px' bgColor='blue.600' borderRadius='100%'></Box>
        //             <Text color='blue.800' fontWeight='light' fontSize={16}>Fuvest</Text>
        //         </Flex>
        //         <Flex alignItems='center' gap={2}>
        //             <Box h='12px' w='12px' bgColor='gray.50' borderRadius='100%'></Box>
        //             <Text color='blue.800' fontWeight='light' fontSize={16}>Unicamp</Text>
        //         </Flex>
        //         <Flex alignItems='center' gap={2}>
        //             <Box h='12px' w='12px' bgColor='gray.400' borderRadius='100%'></Box>
        //             <Text color='blue.800' fontWeight='light' fontSize={16}>Enem</Text>
        //         </Flex>
        //     </Flex>
        //     <Text color='blue.800' fontWeight='light' mt={4} w='100%' textAlign='end' fontSize={12}>*Por conta da pandemia, apenas 2 turmas foram abertas em 2020</Text>
        
        // </Box>
        <Flex 
            bgColor='blue.800' 
            w='100vw' 
            px={{base: 8, lg: 12}} 
            py={{base: 14, lg: 14}}
            mt={12} 
            alignItems='center' 
            justifyContent='center' 
            gap={8}
            direction={{base: 'column', lg: 'row'}}
        >
            <Box textAlign='center' mr={{base: 0, lg: 12}}>
                <Text fontSize={{base: 28, lg: 32}} fontWeight="bold" color='yellow.400'>
                    Alunos
                </Text>
                <Text fontSize={{base: 28, lg: 32}} fontWeight="bold" color='gray.50'>
                    beneficiados
                </Text>
                <Text fontSize={{base: 12, lg: 14}} maxW='220px' fontWeight="light" color='gray.50'>
                    *Por conta da pandemia, apenas 2 turmas foram abertas em 2020
                </Text>
            </Box>
            <Box
                display={{base: 'grid', lg: 'flex'}}
                gridTemplateColumns='1fr 10px 1fr'
                alignItems='center' 
                justifyContent={{base: 'space-between', lg: 'center'}} 
                w={{base: '100%', lg: 'fit-content'}}
                gap={{base: 4, lg: 8}}
            >
                <Box textAlign='center' bgColor='gray.50' px={{base: 8, lg: 12}} py={{base: 2, lg: 8}} h='100%'>
                    <Box>
                        <Text fontWeight='bold' fontSize={{base: 28, lg: 28}} color='blue.800'>2019</Text>
                    </Box>
                    <Stat mt={8}>
                        <StatLabel>Fuvest</StatLabel>
                        <StatNumber>51</StatNumber>
                    </Stat>
                </Box>
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
                <Box textAlign='center' bgColor='gray.50' px={{base: 8, lg: 12}} py={{base: 2, lg: 8}}>
                    <Box>
                        <Text fontWeight='bold' fontSize={{base: 28, lg: 28}} color='blue.800'>2020</Text>
                    </Box>
                    <Stat mt={8}>
                        <StatLabel>Fuvest</StatLabel>
                        <StatNumber>29</StatNumber>
                    </Stat>
                    <Stat mt={4}>
                        <StatLabel>Unicamp</StatLabel>
                        <StatNumber>7</StatNumber>
                    </Stat>
                </Box>
            </Box>
            <Box
                display={{base: 'grid', lg: 'flex'}}
                gridTemplateColumns='1fr 10px 1fr'
                alignItems='center' 
                justifyContent={{base: 'space-between', lg: 'center'}} 
                w={{base: '100%', lg: 'fit-content'}}
                gap={{base: 4, lg: 8}}
            >
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' display={{base: 'none', lg: 'block'}} />
                <Box textAlign='center' bgColor='gray.50' px={{base: 8, lg: 12}} py={{base: 2, lg: 8}}>
                    <Box>
                        <Text fontWeight='bold' fontSize={{base: 28, lg: 28}} color='blue.800'>2021</Text>
                    </Box>
                    <Stat mt={8}>
                        <StatLabel>Fuvest</StatLabel>
                        <StatNumber>59</StatNumber>
                    </Stat>
                    <Stat mt={4}>
                        <StatLabel>Unicamp</StatLabel>
                        <StatNumber>17</StatNumber>
                    </Stat>
                    <Stat mt={4}>
                        <StatLabel>Enem</StatLabel>
                        <StatNumber>14</StatNumber>
                    </Stat>
                </Box>
                <Box bgColor='gray.50' w='8px' h='8px' borderRadius='100%' />
                <Box textAlign='center' bgColor='gray.50' px={{base: 8, lg: 12}} py={{base: 2, lg: 8}}>
                    <Box>
                        <Text fontWeight='bold' fontSize={{base: 28, lg: 28}} color='blue.800'>2022</Text>
                    </Box>
                    <Stat mt={8}>
                        <StatLabel>Fuvest</StatLabel>
                        <StatNumber>118</StatNumber>
                    </Stat>
                    <Stat mt={4}>
                        <StatLabel>Unicamp</StatLabel>
                        <StatNumber>18</StatNumber>
                    </Stat>
                    <Stat mt={4}>
                        <StatLabel>Enem</StatLabel>
                        <StatNumber>10</StatNumber>
                    </Stat>
                </Box>
            </Box>
        </Flex>
    )
}