import {Box, Button, Flex, Image, Text} from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface menuButtonProps {
    // isActive?: boolean;
    title: string;
    link: string;
}

const MenuButton = ({title, link}: menuButtonProps) => {
    const router = useRouter();
    const [isHovering, setIsHovering] = useState(false);
    const isActive = router.pathname === `/${link}`

    return (
        <Flex
            direction='column'
            alignItems='center'
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
            {isActive && <Box bgColor='yellow.500' w='4px' h='4px' borderRadius='100%' />}
        </Flex>
    )
}

export default function Header() {

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            px={12}
            py={6}
        >
            <Image 
                src={'static/img/logo.png'} 
                maxH={16}
            />
            <Flex gap={2}>
                <MenuButton title='Início' link='' />
                <MenuButton title='Sobre' link='sobre' />
                <MenuButton title='Turmas' link='turmas' />
                <MenuButton title='Inspirações' link='inspiracoes' />
                <MenuButton title='Doações' link='doacoes' />
            </Flex>
            <Button bgColor='blue.800' color='yellow.500' borderRadius='3xl' transition='all .3s ease' _hover={{
                bgColor: 'yellow.500',
                color: 'blue.800'
            }}>
                <Text>Inscrever-se</Text>
            </Button>
        </Flex>
    )
}