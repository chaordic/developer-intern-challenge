var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'url'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var tables = ['hits', 'url', 'shortUrl'];
  var type = ['int', 'VARCHAR(255)', 'VARCHAR(255)'];
  for (x=0; x<3; x++) {
    var sql = "CREATE TABLE " + tables[x] + " ("
      + tables[x] + type[x]", id int)";
    console.log(sql);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Tables created");
    });
  }
})
