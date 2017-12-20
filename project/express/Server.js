const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const BBPromise = require("bluebird");
const urlFinder = require("../urlGenerator/urlFinder");
const urlGenerator = require("../urlGenerator/urlGenerator");

class Server {

    constructor(config) {
        this.config = config;
        this.urlFinder = new urlFinder(config);
        this.urlGenerator = new urlGenerator(config,this.urlFinder);
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));
        this.express.use('/', express.static(path.resolve('express/public/frontend')));
        this.express.post('/api/generateurl', this.generateUrl.bind(this));
        this.express.get('/api/findtop5', this.findTop5.bind(this));
        this.express.get('/api/getTotalhits', this.getTotalHits.bind(this));
        this.express.get('/api/findUrl', this.findUrl.bind(this));
        this.express.get('/:urlkey',this.redirectToUrl.bind(this));
    }

    init(db) {
        return new BBPromise((resolve, reject) => {
            this.urlFinder.init(db);
            this.urlGenerator.init(db);

            this.http = http.createServer(this.express);

            let port = this.config.server.port || 8080;
            this.http.listen(port, (err, resu) => {
                console.log("Server Foi iniciado em :%s", port);
                if (err) {
                    return reject(err);
                }
                if (this.config.db.populateDB) {
                    db.handlePopulateDB().then(() => {
                        resolve(true)
                    })
                }
                return resolve(true);
            });
        });
    }

    generateUrl(req, res) {
        let url = req.body.url;
        this.urlGenerator.generateUrl(url).then((generatedUrl) => {
            res.status(200).send(generatedUrl);
        }).catch((err) => {
            res.status(400).send("Erro no servidor");
        });
    }

    findTop5(req, res) {
        this.urlFinder.getTop5().then((hitsInfo) => {
            res.status(200).send(hitsInfo);
        }).catch((err) => {
            res.status(400).send("Falha no servidor");
        });
    }

    getTotalHits(req, res) {
        this.urlFinder.getTotalHits().then((totalHits) => {
            res.status(200).send(totalHits);
        }).catch((err) => {
            res.status(400).send("Falha no servidor");
        });
    }

    findUrl(req, res) {
        this.urlFinder.findUrl(req.body.url).then((urlFounded) => {
            res.status(200).send(urlFounded);
        }).catch((err) => {
            res.status(400).send("Falha no servidor");
        });
    }

    redirectToUrl(req, res) {
      let urlKey = req.params["urlkey"]  ;
        if(this.config.server.port === 80) {
            var urlToFind = this.config.url.mainURL + "/"  + urlKey;
        } else {
            var urlToFind = this.config.url.mainURL + ":" + this.config.server.port + "/"  + urlKey;
        }
      this.urlFinder.findUrl(urlToFind).then((urlFounded) => {
          if(urlFounded.data) {
              let realUrl = urlFounded.data.dataValues.url;
              this.urlFinder.checkUrl(realUrl).then((result) => {
                  if(result) {
                      this.urlFinder.updateHit(urlToFind).then((row) => {
                          res.redirect(301, realUrl);
                      }).catch((err) => {
                          console.error(err);
                          res.status(400).send("Erro no servidor");
                      });
                  } else {
                      res.status(404).send("Url não é válida");
                  }
              });
          } else {
              res.status(404).send("Url não encontrada");
          }
      }).catch((err) => {
          res.status(400).send("Erro no servidor");
      });

    }

}


module.exports = Server;