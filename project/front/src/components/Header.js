import React from 'react';
import logo from '../assets/logo-chaordic.png';

export default function Header() {

  return (
    <div className="row">
      <div className="col-12 center-align white"
      style={{padding: '20px 0 10px'}}>
          {/* Link to chaordic.com.br */}
          <a href="https://chaordic.com.br/"
          target="_blank"
          rel="noopener noreferrer">
            {/* Chaordic Logo */}
            <img src={logo}
                  alt="Chaordic Logo" />
          </a>
      </div>
    </div>
  );

}