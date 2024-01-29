import Footer from "@/components/Footer";
import { DonationFooter } from "@/components/Footer/donation";
import Header from "@/components/Header";
import { Infos } from "@/components/tutorias/infos";
import { Main } from "@/components/tutorias/main";

export default function Tutorias() {
    return (
        <>
            <Header />
            <Main />
            <Infos />
            <Footer mt={48}>
                <DonationFooter />
            </Footer>
        </>
    )
}