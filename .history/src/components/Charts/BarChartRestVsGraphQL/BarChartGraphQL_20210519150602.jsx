import React,{useState} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartGraphQL = ({tiempoRest, tiempoGraphQL}) => {
   // const [data, setData] = useState([{description:"", valor:0}])
    console.log("tiempoasp "+tiempoRest)
    const data = [{  
    name: 'Page A',
    Rest: tiempoRest,
    GraphQL: tiempoGraphQL,
    amt: 2400,
    }]
     //   setData([{description:"Retardo en ms",valor:datos}])
    //console.log(data)
    return (
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={480}
          height={50}
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
          <Bar dataKey="GraphQL" fill="#8884d8" />
          <Bar dataKey="Rest" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    )
}

export default BarChartGraphQL
