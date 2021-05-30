import React,{useState}  from 'react'
import LogoCCE from '../assets/img/logoCCE.png'
const Home = () => {
   
            return (
            <>
            <div style={{
                    display: 'flex',
                    backgroundColor: 'red',
                    height:'80vh',
                    width: '100vw',
                    }}>
                        <text style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            marginLeft: '30%',
                            marginRight: '30%',
                            fontSize: '1.40vw',
                            marginTop: '3%'
                        }}>
                            Datos públicos de Ecommerce del Ecuador 2021
                        </text>
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'green',
                            width:'50vw',
                            flexDirection:'column'
                        }}>
                            <div style={{
                                display:'flex',
                                maxWidth:'100%',
                                width:'18.3vw',
                                height:'9vh',
                                marginTop: '16%',
                                marginLeft:'25%',
                                justifyContent:'center',
                                backgroundImage: `url(${LogoCCE})`,
                                backgroundSize: 'cover'
                            }}>
                            </div>
                            <text style={{
                                marginLeft:'0px',
                                
                            }}>
                                dsadf
                            </text>
                        </div>
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'blue',
                            width:'50vw'
                        }}>
                            3
                        </div>
            </div>  
            <div style={{
                display:'flex',
                backgroundColor:'pink',
                height:'10vh'
            }}>
                0
            </div>
            </>
            )
    }

export default Home
