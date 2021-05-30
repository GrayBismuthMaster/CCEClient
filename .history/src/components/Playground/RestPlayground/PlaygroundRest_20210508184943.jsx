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
            <div > Dropdown</div>
        </a>
        {
            dropdown ? <div>Sirve</div> : <div> Nel</div> 
        }         
        </div>
    )
}

export default PlaygroundRest
