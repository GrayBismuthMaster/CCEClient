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
    <Query query={FRECUENCIA_USO_INTERNET_QUERY}>
    {({ loading, error, data }) => {
       if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
      if(loading)
    {
      return (
                <div className="divHijo">
                    <Spinner color="dark" className="spinnerReactstrap"/>
                </div>
      )
    }
    else{
      
    const datosBar = [
      {
          motivo: 'Prefiero ver lo que compro',  valor: ((data.obtenerMotivoNoCompra2018.PrefieroVerLoQueCompro* 100)/1279)/2
      },
      {
          motivo: 'Miedo a entregar información personal', valor: ((data.obtenerMotivoNoCompra2018.MiedoEntregarInfPer*100)/1279)/2 
      },
      {
          motivo: 'Miedo a ser estafado o engañado',  valor: ((data.obtenerMotivoNoCompra2018.MiedoSerEstafadoEnganiado*100)/1279)/2
      },
      {
          motivo: 'Desconfianza en la forma de pago',  valor: ((data.obtenerMotivoNoCompra2018.DesconfianzaFormaDePago*100)/1279)/2
      },
      ];
  
      const CustomLabel  = () =>{   
              return (
                <g>
                  <foreignObject x={15} y="40%" width={100} height={100}>
                    <div>%</div>
                  </foreignObject>
                </g>
              );
      };
      return (
        <ResponsiveContainer width="99%" height={"100%"}>
            <BarChart
              width={400}
              height={400}
              data={datosBar}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
              barSize={40}
            >
              <XAxis dataKey="motivo" fontSize="0" scale="point" padding={{ left: 40, right: 40 }} />
              <YAxis label={CustomLabel}/> 
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar padding={{left:30}} dataKey="valor" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
      )
    }
    }}
  </Query>
}

export default MotivoNoCompra2018
