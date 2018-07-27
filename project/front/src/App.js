import React, { Component } from 'react';
import Splash from './components/Splash';
import Header from './components/Header';
import TopFive from './components/TopFive';
import Hits from './components/Hits';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header></Header>
        <Splash></Splash>
        <TopFive></TopFive>
        <Hits></Hits>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
