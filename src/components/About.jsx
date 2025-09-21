import React from 'react'
import { BookOpen, Code, Coffee, Lightbulb, User, Calendar, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: BookOpen, label: "Year of Study", value: "2nd Year", color: "text-blue-400", bgColor: "bg-blue-400/10", borderColor: "border-blue-400" },
    { icon: Code, label: "Languages Learning", value: "5+", color: "text-purple-400", bgColor: "bg-purple-400/10", borderColor: "border-purple-400" },
    { icon: Coffee, label: "Projects Built", value: "10+", color: "text-orange-400", bgColor: "bg-orange-400/10", borderColor: "border-orange-400" },
    { icon: Lightbulb, label: "Ideas & Counting", value: "∞", color: "text-pink-400", bgColor: "bg-pink-400/10", borderColor: "border-pink-400" }
  ];

  const funFacts = [
    { icon: "☕", text: "Debug better with coffee (scientifically proven)", gradient: "from-orange-400 to-amber-400" },
    { icon: "🎮", text: "Love solving coding challenges in my free time", gradient: "from-purple-400 to-pink-400" },
    { icon: "📚", text: "Always have 3+ programming books on my reading list", gradient: "from-blue-400 to-cyan-400" }
  ];

  const timeline = [
    { 
      year: "2024", 
      description: "Started CS degree, learned HTML/CSS & C", 
      color: "bg-blue-500",
      shadowColor: "shadow-blue-500/30"
    },
    { 
      year: "2025", 
      description: "Learn JS & React, built React JS apps", 
      color: "bg-purple-500",
      shadowColor: "shadow-purple-500/30"
    }
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-slate-950 text-white min-h-screen" id='about'>
      
      {/* Left Column - Main Content */}
      <div className="w-full lg:w-1/2 space-y-8">
        
        {/* About Me Section */}
        <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 hover:shadow-emerald-400/10 hover:-translate-y-1 transition-all duration-300 hover:border-emerald-400/60">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                About me
              </h3>
            </div>
            
            <div className="space-y-4 leading-relaxed text-sm sm:text-base text-gray-300">
              <p className="group hover:text-white transition-colors duration-300">
                I'm a passionate Computer Science student in my 2nd year, diving deep into 
                the world of programming and technology. What started as curiosity has grown 
                into a genuine love for creating digital solutions.
              </p>
              <p className="group hover:text-white transition-colors duration-300">
                When I'm not buried in code or attending lectures, you'll find me working on 
                personal projects, exploring new frameworks, or contributing to open-source 
                repositories. I believe that every problem has a solution, and I love the 
                challenge of finding it through code.
              </p>
              <p className="group hover:text-white transition-colors duration-300">
                My journey in tech has just begun, but I'm excited about where it's taking me. 
                I'm always eager to learn new technologies, collaborate with fellow developers, 
                and build something meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-emerald-400" />
            <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Fun Facts About Me
            </h4>
          </div>
          
          <div className="space-y-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="group p-4 rounded-2xl border border-slate-700 hover:border-emerald-400/50 bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-blue-400/20 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {fact.icon}
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                    {fact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Stats & Timeline */}
      <div className="space-y-8 flex flex-col w-full lg:w-1/2 justify-center">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`group relative p-4 sm:p-6 rounded-2xl border-2 ${stat.borderColor} ${stat.bgColor} hover:shadow-xl hover:shadow-${stat.color}/20 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:scale-105 overflow-hidden`}>
                <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                    <IconComponent size={20} className={`sm:w-6 sm:h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white group-hover:scale-105 transition-transform">{stat.value}</p>
                    <p className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">{stat.label}</p>
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-emerald-400" />
            <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-transparent">
              My Coding Timeline
            </h4>
          </div>
          
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start space-x-4">
                  <div className={`w-4 h-4 ${item.color} rounded-full mt-1.5 flex-shrink-0 shadow-lg ${item.shadowColor} group-hover:scale-125 transition-transform`}>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="bg-slate-800/30 border border-slate-700 hover:border-emerald-400/50 rounded-2xl p-4 group-hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors">
                        <span className="font-bold text-emerald-400 text-lg">{item.year}: </span>
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-12 bg-gradient-to-b from-slate-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm rounded-3xl p-6 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 text-center">
          <Target className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-emerald-400 mb-2">Let's Connect!</h4>
          <p className="text-gray-300 text-sm">
            Always excited to collaborate on interesting projects and learn from fellow developers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About