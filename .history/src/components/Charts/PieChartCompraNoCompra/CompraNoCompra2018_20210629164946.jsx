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

const CompraNoCompra2018 = () => (
  <Query query={COMPRANOCOMPRA2018}>
    {({ loading, error, data }) => {
      if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
      
    }}
  </Query>
)

export default CompraNoCompra2018
