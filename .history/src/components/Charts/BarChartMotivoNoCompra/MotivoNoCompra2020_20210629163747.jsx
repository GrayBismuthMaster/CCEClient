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


const MOTIVONOCOMPRA2020 = gql `
query obtenerMotivoNoCompra2020 {
    obtenerMotivoNoCompra2020 @rest(path:"/api/motivoNoCompra2020", type:"motivoTotal"){
      PrefieroVerLoQueCompro
      MiedoEntregarInfPer
      MiedoSerEstafadoEnganiado
      DesconfianzaFormaDePago
    }
}
`
const MotivoNoCompra2020 = () => {
  <Query query={FRECUENCIA_USO_INTERNET_QUERY}>
  {({ loading, error, data }) => {
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

export default MotivoNoCompra2020
