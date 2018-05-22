require('babel-register')({
  presets: ['react']
});

// EXPRESS
var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;
// Form usage:
var bodyParser = require('body-parser');

// REACT
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// COMPONENTS
var Home = require('./components/Home.jsx');
var About = require('./components/About.jsx');
var Contact = require('./components/Contact.jsx');

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTES
app.get('/', function(req, res) {
  // For example props can come from DB || isomorphic fetch!
  var props = {
    greeting: 'Hello World from the Home page!'
   };

  // Load the props into the component here:
  var homeHTML = ReactDOMServer.renderToString(
    React.createElement(Home, props)
  );

  // Home uses a framework and dumps the string there:
  res.render('index', { reactOutput: homeHTML });
});

app.get('/about', function(req, res) {
  var props = {
    greeting: 'Hello World from the About page!'
   };

  var aboutHTML = ReactDOMServer.renderToString(
    React.createElement(About, props)
  );
  aboutHTML = '<!DOCTYPE html>' + aboutHTML

  // Send HTML
  res.send(aboutHTML);
});

app.get('/contact', function(req, res) {
  var props = {
    greeting: 'Hello World from the Contact page!'
   };

  var contactHTML = ReactDOMServer.renderToString(
    React.createElement(Contact, props)
  );

  res.render('contact', { reactOutput: contactHTML });
})

// Catch all route
app.get('*', function(req, res) {
  res.status(404).send('Not Found!');
});

app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});
