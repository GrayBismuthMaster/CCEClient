import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'
const RestVsGraphQL = () => {
    const [endRest, setEndRest] = useState(0);
    
    const FRECUENCIAUSOINTERNET2018 = gql `
    query obtenerFrecuenciaUsoInternet2018{
        obtenerFrecuenciaUsoInternet2018{
            TodosLosDias
            CadaDosDias
            CadaTresDias
            CadaCuatroDias
            CadaCincoDias
            tamanio
        }
    }
    `
    
}

export default RestVsGraphQL
