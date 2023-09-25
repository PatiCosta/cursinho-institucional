import { Flex, Text } from "@chakra-ui/react";
import { InfoLabelProps } from "./IInfoLabel";

export function RowInfoLabel ({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex gap={{base: 4, lg: 8}} {...rest}>
            <Flex bgColor={bgColor} borderRadius='0px 64px 64px 0px' py={4} px={{base: 6, lg: 12}} w={{base: '150px',lg: '250px'}} justifyContent='end'>
                <Text fontSize={{base: 18, lg: 24}} fontWeight='semibold' color='gray.50' w={{base: '96px',lg: '120px'}} textAlign='end'>{title}</Text>
            </Flex>
            <Flex fontSize={{base: 14, lg: 16}} fontWeight='light' pr={{base: 4, lg: 0}} direction='column'>
                {info}
            </Flex>
        </Flex>
    )
}

export function ReverseRowInfoLabel ({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex gap={{base: 4, lg: 8}} {...rest}>
            <Flex fontSize={{base: 14, lg: 16}} fontWeight='light' textAlign='end' pl={{base: 4, lg: 0}} direction='column'>
                {info}
            </Flex>
            <Flex bgColor={bgColor} borderRadius='64px 0px 0px 64px' py={4} px={{base: 6, lg: 12}} w={{base: '150px',lg: '250px'}} justifyContent='end'>
                <Text fontSize={{base: 18, lg: 24}} fontWeight='semibold' color='gray.50' w='120px' textAlign='start'>{title}</Text>
            </Flex>
        </Flex>
    )
}