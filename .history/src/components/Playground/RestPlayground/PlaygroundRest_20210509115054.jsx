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
        <a onClick={Dropdown}>
            <div className='dropdown'> 
                <span>Tocame</span>
                <div className="dropdown-content">
                    
                        <a onClick={console.log('toado')}>Uno</a>
                        <a onClick={console.log('dos')}>Dos</a>
                    
                </div>
            </div>
        </a>
                {
                    //dropdown ? <p>Sirve</p> : <p> Nel</p> 
                }  
        </div>
    )
}

export default PlaygroundRest
