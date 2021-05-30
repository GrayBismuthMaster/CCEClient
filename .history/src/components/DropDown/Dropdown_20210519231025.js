import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MenuItems} from './MenuItems'
import '../Navbar/PosNavbar.css'
const Dropdown = () => {
    const [click,setClick] = useState(false)
    
    return (
            <>
            <ul>
              {
                  MenuItems.map((item,index) => {
                return(
                        <li className={click ? 'li_despliegue' : 'caret'} key={index}>
                            <Link className={item.cName} to={item.path} onClick={()=> setClick(!click)}>
                                {item.title}
                            </Link>
                        </li>) 
                  })
              }
            </ul>
            </>
    )
}

export default Dropdown
