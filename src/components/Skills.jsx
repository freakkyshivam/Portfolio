import React from 'react'
import { Code, BookOpen, Target, Sparkles, TrendingUp, Zap } from 'lucide-react'

const Learning = () => {
  const skills = [
    { name: "HTML & CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Programming" },
    { name: "React.js", level: 60, category: "Frontend" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "Express.js", level: 55, category: "Backend" },
    { name: "Git & GitHub", level: 60, category: "Tools" },
    {name : "Tailwind CSS", level : 50, category:"Frontend"},
    { name: "C/C++", level: 65, category: "Programming" },
    { name: "Problem Solving", level: 55, category: "Core" }
  ];

  const currentlyLearning = [
    { name: 'Mastering React.js', icon: Code, progress: 60 },
    { name: 'TypeScript', icon: Zap, progress: 30 },
    { name: 'DSA Using C/C++', icon: Target, progress: 35 },
    { name: 'Problem Solving', icon: BookOpen, progress: 55 }
  ];

  const getSkillColor = (category) => {
    const colors = {
      Frontend: 'border-blue-400 text-blue-300',
      Backend: 'border-purple-400 text-purple-300',
      Programming: 'border-green-400 text-green-300',
      Tools: 'border-orange-400 text-orange-300',
      Core: 'border-pink-400 text-pink-300'
    };
    return colors[category] || 'border-emerald-400 text-emerald-300';
  };

  return (
    <section className="flex flex-col justify-center gap-8 p-5 bg-slate-950 text-white min-h-screen" id='skills'>
      
      {/* Current Skills Section */}
      <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 rounded-3xl p-8 hover:-translate-y-2 hover:border-emerald-400/60">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-emerald-400" />
          <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Current Skills
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`group relative p-4 rounded-2xl border-2 ${getSkillColor(skill.category)} bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-white group-hover:scale-105 transition-transform">
                    {skill.name}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getSkillColor(skill.category)} bg-slate-800/50`}>
                    {skill.category}
                  </span>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.category === 'Frontend' ? 'bg-blue-400' : 
                      skill.category === 'Backend' ? 'bg-purple-400' : 
                      skill.category === 'Programming' ? 'bg-green-400' : 
                      skill.category === 'Tools' ? 'bg-orange-400' : 'bg-pink-400'}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <span className="text-xs text-gray-400 self-end">{skill.level}%</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning Section */}
      <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 rounded-3xl p-8 hover:-translate-y-2 hover:border-emerald-400/60">
        <div className="flex items-center justify-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-emerald-400" />
          <h4 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Currently Learning
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyLearning.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={index} 
                className="group relative p-6 rounded-2xl border border-emerald-400/50 bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-400 cursor-pointer overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {tech.name}
                    </h5>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{tech.progress}% Progress</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why I Code Section */}
      <div className="border border-emerald-400/30 bg-slate-900/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 rounded-3xl p-8 hover:-translate-y-2 hover:border-emerald-400/60 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-emerald-400" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-transparent">
              Why I Code
            </h3>
            <Sparkles className="w-8 h-8 text-emerald-400" />
          </div>
          
          <div className="relative">
            <p className="text-lg text-gray-300 leading-relaxed relative z-10 font-medium">
              Programming isn't just about writing code for me—it's about solving problems, 
              creating solutions, and bringing ideas to life. Every project I work on teaches 
              me something new, and I'm excited to continue this journey of learning and growth 
              in the world of technology.
            </p>
            
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-purple-400/5 rounded-2xl -m-4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning