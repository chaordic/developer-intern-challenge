import React, { Component } from 'react';
import './footer.css';
import img1 from './icon-facebook.png';
import img2 from './icon-twitter.png';
class footer extends Component {
    state = {  }
    render() { 
        return (
         <div className="footer container" >
            <h2 className="site" >chr.dc</h2>
            <img className="social" src={img1} alt=""/>
            <img className="social" src={img2} alt=""/>
        </div> );
    }
}
 
export default footer;