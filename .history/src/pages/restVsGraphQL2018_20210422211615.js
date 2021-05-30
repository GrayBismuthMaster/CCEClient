import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
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
        }
    }
    `
    
    let startQL = new Date().getTime();
    let endQL = 0;
    let resQL = 0;
    const {data, loading, error}= useQuery(FRECUENCIAUSOINTERNET);

        if(data!==null)
        {
            console.log('Inicio '+startQL+"ms")
            endQL = new Date().getTime();
               
        }
        
        resQL =endQL-startQL; 
        console.log("fin "+endQL+"ms");
        console.log("Tiempo de ejecución: "+resQL) 
    //Api rest
    let startRest = new Date().getTime();
        useEffect(() => {
            axios.get("https://salty-fjord-38974.herokuapp.com/api/frecuenciaUsoInternet/")
            .then(result=>{
                console.log(result)
                setEndRest(new Date().getTime());
            }
            ).catch(console.log() )    
        }, [])
        
        let resRest = startRest-endRest;
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
                            fontSize: '1.5vw'
                        }}>
                            
                   <BarChartGraphQL tiempoRest={resRest} tiempoGraphQL ={resQL}/>
                <ul>
                    Análisis de tiempo de respuesta API GraphQL con la petición de frecuencia de uso de internet

                    <li style={{marginTop:"4vh"}}>
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
