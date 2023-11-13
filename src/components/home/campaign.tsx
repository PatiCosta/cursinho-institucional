import { Button, Flex, Highlight, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowCircleUpRight } from "phosphor-react";
import { useState } from "react";

export function Campaign() {
    const [isButtonHovered, setIsButtonHovered] = useState(false)

    return (
        <Flex 
            py={{base: 16, lg: 24}} 
            px={{base: 12, lg: 24}}
            bgColor='blue.800' 
            alignItems='center' 
            justifyContent='space-between' 
            gap={{base: 12, lg: 32}} 
            direction={{base: 'column', lg: 'row'}}
        >
            <Image src='img/climb.png' maxH={96} />
            <Flex direction='column' gap={4} alignItems={{base: 'center', lg: 'start'}}>
                <Text fontWeight='bold' color='gray.50' fontSize={{base: 20, sm: 20, lg: 40}} textAlign={{base: 'center', sm: 'center', lg: 'start'}}>
                    <Highlight query={['sua', 'vidas' , '480!']} styles={{bg: 'transparent', color: 'yellow.500' }}>
                        Sua doação muda vidas! Juntos mudamos 480!
                    </Highlight>
                </Text>
                <Text fontWeight='light' color='gray.50' fontSize='sm' textAlign={{base: 'center', sm: 'center', lg: 'start'}}>
                Somos um cursinho pré-vestibular sem mensalidades e lutamos pela democratização da educação! Desde 2009, realizamos uma campanha com o intuito de arrecadar fundos para pagar as taxas dos vestibulares dos nossos alunes que não conseguiram a isenção. Já pensou em mudar a vida de uma pessoa? Contamos com sua doação, todo valor é bem-vindo.
                </Text>
                <Button 
                    mt={{base: 8, lg: 12}} 
                    bgColor='gray.50' 
                    color='blue.800' 
                    borderRadius='xl' 
                    size={{base: 'sm', lg: 'lg'}} 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='center' 
                    gap={2}
                    _hover={{
                        bgColor: 'gray.50'
                    }}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    w='fit-content'
                    as={Link}
                    href={`/campanha`} 
                >
                    <Text>Entre para nossa campanha</Text>
                    <ArrowCircleUpRight 
                        size={isButtonHovered ? 24 : 0} 
                        color="#023047" 
                        weight="fill" 
                        style={{
                            transition: 'all 0.2s ease'
                            
                        }} 
                    />
                </Button>
            </Flex>
        </Flex>
    )
}