import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Highlight, Link, Text } from "@chakra-ui/react";
import { GraduationCap } from "phosphor-react";

export function Teachers() {
    return (
        <Flex gap={16} pb={12} mt={4}>
            <Box bgColor='transparent' pr={8} py={8} boxShadow='md' ml={12} flex='1.05' position='relative'>
                <Box borderBottomLeftRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' top='0' right='0' zIndex='-1'>
                </Box>
                <Box borderTopRightRadius='100%' bgColor='yellow.100' h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='-1'>
                </Box>
                <Flex alignItems='center' gap={4}>
                    <Box flex='1' h='2px' bgColor='blue.800'></Box>
                    <Text fontSize="24px" fontWeight="bold">
                        <Highlight query='conosco' styles={{bg: 'transparent', color: 'yellow.500' }}>
                            Trabalhe conosco
                        </Highlight>
                    </Text>
                    <GraduationCap size={64} color="#023047" weight="thin" />
                </Flex>
                <Text fontWeight='light' fontSize={16} mt={4} pl={8}>
                    Seja parte da nossa equipe etc etc bla bla bla
                </Text>
                <Text fontSize={16} mt={8} pl={8}>
                    Entre em contato pelo nosso{' '}
                    <Link href='https://www.facebook.com/profcursinhofeausp' isExternal fontWeight='bold'>
                        facebook <ExternalLinkIcon mx='2px' />
                    </Link>
                </Text>
            </Box>
            <Flex alignItems='flex-start' gap={4} direction='column' flex='.95'>
                <Flex bgColor='blue.800' borderRadius='64px 0px 0px 64px' py={8} w='100%' justifyContent='end' alignItems='center'>
                    <Text fontSize={24} fontWeight='semibold' color='gray.50' textAlign='end' px={12}>Nossos professores</Text>
                    <Box flex='1' h='2px' bgColor='gray.50'></Box>
                </Flex>
                <Text fontSize={16} fontWeight='light' pl={12} pr={8} textAlign='start'>
                Contamos atualmente com 32 professores formados em sua área de atuação, que trabalham diariamente para garantir o aprendizado dos alunos! Somos muito criteriosos quanto à escolha deles e, uma vez que ingressam na entidade, somos muito gratos pelo trabalho que realizam.
                </Text>
            </Flex>
        </Flex>
    )
}