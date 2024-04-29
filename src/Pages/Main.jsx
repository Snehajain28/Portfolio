import React from 'react'
import Home from '../component/Home';
import { HashLink } from 'react-router-hash-link';
import About from '../component/About';
import TechStack from '../component/TechStack';
import Contact from '../component/Contact';
import Project from '../component/Project';


function Main() {
  return (
    <div className=' h-full w-full dark:bg-[#101010] dark:text-white '>
      <HashLink to={'#home'} elementId='home' />
      <HashLink to={'#about'} elementId='about' />
      <HashLink to={'#tech'} elementId='tech' />
      <HashLink to={'#projects'} elementId='projects' />
      <HashLink to={'#contact'} elementId='contact' />
      <Home />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </div>
  )
}

export default Main
