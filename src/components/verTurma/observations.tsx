import { CourseDocument } from "@/interfaces/Course.interface";
import { Box, Flex, Highlight, Link, Text } from "@chakra-ui/react";
import { ArrowSquareOut, Question } from "phosphor-react";

interface ObservationsProps {
    color: string
    observations?: string
    documents?: CourseDocument[]
}

export function Observations({color, observations, documents}: ObservationsProps) {
    return (
        <Flex position='relative' w='100vw' pt={{base: 8, lg: 20}} gap={{base: 8, lg: 12}} direction={{base: 'column', lg: 'row'}} mt={-1}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', top: '0', zIndex: '-100', transform: 'scaleX(-1)'}}><path fill={color} fill-opacity="1" d="M0,288L20,266.7C40,245,80,203,120,186.7C160,171,200,181,240,186.7C280,192,320,192,360,170.7C400,149,440,107,480,96C520,85,560,107,600,101.3C640,96,680,64,720,58.7C760,53,800,75,840,74.7C880,75,920,53,960,53.3C1000,53,1040,75,1080,90.7C1120,107,1160,117,1200,117.3C1240,117,1280,107,1320,101.3C1360,96,1400,96,1420,96L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute', top: '0', zIndex: '-100'}}><path fill={color} fill-opacity="1" d="M0,320L20,282.7C40,245,80,171,120,149.3C160,128,200,160,240,176C280,192,320,192,360,213.3C400,235,440,277,480,272C520,267,560,213,600,192C640,171,680,181,720,160C760,139,800,85,840,64C880,43,920,53,960,58.7C1000,64,1040,64,1080,53.3C1120,43,1160,21,1200,26.7C1240,32,1280,64,1320,85.3C1360,107,1400,117,1420,122.7L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <Box 
                bgColor='gray.50' 
                pl={8} 
                py={8} 
                boxShadow='md' 
                flex='1.05' 
                position='relative'
                w={{base: '90vw', lg: '50vw'}}
                borderRadius='xl'
                mr={{base: 'auto', lg: 0}}
                ml={{base: 'auto', lg: 12}}
            >
                <Box borderBottomLeftRadius='100%' borderTopRightRadius='xl' bgColor={color} opacity={0.3} h='96px' w='96px' position='absolute' top='0' right='0' zIndex='1'>
                </Box>
                <Box borderTopRightRadius='100%' borderBottomLeftRadius='xl' bgColor={color} opacity={0.3} h='96px' w='96px' position='absolute' bottom='0' left='0' zIndex='1'>
                </Box>
                <Flex alignItems='center' gap={4}>
                    <Question size={56} color="#023047" weight="thin" />
                    <Text fontSize={{base: 20, lg: 24}} fontWeight="bold">
                        <Highlight query='Observações' styles={{bg: 'transparent', color: color }}>
                            Observações sobre esta turma 
                        </Highlight>
                    </Text>
                    <Box flex='1' h='2px' bgColor='blue.800'></Box>
                </Flex>
                <Text fontWeight='light' fontSize={{base: 14, lg: 16}} mt={4} pr={8}>
                    {observations ? observations : 'Não há nenhuma observação para esta turma'}
                </Text>
                <Text fontSize={16} mt={12}>
                    <Highlight query='Entre em contato conosco' styles={{bg: 'transparent', fontWeight: 'bold' }}>
                        Ainda tem alguma dúvida? Entre em contato conosco pelas nossas redes!
                    </Highlight>
                </Text>
            </Box>
            <Flex alignItems='flex-start' gap={4} direction='column' flex='.95' px={{base: 4, lg: 0}} minH='fit-content'>
                <Flex position='relative' bgColor='gray.50' borderRadius={{base: '64px', lg: '64px 0px 0px 64px'}} py={8} w='100%' justifyContent='end' alignItems='center' zIndex={-1}>
                    <Text fontSize={{base: 20, lg: 24}} fontWeight='semibold' color='gray.50' textAlign='end' px={{base: 6, lg: 12}} zIndex={1}>
                        Documentos
                    </Text>
                    <Box flex='1' h='2px' bgColor='gray.50' zIndex={1}></Box>
                    <Box zIndex={0} w='100%' h='100%' borderRadius={{base: '64px', lg: '64px 0px 0px 64px'}} bgColor={color} opacity={0.4} position='absolute' top='0' left='0' />
                </Flex>
                <Flex direction='column' fontSize={{base: 14, lg: 16}} fontWeight='light' pl={{base: 2, lg: 12}} pr={{base: 4, lg: 8}} textAlign={{base: 'center', lg: 'start'}}>
                    {documents && documents.length > 0 
                        ? documents.map(document => 
                            <Flex 
                                as={Link} 
                                href={document.downloadLink} 
                                alignItems='center' 
                                justifyContent='start' 
                                gap={2} 
                                py={2} 
                                cursor='pointer'
                                key={document.docsID}
                            >
                                <Text fontWeight='semibold' fontSize={16} textDecoration='underline'>{document.title}</Text>
                                <ArrowSquareOut size={20} color="#023047" weight="duotone" />
                            </Flex>
                            ) 
                        : 'Ainda não há documentos para esta turma'}
                </Flex>
            </Flex>
        </Flex>
    )
}