import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Index from './index'
test('renders content',()=>{
    const index ={
        content: 'This is a test',
        important: true
    }
    const component = render(<Index/>)
    console.log(component)
})