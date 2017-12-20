/**
 * Created by Gentil on 16/12/17.
 */
const v4 = require('node-uuid');
const BBPromise = require('bluebird');
const url = require('../db/Postgres/models/url');

class urlGenerator {
    constructor(config, urlFinder) {
        this.config = config;
        this.urlFinder = urlFinder;
    }
    init(db) {
        console.log("URL GENERATOR INICIALIZADO");
        this.models = db.db_instance.models;
    }

    generateToken() {
        let token = v4();
        let stringToken = token.toString();
        stringToken = stringToken.substring(0, 6);
        return stringToken;
        return token;
    }


    generateUrl(longUrl) {
        return new BBPromise((resolve, reject) => {
            if(longUrl) {
                longUrl = longUrl.replace("http://", "").replace("www.", "").replace("https://", "");
                longUrl = "http://" + longUrl;
                let token = this.generateToken();
                if(this.config.server.port === 80) {
                    var shorterUrl = this.config.url.mainURL + "/"  + token;
                } else {
                    var shorterUrl = this.config.url.mainURL + ":" + this.config.server.port + "/"  + token;
                }
                resolve(shorterUrl);
                this.urlFinder.findUrl(shorterUrl).then((result) => {
                    if (result.data) {
                        return this.generateUrl(longUrl);
                    } else {
                        this.createUrl(longUrl, shorterUrl).then((row) => {
                            resolve({success: true, data: row});
                        }).catch((err) => {
                            reject({success: false, error:err});
                        });
                    }
                });
            }else {
                reject({success: false, error: "Necessário passar uma url"})
            }
        });
    }

    createUrl(longUrl, shorterUrl) {
        return new BBPromise((resolve, reject) => {
            this.models.url.create({
                hits: 0,
                url: longUrl,
                short_url: shorterUrl
            }).then((row) => {
                resolve(row);
            }).catch((err) => {
                reject(err);
            });
        })
    }


}

module.exports = urlGenerator;
