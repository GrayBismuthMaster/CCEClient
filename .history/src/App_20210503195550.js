import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/index'
import restVsGraphQL from './pages/restVsGraphQL'
import restVsGraphQL2018 from './pages/restVsGraphQL2018'
import restVsGraphQL2020 from './pages/restVsGraphQL2018'
import despliegueEstadisticas from './pages/despliegueEstadisticas'
import despliegueEstadisticas2108 from './pages/despliegueEstadisticas'
import contacto from './pages/contacto'
import api from './pages/api'
import './App.css'
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
          <Route path='/restVsGraphQL' component={restVsGraphQL}/>  
          <Route path='/restVsGraphQL2018' component={restVsGraphQL2018}/>
          <Route path='/restVsGraphQL2020' component={restVsGraphQL2020}/>               
          <Route path='/despliegueEstadisticas' component={despliegueEstadisticas}/>
          <Route path='/despliegueEstadisticas2018' component={despliegueEstadisticas2018}/>
          <Route path='/contacto' component={contacto}/>
          <Route path='/api' component={api}/>
        </Switch>
      </Router>

  );
}

export default App;
