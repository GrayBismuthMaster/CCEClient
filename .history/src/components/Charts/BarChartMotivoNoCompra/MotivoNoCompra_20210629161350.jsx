import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import {
  Spinner
} from "reactstrap";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell, ResponsiveContainer
} from 'recharts';


const MOTIVONOCOMPRA = gql `
query obtenerMotivoNoCompra {
    obtenerMotivoNoCompra @rest(path:"/api/motivoNoCompra", type:"motivoTotal"){
      PrefieroVerLoQueCompro
      MiedoEntregarInfPer
      MiedoSerEstafadoEnganiado
      DesconfianzaFormaDePago
    }
}
`
const MotivoNoCompra = () => {
<Query query={FRECUENCIA_USO_INTERNET_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner color="primary" />;
      if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
    
    }}
  </Query>
}

export default MotivoNoCompra
