import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import {
  Spinner
} from "reactstrap";
//Graficas en tiempo real
import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import ".././PieChart.css"


const FRECUENCIAUSOINTERNET2020 = gql `
query obtenerFrecuenciaUsoInternet2020 {
    obtenerFrecuenciaUsoInternet2020 @rest(path:"/api/frecuenciaUsoInternet2020", type:"frecuenciaTotal"){
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
    }
}
`

const PieFrecuencia2020 = () => {
  <Query query={FRECUENCIAUSOINTERNET2020}>
  {({loading, error, data}) =>{
    if (error)
    return (
      <div>{`There was an error fetching the data ${error.message}`}</div>
    );
    
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
            { name: 'Todos los días', value: data.obtenerFrecuenciaUsoInternet2020.TodosLosDias },
            { name: 'Cada dos días', value: data.obtenerFrecuenciaUsoInternet2020.CadaDosDias },
            { name: 'Cada tres días', value: data.obtenerFrecuenciaUsoInternet2020.CadaTresDias },
            { name: 'Cada cuatro días', value:data.obtenerFrecuenciaUsoInternet2018.CadaCuatroDias},
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
              <text style={{
                  fontSize:'70%',  
                }}
               x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
              </text>
            );
          };
    
        return (
                  <ResponsiveContainer width={'99%'} height={"100%"}>
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
        )
    }
                              }
  }
  </Query>

}

export default PieFrecuencia2020
