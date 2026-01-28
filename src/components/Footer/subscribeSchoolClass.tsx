import { Box, Button, Flex, Highlight, Image, Text, useBreakpointValue, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";
import { title } from "process";


export function SubscribeSchoolClassFooter() {
    const isLg = useBreakpointValue({ base: false, sm: false, lg: true })

    return (
        <Flex
            bgColor='yellow.400'
            borderRadius='24px'
            w={{ base: '90vw', lg: '60vw' }}
            position='absolute'
            top={{ base: '-12%', lg: '-30%' }}
            mx={{ base: '5vw', lg: '20vw' }}
            py={{ base: 8, lg: 10 }}
            px={{ base: 4, lg: 12 }}
            gap={6}
        >
            {isLg && <Image src='../../img/turma-01.png' maxH={52} my='auto' />}
            <Box textAlign={{ base: 'center', lg: 'start' }}>
                <Text fontSize={{ base: 28, lg: 40 }} color='gray.800' fontWeight='light'>
                    <Highlight query='o ideal para você?' styles={{ bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                        Essa turma é o ideal para você?
                    </Highlight>
                </Text>
                <Text fontSize={{ base: 12, lg: 14 }} mt={4}>
                    <Highlight query='#todospodemvoar' styles={{ fontWeight: 'bold', color: 'gray.50' }}>
                        Ao ingressar na nossa turma, você não está apenas se matriculando em um curso, mas se tornando parte de uma comunidade vibrante de aprendizes. #todospodemvoar
                    </Highlight>
                </Text>
                <Text fontSize={{ base: 12, lg: 14 }} mt={4}>
                    Venha conferir mais informações e descubra qual turma é a escolha perfeita para você
                    <ChakraLink fontWeight='bold' color='gray.50' href='https://pscfeausp.beehiiv.com/subscribe' isExternal>{' '}clicando aqui!</ChakraLink>
                </Text>


                <Menu>
                    <MenuButton

                    >
                        <Button
                            as={Link}
                            href={`/turmas`}
                            w='fit-content'
                            mt={{ base: 2, lg: 6 }}
                            mx={{ base: 'auto', lg: 0 }}
                            bgColor='gray.50'
                            borderRadius='2xl'
                            size={{ base: 'md', lg: 'lg' }}
                            display={{ base: 'none', lg: 'flex' }}
                            alignItems='center'
                            gap={2}
                            fontSize='24px'
                            fontWeight='regular'
                            _hover={{
                                opacity: 0.9
                            }}
                            onClick={() => window.location.pathname === '/turmas' ? window.scrollTo({ top: 60, behavior: 'smooth' }) : window.location.pathname = '/turmas'}
                        >
                            <Text>Inscreva-se agora!</Text>
                            <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                        </Button>

                    </MenuButton>
                    <MenuList bgColor='gray.50' p={2} >
                        <MenuItem as={Link} href="/inscricoes" bgColor='gray.50' fontWeight={'semibold'} _hover={{ textDecor: 'none', bgColor: 'blue.600', color: 'gray.50', transition: '300ms' }} borderRadius={8}>
                            <Flex alignItems={'center'} gap={2} justifyContent={'center'} fontWeight='bold' letterSpacing={.5}>Inscrição via PIX ou Cartão (sem taxa)</Flex>
                        </MenuItem>
                        <MenuItem as={Link}
                            href={
                                title === 'Turma de Semana Intensiva'
                                    ? 'https://www.sympla.com.br/turma-de-semana-intensiva-tsi---cursinho-feausp-2024__2488754'
                                    : title === 'Turma de Sábado'
                                        ? 'https://www.sympla.com.br/evento/turma-de-sabado-tsa-cursinho-feausp-2026/3211815'
                                        : title === 'Turma de Sábado de Maio'
                                            ? 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2026/3283819'
                                            // ? 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2024/2359347?_gl=1*1420re5*_ga*OTM4NzEzMDA5LjE3MDg5OTExMDY.*_ga_KXH10SQTZF*MTcwOTA4NzU0MC40LjEuMTcwOTA4Nzc2Ny41NC4wLjEzNDUxNzQxNjE'
                                            : title === 'Turma de Sábado de Maio'
                                                ? 'Turma de Semana'
                                                : 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2026/3283819'
                            }
                            bgColor='gray.50' fontWeight={'semibold'} _hover={{ textDecor: 'none', bgColor: 'blue.600', color: 'gray.50', transition: '300ms' }} borderRadius={8}>
                            <Flex alignItems={'center'} gap={2} justifyContent={'center'} fontWeight='bold' letterSpacing={.5}> Inscrição via Sympla (com taxa)</Flex>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    )
}