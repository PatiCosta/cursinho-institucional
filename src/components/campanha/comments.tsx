import { Box, Flex, Highlight, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";

export function Comments() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabsChange = (index: number) => {
        setTabIndex(index)
    }

    return (
        <Box 
            py={{base: 12, lg: 12}} 
            px={{base: 8, lg: 40}}
            position='relative'

        >
            <Text fontSize={{base: 24, lg: 40}} fontWeight="bold">
                <Highlight query='Depoimentos' styles={{bg: 'transparent', color: 'yellow.400' }}>
                    Depoimentos
                </Highlight>
            </Text>
            <Text>Relatos de quem foi beneficiado pela campanha</Text>
            <Tabs variant='unstyled' mt={12} index={tabIndex} onChange={handleTabsChange}>
                <TabList gap={{base: 2, lg: 6}} minH={32}>
                    <Tab 
                        bgImage='img/avatar_eduarda.png' 
                        _selected={{w: 32, h: 32, filter: 'brightness(1)', display: 'block'}} 
                        bgSize='cover'
                        filter='brightness(0.4)' 
                        w={24} 
                        h={24} 
                        transition='all 0.2s ease'
                        display={{base: 'none', lg: 'block'}} 
                    />
                    <Tab 
                        bgImage='img/avatar-beatriz2.png' 
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
                        <Box maxH={{base: 40, lg: 48}} minH={{base: 40, lg: 48}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>"Fui aluna do Cursinho FEA USP no ano de 2020, o qual me proporcionou oportunidades que antes me eram inimagináveis sem tal suporte financeiro em relação às taxas dos vestibulares. [...]
                            Logo, em 2021 fui aprovada na USP, Unicamp e Unesp. Sendo que isso apenas foi possível pelo suporte dado pelo cursinho; sem o pagamento das taxas dos vestibulares proporcionada por eles e os doadores, eu nunca teria conseguido prestar nenhum, e agora não estaria aqui como aluna da graduação na Universidade de São Paulo. [...] Com uma visão mais ampla, entendemos que o apoio do cursinho impacta diretamente centenas de pessoas cheias de sonhos todos os anos, mudando não apenas suas trajetórias individuais, mas também o perfil dentro das universidades públicas em prol da maior democratização de ensino e suas contribuições para a ciência brasileira."</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Eduarda Martins dos Santos</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Ciências Sociais na USP</Text>
                    </TabPanel>
                    <TabPanel>
                        <Box maxH={{base: 40, lg: 48}} minH={{base: 40, lg: 48}} overflow='scroll'>
                            <Text fontStyle='italic' fontWeight='normal'>"Adorei receber o convite do Cursinho FEAUSP pra contar um pouquinho de como foi especial e decisivo a ajuda para pagar o vestibular. Sem isso, talvez eu não estivesse desfrutando de uma universidade pública e maravilhosa onde estou agora. Em um momento de tanta insegurança, ter a certeza de temos amparo, transforma o nosso caminho. O trabalho que o cursinho faz é muito especial e, certamente, muda vidas. Todos podem voar."</Text>
                        </Box>
                        <Text mt={8} fontWeight='bold' fontSize='lg'>Beatriz de Souza Silva</Text>
                        <Text fontWeight='light' fontSize='sm' minH={12}>Estudante de Relações Internacionais na UNESP</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex gap={2}>
                <Flex onClick={() => tabIndex > 0 && handleTabsChange(tabIndex - 1)} cursor={tabIndex <= 0 ? 'not-allowed' : 'pointer'} alignItems='center' justifyContent='center' h={12} w={12} bgColor={tabIndex <= 0 ? 'gray.100' : 'blue.800'} borderRadius='100%'>
                    <Text color={tabIndex <= 0 ? 'blue.800' : 'gray.100'}>←</Text>
                </Flex>
                <Flex onClick={() => tabIndex < 1 && handleTabsChange(tabIndex + 1)} cursor={tabIndex >= 1 ? 'not-allowed' : 'pointer'} alignItems='center' justifyContent='center' h={12} w={12} bgColor={tabIndex >= 1 ? 'gray.100' : 'blue.800'} borderRadius='100%'>
                    <Text color={tabIndex >= 1 ? 'blue.800' : 'gray.100'}>→</Text>
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