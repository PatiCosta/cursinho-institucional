import { Box, Button, Flex, Grid, Highlight, Link, Menu, MenuButton, MenuItem, MenuList, Tag, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowCircleRight, Calendar, Clock, PencilSimpleLine, Target, UsersThree } from "phosphor-react";
import { SubscribeForm } from "./subscribeForm";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ArrowCircleRightIcon } from "@phosphor-icons/react";

interface MainProps {
    title: string
    color: string
    description: string
    dateSchedule: string
    hourSchedule: string
    classContent: string
    whoCanParticipate: string
    subscriptionSchedule: string
    price: number
    id: string | undefined
    stripeProductID: string
}

export function Main({ stripeProductID, id, title, color, description, dateSchedule, hourSchedule, classContent, whoCanParticipate, subscriptionSchedule, price }: MainProps) {
    const isLg = useBreakpointValue({ base: false, sm: false, lg: true })
    const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(price / 100)

    return (
        <Box
            pb={{ base: 0, lg: 4 }}
            pt={4}
            minH='72vh'
            position='relative'
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: '0', transform: 'scaleX(-1)', zIndex: '-100' }}>
                <path fill={color} fill-opacity="1" d="M0,96L34.3,117.3C68.6,139,137,181,206,202.7C274.3,224,343,224,411,224C480,224,549,224,617,197.3C685.7,171,754,117,823,101.3C891.4,85,960,107,1029,101.3C1097.1,96,1166,64,1234,64C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            <Flex px={{ base: 4, lg: 12 }} w='100vw' justifyContent='space-between' pb={4} direction={{ base: 'column', lg: 'row' }}>
                <Box h='inherit' position='relative'>
                    <Text
                        fontWeight='bold'
                        fontSize={{ base: 32, sm: 32, lg: 48 }}
                        textAlign={{ base: 'center', sm: 'center', lg: 'start' }}
                        letterSpacing={1}
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize={{ base: 14, sm: 14, lg: 16 }}
                        textAlign={{ base: 'center', sm: 'center', lg: 'start' }}
                        w={{ base: '90vw', lg: '40vw' }}
                        mt={{ base: 4, lg: 8 }}
                    >
                        {description}
                    </Text>

                    <Menu>
                        <MenuButton
                            position='absolute'
                            bottom='0px'
                            py={12}
                            px={16}
                            bgColor='gray.50'
                            display={{ base: 'none', lg: 'flex' }}
                            gap={4}
                            fontSize={20}
                            borderRadius='2xl'
                            _hover={{ bgColor: 'gray.100' }}

                        >
                            <Text fontWeight='bolder' letterSpacing={.5}>Quero me inscrever!</Text>

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
                    {/* <Link
                        position='absolute'
                        bottom='0px'
                        py={12}
                        px={16}
                        size='lg'
                        bgColor='gray.50'
                        display={{ base: 'none', lg: 'flex' }}
                        gap={4}
                        fontSize={20}
                        borderRadius='2xl'
                        _hover={{ bgColor: 'gray.100' }}
                        target='_blank'
                        href={
                            title === 'Turma de Semana Intensiva'
                                ? 'https://www.sympla.com.br/turma-de-semana-intensiva-tsi---cursinho-feausp-2024__2488754'
                                : title === 'Turma de Sábado'
                                    ? 'https://www.sympla.com.br/evento/turma-de-sabado-tsa-cursinho-feausp-2026/3211815'
                                    : title === 'Turma de Sábado de Maio'
                                        ? 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2025/2844185'
                                        // ? 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2024/2359347?_gl=1*1420re5*_ga*OTM4NzEzMDA5LjE3MDg5OTExMDY.*_ga_KXH10SQTZF*MTcwOTA4NzU0MC40LjEuMTcwOTA4Nzc2Ny41NC4wLjEzNDUxNzQxNjE'
                                        : title === 'Turma de Sábado de Maio'
                                            ? 'Turma de Semana'
                                            : 'https://www.sympla.com.br/evento/turma-de-semana-tse-cursinho-feausp-2026/3211900'
                        }
                    >
                        <Text fontWeight='bolder' letterSpacing={.5}>Quero me inscrever!</Text>
                        <Text>→</Text>
                    </Link> */}
                    {/* <SubscribeForm stripeProductID={stripeProductID} id={id} color={color} title={title} price={price/100} /> */}
                </Box>
                <Box mt={{ base: 6, lg: 0 }}>
                    <Box
                        bgColor='transparent'
                        pl={8}
                        py={8}
                        boxShadow='md'
                        flex='1.05'
                        position='relative'
                        w={{ base: '90vw', lg: '50vw' }}
                        borderRadius='xl'
                        mx={{ base: 'auto', lg: 0 }}
                    >
                        <Box borderBottomLeftRadius='100%' borderTopRightRadius='xl' bgColor={color} opacity={0.3} h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                        </Box>
                        <Box borderTopRightRadius='100%' borderBottomLeftRadius='xl' bgColor={color} opacity={0.3} h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                        </Box>
                        <Flex alignItems='center' gap={4}>
                            <PencilSimpleLine size={48} color="#023047" weight="duotone" />
                            <Text fontSize={{ base: 20, lg: 24 }} fontWeight="bold">
                                <Highlight query='abertas!' styles={{ bg: 'transparent', color: color }}>
                                    Inscrições abertas!
                                </Highlight>
                            </Text>
                            <Box flex='1' h='2px' bgColor='blue.800'></Box>
                        </Flex>
                        <Text fontWeight='light' fontSize={{ base: 14, lg: 16 }} mt={4} pr={8}>
                            Se interessou pela turma? Não deixe essa chance passar. Junte-se a nós na busca constante pelo conhecimento e crescimento pessoal. Mal podemos esperar para recebê-lo em nossa turma! 🌟📚
                        </Text>
                        <Flex
                            alignItems='center'
                            justifyContent='space-between'
                            gap={2}
                            mt={8}
                            direction={{ base: 'column', lg: 'row' }}
                            pr={{ base: 8, lg: 0 }}
                            fontSize={{ base: 12, lg: 14 }}
                        >
                            <Text>
                                <Highlight query='Período das inscrições:' styles={{ bg: 'transparent', fontWeight: 'semibold', letterSpacing: '0.2px', color: 'gray.700' }}>
                                    {`Período das inscrições: ${subscriptionSchedule}`}
                                </Highlight>
                            </Text>
                            <Tag size='lg' variant='subtle' colorScheme='green' mr={{ base: 0, lg: 8 }}>
                                valor da inscrição: {formattedPrice}
                            </Tag>
                        </Flex>
                    </Box>
                    <Grid
                        templateColumns={{ base: '1fr 1fr 1fr', lg: '1fr 1fr 1fr' }}
                        gap={{ base: 2, lg: 4 }}
                        mt={{ base: 4, lg: 8 }}
                        w={{ base: '90vw', lg: '50vw' }}
                        textAlign='center'
                        mx={{ base: 'auto', lg: 0 }}
                    >
                        <Flex
                            direction='column'
                            alignItems='center'
                            justifyContent='space-between'
                            bgColor='gray.50'
                            borderRadius='xl'
                            p={4}
                            boxShadow='md'
                            position='relative'
                            gridColumnStart={1}
                            gridColumnEnd={4}
                        >
                            <Box
                                borderBottomRightRadius='100%'
                                borderTopLeftRadius='xl'
                                bgColor='gray.500'
                                opacity={0.3}
                                h='64px'
                                w='64px'
                                position='absolute'
                                top='0'
                                left='0'
                            >
                            </Box>
                            <Box borderTopLeftRadius='100%' borderBottomRightRadius='xl' bgColor='gray.500' opacity={0.3} h='64px' w='64px' position='absolute' bottom='0' right='0'>
                            </Box>
                            <Flex direction='column' gap={2} alignItems='center'>
                                <UsersThree
                                    size={isLg ? 40 : 28}
                                    color="#2a255a"
                                    weight="duotone"
                                />
                                <Text fontWeight='bold' fontSize={{ base: 14, lg: 16 }}>Quem pode participar?</Text>
                            </Flex>
                            <Text fontWeight='medium' fontSize={14}>{whoCanParticipate}</Text>
                        </Flex>
                        <Flex
                            direction='column'
                            alignItems='center'
                            justifyContent='space-between'
                            bgColor='gray.50'
                            borderRadius='xl'
                            p={4}
                            boxShadow='md'
                            position='relative'
                        >
                            <Box
                                borderBottomLeftRadius='100%'
                                borderTopRightRadius='xl'
                                bgColor='gray.500'
                                opacity={0.3}
                                h='64px'
                                w='64px'
                                position='absolute'
                                top='0'
                                right='0'
                            >
                            </Box>
                            <Box borderTopRightRadius='100%' borderBottomLeftRadius='xl' bgColor='gray.500' opacity={0.3} h='64px' w='64px' position='absolute' bottom='0' left='0'>
                            </Box>
                            <Flex direction='column' gap={2} alignItems='center'>
                                <Calendar
                                    size={isLg ? 40 : 26}
                                    color="#2a255a"
                                    weight="duotone"
                                />
                                <Text fontWeight='bold' fontSize={{ base: 14, lg: 16 }}>Dias de aula</Text>
                            </Flex>
                            <Text fontWeight='medium' fontSize={14}>{dateSchedule}</Text>
                        </Flex>
                        <Flex
                            direction='column'
                            alignItems='center'
                            justifyContent='space-between'
                            bgColor='gray.50'
                            borderRadius='xl'
                            p={4}
                            boxShadow='md'
                            position='relative'
                        >
                            <Box
                                borderBottomRightRadius='100%'
                                borderTopLeftRadius='xl'
                                bgColor='gray.500'
                                opacity={0.3}
                                h='64px'
                                w='64px'
                                position='absolute'
                                top='0'
                                left='0'
                            >
                            </Box>
                            <Box borderTopLeftRadius='100%' borderBottomRightRadius='xl' bgColor='gray.500' opacity={0.3} h='64px' w='64px' position='absolute' bottom='0' right='0'>
                            </Box>
                            <Flex direction='column' gap={2} alignItems='center'>
                                <Clock
                                    size={isLg ? 40 : 28}
                                    color="#2a255a"
                                    weight="duotone"
                                />
                                <Text fontWeight='bold' fontSize={{ base: 14, lg: 16 }}>Horário das aulas</Text>
                            </Flex>
                            <Text fontWeight='medium' fontSize={14}>{hourSchedule}</Text>
                        </Flex>
                        <Flex
                            direction='column'
                            alignItems='center'
                            justifyContent='space-between'
                            bgColor='gray.50'
                            borderRadius='xl'
                            p={4}
                            boxShadow='md'
                            position='relative'
                        >
                            <Box
                                borderBottomLeftRadius='100%'
                                borderTopRightRadius='xl'
                                bgColor='gray.500'
                                opacity={0.3}
                                h='64px'
                                w='64px'
                                position='absolute'
                                top='0'
                                right='0'
                            >
                            </Box>
                            <Box borderTopRightRadius='100%' borderBottomLeftRadius='xl' bgColor='gray.500' opacity={0.3} h='64px' w='64px' position='absolute' bottom='0' left='0'>
                            </Box>
                            <Flex direction='column' gap={2} alignItems='center'>
                                <Target
                                    size={isLg ? 40 : 28}
                                    color="#2a255a"
                                    weight="duotone"
                                />
                                <Text fontWeight='bold' fontSize={{ base: 14, lg: 16 }}>Conteúdo</Text>
                            </Flex>
                            <Text fontWeight='medium' fontSize={14}>{classContent}</Text>
                        </Flex>
                    </Grid>
                </Box>
                <Link
                    size='lg'
                    bgColor='gray.50'
                    display={{ base: 'flex', lg: 'none' }}
                    gap={4}
                    fontSize={20}
                    py={12}
                    px={8}
                    borderRadius='2xl'
                    _hover={{ bgColor: 'gray.100' }}
                    mt={8}
                    boxShadow='2xl'
                    target='_blank'
                    href={
                        title === 'Turma de Semana Intensiva'
                            ? 'https://www.sympla.com.br/turma-de-semana-intensiva-tsi---cursinho-feausp-2024__2488754'
                            : title === 'Turma de Sábado'
                                ? 'https://www.sympla.com.br/evento/turma-de-sabado-tsa-cursinho-feausp-2025/2747450'
                                : title === 'Turma de Sábado de Maio'
                                    ? 'https://www.sympla.com.br/evento/turma-de-sabado-de-maio-tsm-cursinho-feausp-2024/2359347?_gl=1*1420re5*_ga*OTM4NzEzMDA5LjE3MDg5OTExMDY.*_ga_KXH10SQTZF*MTcwOTA4NzU0MC40LjEuMTcwOTA4Nzc2Ny41NC4wLjEzNDUxNzQxNjE'
                                    : title === 'Turma de Sábado de Maio'
                                        ? 'Turma de Semana'
                                        : 'https://www.sympla.com.br/evento/turma-de-semana-tse-cursinho-feausp-2025/2750729'
                    }
                >
                    <Text fontWeight='bolder' letterSpacing={.5}>Quero me inscrever!</Text>
                    <Text>→</Text>
                </Link>
            </Flex>


        </Box>
    )
}