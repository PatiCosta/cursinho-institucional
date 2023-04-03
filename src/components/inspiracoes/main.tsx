import { Box, Flex, Highlight, Image, Tag, Text, VStack } from "@chakra-ui/react";

interface ReviewProps {
    img: string;
    name: string;
    tag: string;
    review: string;
}

function Review({
    img,
    name,
    tag,
    review
}: ReviewProps) {
    return (
        <Flex pl={32} py={16} alignItems='center' justifyContent='space-between' position='relative' w='100vw'>
            <Box position='absolute' h='100%' w='1px' bgColor='blue.800' bottom='0' left='5vw' />
            <Flex alignItems='center' gap={4}>
                <Image 
                    src={img} 
                    maxH={32}
                />
                <VStack spacing={2} alignItems='start'>
                    <Text fontSize={18} fontWeight='bold'>
                       {name}
                    </Text>
                    <Tag size='md' variant='solid' colorScheme='gray' mt={2}>
                        Ex-aluno do cursinho
                    </Tag>
                    <Tag size='md' variant='solid' colorScheme='green' mt={2}>
                        {tag}
                    </Tag>
                </VStack>
            </Flex>
            <Text fontSize={14} w='60%' bgColor='yellow.400' borderRadius='64px 0px 0px 64px' p={12} textAlign='start'>
                "{review}""
            </Text>
        </Flex>
    )
}

function InvertedReview({
    img,
    name,
    tag,
    review
}: ReviewProps) {
    return (
        <Flex pr={32} py={16} alignItems='center' justifyContent='space-between'  position='relative' w='100vw'>
            <Box position='absolute' h='100%' w='1px' bgColor='blue.800' bottom='0' right='5vw' />
            <Text fontSize={14} w='60%' bgColor='blue.800' color='gray.50' borderRadius='0px 64px 64px 0px' p={12} textAlign='end'>
                "{review}"
            </Text>
            <Flex alignItems='center' gap={4}>
                <VStack spacing={2} alignItems='end'>
                    <Text fontSize={18} fontWeight='bold'>
                        {name}
                    </Text>
                    <Tag size='md' variant='solid' colorScheme='gray' mt={2}>
                        Ex-aluno do cursinho
                    </Tag>
                    <Tag size='md' variant='solid' colorScheme='green' mt={2}>
                        {tag}
                    </Tag>
                </VStack>
                <Image 
                    src={img} 
                    maxH={32}
                />
            </Flex>
        </Flex>
    )
}

export function Main() {
    return (
        <Flex direction='column' alignItems='center' justifyContent='center'>
            <Image 
                src={'static/img/five-stars.png'} 
                maxH={10}
            />
            <Text fontSize={48} fontWeight="bold" textAlign="center">
                <Highlight query='inspirações' styles={{bg: 'transparent', color: 'yellow.500' }}>
                    Nossas inspirações
                </Highlight>
            </Text>
            <Box bgColor='blue.800' h='2px' w='600px'></Box>
            <Text fontSize={16} w='800px' textAlign='center' mt={4}>
                Veja o que nossso ex-alunos tem a dizer sobre o cursinho!
            </Text>
            <Review img='static/img/avatar-mauricio.png' name='Maurício Durães' tag='Estudante de Medicina na FMUSP' review='Prestei farmácia porque achava que medicina não era pra mim. Ninguém que eu conhecia tinha passado. Quando eu vi que minhas notas na Fuvest eram o suficiente pra passar em medicina, eu vi que eu era capaz.' />
            <Box w='90vw' mx='auto' h='1px' bgColor='blue.800' />
            <InvertedReview img='static/img/avatar-murilo.png' name='Murilo Lechuga' tag='Estudante do IAG USP' review='Hoje eu não me imagino fazendo outra coisa a não ser ensinar. E a minha vontade de ensinar surgiu aqui.'  />
            <Box w='90vw' mx='auto' h='1px' bgColor='blue.800' />
            <Review img='static/img/avatar-beatriz.png' name='Beatriz Gomes' tag='Estudante de Jornalismo da ECA USP' review='... O importante é não desistir no primeiro obstáculo. Se a gente desistir nessa fase mais fácil que é o vestibular, imagina na vida' />
            <Box w='90vw' mx='auto' h='1px' bgColor='blue.800' />
            <InvertedReview img='static/img/avatar-ariane.png' name='Ariane Jesus' tag='Estudante de Engenharia Elétrica na Poli-USP' review='Prestei Fuvest, mas não cheguei nem perto da nota de corte de engenharia. Passei um ano sem estudar, só trabalhando para ajudar em casa. Em 2013, procurei novamente o Cursinho FEAUSP. Hoje eu curso engenharia elétrica na Escola Politécnica da USP e gosto muito do meu curso'  />
            <Box w='90vw' mx='auto' h='1px' bgColor='blue.800' />
            <Review img='static/img/avatar-mizael.png' name='Mizael Alves' tag='Estudante de Economia na FEAUSP' review='Aqui você vê todo mundo com muita vontade. Acho que esse é um dos pontos fortes do cursinho: não só a parte do ensino, mas o ambiente também' />
            <Box w='90vw' mx='auto' h='1px' bgColor='blue.800' />
            <InvertedReview img='static/img/avatar-angelica.png' name='Angélica Santos' tag='Estudante de Geografia na UFMT' review='O Cursinho FEAUSP representa a esperança de realizar meus sonhos. Pelo apoio que as pessoas me dão, como se fossem a minha segunda família'  />
        </Flex>
    )
}