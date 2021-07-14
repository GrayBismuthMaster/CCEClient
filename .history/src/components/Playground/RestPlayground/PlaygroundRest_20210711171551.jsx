import React, { useState} from 'react'
import '../RestPlayground/PlaygroundRest.css'
import axios from 'axios'
const PlaygroundRest = () => {
    //Booleanos State
    const [frecuencia, setFrecuencia] = useState(false)
    const [motivoNoCompra, setMotivoNoCompra] = useState(false)
   //State Api
   const [datosFrecuencia, setDatosFrecuencia] = useState('')
   const [datosMotivoNoCompra, setDatosMotivoNoCompra] =useState([])
   
    //Booleanos funciones
    const setEndpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        setMotivoNoCompra(false)
        console.log('uno')
    }
    const setEndpointMotivoNoCompra = ()=>{
        setMotivoNoCompra(!motivoNoCompra)
        setFrecuencia(false)
        console.log('dos')
    }
    //DOM
    const funcFrecuencia= ()=>{
        console.log('ingresa')
        //useEffect(() => {    
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet/")
            .then(result=>{
                console.log(result)
                const nuevo = JSON.stringify(result.data)
                setDatosFrecuencia(nuevo)
            }
            ).catch(console.log() )
      //  }, [])
            return (
                <div className='datosFrecuencia'>{datosFrecuencia}</div>
            )
    }
    const funcMotivoNoCompra= ()=>{
        console.log('ingresa')
        //useEffect(() => {    
            axios.get("https://salty-fjord-38974.herokuapp.com/api/motivoNoCompra/")
            .then(result=>{
                console.log(result)
                const nuevo = JSON.stringify(result.data)
                setDatosMotivoNoCompra(nuevo)
            }
            ).catch(console.log() )
      //  }, [])
            return (
                <div className='datosFrecuencia' >{datosMotivoNoCompra}</div>
            )
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
                height:'50%',
                alignItems:'center',
                justifyContent:'center',
                }}>
                <div className='dropdown' style={{marginTop:'-10%'}}> 
                    <button className='dropbtn'>Endpoints Api Rest</button>
                    
                    <div className="dropdown-content">
                            
                            <div className='dropdown-second'>
                                <button className='second-drop-btn'>2017</button>     
                                <button className='second-drop-btn'>2018</button>
                                <button className='second-drop-btn'>2019-2020</button>
                                    <div className='dropdown-second-content'>
                                        <a onClick={setEndpointFrecuenciaUsoInternet} >/api/frecuenciaUsoInternet/</a>
                                        <a onClick={setEndpointMotivoNoCompra } >api/motivoNoCompra/</a>
                                    </div>
                               </div>
                            {
                                /*
                                */
                            }
                    </div>  
                                              
                </div>
                <div style={{
                    marginLeft:'15vw'
                }}>Endpoint: https://salty-fjord-38974.herokuapp.com/</div>
            </div>
            <div style={{
                display:'flex',
                width:'100%',
                height:'50%',
                alignItems:'center',
                justifyContent:'center',
                }}>
                {
                    frecuencia && !motivoNoCompra ? funcFrecuencia() : null
                }  

                
                {
                    motivoNoCompra && !frecuencia ? funcMotivoNoCompra() : null
                }  
            </div>
        </div>
        </>
    )
}

export default PlaygroundRest
