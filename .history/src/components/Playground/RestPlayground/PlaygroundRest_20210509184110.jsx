import React, { useState } from 'react'
import '../RestPlayground/PlaygroundRest.css'
const PlaygroundRest = () => {
    
    const [frecuencia, setFrecuencia] = useState(false)
    const [motivoNoCompra, setMotivoNoCompra] = useState(false)
   

    const endpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        console.log('uno')
    }
    const endpointMotivoNoCompra = ()=>{
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
                    motivoNoCompra && !frecuencia ? <div>Com</div> : null
                }  
                 {
                    frecuencia  ? <div>Frecuencia</div> : null
                }  
            </div>
        </div>
        </>
    )
}

export default PlaygroundRest
