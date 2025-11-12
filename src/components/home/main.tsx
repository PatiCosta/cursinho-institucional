import {
    Box,
    Button,
    Flex,
    Highlight,
    Image,
    Text,
    Menu,           // Novo
    MenuButton,     // Novo
    MenuList,       // Novo
    MenuItem,       // Novo
    Icon
} from "@chakra-ui/react";
import { ArrowCircleUpRight, ArrowRight } from "phosphor-react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Novo
import Link from 'next/link';
import { useState } from "react";
// O import do 'api' não estava sendo usado, removi para limpar o código.

export function Main() {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <Flex px={{ base: 8, lg: 12 }} py={4}>
            <Box>
                <Text fontWeight='bold' fontSize={{ base: 20, sm: 20, lg: 40 }} textAlign={{ base: 'center', sm: 'center', lg: 'start' }}>
                    <Highlight query={['duas décadas', 'democratização']} styles={{ bg: 'transparent', color: 'yellow.500' }}>
                        Há mais de duas décadas trabalhando em prol da democratização do acesso ao ensino superior no Brasil
                    </Highlight>
                </Text>

                <Flex
                    w='100%' justifyContent='center' flex='1' mt={4} gap={4} display={{ base: 'flex', sm: 'flex', lg: 'none' }}>
                    {/* Imagens para mobile... */}
                    <Flex direction='column' gap={4}>
                        <Box
                            w={{ base: '40vw', lg: '24vw' }}
                            borderRadius='md'
                        >
                            <Image
                                src={'img/main1.png'}
                                maxW={{ base: '40vw', lg: '24vw' }}
                            />
                        </Box>
                        <Box
                            w={{ base: '40vw', lg: '24vw' }}
                            borderRadius='md'
                        >
                            <Image
                                src={'img/main2.png'}
                                maxW={{ base: '40vw', lg: '24vw' }}
                            />
                        </Box>
                    </Flex>
                    <Flex direction='column' gap={4}>
                        <Box
                            w={{ base: '40vw', lg: '24vw' }}
                            borderRadius='md'
                        >
                            <Image
                                src={'img/main3.png'}
                                maxW={{ base: '40vw', lg: '24vw' }}
                            />
                        </Box>
                        <Box
                            w={{ base: '40vw', lg: '24vw' }}
                            borderRadius='md'
                        >
                            <Image
                                src={'img/main4.png'}
                                maxW={{ base: '40vw', lg: '24vw' }}
                            />
                        </Box>
                    </Flex>
                </Flex>

                <Text fontWeight='light' fontSize={{ base: 14, sm: 14, lg: 20 }} mt={{ base: 4, sm: 4, lg: 10 }} textAlign={{ base: 'center', sm: 'center', lg: 'start' }}>
                    Cursinho FEAUSP está em constante aperfeiçoamento para proporcionar o melhor ensino e também a melhor experiência a todos os envolvidos no projeto.
                </Text>

                <Image
                    src={'img/up-arrow.png'}
                    transform={{ base: 'rotate(-170deg)', lg: 'rotate(-160.4deg)' }}
                    maxW={{ base: '40px', sm: '40px', lg: '80px' }}
                    mt={8}
                    ml={{ base: 'auto', sm: 'auto', lg: 12 }}
                    mr={{ base: 'auto', lg: 0 }}
                />

                <Flex gap={4} direction={{ base: 'column', sm: 'column', lg: 'row' }}>

                    {/* --- BOTÃO DE INSCRIÇÃO ATUALIZADO --- */}
                    {/* <Menu>
                        <MenuButton
                            as={Button} // Faz o MenuButton se parecer com um Button
                            bgColor='blue.800' 
                            color='gray.50' 
                            borderRadius='xl' 
                            size='lg' 
                            transition='all .3s ease' 
                            _hover={{
                                color: 'yellow.500'
                            }}
                            _active={{ // Adiciona um feedback visual ao clicar
                                bg: 'blue.900'
                            }}
                            // Adiciona o ícone de seta para baixo
                            rightIcon={<ChevronDownIcon />} 
                        >
                            Inscrever-se
                        </MenuButton>
                        <MenuList bgColor={'blue.600'} p={2} >
                            <MenuItem as={Link} href="/turmas" bgColor={'blue.600'} color={'white'} fontWeight={'semibold'} _hover={{bgColor:'orange.500', transition:'300ms'}} borderRadius={2}>
                                Inscrição via Sympla (com taxa)
                            </MenuItem>
                            <MenuItem as={Link} href="/inscricoes" bgColor={'blue.600'} color={'white'} fontWeight={'semibold'} _hover={{bgColor:'orange.500', transition:'300ms'}} borderRadius={2}>
                                Inscrição via PIX (sem taxa)
                            </MenuItem>
                        </MenuList>
                    </Menu> */}
                    {/* --- FIM DO BOTÃO ATUALIZADO --- */}
                    <Button
                        bgColor='blue.800'
                        color='gray.50'
                        borderRadius='xl'
                        size='lg'
                        transition='all .3s ease'
                        _hover={{
                            color: 'yellow.500'
                        }}
                        as={Link}
                        href={`/turmas`}
                        display='flex'
                    >
                        <Text>Inscrever-se</Text>
                    </Button>
                    <Button
                        as={Link}
                        href={`/doacoes`}
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
                        <Text>Nos ajude a voar 🚀</Text>
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
                    src={'img/todos_podem_voar.png'}
                    maxH={'40px'}
                    mt={8}
                    ml={{ base: 'auto', sm: 'auto', lg: 0 }}
                    mr={{ base: 'auto', lg: 0 }}
                />

            </Box>
            <Flex flex='1' h='100%' gap={4} display={{ base: 'none', sm: 'none', lg: 'flex' }}>
                {/* Imagens para desktop... */}
                <Flex direction='column' gap={4}>
                    <Box
                        w='24vw'
                        borderRadius='md'
                    >
                        <Image
                            src={'img/main1.png'}
                            maxW={'24vw'}
                        />
                    </Box>
                    <Box
                        w='24vw'
                        borderRadius='md'
                    >
                        <Image
                            src={'img/main2.png'}
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
                            src={'img/main3.png'}
                            maxW={'24vw'}
                        />
                    </Box>
                    <Box
                        w='24vw'
                        borderRadius='md'
                    >
                        <Image
                            src={'img/main4.png'}
                            maxW={'24vw'}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}