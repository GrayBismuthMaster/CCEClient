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
              { name: 'Garantía de devolución de cambio', value: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
              { name: 'Garantía de confidencialidad de información', value: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion },
              { name: 'Más información de cómo comprar', value: data.obtenerMotivacionCompra.informacionComoComprar },
              { name: 'Atención al cliente durante la compra', value: data.obtenerMotivacionCompra.atencionClienteDuranteCompra },
              { name: 'Asistencia durante el proceso', value: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
              { name: 'Bajos costos de envío', value: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion },
              { name: 'Puntualidad de entrega', value: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
              { name: 'Variedad de ofertas', value: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion },
              { name: 'Asistencia durante el proceso', value: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
              { name: 'Bajos costos de envío', value: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion }
            ];

         
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
