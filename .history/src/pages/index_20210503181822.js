import React,{useState}  from 'react'
import {Link} from 'react-router-dom'
import LogoCCE from '../assets/img/logoCCE.png'
import LogoUEES from '../assets/img/logoUEES.png'
const Home = () => {
   
            return (
            <>
            <div style={{
                    display: 'flex',
                    height:'80vh',
                    width: '100vw',
                    }}>
                        <text style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            marginLeft: '28%',
                            marginRight: '28%',
                            fontSize: '1.60vw',
                            marginTop: '3%',
                            fontWeight: 'bold'
                        }}>
                            Datos públicos de Ecommerce del Ecuador 2021
                        </text>
                        <div style={{
                            display: 'flex',
                            width:'50vw',
                            flexDirection:'column'
                        }}>
                            <a to="https://cece.ec/">
                                <div style={{
                                    display:'flex',
                                    maxWidth:'100%',
                                    maxHeight:'100%',
                                    width:'18.5vw',
                                    height:'9vh',
                                    marginTop: '18%',
                                    marginLeft:'25%',
                                    backgroundImage: `url(${LogoCCE})`,
                                    backgroundSize: '100% 100%',
                                }}>
                                </div>
                            
                            <a></a>
                            <text style={{
                                margin:'7.5% 5% 1% 5%',
                                fontSize:'1.3vw',
                                textAlign: 'justify'
                            }}>
                                La Cámara Ecuatoriana de Comercio Electrónico es una asociación sin
                                 fines de lucro creada en el 2014 con el objetivo de divulgar y promover 
                                 el uso de las nuevas tecnologías aplicadas al trabajo y los negocios, 
                                 las comunicaciones, el comercio y los negocios electrónicos.
                                La cual intenta fomentar que siga creciendo el ecosistema del comercio 
                                electrónico en el país y la región.
                                Link: https://cece.ec

                            </text>
                        </div>
                        <div style={{
                            display: 'flex',
                            width:'50vw',
                            flexDirection: 'column'
                        }}>
                             <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                maxHeight:'100%',
                                width:'42%',
                                height:'28%',
                                marginTop: '11%',
                                marginLeft:'25%',
                                backgroundImage: `url(${LogoUEES})`,
                                backgroundSize: '100% 100%'
                            }}>
                            </div>
                            <text style={{
                                margin:'1% 5% 1% 5%',
                                fontSize:'1.3vw',
                                textAlign:'justify'
                            }}>
                                La Universidad Espíritu Santo actualmente cuenta con alrededor de 5.000 estudiantes. 
                                Tiene diez facultades y 51 carreras (entre Pregrado y Postgrado). Su misión es servir a 
                                la sociedad mediante la generación de entornos de aprendizaje para la formación integral 
                                de personas que, a través de la docencia, investigación y vinculación, contribuyan al desarrollo
                                 del país.
                                La UEES se visualiza como un centro de docencia, investigación y orientación que aporta
                                 alternativas para el desarrollo del país.
                                LINK: https://www.uees.edu.ec/investigacion/
                            </text>
                        </div>
            </div>  
            <div style={{
                display:'flex',
                backgroundColor:'black',
                height:'9vh',
                justifyContent:'center',
                alignItems: 'center',
                color: 'white'
            }}>
                
                @2021 Datos públicos de Ecommerce en Ecuador
            </div>
            </>
            )
    }

export default Home
