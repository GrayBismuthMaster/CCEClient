import React, { useState, useEffect } from 'react'
import '../RestPlayground/PlaygroundRest.css'
import axios from 'axios'
const PlaygroundRest = () => {
    //Booleanos State
    const [frecuencia, setFrecuencia] = useState(false)
    const [motivoNoCompra, setMotivoNoCompra] = useState(false)
   //State Api
   const [datosFrecuencia, setDatosFrecuencia] = useState([])
   const [datosMotivoNoCompra, setDatosMotivoNoCompra] =useState([])
   
    //Booleanos funciones
    const setEndpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        console.log('uno')
    }
    const setEndpointMotivoNoCompra = ()=>{
        setMotivoNoCompra(!motivoNoCompra)
        console.log('dos')
    }
    //DOM
    const endpointFrecuenciaUsoInternet = ()=>{
        
 
        useEffect(() => {
                
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet/")
            .then(result=>{
                console.log(result)
            }
            ).catch(console.log() )
        }, [])
     
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
                            <a onClick={setEndpointFrecuenciaUsoInternet} >Uno</a>
                            <a onClick={setEndpointMotivoNoCompra } >dos</a>
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
                    motivoNoCompra && !frecuencia ?{endpointFrecuenciaUsoInternet} : null
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
