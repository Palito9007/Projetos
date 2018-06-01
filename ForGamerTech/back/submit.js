
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
    app.post('/submit', function(request, response){
        var p = request.body;
        var query = "INSERT INTO `componentes` (`IDcomponente`, `nome`, `preco`, `IDrequisicao`, `IDcomprador`, `vendido`, `descricao`, `imagem`, `marca`, `dataCompra`, `numFatura`, `IDcategoria`, `Visualizacoes`) VALUES ? ;";
        var values = [[p.IDcomponente, p.nome, p.preco, p.IDrequisicao, p.IDcomprador, p.vendido, p.descricao,p.imagem,p.marca,p.dataCompra, p.numFatura , p.IDcategoria,p.Visualizacoes]];
        connection.query(query, [values], function (err, result, fields) {
          if (err) throw err;
         response.send("Number of records inserted: " + result.affectedRows);
           
        })
    })
    app.post('/submit/del', function(request, response){
        con.connect(function(err) {
            if (err) throw err;
            var query = "DELETE FROM componentes WHERE IDcomponente = ?";
            var values = request.body;
            con.query(query, values, function (err, result) {
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
