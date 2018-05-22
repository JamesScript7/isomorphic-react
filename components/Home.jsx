var React = require('react');

// https://reactjs.org/docs/react-without-es6.html
// ES5 way:
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
    console.log('CLICKED in the HOME PAGE!');
  },
  render: function() {
    return (
      <html lang="en-US">
        <head>
          <meta charSet="utf-8" />
          <title>Home - Isomorphism!</title>
          <link rel="stylesheet" href="styles.css" />
        </head>

        <body>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <main>
            <h1>{this.props.greeting}</h1>
            <p>Lets explore the great world of Isomorphic React!</p>
            <button onClick={this.handleClick}>Click</button>
          </main>
          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
            }} />
          <script src='home-bundle.js' />
        </body>
      </html>
    );
  }
});
