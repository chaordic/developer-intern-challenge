import React from 'react';
import Twitter from '../assets/icon-twitter.png';
import Facebook from '../assets/icon-facebook.png';

export default function Footer() {

  return (
    <div  className="container"
          style={{padding: '15px 0'}}>
      <div  className="row"
            style={{padding: '5px 0'}}>
          <div className="col s6 left left-align">
            <a  className="red-chaordic"
                href="http://chr.dc">
              <h5 style={{
                margin: 0,
                padding: 0}}>
                chr.dc
              </h5>
            </a>
          </div>
          <div className="col s6 right right-align">
            <a  href="https://twitter.com/chaordic"
                target="_blank">
              <img  src={Twitter}
                    alt="Chaordic no Twitter"/>
            </a>
            <a  href="https://facebook.com/chaordic.com.br/"
                target="_blank"
                style={{marginLeft: '25px'}}>
              <img  src={Facebook}
                    alt="Chaordic no Facebook"/>
            </a>
          </div>
      </div>
    </div>
  );

}