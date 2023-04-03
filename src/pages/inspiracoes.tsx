import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Main } from "@/components/inspiracoes/main";
import { OurStudents } from "@/components/inspiracoes/ourStudents";

export default function Inspiracoes() {
    return (
        <>
            <Header />
            <Main />
            <Footer marginTop={72}>
                <OurStudents />
            </Footer>
        </>
    )
}