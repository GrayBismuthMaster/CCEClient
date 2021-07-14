//Cliente
import { ApolloProvider} from '@apollo/client'
import React,{useState,useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import axios from 'axios'
import BarChartGraphQL from '../components/Charts/BarChartRestVsGraphQL/BarChartGraphQL'
import '../styles/restVsGraphQL.css'

const FRECUENCIAUSOINTERNET = gql `
query obtenerFrecuenciaUsoInternet{
    obtenerFrecuenciaUsoInternet{
        TodosLosDias
        CadaDosDias
        CadaTresDias
        CadaCuatroDias
        CadaCincoDias
        tamanio
    }
}
`

const RestVsGraphQL = () => {
    return(
        <ApolloProvider>
        
        </ApolloProvider>
    
    )

   
}

export default RestVsGraphQL
