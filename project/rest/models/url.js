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
        allowNull: false
    },
    shortUrl: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    }
}, { timestamps: false });

// Do the magic
con.sync().then(()=>{
    // Create sample data
    var mock = require('../data/urls.json');
    mock.forEach(url => {
        url.id = parseInt(url.id)
        Url.create(url).then(url => console.log(url)).catch(err => {console.log(err)})
    });
});

// Export Url model
module.exports = Url;