import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

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
const MotivoNoCompra2020 = () => (
  <Query query={MOTIVONOCOMPRA2020}>
  {({ loading, error, data }) => {
    if (error)
      return (
        <div>{`There was an error fetching the data ${error.message}`}</div>
      );
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
            motivo: 'Prefiero ver lo que compro',  valor: ((data.obtenerMotivoNoCompra2020.PrefieroVerLoQueCompro* 100)/1279)/2
        },
        {
            motivo: 'Miedo a entregar información personal', valor: ((data.obtenerMotivoNoCompra2020.MiedoEntregarInfPer*100)/1279)/2 
        },
        {
            motivo: 'Miedo a ser estafado o engañado',  valor: ((data.obtenerMotivoNoCompra2020.MiedoSerEstafadoEnganiado*100)/1279)/2
        },
        {
            motivo: 'Desconfianza en la forma de pago',  valor: ((data.obtenerMotivoNoCompra2020.DesconfianzaFormaDePago*100)/1279)/2
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
)

export default MotivoNoCompra2020
