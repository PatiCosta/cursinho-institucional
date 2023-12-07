import { Box, Flex, Highlight, Text } from "@chakra-ui/react";


export function StudentsVideoFooter() {

    return (
        <Flex 
            direction='column' 
            alignItems='center' 
            justifyContent='center' 
            bgColor='yellow.400' 
            borderRadius='24px' 
            w={{base: '90vw', lg: '60vw'}}  
            position='absolute' 
            top={{base: '-16%', lg: '-35%'}} 
            mx={{base: '5vw', lg: '20vw'}}  
            py={{base: 8, lg: 8}}
            px={{base: 4, lg: 12}} 
            gap={4}
            textAlign='center'
        >
            <Text fontSize={{base: 24, lg: 32}} color='gray.800' fontWeight='light'>
                <Highlight query={['nossos', 'alunos' , 'dizer']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                    Veja o que nossos alunos tem a dizer:
                </Highlight>
            </Text>
            <Box w={{base: '300px', lg: '601px'}} h={{base: '167.72px', lg: '336px'}}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/DWnrSpZhs8U" 
                    title="Alunos do Cursinho" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                >

                </iframe>
            </Box>
               
        </Flex>
    )
}