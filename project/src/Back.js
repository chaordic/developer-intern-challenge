const http = require('http'); 
const express = require('express');
const mysql = require('mysql');
const validUrl = require('valid-url');
const fs = require('fs');

const getShortenUrlRoute = require('./rotas/GetShortenUrl');

const app = express();
app.use(require("cors")());

const url_shorter = 'http://localhost:3030/';

const host = 'localhost';
const port = '3306';
const user = 'root';
const password = '';
const database = 'encurtador_de_links';

const connection = startConnection();
connection.connect(function(err) {
    if (err)
        return console.log(err);
    
    console.log('Conectado ao MySQL!');
    const sql = "CREATE TABLE IF NOT EXISTS `links` (" + 
        "`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
        "`hits` INT NOT NULL," +
        "`url` TEXT NOT NULL," +
        "`shortUrl` VARCHAR(50) NOT NULL," +
        "`code` VARCHAR(8) NOT NULL" +    
    ") ENGINE=InnoDB;";

    connection.query(sql, function(err, res, fields) {
        if (err)
            return console.log(err);
        console.log('Tabela `links` criada com sucesso.');
    });

    connection.end();
})
 
app.get('/links', (req, res, next) => {
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

app.get('/hits', (req, res, next) => {
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

app.get('/shortUrl', async (req, res) => {
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

function read(file) {
    let content = fs.readFileSync(file, "utf-8");
    return JSON.parse(content);
}
 
var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...")

app.use("/v1/", getShortenUrlRoute);