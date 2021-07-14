import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import RestVsGraphQL from './restVsGraphQL'
import {ApolloProvider} from '@apollo/client'
import client from '../'

test('renders content api',()=>{
    const api ={
        content: 'This is a test',
        important: true
    }
    const component = render(
        <React.StrictMode>
        <ApolloProvider client={client}>
                <RestVsGraphQL/>
          </ApolloProvider>
      </React.StrictMode>
        )
})