import React from 'react'
import styled from 'styled-components'
const DropdownRest = styled.div`
display:"flex";
background-color:#ff0000;
font-size:'14vw';
width:'100vw';
height:'100vh';
`

const PlaygroundRest = () => {
    return (
        <div style={{
            display:'flex',
            width:'10vw',
            height:'50vh',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <DropdownRest> Dropdwon</DropdownRest>
            
        </div>
    )
}

export default PlaygroundRest
