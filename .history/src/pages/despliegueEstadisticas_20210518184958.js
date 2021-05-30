import React from 'react'
import '../components/Spinner/spinnerStyle.css'
import PieFrecuencia from '../components/Charts/PieChartFrecuenciaCompra/PieFrecuencia'
import MotivoNoCompra from '../components/Charts/BarChartMotivoNoCompra/MotivoNoCompra'
import CompraNoCompra from '../components/Charts/PieChartCompraNoCompra/CompraNoCompra'
import MotivacionCompra from '../components/Charts/VerticalChart/VerticalChartMotivacionComprar'
import '../styles/despliegueEstadisticas.css'
//ASSETS BACKGROUNDS
import BackgroundFrecuenciaUsoInternet from "../assets/img/motivoNoCompra.jpg"
import BackgroundPortada from "../assets/img/portadaEcommerceDark.jpg"
//ICONS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
const despliegueEstadisticas = () => {
    return (
        <>
         {
             //Portada
         }
         <div id="inicio"style={{
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
                    <h2 className='titulo' >
                          Antecedentes y situación del Ecommerce en el Ecuador</h2>
            
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
         <div className="mainContainer" id="compraNoCompra" style={{
             display:"flex",
             height:"100vh",
             background:"gray"
         }}>
              <div className="firstContainer" >
                
                <CompraNoCompra/>
                <ul className="infoCompraNoCompra" >
                            <li>* El 86% indica el porcentaje de personas que no realizan comercio electrónico 
                                en un total de 1279 encuestas realizadas y el 14% las personas que si realizan 
                                comercio electrónico
                            </li>
                </ul>
             </div>
             <div className='mainContainerInfoChartMotivoNoCompra' >
                    <div className='containerInfoChartMotivoNoCompra' >
                        <h2 className='infoChartMotivoNoCompraTitulo' >Algunos datos del Ecuador</h2>
                        <ul className='infoChartMotivoNoCompraContenido'>
                            <li>Las empresas no escapan de este lento desarrollo de transacciones online 
                                puesto que menos del 20% de las empresas realizan comercio electrónico
                            </li>
                        </ul>
                    </div>
                </div>
         </div>



        <div id="frecuenciaUsoInternet" className='mainContainerFrecuenciaUsoInternet' >
            
            <div className='containerFrecuenciaUsoInternetChart' >
                
                <PieFrecuencia/>
                <ul className="infoChartFrecuenciaUsoInternet" >
                            <li>* El 91% indica el porcentaje de personas que utilizan internet varias
                                 veces al día, el 7% el porcentaje de personas que lo utilizan una o datos
                                 veces al día, el 1.3% cada dos o tres días y el 0.3% representa una vez a 
                                 la semana
                            </li>
                        </ul>
             </div>
                <div className='mainContainerFrecuenciaUsoInternetInfo'>
                    <div className='containerFrecuenciaUsoInternetInfo' >
                        <h2 className="frecuenciaUsoInternetInfoTitulo" >
                            Frecuencia de Uso de Internet</h2>
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
             //Section 3
         }
         <div id="motivoNoCompra" className='mainContainerMotivoNoCompra' >
              <div className="containerMotivoNoCompra" >
                
                <MotivoNoCompra/>
             
             </div>
             
             <div className='mainContainerMotivoNoCompraInfo' >
                    <div className="containerMotivoNoCompraInfo" >
                        <h2 className='motivoNoCompraTitulo' >Razones para no comprar</h2>
                        <ul className='motivoNoCompraContenido'>
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
             //Section 4: Motivaciones para comprar 
         }
         <div id="motivoCompra" className="mainContainerMotivoCompra">
              <div className="containerMotivoCompra">
                
                <MotivacionCompra/>
             
             </div>
             
             <div className="mainContainerMotivoCompraInfo">
                    <div className='containerMotivoCompraInfo' >
                        <h2 className='motivoCompraInfoTitulo'>Motivaciones para comprar</h2>
                        <ul className='motivoCompraInfoContenido'>
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
export default despliegueEstadisticas
