import Home from './components/Home';
import './components/css/home.css'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="home">
      
      <Home/>
      <Navbar/>
      <div className="bottom">

      <Skills/>
      <hr/>
      <Projects/>
      <hr/>
      {/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="+3l+p8-2p-6f+12g"
     data-ad-client="ca-pub-6847172398832884"
     data-ad-slot="3665300344"></ins> */}
      <Contact/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
