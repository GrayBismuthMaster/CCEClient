import React from 'react'
import '../components/Spinner/spinnerStyle.css'
import PieFrecuencia from '../components/Charts/PieChartFrecuenciaCompra/PieFrecuencia2020'
import MotivoNoCompra from '../components/Charts/BarChartMotivoNoCompra/MotivoNoCompra2020'
import CompraNoCompra from '../components/Charts/PieChartCompraNoCompra/CompraNoCompra2020'
import MotivacionCompra from '../components/Charts/VerticalChart/VerticalChartMotivacionComprar2020'
//ASSETS BACKGROUNDS
import BackgroundFrecuenciaUsoInternet from "../assets/img/motivoNoCompra.jpg"
import BackgroundPortada from "../assets/img/portadaEcommerceDark.jpg"
//ICONS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const despliegueEstadisticas2020 = () => {
    return (
        <>
            {
                //Portada
            }
            <div style={{
                display:"flex",
                height:"90vh",
                backgroundImage: `url(${BackgroundPortada} )`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'100vh',
                        background: 'transparent',
                        paddingTop: "21vh",
                        fontWeight: "bold"
                        }}>
                        <div className="iconNav"><FontAwesomeIcon className='icon' icon={faAngleRight}/>    
                            <ul className="nav">
                                <li><a href="#">Glosario</a></li>
                                <li><a href="#compraNoCompra">Algunos datos del Ecuador</a></li>
                                <li><a href="#frecuenciaUsoInternet">Frecuencia de uso de Internet</a></li>
                                <li><a href="#motivoNoCompra">Razones para no comprar</a></li>
                                <li><a href="#motivoCompra">Motivaciones para comprar</a> </li>
                            </ul>
                        </div>
                        <h2 className='titulo'>  Antecedentes y situación del Ecommerce en el Ecuador</h2>
                
                    </div>
                    <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'90vh',
                        background: 'transparent'
                    }}>
                        
                    </div>
                </div>
            {
                //Section 1: Porcentaje de compra
            }
            <div id="compraNoCompra" className="mainContainer">
                <div className="firstContainer">
                    
                    <CompraNoCompra/>
                    <ul className="infoCompraNoCompra">
                                <li>* El 68% indica el porcentaje de personas que no realizan comercio electrónico 
                                    en un total de 1279 encuestas realizadas y el 32% las personas que si realizan 
                                    comercio electrónico
                                </li>
                            </ul>
                </div>
                <div className='mainContainerInfoChartMotivoNoCompra'>
                        <div className='containerInfoChartMotivoNoCompra'>
                            <h2 className='infoChartMotivoNoCompraTitulo'>Algunos datos del Ecuador</h2>
                            <ul className='infoChartMotivoNoCompraContenido'>
                                <li>Las empresas no escapan de este lento desarrollo de transacciones online 
                                    puesto que menos del 20% de las empresas realizan comercio electrónico
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>



            <div id="frecuenciaUsoInternet" className='mainContainerFrecuenciaUsoInternet'>
                
                <div className='containerFrecuenciaUsoInternetChart'>
                    
                    <PieFrecuencia/>
                    <ul className="infoChartFrecuenciaUsoInternet">
                                <li>* El 93.2% indica el porcentaje de personas que utilizan internet varias
                                    veces al día, el 4.5% el porcentaje de personas que lo utilizan una o datos
                                    veces al día, el 1.7% cada dos o tres días y el 0.6% representa una vez a 
                                    la semana
                                </li>
                            </ul>
                </div>
                    <div className='mainContainerFrecuenciaUsoInternetInfo'>
                        <div className='containerFrecuenciaUsoInternetInfo'>
                            <h2 className="frecuenciaUsoInternetInfoTitulo">Frecuencia de Uso de Internet</h2>
                            <ul className='frecuenciaUsoInternetInfoContenido'>
                                <li>Internet se ha vuelto 
                            imprescindible en las actividades 
                            diarias, por eso su consulta es 
                            constante. Estar “online” en 
                            aplicaciones para comunicarse y 
                            redes sociales, le da a los 
                            usuarios el don de la ubicuidad 
                            virtual con un solo click</li>
                                
                            </ul>
                        </div>
                    </div>
                
            </div>
            {
                //Section 2 
            }
            <div id="motivoNoCompra" style={{
                display:"flex",
                height:"100vh",
                background:"gray"
            }}>
                <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'100vh',
                        background: '#80b3c4',
                        paddingTop: "21vh"
                        }}>
                    
                    <MotivoNoCompra/>
                
                </div>
                
                <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'100vh',
                        background: 'white'
                    }}>
                        <div style={{
                            marginTop:"20vh",
                            marginLeft:"10vw",
                            marginRight: "10vw"
                        }}>
                            <h2 style={{
                                fontSize: "3vw",
                                fontWeight: "bold",
                                marginTop: "5vh"
                            }}>Razones para no comprar</h2>
                            <ul style={{
                                fontSize:"1.5vw",
                                listStyle:"none",
                                padding: "0px",
                                marginTop: "20px"
                            }}>
                                <li>
                                    Si bien tener cerca el producto que se va a comprar es la razón más común para no haber realizado compras por 
                                    internet, el miedo y la desconfianza son los mayores
                                    temores de los consumidores para esta relación comercial.
                                </li>
                            
                            </ul>
                        </div>
                    </div>
            </div>
            {
                //Section Motivaciones para comprar 
            }
            <div id="motivoCompra" style={{
                display:"flex",
                height:"100vh",
                background:"gray"
            }}>
                <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'100vh',
                        background: '#ff9c9c',
                        paddingTop: "10vh"
                        }}>
                    
                    <MotivacionCompra/>
                
                </div>
                
                <div style={{
                        display: 'flex',
                        width:'100vw',
                        height:'100vh',
                        background: '#ffe7e7'
                    }}>
                        <div style={{
                            marginTop:"20vh",
                            marginLeft:"10vw",
                            marginRight: "10vw"
                        }}>
                            <h2 style={{
                                fontSize: "3vw",
                                fontWeight: "bold",
                                marginTop: "5vh"
                            }}>Motivaciones para comprar</h2>
                            <ul style={{
                                fontSize:"1.5vw",
                                listStyle:"none",
                                padding: "0px",
                                marginTop: "20px"
                            }}>
                                <li>
                                Más información y garantías son las exigencias más comunes de los
                                usuarios para disminuir sus temores y finalmente realizar alguna
                                transacción comercial vía internet.

                                </li>
                            
                            </ul>
                        </div>
                    </div>
            </div>
        </>
        
    )
}

export default despliegueEstadisticas2020
