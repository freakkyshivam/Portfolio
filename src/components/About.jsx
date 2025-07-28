import React from 'react'
import { BookOpen, Code, Coffee, Lightbulb } from 'lucide-react';
import { motion } from "motion/react"

const About = () => {
  const stats = [
    { icon: BookOpen, label: "Year of Study", value: "2nd Year" },
    { icon: Code, label: "Languages Learning", value: "5+" },
    { icon: Coffee, label: "Projects Built", value: "10+" },
    { icon: Lightbulb, label: "Ideas & Counting", value: "∞" }
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 bg-slate-950 text-white min-h-screen"    >
      
      <motion className="rounded-3xl shadow-xl p-6 sm:p-8 w-full lg:w-1/2"
         
           
      >
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400">About me</h3>
          <div className="space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              I'm a passionate Computer Science student in my 2nd year, diving deep into 
              the world of programming and technology. What started as curiosity has grown 
              into a genuine love for creating digital solutions.
            </p>
            <p>
              When I'm not buried in code or attending lectures, you'll find me working on 
              personal projects, exploring new frameworks, or contributing to open-source 
              repositories. I believe that every problem has a solution, and I love the 
              challenge of finding it through code.
            </p>
            <p>
              My journey in tech has just begun, but I'm excited about where it's taking me. 
              I'm always eager to learn new technologies, collaborate with fellow developers, 
              and build something meaningful.
            </p>
          </div>
          
        
          <div className="mt-8 lg:mt-10 p-4 sm:p-6 bg-transparent rounded-2xl border border-emerald-400 hover:shadow-lg transition-shadow">
            <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-4">Fun Facts About Me:</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>☕ Debug better with coffee (scientifically proven)</li>
              <li>🎮 Love solving coding challenges in my free time</li>
              <li>📚 Always have 3+ programming playlist on my reading list</li>
            </ul>
          </div>
        </div>
      </motion>

       
      <div className="space-y-6 flex flex-col w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 justify-center">
        
         
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="p-4 sm:p-6 rounded-2xl border border-emerald-400 hover:shadow-lg transition-shadow cursor-pointer hover:bg-slate-800/50">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

         
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-transparent border border-emerald-400 rounded-2xl hover:shadow-lg transition-shadow">
          <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-4">My Coding Timeline</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">
                <span className="font-medium">2024:</span> Started CS degree, learned HTML/CSS & C
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">
                <span className="font-medium">2025:</span> Learn JS & React, built React JS app
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About