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
    database: 'pessoas'
});
console.log('Mysql connection at %s', connection.config.host, connection.config.database);
connection.connect();


app.get('/listPerson', function(request, response) { 
    connection.query('SELECT * FROM pessoas.pessoas;' , function(err,rows, fields){
        if (err) throw err;
            response.send(rows);
    });
});

app.post('/addPerson', function(request, response){
    var query = "INSERT INTO pessoas.pessoas (ID, firstName, lastName, age, profession) VALUES ?";
    var values = [[4, 'carlos', 'rodrigues', 47, 'desempregado']];
    connection.query(query, [values], function (err, result, fields) {
      if (err) throw err;
      response.send("Number of records inserted: " + result.affectedRows);
    });
});


app.get('/listPerson/:id', function(request, response){ 
    var id = request.params.id;
    var query = "SELECT * FROM pessoas.pessoas WHERE ID= ?";
    connection.query(query, id, function (err, rows, fields) {
        if (err) throw err;
        response.send(rows[0]);
    });
});



app.delete('/deletePerson/:id', function(request,response){
    var id = request.params.id;
    var query = "DELETE FROM pessoas.pessoas WHERE ID= ?";
    connection.query(query, id, function (err, result, fields) {
        if (err) throw err;
        response.send("Number of records deleted: " + result.affectedRows);
    });
});

app.listen(3001, () => console.log(' O servidor está online. '));