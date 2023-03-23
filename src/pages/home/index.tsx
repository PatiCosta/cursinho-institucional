import Header from "@/components/Header";
import { Classes } from "@/components/home/classes";
import { Diferentials } from "@/components/home/diferentials";
import { Footer } from "@/components/home/footer";
import { InfoBar } from "@/components/home/infoBar";
import { Main } from "@/components/home/main";


export default function Home() {
  return (  
    <>
      <Header />
      <Main />
      <InfoBar />
      <Diferentials />
      <Classes />
      <Footer />
    </>
  )
}
