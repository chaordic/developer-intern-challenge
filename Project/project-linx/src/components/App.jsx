import React, {Component} from 'react';

import Header from './header';
import ContentPrincipal from './contentPrincipal';
import Top5 from './top5';
import Hits from './hits';
import Footer from './footer';

class App extends Component{
  
  render(){
    return(
      <div>
        <header className="header">
          <Header />
        </header>

        <section className="contentPrincipal">
          <ContentPrincipal />
        </section>

        <section className="top5">
          <Top5 />
        </section>

        <section className="hits">
          <Hits />
        </section>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App