import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Highlight, Link, Text } from "@chakra-ui/react";
import { Books, Calendar, ChalkboardTeacher, Laptop, Notebook, Users } from "phosphor-react";
import { useState } from "react";
import { ColumnInfoLabel } from "../InfoLabel/column";

export function Diferentials() {

    return (
        <Box mt={{base: 8, lg: 16}}>
            <Flex gap={8} direction={{base: 'column', lg: 'row'}}>
                <ColumnInfoLabel 
                    title='Nossos diferenciais'
                    info='Somos um cursinho pré-vestibular, sem mensalidades, fundado em 2000 e gerido pelos alunos da FEA-USP. O Cursinho foi fundado com a iniciativa de alunos da FEA, com o apoio do CAVC e da então diretoria da faculdade.'
                    bgColor='blue.800'
                />
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' mr={{base: 4, lg: 12}} ml={{base: 4, lg: 0}} flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Books size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                            <Highlight query='Anglo' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Material Anglo
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                        Apostilas didáticas gratuitas fornecidas pelo Anglo dão uma excelente base para o aluno que vai prestar Enem, Unesp, Unicamp, Fuvest ou qualquer outro vestibular.
                    </Text>
                    <Text fontSize={{base: 14, lg: 16}} mt={8}>
                        Acessar{' '}
                        <Link href='https://www.sistemaanglo.com.br/' isExternal fontWeight='bold'>
                            sistemaanglo.com.br <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
            </Flex>
            <Flex gap={4} mt={4} px={{base: 4, lg: 12}} direction={{base: 'column', lg: 'row'}}>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Notebook size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold" w='180px'>
                            <Highlight query='Letrus' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Letrus
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    Plataforma online de envio de redações e correção realizada em parte por Inteligência Artificial.
                    </Text>
                </Box>

                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                    </Box>
                    <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Users size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                            <Highlight query='Tutoria' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Tutoria
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    A tutoria é um projeto que procura dar apoio acadêmico e pedagógico para os nossos alunos por meio do diálogo entre eles e seus tutores: estudantes universitários voluntários.
                    </Text>
                </Box>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Calendar size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                            <Highlight query='Eventos' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Eventos
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    Palestras para debates de temas relevantes, assim como dinâmicas de integração das turmas, formam uma importante parte para a experiência do aluno no nosso Cursinho.
                    </Text>
                    <Text fontSize={14} mt={4}>
                        <Link href='/eventos' fontWeight='bold'>
                        Saiba mais sobre os eventos que promovemos{' '}
                            <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
            </Flex>
            <Flex gap={4} mt={4} px={{base: 4, lg: 12}} direction={{base: 'column', lg: 'row'}}>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                    </Box>
                    <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <ChalkboardTeacher size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold" w='180px'>
                            <Highlight query='Professores' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Professores Contratados
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    Professores especializados em sua área de ensino e selecionados pela nossa coordenação fornecem aulas e materiais para construir a base teórica da qual o aluno tanto precisará.
                    </Text>
                    <Text fontWeight='light' fontSize={16} mt={2}>
                    Venha fazer parte da nossa equipe como professor, plantonista e/ou corretor:
                    </Text>
                    <Text fontSize={14} mt={4}>
                        Entre em contato pelo nosso{' '}
                        <Link href='https://www.facebook.com/profcursinhofeausp' isExternal fontWeight='bold'>
                            facebook <ExternalLinkIcon mx='2px' />
                        </Link>
                        {' '}ou{' '}
                        <Link href='https://www.instagram.com/psnpcursinhofeausp/' isExternal fontWeight='bold'>
                            instagram <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Laptop size={64} color="#023047" weight="thin" />
                        <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                            <Highlight query={['Sala do Saber', 'Plurall']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Sala do Saber & Plurall
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    Acesso ilimitado às plataformas on-line Sala do Saber e Plurall, para o aluno ir além da sala de aula com exercícios, videoaulas e muito mais.
                    </Text>
                    <Text fontSize={{base: 14, lg: 16}} mt={8}>
                        Acessar{' '}
                        <Link href='https://saladosaber.com.br/' isExternal fontWeight='bold'>
                            saladosaber.com.br <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                    <Text fontSize={{base: 14, lg: 16}}>
                        Acessar{' '}
                        <Link href='https://www.plurall.net/' isExternal fontWeight='bold'>
                            plurall.net <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}