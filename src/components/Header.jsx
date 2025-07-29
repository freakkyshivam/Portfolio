import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className='flex justify-between items-center fixed top-0 left-0 right-0 z-500 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4 sm:p-5'>
      
      <h2 className='text-xl sm:text-2xl font-bold text-emerald-400'>SC</h2>
       
      <nav className='hidden md:flex items-center space-x-6 lg:space-x-8 text-white'>
        <ul className='flex space-x-4 lg:space-x-6'>
          {navItems.map((item, index) => (
            <li key={index} className='cursor-pointer'>
              <a
                to={item.href} 
                className='hover:text-emerald-400 transition-colors duration-300 text-sm lg:text-base'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
 
      <button 
        onClick={toggleMenu}
        className='md:hidden text-white hover:text-emerald-400 transition-colors duration-300 p-2'
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

   
      <nav className={`
        md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-800
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        <ul className='flex flex-col py-4'>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className='block px-6 py-3 text-white hover:text-emerald-400 hover:bg-slate-800/50 transition-all duration-300'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

     
      {isMenuOpen && (
        <div 
          className='md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]'
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;