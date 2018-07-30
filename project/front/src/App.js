import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom' ;
import Splash from './components/Splash';
import Header from './components/Header';
import TopFive from './components/TopFive';
import Hits from './components/Hits';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Route path='/:shortUrl' component={Redirect} />
          <Header></Header>
          <Splash></Splash>
          <TopFive></TopFive>
          <Hits></Hits>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

class Redirect extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      url: null
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    fetch('http://localhost:8080/'+params.shortUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({url: data.url})
        window.setTimeout(()=>{ window.location = data.url },3000)
      })
  }

  render() {
    return (
      <div className="row">
        <div  className="col-12 text-white" 
              style={{
                  padding: '10px 0',
                  backgroundColor: '#AA1423'
                }}>
            <p className="container left-align white-text">
              Redirecionando você para: {this.state.url}
            </p>
        </div>
      </div>
    )
  }
}

export default App;
