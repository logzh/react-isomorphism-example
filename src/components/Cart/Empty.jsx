import React from 'react'

let img = null

const isNode = typeof window === 'undefined'
if (!isNode) {
  img = require('./images/cart-null.png')
}

function Empty (props) {
  return (
    <div className="cat-null">
      <img src={img} />

      <div>
        <p><strong>您的购物车还是空的！</strong></p>
        <p><a href="#!">马上去购物</a></p>
      </div>
    </div>
  )
}

export default Empty
