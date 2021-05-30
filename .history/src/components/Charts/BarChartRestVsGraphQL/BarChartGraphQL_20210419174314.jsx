import React,{useState} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartGraphQL = ({tiempo}) => {
   // const [data, setData] = useState([{description:"", valor:0}])
    console.log("tiempoasp "+tiempo)
    const data = [{  
    name: 'Page A',
    uv: tiempo,
    amt: 2400,
    }]
     //   setData([{description:"Retardo en ms",valor:datos}])
    //console.log(data)
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name2" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )
}

export default BarChartGraphQL
