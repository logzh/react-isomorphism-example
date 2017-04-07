import React from 'react'
import { Provider } from 'react-redux'
import Container from '../containers/Cart'
export * from '../stores/cart'

export function Component (props) {
  return (
    <Provider {...props}>
      <Container />
    </Provider>
  )
}
