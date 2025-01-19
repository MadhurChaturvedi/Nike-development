import React, { useState } from 'react';
import headerLogo from '../../assets/images/header-logo.svg';
import { hamburger } from '../../assets/icons';
// import { navLinks } from '../../Constants'
import { navLinks } from "../../Constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full sticky top-0 left-0 bg-slate-50 z-20 shadow-md">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={139} height={29} alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-3 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:scale-105 transition-all duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="hidden max-lg:block">
          <button onClick={toggleMenu} aria-label="Menu Toggle">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="max-lg:flex flex-col bg-white shadow-lg py-4 px-6 absolute top-20 right-0 w-3/4 rounded-lg z-30">
          {navLinks.map((item) => (
            <li key={item.label} className="mb-4 last:mb-0">
              <a
                href={item.href}
                className="font-montserrat text-base text-slate-gray hover:text-black transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
