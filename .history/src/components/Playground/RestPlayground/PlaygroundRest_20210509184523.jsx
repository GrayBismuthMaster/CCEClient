import React, { useState } from 'react'
import '../RestPlayground/PlaygroundRest.css'
const PlaygroundRest = () => {
    
    const [frecuencia, setFrecuencia] = useState(false)
    const [motivoNoCompra, setMotivoNoCompra] = useState(false)
   

    const SetendpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        console.log('uno')
    }
    const SetendpointMotivoNoCompra = ()=>{
        setMotivoNoCompra(!motivoNoCompra)
        console.log('dos')
    }
    return (
        <>
        <div style={{
            display:'flex',
            width:'100%',
            height:'89.3vh',
            flexDirection:'column'
        }}>
            <div style={{
                display:'flex',
                width:'100%',
                backgroundColor:'red',
                height:'50%',
                alignItems:'center',
                justifyContent:'center',
                }}>
                <div className='dropdown' style={{marginTop:'-10%'}}> 
                    <button className='dropbtn'>Endpoints Api Rest</button>
                    <div className="dropdown-content">
                            <a onClick={endpointFrecuenciaUsoInternet} >Uno</a>
                            <a onClick={endpointMotivoNoCompra } >dos</a>
                    </div>                    
                </div>
                
            </div>
            <div style={{
                display:'flex',
                width:'100%',
                backgroundColor:'green',
                height:'50%',
                alignItems:'center',
                justifyContent:'center',
                }}>
                {
                    motivoNoCompra && !frecuencia ? <div>Uno</div> : null
                }  
                
                {
                    frecuencia && !motivoNoCompra ? <div>Dos</div> : null
                }  
            </div>
        </div>
        </>
    )
}

export default PlaygroundRest