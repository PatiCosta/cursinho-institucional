import { Box, Flex, Text } from "@chakra-ui/react";

export function About() {
    return (
        <Flex py={12} alignItems='center' gap={24}>
            <Box flex='1.5'>
                <Text fontSize={48} fontWeight='semibold' textAlign='center'>Sobre o cursinho</Text>
                <Flex alignItems='flex-start' gap={8} mt={8}>
                    <Flex bgColor='yellow.400' borderRadius='0px 64px 64px 0px' py={4} px={12} w='250px' justifyContent='end'>
                        <Text fontSize={24} fontWeight='semibold' color='gray.50' w='120px' textAlign='end'>QUEM SOMOS?</Text>
                    </Flex>
                    <Text fontSize={16} fontWeight='light'>
                        Somos um cursinho pré-vestibular, sem mensalidades, fundado em 2000 e gerido pelos alunos da FEA-USP. O Cursinho foi fundado com a iniciativa de alunos da FEA, com o apoio do CAVC e da então diretoria da faculdade.
                    </Text>
                </Flex>
                <Flex alignItems='flex-start' gap={8} mt={12}>
                    <Flex bgColor='yellow.400' borderRadius='0px 64px 64px 0px' py={4} px={12} w='250px' justifyContent='end'>
                        <Text fontSize={24} fontWeight='semibold' color='gray.50' w='120px' textAlign='end'>NOSSA MISSÃO</Text>
                    </Flex>
                    <Text fontSize={16} fontWeight='light'>
                    Promover mobilidade social através da democratização do acesso às ferramentas de preparo para o ingresso ao no ensino superior.
                    Desenvolver pessoal e profissionalmente nossos coordenadores, professores, alunos e parceiros, proporcionando experiências memoráveis e inspiradoras.
                    </Text>
                </Flex>
            </Box>
            <Flex flex='1' position='relative' direction='column' justifyContent='space-between' gap={10}>
                <Box h='100%' bgColor='yellow.100' position='absolute' top='0' left='4' w='18px' zIndex='-1'></Box>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8}>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={48} fontWeight='semibold' position='relative' flex='1'>
                        480
                        <Text fontSize={16} fontWeight='regular' position='absolute' bottom='-12px'>alunos em 2022</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={48} fontWeight='semibold' position='relative'>
                        Desde 2000
                        <Text fontSize={16} fontWeight='regular' position='absolute' bottom='-12px'>fundação</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={48} fontWeight='semibold' position='relative'>
                        4 cursos
                        <Text fontSize={16} fontWeight='regular' position='absolute' bottom='-12px'>com vagas abertas</Text>
                    </Box>
                </Flex>
                <Flex alignItems='center' justifyContent='start' ml='6px' gap={8} flex='1'>
                    <Box bgColor='yellow.400' w='36px' h='36px' borderRadius='100%'></Box>
                    <Box fontSize={48} fontWeight='semibold' position='relative' flex='1'>
                        80%
                        <Text fontSize={16} fontWeight='regular' position='absolute' bottom='-12px'>aprovados no vestibular em 2022</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}