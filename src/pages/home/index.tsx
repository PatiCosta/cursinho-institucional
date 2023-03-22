import Header from "../../components/Header";
import Classes from "./components/classes";
import Diferentials from "./components/diferentials";
import Footer from "./components/footer";
import InfoBar from "./components/infoBar";
import Main from "./components/main";

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
