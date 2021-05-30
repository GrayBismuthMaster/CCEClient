import React from 'react'
import {useQuery,gql} from '@apollo/client'
import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {Spinner} from 'reactstrap'
    
const VerticalChartMotivacionComprar2020 = () => {
    const MOTIVACIONCOMPRAR2018 = gql`
    query obtenerMotivacionCompra2020{
            obtenerMotivacionCompra2020{
              tenerInformacionGuiaTutorialesCompra 
                  tenerGarantiasEntregaPago 
                  tenerAsistenciaAtencion
                  facilidadPago 
                  formasPago 
                  tutorialesInduccionParaRealizarCompra 
                  variedadOferta 
                  mejorPrecio 
                  otras 
            }
      }
    `

    const {data, loading,error} = useQuery(MOTIVACIONCOMPRAR2020);
    
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
              { name: 'Garantía de devolución de cambio', valor: data.obtenerMotivacionCompra2020.garantiaDevolucionCambio },
              { name: 'Garantía de confidencialidad', valor: data.obtenerMotivacionCompra2020.garantiaConfidencialidadInformacion },
              { name: 'Más información de cómo comprar', valor: data.obtenerMotivacionCompra2020.informacionComoComprar },
              { name: 'Atención al cliente durante la compra', valor: data.obtenerMotivacionCompra2020.atencionClienteDuranteCompra },
              { name: 'Asistencia durante el proceso', valor: data.obtenerMotivacionCompra2020.asistenciaDuranteProceso },
              { name: 'Bajos costos de envío', valor: data.obtenerMotivacionCompra2020.bajoCostoEnvio },
              { name: 'Puntualidad de entrega', valor: data.obtenerMotivacionCompra2020.puntualidadEntrega },
              { name: 'Mayor variedad de ofertas', valor: data.obtenerMotivacionCompra2020.variedadOfertas },
              { name: 'Tutoriales o inducción para comprar', valor: data.obtenerMotivacionCompra2020.tutoriales },
              { name: 'Otras', valor: data.obtenerMotivacionCompra2018.otras }
            ];

         
      return (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={datosVertical}
                    margin={{
                        top: 10,
                        right: 50,
                        bottom: 20,
                        left: 50,
                    }}
                    fontSize={15.5}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" width={200}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="valor" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </ResponsiveContainer>
          
          )
      }
}

export default VerticalChartMotivacionComprar2020