import React from 'react';

import facebook from '../Assets/icon-facebook.png';
import twitter from '../Assets/icon-twitter.png';

function Footer(){
    return(
        <div className="center footer__geral">
            <div className="footer__chr">
                <p className="footer__chr__item">chr.dc</p>
            </div>
            <div className="footer__icons">
                <img src={twitter} alt="Ícone do Twitter" className="footer__icon__twitter"/>
                <img src={facebook} alt="Ícone do Facebook" className="footer__icon__facebook"/>
            </div>
        </div>
    )
}

export default Footer;