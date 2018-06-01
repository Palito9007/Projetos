
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


module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // 1 - show the login form GET
    app.get('/login', function(req,res){

        res.render('login.ejs', {message: req.flash('loginMessage')})

    });

    // 2 - process the login form POST
   app.post('/login', passport.authenticate('local-login', {
       successRedirect : '/profile',
       failureRedirect: '/login',
       failureFlash:    true // allow flash messages

   }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // 3 - show the signup form
    // render the page and pass in any flash data if it exists GET
    app.get('/signup', function(req,res){

        res.render('signup.ejs', {message: req.flash('signupMessage')})

    });

    // 4- process the signup form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect: '/signup',
        failureFlash:    true // allow flash messages
 
    }));
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // 5 - show the profile page GET
    app.get('/profile', isLoggedIn, function(req,res){
        res.render('profile.ejs', {
            user: req.user
        })
    });
    app.get('/submit', function(request, response){

    })
    app.post('/submit', function(request, response){
        var p = request.body;
        var query = "INSERT INTO componentes (IDcomponente, nome, preco, IDrequisicao, IDcomprador, vendido, descricao, imagem, marca, dataCompra, numFatura, IDcategoria, Visualizacoes) VALUES ? ";
        var values = [[p.IDcomponente, p.nome, p.preco, p.IDrequisicao, p.IDcomprador, p.vendido, p.descricao,p.imagem,p.marca,p.dataCompra, p.numFatura , p.IDcategoria,p.Visualizacoes]];
        connection.query(query, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows)
          })
        })
    app.get('/del', function(request,response){

    })
    app.post('/del', function(request, response){
        var p = request.body;
        var query = "DELETE FROM componentes WHERE IDcomponente = ? ";
        var values = [[p.del]];
        connection.query(query, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows)
          })
    });
    app.post('/submit/upd', function(request, response){
        connection.connect(function(err) {
            if (err) throw err;
            var query = "UPDATE componentes SET ? WHERE ?";
            var values2 = request.body;
            con.query(query, [values1], [values2], function (err, result) {
              if (err) throw err;
              console.log("Number of records deleted: " + result.affectedRows);
            });

        })
    });
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}