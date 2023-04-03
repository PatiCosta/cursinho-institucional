import { SpaceProps, Flex, Text, FlexProps } from "@chakra-ui/react";

interface InfoLabelProps extends SpaceProps, FlexProps {
    title: string;
    info: string;
    bgColor: string;
}

export function InfoLabel ({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex gap={8} {...rest}>
            <Flex bgColor={bgColor} borderRadius='0px 64px 64px 0px' py={4} px={12} w='250px' justifyContent='end'>
                <Text fontSize={24} fontWeight='semibold' color='gray.50' w='120px' textAlign='end'>{title}</Text>
            </Flex>
            <Text fontSize={16} fontWeight='light'>
                {info}
            </Text>
        </Flex>
    )
}

export function ReverseInfoLabel ({title, info, bgColor, ...rest}: InfoLabelProps) {
    return (
        <Flex gap={8} {...rest}>
            <Text fontSize={16} fontWeight='light' textAlign='end'>
                {info}
            </Text>
            <Flex bgColor={bgColor} borderRadius='64px 0px 0px 64px' py={4} px={12} w='250px' justifyContent='end'>
                <Text fontSize={24} fontWeight='semibold' color='gray.50' w='120px' textAlign='start'>{title}</Text>
            </Flex>
        </Flex>
    )
}