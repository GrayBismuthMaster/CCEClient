import React,{useState}  from 'react'
const Home = () => {
   
            return (
            <>
            <div style={{
                    display: 'flex',
                    backgroundColor: 'red',
                    height:'80vh',
                    width: '100vw'
                    }}>
                        <h2 style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            marginLeft: '40vw'
                        }}>
                            Camara de comercio
                        </h2>
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'green',
                            width:'50vw'
                        }}>
                                2
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
