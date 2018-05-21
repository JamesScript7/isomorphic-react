// EXPRESS
var router = require('express').Router();

// REACT
var React = require('react');
var ReactDOMServer = require('react-dom/server');
// var Component = require('./Component.jsx');
var StaticRouter = require('react-router').StaticRouter;

// https://reactjs.org/docs/react-without-jsx.html

// ROUTES
router.get('*', function(req, res) {
  var props = { greeting: 'Hello World!' };

  var context = {};
  var html = ReactDOMServer.toString(
    <StaticRouter location={req.url} context={context}>
      {require('../views/app.jsx')}
    </StaticRouter>
  );

  if (context.status >= 400) {
    res.status(context.status).send(html);
  } else if (context.url) {
    res.redirect(context.status, context.url);
  } else {
    res.send(html);
  }

});

module.exports = router;
