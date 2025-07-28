import React from 'react'

const Learning = () => {

       const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Git & GitHub",
    "C/C++",
    
    "Problem Solving"
  ];

  return (
    <section className="flex flex-col justify-center gap-4 p-5 bg-slate-950 text-white text-center ">
      
          <div className="mt-8 flex  flex-col justify-center gap-4 border border-emerald-400 hover:shadow-lg transition-shadow rounded-2xl py-5 ">
              <h3 className="text-3xl font-semibold  text-emerald-400 mb-4">Current Skills</h3>
              <div className="flex justify-center flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-transparent rounded-full text-sm font-medium shadow-sm border border-emerald-400 hover:shadow-md transition-shadow hover:bg-slate-800/50 text-slate-300 cursor-pointer  "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            
                  <div className="mt-8 p-6  rounded-2xl border border-emerald-400 hover:shadow-lg transition-shadow">
                    <h4 className="text-3xl font-semibold  text-emerald-400 mb-4">Currently Learning</h4>
                    <div className="flex justify-center  flex-wrap gap-2 mt-3.5 px-4 py-2 bg-transparent rounded-full text-sm font-medium shadow-sm  ">
                      {['Mastering React.js', 'Typescript', 'DSA Using C/C++', 'Problem Solving'].map((tech, index) => (
                        <span key={index} className="px-4 py-2 rounded-full text-sm  border border-emerald-400 font-medium text-slate-300 shadow-sm  hover:bg-slate-600 hover:shadow-md transition-shadow">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>


                     <div className="mt-12 text-center">
          <div className="bg-transparent rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-emerald-400">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Why I Code</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Programming isn't just about writing code for me—it's about solving problems, 
              creating solutions, and bringing ideas to life. Every project I work on teaches 
              me something new, and I'm excited to continue this journey of learning and growth 
              in the world of technology.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Learning