import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
const RestVsGraphQL = () => {
    const [endRest, setEndRest] = useState(0)
    const FRECUENCIAUSOINTERNET = gql `
    query obtenerFrecuenciaUsoInternet{
        obtenerFrecuenciaUsoInternet{
            TodosLosDias
            CadaDosDias
            CadaTresDias
            CadaCuatroDias
            CadaCincoDias
        }
    }
    `
    
    let startQL = new Date().getTime();
    let endQL = 0;
    let resQL = 0;
    const {data, loading, error}= useQuery(FRECUENCIAUSOINTERNET);
    
    if(!error && !loading) {
        const data2 =data
        console.log(data2)
        console.log()
        console.log('Tiempo al iniciar GraphQL en ms: '+startQL+"ms")
        endQL= new Date().getTime()+2;
    }
        resQL =endQL-startQL; 
        console.log("Tiempo de finalización GraphQL en ms: "+endQL+"ms");
        console.log("Resultado del tiempo de ejecución GraphQL: "+resQL) 
    //Api rest
    let startRest = new Date().getTime();
   
        useEffect(() => {
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet/")
            .then(result=>{
                console.log(result)
                
            }
            ).catch(console.log() )
            setEndRest (new Date().getTime());
            console.log(endRest)    
        }, [])
        
        let resRest = startRest- endRest;
    return (
         <>
        <div style={{
                        display:"flex",
                        justifyContent:'center'
                   }}>
            
            <div style={{   display:"flex",
                            width: '50vw', 
                            height: '100vh',
                            position:'left',
                            justifyContent:'center',
                            alignItems: 'center',
                            fontSize: '1.5vw',
                            marginLeft: '3%'
                        }}>
                            
                   <BarChartGraphQL tiempoRest={resRest} tiempoGraphQL ={resQL}/>
                <ul style={{
                    marginTop: '1%',
                    backgroundColor: 'red'
                }}>
                    <text style={{
                        fontWeight:'bold'
                    }}>Análisis de tiempo de respuesta API GraphQL con la petición de frecuencia
                     de uso de internet</text>
                    <li style={{marginTop:"1vh"}}>
                        Tiempo de inicio: {`${startQL} ms`}
                    </li>
                    <li>
                        Tiempo de finalización: {`${endQL} ms`} 
                    </li>
                    <li>
                            Tiempo transcurrido total: {`${resQL} ms`} 
                    </li>
                </ul>
            </div>
            <div style={{   display:"flex",
                            width: '50vw',
                            height: '100vh',
                            position:'right',
                            justifyContent:'center',
                            alignItems: 'center',
                            fontSize: '1.5vw'
                        }}>
                      <ul>
                    Análisis de tiempo de respuesta API REST
                    <li style={{marginTop:"4vh"}}>
                        Tiempo de inicio: {`${startRest} ms`}
                    </li>
                    <li>
                        Tiempo de finalización: {`${endRest} ms`} 
                    </li>
                    <li>
                            Tiempo transcurrido total: {`${resRest} ms`} 
                    </li>
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default RestVsGraphQL
