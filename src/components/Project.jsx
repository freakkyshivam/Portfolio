import React from 'react'
import { Calendar, ExternalLink, Github } from 'lucide-react'
import { style } from 'motion/react-client';

const Project = () => {

     const project = [
    {
      id: 1,
      title: "Gemini-clone",
      description: "I built a Gemini AI clone  with features like real-time chat UI, voice/text input, and AI responses powered by external APIs. Built with modern React patterns and responsive design.",
      image: "https://cdn.mos.cms.futurecdn.net/oWKefF8dea8zZNxRdp8rsG.jpg",
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
      image: "https://media.istockphoto.com/id/1406732954/photo/ai-chatbot-intelligent-digital-customer-service-application-concept.jpg?s=612x612&w=0&k=20&c=psfjSutkYy4cxnY8xVFLCc1i-ekx4q6SJnYRMDV0Dm8=",
      technologies: ['HTML', 'CSS', 'JavaScript', "Google TTS", 'API'],
     
      githubUrl: "https://github.com/freakkyshivam/AI-Girlfriend",
      liveUrl: "https://ai-girlfriend-phi.vercel.app/",
      date: "May 2025",
      status: "completed",
      
    },

      {
      id: 3,
      title: "Note Keep App",
      description: "I developed a Keeper App using React and CSS to add, delete, and manage notes with a clean, responsive interface inspired by Google Keep.",
      image: "https://clickup.com/blog/wp-content/uploads/2024/05/Note-Taking-Apps-Featured-Image.png",
      technologies: ['React', 'CSS', 'JavaScript'],
      
      githubUrl: "https://github.com/freakkyshivam/Note-keep",
      liveUrl: "https://freakkyshivam.github.io/Note-keep/",
      date: "Jun 2025",
      status: "completed",
       
    },

      {
      id: 4,
      title: "News App",
      description: "I created a News App using React, Tailwind CSS, and a news API that displays the latest headlines with category-based filtering and responsive design.",
      image:  "https://media.istockphoto.com/id/172763852/photo/good-news.jpg?s=612x612&w=0&k=20&c=ziVzPXpQm2qXspAQAUB8lmmmu_XrFboSjpnB8Y-6-vo=",
      technologies: ['React','Tailwind', 'CSS', 'JavaScript', "API"],
      
      githubUrl: "https://github.com/freakkyshivam/News-app",
      liveUrl: "https://freakkyshivam.github.io/News-app/",
      date: "Jun 2025",
      status: "completed",
       
    },

     {
      id: 5,
      title: "Todos App",
      description: "A simple and intuitive Todo app built with React, allowing users to add, view, and delete tasks. It helps manage daily activities efficiently with a clean and responsive interface.",
      image:  "https://tse2.mm.bing.net/th/id/OIP.Cp0yfRiC2nv3rqb_iBqXWwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      technologies: ['React','Tailwind', 'CSS', 'JavaScript'],
      
      githubUrl: "https://github.com/freakkyshivam/Todos-app",
      liveUrl: "https://freakkyshivam.github.io/Todos-app/",
      date: "Jun 2025",
      status: "completed",
       
    },

    
    {
      id: 6,
      title: "Personal Portfolio",
      description: "My personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      technologies: ['HTMl', 'CSS', 'JavaScript'],
    
      githubUrl: "https://github.com/freakkyshivam/First-portfolio-HTML-CSS-JS",
      liveUrl: "https://freakkyshivam.github.io/First-portfolio-HTML-CSS-JS/",
      date: "Dec 2024",
      status: "completed",
      
    },

   

      {
      id: 7,
      title: "Recipe Finder App",
      description: "I created a Recipe App that fetches recipes from an external API, allowing users to search and view detailed cooking instructions.",
      image: "https://media.istockphoto.com/id/506791876/vector/healthy-recipes-cookbook.jpg?s=612x612&w=0&k=20&c=llybmVSa3apFAPHaRx9MGJv4wlKIYfYiqugSHh_uuhc=",
      technologies: ['HTML', 'CSS', 'JavaScript', "API"],
      
      githubUrl: "https://github.com/freakkyshivam/Recipe-finder",
      liveUrl: "https://freakkyshivam.github.io/Recipe-finder/",
      date: "Jan 2025",
      status: "completed",
       
    },

    {
      id: 8,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive charts, and beautiful UI animations. Integrates with multiple weather APIs.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/003/482/450/small/cloudscape-blue-sky-with-cloud-and-sun-paper-art-style-vector.jpg",
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      
      githubUrl: "https://github.com/freakkyshivam/Weather-app",
      liveUrl: "https://freakkyshivam.github.io/Weather-app/",
      date: "March 2024",
      status: "completed",
      
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
     
    <section className="bg-slate-950 text-white p-5" id='project'>
        <h1 className='text-3xl text-emerald-400 font-semibold text-center mb-10 mt-10'>Projects</h1>
             
      <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        {project.map((proj) => (
          <div key={proj.id} className={`p-6 border border-emerald-400 rounded-lg shadow `  
          }>
            
            <img src={proj.image} className='h-fit w-full rounded-2xl mb-2 ' />
            
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