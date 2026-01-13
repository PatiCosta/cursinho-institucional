import { Box, Flex, Highlight, Image, Select, Text, Button, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { DonationForm } from "./donationForm"
import Link from "next/link" 
import { UserGear } from "@phosphor-icons/react" 

// Atualizamos a interface aqui também
interface Product {
    product_id: string
    price: number
    name: string // NOVO
}

interface DonateProps {
    products: Product[]
}

export function Donate({products}: DonateProps) {
    const initialProduct = products && products.length > 0 ? products[0] : null
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct)
    const [cycles, setCycles] = useState(1)

    if (!products || products.length === 0) return null;

    return (
        <Box 
            bgColor='blue.800' 
            position='relative' 
            mx={{base: 4, lg: 20}} 
            px={{base: 4, lg: 12}} 
            py={{base: 8, lg: 16}} 
            borderRadius='2xl'
        >
            {/* ... (Estilos de borda decorativa mantidos igual ao anterior) ... */}
            <Box 
                display={{base: 'none', lg: 'block'}} 
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
                display={{base: 'block', lg: 'none'}} 
                borderRadius='2xl' 
                h={{base: '96%', lg: '97%'}} 
                w='95%' 
                position='absolute' 
                bgColor='transparent' 
                border='4px solid' 
                borderColor='yellow.400' 
                top={2}
                right={2}
            />
            
            <Flex
                textAlign='center'
                gap={4}
                alignItems='center'
                justifyContent='space-around'
                direction={{base: 'column', lg: 'column'}}
            >
                <Text flex='.5' fontSize={{base: 18, lg: 28}}  fontWeight='bold' textAlign='center' color='yellow.400'>
                    <Highlight query={['Escolha', 'doação']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                        Escolha a sua assinatura de doação:
                    </Highlight>
                </Text>
                
                <Box textAlign='start' flex='.4' w={{base: '90%', lg: 'initial'}}>
                    <Text 
                        fontWeight='bold' 
                        fontSize={{base: 10, lg: 12}} 
                        letterSpacing='1.2' 
                        textTransform='uppercase' 
                        color='gray.100'
                    >
                        Quero doar como:
                    </Text>
                    <Flex alignItems='center' gap={4} mt={2} direction="column" w="100%">
                        <Select cursor={'pointer'}
                            variant='flushed' 
                            fontSize={{base: 18, lg: 20}} // Fonte um pouco menor para caber nomes longos
                            py={4}
                            onChange={(e) => {
                                const product = products.find(product => product.product_id === e.target.value)
                                if(!product) return
                                setSelectedProduct(product)
                            }}
                            color='gray.100'
                            value={selectedProduct?.product_id}
                        >
                            {products.map(product => 
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} key={product.product_id} value={product.product_id}>
                                    {product.name} — {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(product.price)}
                                </option>
                            )}
                        </Select>
                        
                        {/* Seletor de Ciclos */}
                        <Flex w="100%" alignItems="center" gap={2}>
                             <Text fontWeight='light' fontSize={{base: 14, lg: 16}} color='gray.100' whiteSpace="nowrap">
                                Por:
                            </Text>
                            <Select 
                                cursor={'pointer'}
                                color='gray.100' 
                                variant='flushed' 
                                fontSize={{base: 14, lg: 18}} 
                                w="100%"
                                onChange={(e) => setCycles(Number(e.target.value))} 
                                value={cycles}
                            >
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} value={0}>Tempo Indeterminado (Assinatura)</option>
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} value={1}>Apenas uma vez</option>
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} value={3}>3 meses</option>
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} value={6}>6 meses</option>
                                <option style={{color: 'white', backgroundColor:'#3b3a65', cursor: 'pointer'}} value={12}>12 meses</option>
                            </Select>
                        </Flex>

                    </Flex>
                </Box>

                {selectedProduct && <DonationForm cycles={cycles} product={selectedProduct} />}
            </Flex>

            <Text fontSize={{base: 28, lg: 40}} fontWeight="bold" color='gray.50' textAlign='center' my={8}>
                ou
            </Text>

            {/* Seção de PIX */}
            <Flex 
                textAlign='center'
                gap={8}
                alignItems='center'
                justifyContent='space-around'
                direction={{base: 'column', lg: 'row'}}
            >
                <Flex alignItems='center' direction='column'>
                    <Image src='img/qrcode.png' h='160px' mb={4} />
                    <Text fontSize={{base: 18, lg: 28}}  fontWeight='bold' textAlign='center' color='yellow.400'>
                        <Highlight query={['Escolha', 'doação']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                            Faça sua doação por pix!
                        </Highlight>
                    </Text>
                    <Text fontWeight='bold' fontSize={{base: 10, lg: 12}} color='yellow.400'>
                        Basta escanear o qrcode e copiar nosso código!
                    </Text>
                </Flex>
                <Text color='gray.100' flex='1'>
                    Estamos empenhados em proporcionar uma educação de qualidade que transforme vidas. Sua contribuição faz toda a diferença! Ajude-nos a manter a chama do conhecimento acesa para as gerações futuras. Faça sua doação via transferência e seja parte fundamental deste projeto educacional que molda o futuro.
                </Text>
            </Flex>

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