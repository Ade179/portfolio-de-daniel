import { useContext } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}

    >
      <Navbar />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
