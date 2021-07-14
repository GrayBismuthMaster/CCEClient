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
  
const {data, loading,error} = useQuery(FRECUENCIAUSOINTERNET2018);
const someQueryResult = client.readQuery({ query: FRECUENCIAUSOINTERNET2018 });
if(someQueryResult){
  console.log(someQueryResult)
  console.log("si hay datos")
}


}

export default PieFrecuencia2018
