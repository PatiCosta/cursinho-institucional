import { formatCep, parseCep } from "@/utils/cepUtils";
import { Button, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { MagnifyingGlass } from "phosphor-react";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

interface AddressFormProps {
    zipCode: string | undefined
    setZipCode: Dispatch<SetStateAction<string | undefined>>
    street: string | undefined
    homeNumber: string | undefined
    setHomeNumber: Dispatch<SetStateAction<string | undefined>>
    complement: string | undefined
    setComplement: Dispatch<SetStateAction<string | undefined>>
    district: string | undefined
    state: string | undefined
    city: string | undefined
    setCity: Dispatch<SetStateAction<string | undefined>>
    setDistrict: Dispatch<SetStateAction<string | undefined>>
    setState: Dispatch<SetStateAction<string | undefined>>
    setStreet: Dispatch<SetStateAction<string | undefined>>
}

export function AddressForm({
    zipCode,
    setZipCode,
    setHomeNumber,
    street,
    homeNumber,
    complement,
    setComplement,
    district,
    state,
    city,
    setCity,
    setDistrict,
    setState,
    setStreet
}: AddressFormProps) {
    const [loadingZipCode, setLoadingZipCode] = useState(false)
    const [zipCodeError, setZipCodeError] = useState(false)

    const handleSearchZipCode = useCallback(async () => {
        setLoadingZipCode(true)

        if(!zipCode) {
            setZipCodeError(true)
            setLoadingZipCode(false)
            return
        }

        if(zipCode.length < 8 || zipCode.length > 8) {
            setZipCodeError(true)
            setLoadingZipCode(false)
            return
        } else {
            setZipCodeError(false)
        }
        
        await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then(async (response) => {
            setState(response.data.uf)

            setCity(response.data.localidade)

            setStreet(response.data.logradouro)

            setDistrict(response.data.bairro)

            setLoadingZipCode(false)
        })
    }, [zipCode])

    return (
        <FormControl mt={4}>
            <Grid templateColumns='1fr 1fr' gap={4}>
                <Input 
                    type="text" 
                    name="zipCode" 
                    placeholder="CEP" 
                    value={formatCep(zipCode)} 
                    onChange={(e) => setZipCode(parseCep(e.target.value))} 
                    isInvalid={zipCodeError}
                />
                <Button 
                    bgColor='yellow.400' 
                    size={{base: 'md', lg: 'md'}} 
                    display='flex' 
                    alignItems='center' 
                    gap={2} 
                    _hover={{
                        bgColor: 'yellow.500'
                    }}
                    isDisabled={!zipCode || zipCode?.length < 8}
                    onClick={handleSearchZipCode}
                    isLoading={loadingZipCode}

                >
                    <MagnifyingGlass size={20} color="#023047" weight="bold" />
                    <Text>Buscar CEP</Text>
                </Button>
            </Grid>
            <Grid templateColumns='1fr 1fr' mt={2}>
                <Input 
                    type="text" 
                    name="street" 
                    placeholder="Rua" 
                    value={street} 
                    borderBottom='0'
                    borderBottomRadius='0'
                    isDisabled
                    gridColumnStart={1}
                    gridColumnEnd={3}
                />
                <Input 
                    type="text" 
                    name="homeNumber" 
                    placeholder="Número" 
                    value={homeNumber} 
                    onChange={(e) => setHomeNumber(e.target.value)} 
                    borderRadius='0'
                    borderRight='0'
                />
                <Input 
                    type="text" 
                    name="complement" 
                    placeholder="Complemento" 
                    value={complement} 
                    onChange={(e) => setComplement(e.target.value)} 
                    borderRadius='0'
                />
                <Input 
                    type="text" 
                    name="district" 
                    placeholder="Bairro" 
                    value={district} 
                    borderBottom='0'
                    borderTop='0'
                    borderRadius='0'
                    isDisabled
                    gridColumnStart={1}
                    gridColumnEnd={3}
                />
                <Input 
                    type="text" 
                    name="state" 
                    placeholder="Estado" 
                    value={state} 
                    borderTopRadius='0'
                    borderRight='0'
                    isDisabled
                />
                <Input 
                    type="text" 
                    name="city" 
                    placeholder="Cidade" 
                    value={city} 
                    borderTopRadius='0'
                    isDisabled
                />
            </Grid>
        </FormControl>
    )
}