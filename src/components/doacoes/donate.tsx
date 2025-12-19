import { Box, Flex, Highlight, Image, Select, Text, Button, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { DonationForm } from "./donationForm"
import Link from "next/link"
import { UserGear } from "@phosphor-icons/react"

interface Product {
    product_id: string
    price: number
}

interface DonateProps {
    products: Product[]
}

export function Donate({ products }: DonateProps) {
    // Garante que products existe e tem itens antes de acessar o índice 0
    const initialProduct = products && products.length > 0 ? products[0] : null
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct)
    const [cycles, setCycles] = useState(0) // Default para 0 (Tempo Indeterminado)

    // Se não houver produtos, não renderiza ou mostra loading (segurança)
    if (!products || products.length === 0) return null;

    return (
        <Box
            bgColor='blue.800'
            position='relative'
            mx={{ base: 4, lg: 20 }}
            px={{ base: 4, lg: 12 }}
            py={{ base: 8, lg: 16 }}
            borderRadius='2xl'
        >
            <Box
                display={{ base: 'none', lg: 'block' }}
                borderRadius='2xl'
                h='100%'
                w='100%'
                position='absolute'
                bgColor='transparent'
                border='8px solid'
                borderColor='yellow.400'
                top={6}
                left={6}
            />
            <Box
                display={{ base: 'block', lg: 'none' }}
                borderRadius='2xl'
                h={{ base: '96%', lg: '97%' }}
                w='95%'
                position='absolute'
                bgColor='transparent'
                border='4px solid'
                borderColor='yellow.400'
                top={2}
                right={2}
            />

            {/* Seção de Cartão / Assinatura */}
            <Flex
                textAlign='center'
                gap={8}
                alignItems='center'
                justifyContent='space-around'
                direction={{ base: 'column', lg: 'row' }}
            >
                <Text flex='.5' fontSize={{ base: 18, lg: 28 }} fontWeight='bold' textAlign='center' color='yellow.400'>
                    <Highlight query={['Escolha', 'doação']} styles={{ bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                        Escolha a sua assinatura de doação:
                    </Highlight>
                </Text>
                <Box textAlign='start' flex='.4' w={{ base: '80%', lg: 'initial' }}>
                    <Text
                        fontWeight='bold'
                        fontSize={{ base: 10, lg: 12 }}
                        letterSpacing='1.2'
                        textTransform='uppercase'
                        color='gray.100'
                    >
                        No valor de
                    </Text>
                    <Flex alignItems='end' gap={4} mt={2}  >
                        <Select
                            variant='flushed'
                            fontSize={{ base: 18, lg: 32 }}
                            onChange={(e) => {
                                const product = products.find(product => product.product_id === e.target.value)
                                if (!product) {
                                    return
                                }
                                setSelectedProduct(product)
                            }}
                            color='gray.100'
                            _hover={{ transition: '300ms', color: 'yellow.500' }}
                            cursor={'pointer'}
                        >
                            {products.map(product =>
                                <option style={{ color: 'black' }} key={product.product_id} value={product.product_id}>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(product.price)}</option>
                            )}
                        </Select>
                        <Text fontWeight='light' fontSize={{ base: 10, lg: 12 }} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>por mês</Text>
                    </Flex>
                </Box>
                <Box pl={{ base: 0, lg: 8 }} flex='.3' textAlign='start' w='100%'>
                    <Text fontWeight='bold' fontSize={{ base: 10, lg: 12 }} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>Desejo doar por</Text>
                    <Flex alignItems='end' gap={4} mt={2}>
                        <Select color='gray.100' variant='flushed' fontSize={{ base: 14, lg: 20 }} w={{ base: '75%', lg: '100%' }} onChange={(e) => setCycles(Number(e.target.value))} value={cycles}
                            _hover={{ transition: '300ms', color: 'yellow.500' }}
                            cursor={'pointer'}
                        >
                            <option style={{ color: 'black' }} value={0}>Tempo Indeterminado</option>
                            <option style={{ color: 'black' }} value={1}>Apenas uma vez</option>
                            <option style={{ color: 'black' }} value={2}>2</option>
                            <option style={{ color: 'black' }} value={3}>3</option>
                            <option style={{ color: 'black' }} value={4}>4</option>
                            <option style={{ color: 'black' }} value={5}>5</option>
                            <option style={{ color: 'black' }} value={6}>6</option>
                            <option style={{ color: 'black' }} value={7}>7</option>
                            <option style={{ color: 'black' }} value={8}>8</option>
                            <option style={{ color: 'black' }} value={9}>9</option>
                            <option style={{ color: 'black' }} value={10}>10</option>
                            <option style={{ color: 'black' }} value={11}>11</option>
                            <option style={{ color: 'black' }} value={12}>12</option>
                        </Select>
                        {cycles !== 0 && (
                            <Text fontWeight='light' fontSize={{ base: 10, lg: 12 }} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>
                                meses
                            </Text>
                        )}
                    </Flex>
                </Box>
                {/* Verifica se selectedProduct não é null antes de renderizar */}
                {selectedProduct && <DonationForm cycles={cycles} product={selectedProduct} />}
            </Flex>

            <Text fontSize={{ base: 28, lg: 40 }} fontWeight="bold" color='gray.50' textAlign='center' my={8}>
                ou
            </Text>

            {/* Seção de PIX */}
            <Flex
                textAlign='center'
                gap={8}
                alignItems='center'
                justifyContent='space-around'
                direction={{ base: 'column', lg: 'row' }}
            >
                <Flex alignItems='center' direction='column'>
                    <Image src='img/qrcode.png' h='160px' mb={4} />
                    <Text fontSize={{ base: 18, lg: 28 }} fontWeight='bold' textAlign='center' color='yellow.400'>
                        <Highlight query={['Escolha', 'doação']} styles={{ bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                            Faça sua doação por pix!
                        </Highlight>
                    </Text>
                    <Text fontWeight='bold' fontSize={{ base: 10, lg: 12 }} color='yellow.400'>
                        Basta escanear o qrcode e copiar nosso código!
                    </Text>
                </Flex>
                <Text color='gray.100' flex='1'>
                    Estamos empenhados em proporcionar uma educação de qualidade que transforme vidas. Sua contribuição faz toda a diferença! Ajude-nos a manter a chama do conhecimento acesa para as gerações futuras. Faça sua doação via transferência e seja parte fundamental deste projeto educacional que molda o futuro.
                </Text>
            </Flex>

            {/* --- NOVA SEÇÃO: BOTÃO DE GERENCIAMENTO --- */}
            <Flex justifyContent="center" mt={16} borderTop="1px solid" borderColor="whiteAlpha.300" pt={8}>
                <VStack spacing={3}>
                    <Text color="gray.300" fontSize="sm">
                        Já possui uma doação mensal ativa?
                    </Text>
                    <Link href="/doacoes/gerenciar" passHref legacyBehavior>
                        <Button
                            as="a"
                            size="md"
                            variant="outline"
                            color="yellow.400"
                            borderColor="yellow.400"
                            _hover={{
                                bg: 'whiteAlpha.200',
                                borderColor: 'yellow.300',
                                color: 'yellow.300'
                            }}
                            leftIcon={<UserGear weight="bold" size={20} />}
                        >
                            Gerenciar Minha Assinatura
                        </Button>
                    </Link>
                </VStack>
            </Flex>

        </Box>
    )
}