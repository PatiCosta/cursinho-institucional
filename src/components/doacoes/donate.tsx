import { formatCard } from "@/utils/formatCreditCard";
import { formatNumeric } from "@/utils/formatNumeric";
import { parseCard } from "@/utils/parseCreditCard";
import { Box, Button, Flex, FormControl, FormLabel, Grid, Highlight, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

interface DonateProps {
    prices: number[]
}

export function Donate({prices}: DonateProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [card, setCard] = useState("")
    const [monthExpire, setMonthExpire] = useState("")
    const [yearExpire, setYearExpire] = useState("")
    const [cvv, setCvv] = useState("")

    return (
        <Box minH='88vh'>
            <Box 
                bgColor='blue.800' 
                position='relative' 
                mx={{base: 4, lg: 24}} 
                px={{base: 4, lg: 12}} 
                py={{base: 8, lg: 16}} 
                textAlign='center'
                borderRadius='2xl'
            >
                <Text fontSize={{base: 32, lg: 40}}  fontWeight='semibold' textAlign='center' color='yellow.400'>
                    <Highlight query='Doe' styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'bold' }}>
                        Doe agora!
                    </Highlight>
                </Text>

                <Flex 
                    mt={{base: 2, lg: 8}} 
                    alignItems='center' 
                    justifyContent='space-between' 
                    gap={{base: 4, lg: 12}}
                    px={{base: 0, lg: 12}}
                    textAlign='start'
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
                        right={6}
                    />
                    <Box 
                        display={{base: 'block', lg: 'none'}} 
                        borderRadius='2xl' 
                        h='97%' 
                        w='95%' 
                        position='absolute' 
                        bgColor='transparent' 
                        border='4px solid' 
                        borderColor='yellow.400' 
                        top={2}
                        right={2}
                    />
                    <Flex direction='column' justifyContent='center' flex='.6'>
                        <Text fontSize={{base: 18, lg: 28}}  fontWeight='bold' textAlign='center' color='yellow.400'>
                            <Highlight query={['Escolha', 'doação']} styles={{bg: 'transparent', color: 'gray.50', fontWeight: 'semibold' }}>
                                Escolha a sua assinatura de doação:
                            </Highlight>
                        </Text>
                        <Box mt={8} color='gray.50' pl={{base: 4, lg: 8}}>
                            <Text fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>No valor de</Text>
                            <Flex alignItems='end' gap={4} mt={2}>
                                <Select variant='flushed' fontSize={{base: 18,lg: 32}}>
                                    {prices.map(price => 
                                        <option key={price}>{new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                          }).format(price)}</option>
                                    )}
                                </Select>
                                <Text fontWeight='light' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>por mês</Text>
                            </Flex>
                        </Box>
                        <Box mt={{base: 4, lg: 8}} color='gray.50' pl={{base: 4, lg: 8}}>
                            <Text fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>Desejo doar por</Text>
                            <Flex alignItems='end' gap={4} mt={2}>
                                <Select variant='flushed' fontSize={{base: 14, lg: 20}} w={{base: '75%', lg: '40%'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </Select>
                                <Text fontWeight='light' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>meses</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex 
                        direction='column' 
                        justifyContent='center' 
                        as='form' 
                        flex='.8' 
                        px={{base: 4, lg: 16}} 
                        position='relative' 
                        color='gray.50'
                    >
                        <FormControl>
                            <FormLabel fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>E-mail</FormLabel>
                            <Input 
                                type="email" 
                                name="email" 
                                placeholder="exemplo@exemplo.com" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>Dados do cartão</FormLabel>
                            <Grid templateColumns='1fr 1fr'>
                                <Input 
                                    gridColumnStart={1} 
                                    gridColumnEnd={3} 
                                    type="text" 
                                    name="card" 
                                    placeholder="1234 1234 1234 1234" 
                                    value={formatCard(card)} 
                                    onChange={(e) => setCard(parseCard(e.target.value))} 
                                    inputMode='numeric' 
                                    maxLength={19}
                                    minLength={19}
                                    borderBottomRadius={0}
                                />
                                <Flex alignItems='center'>
                                    <Input 
                                        type="text" 
                                        name="monthExpire" 
                                        placeholder="MM" 
                                        value={formatNumeric(monthExpire)} 
                                        onChange={(e) => setMonthExpire(formatNumeric(e.target.value))} 
                                        borderRight='0'
                                        borderTop='0px'
                                        borderBottomRightRadius='0'
                                        borderTopRightRadius='0'
                                        borderTopLeftRadius={0}
                                        inputMode='numeric' 
                                        maxLength={2}
                                        minLength={2}
                                    />
                                    <Text
                                        color='gray.500'
                                        fontWeight='thin'
                                        borderBottom='1px solid'
                                        borderColor='gray.200'
                                        py='7.5px'
                                    >
                                        /
                                    </Text>
                                    <Input 
                                        type="text" 
                                        name="yearExpire" 
                                        placeholder="AA" 
                                        value={formatNumeric(yearExpire)} 
                                        onChange={(e) => setYearExpire(formatNumeric(e.target.value))} 
                                        borderLeft='0'
                                        borderBottomLeftRadius='0'
                                        borderTopLeftRadius='0'
                                        borderRightRadius={0}
                                        borderBottomRadius={0}
                                        borderTop='0px'
                                        inputMode='numeric' 
                                        maxLength={2}
                                        minLength={2}
                                    />
                                </Flex>
                                <Input 
                                    inputMode='numeric' 
                                    name="cvv" 
                                    placeholder="CVV" 
                                    value={formatNumeric(cvv)} 
                                    onChange={(e) => setCvv(formatNumeric(e.target.value))} 
                                    maxLength={3}
                                    minLength={3}
                                    borderLeft={0}
                                    borderLeftRadius={0}
                                    borderTopRightRadius={0}
                                    borderTop={0}
                                />
                            </Grid>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel fontWeight='bold' fontSize={{base: 10, lg: 12}} letterSpacing='1.2' textTransform='uppercase' color='gray.100'>Titular do cartão</FormLabel>
                            <Input 
                                type="text" 
                                name="name" 
                                placeholder="Name completo" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </FormControl>
                        <Button 
                            w='100%' 
                            mt={4} 
                            type='submit' 
                            bgColor='yellow.400' 
                            color='blue.800' 
                            _hover={{bgColor: 'yellow.500'}}
                            size={{base: 'sm', lg: 'md'}}
                        >
                            Doar agora!
                        </Button>
                        <Text fontWeight='light' fontSize={{base: 10, lg: 12}} color='gray.50' mt={{base: 2, lg: 4}}>
                            Ao confirmar sua subscrição, você permite que Cursinho Test cobre seu cartão por esse pagamento e pagamentos futuros de acordo com as condições.
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}