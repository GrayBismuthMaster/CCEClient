import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Index from './api'
test('renders content',()=>{
    const api ={
        content: 'This is a test',
        important: true
    }
    const component = render(<Index/>)
})