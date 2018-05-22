var React = require('react');

// https://reactjs.org/docs/react-without-es6.html
// ES5 way:
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
    console.log('I WAS CLICKED in the HOME page!');
  },
  render: function() {
    return (
      <html>
        <head>
          <title>Isomorphism - Home!</title>
          <link rel="stylesheet" href="styles.css" />
        </head>

        <body>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">about page</a>
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
