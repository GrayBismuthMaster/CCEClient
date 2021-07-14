import React, { useState} from 'react'
import '../RestPlayground/PlaygroundRest.css'
import axios from 'axios'
const PlaygroundRest = () => {
    //Booleanos State
    const [frecuencia, setFrecuencia] = useState(false)
    const [motivoNoCompra, setMotivoNoCompra] = useState(false)
    const [compraNoCompra, setCompraNoCompra] = useState(false)
    
    const [frecuencia2018, setFrecuencia2018] = useState(false)
    const [motivoNoCompra2018, setMotivoNoCompra2018] = useState(false)
    const [frecuencia2020, setFrecuencia2020] = useState(false)
    const [motivoNoCompra2020, setMotivoNoCompra2020] = useState(false)
    
    //State Api
    const [datosFrecuencia, setDatosFrecuencia] = useState('')
    const [datosMotivoNoCompra, setDatosMotivoNoCompra] =useState('')
    const [datosCompraNoCompra, setDatosCompraNoCompra] = useState('')
    const [datosFrecuencia2018,setDatosFrecuencia2018] = useState('')
    const [datosMotivoNoCompra2018, setDatosMotivoNoCompra2018] = useState('') 
    const [datosFrecuencia2020, setDatosFrecuencia2020] = useState('')
    const [datosMotivoNoCompra2020, setDatosMotivoNoCompra2020] = useState('') 
    //Booleanos funciones
    const setEndpointFrecuenciaUsoInternet = ()=>{
        setFrecuencia(!frecuencia)
        setMotivoNoCompra(false)
        setFrecuencia2018(false)
        setMotivoNoCompra2018(false)
        setMotivoNoCompra2020(false);
        setCompraNoCompra(false)
        console.log('uno')
    }
    const setEndpointMotivoNoCompra = ()=>{
        setMotivoNoCompra(!motivoNoCompra)
        setMotivoNoCompra2020(false)
        setFrecuencia(false)
        setFrecuencia2018(false);
        setMotivoNoCompra2018(false)
        setCompraNoCompra(false)
        console.log('dos')
    }
    const setEndpointCompraNoCompra = ()=>{
        setCompraNoCompra(!compraNoCompra)
        setMotivoNoCompra(false)
        setMotivoNoCompra2020(false)
        setFrecuencia(false)
        setFrecuencia2018(false);
        setMotivoNoCompra2018(false)
        console.log('dos')
    }
    const setEndpointFrecuenciaUsoInternet2018 = ()=>{
        setFrecuencia2018(!frecuencia2018);
        setFrecuencia(false);
        setMotivoNoCompra2020(false);
        setMotivoNoCompra(false);
        setCompraNoCompra(false)
        console.log('f=2018')
    }
    const setEndpointMotivoNoCompra2018 = ()=>{
        setMotivoNoCompra2018(!motivoNoCompra2018);
        setMotivoNoCompra2020(false);
        setFrecuencia2018(false);
        setFrecuencia(false);
        setMotivoNoCompra(false);
        console.log('m=2018')
    }
    const setEndpointFrecuenciaUsoInternet2020 = ()=>{
        setFrecuencia2020(!frecuencia2020);
        setMotivoNoCompra2020(false)
        setMotivoNoCompra2018(false);
        setFrecuencia2018(false);
        setFrecuencia(false);
        setMotivoNoCompra(false);
        console.log('m=2018')
    }
    const setEndpointMotivoNoCompra2020= ()=>{
        setMotivoNoCompra2020(!motivoNoCompra2020)
        setMotivoNoCompra2018(false);
        setFrecuencia2018(false);
        setFrecuencia(false);
        setMotivoNoCompra(false);
        console.log('m=2018')
    }
    //DOM 2017
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
    const funcFrecuencia2018 = ()=>{
            console.log('ingresa')
            //useEffect(() => {    
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet2018/")
            .then(result=>{
                console.log(result)
                const nuevo = JSON.stringify(result.data)
                setDatosFrecuencia2018(nuevo)
            }
            ).catch(console.log() )
      //  }, [])
            return (
                <div className='datosFrecuencia'>{datosFrecuencia2018}</div>
            )
    }
    const funcMotivoNoCompra2018 = ()=>{
        console.log('ingresa')
        //useEffect(() => {    
        axios.get("https://salty-fjord-38974.herokuapp.com/api/motivoNoCompra2018/")
        .then(result=>{
            console.log(result)
            const nuevo = JSON.stringify(result.data)
            setDatosMotivoNoCompra2018(nuevo)
        }
        ).catch(console.log() )
  //  }, [])
        return (
            <div className='datosFrecuencia'>{datosMotivoNoCompra2018}</div>
        )
    }
    const funcFrecuencia2020 = ()=>{
        console.log('ingresa')
        //useEffect(() => {    
        axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet2020/")
        .then(result=>{
            console.log(result)
            const nuevo = JSON.stringify(result.data)
            setDatosFrecuencia2020(nuevo)
        }
        ).catch(console.log() )
  //  }, [])
        return (
            <div className='datosFrecuencia'>{datosFrecuencia2020}</div>
        )
    }
    const funcMotivoNoCompra2020 = ()=>{
        console.log('ingresa')
        //useEffect(() => {    
        axios.get("https://salty-fjord-38974.herokuapp.com/api/motivoNoCompra2020/")
        .then(result=>{
            console.log(result)
            const nuevo = JSON.stringify(result.data)
            setDatosMotivoNoCompra2020(nuevo)
        }
        ).catch(console.log() )
  //  }, [])
        return (
            <div className='datosFrecuencia'>{datosMotivoNoCompra2020}</div>
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
                                    <div className='dropdown-second-content'>
                                        <a onClick={setEndpointFrecuenciaUsoInternet} >/api/frecuenciaUsoInternet/</a>
                                        <a onClick={setEndpointMotivoNoCompra } >api/motivoNoCompra/</a>
                                    </div>
                            </div>
                            <div className='dropdown-second'>
                                <button className='second-drop-btn'>2018</button>     
                                    <div className='dropdown-second-content'>
                                        <a onClick={setEndpointFrecuenciaUsoInternet2018} >/api/frecuenciaUsoInternet2018/</a>
                                        <a onClick={setEndpointMotivoNoCompra2018 } >api/motivoNoCompra2018/</a>
                                    </div>
                            </div>
                            <div className='dropdown-second'>
                                <button className='second-drop-btn'>2019-2020</button>     
                                    <div className='dropdown-second-content'>
                                        <a onClick={setEndpointFrecuenciaUsoInternet2020} >/api/frecuenciaUsoInternet2020/</a>
                                        <a onClick={setEndpointMotivoNoCompra2020 } >api/motivoNoCompra2020/</a>
                                    </div>
                            </div>
                            {
                                /*
                                <button className='second-drop-btn'>2018</button>
                                <button className='second-drop-btn'>2019-2020</button>
                                
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
                    frecuencia && !motivoNoCompra && !frecuencia2018 && !motivoNoCompra2018 && !frecuencia2020 && !motivoNoCompra2020 ? funcFrecuencia() : null
                }  

                
                {
                    motivoNoCompra && !frecuencia && !frecuencia2018 && !motivoNoCompra2018 && !frecuencia2020 && !motivoNoCompra2020 ?  funcMotivoNoCompra() : null
                }  
                {
                    frecuencia2018 && !frecuencia && !motivoNoCompra && !motivoNoCompra2018 && !frecuencia2020 && !motivoNoCompra2020 ? funcFrecuencia2018() : null
                }
                {
                    motivoNoCompra2018 && !frecuencia && !motivoNoCompra && !frecuencia2018 && !frecuencia2020 && !motivoNoCompra2020 ? funcMotivoNoCompra2018() : null
                }
                {
                    frecuencia2020 && !motivoNoCompra2018 && !frecuencia && !motivoNoCompra && !frecuencia2018 && !motivoNoCompra2020 ? funcFrecuencia2020() : null
                }
                {
                    motivoNoCompra2020 && !frecuencia2020 && !motivoNoCompra2018 && !frecuencia && !motivoNoCompra && !frecuencia2018  ? funcMotivoNoCompra2020() : null
                }
            </div>
        </div>
        </>
    )
}

export default PlaygroundRest
