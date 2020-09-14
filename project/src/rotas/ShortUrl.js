const express = require('express');
const mysql = require('mysql');
const validUrl = require('valid-url');

const url_shorter = 'http://localhost:3030/';

const host = 'localhost';
const port = '3306';
const user = 'root';
const password = '';
const database = 'encurtador_de_links';

var shortUrlRoute = express.Router();
shortUrlRoute.get('/shortUrl', async (req, res) => {
    var url = req.query.url;
    if (!validUrl.isUri(url))
        return res.json({ Erro: 'Informe uma URL válida!' });
        
    var code = makeCharacters(8);
    var newUrl = url_shorter + "v1/" + code;
    var select = "SELECT * FROM `links` WHERE `url`=?;";
    var insert = "INSERT INTO `links` VALUES(NULL, ?, ?, ?, ?);";

    const connection = startConnection();
    connection.query(select, [ url ], function(err, result, fields) {
        try {
            if (err) return res.json(err);
            if (result != '') return res.json({ newUrl: result[0].shortUrl });
            
            connection.query(insert, [ 0, url, newUrl, code ], function(err, result, fields) {
                if (err) return res.json(err);
                res.json({ newUrl: newUrl });
            });
        } finally {
            connection.end();
        }
    });
});

module.exports = shortUrlRoute;

/* Função para iniciar a conexão com o Banco de Dados. */
function startConnection() {
    return mysql.createConnection({ host: host, port: port, user: user, password: password, database: database  });
}

/* Função para criar caracteres aleatórios para o encurtador de links */
function makeCharacters(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}