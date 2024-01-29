import { Box, Flex, Highlight, Image, Text } from "@chakra-ui/react";

export function Main() {
    return (
        <Flex alignItems='center' justifyContent='space-around' py={{base: 6, lg: 0}} px={{base: 4, lg: 16}} gap={8} direction={{base: 'column', lg: 'row'}}>
            <Box>
                <Text 
                    fontWeight='bold' 
                    fontSize={{base: 28, sm: 28, lg: 40}} 
                    textAlign={{base: 'center', sm: 'center', lg: 'start'}}
                >
                    <Highlight query={['tutorias']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                        Nossas tutorias
                    </Highlight>
                </Text>

                 <Text fontWeight='light' fontSize={{base: 14, sm: 14, lg: 18}} textAlign={{base: 'center', lg: 'start'}}>
                     <Highlight query={['apoio acadêmico e pedagógico', 'diálogo']} styles={{bg: 'transparent', color: 'yellow.400', fontWeight: 'semibold' }}>
                         Um projeto que procura dar apoio acadêmico e pedagógico para os nossos alunos por meio do diálogo entre eles e seus tutores: estudantes universitários voluntários.
                     </Highlight>
                 </Text>
            </Box>
            <Image 
                src={'img/tutor_help.png'} 
                ml={{base: 'auto', sm: 'auto', lg: 0}}
                mr={{base: 'auto', lg: 0}}
                maxH='30VH'
            />
        </Flex>
    )
}