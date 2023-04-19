import { Box, Flex, Text } from "@chakra-ui/react";
import { RowInfoLabel } from "../InfoLabel/row";

export function About() {
    return (
        <Flex py={12} alignItems='center' gap={{base: 12, lg: 24}} direction={{base: 'column', lg: 'row'}}>
            <Box flex='1.5'>
                <Text 
                    fontSize={{base: 32, lg: 48}} 
                    fontWeight='semibold' 
                    textAlign='center'
                >
                    Sobre o cursinho
                </Text>
                <RowInfoLabel 
                    title='QUEM SOMOS?' 
                    info='Somos um cursinho pré-vestibular, sem mensalidades, fundado em 2000 e gerido pelos alunos da FEA-USP. O Cursinho foi fundado com a iniciativa de alunos da FEA, com o apoio do CAVC e da então diretoria da faculdade.' 
                    mt={8}
                    alignItems='flex-start'
                    bgColor='yellow.400'
                />
                <RowInfoLabel 
                    title='NOSSA MISSÃO' 
                    info='Promover mobilidade social através da democratização do acesso às ferramentas de preparo para o ingresso ao no ensino superior.
                    Desenvolver pessoal e profissionalmente nossos coordenadores, professores, alunos e parceiros, proporcionando experiências memoráveis e inspiradoras.' 
                    mt={12}
                    alignItems='flex-start'
                    bgColor='yellow.400'
                />
            </Box>
            <Flex flex='1' position='relative' direction='column' justifyContent='space-between' gap={10}>
                <Box h='100%' bgColor='yellow.100' position='absolute' top='0' left='4' w='18px' zIndex='-1'></Box>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8}>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={{base: 40, lg: 48}} fontWeight='semibold' position='relative' flex='1'>
                        480
                        <Text fontSize={{base: 14, lg: 16}} fontWeight='regular' position='absolute' bottom='-12px'>alunos em 2022</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={{base: 40, lg: 48}} fontWeight='semibold' position='relative'>
                        Desde 2000
                        <Text fontSize={{base: 14, lg: 16}} fontWeight='regular' position='absolute' bottom='-12px'>fundação</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={{base: 40, lg: 48}} fontWeight='semibold' position='relative'>
                        4 cursos
                        <Text fontSize={{base: 14, lg: 16}} fontWeight='regular' position='absolute' bottom='-12px'>com vagas abertas</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={{base: 40, lg: 48}} fontWeight='semibold' position='relative' flex='1'>
                        80%
                        <Text fontSize={{base: 14, lg: 16}} fontWeight='regular' position='absolute' bottom='-12px'>aprovados no vestibular em 2022</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}