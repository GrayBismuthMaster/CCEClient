import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './VerticalChart.css'

const MOTIVACIONCOMPRAR = gql`
query obtenerMotivacionCompra {
    obtenerMotivacionCompra @rest(path:"/api/motivacionCompra", type:"motivacionCompraTotal"){
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

const VerticalChartMotivacionComprar = () => (
  
    <Query query={MOTIVACIONCOMPRAR}>
    {({ loading, error, data }) => {
       if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
     
    }}
  </Query>
   
)

export default VerticalChartMotivacionComprar
