import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import restVsGraphQL from './pages/restVsGraphQL'
import despliegueEstadisticas from './pages/despliegueEstadisticas'
import contacto from './pages/contacto'
import api from './pages/api'
import './App.css'
import {Dropdown,DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'
//Hace que apollo este disponible en todos los componentes de nuestra app
function App() {
  const [dropdown, setDropdown] = useState(false)
  const setAbrirCerrarDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Dropdown isOpen={dropdown} toggle={setAbrirCerrarDropdown}>
            <DropdownToggle>
              Dropdown Ejemplo
            </DropdownToggle> 
            <DropdownMenu>
              <DropdownItem> Dropdown 1</DropdownItem>
              <DropdownItem> Dropdown 2</DropdownItem>
              <DropdownItem> Dropdown 3</DropdownItem>
              <DropdownItem> Dropdown 4</DropdownItem>
            </DropdownMenu> 
          </Dropdown>
          <Route path='/restVsGraphQL' component={restVsGraphQL}/>
          <Route path='/despliegueEstadisticas' component={despliegueEstadisticas}/>
          <Route path='/contacto' component={contacto}/>
          <Route path='/api' component={api}/>
        </Switch>
      </Router>

  );
}

export default App;
