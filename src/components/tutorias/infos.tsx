import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Highlight, Image, Link, Text } from "@chakra-ui/react";
import { Books } from "phosphor-react";
import { ColumnInfoLabel } from "../InfoLabel/column";

export function Infos() {
    return (
        <Box pt={{base: 6, sm: 6, lg: 8}} pb={{base: 16, lg: 12}}>
            <Flex gap={{base: 4, lg: 8}} direction={{base: 'column', lg: 'row'}}>
                <ColumnInfoLabel 
                    title='O que é?'
                    info='Trata-se de uma oportunidade para o aluno receber um acompanhamento individualizado, obtendo suporte na preparação para os vestibulares. É um espaço onde os alunos podem esclarecer dúvidas sobre a escolha de carreira, universidades e realização de vestibulares, além de receber dicas e auxílio na organização de cronogramas de estudo e esclarecer dúvidas sobre matérias específicas. O aluno que deseja participar será alocado a um estudante universitário, aluno da USP ou ex-aluno do Cursinho FEA-USP, que será seu tutor ao longo do ano. '
                    bgColor='yellow.400'
                />
                <Box bgColor='transparent' pl={8} py={8} boxShadow='md' mr={{base: 4, lg: 12}} ml={{base: 4, lg: 0}} flex='1.05' position='relative'>
                    <Box borderBottomRightRadius='100%' bgColor='blue.700' h='96px' w='96px' position='absolute' top='0' left='0' zIndex='-1'>
                    </Box>
                    <Box borderTopLeftRadius='100%' bgColor='blue.700' h='96px' w='96px' position='absolute' bottom='0' right='0' zIndex='-1'>
                    </Box>
                    <Flex alignItems='center' gap={4}>
                        <Books size={64} color="#E9C46A" weight="thin" />
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
            <Text fontSize={{base: 28, lg: 32}}  fontWeight='semibold' textAlign='center' mt={12}>
                <Highlight query={['depoimento', 'participou:']} styles={{bg: 'transparent', color: 'yellow.500', fontWeight: 'bold' }}>
                    Veja o depoimento de quem já participou:
                </Highlight>
            </Text>
            <Flex 
                px={{base: 8, lg: 12}} 
                gap={{base: 4, lg: 8}} 
                mt={6}
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
                    bgColor='blue.800' 
                    borderRadius='64px' 
                    borderBottomRightRadius={{base: '64px', lg: 0}}
                    borderTopLeftRadius={{base: 0, lg: '64px'}} 
                    p={{base: 8, lg: 12}}
                    textAlign='start'
                    direction='column'
                    gap={4}
                    h={{base: '100%', lg: '60vh'}}
                    color='gray.50'
                >
                    <Text fontWeight='bold' fontSize={{base: 18, lg: 20}}>
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
                        Relato da nossa aluna de tutoria sobre a sua experiência
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
        </Box>
    )
}