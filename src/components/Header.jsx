import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Mail, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'project', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Zap },
    { href: "#project", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail }
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`
      flex justify-between items-center fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 p-4 sm:p-5
      ${isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-lg border-b border-emerald-400/20 shadow-lg shadow-emerald-400/5' 
        : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800'
      }
    `}>
      
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Shivam
        </h2>
      </div>
       
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
        <ul className="flex space-x-2 lg:space-x-4">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium
                    transition-all duration-300 group cursor-pointer
                    ${isActive 
                      ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/30' 
                      : 'text-white hover:text-emerald-400 hover:bg-slate-800/50'
                    }
                  `}
                >
                  <IconComponent size={16} className={`transition-colors ${isActive ? 'text-emerald-400' : 'text-gray-400 group-hover:text-emerald-400'}`} />
                  <span className="text-sm lg:text-base">{item.label}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-emerald-400/5 rounded-xl animate-pulse"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden relative p-2 rounded-xl bg-slate-800/50 border border-slate-700 text-white hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
      >
        <div className="relative w-6 h-6">
          <Menu 
            size={24} 
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
          />
          <X 
            size={24} 
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav className={`
        md:hidden absolute top-full left-0 right-0 
        bg-slate-950/98 backdrop-blur-lg border-b border-emerald-400/20
        transition-all duration-300 ease-out shadow-lg shadow-emerald-400/5
        ${isMenuOpen 
          ? 'opacity-100 visible transform translate-y-0' 
          : 'opacity-0 invisible transform -translate-y-4'
        }
      `}>
        <ul className="flex flex-col py-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <li key={index} className={`transform transition-all duration-300 delay-${index * 50} ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                <button 
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    w-full flex items-center gap-3 px-6 py-4 text-left
                    transition-all duration-300 border-l-4
                    ${isActive 
                      ? 'text-emerald-400 bg-emerald-400/10 border-l-emerald-400' 
                      : 'text-white hover:text-emerald-400 hover:bg-slate-800/30 border-l-transparent hover:border-l-emerald-400/50'
                    }
                  `}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isActive ? 'bg-emerald-400/20' : 'bg-slate-800/50'}`}>
                    <IconComponent size={16} className={isActive ? 'text-emerald-400' : 'text-gray-400'} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Menu Footer */}
        <div className="px-6 py-4 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Code size={16} className="text-emerald-400" />
            <span>Let's build something amazing!</span>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-300"
          style={{ 
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` 
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;