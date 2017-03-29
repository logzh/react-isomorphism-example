import React, {PropTypes} from 'react';

import Cart from '../../component/Cart';

var store = require('../store/cart');
var actions = require('../actions/cart');

var Content = React.createClass({
  propTypes: {
    carts: PropTypes.array,
    actions: PropTypes.shape({
      fetchCart: PropTypes.func,
      increaseCount: PropTypes.func,
      decreaseCount: PropTypes.func,
      updateCount: PropTypes.func,
      deleteItem: PropTypes.func,
      showPanel: PropTypes.func
    }).isRequired
  },
  getDefaultProps: function() {
    return {
      carts:[],
      actions: actions
    };
  },
  getInitialState: function() {
    return this.props;//store.getAll();
  },
  componentDidMount: function() {
    store.addChangeListener(this._onChange);
    if (this.props.carts.length === 0){
      actions.fetchCart();
    }else {
      actions.getInitData(this.props)
    }
  },
  componentWillUnmount: function() {
    store.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(store.getAll());
  },
  render: function() {
    var totalPrice = 0;
    var totalCount = 0;
    var props = this.props;
    var state = this.state;

    state.carts.map(function(item) {
      totalCount += parseInt(item.count, 10);
    });

    return <Cart actions={props.actions} {...state}  totalCount={totalCount}/>;
  }
});

module.exports = Content;
