import React from 'react';
import './App.css';

import Header from './paginas/Header';
import ShortenLinks from './paginas/ShortenLinks';
import Top from './paginas/Top';
import Hits from './paginas/Hits';
import Footer from './paginas/Footer';

function App() {
  return (

    <div className="Site">
      <Header />
      <ShortenLinks />
      <Top />
      <Hits />
      <Footer />
    </div>

  );

}

export default App;
