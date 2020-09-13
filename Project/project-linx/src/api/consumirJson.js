var fs = require('fs')

fs.readFile("./urls.json" , (err, data) => {
  if(err){
    return console.log("Erro ao ler arquivo");
  }
  
  var jsonData = JSON.parse(data); // faz o parse para json

});