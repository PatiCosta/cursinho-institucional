import Header from "@/components/Header";
import { Diferentials } from "@/components/turmas/diferentials";
import { Main } from "@/components/turmas/main";
import { Approvals } from "@/components/turmas/approvals";
import Footer from "@/components/Footer";
import { DontMissBox } from "@/components/DontMissTheChance";


export default function Turmas() {
    return (
        <>
            <Header />
            <Main />
            <Diferentials />
            <Approvals />
            <Footer marginTop={60}>
                <DontMissBox />
            </Footer>
        </>
    )
}