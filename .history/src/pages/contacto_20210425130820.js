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
                        height:'50vh',
                        backgroundColor:'pink',
                        flexDirection:'column'
                    }}>
                        
                        <div style={{
                            height:'50vh',
                            backgroundColor:'grey'
                        }}>
                            abajo
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
