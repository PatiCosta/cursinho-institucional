import { Box, Button, Flex, Highlight, Image, Text, useBreakpointValue, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";


export function SubscribeSchoolClassFooter() {
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

    return (
        <Flex 
            bgColor='yellow.400' 
            borderRadius='24px' 
            w={{base: '90vw', lg: '60vw'}}  
            position='absolute' 
            top={{base: '-12%', lg: '-30%'}} 
            mx={{base: '5vw', lg: '20vw'}}  
            py={{base: 8, lg: 10}}
            px={{base: 4, lg: 12}} 
            gap={6}
        >
            {isLg && <Image src='../../img/turma-01.png' maxH={52} my='auto' />}
            <Box textAlign={{base: 'center', lg: 'start'}}>
                <Text fontSize={{base: 28, lg: 40}} color='gray.800' fontWeight='light'>
                    <Highlight query='o ideal para você?' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                        Essa turma é o ideal para você?
                    </Highlight>
                </Text>
                <Text fontSize={{base: 12, lg: 14}} mt={4}>
                    <Highlight query='#todospodemvoar' styles={{fontWeight: 'bold', color: 'gray.50' }}>
                        Ao ingressar na nossa turma, você não está apenas se matriculando em um curso, mas se tornando parte de uma comunidade vibrante de aprendizes. #todospodemvoar 
                    </Highlight>
                </Text>
                <Text fontSize={{base: 12, lg: 14}} mt={4}>
                    Venha conferir mais informações e descubra qual turma é a escolha perfeita para você
                    <ChakraLink fontWeight='bold' color='gray.50' href='https://pscfeausp.beehiiv.com/subscribe' isExternal>{' '}clicando aqui!</ChakraLink>
                </Text>
                <Button 
                    as={Link}
                    href={`/turmas`}
                    w='fit-content'
                    mt={{base: 2, lg: 6}}
                    mx={{base: 'auto', lg: 0}}
                    bgColor='gray.50' 
                    borderRadius='2xl' 
                    size={{base: 'md', lg: 'lg'}} 
                    display={{base: 'none', lg: 'flex' }}
                    alignItems='center' 
                    gap={2} 
                    fontSize='24px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                    onClick={() => window.location.pathname === '/turmas' ? window.scrollTo({top: 60, behavior: 'smooth'}) : window.location.pathname = '/turmas'}
                >
                    <Text>Inscreva-se agora!</Text>
                    <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                </Button>
            </Box>
        </Flex>
    )
}