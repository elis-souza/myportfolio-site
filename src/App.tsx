import { Aboutme } from "./components/Aboutme";
import { ContactArea } from "./components/ContactArea";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MySkills } from "./components/MySkills";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Aboutme />
      <MySkills />
      <ContactArea />
      <Footer />
      <GlobalStyle />
    </>
  );
}
