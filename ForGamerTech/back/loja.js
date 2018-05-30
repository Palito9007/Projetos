

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

    app.get('/loja', function(request,response){
        connection.query('SELECT * FROM componentes;' , function(err,rows, fields){
            if (err) throw err;
                response.send(rows);
        });
    });

    app.delete('/deleteComponent/:id', function(request,response){
        var id = request.params.id;
        var query = "DELETE FROM componentes WHERE ID= ?";
        connection.query(query, id, function (err, result, fields) {
            if (err) throw err;
            response.send("Number of records deleted: " + result.affectedRows);
        });
    });

    app.post('/addComponent/:id', function(request, response){
        var query = "INSERT INTO componentes (ID_componente, nome, preço) VALUES ?";
        var values = request.params.id;
        connection.query(query, [values], function (err, result, fields) {
          if (err) throw err;
          response.send("Number of records inserted: " + result.affectedRows);
        });
    });

    app.post('/updateComponent/:id', function(request, response){
        var query = "UPDATE componentes (ID_componente, nome, preço) VALUES ?";
        var values = request.params.id;
        connection.query(query, [values], function (err, result, fields) {
          if (err) throw err;
          response.send("Number of records updated: " + result.affectedRows);
        });
    });
}

/*module.exports = function ax(axios){
    axios.get('127.0.0.1:3001')
        .then(function(response){
            return alert(response);
        })
    axios.post('127.0.0.1:3001/registration', {
        email: '', password: ''
    }) .then(function(response){
        return alert(response)
    });
    }
*/

