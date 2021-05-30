//Graficas en tiempo real
import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart/PieChart.css"
const PieFrecuencia = (props) => {
    //Graficas
    const datosGrafica = [
        { name: 'Todos los días', value: props.frecuencia.TodosLosDias },
        { name: 'Cada dos días', value: props.frecuencia.CadaDosDias },
        { name: 'Cada tres días', value: props.frecuencia.CadaTresDias },
        { name: 'Cada cuatro días', value: props.frecuencia.CadaCuatroDias},
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

export default PieFrecuencia
