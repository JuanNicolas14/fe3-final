import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { useContextGlobal } from "./utils/global.context"
import images from '../assets/images/images'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_LIGHT'})
    } else {
      themeDispatch({type: 'SWITCH_DARK'})
    }
  }

  return (
    <nav style={{ backgroundColor: themeState.bgColor === 'white' ? 'rgb(187, 181, 181)':'rgb(30, 49, 49)', color: themeState.color}}>
      <Link to='/home'><img src={images.dhOdonto} alt="Dh Odonto" /></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='navegacion'>
        <ul>
          <li><Link to='/home'><span className='nav-link' style={{color: themeState.color, ":hover": { color: "green"}}}>Home</span></Link></li>
          <li><Link to='/contact'><span className='nav-link' style={{color: themeState.color}}>Contact</span></Link></li>
          <li><Link to='/favs'><span className='nav-link' style={{color: themeState.color}}>Favs</span></Link></li>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={switchTheme}
          style={{color: themeState.color}}
        >{themeState.theme ? '🌞' : '🌘'}</button>
      </div>
    </nav>
  )
}

export default Navbar