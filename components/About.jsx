var React = require('react');

// https://reactjs.org/docs/react-without-es6.html
// ES5 way:
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
    console.log('CLICKED in the ABOUT PAGE!');
  },
  render: function() {
    return (
      <html lang="en-US">
        <head>
          <title>About - Isomorphism!</title>
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
            <p>Welcome to the About page!</p>
            <button onClick={this.handleClick}>Click</button>
          </main>

          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
            }} />
          <script src='about-bundle.js' />
        </body>
      </html>
    );
  }
});
