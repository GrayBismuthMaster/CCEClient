import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'

const FRECUENCIAUSOINTERNET2020 = gql `
query obtenerFrecuenciaUsoInternet2020{
    obtenerFrecuenciaUsoInternet2020{
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
        tamanio
    }
}
`
const RestVsGraphQL2020 = () => {
    `

}

export default RestVsGraphQL2020
