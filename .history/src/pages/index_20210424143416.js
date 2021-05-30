import React,{useState}  from 'react'
import LogoCCE from '../assets/img/logoCCE.png'
const Home = () => {
   
            return (
            <>
            <div style={{
                    display: 'flex',
                    backgroundColor: 'red',
                    height:'80vh',
                    width: '100vw',
                    }}>
                        <text style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            marginLeft: '30%',
                            marginRight: '30%',
                            fontSize: '1.40vw',
                            marginTop: '3%'
                        }}>
                            Datos públicos de Ecommerce del Ecuador 2021
                        </text>
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'green',
                            width:'50vw',
                            flexDirection:'column'
                        }}>
                            <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                maxHeight:'100%',
                                width:'18.5vw',
                                height:'9vh',
                                marginTop: '16%',
                                marginLeft:'25%',
                                backgroundImage: `url(${LogoCCE})`,
                                backgroundSize: '100% 100%'
                            }}>
                            </div>
                            <text style={{
                                margin:'5% 10% 10% 5%',
                                
                            }}>
                                La Cámara Ecuatoriana de Comercio Electrónico es una asociación sin
                                 fines de lucro creada en el 2014 con el objetivo de divulgar y promover 
                                 el uso de las nuevas tecnologías aplicadas al trabajo y los negocios, 
                                 las comunicaciones, el comercio y los negocios electrónicos.
La cual intenta fomentar que siga creciendo el ecosistema del comercio electrónico en el país y la región.
Link: https://cece.ec

                            </text>
                        </div>
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'blue',
                            width:'50vw'
                        }}>
                            3
                        </div>
            </div>  
            <div style={{
                display:'flex',
                backgroundColor:'pink',
                height:'10vh'
            }}>
                0
            </div>
            </>
            )
    }

export default Home
