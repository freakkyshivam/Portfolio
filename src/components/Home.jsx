import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Code, Sparkles, Download, Eye } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const roles = ["MERN Stack Developer", "Full Stack Developer", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/freakkyshivam",
      color: "hover:border-gray-400 hover:text-gray-300",
      bgHover: "hover:bg-gray-400/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/freakkyshivam",
      color: "hover:border-blue-400 hover:text-blue-300",
      bgHover: "hover:bg-blue-400/10"
    },
    {
      icon: Mail,
      label: "Contact",
      url: "#contact",
      color: "hover:border-purple-400 hover:text-purple-300",
      bgHover: "hover:bg-purple-400/10",
      isInternal: true
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20 sm:pt-24 md:pt-28" id="home">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-purple-500/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>



      {/* Main Heading */}
      <div className={`text-center mb-6 transform transition-all duration-1000 delay-200 z-50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 px-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-400 animate-pulse flex-shrink-0" />
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Shivam Chaudhary
          </h1>
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-400 animate-pulse delay-500 flex-shrink-0" />
        </div>
      </div>

      {/* Typed Role */}
      <div className={`mb-6 transform transition-all duration-1000 delay-400 z-50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium text-center h-7 sm:h-8 md:h-10 px-4">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      {/* Description */}
      <div className={`mb-10 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto text-center leading-relaxed px-4">
          Currently mastering <span className="text-emerald-400 font-semibold">Frontend</span> and <span className="text-blue-400 font-semibold">Backend</span> development, 
          building modern applications with cutting-edge technologies. Passionate about creating 
          <span className="text-purple-400 font-semibold"> efficient solutions</span> and exploring innovative approaches to system design.
        </p>
      </div>

      {/* Social Links */}
      <div className={`flex flex-wrap justify-center gap-4 mb-10 z-50 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <button
              key={index}
              className={`group flex items-center gap-3 bg-slate-800/50 border border-slate-700 text-slate-300 px-4 py-3 md:px-6 md:py-3 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color} ${social.bgHover}`}
              onClick={() => {
                if (social.isInternal) {
                  handleScrollToSection('contact');
                } else {
                  window.open(social.url, "_blank");
                }
              }}
            >
              <IconComponent className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm md:text-base">{social.label}</span>
            </button>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className={`flex flex-wrap justify-center gap-4 mb-12 z-50 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button
          className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          onClick={() => handleScrollToSection('project')}
        >
          <Eye className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm md:text-base">View My Work</span>
        </button>

        <button
          className="group flex items-center gap-2 bg-transparent border-2 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 px-6 py-3 md:px-8 md:py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
          onClick={() => handleScrollToSection('about')}
        >
          <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
          <span className="text-sm md:text-base font-semibold">Learn More</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-500 text-xs font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 md:left-10 animate-float">
        <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/3 right-4 md:right-10 animate-float delay-1000">
        <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float delay-500">
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;