import React from 'react'
import ContactoIngMise from '../assets/img/IngMise.jpg'
import ContactoIngCaiza from '../assets/img/IngCaiza.jpg'
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
                        height:'50vh',
                        backgroundColor:'pink',
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
                        backgroundColor:'green',
                        flexDirection:'row'
                    }}>
                        {
                            //Doble caja horizontal
                        }
                        <div style={{
                            display:'flex',
                            width:'30vw',
                            backgroundColor:'red',
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
                                backgroundImage: `url(${ContactoIngMise})`,
                                backgroundSize: '100% 100%'
                            }}>  
                            </div>
                        </div>

                            <div style={{
                                width:'50vw',
                                backgroundColor: 'yellow',
                                padding:'10% 2% 2% 2%'
                                    
                            }}>    
                                    <text style={{
                                        fontSize:'1.3vw',
                                    }}>
                                       José Luis Mise Pasuña<br></br>
                                        <text style={{fontWeight:'bold'}}>Nacionalidad:</text> Ecuatoriana<br></br>
                                        <text style={{fontWeight:'bold'}}> Formación profesional:</text> Ingeniero en Informática y 
                                    Sistemas Computacionales graduado en la Universidad Técnica de Cotopaxi. 
                                    </text>
                            </div>
                    </div>


                        <div style={{
                            height:'45vh',
                            width:'50vw',
                            backgroundColor:'grey',
                            fontSize:'1.3vw',
                            paddingLeft:'5%',
                        }}>
                            Posgrado en Ingeniería en software en Universidad de las Fuerzas Armadas ESPE
                             Catedrático Universitario en la Carrera de Computación, Redes  y Telecomunicaciones Asignaturas: Mantenimiento de Hardware I, Mantenimiento de Hardware II, Seguridad Informática, Software I, Software II, Paquetes Informáticos en la Unidad de Gestión de Tecnologías de la Universidad de las Fuerzas Armadas ESPE.
                             <br></br>
                             <text style={{fontWeight:'bold'}}>Contacto</text>
                             <br></br><text style={{fontWeight:'bold'}}>Correo Electrónico: </text>
                            joseluismisep@gmail.com
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
                        height:'50vh',
                        backgroundColor:'pink',
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
                        backgroundColor:'green',
                        flexDirection:'row'
                    }}>
                        {
                            //Doble caja horizontal
                        }
                        <div style={{
                            display:'flex',
                            width:'30vw',
                            backgroundColor:'red',
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
                                backgroundColor: 'yellow',
                                padding:'10% 2% 2% 2%'
                                    
                            }}>    
                                    <text style={{
                                        fontSize:'1.3vw',
                                    }}>
                                       José Luis Mise Pasuña<br></br>
                                        <text style={{fontWeight:'bold'}}>Nacionalidad:</text> Ecuatoriana<br></br>
                                        <text style={{fontWeight:'bold'}}> Formación profesional:</text> Ingeniero en Informática y 
                                    Sistemas Computacionales graduado en la Universidad Técnica de Cotopaxi. 
                                    </text>
                            </div>
                    </div>


                        <div style={{
                            height:'45vh',
                            width:'50vw',
                            backgroundColor:'grey',
                            fontSize:'1.3vw',
                            paddingLeft:'5%',
                        }}>
                            Posgrado en Ingeniería en software en Universidad de las Fuerzas Armadas ESPE
                             Catedrático Universitario en la Carrera de Computación, Redes  y Telecomunicaciones Asignaturas: Mantenimiento de Hardware I, Mantenimiento de Hardware II, Seguridad Informática, Software I, Software II, Paquetes Informáticos en la Unidad de Gestión de Tecnologías de la Universidad de las Fuerzas Armadas ESPE.
                             <br></br>
                             <text style={{fontWeight:'bold'}}>Contacto</text>
                             <br></br><text style={{fontWeight:'bold'}}>Correo Electrónico: </text>
                            joseluismisep@gmail.com
                            jlmise@espe.edu.ec
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono móvil:</text> 0998679276
                            <br></br>
                            <text style={{fontWeight:'bold'}}>Teléfono fijo:</text> 032729637

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
