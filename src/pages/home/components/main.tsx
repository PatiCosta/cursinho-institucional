import { Box, Button, Flex, Highlight, Image, Text, Icon } from "@chakra-ui/react";
import { ArrowCircleUpRight } from "phosphor-react";
import { useState } from "react";

export default function Main() {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <Flex px={12} py={4}>
            <Box>
                <Text fontWeight='bold' fontSize={48}>
                    <Highlight query={['impactante', 'atenção']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Alguma frase bem impactante aqui para chamar muita atenção dos futuros alunos
                    </Highlight>
                </Text>

                <Text fontWeight='light' fontSize={20} mt={8}>
                    Algum textinho explicativo aqui. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Text>

                <Image 
                    src={'static/img/up-arrow.png'} 
                    transform={'rotate(-160.4deg)'}
                    maxW={'80px'}
                    mt={8}
                    ml={12}
                />

                <Flex gap={4}>
                    <Button bgColor='blue.800' color='gray.50' borderRadius='xl' size='lg' transition='all .3s ease' _hover={{
                        color: 'yellow.500'
                    }}>
                        <Text>Inscrever-se</Text>
                    </Button>
                    <Button 
                        bgColor='gray.50' 
                        border='1px solid' 
                        borderColor='yellow.500' 
                        borderRadius='xl' 
                        size='lg'
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        display='flex'
                        gap={2}
                        _hover={{
                            bgColor: 'gray.50'
                        }}
                    >
                        <Text>Saiba mais</Text>
                        <ArrowCircleUpRight 
                            size={isButtonHovered ? 24 : 0} 
                            color="#023047" 
                            weight="fill" 
                            style={{
                                transition: 'all 0.2s ease'
                                
                            }} 
                        />
                    </Button>
                </Flex>

                <Image 
                    src={'static/img/todos_podem_voar.png'} 
                    maxH={'40px'}
                    mt={8}
                />

            </Box>
            <Flex flex='1' h='100%' gap={4}>
            <Flex direction='column' gap={4}>
                <Box
                w='24vw'
                borderRadius='md'
                >
                <Image 
                    src={'static/img/teste-img-1.png'} 
                    maxW={'24vw'}
                />
                </Box>
                <Box
                w='24vw'
                borderRadius='md'
                >
                <Image 
                    src={'static/img/teste-img-2.png'} 
                    maxW={'24vw'}
                />
                </Box>
            </Flex>
            <Flex direction='column' gap={4}>
            <Box
                w='24vw'
                borderRadius='md'
                >
                <Image 
                    src={'static/img/teste-img-2.png'} 
                    maxW={'24vw'}
                />
                </Box>
                <Box
                w='24vw'
                borderRadius='md'
                >
                <Image 
                    src={'static/img/teste-img-1.png'} 
                    maxW={'24vw'}
                />
                </Box>
            </Flex>
            </Flex>
        </Flex>
    )
}