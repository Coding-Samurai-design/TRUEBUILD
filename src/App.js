import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import Footer from './components/Footer';
import GetQuote from './components/GetQuote'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Services />
            <Work />
            <Skills />
            <Testimonials />
            <Map />
          </>} />
          <Route path="/quote" element={<GetQuote />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
