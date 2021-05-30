import React, { useState } from 'react'
import '../RestPlayground/PlaygroundRest.css'
const PlaygroundRest = () => {
    
    const [dropdown, setDropdown] = useState(false)
    const Dropdown = ()=>{
        setDropdown(!dropdown)
    }
    return (
        <div style={{
            display:'flex',
            width:'100vw',
            height:'85vh',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <div className='dropdown'> 
                <button className='dropbtn'>Dropdown</button>
                <div className="dropdown-content">
                        <a onClick={console.log('toado')} href='#'>Uno</a>
                        <a onClick={console.log('dls') } href='#'>dos</a>
                </div>
               
                
            </div>
        
                {
                    //dropdown ? <p>Sirve</p> : <p> Nel</p> 
                }  
        </div>
    )
}

export default PlaygroundRest
