import { formatCPF, parseCPF } from "@/utils/cpfUtils";
import { formatNumeric } from "@/utils/formatNumeric";
import { stateOptions } from "@/utils/stateOptions";
import { FormControl, FormLabel, Grid, Input, Radio, RadioGroup, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface GeneralDataFormProps {
    name: string | undefined
    setName: Dispatch<SetStateAction<string | undefined>>
    gender: string | undefined
    setGender: Dispatch<SetStateAction<string | undefined>>
    birth: string
    setBirth: Dispatch<SetStateAction<string>>
    rg: string | undefined
    setRg: Dispatch<SetStateAction<string | undefined>>
    ufrg: string
    setUfrg: Dispatch<SetStateAction<string>>
    cpf: string
    setCpf: Dispatch<SetStateAction<string>>
    selfDeclaration: string | undefined
    setSelfDeclaration: Dispatch<SetStateAction<string | undefined>>
    metUsMethod: string | undefined
    setMetUsMethod: Dispatch<SetStateAction<string | undefined>>
    exStudent: string
    setExStudent: Dispatch<SetStateAction<"sim" | "não">>
}

export function GeneralDataForm({
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
    cpf,
    setCpf,
    selfDeclaration,
    setSelfDeclaration,
    metUsMethod,
    setMetUsMethod,
    exStudent,
    setExStudent
}: GeneralDataFormProps) {
    return (
        <FormControl>
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
                <Select 
                    name="gender" 
                    placeholder="Gênero" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)} 
                    borderRadius='0'
                    borderBottom={{base: '0', lg: '1px'}}
                    borderBottomColor={{base: 'none', lg: 'gray.200'}}
                >
                    <option key="Mulher cis" value="Mulher cis">Mulher cis</option>
                    <option key="Mulher trans" value="Mulher trans">Mulher trans</option>
                    <option key="Homem cis" value="Homem cis">Homem cis</option>
                    <option key="Homem trans" value="Homem trans">Homem trans</option>
                    <option key="Não-binárie" value="Não-binárie">Não-binárie</option>
                    <option key="Outro" value="Outro">Outro</option>
                    <option key="Prefiro não responder" value="Prefiro não responder">Prefiro não responder</option>

                </Select>  
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
                    value={rg ? formatNumeric(rg) : rg}
                    onChange={(e) => setRg(formatNumeric(e.target.value))} 
                    borderTop='0'
                    borderRadius='0'
                />
                <Select 
                    name="ufrg" 
                    placeholder="Estado de emissão do RG" 
                    value={ufrg} 
                    onChange={(e) => setUfrg(e.target.value === '' ? 'Não informado' : e.target.value)}
                    borderLeft={{base: '1', lg: '0'}}
                    borderTop='0'
                    isDisabled={rg === ''}
                    borderRadius='0'
                >
                    {stateOptions.map(state => <option key={state} value={state}>{state}</option>)}
                </Select>   
                <Input 
                    type="text" 
                    name="cpf" 
                    placeholder="CPF" 
                    value={formatCPF(cpf)}
                    onChange={(e) => setCpf(parseCPF(e.target.value))} 
                    isRequired
                    borderRadius='0'
                    borderTop='0'
                    borderRight={{base: '1', lg: 0}}
                    borderBottom={{base: '1', lg: 0}}
                />
                <Input 
                    type="text" 
                    name="metUsMethod" 
                    placeholder="Como nos conheceu?" 
                    value={metUsMethod} 
                    onChange={(e) => setMetUsMethod(e.target.value)} 
                    borderBottom='0'
                    borderTop='0'
                    borderRadius='0'
                />
            </Grid>
            <Textarea 
                name="selfDeclaration" 
                placeholder="Carta de apresentação" 
                value={selfDeclaration} 
                onChange={(e) => setSelfDeclaration(e.target.value)} 
                borderTopRadius='0'
            />
            <RadioGroup colorScheme='yellow' ml={1} mt={4} onChange={(value: 'sim' | 'não') => setExStudent(value)} value={exStudent}>
                <Stack direction={{base: 'column', lg: 'row'}}>
                    <Text>Você é ex aluno do cursinho?</Text>
                    <Radio value='sim'>sim</Radio>
                    <Radio value='não'>não</Radio>
                </Stack>
            </RadioGroup>
        </FormControl>
    )
}