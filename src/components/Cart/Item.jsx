import React from 'react'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.updateCount = this.updateCount.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  decreaseCount () {
    const {id, sizeId, count} = this.props.item
    if (count > 1) {
      this.props.decreaseCount({id, sizeId, count})
    }
  }

  increaseCount () {
    const {id, sizeId, count} = this.props.item
    this.props.increaseCount({id, sizeId, count})
  }

  deleteItem () {
    this.props.deleteItem(this.props.item)
  }

  updateCount (e) {
    const {id, sizeId} = this.props.item
    const count = parseInt(e.target.value, 10)

    if (count > 0) {
      this.props.updateCount({id, sizeId, count})
    }
  }

  render () {
    let props = this.props
    return (
      <li className="clearfix">
        <div className="goods clearfix">
          <a href="#!"><img src={props.item.thumb} alt="" /></a>
          <div className="goods-info">
            <p><strong><a href="#!">{props.item.name}</a></strong><i /></p>
            <p><span>{props.item.sizeName}</span></p>
          </div>
        </div>
        <div className="price">{'￥' + props.item.price}</div>
        <div className="num">
          <div className="num-input">
            <span className="minus" name="down" onClick={this.decreaseCount}>-</span>
            <input type="text" name="num" onChange={this.updateCount} value={props.item.count} className="input" />
            <span className="plus" name="up" onClick={this.increaseCount}>+</span>
          </div>
        </div>
        <div className="sum">
          <p>{'￥' + (props.item.price * 100 * props.item.count) / 100}</p>
        </div>
        <div className="operate">
          <i className="del-ico" onClick={this.deleteItem}><span>删除</span></i>
        </div>
      </li>
    )
  }
}

export default Item
