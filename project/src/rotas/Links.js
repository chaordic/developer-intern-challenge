const express = require('express');
const mysql = require('mysql');

const url_shorter = 'http://localhost:3030/';

const host = 'localhost';
const port = '3306';
const user = 'root';
const password = '';
const database = 'encurtador_de_links';

var linksRoute = express.Router();
linksRoute.get('/links', async (req, res) => {
    const select = "SELECT * FROM `links` ORDER BY (`hits`) DESC LIMIT 5;";
    const connection = startConnection();
    connection.query(select, function(err, result, fields) {
        try {
            if (err) {
                res.json({ Erro: 'Ocorreu um erro ao buscar dados no Banco de Dados.' });
                return;
            }
    
            if (result == ''){
                res.json({ Erro: 'Não há links gerados!' });
                return;
            }
    
            res.json(result);
        } finally {
            connection.end();
        }
    });
});

module.exports = linksRoute;

/* Função para iniciar a conexão com o Banco de Dados. */
function startConnection() {
    return mysql.createConnection({ host: host, port: port, user: user, password: password, database: database  });
}