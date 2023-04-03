import { Box, Flex, Highlight, Text } from "@chakra-ui/react";

export function OurStudents() {
    return (
        <Flex direction='column' alignItems='center' justifyContent='center' gap={4} bgColor='gray.100' borderRadius='24px' w='60vw' position='absolute' top='-35%' left='20%' px={12} py={8} textAlign='center'>
            <Text fontSize={32} fontWeight='regular'>
                <Highlight query={['alunos', 'dizer']} styles={{bg: 'transparent', color: 'yellow.400', fontWeight: 'bold' }}>
                    Veja o que nossos alunos tem a dizer
                </Highlight>
            </Text>
            <iframe width="601" height="336" src="https://www.youtube.com/embed/DWnrSpZhs8U" title="Alunos do Cursinho" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Flex>
    )
}