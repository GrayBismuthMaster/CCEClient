import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import restVsGraphQL from './pages/restVsGraphQL'
import despliegueEstadisticas from './pages/despliegueEstadisticas'
import contacto from './pages/contacto'
import api from './pages/api'
import './App.css'
import {Dropdown,DropdownMenu, DropdownItem, DropdownToggle} from ''
//Hace que apollo este disponible en todos los componentes de nuestra app
function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/restVsGraphQL' component={restVsGraphQL}/>
          <Route path='/despliegueEstadisticas' component={despliegueEstadisticas}/>
          <Route path='/contacto' component={contacto}/>
          <Route path='/api' component={api}/>
        </Switch>
      </Router>

  );
}

export default App;
