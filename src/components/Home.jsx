import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-purple-500/5" />

      <div className="mb-8 z-50 mt-15 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-purple-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-emerald-400">
            SC
          </div>
        </div>
      </div>

    
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl z-50 font-bold mb-6 bg-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  Shivam Chaudhary
</h1>

      <p className="text-xl md:text-2xl text-slate-300 mb-4 z-50">
        Frontend Developer{" "}
      </p>

      <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto z-50 items-center text-center">
        Currently learning Frontend development and building projects with
        modern technologies. Passionate about creating efficient client-side
        solutions and exploring system design concepts.
      </p>

      <div className="flex justify-center space-x-4 mb-8 z-50">
        <button
          className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-emerald-500  py-4 px-6 flex text-white rounded-xl"
          onClick={() =>
            window.open("https://github.com/freakkyshivam", "_blank")
          }
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </button>

        <button
          className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-blue-500 py-4 text-center px-6 flex justify-center text-white rounded-xl"
          onClick={() =>
            window.open("https://linkedin.com/in/shivamchaudhary", "_blank")
          }
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </button>

        <button
          className="bg-slate-800 border-slate-700 hover:bg-slate-700 hover:border-purple-500 py-4 px-6 flex text-white rounded-xl"
          onClick={() => scrollToSection("contact")}
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 z-50">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold p-3 rounded-xl">
          View My Work
        </button>

        <button className="bg-transparent border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 p-3 rounded-xl border ">
          Learn More
        </button>
      </div>

      <div className="animate-bounce">
        <ArrowDown className="w-6 h-6 mx-auto text-slate-400" />
      </div>
    </section>
  );
};

export default Home;
