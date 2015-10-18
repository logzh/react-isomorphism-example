import React from 'react';

let Hello = React.createClass({
    render () {
    return <p>hello {this.props.name}</p>;
}
});

module.exports = Hello;