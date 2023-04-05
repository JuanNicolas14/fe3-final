import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUser] = useState({})
  const {id} = useParams()
  const {themeState} = useContextGlobal()

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
  })


  return (
    <div
    style={{ backgroundColor: themeState.bgColor, color: themeState.color}}
    >
      <h1>Dentist Details</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table style={{borderColor: themeState.color}}>
        <tbody>
          <tr>
            <th style={{borderColor: themeState.color}}>Name</th>
            <th style={{borderColor: themeState.color}}>Email</th>
            <th style={{borderColor: themeState.color}}>Phone</th>
            <th style={{borderColor: themeState.color}}>Website</th>
          </tr>
          <tr>
            <td style={{borderColor: themeState.color}}>{user.name}</td>
            <td style={{borderColor: themeState.color}}>{user.email}</td>
            <td style={{borderColor: themeState.color}}>{user.phone}</td>
            <td style={{borderColor: themeState.color}}>{user.website}</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Detail