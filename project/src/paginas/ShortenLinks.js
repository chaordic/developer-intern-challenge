import React from 'react';
import axios from 'axios';

const URL_GET = 'http://localhost';
const PORT = 3030;

function ShortenLinks() {
    axios.get(URL_GET + ":" + PORT + "/shortUrl?url=http://google.com");

    function enviarFormulario(event) {
        event.preventDefault();

        var url = document.getElementById('txtLink').value;
        if (url === '') {
            mudarValor('Informe um link!');
            return;
        }

        axios.get(URL_GET + ":" + PORT + "/shortUrl?url=" + url).then(function (response) {
            console.log(response);

            var data = response.data;
            if (data === 'Erro'){
                mudarValor(data.Erro);
                return;
            }

            mudarValor(response.data.newUrl);
        });
    }

    function mudarValor(texto) {
        document.getElementById('txtLink').value = texto;
    }

    return (
        <div className="Conteudo Encurtar_Links">
            <div className="Conteudo Encurtar_Funcao">
                <h1>Encurte seus links.</h1>
                <p>Links são longos. Encurte os links que você deseja compartilhar,</p>
                <p>e acompanhe enquanto viajam através da internet.</p>

                <form id="Encurtar_Form" className="Encurtar_Form" onSubmit={ enviarFormulario }>
                    <div className="Encurtar_Form_Conteudo">
                        <input type="text" id="txtLink" name="txtLink" placeholder="Cole seu link aqui"></input>
                        <button>ENCURTAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShortenLinks