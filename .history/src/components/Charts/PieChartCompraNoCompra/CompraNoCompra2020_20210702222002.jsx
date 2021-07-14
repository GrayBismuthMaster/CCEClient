import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart.css"

const COMPRANOCOMPRA2020 = gql`
query obtenerCompraNoCompra2020 {
    obtenerCompraNoCompra2020 @rest(path:"/api/compraNoCompra2020", type:"compraNoCompraTotal"){
        compra
        noCompra
    }
}
`

const CompraNoCompra2020 = () => (
  <Query query={COMPRANOCOMPRA2020}>{
    ({ loading, error, data }) => {
    if (error)
      return (
        <div>{`There was an error fetching the data ${error.message}`}</div>
      );
    console.log(data);
    if(loading){
      
      return (
        
                <div className="divHijo">
                     <Spinner color="dark" className="spinnerReactstrap"/>
                </div>
     
      )
    } 
    else{
        //Graficas
        const datosGrafica = [
            { name: 'Compran por internet', value: data.obtenerCompraNoCompra2020.compra },
            { name: 'No compran por internet', value: data.obtenerCompraNoCompra2020.noCompra }
          ];
        //Obtener tamanio contenedor
        const COLORS = ['#94b8b8', '#00C49F', '#FFBB28', '#FF8042'];
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({
            cx, cy, midAngle, innerRadius, outerRadius, percent,
          }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          };
    
    return (
        <>
            <ResponsiveContainer width={'99%'} height={'100%'}>
                 <PieChart width={400} height={400}>
                    <Pie
                        data={datosGrafica}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={"100%"}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {
                        datosGrafica.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
        </>
        )
    }
  }}
</Query>
)
export default CompraNoCompra2020
