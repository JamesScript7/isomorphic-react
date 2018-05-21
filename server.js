require('babel-register')({
  presets: ['react']
});

// EXPRESS
var express = require('express');
var app = express();
var PORT = 3000;

// REACT
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

// MIDDLEWARES
app.use(express.static('public'));

// ROUTES
app.get('/', function(req, res) {
  var props = { greeting: 'Hello World!' };

  var html = ReactDOMServer.renderToString(
    React.createElement(Component, props)
  );
  // console.log(html);

  res.send(html);
});

app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});
