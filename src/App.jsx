import { useState } from 'react'
import Home from './components/Home.jsx' 
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  

  return (
    <>
    <Header/>
   <Home/>
   <About/>
   <Skills/>
   <Project/>

   <Footer/>
    </>
  )
}

export default App
