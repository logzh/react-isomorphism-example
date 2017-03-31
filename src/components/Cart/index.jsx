import React from 'react';
var List = require('./List');
import Empty from './Empty'
var noop = function() {};
var isNode = typeof window === 'undefined';
if (!isNode) {
  require('./index.css');
}

var Cart = React.createClass({
  getDefaultProps: function() {
    return {
      totalCount:0,
      carts: [],
      actions: {
        increaseCount: noop,
        decreaseCount: noop,
        updateCount: noop,
        deleteItem: noop,
        switchPanel: noop
      }
    }
  },
  render: function() {
    var props = this.props;

    return (
        <div className="cart-main">
          <div className="tit">
            <strong>我的购物车</strong>
            <span className="blue">{`共${props.totalCount}件商品`}</span>
          </div>
          {  props.carts.length > 0 ? <List items={props.carts} actions={props.actions}/> : <Empty />}

          <br/>

          <div >
            <p>上面的购物车操作都是异步Action，点击下面按钮触发一个同步Action</p>
            <button onClick={props.actions.switchPanel}>点击</button>
            isShow的值是：{props.isShow ? 'true' : 'false'}
          </div>
        </div>
    );
  }
});

module.exports = Cart;