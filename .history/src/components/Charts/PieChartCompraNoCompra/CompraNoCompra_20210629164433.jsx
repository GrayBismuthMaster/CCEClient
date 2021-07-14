import {Spinner} from 'reactstrap'
import React from "react";
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import {
    PieChart, Pie,Cell,ResponsiveContainer
  } from 'recharts';
import "../PieChart.css"

const COMPRANOCOMPRA = gql`
query obtenerCompraNoCompra {
    obtenerCompraNoCompra @rest(path:"/api/compraNoCompra", type:"compraNoCompraTotal"){
        compra
        noCompra
    }
}
`

const CompraNoCompra = () => {
    
    
}

export default CompraNoCompra
