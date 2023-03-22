import { Box, Button, Grid, Highlight, Text } from "@chakra-ui/react";
import { ArrowCircleUpRight, Books, Laptop, Notebook } from "phosphor-react";
import { useState } from "react";

export default function Diferentials() {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <Box p={12}>
            <Grid
                templateColumns='1.1fr .9fr'
                gap={4}
            >
                <Box bgColor='blue.800' color='gray.50' p={8} borderRadius='lg' boxShadow='md'>
                    <Text fontSize="32px" fontWeight="bold">
                        <Highlight query='diferenciais' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Nossos diferenciais
                        </Highlight>
                    </Text>
                    <Text fontWeight='regular' fontSize='24px' w='70%'>
                        <Highlight query='você' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Para garantir o melhor ensino para você
                        </Highlight>
                    </Text>
                    <Button 
                        mt={12} 
                        bgColor='gray.50' 
                        color='blue.800' 
                        borderRadius='xl' 
                        size='lg' 
                        display='flex' 
                        alignItems='center' 
                        justifyContent='center' 
                        gap={2}
                        _hover={{
                            bgColor: 'gray.50'
                        }}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        <Text>Veja todos</Text>
                        <ArrowCircleUpRight 
                            size={isButtonHovered ? 24 : 0} 
                            color="#023047" 
                            weight="fill" 
                            style={{
                                transition: 'all 0.2s ease'
                                
                            }} 
                        />
                    </Button>
                </Box>
                <Box bgColor='gray.100' p={8} borderRadius='lg' h='100%' boxShadow='md'>
                    <Books size={64} color="#ffb703" weight="duotone" />
                    <Text fontSize="24px" fontWeight="bold">
                        <Highlight query='Anglo' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Material Anglo
                        </Highlight>
                    </Text>
                    <Text fontWeight='light' fontSize='16px' mt={4}>
                        Apostilas didáticas gratuitas fornecidas pelo Anglo dão uma excelente base para o aluno que vai prestar Enem, Unesp, Unicamp, Fuvest ou qualquer outro vestibular.
                    </Text>
                </Box>
            </Grid>
            <Grid
                templateColumns='1fr 1fr'
                gap={4}
                mt={4}
            >
                <Box bgColor='gray.100' p={8} borderRadius='lg' h='100%' boxShadow='md'>
                    <Notebook size={64} color="#ffb703" weight="duotone" />
                    <Text fontSize="24px" fontWeight="bold">
                        <Highlight query='Le Monde' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Revistas Le Monde
                        </Highlight>
                    </Text>
                    <Text fontWeight='light' fontSize='16px' mt={4}>
                    Revistas mensais da Le Monde são disponibilizadas para que os alunos nunca fiquem por fora das atualidades!
                    </Text>
                </Box>
                <Box bgColor='gray.100' p={8} borderRadius='lg' h='100%' boxShadow='md'>
                    <Laptop size={64} color="#ffb703" weight="duotone" />
                    <Text fontSize="24px" fontWeight="bold">
                        <Highlight query={['Sala do Saber', 'Plurall']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Sala do Saber & Plurall
                        </Highlight>
                    </Text>
                    <Text fontWeight='light' fontSize='16px' mt={4}>
                    Acesso ilimitado às plataformas on-line Sala do Saber e Plurall, para o aluno ir além da sala de aula com exercícios, videoaulas e muito mais.
                    </Text>
                </Box>
            </Grid>
        </Box>
    )
}