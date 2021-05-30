import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import ApiRest from './apiRest'
test('renders content api',()=>{
    const apiRest ={
        content: 'This is a test',
        important: true
    }
    const component = render(<ApiRest/>)
})