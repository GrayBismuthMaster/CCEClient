import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Api from './apiRest'
test('renders content api',()=>{
    const api ={
        content: 'This is a test',
        important: true
    }
    const component = render(
        <React.StrictMode>
        <ApolloProvider client={client}>
                <DespliegueEstadisticas/>
          </ApolloProvider>
      </React.StrictMode>
        )
})