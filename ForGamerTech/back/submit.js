
var mysql = require('mysql');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forgamertech'
});


module.exports = function(app) {
    app.get('/submit'),
    app.post('/submit', function(request, response){
        var p = request.body;
        var query = "INSERT INTO componentes (ID_componente, nome, preço) VALUES ?";
        var values = [[p.ID_componente, p.nome, p.preco,p.imagem,p.descricao,p.marca,p.ID_categoria,p.visualizacoes]];
        connection.query(query, [values], function (err, result, fields) {
          if (err) throw err;
          response.send("Number of records inserted: " + result.affectedRows);
        })
    })
    app.post('/submit/del', function(request, response){
        con.connect(function(err) {
            if (err) throw err;
            var query = "UPDATE componentes SET ? WHERE ?";
            var values1 = request.params.id;
            var values2 = request.params.id;
            con.query(query, values1, values2, function (err, result) {
              if (err) throw err;
              console.log("Number of records deleted: " + result.affectedRows);
            });

        })
    })
    app.post('/submit/upd', function(request, response){
        var query = "INSERT INTO componentes (ID_componente, nome, preço) VALUES ?";
        var values = request.params.id;
        connection.query(query, [values], function (err, result, fields) {
            if (err) throw err;
            response.send("Number of records inserted: " + result.affectedRows);
          });
    })

}
