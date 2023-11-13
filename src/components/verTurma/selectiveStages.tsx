import { CourseStage } from "@/interfaces/Course.interface";
import { Box, Flex, Grid, Highlight, Text } from "@chakra-ui/react";
import { CalendarBlank } from "phosphor-react";

interface SelectiveStagesProps {
    color: string
    stages?: CourseStage[]
}

export function SelectiveStages({color, stages}: SelectiveStagesProps) {
    return (
        <Box bgColor={color} w='100vw' pt={8} pb={4} px={12} mt={-1}>
            <Text fontSize={{base: 28, lg: 40}} fontWeight="bold" color='gray.50' textAlign='center'>
                <Highlight query='processo seletivo' styles={{bg: 'transparent', textDecoration: 'underline', color: 'gray.50' }}>
                    Etapas do processo seletivo
                </Highlight>
            </Text>
            {stages && <Grid 
                templateColumns={{base: '1fr', lg: stages.length <= 1 ? '1fr' : stages.length === 2 ? '1fr 1fr' : stages.length >= 3 ? '1fr 1fr 1fr' : '1fr 1fr 1fr'}}
                gap={8}     
                mt={14} 
                px={{base: 0, lg: 32}}
            >
                {stages.map((stage, index) =>                    
                    <Box bgColor='gray.100' borderRadius='xl' py={6} px={6} textAlign='center' key={stage.stagesID}>
                        <Flex fontWeight='bold' alignItems='center' justifyContent='center' fontSize={24} gap={2}>
                            <Text letterSpacing={0.2}>ETAPA</Text>

                            <Box h='48px' border='2px solid' borderColor={color} w='48px' borderRadius='100%' position='relative'>
                                <Box h='48px' bgColor={color} opacity={0.4} w='48px' borderRadius='100%' position='absolute' top={0.5} left={0.5} />
                                <Text lineHeight='48px' opacity={1}>{index + 1}</Text>
                            </Box>
                        </Flex>
                        <Flex alignItems='center' gap={1} justifyContent='center' mt={2}>
                            <CalendarBlank 
                                size={20} 
                                color="#2a255a" 
                                weight="duotone" 
                            />
                            <Text fontWeight='semibold' textTransform='lowercase' fontSize={14} letterSpacing={.5}>{stage.when}</Text>
                        </Flex>
                        <Box w='100%' h='1px' bgColor='gray.400' my={2}></Box>
                        <Text fontSize={14}>{stage.description}</Text>
                        <Flex alignItems='center' gap={2} justifyContent='center' mt={6}>
                            <Text fontWeight='bolder' letterSpacing='1' textTransform='uppercase' fontSize={12}>Data dos resultados:</Text>
                            <Text fontSize={14}>
                                {stage.resultsDate 
                                    ? new Intl.DateTimeFormat('pt-BR').format(new Date(stage.resultsDate)) : 'Não informado'
                                }
                            </Text>
                        </Flex>
                    </Box>
                )}
            </Grid>}
        </Box>
    )
}