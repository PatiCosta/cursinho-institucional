import { formatCnpj, parseCnpj } from "@/utils/cnpjUtils";
import { formatCPF, parseCPF } from "@/utils/cpfUtils";
import { formatNumeric } from "@/utils/formatNumeric";
import { stateOptions } from "@/utils/stateOptions";
import { FormControl, FormLabel, Grid, Input, Radio, RadioGroup, Select, Stack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface PersonalDataFormProps {
    name: string | undefined
    setName: Dispatch<SetStateAction<string | undefined>>
    gender: string | undefined
    setGender: Dispatch<SetStateAction<string | undefined>>
    birth: string
    setBirth: Dispatch<SetStateAction<string>>
    rg: string
    setRg: Dispatch<SetStateAction<string>>
    ufrg: string
    setUfrg: Dispatch<SetStateAction<string>>
    documentType: 'cpf' | 'cnpj'
    setDocumentType: Dispatch<SetStateAction<'cpf' | 'cnpj'>>
    documentNumber: string
    setDocumentNumber: Dispatch<SetStateAction<string>>
}

export function PersonalDataForm({
    name,
    setName,
    gender,
    setGender,
    birth,
    setBirth,
    rg,
    setRg,
    ufrg,
    setUfrg,
    documentType,
    setDocumentType,
    documentNumber,
    setDocumentNumber,
}: PersonalDataFormProps) {
    return (
        <FormControl mt={4}>
            <Input 
                type="text" 
                name="name" 
                placeholder="Nome completo" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                borderBottom='0'
                borderBottomRadius='0'
                isRequired
            />
            <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}}>
                <Input 
                    type="text" 
                    name="gender" 
                    placeholder="Com qual gênero você se identifica?" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)} 
                    borderRadius='0'
                    borderBottom={{base: '0', lg: '1px'}}
                    borderBottomColor={{base: 'none', lg: 'gray.200'}}
                />
                <FormControl position='relative'>
                    <FormLabel position='absolute' top={2} left={4} color='gray.500'>Data de nascimento</FormLabel>
                    <Input 
                        type="date" 
                        name="birth" 
                        placeholder="Data de nascimento" 
                        value={birth} 
                        onChange={(e) => setBirth(e.target.value)} 
                        borderRadius='0'
                        borderLeft={{base: '1', lg: '0'}}
                        pl={44}
                        isRequired
                    />   
                </FormControl>
                <Input 
                    type="text" 
                    name="rg" 
                    placeholder="RG (opcional)" 
                    value={formatNumeric(rg)}
                    onChange={(e) => setRg(formatNumeric(e.target.value))} 
                    borderTopRadius='0'
                    borderTop='0'
                    borderBottomRightRadius={0}
                    borderBottomLeftRadius={{base: 0, lg: 'md'}}
                />
                <Select 
                    name="ufrg" 
                    placeholder="Estado de emissão do RG" 
                    value={ufrg} 
                    onChange={(e) => setUfrg(e.target.value === '' ? 'Não informado' : e.target.value)}
                    borderTopRadius='0'
                    borderLeft={{base: '1', lg: '0'}}
                    borderTop='0'
                    borderBottomLeftRadius={{base: 'md', lg: 0}}
                    isDisabled={rg === ''}
                >
                    {stateOptions.map(state => <option key={state} value={state}>{state}</option>)}
                </Select>   
            </Grid>
            <RadioGroup colorScheme='yellow' ml={1} mt={4} onChange={(value: 'cpf' | 'cnpj') => setDocumentType(value)} value={documentType}>
                <Stack direction={{base: 'column', lg: 'row'}}>
                    <Text>Qual tipo de documento você deseja informar?</Text>
                    <Radio value='cpf'>CPF</Radio>
                    <Radio value='cnpj'>CNPJ</Radio>
                </Stack>
            </RadioGroup>
            <Input 
                type="text" 
                name="name" 
                placeholder="Número do documento" 
                value={documentType === 'cpf' ? formatCPF(documentNumber) : formatCnpj(documentNumber)}
                onChange={(e) => setDocumentNumber(documentType === 'cpf' ? parseCPF(e.target.value) : parseCnpj(e.target.value))} 
                mt={1}
                isRequired
            />
        </FormControl>
    )
}