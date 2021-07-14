import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './VerticalChart.css'

const MOTIVACIONCOMPRAR2020 = gql`
query obtenerMotivacionCompra2020 {
    obtenerMotivacionCompra2020 @rest(path:"/api/motivacionCompra2020", type:"motivacionCompraTotal"){
      garantiaDevolucionCambio
      garantiaConfidencialidadInformacion
      informacionComoComprar
      atencionClienteDuranteCompra
      asistenciaDuranteProceso
      bajoCostoEnvio
      puntualidadEntrega
      variedadOfertas
      tutoriales
      otras
    }
  }
`
const VerticalChartMotivacionComprar2020 = () => {
    
  <Query query={FRECUENCIA_USO_INTERNET_QUERY}>
  {({ loading, error, data }) => {
    if (error)
      return (
        <div>{`There was an error fetching the data ${error.message}`}</div>
      );
    console.log(data);
   
  }}
  </Query>
}

export default VerticalChartMotivacionComprar2020
