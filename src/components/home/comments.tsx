import { Box, Flex, Highlight, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";

export function Comments() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabsChange = (index: number) => {
        setTabIndex(index)
    }

    return (
        <Box 
            py={{base: 12, lg: 16}} 
            px={{base: 8, lg: 56}}
            position='relative'

        >
            <Text fontSize={{base: 24, lg: 40}} fontWeight="bold">
                <Highlight query='inspirações' styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Nossas inspirações
                </Highlight>
            </Text>
            <Text>O que nossos ex-alunos tem a dizer?</Text>
            <Tabs variant='unstyled' mt={12} index={tabIndex} onChange={handleTabsChange}>
                <TabList gap={{base: 2, lg: 6}} minH={32}>
                    <Tab 
                        bgImage='img/avatar-mauricio.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease'
                        display={{base: 'none', lg: 'block'}} 
                    />
                    <Tab 
                        bgImage='img/avatar-murilo.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease' 
                        display={{base: 'none', lg: 'block'}} 
                    />
                    <Tab 
                        bgImage='img/avatar-beatriz.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease'
                        display={{base: 'none', lg: 'block'}}  
                    />
                    <Tab 
                        bgImage='img/avatar-ariane.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease' 
                        display={{base: 'none', lg: 'block'}} 
                    />
                    <Tab 
                        bgImage='img/avatar-mizael.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease' 
                        display={{base: 'none', lg: 'block'}} 
                    />
                    <Tab 
                        bgImage='img/avatar-angelica.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease' 
                        display={{base: 'none', lg: 'block'}} 
                    />
                </TabList>
                <TabPanels mt={4} minH='25vh'>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>Prestei farmácia porque achava que medicina não era pra mim. Ninguém que eu conhecia tinha passado. Quando eu vi que minhas notas na Fuvest eram o suficiente pra passar em medicina, eu vi que eu era capaz.</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Maurício Durães</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Medicina na FMUSP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>Hoje eu não me imagino fazendo outra coisa a não ser ensinar. E a minha vontade de ensinar surgiu aqui.</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Murilo Lechuga</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Atual professor do Cursinho FEAUSP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>... O importante é não desistir no primeiro obstáculo. Se a gente desistir nessa fase mais fácil que é o vestibular, imagina na vida</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Beatriz Gomes</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Jornalismo da ECA USP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>Prestei Fuvest, mas não cheguei nem perto da nota de corte de engenharia. Passei um ano sem estudar, só trabalhando para ajudar em casa. Em 2013, procurei novamente o Cursinho FEAUSP. Hoje eu curso engenharia elétrica na Escola Politécnica da USP e gosto muito do meu curso.</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Ariane Jesus</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Engenharia Elétrica na Poli-USP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>Aqui você vê todo mundo com muita vontade. Acho que esse é um dos pontos fortes do cursinho: não só a parte do ensino, mas o ambiente também.</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Mizael Alves</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Economia na FEAUSP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 20}} minH={{base: 40, lg: 20}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>O Cursinho FEAUSP representa a esperança de realizar meus sonhos. Pelo apoio que as pessoas me dão, como se fossem a minha segunda família.</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Angélica Santos</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Geografia na UFMT</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex gap={2} mt={8}>
                <Flex onClick={() => tabIndex > 0 && handleTabsChange(tabIndex - 1)} cursor={tabIndex <= 0 ? 'not-allowed' : 'pointer'} alignItems='center' justifyContent='center' h={12} w={12} bgColor={tabIndex <= 0 ? 'gray.100' : 'blue.800'} borderRadius='100%'>
                    <Text color={tabIndex <= 0 ? 'blue.800' : 'gray.100'}>←</Text>
                </Flex>
                <Flex onClick={() => tabIndex < 5 && handleTabsChange(tabIndex + 1)} cursor={tabIndex >= 5 ? 'not-allowed' : 'pointer'} alignItems='center' justifyContent='center' h={12} w={12} bgColor={tabIndex >= 5 ? 'gray.100' : 'blue.800'} borderRadius='100%'>
                    <Text color={tabIndex >= 5 ? 'blue.800' : 'gray.100'}>→</Text>
                </Flex>
            </Flex>
            <Image 
                src='img/quote.png'
                h={{base: 40, lg: 80}}
                position='absolute'
                top={{base: '60%', lg: '40%'}}
                right='15%'
                zIndex={-100}
            />
        </Box>
    )
}