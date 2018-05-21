var React = require('react');

// https://reactjs.org/docs/react-without-es6.html
// ES5 way:
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
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
            <h1>{this.props.greeting}</h1>
            <p>Lets explore the great world of Isomorphic React!</p>
            <button onClick={this.handleClick}>Click</button>
          </div>
          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
            }} />
          <script src='bundle.js' />
        </body>
      </html>
    );
  }
});
