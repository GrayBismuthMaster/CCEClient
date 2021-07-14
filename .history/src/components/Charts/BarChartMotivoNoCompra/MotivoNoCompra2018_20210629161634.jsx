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


const MOTIVONOCOMPRA2018 = gql `
query obtenerMotivoNoCompra2018 {
    obtenerMotivoNoCompra @rest(path:"/api/motivoNoCompra2018", type:"motivoTotal"){
      PrefieroVerLoQueCompro
      MiedoEntregarInfPer
      MiedoSerEstafadoEnganiado
      DesconfianzaFormaDePago
    }
}
`
const MotivoNoCompra2018 = () => {
   
    const {data, loading,error} = useQuery(MOTIVONOCOMPRA2018);
    
}

export default MotivoNoCompra2018
