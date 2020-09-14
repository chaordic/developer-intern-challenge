import React from 'react';
import icon_twitter from '../img/icon-twitter.png';
import icon_facebook from '../img/icon-facebook.png';

function Footer() {
    return (
        <footer className="Conteudo Rodape">
            <div className="Rodape_Nome">
                <p>chr.dc</p>
            </div>

            <div className="Rodape_Icones">
                <img src={icon_twitter}></img>
                <img src={icon_facebook}></img>
            </div>
        </footer>
    )
}

export default Footer