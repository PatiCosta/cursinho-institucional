import { Button, Image, ModalBody, ModalCloseButton, ModalContent, Text } from "@chakra-ui/react";

export function Success({onClose}: {onClose: () => void}) {
    return (
        <ModalContent minH={{base: '100vh', lg: '750px'}} maxH={{base: '100vh', lg: '750px'}}>
            <ModalCloseButton />
            <ModalBody px={{base: 8, lg: 16}} py={{base: 8, lg: 32}} display='flex' alignItems='center' flexDirection='column' h='100%' w='100%'>
                <Image src="../../img/check.svg" h='280px' />
                <Text fontSize={{base: '3xl', lg: '4xl'}} fontWeight='bold' mt={8}>Inscrição concluída!</Text>
                <Text textAlign='center' fontWeight='light' fontSize={{base: 14, lg: 16}}>
                    Sua inscrição foi concluída com sucesso! Pedimos que aguarde nosso contato pelos meios informados, e estamos ansiosos para te conhecer! Nosso muito obrigado e até breve.
                </Text>
                <Button bgColor='yellow.400' _hover={{bgColor: 'yelllow.500'}} mt={4} onClick={() => {
                    onClose()
                }}>
                    ← Voltar
                </Button>
            </ModalBody>
        </ModalContent>
    )
}