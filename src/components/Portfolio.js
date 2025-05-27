import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Certificate from './Certificate'

const Portfolio = () => {
  return (
    <>
      <div>
          <AboutMe/>
          <HeroSection/>
          <Skills/>
          <Experience/>
          <Contact/>
          <Certificate/>
      </div>
    </>
  )
}

export default Portfolio