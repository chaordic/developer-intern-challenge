const config = require("./config.json");
const Server = require("./express/Server");
const DB = require("./db/Postgres/DB");

function init() {
    let db = new DB(config);
    let server = new Server(config,db);
    db.init().then(() => {
        db.db_instance.sequelize.sync().then(() => {
          server.init(db).then(() => {
          }).catch((err) => {
            console.error(err.toString());
          });
        }).catch((err) => {
            console.error(err.toString());
        });
    }).catch((err) => {
      console.error(err.toString());
    });

}


init();