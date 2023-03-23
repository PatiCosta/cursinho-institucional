import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { About } from "@/components/sobre/about";
import { ApprovedChart } from "@/components/sobre/approvedChart";
import { Main } from "@/components/sobre/main";
import { Teachers } from "@/components/sobre/teachers";

export default function Sobre() {
    return (
        <>        
            <Header />
            <Main />
            <About />
            <Teachers />
            <Footer marginTop='36vh'>
                <ApprovedChart />
            </Footer>
        </>
    )
}