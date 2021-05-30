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
              { name: 'Informacion y guía para la compra', valor: data.obtenerMotivacionCompra2020.tenerInformacionGuiaTutorialesCompra  },
              { name: 'Garantías de entrega y pago', valor: data.obtenerMotivacionCompra2020.garantiaConfidencialidadInformacion },
              { name: 'Asistencia en la compra', valor: data.obtenerMotivacionCompra2020.informacionComoComprar },
              { name: 'Facilidad de pago', valor: data.obtenerMotivacionCompra2020.atencionClienteDuranteCompra },
              { name: 'Formas de pago accesibles', valor: data.obtenerMotivacionCompra2020.asistenciaDuranteProceso },
              { name: 'Tutoriales e inducción para realizar la compra', valor: data.obtenerMotivacionCompra2020.bajoCostoEnvio },
              { name: 'Mayor variedad de ofertas', valor: data.obtenerMotivacionCompra2020.variedadOfertas },
              { name: 'Mejor precio', valor: data.obtenerMotivacionCompra2020.tutoriales },
              { name: 'Otras', valor: data.obtenerMotivacionCompra2020.otras }
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
