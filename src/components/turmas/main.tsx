import { Box, Button, Collapse, Flex, Grid, Highlight, Image, SlideFade, Tag, Text, useDisclosure } from "@chakra-ui/react";
import { ArrowCircleUpRight, Book, CalendarBlank, Clock, Target } from "phosphor-react";

interface classProps {
    imgSrc: string;
    title: string;
    bgColor: string;
    iconColor: string;
    color: string;
    status: 'closed' | 'open' | 'soon'
    target: string;
    scheduleDates: string;
    scheduleHours: string;
}

const Class = ({imgSrc, title, bgColor, iconColor, color, status, target, scheduleDates, scheduleHours}: classProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box borderRadius='2xl' bgColor='gray.50' boxShadow='xl'>
            <Flex 
                borderTopRadius='2xl' 
                alignItems='center' 
                justifyContent='space-between' 
                gap={2} 
                p={4} 
                bgColor={bgColor}
            >
                <Flex alignItems='center' justifyContent='center' bgColor='gray.50' maxH='88px' maxW='88px' minH='88px' minW='88px' borderRadius='100%'>
                    <Image 
                        src={imgSrc} 
                        minH={20}
                        maxH={20}
                    />
                </Flex>
                <Text color='gray.50' fontSize={20} fontWeight='bold' textAlign='center'>
                    {title}
                </Text>
            </Flex> 
            <Box py={4} px={8} position='relative'>
                <Flex w='100%' justifyContent='center' mb={4}>
                    <Tag size='lg' variant='outline' colorScheme={
                        status === 'open' ? 'green' : status === 'closed' ? 'red' : 'gray'
                    }>
                        Inscrições {status === 'open' ? 'abertas!' : status === 'closed' ? 'encerradas!' : 'em breve!'}
                    </Tag>
                </Flex>
                <Flex alignItems='center' justifyContent='start' gap={2} py={1}>
                    <Target size={28} color={iconColor} weight="duotone" />
                    <Text fontSize='14px'>{target}</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='start' gap={2} py={1}>
                    <CalendarBlank size={28} color={iconColor} weight="duotone" />
                    <Text fontSize='14px'>{scheduleDates}</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='start' gap={2} py={1}>
                    <Clock size={28} color={iconColor} weight="duotone" />
                    <Text fontSize='14px'>{scheduleHours}</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='start' gap={2} py={1} cursor='pointer' onClick={onToggle}>
                    <Book size={36} color={iconColor} weight="duotone" />
                    <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Informações do processo seletivo →</Text>
                </Flex>
                <Button 
                    mt={8} 
                    w='100%' 
                    bgColor={color} 
                    color='gray.50' 
                    borderRadius='2xl' 
                    size='lg' 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='space-between'
                    fontSize='18px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                    isDisabled={status !== 'open'}
                >
                    <Text>Inscreva-se</Text>
                    <ArrowCircleUpRight size={28} color="#F7FAFC" weight="fill" />
                </Button>
                <Collapse in={isOpen} animateOpacity>
                    <Box
                        py={4} px={8}
                        bg='gray.50'
                        h='72%'
                        w='100%'
                        borderBottomRadius='2xl'
                        position='absolute' 
                        top='0' 
                        left='0'
                    >
                        <Button size='sm' onClick={onToggle} marginLeft='88%'>x</Button>
                        <Flex alignItems='center' justifyContent='start' gap={2} py={2} cursor='pointer' onClick={onToggle}>
                            <Book size={20} color={iconColor} weight="duotone" />
                            <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Manual do candidato 2023 →</Text>
                        </Flex>
                        <Flex alignItems='center' justifyContent='start' gap={2} py={2} cursor='pointer' onClick={onToggle}>
                            <Book size={20} color={iconColor} weight="duotone" />
                            <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Termo de inscrição 2023 →</Text>
                        </Flex>
                        <Flex alignItems='center' justifyContent='start' gap={2} py={2} cursor='pointer' onClick={onToggle}>
                            <Book size={20} color={iconColor} weight="duotone" />
                            <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Resultado 1º fase 2023 →</Text>
                        </Flex>
                        <Flex alignItems='center' justifyContent='start' gap={2} py={2} cursor='pointer' onClick={onToggle}>
                            <Book size={20} color={iconColor} weight="duotone" />
                            <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Resultado 2º fase 2023 →</Text>
                        </Flex>
                        <Flex alignItems='center' justifyContent='start' gap={2} py={2} cursor='pointer' onClick={onToggle}>
                            <Book size={20} color={iconColor} weight="duotone" />
                            <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Lista de espera 2023 →</Text>
                        </Flex>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    )
}

export function Main() {
    return (
        <Flex px={{base: 4, lg: 12}} py={{base: 4, lg: 0}} direction='column' alignItems='center' justifyContent='center'>
            <Image 
                src={'static/img/logos_turmas.png'} 
                maxH={{base: 12, lg: 16}}
            />
            <Text fontSize={{base: 32, lg: 48}} fontWeight="bold" textAlign="center">
                <Highlight query='turmas' styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Nossas turmas
                </Highlight>
            </Text>
            <Box bgColor='blue.800' h='2px' w={{base: '300px', lg: '600px'}}></Box>
            <Text fontSize={{base: 14, lg: 16}} w={{base: '300px', lg: '800px'}} textAlign='center' mt={4}>
                As aulas são ministradas na Faculdade de Economia, Administração, Contabilidade e Atuária da USP (FEA USP), onde também se encontra a nossa coordenação. Nosso ensino, porém, não é direcionado apenas para estes cursos. Preparamos nossos alunos para prestar os principais vestibulares paulistas e o ENEM, para qualquer curso que ele desejar.
            </Text>
            <Grid alignItems='center' templateColumns={{base: '1fr', lg: '1fr 1fr 1fr 1fr'}} gap={4} pt={8}>
                <Class 
                    imgSrc='static/img/tse.png' 
                    title='Turma de semana' 
                    bgColor='classes.tse' 
                    iconColor='#023047' 
                    color='classes.tse' 
                    status='closed' 
                    target="Pré-vestibular"
                    scheduleDates="De segunda à sexta"
                    scheduleHours="Das 12h40 às 18h30"
                />
                <Class 
                    imgSrc='static/img/tsa.png' 
                    title='Turma de sábado' 
                    bgColor='classes.tsa' 
                    iconColor='#FFB703' 
                    color='classes.tsa' 
                    status='closed' 
                    target="Pré-vestibular"
                    scheduleDates="Aos sábados"
                    scheduleHours="Das 8h00 às 18h30"
                />
                <Class 
                    imgSrc='static/img/tsm.png' 
                    title='Turma de sábado de maio' 
                    bgColor='classes.tsm' 
                    iconColor='#E76F51' 
                    color='classes.tsm' 
                    status='open' 
                    target="Pré-vestibular"
                    scheduleDates="Aos sábados"
                    scheduleHours="Das 8h00 às 18h30"
                />
                <Class 
                    imgSrc='static/img/tsi.png' 
                    title='Turma de semana intensiva' 
                    bgColor='classes.tsi' 
                    iconColor='#702459' 
                    color='classes.tsi' 
                    status='soon' 
                    target="Pré-vestibular"
                    scheduleDates="De segunda à sexta"
                    scheduleHours="Das 12h40 às 18h30"
                />
            </Grid>
        </Flex>
    )
}