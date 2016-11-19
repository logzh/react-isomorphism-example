import React from 'react';
var isNode = typeof window === 'undefined';
if (!isNode) {
  require('./index.css');
}

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
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

    return <div className="hello" onClick={this.handleClick}>
      <Greeting name={this.state.name}/>
      <span>你点击我的次数:{this.state.count}</span>
    </div>;
  }
});

module.exports = Hello;