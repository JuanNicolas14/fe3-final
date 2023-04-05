import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

import images from '../assets/images/images'
import '../index.css'


const Card = ({ user }) => {

  const {favDispatch, themeState} = useContextGlobal()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    favDispatch({type:'ADD_FAV', payload: user})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}      
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={images.doctor} alt="doctor imagen" />
        <h3><Link to={'/dentist/'+ user.id}><span style={{color: themeState.color}}>{user.name}</span></Link></h3>
        <p>{user.username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"><p className="icon">⭐</p></button>
    </div>
  );
};

export default Card;
