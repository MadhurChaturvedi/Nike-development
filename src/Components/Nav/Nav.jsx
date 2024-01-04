import React from 'react'
import headerLogo from '../../assets/images/header-logo.svg'
import { hamburger } from '../../assets/icons'
// import { navLinks } from '../../Constants'
import { navLinks } from "../../Constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className=' flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} width={139} height={29} alt="" />
        </a>
        <ul className='flex-3 flex justify-center items-center gap-16 max-lg:hidden '>
          {
            navLinks.map((item) => (
              <li key={item.label} >
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:scale-105 transition-all duration-150'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
