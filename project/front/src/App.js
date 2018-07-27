import React, { Component } from 'react';
import LogoHeader from './components/LogoHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <LogoHeader></LogoHeader>
      </div>
    );
  }
}

export default App;
