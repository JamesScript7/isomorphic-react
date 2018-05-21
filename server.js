require('babel-register')({
  presets: ['react']
});

var express = require('express');
var app = express();
var PORT = 3000;

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

app.use(express.static('public'));

app.get('/', function(req, res) {
  var html = ReactDOMServer.renderToString(
    React.createElement(Component)
  )
  res.send(html);
});

app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});
