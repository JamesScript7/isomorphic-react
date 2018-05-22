var React = require('react');

// https://reactjs.org/docs/react-without-es6.html
// ES5 way:
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
    console.log('CLICKED in the CONTACT PAGE!');
  },
  render: function() {
    return (
      <div>
        <main>
          <h1>{this.props.greeting}</h1>
          <p>Welcome to the Contact page!</p>
          <button onClick={this.handleClick}>Click</button>
        </main>

        <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
        <script src='contact-bundle.js' />
      </div>
    );
  }
});
