import { Box, Flex, Text } from "@chakra-ui/react";
import { InfoLabelProps } from "./IInfoLabel";

export function ColumnInfoLabel({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex alignItems='flex-start' gap={4} direction='column' flex='.95' mx={{base: 4, lg: 0}} {...rest}>
            <Flex bgColor={bgColor} borderRadius={{base: '64px', lg: '0px 64px 64px 0px'}} py={8} w='100%' justifyContent='end' alignItems='center'>
                <Box flex='1' h='2px' bgColor='gray.50'></Box>
                <Text fontSize={{base: 20, lg: 24}} fontWeight='semibold' color='gray.50' textAlign='end' px={{base: 6, lg: 12}}>
                    {title}
                </Text>
            </Flex>
            <Flex fontSize={{base: 14, lg: 16}} fontWeight='light' pl={{base: 2, lg: 12}} pr={{base: 4, lg: 8}}  textAlign={{base: 'center', lg: 'end'}}>
                {info}
            </Flex>
        </Flex>
    )
}

export function ReverseColumnInfoLabel({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex alignItems='flex-start' gap={4} direction='column' flex='.95' px={{base: 4, lg: 0}} {...rest}>
            <Flex bgColor={bgColor} borderRadius={{base: '64px', lg: '64px 0px 0px 64px'}} py={8} w='100%' justifyContent='end' alignItems='center'>
                <Text fontSize={{base: 20, lg: 24}} fontWeight='semibold' color='gray.50' textAlign='end' px={{base: 6, lg: 12}}>
                    {title}
                </Text>
                <Box flex='1' h='2px' bgColor='gray.50'></Box>
            </Flex>
            <Flex fontSize={{base: 14, lg: 16}} fontWeight='light' pl={{base: 2, lg: 12}} pr={{base: 4, lg: 8}} textAlign={{base: 'center', lg: 'start'}}>
                {info}
            </Flex>
        </Flex>
    )
}