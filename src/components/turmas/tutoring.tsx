import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Highlight, Image, Link, Text } from "@chakra-ui/react";
import { Books } from "phosphor-react";
import { ColumnInfoLabel } from "../InfoLabel/column";

export function Tutoring() {
    return (
        <Box pt={{base: 8, sm: 8, lg: 12}} pb={{base: 16, lg: 12}}>
            <Flex alignItems='center' w='100vw' px={{base: 4, lg: 12}} justifyContent='center' gap={{base: 2, sm: 2, lg: 4}}>
                <Box h='2px' bgColor='blue.800' flex='1' />
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center'>
                    <Highlight query='Tutorias' styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                        Nossas Tutorias
                    </Highlight>
                </Text>
                <Box h='2px' bgColor='blue.800' flex='1' />
            </Flex>
            <Flex justifyContent='center' w='100vw' mt={4}>
                <Text w={{base: '80vw', lg: '60vw'}} fontWeight='light' fontSize={{base: 16, sm: 16, lg: 20}} textAlign='center'>
                    <Highlight query={['apoio acadêmico e pedagógico', 'diálogo']} styles={{bg: 'transparent', color: 'yellow.400', fontWeight: 'semibold' }}>
                        Um projeto que procura dar apoio acadêmico e pedagógico para os nossos alunos por meio do diálogo entre eles e seus tutores: estudantes universitários voluntários.
                    </Highlight>
                </Text>
            </Flex>
            <Flex 
                px={{base: 8, lg: 12}} 
                mt={{base: 4, lg: 12}} 
                gap={{base: 4, lg: 8}} 
                alignItems='start' 
                direction={{base: 'column', lg: 'row'}}
            >
                <Box
                    borderRadius='md'
                    flexShrink='0'
                    display={{base: 'block', lg: 'none'}}
                >
                    <Image 
                        src={'img/tutoria.png'} 
                        w='100vw'
                        h='40vh'
                        objectFit='cover'
                        borderRadius='xl'
                    />
                </Box>
                <Flex 
                    w='100%' 
                    bgColor='yellow.400' 
                    borderRadius='64px' 
                    borderBottomRightRadius={{base: '64px', lg: 0}}
                    borderTopLeftRadius={{base: 0, lg: '64px'}} 
                    p={{base: 8, lg: 12}}
                    textAlign='start'
                    direction='column'
                    gap={4}
                    h={{base: '100%', lg: '60vh'}}
                >
                    <Text color='gray.50' fontWeight='bold' fontSize={{base: 18, lg: 20}}>
                        Stephany Cristovam da Silva:
                    </Text>
                    <Text
                        fontSize={{base: 14, lg: 16}} 
                        fontStyle='italic'
                    >
                        {'    '}“O processo para prestar vestibular é intenso. Difícil (principalmente vindo de escolas públicas, onde não somos adequadamente preparados para vestibulares).
                    </Text>
                    <Text
                        fontSize={{base: 14, lg: 16}} 
                        fontStyle='italic'
                    >
                        Ter apoio nesses momentos em que estamos fazendo escolhas e nos preparando para a faculdade é essencial. 
                    </Text>
                    <Text
                        fontSize={{base: 14, lg: 16}} 
                        fontStyle='italic'
                    >
                        A tutoria me trouxe conforto, pois eu sabia que eu teria alguém pra conversar se precisasse. Minha tutora ajudou a esclarecer dúvidas e me acompanhou nos resultados bons e ruins (valeu, Lu). Valeu a pena.”
                    </Text>
                    <Text fontSize={{base: 12, lg: 14}} mt='auto' textAlign='end'>
                        Relato da nossa aluna de tutoria sobre a sua experiência, em (inserir o ano)
                    </Text>
                </Flex>
                <Box
                    borderRadius='md'
                    flexShrink='0'
                    display={{base: 'none', lg: 'block'}}
                >
                    <Image 
                        src={'img/tutoria.png'} 
                        w='40vw'
                        h='60vh'
                        objectFit='cover'
                        borderRadius='xl'
                    />
                </Box>
            </Flex>
            <Flex gap={{base: 4, lg: 8}} mt={{base: 4, lg: 8}} direction={{base: 'column', lg: 'row'}}>
                <ColumnInfoLabel 
                    title='O que é?'
                    info='Trata-se de uma oportunidade para o aluno receber um acompanhamento individualizado, obtendo suporte na preparação para os vestibulares. É um espaço onde os alunos podem esclarecer dúvidas sobre a escolha de carreira, universidades e realização de vestibulares, além de receber dicas e auxílio na organização de cronogramas de estudo e esclarecer dúvidas sobre matérias específicas. O aluno que deseja participar será alocado a um estudante universitário, aluno da USP ou ex-aluno do Cursinho FEA-USP, que será seu tutor ao longo do ano. '
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
                            <Highlight query='interessou' styles={{bg: 'transparent', color: 'yellow.500' }}>
                                Se interessou pelo projeto?
                            </Highlight>
                        </Text>
                        <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    </Flex>
                    <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                        Se você já for aluno do Cursinho, comunique a Coordenação, para que você seja alocado. Caso você seja graduando da USP, ou ex-aluno do Cursinho estudando em qualquer universidade, pode se tornar um tutor e impactar a vida dos alunos!
                    </Text>
                    <Text fontSize={{base: 14, lg: 16}} mt={8}>
                        Inscreva-se no Processo Seletivo de Novos Tutores{' '}
                        <Link href='https://forms.gle/1p5zxwVtddx36oqg6https://forms.gle/1p5zxwVtddx36oqg6' isExternal fontWeight='bold'>
                            aqui <ExternalLinkIcon mx='2px' />
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}