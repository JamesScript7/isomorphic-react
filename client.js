var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Home = require('./components/Home.jsx');
// var About = require('./components/About.jsx');

var props = window.PROPS;
/*
Warning: render(): Calling ReactDOM.render()
to hydrate server-rendered markup will stop
working in React v17. Replace the ReactDOM.render()
call with ReactDOM.hydrate() if you want React to
attach to the server HTML.
*/
ReactDOM.hydrate(
  React.createElement(Home, props), document
);
