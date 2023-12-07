import Footer from "@/components/Footer";
import { StudentsVideoFooter } from "@/components/Footer/studentsVideo";
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
            <Footer  mt={{base: 40, lg: 72}}>
                <StudentsVideoFooter />
            </Footer>
        </>
    )
}