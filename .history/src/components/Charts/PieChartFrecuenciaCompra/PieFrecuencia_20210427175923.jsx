
import {useQuery,gql} from '@apollo/client'
import {Spinner} from 'reactstrap'
import client from '../../../config/apollo.js'
import {useState} from 'react'
//Graficas en tiempo real
import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import ".././PieChart.css"
const PieFrecuencia = () => {
  const FRECUENCIAUSOINTERNET = gql `
query obtenerFrecuenciaUsoInternet{
    obtenerFrecuenciaUsoInternet{
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
    }
}
`
const {data, loading,error} = useQuery(FRECUENCIAUSOINTERNET);
const someQueryResult = client.readQuery({ query: FRECUENCIAUSOINTERNET });
if(someQueryResult){
  console.log(someQueryResult)
  console.log("si hay datos")
}

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
        { name: 'Todos los días', value: data.obtenerFrecuenciaUsoInternet.TodosLosDias },
        { name: 'Cada dos días', value: data.obtenerFrecuenciaUsoInternet.CadaDosDias },
        { name: 'Cada tres días', value: data.obtenerFrecuenciaUsoInternet.CadaTresDias },
        { name: 'Cada cuatro días', value:data.obtenerFrecuenciaUsoInternet.CadaCuatroDias},
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
              <ResponsiveContainer width={'99%'} height={450}>
                 <PieChart width={400} height={400}>
                    <Pie
                        data={datosGrafica}
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
export default PieFrecuencia
