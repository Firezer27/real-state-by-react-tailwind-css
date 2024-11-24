import "./App.css";
import { DarkModeProvider } from "./component/DarkModeContext (2)";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./section/Hero"
import About from "./section/About"
import PopularAreas from "./section/PopularAreas"
import Properties from './section/Properties'
import Services from './section/Services'
import Clients from './section/Clients'
import Contact from './section/Contact'

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero/>
        <About/>
        <PopularAreas/>
        <Properties/>
        <Services/>
        <Clients/>
        <Contact/>

        <Footer />
      </DarkModeProvider>
    </>
  );
}

export default App;
