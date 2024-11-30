import Footer from "./components/footer";
import "./App.css";
import Fifth from "./Sections/fifth";
import Fourth from "./Sections/fourth";
import Desktop from "./Sections/Hero";
import Second from "./Sections/second";
import Third from "./Sections/third";
import Slide from "./components/slide";
import AISection from "./Sections/six";
import SupportSecation from "./Sections/support-secation";
import FooterSupportSection from "./Sections/top.footer";

function App() {
  return (
    <div className="App">
      <Desktop />
      <SupportSecation/>
      <Second />
      <Fourth />
      <Slide/>
      <Third />
      <Fifth/>
      <AISection/>
      <FooterSupportSection/>
      <Footer/>
    </div>
  );
}

export default App;
