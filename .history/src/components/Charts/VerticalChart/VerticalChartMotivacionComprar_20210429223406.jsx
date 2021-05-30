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
              <ResponsiveContainer width={'99%'} height={450}>
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
}

export default VerticalChartMotivacionComprar
