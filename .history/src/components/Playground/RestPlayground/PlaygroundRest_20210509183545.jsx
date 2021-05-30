import React, { useState } from 'react'
import '../RestPlayground/PlaygroundRest.css'
const PlaygroundRest = () => {
    
    const [dropdown, setDropdown] = useState(false)
    const [frecuencia, setFrecuencia] = useState(false)

    const endpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        console.log('uno')
    }
    const Dropdown = ()=>{
        setDropdown(!dropdown)
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
                            <a onClick={endpointFrecuenciaUsoInternet } >dos</a>
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
                    dropdown ? <div>Com</div> : null
                }  
            </div>
        </div>
        </>
    )
}

export default PlaygroundRest