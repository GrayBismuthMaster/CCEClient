import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

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
  return(

  )
}

)
export default PieFrecuencia
