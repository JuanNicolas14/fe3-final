import React from 'react'
import images from '../assets/images/images'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {

  const {themeState} = useContextGlobal()

  return (
    <footer style={{ backgroundColor: themeState.bgColor === 'white' ? 'rgb(187, 181, 181)':'rgb(30, 49, 49)', color: themeState.color}}>
        <img src={images.dh} alt='DH-logo' />
        <div>
          <img src={images.facebook} alt="Logo de facebook" />
          <img src={images.instagram} alt="Logo de instagram" />
          <img src={images.whatsapp} alt="Logo de whatsapp" />
          <img src={images.tiktok} alt="Logo de tiktok" />
        </div>
    </footer>
  )
}

export default Footer
