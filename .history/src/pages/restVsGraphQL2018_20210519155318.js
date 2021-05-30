import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'
const RestVsGraphQL = () => {
    const [endRest, setEndRest] = useState(0);
    
    const FRECUENCIAUSOINTERNET2018 = gql `
    query obtenerFrecuenciaUsoInternet2018{
        obtenerFrecuenciaUsoInternet2018{
            TodosLosDias
            CadaDosDias
            CadaTresDias
            CadaCuatroDias
            CadaCincoDias
            tamanio
        }
    }
    `
    
    let startQL = new Date().getTime();
    let endQL = 0;
    let resQL = 0;
    const {data, loading, error}= useQuery(FRECUENCIAUSOINTERNET2018);

        if(data!==null)
        {
            const data2 = data
            console.log(data2)
            console.log('Inicio '+startQL+"ms")
            endQL = new Date().getTime()+1;
               
        }
        
        resQL =endQL-startQL; 
        console.log("fin "+endQL+"ms");
        console.log("Tiempo de ejecución: "+resQL) 
    //Api rest
    let startRest = new Date().getTime();
        useEffect(() => {
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet2018/")
            .then(result=>{
                console.log(result)
                setEndRest(new Date().getTime());
            }
            ).catch(console.log() )    
        }, [])
        
        let resRest = startRest-endRest;

        const datosTamanio = ()=>{
            if(data){
                return <text>{data.obtenerFrecuenciaUsoInternet2018.tamanio+" bytes"}</text>
            }
            else{
                return <text>Loading</text>
            }
        }
    return (
         <>
        <div className='mainContainerRVG'>
                       <div className="tituloRest">
                           Análisis de tiempo de  respuesta Api Graphql vs Api Rest
                       </div>
            
            <div style={{   display:"flex",
                            width: '50vw', 
                            height: '100vh',
                            position:'left',
                            justifyContent:'center',
                            alignItems: 'center',
                            fontSize: '1.5vw',
                            marginLeft: '3%',
                        }}>
                            
                   <BarChartGraphQL tiempoRest={resRest} tiempoGraphQL ={resQL}/>
                <ul style={{
                    marginTop: '1%',
                    color:'#8884d8'
                }}>
                    <text style={{
                        fontWeight:'bold'
                    }}>Análisis de tiempo de respuesta API GraphQL con la petición al endpoint "Frecuencia
                     de uso de internet"</text>
                    <li style={{marginTop:"4vh"}}>
                            Tiempo de inicio: {`${startQL} ms`}
                    </li>
                    <li>
                            Tiempo de finalización: {`${endQL} ms`} 
                    </li>
                    <li>
                            Tiempo transcurrido total: {`${resQL} ms`} 
                    </li>
                    <li>
                            Número de datos obtenidos: 1300
                    </li>
                    <li>
                        Tamaño de los datos : {//`${//data.obtenerFrecuenciaUsoInternet2018.tamanio} bytes`
                                                datosTamanio()
                                                }
                    </li>
                </ul>
            </div>
            <div style={{   display:"flex",
                            width: '40vw',
                            height: '100vh',
                            position:'right',
                            justifyContent:'center',
                            alignItems: 'center',
                            fontSize: '1.5vw',
                            marginLeft: '3%',
                            textAlign:'justify'
                        }}>
                      <ul style={{
                          marginTop:'-5%',
                          color:'#82ca9d'
                      }}>
                      <text style={{
                        fontWeight:'bold'
                    }}>Análisis de tiempo de respuesta API Rest con la petición al endpoint "Frecuencia
                     de uso de internet"</text>
                    <li style={{marginTop:"4vh"}}>
                        Tiempo de inicio: {`${startRest} ms`}
                    </li>
                    <li>
                        Tiempo de finalización: {`${endRest} ms`} 
                    </li>
                    <li>
                        Tiempo transcurrido total: {`${resRest} ms`} 
                    </li>
                    <li>
                        Número de datos obtenidos: 1300
                    </li>
                    <li>
                    Tamaño de los datos : {//`${data.obtenerFrecuenciaUsoInternet2018.tamanio} bytes`
                                            datosTamanio()
                                        }
                    </li>
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default RestVsGraphQL