import { Box, Button, Flex, Highlight, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { ArrowCircleUpRight } from "phosphor-react";

import studyAnimation from "../../../animations/study_gif.json";

export default function DontMissBox() {
    return (
        <Flex bgColor='yellow.400' borderRadius='24px' w='60vw' position='absolute' top='-25%' left='20%' p={12} gap={8}>
            <Lottie animationData={studyAnimation}/>
            <Box textAlign='start'>
                <Text fontSize="40px" color='gray.800' fontWeight='light'>
                    <Highlight query='Não perca' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                        Não perca essa chance!
                    </Highlight>
                </Text>
                <Text fontSize='16px' mt={4}>
                    Algum texto motivacional sobre alavancar os estudos com o cursinho e que a pessoa consegue etc etc xxxxxxxxx Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                </Text>
                <Button 
                    mt={12} 
                    bgColor='gray.50' 
                    borderRadius='2xl' 
                    size='lg' 
                    display='flex' 
                    alignItems='center' 
                    gap={2} 
                    fontSize='24px' 
                    fontWeight='regular'
                    _hover={{
                        opacity: 0.9
                    }}
                >
                    <Text>Garanta sua vaga</Text>
                    <ArrowCircleUpRight size={28} color="#023047" weight="fill" />
                </Button>
            </Box>
        </Flex>
    )
}