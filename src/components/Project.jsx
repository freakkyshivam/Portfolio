import React from 'react'
import { Calendar, ExternalLink, Github } from 'lucide-react'

const Project = () => {

     const project = [
    {
      id: 1,
      title: "Gemini-clone",
      description: "I built a Gemini AI clone  with features like real-time chat UI, voice/text input, and AI responses powered by external APIs. Built with modern React patterns and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Tailwind", "JavaScript", "API"],
      githubUrl: "#",
      liveUrl: "#",
      date: "July 2025",
      status: "in-progress",
    
    },
        {
      id: 2,
      title: "AI Chat Bot",
      description: "Intelligent chatbot using natural language processing. Features context awareness, multi-language support, and learning capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      technologies: ['HTML', 'CSS', 'JavaScript', "Google TTS", 'API'],
     
      githubUrl: "#",
      liveUrl: "#",
      date: "May 2025",
      status: "completed",
      
    },

      {
      id: 3,
      title: "Keeper App",
      description: "I developed a Keeper App using React and CSS to add, delete, and manage notes with a clean, responsive interface inspired by Google Keep.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ['React', 'CSS', 'JavaScript'],
      
      githubUrl: "#",
      liveUrl: "#",
      date: "Jun 2025",
      status: "completed",
       
    },

      {
      id: 4,
      title: "News App",
      description: "I created a News App using React, Tailwind CSS, and a news API that displays the latest headlines with category-based filtering and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ['React','Tailwind', 'CSS', 'JavaScript', "API"],
      
      githubUrl: "#",
      liveUrl: "#",
      date: "July 2024",
      status: "completed",
       
    },

    
    {
      id: 5,
      title: "Personal Portfolio",
      description: "My personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ['HTMl', 'CSS', 'JavaScript'],
    
      githubUrl: "#",
      liveUrl: "#",
      date: "Dec 2024",
      status: "completed",
      
    },

   

      {
      id: 6,
      title: "Recipe App",
      description: "I created a Recipe App that fetches recipes from an external API, allowing users to search and view detailed cooking instructions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ['HTML', 'CSS', 'JavaScript', "API"],
      
      githubUrl: "#",
      liveUrl: "#",
      date: "Jan 2025",
      status: "completed",
       
    },

    {
      id: 7,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive charts, and beautiful UI animations. Integrates with multiple weather APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      
      githubUrl: "#",
      liveUrl: "#",
      date: "March 2024",
      status: "completed",
      stars: 18,
      views: 89
    },
        
  
  ];

   const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };


  return (
     
    <section className="bg-slate-950 text-white p-5">
        <h1 className='text-3xl text-emerald-400 font-semibold text-center mb-10 mt-10'>Projects</h1>
             
      <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        {project.map((proj) => (
          <div key={proj.id} className="p-6 border border-emerald-400 rounded-lg shadow">
            <div className="flex justify-between items-start mb-3">
                
              <h3 className="text-xl font-bold  group-hover:text-emerald-400 transition-colors">
                {proj.title}
                
              </h3>
            </div>
            <p className=" text-sm leading-relaxed mb-4 line-clamp-3">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-emerald-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
               
                <Calendar size={14} className="mr-1" />
                {proj.date}
              </div>
               <div className=" ">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(proj.status)}`}>
                    {proj.status === 'in-progress' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
              <div className="flex space-x-3">
                <a
                  href={proj.githubUrl}
                  className="p-2 bg-gray-100 text-black rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 group/btn"
                  title="View Code"
                >
                
                  <Github size={16} />
                </a>
                <a
                  href={proj.liveUrl}
                  className="p-2 bg-blue-100 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 group/btn"
                  title="Live Demo"
                >
                  
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project