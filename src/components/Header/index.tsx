import {Box, Button, Collapse, Flex, IconButton, Image, Text, useDisclosure} from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { List } from 'phosphor-react';
import { useState } from 'react';

interface menuButtonProps {
    title: string;
    link: string;
}

const MenuButton = ({title, link}: menuButtonProps) => {
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const isActive = router.pathname === `/${link}`

    return (
        <Flex
            direction={{base: 'row', sm: 'row', lg: 'column'}}
            alignItems='center'
            justifyContent='center'
            py={2}
            px={4}
            cursor='pointer'
        >
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
            {isActive && <Box bgColor='yellow.500' w='4px' h='4px' borderRadius='100%' ml={{base: 2, sm: 2, lg: 0}} />}
        </Flex>
    )
}

export default function Header() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>        
            <Flex
                alignItems='center'
                justifyContent='space-between'
                px={12}
                py={6}
                w='100vw'
            >
                <Image 
                    src={'static/img/logo.png'} 
                    maxH={{base: 8, sm: 8, lg: 16}}
                />
                <Flex gap={2} display={{base: 'none', sm: 'none', lg: 'flex'}}>
                    <MenuButton title='Início' link='' />
                    <MenuButton title='Sobre' link='sobre' />
                    <MenuButton title='Turmas' link='turmas' />
                    <MenuButton title='Inspirações' link='inspiracoes' />
                    <MenuButton title='Eventos' link='eventos' />
                    <MenuButton title='Doações' link='doacoes' />
                </Flex>
                <Button bgColor='blue.800' color='yellow.500' borderRadius='3xl' transition='all .3s ease' _hover={{
                    bgColor: 'yellow.500',
                    color: 'blue.800'
                }} size={{base: 'sm', sm: 'sm', lg: 'lg'}} display={{base: 'none', sm: 'none', lg: 'block'}}>
                    <Text>Inscrever-se</Text>
                </Button>
                <IconButton
                    display={{base: 'flex', sm: 'flex', lg: 'none'}}
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
                    <MenuButton title='Inspirações' link='inspiracoes' />
                    <MenuButton title='Eventos' link='eventos' />
                    <MenuButton title='Doações' link='doacoes' />
                </Box>
            </Collapse>
        </>
    )
}