import Footer from "@/components/Footer";
import { ApprovedStudentsFooter } from "@/components/Footer/approvedStudents";
import Header from "@/components/Header";
import { About } from "@/components/sobre/about";
import { Main } from "@/components/sobre/main";
import { Teachers } from "@/components/sobre/teachers";

export default function Sobre() {
    return (
        <>        
            <Header />
            <Main />
            <About />
            <Teachers />
            <Footer marginTop={72}>
                <ApprovedStudentsFooter />
            </Footer>
        </>
    )
}