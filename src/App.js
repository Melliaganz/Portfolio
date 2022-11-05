import './App.css';
import About from './components/About';
import Header from './components/Header'
import Contact from './components/Contact';
import Formation from './components/Formation';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollupButton from './components/ScrollupButton';

function App() {
  return (
    <main class="main">
      <Header />
      <ScrollupButton />
      <About />
      <Formation />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
