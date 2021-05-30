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


const PlaygroundRest = () => {
    const generar =  () =>{
        return(
            <> 
            
             <div style={{
                 backgroundColor:'red',
                 width:'10px',
                 height:'10px'
             }}>
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
               <a onClick={generar()}>
                   <DropdownRest > Dropdwon</DropdownRest>        
               </a>
                 
            
        </div>
    )
}

export default PlaygroundRest
