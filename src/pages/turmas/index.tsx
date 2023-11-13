import Header from "@/components/Header";
import { Diferentials } from "@/components/turmas/diferentials";
import { Main } from "@/components/turmas/main";
import { Approvals } from "@/components/turmas/approvals";
import Footer from "@/components/Footer";
import { Tutoring } from "@/components/turmas/tutoring";
import { StudentsVideoFooter } from "@/components/Footer/studentsVideo";
import { useSchoolClass } from "@/context/turmas";
import {useEffect } from "react";


export default function Turmas() {
    const {list, schoolClassList} = useSchoolClass()

    useEffect(() => {
        if (schoolClassList && schoolClassList?.length >= 1) {
            return
        } else {
            list()
        }
    }, [])

    return (
        <>
            <Header />
            <Main schoolClassList={schoolClassList} />
            <Diferentials />
            <Approvals />
            <Tutoring />
            <Footer  mt={{base: 40, lg: 72}}>
                <StudentsVideoFooter />
            </Footer>
        </>
    )
}