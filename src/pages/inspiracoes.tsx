import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Main } from "@/components/inspiracoes/main";
import { OurStudents } from "@/components/inspiracoes/ourStudents";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Inspiracoes() {
    const isLg = useBreakpointValue({base: false, lg: true})

    return (
        <>
            <Header />
            <Main />
            <Footer marginTop={isLg ? 72 : 48}>
                <OurStudents />
            </Footer>
        </>
    )
}