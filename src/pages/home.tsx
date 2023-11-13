import Footer from "@/components/Footer";
import { DonationFooter } from "@/components/Footer/donation";
import Header from "@/components/Header";
import { Campaign } from "@/components/home/campaign";
import { Classes } from "@/components/home/classes";
import { Comments } from "@/components/home/comments";
import { Diferentials } from "@/components/home/diferentials";
import { InfoBar } from "@/components/home/infoBar";
import { Main } from "@/components/home/main";


export default function Home() {
  return (  
    <>
      <Header />
      <Main />
      <InfoBar />
      <Diferentials />
      {/* <Classes /> */}
      <Campaign />
      <Comments />
      <Footer mt={{base: 56, lg: 48}}>
        <DonationFooter />
      </Footer>
    </>
  )
}
