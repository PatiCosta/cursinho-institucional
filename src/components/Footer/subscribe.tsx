import { Box, Button, Flex, Highlight, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";


export function SubscribeFooter() {
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

    return (
        <Flex 
            bgColor='yellow.400' 
            borderRadius='24px' 
            w={{base: '90vw', lg: '60vw'}}  
            position='absolute' 
            top={{base: '-20%', lg: '-25%'}} 
            mx={{base: '5vw', lg: '20vw'}}  
            py={{base: 8, lg: 12}}
            px={{base: 4, lg: 12}} 
            gap={4}
        >
            {isLg && <Image src='img/study.png' maxH={52} my='auto' />}
            <Box textAlign={{base: 'center', lg: 'start'}}>
                <Text fontSize={{base: 32, lg: 40}} color='gray.800' fontWeight='light'>
                    <Highlight query='Não perca' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                        Não perca essa chance!
                    </Highlight>
                </Text>
                <Text fontSize={{base: 12, lg: 14}} mt={4}>
                <Highlight query='#todospodemvoar' styles={{fontWeight: 'bold', color: 'gray.50' }}>
                Você está se preparando para os vestibulares? Realize sua inscrição no Processo Seletivo daquela(s) turma(s) do Cursinho FEAUSP que melhor atender(em) às suas necessidades. Anualmente, o Cursinho FEAUSP ajuda 480 vidas a alçarem voos cada vez maiores para conquistarem seu sonho de ingressar no ensino superior.  #todospodemvoar 
                    </Highlight>
                </Text>
                <Button 
                    as={Link}
                    href={`/turmas`}
                    w='fit-content'
                    mt={8}
                    mx={{base: 'auto', lg: 0}}
                    bgColor='gray.50' 
                    borderRadius='2xl' 
                    size={{base: 'md', lg: 'lg'}} 
                    display='flex' 
                    alignItems='center' 
                    gap={2} 
                    fontSize='24px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                    onClick={() => window.location.pathname === '/turmas' ? window.scrollTo({top: 60, behavior: 'smooth'}) : window.location.pathname = '/turmas'}
                >
                    <Text>Garanta sua vaga</Text>
                    <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                </Button>
            </Box>
        </Flex>
    )
}