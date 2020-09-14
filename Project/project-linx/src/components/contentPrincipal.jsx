import React from 'react';
//import API from '../api/server';

function contentPrincipal(){
    return (
        <div className="center contentPrincipal__geral">
            <h2 className="contentPrincipal__titulo">Encurte seus links.</h2>
            <p className="contentPrincipal__texto">Links são longos. Encurte os links que você deseja compartilhar,<br />
                e acompanhe enquanto viajam através da internet.
            </p>
            <form action="/shortUrls" method="POST" className="contentPrincipal__form">
                <input type="text" name="fullURL" className="contentPrincipal__form__field" placeholder="Cole o seu link aqui"/>
                <input type="submit" className="contentPincipal__form__button" value="Encurtar"/>
            </form>
        </div>
    )
}

export default contentPrincipal;