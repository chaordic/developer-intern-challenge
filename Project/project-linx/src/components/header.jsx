import React from 'react'
import Logo from '../Assets/logo-chaordic.png'

function Header() {
    return(
        <div className="center header__geral">
           <img src={Logo} alt="logo" className="header__logo" />
        </div>
    )
}

export default Header;