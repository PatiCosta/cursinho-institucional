import { formatPhone, parsePhone } from "@/utils/phoneUtils";
import { Flex, FormControl, Grid, Input, Switch, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface ContactFormProps {
    email: string | undefined
    setEmail: Dispatch<SetStateAction<string | undefined>>
    phoneNumber: string | undefined
    setPhoneNumber: Dispatch<SetStateAction<string | undefined>>
    isPhoneWhatsapp: boolean
    setIsPhoneWhatsapp: Dispatch<SetStateAction<boolean>>
}

export function ContactForm({
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    isPhoneWhatsapp,
    setIsPhoneWhatsapp
}: ContactFormProps) {
    return (
        <FormControl mt={4}>
            <Input 
                type="email" 
                name="email" 
                placeholder="E-mail para contato" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                borderBottomLeftRadius='0'
                isRequired
                isInvalid={!email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)}
            />
            <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}}>
                <Input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Número de telefone" 
                    value={formatPhone(phoneNumber)} 
                    onChange={(e) => setPhoneNumber(parsePhone(e.target.value))} 
                    borderTop='0'
                    borderTopRadius='0'
                    isRequired
                />
                <Flex alignItems='center' ml={4} gap={2} mt={{base: 4, lg: 0}}>
                    <Text>
                        Este telefone é whatsapp?
                    </Text>
                    <Switch id='isPhoneWhatsapp' colorScheme='yellow' onChange={() => setIsPhoneWhatsapp(!isPhoneWhatsapp)} />
                </Flex>
            </Grid>
        </FormControl>
    )
}