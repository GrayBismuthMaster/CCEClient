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

const CompraNoCompra2020 = () => (
  <Query query={COMPRANOCOMPRA2020}>
  {({ loading, error, data }) => {
    if (error)
      return (
        <div>{`There was an error fetching the data ${error.message}`}</div>
      );
    console.log(data);
   
  }}
</Query>
)
export default CompraNoCompra2020
