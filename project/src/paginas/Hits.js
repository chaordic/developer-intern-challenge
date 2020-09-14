import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL_GET = 'http://localhost';
const PORT = 3030;

function Hits() {
    const [hits, setHits] = useState([]);

    useEffect(() => {
        axios.get(URL_GET + ":" + PORT + "/hits").then(response => {
           setHits(response.data);
        });
    }, [])

    return (
        <div className="Conteudo Hits">
            <h1>Hits</h1>
            <div className="Conteudo Hits_Mostrar">
                <p>{hits}</p>
            </div>
            <span>Cliques em links</span>
        </div>
    )
}

export default Hits