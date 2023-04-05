import React, { useState } from "react";
import '../index.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let emailTest = emailRegex.test(usuario.email)
    if(emailTest && usuario.nombre.length > 5){
      setShow(true)
      setErr(false)
    } else {
      setShow(false)
      setErr(true)
    }
  }

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        
        <label>
            Nombre Completo:
        </label>
        <input 
          value={usuario.nombre} 
          type="text" 
          onChange={(e)=> setUsuario({...usuario, nombre: e.target.value})} 
        />
      
        
      
        <label>
            Email:
        </label>
        <input 
          value={usuario.email} 
          type="text" 
          onChange={(e)=> setUsuario({...usuario, email: e.target.value})} 
        />

        <button>Enviar</button>

        {err && <h3>Por favor chequea que la información sea correcta</h3>}
      </form>
      {show && <h2>Gracias {usuario.nombre}, te contactaremos cuando antes vía mail.</h2>}
    </div>
  );
};

export default Form;
