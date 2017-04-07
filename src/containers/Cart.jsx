import React, {PropTypes, Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from '../components/App'
import Cart from '../components/Cart'

import * as Actions from '../actions/cart'

class Content extends Component {
  componentDidMount () {
    this.props.actions.fetchUser()
    this.props.actions.fetchCart()
  }
  render () {
    let totalCount = 0
    let props = this.props

    props.carts.map(function (item) {
      // totalPrice += (item.price * 100 * item.count) / 100;
      totalCount += parseInt(item.count, 10)
    })

    return (
      <App user={props.user} loading={props.loading}>

        <Cart {...props} totalCount={totalCount} />

      </App>
    )
  }
}

Content.propTypes = {
  actions: PropTypes.shape({
    fetchCart: PropTypes.func,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
    updateCount: PropTypes.func,
    deleteItem: PropTypes.func,
    showPanel: PropTypes.func
  }).isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content)
