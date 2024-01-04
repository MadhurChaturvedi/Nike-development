import React from 'react'
import {fotterLogo} from '../assets/'
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={fotterLogo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
