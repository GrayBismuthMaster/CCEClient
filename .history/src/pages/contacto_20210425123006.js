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
                    <div style={{
                        display: 'flex',
                        width:'50vw',
                    }}>
                        <div style={{
                            display:'flex',
                            maxWidth:'100%',
                            maxHeight:'100%',
                            width:'9.76vw',
                            height:'26.6vh',
                            marginTop: '20%',
                            marginLeft:'3',
                            backgroundImage: `url(${ContactoIngMise})`,
                            backgroundSize: '100% 100%'
                        }}>  
                        </div>
                        <div>    
                            <text style={{
                                    margin:'10% 0% 1% 20%',
                                    fontSize:'1.4vw'
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
