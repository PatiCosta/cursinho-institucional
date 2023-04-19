import { FlexProps, SpaceProps } from "@chakra-ui/react";

export interface InfoLabelProps extends SpaceProps, FlexProps {
    title: string;
    info: string;
    bgColor: string;
}