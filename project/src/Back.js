const http = require('http'); 
const express = require('express');
const mysql = require('mysql');

const redirectUrlRoute = require('./rotas/RedirectUrl');
const linksRoute = require('./rotas/Links');
const hitsRoute = require('./rotas/Hits');
const shortenUrlRoute = require('./rotas/ShortenUrl');

const app = express();
app.use(require("cors")());

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
});

/* Função para iniciar a conexão com o Banco de Dados. */
function startConnection() {
    return mysql.createConnection({ host: host, port: port, user: user, password: password, database: database  });
}
 
var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor escutando na porta 3030...")

app.use("/v1/", redirectUrlRoute);
app.use("/", linksRoute, hitsRoute, shortenUrlRoute);