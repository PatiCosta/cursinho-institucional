import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowCircleRight, ArrowCircleUpRight } from "phosphor-react";
import { useState } from "react";

export default function InfoBar() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
    <Flex mt={12} gap={12} py={12} px={12} alignItems='center' justifyContent='center' bgColor='yellow.300'>
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>32</Text>
          <Text fontSize='18px'>professores</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>12</Text>
          <Text fontSize='18px'>plantonistas</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>60</Text>
          <Text fontSize='18px'>coordenadores</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>480</Text>
          <Text fontSize='18px'>alunos</Text>
        </Box>
        <Box bgColor='transparent' w='12px' h='12px' borderRadius='100%' />
        <Flex 
          alignItems='center' 
          direction='column' 
          ml={12} 
          cursor='pointer'
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          {
            isButtonHovered
            ? <ArrowCircleUpRight 
              size={56} 
              color="#2a255a"
              weight="fill" 
            /> : <ArrowCircleRight 
              size={56} 
              color="#2a255a"
              weight="fill" 
            />
          }
          <Text fontSize='18px'>Saiba mais</Text>
        </Flex>
      </Flex>
    )
}