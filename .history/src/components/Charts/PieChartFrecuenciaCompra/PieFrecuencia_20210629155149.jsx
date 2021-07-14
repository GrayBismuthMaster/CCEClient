import {Spinner} from 'reactstrap'
import client from '../../../config/apollo.js'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import {
  Spinner
} from "reactstrap";
//Graficas en tiempo real
import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import ".././PieChart.css"


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

const PieFrecuencia = () => {
<Query query={FRECUENCIA_USO_INTERNET_QUERY}>
  {({loading, error, data}) =>{
    if(loading){
      return (
        
                <div className="divHijo">
                     <Spinner color="dark" className="spinnerReactstrap"/>
                </div>
      )
    } 

  }
  
  }



  </Query>
}
export default PieFrecuencia
