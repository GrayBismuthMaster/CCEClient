import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'
import gql from 'graphql-tag';

const RestVsGraphQL = () => {
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
              //Graficas
              const datosGrafica = [
                  { name: 'Todos los días', value: data.obtenerFrecuenciaUsoInternet.TodosLosDias },
                  { name: 'Cada dos días', value: data.obtenerFrecuenciaUsoInternet.CadaDosDias },
                  { name: 'Cada tres días', value: data.obtenerFrecuenciaUsoInternet.CadaTresDias },
                  { name: 'Cada cuatro días', value:data.obtenerFrecuenciaUsoInternet.CadaCuatroDias},
                ];
              //Obtener tamanio contenedor
              const COLORS = ['#94b8b8', '#00C49F', '#FFBB28', '#FF8042'];
              const RADIAN = Math.PI / 180;
              const renderCustomizedLabel = ({
                  cx, cy, midAngle, innerRadius, outerRadius, percent,
                }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                
                  return (
                    <text style={{
                        fontSize:'70%',  
                      }}
                    x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                      {`${(percent * 100).toFixed(1)}%`}
                    </text>
                  );
                };
        
              return (
                        <ResponsiveContainer width={'100%'} height={"100%"}>
                          <PieChart width={'50%'} height={"50%"}>
                              <Pie
                                  data={datosGrafica}
                                  cx={"50%"}
                                  cy={"50%"}
                                  labelLine={false}
                                  label={renderCustomizedLabel}
                                  outerRadius={"100%"}
                                  fill="#8884d8"
                                  dataKey="value"
                              >
                                  {
                                  datosGrafica.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                  }
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
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
