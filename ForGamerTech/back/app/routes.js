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
    })

    // =====================================
    // LOGOUT ==============================
    // =====================================
    // 6 - logout user GET

    // redirect to root

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}