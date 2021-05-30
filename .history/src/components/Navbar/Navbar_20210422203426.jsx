import React, {useState} from 'react'
import Dropdown from '../DropDown/Dropdown'
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle}
import '../DropDown/Dropdown.css'
import '../Navbar/PosNavbar.css'
import 
    {
        Nav, Bars, NavMenu, NavLink
    } from './NavbarElementos'
import Logo from '../../assets/img/logoCCEQuito.png'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setDropdown(!dropdown)
    return (
        <>
           <Nav>    
               <NavLink to='/'>
                   <img src={Logo} alt="logo CCE"></img>
               </NavLink>
              
         {
                !click ? 
                <></>
                :
                <>
                <div id="dropdown-pos">
                    <Dropdown/>
                    
                </div>
                </>
            } 
               <Bars onClick={handleClick}/>
              
                <NavMenu style={{
                    paddingRight:"80px"
                }} >
                    <NavLink to='/restVsGraphQL' activeStyle>
                        Análisis Rest vs GraphQL
                    </NavLink>
                    <NavLink to='/despliegueEstadisticas' activeStyle>
                        Despliegue estadístico
                    </NavLink>
                    <NavLink to='/contacto' activeStyle>
                        Contacto
                    </NavLink>
                    <NavLink to='/api' activeStyle>
                        API
                    </NavLink>
                </NavMenu>     
               
               
           </Nav>
                
           
        </>
    )
}

export default Navbar
