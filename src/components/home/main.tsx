import { Box, Button, Flex, Highlight, Image, Text, Icon } from "@chakra-ui/react";
import { ArrowCircleUpRight } from "phosphor-react";
import Link from 'next/link';
import { useState } from "react";

export function Main() {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <Flex px={{base: 8, lg: 12}} py={4}>
            <Box>
                <Text fontWeight='bold' fontSize={{base: 20, sm: 20, lg: 48}} textAlign={{base: 'center', sm: 'center', lg: 'start'}}>
                    <Highlight query={['impactante', 'atenção']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Alguma frase bem impactante aqui para chamar muita atenção dos futuros alunos
                    </Highlight>
                </Text>

                <Flex 
                    w='100%' justifyContent='center' flex='1' mt={4} gap={4} display={{base: 'flex', sm: 'flex', lg: 'none'}}>
                    <Flex direction='column' gap={4}>
                        <Box
                        w={{base: '40vw', lg: '24vw'}}
                        borderRadius='md'
                        >
                        <Image 
                            src={'static/img/teste-img-1.png'} 
                            maxW={{base: '40vw', lg: '24vw'}}
                        />
                        </Box>
                        <Box
                        w={{base: '40vw', lg: '24vw'}}
                        borderRadius='md'
                        >
                        <Image 
                            src={'static/img/teste-img-2.png'} 
                            maxW={{base: '40vw', lg: '24vw'}}
                        />
                        </Box>
                    </Flex>
                    <Flex direction='column' gap={4}>
                    <Box
                        w={{base: '40vw', lg: '24vw'}}
                        borderRadius='md'
                        >
                        <Image 
                            src={'static/img/teste-img-2.png'} 
                            maxW={{base: '40vw', lg: '24vw'}}
                        />
                        </Box>
                        <Box
                        w={{base: '40vw', lg: '24vw'}}
                        borderRadius='md'
                        >
                        <Image 
                            src={'static/img/teste-img-1.png'} 
                            maxW={{base: '40vw', lg: '24vw'}}
                        />
                        </Box>
                    </Flex>
                </Flex>

                <Text fontWeight='light' fontSize={{base: 14, sm: 14, lg: 20}} mt={{base: 4, sm: 4, lg: 8}} textAlign={{base: 'center', sm: 'center', lg: 'start'}}>
                    Algum textinho explicativo aqui. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Text>

                <Image 
                    src={'static/img/up-arrow.png'} 
                    transform={{base: 'rotate(-170deg)', lg: 'rotate(-160.4deg)'}}
                    maxW={{base: '40px', sm: '40px', lg: '80px'}}
                    mt={8}
                    ml={{base: 'auto', sm: 'auto', lg: 12}}
                    mr={{base: 'auto', lg: 0}}
                />

                <Flex gap={4} direction={{base: 'column', sm: 'column', lg: 'row'}}>
                    <Button bgColor='blue.800' color='gray.50' borderRadius='xl' size='lg' transition='all .3s ease' _hover={{
                        color: 'yellow.500'
                    }}>
                        <Text>Inscrever-se</Text>
                    </Button>
                    <Button 
                        as={Link}
                        href={`/turmas`} 
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
                    ml={{base: 'auto', sm: 'auto', lg: 0}}
                    mr={{base: 'auto', lg: 0}}
                />

            </Box>
            <Flex flex='1' h='100%' gap={4} display={{base: 'none', sm: 'none', lg: 'flex'}}>
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