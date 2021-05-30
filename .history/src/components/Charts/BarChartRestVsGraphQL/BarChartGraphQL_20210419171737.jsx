import React,{useState, PureComponent} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    

     //   setData([{description:"Retardo en ms",valor:datos}])
    //console.log(data)
    class BarChartGraphQL extends PureComponent {
      constructor(props){
        console.log("TIempas :"+props.tiempo)
        super(props);

        this.state= {
            
        }
      }
      
      render() {
        const tempo = this.props.tiempo;
        
        
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={this.props.tiempo}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      }
    }
    
    export default BarChartGraphQL