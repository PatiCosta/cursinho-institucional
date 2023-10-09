import { CursinhoJunina } from "@/components/eventos/CursinhoJunina";
import { Estudantada } from "@/components/eventos/Estudantada";
import { FeiraDeProfissoes } from "@/components/eventos/FeiraDeProfissoes";
import { SemanaDoCursinho } from "@/components/eventos/SemanaDoCursinho";
import Footer from "@/components/Footer";
import { SubscribeFooter } from "@/components/Footer/subscribe";
import Header from "@/components/Header";

export default function Eventos() {
    return (
        <>
            <Header />
            <SemanaDoCursinho />
            <CursinhoJunina />
            <FeiraDeProfissoes />
            <Estudantada />
            <Footer mt={{base: 56, lg: 40}}>
                <SubscribeFooter />
            </Footer>
        </>
    )
}