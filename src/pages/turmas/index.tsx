import Header from "@/components/Header";
import { Diferentials } from "@/components/turmas/diferentials";
import { Main } from "@/components/turmas/main";
import { Approvals } from "@/components/turmas/approvals";
import Footer from "@/components/Footer";
import { useSchoolClass } from "@/context/turmas";
import {useEffect } from "react";
import { ApprovedStudentsFooter } from "@/components/Footer/approvedStudents";


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
            <Approvals />
            <Diferentials />
            <Footer mt={80}>
                <ApprovedStudentsFooter />
            </Footer>
        </>
    )
}