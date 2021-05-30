import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Spinner/spinnerStyle.css'
import PieFrecuencia from '../components/Charts/PieChartFrecuenciaCompra/PieFrecuencia'
import MotivoNoCompra from '../components/Charts/BarChartMotivoNoCompra/MotivoNoCompra'
import CompraNoCompra from '../components/Charts/PieChartCompraNoCompra/CompraNoCompra'
//ASSETS BACKGROUNDS
import BackgroundFrecuenciaUsoInternet from "../assets/img/motivoNoCompra.jpg"
import BackgroundPortada from "../assets/img/portadaEcommerceDark.jpg"
const despliegueEstadisticas = () => {
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
                        
                    <h2 style={{
                            fontSize: "3vw",
                            fontWeight: "bold",
                            marginTop: "20px",
                            textShadow: "4px 4px black",
                            color:"white",
                            marginRight: "10vw",
                            marginLeft:"10vw"
                    
                        }}>  Antecedentes y situación del Ecommerce en el Ecuador</h2>
            
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
         <div style={{
             display:"flex",
             height:"100vh",
             background:"gray"
         }}>
              <div style={{
                    display: 'flex',
                    width:'100vw',
                    height:'100vh',
                    background: '#5DC1B9',
                    paddingTop: "15vh",
                    flexDirection:"column"
                    }}>
                
                <CompraNoCompra/>
                <ul style={{
                            fontSize:"1.3vw",
                            listStyle:"none",
                            padding: "0px",
                            marginTop: "5vh",
                            marginLeft: "5vw",
                            marginRight: "5vw"
                        }}>
                            <li>* El 86% indica el porcentaje de personas que no realizan comercio electrónico 
                                en un total de 1279 encuestas realizadas y el 14% las personas que si realizan 
                                comercio electrónico
                            </li>
                        </ul>
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
                        marginRight:"10vw"
                    }}>
                        <h2 style={{
                            fontSize: "3vw",
                            fontWeight: "bold"
                        }}>Algunos datos del Ecuador</h2>
                        <ul style={{
                            fontSize:"1.5vw",
                            listStyle:"none",
                            padding: "0px",
                            marginTop: "20px"
                        }}>
                            <li>Las empresas no escapan de este lento desarrollo de transacciones online 
                                puesto que menos del 20% de las empresas realizan comercio electrónico
                            </li>
                        </ul>
                    </div>
                </div>
         </div>



        <div style={{
            display:"flex",
            height:"100vh",
            backgroundImage: `url(${BackgroundFrecuenciaUsoInternet} )`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            
                <div style={{
                    display: 'flex',
                    width:'100vw',
                    height:'100vh',
                    background: 'white',
                    paddingTop: "21vh",
                    fontWeight: "bold"
                    }}>
                    
                    <PieFrecuencia/>
                   
                </div>
                <div style={{
                    display: 'flex',
                    width:'100vw',
                    height:'100vh',
                    background: '#dad4d4'
                }}>
                    <div style={{
                        marginTop:"20vh",
                        marginLeft:"10vw",
                        marginRight:"10vw"
                    }}>
                        <h2 style={{
                            fontSize: "3vw",
                            fontWeight: "bold",
                            marginTop: "20px",
                            color:"black",
                    
                        }}>Frecuencia de Uso de Internet</h2>
                        <ul style={{
                            fontSize:"1.5vw",
                            listStyle:"none",
                            padding:"inherit",
                            color:"black",
                            marginTop: "5vh"
                        }}>
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
         <div style={{
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
       
         </>
    )
}
export default despliegueEstadisticas
