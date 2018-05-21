var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
  handleClick: function() {
    alert();
  },
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Lets explore the great world of Isomorphic React!</p>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
});
