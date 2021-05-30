import React from 'react'
import styled from 'styled-components'
const DropdownRest = styled.div`
display:"flex";
background-color:#944141;
font-size:'14vw';
width:'100vw';
height:'100vh';
&:hover {
    background-color:'#';
}
`

const PlaygroundRest = () => {
    return (
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <DropdownRest> Dropdwon</DropdownRest>
            
        </div>
    )
}

export default PlaygroundRest
