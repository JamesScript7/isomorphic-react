require('babel-register')({
  presets: ['react']
});

// EXPRESS
var express = require('express');
var app = express();
var PORT = 3000;

// MIDDLEWARES
app.use(express.static('public'));
app.use(require('./routes/index.jsx'));

app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});
