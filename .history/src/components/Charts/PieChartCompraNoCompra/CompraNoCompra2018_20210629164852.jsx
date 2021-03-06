import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart.css"

const COMPRANOCOMPRA2018 = gql`
query obtenerCompraNoCompra2018 {
    obtenerCompraNoCompra2018 @rest(path:"/api/compraNoCompra2018", type:"compraNoCompraTotal"){
        compra
        noCompra
    }
}
`

const CompraNoCompra2018 = () => {
    const {data, loading,error} = useQuery(COMPRANOCOMPRA2018);
    const someQueryResult = client.readQuery({ query: COMPRANOCOMPRA2018 });
    if(someQueryResult){
      console.log(someQueryResult)
      console.log("si hay datos")
    }
    
  
}

export default CompraNoCompra2018
