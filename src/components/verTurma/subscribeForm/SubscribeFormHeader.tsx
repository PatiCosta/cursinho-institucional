import { Divider, Flex, Image, ModalHeader, Text } from "@chakra-ui/react";

interface SubscribeFormHeader {
    price: number
    title: string
    color: string
}

export function SubscribeFormHeader({color, title, price}: SubscribeFormHeader) {
    return (
        <ModalHeader p={8} bgColor={color} borderTopRadius='md'>
            <Flex alignItems='center' direction={{base: 'column', lg: 'row'}}>
                <Image src='../../../img/logo_branco.png' h={{base: 8, lg: 16}} w='fit-content' />
                <Text color='gray.200' fontWeight='bold' fontSize={{base: 20, lg: 32}} ml={{base: 0, lg: 6}}>
                    {title}
                </Text>
            </Flex>
            <Divider my={4} />
            <Flex alignItems='center' justifyContent='space-between' px={{base: 0, lg: 8}}>
                <Text fontWeight='semibold' fontSize={{base: 12, lg: 16}} color='gray.300' letterSpacing='1.2'>Valor da inscrição</Text>
                <Text fontWeight='bold' fontSize={{base: 12, lg: 18}} color='gray.50' letterSpacing='1.2'>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(price)}
                </Text>
            </Flex>
        </ModalHeader>
    )
}