import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx' 
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import { Footer } from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

function App() {
  

  return (
    <Router className='bg-slate-950'>
    <Header/>
       {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
         
        <Route path="/contact" element={<Contact />} />
      
      </Routes> */}
   <Home/>
   <About/>
   <Skills/>
   <Project/>
    <Contact/>
   <Footer/>
    </Router>
  )
}

export default App
