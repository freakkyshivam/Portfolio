import React from "react";
import { Github, Linkedin, Twitter, Heart, Instagram, Mail, MapPin, Coffee, Code, Sparkles, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/freakkyshivam",
      label: "GitHub",
      color: "hover:text-gray-300",
      bgHover: "hover:bg-gray-400/20"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/freakkyshivam",
      label: "LinkedIn", 
      color: "hover:text-blue-400",
      bgHover: "hover:bg-blue-400/20"
    },
    {
      icon: Twitter,
      url: "https://x.com/freakkyshivam",
      label: "Twitter",
      color: "hover:text-sky-400",
      bgHover: "hover:bg-sky-400/20"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/freakkyshivam/",
      label: "Instagram",
      color: "hover:text-pink-400",
      bgHover: "hover:bg-pink-400/20"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

 

  return (
    <footer className="bg-slate-950 border-t border-emerald-400/20 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        
        
        <div className="container mx-auto px-4 py-12">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Shivam Chaudhary
                </h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed">
                Creative <span className="text-emerald-400 font-semibold">MERN Stack Developer</span> passionate about building clean, 
                responsive, and intuitive applications that deliver seamless user experiences and high performance.
              </p>
              
             
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleScrollToSection(link.href)}
                      className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-emerald-400 transition-colors"></div>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                Let's Connect
              </h4>
              
              <p className="text-slate-400 text-sm">
                Follow me on social media for updates on my latest projects and tech insights!
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 transition-all duration-300 hover:border-emerald-400/50 hover:-translate-y-1 ${social.color} ${social.bgHover}`}
                      title={social.label}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2 p-3 bg-slate-800/30 rounded-xl border border-slate-700">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm flex items-center gap-2">
                © {currentYear} Shivam Chaudhary. All rights reserved.
                <span className="text-emerald-400">•</span>
                <span>Built with React & Tailwind CSS</span>
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <p className="text-slate-400 flex items-center gap-1">
                  Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and 
                  <Coffee className="w-4 h-4 text-amber-400" /> 
                  <span className="text-emerald-400">lots of coffee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;