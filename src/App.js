import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header'
import Contact from './components/Contact';
import Formation from './components/Formation';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ScrollupButton from './components/ScrollupButton';
import Socials from './components/Socials';

function App() {
  return (
    <main className="main">
      <Header />
      <ScrollupButton />
      <Socials />
      <About />
      <Formation />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
