import React from 'react'
import styled from 'styled-components'
const DropdownRest = styled.div`
display:"flex";
background-color:#944141;
font-size:'14vw';
width:'100vw';
height:'100vh';
&:hover {
    background-color:#6bbbd3;
}
&:active{
    color:red;
}
`
const link = styled.a`

`

const PlaygroundRest = () => {
    const generar =  () =>{
        return(
            <>
                <div>
                    Generado
                </div>
            </>
        )
    }
    return (
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <DropdownRest onClick={generar}> Dropdwon</DropdownRest>
            
        </div>
    )
}

export default PlaygroundRest
