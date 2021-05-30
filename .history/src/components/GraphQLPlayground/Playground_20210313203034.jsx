import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

ReactDOM.render(
  <Provider store={store}>
    <Playground endpoint='https://api.graph.cool/simple/v1/swapi' />
  </Provider>,
  document.body,
)
export 