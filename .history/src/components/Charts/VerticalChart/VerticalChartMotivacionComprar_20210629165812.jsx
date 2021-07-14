import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import { ComposedChart,Line,Area,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './VerticalChart.css'

const MOTIVACIONCOMPRAR = gql`
query obtenerMotivacionCompra {
    obtenerMotivacionCompra @rest(path:"/api/motivacionCompra", type:"motivacionCompraTotal"){
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

const VerticalChartMotivacionComprar = () => (
  
    <Query query={MOTIVACIONCOMPRAR}>
    {({ loading, error, data }) => {
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
        const datosVertical = [
            { name: 'Garantía de devolución de cambio', valor: data.obtenerMotivacionCompra.garantiaDevolucionCambio },
            { name: 'Garantía de confidencialidad', valor: data.obtenerMotivacionCompra.garantiaConfidencialidadInformacion },
            { name: 'Más información de cómo comprar', valor: data.obtenerMotivacionCompra.informacionComoComprar },
            { name: 'Atención al cliente durante la compra', valor: data.obtenerMotivacionCompra.atencionClienteDuranteCompra },
            { name: 'Asistencia durante el proceso', valor: data.obtenerMotivacionCompra.asistenciaDuranteProceso },
            { name: 'Bajos costos de envío', valor: data.obtenerMotivacionCompra.bajoCostoEnvio },
            { name: 'Puntualidad de entrega', valor: data.obtenerMotivacionCompra.puntualidadEntrega },
            { name: 'Mayor variedad de ofertas', valor: data.obtenerMotivacionCompra.variedadOfertas },
            { name: 'Tutoriales o inducción para comprar', valor: data.obtenerMotivacionCompra.tutoriales },
            { name: 'Otras', valor: data.obtenerMotivacionCompra.otras }
          ];

      
    return (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                  layout="vertical"
                  width={"50%"}
                  height={"50%"}
                  data={datosVertical}
                  margin={{
                      top: 10,
                      right: 50,
                      bottom: 20,
                      left: 50,
                  }}
                  fontSize={'15.5'}
              >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" width={200}/>
              <Tooltip className="widthResponsive"/>
              <Legend />
              <Bar dataKey="valor" barSize={20} fill="#413ea0" />
              </ComposedChart>
          </ResponsiveContainer>
        
        )
    }
    }}
  </Query>
   
)

export default VerticalChartMotivacionComprar
