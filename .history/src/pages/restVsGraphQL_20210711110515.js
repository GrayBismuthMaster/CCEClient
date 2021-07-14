import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'
import gql from 'graphql-tag';

const RestVsGraphQL = () => {
    const [endRest, setEndRest] = useState(0)
   //Parte del query en el wrapper
    const FRECUENCIAUSOINTERNET = gql `
    query obtenerFrecuenciaUsoInternet {
        obtenerFrecuenciaUsoInternet @rest(path:"/api/frecuenciaUsoInternet", type:"frecuenciaTotal"){
            TodosLosDias
            CadaDosDias
            CadaTresDias
            CadaCuatroDias
            CadaCincoDias
        }
    }
    `
     <Query query={FRECUENCIAUSOINTERNET}>{
        ({loading, error, data}) =>{
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
             
    )
}

export default RestVsGraphQL
