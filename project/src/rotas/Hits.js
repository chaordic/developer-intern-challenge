const express = require('express');
const mysql = require('mysql');

const url_shorter = 'http://localhost:3030/';

const host = 'localhost';
const port = '3306';
const user = 'root';
const password = '';
const database = 'encurtador_de_links';

var hitsRoute = express.Router();
hitsRoute.get('/hits', async (req, res) => {
    const select = "SELECT SUM(`hits`) AS `hits` FROM `links`";
    const connection = startConnection();
    connection.query(select, function(err, result, fields) {
        try {
            if (err) return res.json(err);
            return res.json(result[0].hits);
        } finally {
            connection.end();
        }
    });
});

module.exports = hitsRoute;

/* Função para iniciar a conexão com o Banco de Dados. */
function startConnection() {
    return mysql.createConnection({ host: host, port: port, user: user, password: password, database: database  });
}