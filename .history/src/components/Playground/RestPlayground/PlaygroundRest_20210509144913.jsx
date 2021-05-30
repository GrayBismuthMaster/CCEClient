import React, { useState } from 'react'
import '../RestPlayground/PlaygroundRest.css'
const PlaygroundRest = () => {
    
    const [dropdown, setDropdown] = useState(false)
    const Dropdown = ()=>{
        setDropdown(!dropdown)
        console.log('dos')
    }

    const activarUno = ()=>{
        setDropdown(!dropdown)
        console.log('uno')
    }
    return (
        <>
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh'
        }}>
            <div style={{
                display:'flex',
                width:'100vw',
                backgroundColor:'red',
                    height:'50vh',
                alignItems:'center',
                justifyContent:'center',
                }}>
                <div className='dropdown' style={{marginTop=}}> 
                    <button className='dropbtn'>Dropdown</button>
                    <div className="dropdown-content">
                            <a onClick={activarUno} >Uno</a>
                            <a onClick={Dropdown } >dos</a>
                    </div>

                    
                </div>
                
            </div>
            
                {
                    //dropdown ? <p>Sirve</p> : <p> Nel</p> 
                }  
        </div>
        </>
    )
}

export default PlaygroundRest
