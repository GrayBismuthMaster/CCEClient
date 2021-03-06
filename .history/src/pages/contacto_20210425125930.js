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
                    {
                        //Sección izquierda
                    }
                    <div style={{
                        display: 'flex',
                        width:'50vw',
                        backgroundColor:'green'
                    }}>
                        <div style={{
                            display:'flex',
                            width:'50vw',
                            backgroundColor:'red'
                        }}>
                            <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                maxHeight:'100%',
                                width:'9.76vw',
                                height:'26.6vh',
                                marginTop: '20%',
                                marginLeft:'3%',
                                backgroundImage: `url(${ContactoIngMise})`,
                                backgroundSize: '100% 100%'
                            }}>  
                            </div>
                        </div>

                            <div style={{
                                width:'50vw',
                                backgroundColor: 'yellow',

                            }}>    
                                    <text style={{
                                        fontSize:'1.4vw'
                                    }}>
                                       José Luis Mise Pasuña<br></br>
                                        Nacionalidad: Ecuatoriana<br></br>
Formación profesional: Ingeniero en Informática y Sistemas Computacionales graduado en la Universidad Técnica de Cotopaxi. 
Posgrado en Ingeniería en software en Universidad de las Fuerzas Armadas ESPE
Catedrático Universitario en la Carrera de Computación, Redes  y Telecomunicaciones Asignaturas: Mantenimiento de Hardware I, Mantenimiento de Hardware II, Seguridad Informática, Software I, Software II, Paquetes Informáticos en la Unidad de Gestión de Tecnologías de la Universidad de las Fuerzas Armadas ESPE.


                                    </text>
                            </div>
                            <div style={{
                                display:'flex',
                                backgroundColor:'blue',

                            }}>
                                a
                            </div>
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
                            marginTop: '9%',
                            marginLeft:'25%',
                            backgroundImage: `url(${ContactoIngCaiza})`,
                            backgroundSize: '100% 100%'
                        }}>
                        </div>
                        <text style={{
                            margin:'1% 5% 1% 5%',
                            fontSize:'1.4vw'
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

export default contacto
