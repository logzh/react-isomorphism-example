import React from 'react';
// require('./index.css');

var Hello = React.createClass({
  getDefaultProps: function() {
    return {name: 'world', count: 0}
  },
  getInitialState: function() {
    return {name: this.props.name, count: this.props.count};
  },
  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {

    return <p className="hello" onClick={this.handleClick}>hello {this.state.name}, 你点击我的次数:{this.state.count}</p>;
  }
});

module.exports = Hello;