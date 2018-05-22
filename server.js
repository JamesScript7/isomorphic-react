require('babel-register')({
  presets: ['react']
});

// EXPRESS
var express = require('express');
var app = express();
var PORT = 3000;
var path = require('path');
var bodyParser = require('body-parser');

// REACT
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// Components
var Home = require('./components/Home.jsx');
var About = require('./components/About.jsx');

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Temp prop storage...
var props = {
  greeting: 'Hello World!',
  about: 'This is the about page!'
 };

// ROUTES
app.get('/', function(req, res) {
  // Load the props into the component here:
  var homeHTML = ReactDOMServer.renderToString(
    React.createElement(Home, props)
  );

  // Home uses a framework and dumps the string there:
  res.render('index.ejs', { reactOutput: homeHTML });
});

app.get('/about', function(req, res) {
  var aboutHTML = ReactDOMServer.renderToString(
    React.createElement(About, props)
  );

  // About sends a string:
  res.send(aboutHTML);
});

app.get('*', function(req, res) {
  res.status(404).send('Not Found!');
});

app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});
