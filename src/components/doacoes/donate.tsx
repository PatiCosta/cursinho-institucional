import { Box, Flex, Highlight, Select, Text } from "@chakra-ui/react"
import { useState } from "react"
import { DonationForm } from "./donationForm"

interface Product {
    product_id: string
    price: number
}

interface DonateProps {
    products: Product[]
}

export function Donate({products}: DonateProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
    const [cycles, setCycles] = useState(1)

    return (
        <Flex 
            bgColor='blue.800' 
            position='relative' 
            mx={{base: 4, lg: 20}} 
            px={{base: 4, lg: 12}} 
            py={{base: 8, lg: 16}} 
            textAlign='center'
            borderRadius='2xl'
            gap={8}
            alignItems='center'
            justifyContent='space-around'
            direction={{base: 'column', lg: 'row'}}
        >
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
            <Text flex='.5' fontSize={{base: 18, lg: 28}}  fontWeight='bold' textAlign='center' color='yellow.400'>
                <Highlight query={['Escolha', 'doação']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                    Escolha a sua assinatura de doação:
                </Highlight>
            </Text>
            <Box textAlign='start' flex='.4' w={{base: '80%', lg: 'initial'}}>
                <Text 
                    fontWeight='bold' 
                    fontSize={{base: 10, lg: 12}} 
                    letterSpacing='1.2' 
                    textTransform='uppercase' 
                    color='gray.100'
                >
                    No valor de
                </Text>
                <Flex alignItems='end' gap={4} mt={2}>
                    <Select 
                        variant='flushed' 
                        fontSize={{base: 18,lg: 32}} 
                        onChange={(e) => {
                            const product = products.find(product => product.product_id === e.target.value)
                            if(!product) {
                                return
                            }
                            setSelectedProduct(product)
                        }}
                        color='gray.100'
                    >
                        {products.map(product => 
                            <option key={product.product_id} value={product.product_id}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                }).format(product.price)}</option>
                        )}
                    </Select>
                    <Text fontWeight='light' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>por mês</Text>
                </Flex>
            </Box>
            <Box pl={{base: 0, lg: 8}} flex='.3' textAlign='start'  w={{base: '80%', lg: 'initial'}}>
                <Text fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>Desejo doar por</Text>
                <Flex alignItems='end' gap={4} mt={2}>
                    <Select color='gray.100' variant='flushed' fontSize={{base: 14, lg: 20}} w={{base: '75%', lg: '40%'}} onChange={(e) => setCycles(Number(e.target.value))}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </Select>
                    <Text fontWeight='light' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>meses</Text>
                </Flex>
            </Box>
            <DonationForm cycles={cycles} product={selectedProduct} />
        </Flex>
    )
}