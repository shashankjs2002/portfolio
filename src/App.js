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
      <Contact/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
