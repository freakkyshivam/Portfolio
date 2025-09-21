import React from "react";
import { Calendar, ExternalLink, Github, Folder, Star, Code2, Sparkles } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Blog App",
      description:
        "A full-stack blog application with user authentication, rich text editing, image uploads, and comment system. Features modern UI with dark mode support and responsive design.",
      image: "./public/img/Gemini_Generated_Image_of1s1eof1s1eof1s.png",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary", "Tailwind CSS"],
      githubUrl: "https://github.com/freakkyshivam/Blog-app",
      liveUrl: "https://blog-4v8gkakz0-shivam-chaudharys-projects-6fb9415e.vercel.app/",
      date: "Sep 2025",
      status: "completed",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI Chat Bot",
      description:
        "Intelligent chatbot using natural language processing with context awareness, multi-language support, voice recognition, and learning capabilities for enhanced user interaction.",
      image:
        "https://media.istockphoto.com/id/1406732954/photo/ai-chatbot-intelligent-digital-customer-service-application-concept.jpg?s=612x612&w=0&k=20&c=psfjSutkYy4cxnY8xVFLCc1i-ekx4q6SJnYRMDV0Dm8=",
      technologies: ["HTML", "CSS", "JavaScript", "Google TTS", "API"],
      githubUrl: "https://github.com/freakkyshivam/AI-Girlfriend",
      liveUrl: "https://ai-girlfriend-phi.vercel.app/",
      date: "May 2025",
      status: "completed",
      featured: false,
      category: "AI/ML"
    },

    {
      id: 3,
      title: "Note Keep App",
      description:
        "I developed a Keeper App using React and CSS to add, delete, and manage notes with a clean, responsive interface inspired by Google Keep.",
      image:
        "https://clickup.com/blog/wp-content/uploads/2024/05/Note-Taking-Apps-Featured-Image.png",
      technologies: ["React", "CSS", "JavaScript"],

      githubUrl: "https://github.com/freakkyshivam/Note-keep",
      liveUrl: "https://freakkyshivam.github.io/Note-keep/",
      date: "Jun 2025",
      status: "completed",
    },
    {
      id: 4,
      title: "Recipe Finder App",
      description:
        "A dynamic recipe discovery app that fetches data from external APIs, featuring advanced search filters, nutritional information, and step-by-step cooking instructions with beautiful UI.",
      image:
        "https://media.istockphoto.com/id/506791876/vector/healthy-recipes-cookbook.jpg?s=612x612&w=0&k=20&c=llybmVSa3apFAPHaRx9MGJv4wlKIYfYiqugSHh_uuhc=",
      technologies: ["HTML", "CSS", "JavaScript", "REST API"],
      githubUrl: "https://github.com/freakkyshivam/Recipe-finder",
      liveUrl: "https://freakkyshivam.github.io/Recipe-finder/",
      date: "Jan 2025",
      status: "completed",
      featured: false,
      category: "Frontend"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive charts, and beautiful UI animations. Integrates with multiple weather APIs.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/003/482/450/small/cloudscape-blue-sky-with-cloud-and-sun-paper-art-style-vector.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "API"],

      githubUrl: "https://github.com/freakkyshivam/Weather-app",
      liveUrl: "https://weather-app-psi-ruby-16.vercel.app/",
      date: "March 2024",
      status: "completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-400/30";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-400/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400/30";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-purple-500/20 text-purple-400 border-purple-400/30";
      case "AI/ML":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case "Frontend":
        return "bg-pink-500/20 text-pink-400 border-pink-400/30";
      default:
        return "bg-emerald-500/20 text-emerald-400 border-emerald-400/30";
    }
  };

  return (
    <section className="bg-slate-950 text-white p-5 min-h-screen" id="project">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Folder className="w-8 h-8 text-emerald-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <Sparkles className="w-8 h-8 text-emerald-400" />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work, featuring full-stack applications, AI integrations, and creative solutions
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className={`group relative bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/60 ${proj.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            {/* Featured Badge */}
            {proj.featured && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-emerald-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </div>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Category Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(proj.category)}`}>
                {proj.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  {proj.title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors">
                {proj.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {proj.technologies.slice(0, 6).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full text-xs font-medium border border-slate-700 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
                {proj.technologies.length > 6 && (
                  <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-400/30">
                    +{proj.technologies.length - 6} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-2" />
                    {proj.date}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proj.status)}`}
                  >
                    {proj.status === "in-progress" ? "In Progress" : "Completed"}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => window.open(`${proj.githubUrl}`, "_blank")}
                    className="group/btn p-3 bg-slate-800/50 border border-slate-700 text-gray-300 rounded-xl hover:bg-slate-700 hover:text-white hover:border-emerald-400/50 transition-all duration-300 hover:scale-110"
                    title="View Code"
                  >
                    <Github size={16} />
                  </button>
                  <button
                    onClick={() => window.open(`${proj.liveUrl}`, "_blank")}
                    className="group/btn p-3 bg-emerald-400/20 border border-emerald-400/30 text-emerald-400 rounded-xl hover:bg-emerald-400 hover:text-white hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 hover:scale-110"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-emerald-400/30 rounded-2xl hover:border-emerald-400/60 transition-all duration-300">
          <Github className="w-5 h-5 text-emerald-400" />
          <span className="text-gray-300">View more projects on my</span>
          <a 
            href="https://github.com/freakkyshivam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-white font-semibold transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;