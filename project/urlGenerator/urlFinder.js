/**
 * Created by Gentil on 16/12/17.
 */
const BBPromise = require('bluebird');
const request = require('superagent');

class urlFinder {
    constructor(config) {
        this.config = config;
    }

    init(db) {
        console.log("URL FINDER INICIALIZADO");
        this.models = db.db_instance.models;
        this.sequelize = db.db_instance.sequelize
    }

    getTop5() {
        return new BBPromise((resolve, reject) => {
            this.models.url.findAll({where: {}, order: [['hits', 'DESC']], limit: 5}).then((top5Url) => {
                if (top5Url) {
                    resolve({success: true, data: top5Url});
                } else {
                    resolve({success: true, msg: 'Não há hits em nenhuma url.'});
                }
            }).catch(reject);
        });
    }

    findUrl(urlToFound) {
        return new BBPromise((resolve, reject) => {
            this.models.url.findOne({where: {short_url: urlToFound}}).then((urlFounded) => {
                if (urlFounded) {
                    resolve({success: true, data: urlFounded});
                } else {
                    resolve({success: true, msg: 'Não foi possível encontrar essa url.'})
                }
            }).catch(reject);
        });
    }

    getTotalHits() {
        return new BBPromise((resolve, reject) => {
            this.sequelize.query("SELECT SUM(hits) FROM url ", {type: this.sequelize.QueryTypes.SELECT}).then(function (totalHits) {
                resolve({success: true, data: totalHits});
            }).catch(reject);
        });
    }

    updateHit(url) {
        return new BBPromise((resolve,reject) => {
            this.findUrl(url).then((row) => {
                row.data.update({
                    hits: row.data.hits + 1
                }).then((rowUpdated) => {
                    resolve(rowUpdated)
                }).catch(reject);
            }).catch(reject);
        })

    }

    checkUrl(url) {
        return new BBPromise((resolve, reject) => {
            request
                .get(url)
                .end((err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res.status === 200);
                    }
                })
        })
    }


}

module.exports = urlFinder;
