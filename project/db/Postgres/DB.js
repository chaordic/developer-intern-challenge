/**
 * Created by Gentil on 16/12/17.
 */
var Sequelize = require('sequelize');
const BBPromise = require('bluebird');
const fs = require('fs');
const path = require('path');
let db = {};

class DB {
    constructor(config) {
        this.config = config;
        this.db_instance = null;
    }

    init() {
         db.sequelize = new Sequelize(
            this.config.db.schema,
            this.config.db.user,
            this.config.db.password,
            {
                host: this.config.db.host,
                dialect: "postgres",
                logging: console.log
            }
        );
        db.Sequelize = Sequelize;
        db.models = {};

        return this.testConnection().then(() => {
            this.populateModels(db);
            this.db_instance = db;
        });
    }

    testConnection() {
        let con = db.sequelize.authenticate();
        con.then(() => {
            console.log("Inicializando conexao com o DB: %j", con);
        }).catch((e) => {
            console.log("Falha a iniciar o banco: %s", e.message);
        });
        return con;
    }

     populateModels(db) {
        const dir = path.join(__dirname, './models');
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = db.sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        Object.keys(db.models).forEach(key => {
        });
    }

    handlePopulateDB() {
        return new BBPromise((resolve,reject) => {
            let fixturePath = path.resolve('db/fixtures/fixtureInicial.json');
            let fixture = require(fixturePath);
            db.sequelize.query("DELETE FROM url", {type: db.sequelize.QueryTypes.SELECT})
                .then(() => {
                    for(let obj in fixture) {
                        let url = fixture[obj];
                        if(this.config.server.port === 80) {
                            url.shortUrl =  url.shortUrl.replace("http://chr.dc", this.config.url.mainUrl);
                        } else {
                            url.shortUrl = url.shortUrl.replace("http://chr.dc", this.config.url.mainURL + ":" + this.config.server.port);
                        }
                        db.models.url.create({
                            id: url.id,
                            hits: url.hits,
                            url: url.url,
                            short_url: url.shortUrl
                        }).then((row) => {
                            resolve(row);
                        }).catch((err) => {
                            reject(err);
                        });
                    }
                });
        });
    }

}

module.exports = DB;