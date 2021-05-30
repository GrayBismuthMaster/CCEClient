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
                    <ul>
                        <li>Uno</li>
                    </ul>
                </div>
                <div className="dropdown-content">
                    <p>Tu</p>
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
