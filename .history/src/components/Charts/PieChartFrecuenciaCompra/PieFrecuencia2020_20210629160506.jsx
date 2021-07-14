import {Spinner} from 'reactstrap'
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


const FRECUENCIAUSOINTERNET2020 = gql `
query obtenerFrecuenciaUsoInternet2020 {
    obtenerFrecuenciaUsoInternet2020 @rest(path:"/api/frecuenciaUsoInternet2020", type:"frecuenciaTotal"){
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
    }
}
`

const PieFrecuencia2020 = () => {
 
}

export default PieFrecuencia2020
