import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
import Top from './components/top/top';
import Hits from './components/hits/hits';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
        <Header/>
        <div className="home">
          <Home/>
        </div>
        <div className="top" >
        <Top/>
        </div>
        <div className="hits">
          <Hits/>
        </div>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;
