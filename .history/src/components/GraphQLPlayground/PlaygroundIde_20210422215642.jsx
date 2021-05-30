import React from 'react'
import { Provider } from 'react-redux'
import { Playground, store } from 'graphql-playground-react'

const PlaygroundIde = () => {
    return (
            <Provider store={store}>
                <Playground endpoint='https://whispering-atoll-47132.herokuapp.com/' />
            </Provider>
    )
}

export default PlaygroundIde
