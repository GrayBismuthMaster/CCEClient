import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './VerticalChart.css'

const MOTIVACIONCOMPRAR2018 = gql`
query obtenerMotivacionCompra2018 {
    obtenerMotivacionCompra2018 @rest(path:"/api/motivacionCompra2018", type:"motivacionCompraTotal"){
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

const VerticalChartMotivacionComprar2018 = () => {
  <Query query={MOTIVACIONCOMPRAR2018}>
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

export default VerticalChartMotivacionComprar2018
