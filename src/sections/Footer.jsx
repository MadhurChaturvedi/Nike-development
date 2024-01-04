import React from 'react'
import { footerLogo } from '../assets/images'
import { socialmedia } from '../Constants/Index';
import { footerLinks } from '../Constants/Index'
import { copyrightSign } from '../assets/icons';
const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>

          <p className=' mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat facere eaque expedita cum atque, dolore beatae sed quasi?
          </p>

          <div className=' flex items-center gap-5 mt-8'>
            {
              socialmedia.map((icon) => (
                <div className=' flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '>
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className='text-white text-2xl'>{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li className=' mt-3 text-white-400 font-montserrat leading-normal cursor-pointer hover:text-slate-gray'>
                        <a>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center '>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} width={20} height={20} className=' rounded-full m-0' alt="" />
          <p>Copyright. all rights reserved.</p>
          <p className=' font-montserrat cursor-pointer'>
            Terms & condition
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
