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
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <div style={{
                display:'flex'
                
                }}>
                <div className='dropdown' style={{marginTop:'-20%'}}> 
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
    )
}

export default PlaygroundRest
