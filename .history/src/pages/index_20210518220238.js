import React  from 'react'
import LogoCCE from '../assets/img/logoCCE.png'
import LogoUEES from '../assets/img/logoUEES.png'
import '../styles/indexStyle.css'
const Home = () => {
   
            return (
            <>
            <div className='mainContainerCss'>
                        <p className="titulo" >
                            Datos públicos de Ecommerce del Ecuador 2021
                        </p>
                        <div className="containerCCE" >
                            <a target='_blank' href="https://cece.ec/" rel="noreferrer">
                                <img src={LogoCCE} className="logoCCE" >
                                </img>
                            </a>
                            <p className="CCEContenido" >
                                La Cámara Ecuatoriana de Comercio Electrónico es una asociación sin
                                 fines de lucro creada en el 2014 con el objetivo de divulgar y promover 
                                 el uso de las nuevas tecnologías aplicadas al trabajo y los negocios, 
                                 las comunicaciones, el comercio y los negocios electrónicos.
                                La cual intenta fomentar que siga creciendo el ecosistema del comercio 
                                electrónico en el país y la región.
                                Link: https://cece.ec

                            </p>
                        </div>
                        <div className="containerUESS">
                             <a target="_blank" href="https://www.uees.edu.ec/investigacion/" rel="noreferrer">
                                <img src={LogoUEES} style={{
                                    
                                }}></img>
                                </a>
                            
                            <text style={{
                                margin:'3.5% 5% 1% 5%',
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
