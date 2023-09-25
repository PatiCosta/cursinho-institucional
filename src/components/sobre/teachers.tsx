import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Highlight, Link, Text } from "@chakra-ui/react";
import { GraduationCap } from "phosphor-react";
import { ReverseColumnInfoLabel } from "../InfoLabel/column";

export function Teachers() {
    return (
        <Flex gap={{base: 8, lg: 16}} pb={12} mt={4} direction={{base: 'column', lg: 'row'}}>
            <Box 
                bgColor='transparent' 
                pr={{base: 4, lg: 8}} 
                py={8} 
                boxShadow='md' 
                ml={{base: 4, lg: 12}} 
                mr={{base: 4, lg: 0}} 
                flex='1.05' 
                position='relative'
                display={{base: 'none', lg: 'block'}}
            >
                <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                </Box>
                <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                </Box>
                <Flex alignItems='center' gap={4}>
                    <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                        <Highlight query='conosco' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Trabalhe conosco
                        </Highlight>
                    </Text>
                    <GraduationCap size={64} color="#023047" weight="thin" />
                </Flex>
                <Text fontWeight='light' fontSize={16} mt={4} pl={8}>
                Venha fazer parte da nossa equipe como professor, plantonista e/ou corretor
                </Text>
                <Text fontSize={16} mt={8} pl={8}>
                    Entre em contato pelo nosso{' '}
                    <Link href='https://www.facebook.com/profcursinhofeausp' isExternal fontWeight='bold'>
                        facebook <ExternalLinkIcon mx='2px' />
                    </Link>
                    {' '}ou{' '}
                    <Link href='https://www.instagram.com/psnpcursinhofeausp/' isExternal fontWeight='bold'>
                        instagram <ExternalLinkIcon mx='2px' />
                    </Link>
                </Text>
            </Box>
            <ReverseColumnInfoLabel 
                title='Nossos professores'
                bgColor='blue.800'
                info='Contamos atualmente com 32 professores formados em sua área de atuação, que trabalham diariamente para garantir o aprendizado dos alunos! Somos muito criteriosos quanto à escolha deles e, uma vez que ingressam na entidade, somos muito gratos pelo trabalho que realizam.'
            />
            <Box 
                bgColor='transparent' 
                pr={{base: 4, lg: 8}} 
                py={8} 
                boxShadow='md' 
                ml={{base: 4, lg: 12}} 
                mr={{base: 4, lg: 0}} 
                flex='1.05' 
                position='relative'
                display={{base: 'block', lg: 'none'}}
            >
                <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                </Box>
                <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                </Box>
                <Flex alignItems='center' gap={4}>
                    <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                        <Highlight query='conosco' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Trabalhe conosco
                        </Highlight>
                    </Text>
                    <GraduationCap size={64} color="#023047" weight="thin" />
                </Flex>
                <Text fontWeight='light' fontSize={16} mt={4} pl={8}>
                    Venha fazer parte da nossa equipe como professor, plantonista e/ou corretor
                </Text>
                <Text fontSize={16} mt={8} pl={8}>
                    Entre em contato pelo nosso{' '}
                    <Link href='https://www.facebook.com/profcursinhofeausp' isExternal fontWeight='bold'>
                        facebook <ExternalLinkIcon mx='2px' />
                    </Link>
                    {' '}ou{' '}
                    <Link href='https://www.instagram.com/psnpcursinhofeausp/' isExternal fontWeight='bold'>
                        instagram <ExternalLinkIcon mx='2px' />
                    </Link>
                </Text>
            </Box>
        </Flex>
    )
}