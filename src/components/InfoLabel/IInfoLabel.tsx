import { FlexProps, SpaceProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface InfoLabelProps extends SpaceProps, FlexProps {
    title: string;
    info: ReactNode;
    bgColor: string;
}