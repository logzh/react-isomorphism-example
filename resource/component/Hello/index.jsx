import React from 'react';
var isNode = typeof window === 'undefined';
if (!isNode){
  require('./index.css');
}

var Hello = React.createClass({
  getDefaultProps: function() {
    return {name: 'world', count: 0}
  },
  getInitialState: function() {
    return this.props;
  },
  handleClick: function() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {

    return <p className="hello" onClick={this.handleClick}>hello {this.state.name}, 你点击我的次数:{this.state.count}</p>;
  }
});

module.exports = Hello;