import { Box, Collapse, Flex, IconButton, Image, Text, useDisclosure, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { List } from 'phosphor-react';
import { useState } from 'react';

interface menuButtonProps {
    title: string;
    link: string;
}

const MenuButton = ({ title, link }: menuButtonProps) => {
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const isActive = router.pathname.includes(`/${link}`)

    return (
        <Flex
            direction={{ base: 'row', sm: 'row', lg: 'column' }}
            alignItems='center'
            justifyContent='center'
            py={2}
            px={4}
            cursor='pointer'
        >
            {isActive && <Box bgColor='yellow.500' w='4px' h='4px' borderRadius='100%' mr={{ base: 2, sm: 2, lg: 0 }} display={{ base: 'block', lg: 'none' }} />}
            <Text
                as={Link}
                href={`/${link}`}
                color={isActive ? 'yellow.500' : 'blue.800'}
                fontWeight={isActive ? 'bold' : 'light'}
                position='relative'
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                _after={!isActive ? {
                    content: '""',
                    display: 'block',
                    margin: 'auto',
                    height: '2px',
                    width: isHovering ? '100%' : '0',
                    top: '6px',
                    background: isHovering ? 'yellow.500' : 'transparent',
                    transition: 'all 0.3s',
                } : {
                    content: '""',
                    display: 'none',
                }}
            >
                {title}
            </Text>
            {isActive && <Box bgColor='yellow.500' w='4px' h='4px' borderRadius='100%' ml={{ base: 2, sm: 2, lg: 0 }} />}
        </Flex>
    )
}

export default function Header() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box px={{ base: 8, lg: 12 }} w='100vw'>
            <Box
                borderBottom={{ base: '1px solid', lg: 'none' }}
                borderColor='gray.400'
            >
                <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    py={6}
                >
                    <Link href='/'>
                        <Image
                            src={'../../img/logo.png'}
                            maxH={{ base: 12, sm: 12, lg: 16 }}
                        />
                    </Link>
                    <Flex gap={2} display={{ base: 'none', sm: 'none', lg: 'flex' }}>
                        <MenuButton title='Início' link='home' />
                        <MenuButton title='Sobre' link='sobre' />
                        <MenuButton title='Turmas' link='turmas' />
                        <MenuButton title='Tutorias' link='tutorias' />
                        <MenuButton title='Campanha' link='campanha' />
                        <MenuButton title='Eventos' link='eventos' />
                        <MenuButton title='Doações' link='doacoes' />
                    </Flex>
                    <Flex flexDir={'row'} gap={2} alignItems='center' justifyContent='center'>

                        <Flex
                            as={Link}
                            href={`/turmas`}
                            bgColor='blue.800'
                            color='yellow.500'
                            borderRadius='3xl'
                            transition='all .3s ease'
                            _hover={{
                                bgColor: 'cyan.500',
                                color: 'white'
                            }}
                            px={4}
                            py={2}
                            display={{ base: 'none', sm: 'none', md: 'block' }}
                            fontWeight='semibold'
                        >
                            <Text>Ver nossas turmas</Text>
                        </Flex>
                        <Flex
                            as={Link}
                            href={`/inscricoes/acompanhar`}
                            bgColor='yellow.500'
                            color='blue.800'
                            borderRadius='3xl'
                            transition='all .3s ease'
                            _hover={{
                                bgColor: 'cyan.500',
                                color: 'white'
                            }}
                            px={4}
                            py={2}
                            display={{ base: 'none', sm: 'none', md: 'block' }}
                            fontWeight='semibold'
                        >
                            <Text>Acompanhar inscrição</Text>
                        </Flex>
                    </Flex>
                    <IconButton
                        display={{ base: 'flex', sm: 'flex', lg: 'none' }}
                        aria-label='Abrir menu'
                        bgColor='gray.50'
                        icon={<List size={28} color="#023047" />}
                        onClick={onToggle}
                        _hover={{
                            bgColor: 'transparent'
                        }}
                    />
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <Box>
                        <MenuButton title='Início' link='' />
                        <MenuButton title='Sobre' link='sobre' />
                        <MenuButton title='Turmas' link='turmas' />
                        <MenuButton title='Campanha' link='campanha' />
                        <MenuButton title='Eventos' link='eventos' />
                        <MenuButton title='Doações' link='doacoes' />
                    </Box>
                </Collapse>
            </Box>
        </Box>
    )
}