// Dependencies
var sequelize = require('sequelize'),
    http = require('http');
    
// Database connection
var con = new sequelize('null','null', 'null', {
    dialect: 'sqlite',
    storage: './data/data.db'
});

// Definitions of URL Model
var Url = con.define( 'url', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hits: {
        type: sequelize.INTEGER,
        defaltValue: 0,
        allowNull: false
    },
    url: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            validateUrlFormat: function(value) {
                if(/https?:\/\//.test(value))
                    throw new Error('Remove http:// or https:// protocol from url')
            },
            validateUrlQuality: function(value) {
                options = {method: 'HEAD', host: value, port: 80, path: '/'},
                req = http.request(options, function(r) {
                    if(r.statusCode >= 200 && r.statusCode <= 400)
                        throw new Error('Invalid link, check if ' + value + ' exists')
                });
                req.end();
            }
        }
    },
    shortUrl: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    }
}, { timestamps: false });

// Do the magic
con.sync();

// Export Url model
module.exports = Url;