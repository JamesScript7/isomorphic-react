var React = require('react');
var Link = require('react-router-dom').Link;
// var connect = require('react-redux').connect;
var createReactClass = require('create-react-class');
// https://reactjs.org/docs/react-without-es6.html

var Layout = createReactClass({
  handleClick: function() {
    console.log('I WAS CLICKED!');
  },
  render: function() {
    var custom = this.props.custom;
    return (
      <html>
        <head>
          <title>Isomorphism!</title>
          <link rel="stylesheet" href="styles.css" />
        </head>
        <body>
          <div>
            {this.props.children}
            <ul>
              <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <h1>{custom.greeting}</h1>
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

module.exports = Layout;
