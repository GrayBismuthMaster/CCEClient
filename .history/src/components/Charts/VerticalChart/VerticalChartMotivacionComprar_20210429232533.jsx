import React from 'react'
import {useQuery,gql} from '@apollo/client'
import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {Spinner} from 'reactstrap'
    
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
          const datosVertical = [
              { name: 'Garantía de devolución de cambio', value: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
              { name: 'Garantía de confidencialidad de información', value: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion },
              { name: 'Más información de cómo comprar', value: data.obtenerMotivacionCompra.informacionComoComprar },
              { name: 'Atención al cliente durante la compra', value: data.obtenerMotivacionCompra.atencionClienteDuranteCompra },
              { name: 'Asistencia durante el proceso', value: data.obtenerMotivacionCompra.asistenciaDuranteProceso },
              { name: 'Bajos costos de envío', value: data.obtenerMotivacionCompra.bajoCostoEnvio },
              { name: 'Puntualidad de entrega', value: data.obtenerMotivacionCompra.puntualidadEntrega },
              { name: 'Mayor variedad de ofertas', value: data.obtenerMotivacionCompra.variedadOfertas },
              { name: 'Tutoriales o inducción para comprar', value: data.obtenerMotivacionCompra.tutoriales },
              { name: 'Otras', value: data.obtenerMotivacionCompra.otras }
            ];

         
      return (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={datosVertical}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 80,
                    }}
                    fontSize={{10px}}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
          
          )
      }
}

export default VerticalChartMotivacionComprar
