import { FaGithub, FaInstagram, FaLinkedinIn, FaRegHandPeace } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { HashLink } from "react-router-hash-link";
import file from '../assests/Sneha Jain.pdf'




export default function Home() {

  return (
    <div id="home" className="h-[100vh] w-[100vw]" >
      <div className="flex h-full items-center flex-col">
        <div className="h-[70px]"></div>
        <div className="flex lg:flex-row  flex-col  gap-20 justify-evenly items-center mt-[5rem] w-11/12 mx-auto ">
          <div className="flex flex-col h-full  gap-6 justify-center items-center ">
            <h1 className=" md:text-5xl lg:mt-[7rem] text-3xl justify-center flex items-center gap-2 font-bold">
              <FaRegHandPeace className="animate-bounce" /> Hey I'm Sneha Jain</h1>
            <span className='italic  text-center lg:ml-[2rem] flex text-[1rem] ml-[1.7rem] h-[2rem] lg:w-[24rem] w-9/12 md:text-[1.5rem]'>
              <span>I &nbsp;</span>
              <Typewriter
                options={{
                  strings: ['m a full stack web developer.', 'enjoy tackling coding challenges.', 'build tech websites.', 'design and code beautifully simple things', 'love what I do.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <div className="flex md:text-[2.2rem]  lg:mt-[7rem] text-[2rem] md:mt-20 mt-10 gap-10">
              <a href ='https://www.instagram.com/_._sneha__jain_._/' target = "_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href ='https://github.com/Snehajain28' target = "_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a href ='https://www.linkedin.com/in/sneha-jain-65b87a228/' target = "_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a>
              <a href="mailto:snehajain28022004@gmail.com" target = "_blank" rel="noopener noreferrer"><FiMail/></a>
            </div>
            <a  href = {file} target = "_blank" rel="noopener noreferrer">
              <button className="bg-gray-300 text-black rounded-lg py-1  mt-4 px-3 font-semibold">
                Download Resume
              </button>
            </a>
          </div>
          
          <div className="h-[10rem]  md:h-[15rem] lg:h-[20rem] mt-[-2rem]">
            <img alt="" className="h-full object-fit object-cover object-contain rounded-full"
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais" />
          </div>
        </div>
        <HashLink  to={'#about'} smooth
        className=" h-[3rem] md:text-[3rem] lg:mt-[-1rem] md:mt-[-20rem] mt-[-12rem] ">
          <HiArrowDown  className="animate-bounce" />
        </HashLink>
      </div>
    </div>
  )
}
