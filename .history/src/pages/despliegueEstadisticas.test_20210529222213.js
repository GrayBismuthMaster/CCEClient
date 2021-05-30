import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Api from './despliegueEstadisticas'
test('renders content api',()=>{
    const api ={
        content: 'This is a test',
        important: true
    }
    const component = render(<Api/>)
})