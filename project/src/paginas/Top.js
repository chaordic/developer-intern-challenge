import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL_GET = 'http://localhost';
const PORT = 3030;

function Top() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get(URL_GET + ":" + PORT + "/links").then(response => {
            setUrls(response.data);
        })
    }, []);

    return (
        <div className="Conteudo Top">
            <h1>TOP 5</h1>
            <div className="Conteudo Top_Links">
                { urls.map(url => (
                    <div className="Top_Link">
                        <span>{url.shortUrl}</span>
                        <span>{url.hits}</span>
                    </div>
                )) }
            </div>
      </div>
    )
}

export default Top