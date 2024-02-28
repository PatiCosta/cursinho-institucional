import { Course, CourseDocument } from "@/interfaces/Course.interface";
import { Box, Button, Collapse, Flex, Grid, Highlight, Image, Skeleton, Tag, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight, Book, CalendarBlank, ChalkboardTeacher, Clock, Target } from "phosphor-react";

interface classProps {
    title: string;
    bgColor: string;
    iconColor: string;
    status: 'Fechado' | 'Aberto' | 'Em breve'
    target: string;
    scheduleDates: string;
    scheduleHours: string;
    documents?: CourseDocument[]
    id?: string
}

interface MainProps {
    schoolClassList?: Course[]
}

const Class = ({title, bgColor, iconColor, status, target, scheduleDates, scheduleHours, documents, id}: classProps) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box borderRadius='2xl' bgColor='gray.50' boxShadow='xl'>
            <Flex 
                borderTopRadius='2xl' 
                alignItems='center' 
                justifyContent='center' 
                gap={8} 
                px={4}
                py={8} 
                bgColor={bgColor}
                h='100px'
            >
                {/* <Flex alignItems='center' justifyContent='center' bgColor='gray.50' maxH='88px' maxW='88px' minH='88px' minW='88px' borderRadius='100%'>
                    <Image 
                        src={imgSrc} 
                        minH={20}
                        maxH={20}
                    />
                </Flex> */}
                <ChalkboardTeacher size={36} color='#F7FAFC' weight="duotone" style={{flexShrink: '0'}} />
                <Text color='gray.50' fontSize={20} fontWeight='bold' textAlign='start'>
                    {title}
                </Text>
            </Flex> 
            <Box py={4} px={8} position='relative'>
                <Flex w='100%' justifyContent='center' mb={4}>
                    <Tag size='lg' variant='outline' colorScheme={
                        status === 'Aberto' ? 'green' : status === 'Fechado' ? 'red' : 'gray'
                    }>
                        Inscrições {status === 'Aberto' ? 'abertas!' : status === 'Fechado' ? 'encerradas!' : 'em breve!'}
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
                {documents && documents.length > 0 &&  <Flex alignItems='center' justifyContent='start' gap={2} py={1} cursor='pointer' onClick={onToggle}>
                    <Book size={36} color={iconColor} weight="duotone" />
                    <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>Informações do processo seletivo →</Text>
                </Flex>}
                <Button 
                    as={Link}
                    href={`turmas/${id}`}
                    mt={8} 
                    w='100%' 
                    bgColor={bgColor} 
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
                    style={{
                        pointerEvents: status !== 'Aberto' ? 'none' : 'auto'
                    }}
                    isDisabled={status !== 'Aberto'}
                    aria-disabled={status !== 'Aberto'} 
                    tabIndex={status !== 'Aberto' ? -1 : undefined}
                    // isDisabled
                    // aria-disabled
                    // tabIndex={-1}
                    // style={{
                    //     pointerEvents: 'none'
                    // }}
                >
                    <Text>Inscreva-se</Text>
                    <ArrowCircleUpRight size={28} color="#F7FAFC" weight="fill" />
                </Button>
                {documents && documents.length > 0 &&  
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
                            {documents.map(document => 
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
                                    <Book size={20} color={iconColor} weight="duotone" style={{flexShrink: '0'}} />
                                    <Text fontWeight='semibold' fontSize='14px' textDecoration='underline'>{document.title}</Text>
                                </Flex>
                            )}
                        </Box>
                    </Collapse>
                }
            </Box>
        </Box>
    )
}

export function Main({schoolClassList}: MainProps) {
    return (
        <Flex px={{base: 4, lg: 12}} py={{base: 4, lg: 0}} direction='column' alignItems='center' justifyContent='center'>
            <Image 
                src={'img/logos_turmas.png'} 
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
                {schoolClassList && schoolClassList.length >= 1 ? schoolClassList.map(schoolClass => {
                    return (
                        <Class 
                            key={schoolClass.id ?? schoolClass.title}
                            title={schoolClass.title} 
                            bgColor={schoolClass.informations.color} 
                            iconColor={schoolClass.informations.color} 
                            status={schoolClass.subscriptions.status}
                            target={schoolClass.informations.classContent}
                            scheduleDates={schoolClass.informations.dateSchedule}
                            scheduleHours={schoolClass.informations.hourSchedule}
                            documents={schoolClass.documents}
                            id={schoolClass.id}
                        />
                    )
                }) : 
                <>
                    <Skeleton w='300px' borderRadius='2xl' boxShadow='xl' height='420px' />
                    <Skeleton w='300px' borderRadius='2xl' boxShadow='xl' height='420px' />
                    <Skeleton w='300px' borderRadius='2xl' boxShadow='xl' height='420px' />
                    <Skeleton w='300px' borderRadius='2xl' boxShadow='xl' height='420px' />
                </>
                }
            </Grid>
        </Flex>
    )
}