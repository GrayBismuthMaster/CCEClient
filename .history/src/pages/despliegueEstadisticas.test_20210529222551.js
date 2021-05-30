import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import DespliegueEstadisticas from './despliegueEstadisticas'
import {ApolloProvider} from '@apollo/client'
import client from '../config/apollo'

test('renders content api',()=>{
    const despliegueEstadisticas ={
        content: 'This is a test',
        important: true
    }
    const component = render(
        <React.StrictMode>
        <ApolloProvider client={client}>
            <DespliegueEstadisticas/>
          </ApolloProvider>
      </React.StrictMode>)
})