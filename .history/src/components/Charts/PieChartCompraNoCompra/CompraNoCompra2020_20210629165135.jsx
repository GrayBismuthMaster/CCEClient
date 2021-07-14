import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart.css"

const COMPRANOCOMPRA2020 = gql`
query obtenerCompraNoCompra2020 {
    obtenerCompraNoCompra2020 @rest(path:"/api/compraNoCompra2020", type:"compraNoCompraTotal"){
        compra
        noCompra
    }
}
`

const CompraNoCompra2020 = () => {
 
    const {data, loading,error} = useQuery(COMPRANOCOMPRA2020);
    const someQueryResult = client.readQuery({ query: COMPRANOCOMPRA2020 });
    if(someQueryResult){
      console.log(someQueryResult)
      console.log("si hay datos")
    }
    
    
}

export default CompraNoCompra2020
