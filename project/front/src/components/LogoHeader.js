import React from 'react';
import logo from './logo-chaordic.png';

export default function LogoHeader() {

  return (
    <div className="row">
        <div className="col-12 center-align">
            <a href="https://chaordic.com.br/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt="Chaordic Logo" />
            </a>
        </div>
    </div>
  );

}