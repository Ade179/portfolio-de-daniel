import Navbar from './Components/Navbar/Navbar';
import './App.css';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
