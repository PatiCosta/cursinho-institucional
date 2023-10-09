import { Box, Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { ArrowCircleRight, ArrowCircleUpRight } from "phosphor-react";
import Link from 'next/link';
import { useState } from "react";

export function InfoBar() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const isLg = useBreakpointValue({base: false, sm: false, lg: true})

  if(isLg) {
    return (
      <Flex 
        mt={12} 
        gap={12} 
        py={24} 
        px={12} 
        alignItems='center' 
        justifyContent='center' 
        bgColor='yellow.300'
      >
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>46</Text>
          <Text fontSize='18px'>professores</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize='40px'>8</Text>
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
          as={Link}
          href={`/sobre`} 
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

  return (
    <Flex
      mt={12} 
      px={12} 
      py={12} 
      gap={12} 
      bgColor='yellow.300'
      direction='column'
      justifyContent='center'
    >
      <Grid 
        alignItems='center' 
        templateColumns='1fr 30px 1fr'
        gap={4}
        justifyItems='center'
      >
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize={32}>32</Text>
          <Text fontSize={14}>professores</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' alignSelf='center' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize={32}>12</Text>
          <Text fontSize={14}>plantonistas</Text>
        </Box>
      </Grid>
      <Grid 
        alignItems='center' 
        templateColumns='1fr 30px 1fr'
        gap={4}
        justifyItems='center'
      >
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize={32}>60</Text>
          <Text fontSize={14}>coordenadores</Text>
        </Box>
        <Box bgColor='blue.800' w='12px' h='12px' borderRadius='100%' />
        <Box textAlign='center'>
          <Text fontWeight='bold' fontSize={32}>480</Text>
          <Text fontSize={14}>alunos</Text>
        </Box>
      </Grid>
      <Flex 
        as={Link}
        href={`/sobre`} 
        alignItems='center' 
        direction='column' 
        cursor='pointer'
      >
        <ArrowCircleRight 
          size={56} 
          color="#2a255a"
          weight="fill" 
        />
        <Text fontSize='18px'>Saiba mais</Text>
      </Flex>
    </Flex>
  )

}