import Header from "@/components/Header";
import { Diferentials } from "@/components/turmas/diferentials";
import { Main } from "@/components/turmas/main";
import { Approvals } from "@/components/turmas/approvals";
import Footer from "@/components/Footer";
import { Tutoring } from "@/components/turmas/tutoring";
import { StudentsVideoFooter } from "@/components/Footer/studentsVideo";


export default function Turmas() {
    return (
        <>
            <Header />
            <Main />
            <Diferentials />
            <Approvals />
            <Tutoring />
            <Footer marginTop={72}>
                <StudentsVideoFooter />
            </Footer>
        </>
    )
}