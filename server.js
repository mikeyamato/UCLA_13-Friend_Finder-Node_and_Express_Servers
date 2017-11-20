var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });




// var express = require('express')
// var bodyParser = require('body-parser')
// var app = express()
 
// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })
 
// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })
