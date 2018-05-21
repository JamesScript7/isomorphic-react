var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  _handleClick: function() {
    console.log('I WAS CLICKED!');
  },
  render: function() {
    return (
      <html>
        <head>
          <title>Isomorphism!</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <div>
            <h1>Hello World!</h1>
            <p>Lets explore the great world of Isomorphic React!</p>
            <button onClick={this._handleClick}>Click</button>
          </div>
          <script src='bundle.js' />
        </body>
      </html>
    );
  }
});
