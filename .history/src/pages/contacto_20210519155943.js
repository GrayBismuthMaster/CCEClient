import React from 'react'
import ContactoIngMise from '../assets/img/IngMise.jpg'
import ContactoIngCaiza from '../assets/img/IngCaiza.jpg'
import '../styles/contacto.css'
const contacto = () => {
    return (
        <>
        <div style={{
                display: 'flex',
                height:'80vh',
                width: '100vw',
                }}>
                 
                    {
                        //DIV GLOBAL 
                    }

                    <div style={{
                        height:'80vh',
                        backgroundColor:'none',
                        flexDirection:'column'
                    }}>
                               {
                        //Sección izquierda
                        //caja Principal
                        //Orientación horizontal
                    }
                    <div style={{
                        display: 'flex',
                        width:'50vw',
                        height:'35vh',
                        backgroundColor:'transparent',
                        flexDirection:'row'
                    }}>
                        {
                            //Doble caja horizontal
                        }
                        <div style={{
                            display:'flex',
                            width:'30vw',
                            backgroundColor:'transparent',
                            alignItems:'center',
                            paddingLeft:'5vw',
                            paddingTop: '5vh'
                        }}>
                            <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                maxHeight:'100%',
                                width:'9.76vw',
                                height:'26.6vh',
                                backgroundImage: `url(${ContactoIngMise})`,
                                backgroundSize: '100% 100%'
                            }}>  
                            </div>
                        </div>

                            <div style={{
                                width:'50vw',
                                backgroundColor: 'transparent',
                                padding:'10% 2% 2% 2%',
                                fontSize:'1.2vw',
                                    
                            }}>  
                                       <text style={{fontWeight:'bold'}}>José Luis Mise Pasuña</text><br></br>
                                        <text style={{fontWeight:'bold'}}>Nacionalidad:</text> Ecuatoriana<br></br>
                                        <text style={{fontWeight:'bold'}}> Formación profesional:</text> Ingeniero en Informática y 
                                    Sistemas Computacionales graduado en la Universidad Técnica de Cotopaxi. 
                                    
                            </div>
                    </div>


                        <div style={{
                            height:'45vh',
                            width:'50vw',
                            backgroundColor:'transparent',
                            fontSize:'1.2vw',
                            paddingLeft:'5%',
                        }}>
                            Posgrado en Ingeniería en software en Universidad de las Fuerzas Armadas ESPE
                             Catedrático Universitario en la Carrera de Computación, Redes  y Telecomunicaciones Asignaturas: Mantenimiento de Hardware I, Mantenimiento de Hardware II, Seguridad Informática, Software I, Software II, Paquetes Informáticos en la Unidad de Gestión de Tecnologías de la Universidad de las Fuerzas Armadas ESPE.
                             <br></br>
                             <text style={{fontWeight:'bold'}}>Contacto</text>
                             <br></br><text style={{fontWeight:'bold'}}>Correo Electrónico: </text>
                            joseluismisep@gmail.com -
                            jlmise@espe.edu.ec
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono móvil:</text> 0998679276
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono fijo:</text> 032729637

                        </div>
                    </div>
             
                {
                    //SECTION 2 ING CAIZA
                }
                
                {
                        //DIV GLOBAL 
                    }

                    <div style={{
                        height:'80vh',
                        backgroundColor:'none',
                        flexDirection:'column'
                    }}>
                               {
                        //Sección izquierda
                        //caja Principal
                        //Orientación horizontal
                    }
                    <div style={{
                        display: 'flex',
                        width:'50vw',
                        height:'35vh',
                        backgroundColor:'transparent',
                        flexDirection:'row'
                    }}>
                        {
                            //Doble caja horizontal
                        }
                        <div style={{
                            display:'flex',
                            width:'30vw',
                            backgroundColor:'transparent',
                            alignItems:'center',
                            paddingLeft:'5vw',
                            paddingTop: '6vh'
                        }}>
                            <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                maxHeight:'100%',
                                width:'9.76vw',
                                height:'26.6vh',
                                backgroundImage: `url(${ContactoIngCaiza})`,
                                backgroundSize: '100% 100%'
                            }}>  
                            </div>
                        </div>

                            <div style={{
                                width:'50vw',
                                backgroundColor: 'transparent',
                                padding:'10% 2% 2% 2%',
                                fontSize:'1.2vw'
                            }}>    
                                       <text style={{fontWeight:'bold'}}>José Rubén Caiza Caizabuano</text><br></br>
                                        <text style={{fontWeight:'bold'}}>Nacionalidad:</text> Ecuatoriana<br></br>
                                        <text style={{fontWeight:'bold'}}> Formación profesional:</text> Ingeniero En Sistemas e Informática graduado en la Universidad de las Fuerzas Armadas ESPE. Tecnólogo en Aviónica
                                         (Electrónica de
                            </div>
                    </div>


                        <div style={{
                            height:'45vh',
                            width:'50vw',
                            backgroundColor:'transparent',
                            fontSize:'1.2vw',
                            paddingRight:'5%',
                            paddingLeft:'2%'
                        }}>
                              Aviones) del Instituto Tecnológico Superior Aeronáutico. Posgrado en Ingeniería en software en Universidad de las Fuerzas Armadas ESPE
                            Catedrático Universitario en la Carrera de Computación, Redes  y Telecomunicaciones Asignaturas: Sistemas Operativos I, Estructura de datos, Proyecto Integrador II, Mantenimiento de Hardware I, Elementos y mantenimiento del PC, Fundamentos de Tics en la Unidad de Gestión de Tecnologías de la Universidad de las Fuerzas Armadas ESPE.
                            <br></br>
                             <text style={{fontWeight:'bold'}}>Contacto</text>
                             <br></br><text style={{fontWeight:'bold'}}>Correo Electrónico: </text>
                             joseru82@hotmail.com -                             
                            jrcaiza@espe.edu.ec
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono móvil:</text> 0984552122
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono fijo:</text> 032801452

                        </div>
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

export default contacto
