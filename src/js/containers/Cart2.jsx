import React, {Component} from 'react';
import {Container} from 'flux/utils';

import Cart from '../../component/Cart';

var actions = require('../actions/cart');
var Dispatcher = require('../dispatcher');

import {ReduceStore} from 'flux/utils';

var types = require('../constants/cart');

class CartStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
      carts: [{
        "goodsId": "42",
        "sizeId": "44",
        "userId": "90",
        "count": 1,
        "id": "320",
        "name": "商品123",
        "price": 111,
        "thumb": "http://cdn.tig.qq.com/images/dev/doge.jpg",
        "sizeName": "规格一"
      }, {
        "goodsId": "42",
        "sizeId": "42",
        "userId": "90",
        "count": 1,
        "id": "319",
        "name": "商品234",
        "price": 99,
        "thumb": "http://cdn.tig.qq.com/images/dev/doge.jpg",
        "sizeName": "规格二"
      }], isShow: false
    };
  }

  reduce(state, action) {
    console.log(action.type)
    console.log(action.data)
    switch (action.type) {

      case types.GET_INIT_DATA:
        if (action.data.carts !== undefined) {
          state.carts = action.data.carts;
        }
        if (action.data.isShow !== undefined) {
          state.isShow = action.data.isShow;
        }
        return state;
        break;
      case types.GET_SERVER_CARTS:
      case types.ADD_SERVER_CART:
        state.carts = action.data;
        console.log(state)
        return state;
        break;

      case types.CART_INC_COUNT:
        state.carts = state.carts.map(item =>
            item.sizeId == action.meta.sizeId ?
                Object.assign({}, item, {count: item.count + 1}) :
                item
        );
        return state;
        break;

      case types.CART_DES_COUNT:
        state.carts = state.carts.map(item =>
            (item.sizeId == action.meta.sizeId && item.count > 1) ?
                Object.assign({}, item, {count: item.count - 1}) :
                item
        );
        return state;
        break;

      case types.CART_UPDATE_COUNT:
        state.carts = state.carts.map(item =>
            (item.sizeId == action.meta.sizeId && action.meta.count > 0) ?
                Object.assign({}, item, {count: action.meta.count}) :
                item
        );
        return state;
        break;

      case types.CART_DEL_ITEM:
        state.carts = state.carts.filter(item => item.sizeId !== action.meta.sizeId);
        return state;
        break;

      case types.SWITCH_PANEL:
        state.isShow = !state.isShow;
        return state;
        break;
      default:
        return state;
        break;
    }

  }
}

var Store = new CartStore();

class Cart2Container extends Component {
  static getStores() {
    return [Store];
  }

  static calculateState(prevState) {
    return Object.assign(
        {},
        Store.getState(),
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



