import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import DespliegueEstadisticas from './despliegueEstadisticas'
test('renders content api',()=>{
    const DespliegueEstadisticas ={
        content: 'This is a test',
        important: true
    }
    const component = render(<Api/>)
})