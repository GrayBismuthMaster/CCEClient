import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './VerticalChart.css'

const MOTIVACIONCOMPRAR2020 = gql`
query obtenerMotivacionCompra2018 {
    obtenerMotivacionCompra2018 @rest(path:"/api/motivacionCompra2018", type:"motivacionCompraTotal"){
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
const VerticalChartMotivacionComprar2020 = () => {
  
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
              { name: 'Garantías de entrega y pago', valor: data.obtenerMotivacionCompra2020.tenerGarantiasEntregaPago },
              { name: 'Asistencia en la compra', valor: data.obtenerMotivacionCompra2020.tenerAsistenciaAtencion },
              { name: 'Facilidad de pago', valor: data.obtenerMotivacionCompra2020.facilidadPago  },
              { name: 'Formas de pago accesibles', valor: data.obtenerMotivacionCompra2020.formasPago },
              { name: 'Tutoriales e inducción para realizar la compra', valor: data.obtenerMotivacionCompra2020.tutorialesInduccionParaRealizarCompra },
              { name: 'Mayor variedad de ofertas', valor: data.obtenerMotivacionCompra2020.variedadOferta },
              { name: 'Mejor precio', valor: data.obtenerMotivacionCompra2020.mejorPrecio },
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
