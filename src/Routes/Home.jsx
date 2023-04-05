import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {apiState,themeState} = useContextGlobal()

  return (
    <main className="home" 
      style={{backgroundColor: themeState.bgColor, color: themeState.color}}
    >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <ul>
          {apiState.map((user) =>
            <li key={user.id}>
              <Card 
                user={user}
              />
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}

export default Home