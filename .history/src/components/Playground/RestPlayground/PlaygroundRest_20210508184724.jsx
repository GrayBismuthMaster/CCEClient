import React, { useState } from 'react'
import styled from 'styled-components'
const DropdownRest = styled.div`
    position:relative;
    display: inline-block;
`


const PlaygroundRest = () => {
    
    const [dropdown, setDropdown] = useState(false)
    const Dropdown = ()=>{
        setDropdown(!dropdown)
    }
    return (
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh',
            alignItems:'center',
            justifyContent:'center'
        }}>
        <a onClick={Dropdown}>
            <DropdownRest > Dropdown</DropdownRest>
        
        </a>
        {
            dropdown ? <div>Sirve</div> : <div> Nel</div> 
        }         
        </div>
    )
}

export default PlaygroundRest