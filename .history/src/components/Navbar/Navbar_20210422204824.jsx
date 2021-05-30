import React, {useState} from 'react'
import Dropdown2 from '../DropDown/Dropdown'
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
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
                    <Dropdown2/>
                    
                </div>
                </>
            } 
               <Bars onClick={handleClick}/>
              
                <NavMenu style={{
                    paddingRight:"80px"
                }} >
                   
                    <Dropdown>
                        <DropdownToggle>
                        Análisis Rest vs GraphQL
                        </DropdownToggle>
                        <DropdownMenu> 
                        <NavLink to='/restVsGraphQL' activeStyle>
                        
                        </NavLink>
                        <DropdownItem>
                        </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    
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