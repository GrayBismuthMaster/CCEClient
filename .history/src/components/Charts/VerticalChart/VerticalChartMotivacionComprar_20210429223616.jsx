import React from 'react'
import {useQuery,gql} from '@apollo/client'
import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
    
    
const VerticalChartMotivacionComprar = () => {
    const MOTIVACIONCOMPRAR = gql`
    query obtenerMotivacionCompra{
        obtenerMotivacionCompra{
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

    const {data, loading,error} = useQuery(MOTIVACIONCOMPRAR);
    
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
              { name: 'Compran por internet', value: data.obtenerCompraNoCompra.compra },
              { name: 'No compran por internet', value: data.obtenerCompraNoCompra.noCompra }
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
              <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
          </>
          )
      }
}

export default VerticalChartMotivacionComprar