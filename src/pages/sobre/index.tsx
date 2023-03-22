import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "./components/about";
import { ApprovedChart } from "./components/approvedChart";
import { Main } from "./components/main";

export default function Sobre() {
    return (
        <>        
            <Header />
            <Main />
            <About />
            <Footer marginTop='36vh'>
                <ApprovedChart />
            </Footer>
        </>
    )
}