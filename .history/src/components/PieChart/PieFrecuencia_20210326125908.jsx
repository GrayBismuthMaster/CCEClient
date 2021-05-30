
import {useQuery,gql} from '@apollo/client'
import {Spinner} from 'reactstrap'

import client from '../../config/apollo.js'
//Graficas en tiempo real
import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart/PieChart.css"
const PieFrecuencia = () => {
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
const {data, loading,error} = useQuery(FRECUENCIAUSOINTERNET);

const someQueryResult = client.readQuery({ query: FRECUENCIAUSOINTERNET });
if(someQueryResult){
  console.log(someQueryResult)
  console.log("si hay datos")
}
if(loading){
  return (
    
            <div className="divHijo">
                 <Spinner color="dark" className="spinnerReactstrap"/>
            </div>
 
  )
} 
else{
   
}
export default PieFrecuencia
