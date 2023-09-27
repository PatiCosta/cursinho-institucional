import Header from "@/components/Header";
import { Diferentials } from "@/components/turmas/diferentials";
import { Main } from "@/components/turmas/main";
import { Approvals } from "@/components/turmas/approvals";
import Footer from "@/components/Footer";
import { DontMissBox } from "@/components/DontMissTheChance";
import { Tutoring } from "@/components/turmas/tutoring";


export default function Turmas() {
    return (
        <>
            <Header />
            <Main />
            <Diferentials />
            <Approvals />
            <Tutoring />
            <Footer marginTop={48}>
                <DontMissBox />
            </Footer>
        </>
    )
}