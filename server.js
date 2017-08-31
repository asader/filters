// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:1234@ds155473.mlab.com:55473/filter'); // connect to our database

var User = require('./app/models/user');
var Filter = require('./app/models/filter');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });


// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_gender/')

    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_name)
    .get(function(req, res) {
        User.find({gender: req.params.user_gender},  function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        })
    });


// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_gender/:user_skip/')

// get the user with that id (accessed at GET http://localhost:8080/api/users/:user_name)
    .get(function(req, res) {
        User.find({gender: req.params.user_gender},  function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        }).skip(parseInt(req.params.user_skip));
    });

// on routes that end in /filters
// ----------------------------------------------------
router.route('/filters')

// get all the filters (accessed at GET http://localhost:8080/api/filters)
    .get(function(req, res) {
        Filter.find(function(err, filters) {
            if (err)
                res.send(err);

            res.json(filters);
        });
    });

// on routes that end in /filters/:user_id
// ----------------------------------------------------
router.route('/filters/:filter_name')

// get the user with that id (accessed at GET http://localhost:8080/api/filters/:user_name)
    .get(function(req, res) {
        Filter.find(req.params.user_name, function(err, filter) {
            if (err)
                res.send(err);
            res.json(filter);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
