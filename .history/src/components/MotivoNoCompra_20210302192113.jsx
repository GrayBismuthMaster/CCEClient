
import React, { useState} from 'react';
import {useQuery,gql} from '@apollo/client'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell, ResponsiveContainer
} from 'recharts';
const MOTIVONOCOMPRA = gql `
query obtenerMotivoNoCompra{
    obtenerMotivoNoCompra{
      PrefieroVerLoQueCompro
      MiedoEntregarInfPer
      MiedoSerEstafadoEnganiado
      DesconfianzaFormaDePago
    }
  }
`

const MotivoNoCompra = () => {

    
    const {data, loading,error} = useQuery(MOTIVONOCOMPRA);
    const datosBar = [
    {
        motivo: 'Prefiero ver lo que compro',  valor: ((data.obtenerMotivoNoCompra.PrefieroVerLoQueCompro* 100)/1279)/2
    },
    {
        motivo: 'Miedo a entregar información personal', valor: ((data.obtenerMotivoNoCompra.MiedoEntregarInfPer*100)/1279)/2 
    },
    {
        motivo: 'Miedo a ser estafado o engañado',  valor: ((data.obtenerMotivoNoCompra.MiedoSerEstafadoEnganiado*100)/1279)/2
    },
    {
        motivo: 'Desconfianza en la forma de pago',  valor: ((data.obtenerMotivoNoCompra.DesconfianzaFormaDePago*100)/1279)/2
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
      <ResponsiveContainer width="99%" height={450}>
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

export default MotivoNoCompra
