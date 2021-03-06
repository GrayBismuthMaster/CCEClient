import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'
import gql from 'graphql-tag';

//Rest Api Petition
const [endRest, setEndRest] = useState(0)
//Parte del query en el wrapper
 const FRECUENCIAUSOINTERNET = gql `
 query obtenerFrecuenciaUsoInternet {
     obtenerFrecuenciaUsoInternet @rest(path:"/api/frecuenciaUsoInternet", type:"frecuenciaTotal"){
         TodosLosDias
         CadaDosDias
         CadaTresDias
         CadaCuatroDias
         CadaCincoDias
     }
 }
 `
const RestVsGraphQL = () => {
 
<Query query={FRECUENCIAUSOINTERNET}>{
    ({loading, error, data}) =>{
        if (error)
        return (
        <div>{`There was an error fetching the data ${error.message}`}</div>
        );
        if(loading){
        return (
            
                    <div className="divHijo">
                        <Spinner color="dark" className="spinnerReactstrap"/>
                    </div>
        )
        }
        
        else{
            return(
                
            )
        } 

    }
  }</Query>
    


    let startQL = new Date().getTime();
    let endQL = 0;
    let resQL = 0;
    const {data, loading, error}= useQuery(FRECUENCIAUSOINTERNET);
    
    if(!error && !loading) {
        const data2 =data
        console.log(data2)
        console.log()
        console.log('Tiempo al iniciar GraphQL en ms: '+startQL+"ms")
        endQL= new Date().getTime()+1;
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
        const datosTamanio = ()=>{
            if(data){
                return <text>{data.obtenerFrecuenciaUsoInternet.tamanio+" bytes"}</text>
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
            
            <div className="containerChartContenido">
                            
                   <BarChartGraphQL tiempoRest={resRest} tiempoGraphQL ={resQL}/>
               
                <ul className='contenidoGraphQL'>
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
                            Tamaño de los datos : {datosTamanio()}
                    </li>
                </ul>
            </div>
            <div className='containerRest'>
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
                         Tamaño de los datos : {datosTamanio()}
                    </li>
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default RestVsGraphQL
