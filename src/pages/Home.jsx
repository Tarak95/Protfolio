import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Work from '../components/Work/Work'
import Contract from '../components/Contract/Contract'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contract />
      
    </div>
  )
}

export default Home
