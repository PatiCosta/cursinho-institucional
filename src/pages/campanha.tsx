import Header from "@/components/Header";
import { Main } from "@/components/campanha/main";
import Footer from "@/components/Footer";
import { Comments } from "@/components/campanha/comments";
import { CampaignChart } from "@/components/campanha/campaignChart";
import { DonationFooter } from "@/components/Footer/donation";


export default function Turmas() {
    return (
        <>
            <Header />
            <Main />
            <CampaignChart />
            <Comments />
            <Footer marginTop={56}>
                <DonationFooter />
            </Footer>
        </>
    )
}