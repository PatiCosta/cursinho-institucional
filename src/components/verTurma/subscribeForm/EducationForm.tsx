import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface EducationFormProps {
    oldSchool: string | undefined
    setOldSchool: Dispatch<SetStateAction<string | undefined>>
    oldSchoolAddress: string | undefined
    setOldSchoolAddress: Dispatch<SetStateAction<string | undefined>>
    highSchoolGraduationDate: string | undefined
    setHighSchoolGraduationDate: Dispatch<SetStateAction<string | undefined>>
    highSchoolPeriod: string | undefined
    setHighSchoolPeriod: Dispatch<SetStateAction<string | undefined>>
}

export function EducationForm({
    oldSchool,
    setOldSchool,
    oldSchoolAddress,
    setOldSchoolAddress,
    highSchoolGraduationDate,
    setHighSchoolGraduationDate,
    highSchoolPeriod,
    setHighSchoolPeriod,
}: EducationFormProps) {
    return (
        <FormControl>
            <Input 
                type="text" 
                name="oldSchool" 
                placeholder="Nome da escola do Ensino Médio" 
                value={oldSchool} 
                onChange={(e) => setOldSchool(e.target.value)} 
                borderBottomRadius='0'
            />
            <Input 
                type="text" 
                name="oldSchoolAddress" 
                placeholder="Endereço da escola do Ensino Médio" 
                value={oldSchoolAddress} 
                onChange={(e) => setOldSchoolAddress(e.target.value)} 
                borderTop='0'
                borderTopRadius='0'
                borderBottom='0'
                borderBottomRadius='0'
            />
            <FormControl position='relative'>
                <FormLabel position='absolute' top={2} left={4} color='gray.500'>Fim do ensino médio em</FormLabel>
                <Input 
                    type="date" 
                    name="highSchoolGraduationDate" 
                    placeholder="Término do ensino médio" 
                    value={highSchoolGraduationDate} 
                    onChange={(e) => setHighSchoolGraduationDate(e.target.value)} 
                    borderRadius='0'
                    pl={48}
                />   
            </FormControl>
            <Input 
                type="text" 
                name="highSchoolPeriod" 
                placeholder="Período de estudo do Ensino Médio" 
                value={highSchoolPeriod}
                onChange={(e) => setHighSchoolPeriod(e.target.value)} 
                borderTop='0'
                borderTopRadius='0'
            />
        </FormControl>
    )
}