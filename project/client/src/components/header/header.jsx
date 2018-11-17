import React, { Component } from "react";
import Logo from "./logo-chaordic.png";
import './header.css';
class Header extends Component {
  render() {
    return (
     <div >
        <img id="logo" src={Logo} alt="dwa" />
    </div>);
  }
}

export default Header;
