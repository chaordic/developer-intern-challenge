const express = require('express');
const mysql = require('mysql');

const url_shorter = 'http://localhost:3030/';

const host = 'localhost';
const port = '3306';
const user = 'root';
const password = '';
const database = 'encurtador_de_links';

var getShortenUrlRoute = express.Router();
getShortenUrlRoute.get('/:shortUrl', async (req, res) => {
    var shortUrlCode = req.params.shortUrl;
    const connection = startConnection();
    
    var select = "SELECT * FROM `links` WHERE `code`=?;";
    connection.query(select, shortUrlCode, function(err, result, fields) {
        try {
            if (err) return res.json('Ocorreu um erro em nosso sistema.');
            if (result == '') return res.json('Essa URL não existe em nosso sistema.');

            updateHitByCode(result[0].hits + 1, shortUrlCode);
            return res.redirect(result[0].url);
        } finally {
            connection.end();
        }
    });
});

function updateHitByCode(hits, code) {
    const connection = startConnection();
    var update = "UPDATE `links` SET `hits`=? WHERE `code`=?;";

    connection.query(update, [ hits, code ], function (err, result) {
        try {
            if (err) return console.log('Ocorreu um erro ao atualizar dados no Banco de Dados.');
        } finally {
            connection.end();
        }
    });
}

module.exports = getShortenUrlRoute;

function startConnection() {
    return mysql.createConnection({ host: host, port: port, user: user, password: password, database: database  });
}