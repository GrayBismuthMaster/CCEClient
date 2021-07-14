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


const FRECUENCIAUSOINTERNET2018 = gql `
query obtenerFrecuenciaUsoInternet2018 {
    obtenerFrecuenciaUsoInternet2018 @rest(path:"/api/frecuenciaUsoInternet2018", type:"frecuenciaTotal"){
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
    }
}
`

const PieFrecuencia2018 = () => {
  <Query query={FRECUENCIAUSOINTERNET}>
  {({loading, error, data}) =>{
    if (error)
    return (
      <div>{`There was an error fetching the data ${error.message}`}</div>
    );
    </Query>

}

export default PieFrecuencia2018
