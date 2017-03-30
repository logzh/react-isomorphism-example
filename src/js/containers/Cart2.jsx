import React, {Component} from 'react';
import {Container} from 'flux/utils';

import Cart from '../../component/Cart';
import CartStore from '../store/CartStore';
var actions = require('../actions/cart');

class Cart2Container extends Component {
  static getStores() {
    return [CartStore];
  }

  static calculateState(prevState) {
    return Object.assign(
        {},
        CartStore.getState(),
        {
          actions: {
            fetchCart: actions.fetchCart,
            increaseCount: actions.increaseCount,
            decreaseCount: actions.decreaseCount,
            updateCount: actions.updateCount,
            deleteItem: actions.deleteItem,
            showPanel: actions.switchPanel
          }
        });
  }

  componentDidMount() {
    //this.state.actions.fetchCart();
  }

  render() {
    var props = this.state;
    console.log(this.state)
    return <Cart {...props} />;
  }
}

export default Container.create(Cart2Container);



