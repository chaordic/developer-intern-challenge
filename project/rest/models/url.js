// Dependencies
var sqlite3 = require('sqlite3').verbose();

// Create a relational database of SQlite type.
var db = new sqlite3.Database(':memory:', (err)=>{
    if(err)
        return console.error(err.message);
    console.log('Conected to in-memory SQlite database')
});

// Create url table if not exists. 
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS url (id TEXT, hits INTEGER, url TEXT, shortUrl VARCHAR(255))");
});

// Close database connection.
db.close((err)=>{
    if(err)
        return console.error(err.message)
    console.log('Close the database connection.')
});