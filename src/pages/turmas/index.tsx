import { Main } from "./components/main";
import { Header } from "@/components/Header";
import { Diferentials } from "./components/diferentials";
import { Approvals } from "./components/approvals";
import { Footer } from "@/components/Footer";
import { DontMissBox } from "./components/dontMissBox";

export default function Turmas() {
    return (
        <>
            <Header />
            <Main />
            <Diferentials />
            <Approvals />
            <Footer marginTop='36vh'>
                <DontMissBox />
            </Footer>
        </>
    )
}