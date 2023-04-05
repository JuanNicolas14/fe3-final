import React from 'react'
import Form from '../Components/Form'
import '../index.css'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {

  const {themeState} = useContextGlobal()

  return (
    <div className='contact'
    style={{ backgroundColor: themeState.bgColor, color: themeState.color}}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact