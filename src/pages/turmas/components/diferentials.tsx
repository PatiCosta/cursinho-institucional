import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Highlight, Link, Text } from "@chakra-ui/react";
import { Books, Calendar, ChalkboardTeacher, Laptop, Notebook, Users } from "phosphor-react";
import { useState } from "react";

export default function Diferentials() {

    return (
        <Box mt={16}>
            <Flex gap={8}>
                <Flex alignItems='flex-start' gap={4} direction='column' flex='.95'>
                    <Flex bgColor='blue.800' borderRadius='0px 64px 64px 0px' py={8} w='100%' justifyContent='end' alignItems='center'>
                        <Box flex='1' h='2px' bgColor='gray.50'></Box>
                        <Text fontSize={24} fontWeight='semibold' color='gray.50' textAlign='end' px={12}>Nossos diferenciais</Text>
                    </Flex>
                    <Text fontSize={16} fontWeight='light' pl={12} pr={8} textAlign='end'>
                        Somos um cursinho pré-vestibular, sem mensalidades, fundado em 2000 e gerido pelos alunos da FEA-USP. O Cursinho foi fundado com a iniciativa de alunos da FEA, com o apoio do CAVC e da então diretoria da faculdade.
                    </Text>
                </Flex>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' mr={12} flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Books size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold">
                            <Highlight query='Anglo' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Material Anglo
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                        Apostilas didáticas gratuitas fornecidas pelo Anglo dão uma excelente base para o aluno que vai prestar Enem, Unesp, Unicamp, Fuvest ou qualquer outro vestibular.
                    </Text>
                    <Text fontSize={16} mt={8}>
                        Acessar{' '}
                        <Link href='https://www.sistemaanglo.com.br/' isExternal fontWeight='bold'>
                            sistemaanglo.com.br <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
            </Flex>
            <Flex gap={4} mt={4} px={12}>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                    </Box>
                    <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <ChalkboardTeacher size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold" w='180px'>
                            <Highlight query='Professores' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Professores Contratados
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                    Professores especializados em sua área de ensino e selecionados pela nossa coordenação fornecem aulas e materiais para construir a base teórica da qual o aluno tanto precisará.
                    </Text>
                </Box>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Users size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold">
                            <Highlight query='Tutoria' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Tutoria
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                    A tutoria é um projeto que procura dar apoio acadêmico e pedagógico para os nossos alunos por meio do diálogo entre eles e seus tutores: estudantes universitários voluntários.
                    </Text>
                </Box>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                    </Box>
                    <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Calendar size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold">
                            <Highlight query='Eventos' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Eventos
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                    Palestras para debates de temas relevantes, assim como dinâmicas de integração das turmas, formam uma importante parte para a experiência do aluno no nosso Cursinho.
                    </Text>
                </Box>
            </Flex>
            <Flex gap={4} mt={4} px={12}>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Notebook size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold" w='180px'>
                            <Highlight query='Le Monde' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Revistas Le Monde
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                    Revistas mensais da Le Monde são disponibilizadas para que os alunos nunca fiquem por fora das atualidades!
                    </Text>
                    <Text fontSize={16} mt={8}>
                        Acessar{' '}
                        <Link href='https://diplomatique.org.br/' isExternal fontWeight='bold'>
                            diplomatique.org.br <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' flex='1.05' position='relative'>
                    <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                    </Box>
                    <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Laptop size={64} color="#023047" weight="thin" />
                        <Text fontSize="24px" fontWeight="bold">
                            <Highlight query={['Sala do Saber', 'Plurall']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Sala do Saber & Plurall
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={16} mt={4} pr={8}>
                    Acesso ilimitado às plataformas on-line Sala do Saber e Plurall, para o aluno ir além da sala de aula com exercícios, videoaulas e muito mais.
                    </Text>
                    <Text fontSize={16} mt={8}>
                        Acessar{' '}
                        <Link href='https://saladosaber.com.br/' isExternal fontWeight='bold'>
                            saladosaber.com.br <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                    <Text fontSize={16}>
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