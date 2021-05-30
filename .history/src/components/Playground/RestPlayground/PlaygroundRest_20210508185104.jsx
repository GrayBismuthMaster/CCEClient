import React, { useState } from 'react'



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
            <div > 
                <span>Tocame</span>
                {
                 dropdown ? <p>Sirve</p> : <p> Nel</p> 
                }  
            </div>
        </a>
               
        </div>
    )
}

export default PlaygroundRest
