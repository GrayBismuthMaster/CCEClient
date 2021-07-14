import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart.css"

const COMPRANOCOMPRA = gql`
query obtenerCompraNoCompra {
    obtenerCompraNoCompra @rest(path:"/api/compraNoCompra", type:"compraNoCompraTotal"){
        compra
        noCompra
    }
}
`

const CompraNoCompra = () => {
    
    <Query query={FRECUENCIA_USO_INTERNET_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner color="primary" />;
      if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
      return (
        <span>
          {data.obtenerFrecuenciaUsoInternet.CadaCincoDias}
        </span>
      );
    }}
  </Query>
    
}

export default CompraNoCompra
