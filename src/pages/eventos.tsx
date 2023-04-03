import { DontMissBox } from "@/components/DontMissTheChance";
import { CursinhoJunina } from "@/components/eventos/CursinhoJunina";
import { Estudantada } from "@/components/eventos/Estudantada";
import { FeiraDeProfissoes } from "@/components/eventos/FeiraDeProfissoes";
import { SemanaDoCursinho } from "@/components/eventos/SemanaDoCursinho";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Eventos() {
    return (
        <>
            <Header />
            <SemanaDoCursinho />
            <CursinhoJunina />
            <FeiraDeProfissoes />
            <Estudantada />
            <Footer marginTop={52}>
                <DontMissBox />
            </Footer>
        </>
    )
}