import './App.css';
import About from './components/About';
import Header from './components/Header'
import Resume from './components/Resume'
import Contact from './components/Contact';
import Formation from './components/Formation';
import Langues from './components/Langues';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Resume />
      <Formation />
      <Langues />
      <Portfolio />
      <Contact />

    </main>
  );
}

export default App;
