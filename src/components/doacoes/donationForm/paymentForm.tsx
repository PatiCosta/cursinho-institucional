import { formatCard } from "@/utils/formatCreditCard";
import { formatNumeric } from "@/utils/formatNumeric";
import { parseCard } from "@/utils/parseCreditCard";
import { Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface PaymentFormProps {
    card: string
    setCard: Dispatch<SetStateAction<string>>
    monthExpire: string
    setMonthExpire: Dispatch<SetStateAction<string>>
    yearExpire: string
    setYearExpire: Dispatch<SetStateAction<string>>
    cvv: string
    setCvv: Dispatch<SetStateAction<string>>
}

export function PaymentForm({
    card,
    setCard,
    monthExpire,
    setMonthExpire,
    yearExpire,
    setYearExpire,
    cvv,
    setCvv,
}: PaymentFormProps) {
    return (
        <FormControl mt={4}>
            {/* <FormLabel 
                fontWeight='bold' 
                fontSize={{base: 10, lg: 16}} 
                letterSpacing='1.2' 
                textTransform='uppercase' 
                color='gray.600'
            >
                Dados do cartão
            </FormLabel> */}
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
                    isRequired
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
                        isRequired
                        isInvalid={Number(monthExpire) > 12}
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
                        isRequired
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
                    isRequired
                />
            </Grid>
            <Text textAlign='center' fontWeight='light' fontSize={{base: 10, lg: 12}} color='gray.600' mt={2}>
                Ao confirmar sua subscrição, você permite que CursinhoFEAUSP cobre seu cartão por esse pagamento e pagamentos futuros de acordo com as condições.
            </Text>
        </FormControl>
    )
}