import { Divider, Flex, Image, ModalHeader, Text } from "@chakra-ui/react";

interface DonationFormHeader {
    price: number
    cycles: number
}

export function DonationFormHeader({price, cycles}: DonationFormHeader) {
    return (
        <ModalHeader p={8} bgColor='blue.800' borderTopRadius='md'>
            <Image src='img/logo_branco.png' h={14} w='fit-content' />
            <Text color='gray.200' fontWeight='light' fontSize={16} mt={6}>
                Obrigada por contribuir conosco e com a realização do sonho de centenas de jovens! Que possamos juntos continuar ajudando nossos alunos a voar cada vez mais alto! :) 
            </Text>
            <Divider mt={8} mb={4} />
            <Flex alignItems='center' justifyContent='space-between' px={8}>
                <Text fontWeight='semibold' fontSize={{base: 10, lg: 16}} color='gray.300' letterSpacing='1.2'>Valor da doação</Text>
                <Text fontWeight='bold' fontSize={{base: 10, lg: 18}} color='gray.50' letterSpacing='1.2'>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(price)}
                </Text>
            </Flex>
            <Flex alignItems='center' justifyContent='space-between' px={8}>
                <Text fontWeight='semibold' fontSize={{base: 10, lg: 16}} color='gray.300' letterSpacing='1.2'>Meses de assinatura</Text>
                <Text fontWeight='bold' fontSize={{base: 10, lg: 18}} color='gray.50' letterSpacing='1.2'>
                {`${cycles} ${cycles <= 1 ? 'mês' : 'meses'}`}
                </Text>
            </Flex>
        </ModalHeader>
    )
}