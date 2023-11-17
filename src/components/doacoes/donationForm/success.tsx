import { Button, Image, ModalBody, ModalCloseButton, ModalContent, Text } from "@chakra-ui/react";

export function Success({onClose}: {onClose: () => void}) {
    return (
        <ModalContent minH='750px' maxH='750px'>
            <ModalCloseButton />
            <ModalBody px={16} py={32} display='flex' alignItems='center' flexDirection='column' h='100%' w='100%'>
                <Image src="img/check.svg" h='280px' />
                <Text fontSize='4xl' fontWeight='bold' mt={8}>Doação concluída!</Text>
                <Text textAlign='center' fontWeight='light'>
                    Em nome de todos os nossos 480 alunos, expressamos nosso profundo agradecimento pela generosa doação. Sua contribuição faz a diferença em nossa busca pelo melhor. Muito obrigado!
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