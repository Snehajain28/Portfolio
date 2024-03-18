import {FaRegHandPeace } from "react-icons/fa";
import { FiGithub,  FiLinkedin, FiMail } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { HashLink } from "react-router-hash-link";
import file from '../assests/Sneha Jain.pdf'
import { BiDownload, BiLogoInstagram} from "react-icons/bi";


export default function Home() {

  return (
    <div id="home" className=" h-[100vh] w-[100vw]" >
      <div className="flex h-full items-center flex-col">
        <div className="h-[70px]"></div>

        <div className="flex lg:flex-row  flex-col  gap-20 justify-evenly items-center mt-[5rem] lg:mt-0 w-11/12 mx-auto ">
          <div className="flex flex-col h-full lg:gap-6 gap-4 justify-center items-center ">
            <h1 data-aos='fade-up' data-aos-duration="1000" className=" md:text-[3rem]  lg:mt-[6rem] text-3xl justify-center flex items-center gap-2 font-extrabold">
              <FaRegHandPeace className="animate-bounce"  /> Hello, I'm Sneha Jain</h1>
              <p data-aos='fade-up' data-aos-duration="1000"
              className=" md:text-[2rem] text-xl text-green-500  font-bold">Full Stack Web Developer</p>
            <span className='italic font-semibold  text-center lg:ml-[1.7rem] flex text-[1rem] ml-[1.7rem] h-[2rem] lg:w-[24rem] w-9/12 md:text-[1.5rem]'>
              <span>I &nbsp;</span>
              <Typewriter
                options={{
                  strings: [ 'enjoy tackling coding challenges.', 'build tech websites.', 'design and code beautifully simple things', 'love what I do.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <div data-aos='fade-up' data-aos-duration="1000"
            className="flex md:text-[2.1rem]  lg:mt-[1.5rem] text-[1.7rem] md:mt-20 mt-6 gap-8">
              <a href='https://www.instagram.com/_._sneha__jain_._/' target="_blank" rel="noopener noreferrer"> <BiLogoInstagram className="logo"/>  </a>
              <a href='https://github.com/Snehajain28' target="_blank" rel="noopener noreferrer"> <FiGithub className="logo"/>  </a>
              <a href='https://www.linkedin.com/in/sneha-jain-65b87a228/' target="_blank" rel="noopener noreferrer"><FiLinkedin className="logo"/>  </a>
              <a href="mailto:snehajain28022004@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail className="logo" /></a>
            </div>
            <a href={file} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-100 flex gap-3 items-center text-black rounded-lg py-1  mt-4 px-3 font-semibold">
                Resume  <BiDownload size={25}/>
              </button>
            </a>
          </div>

          <div className="h-[10rem]  md:h-[15rem] lg:h-[20rem]  lg:mt-[2rem] mt-[-2.5rem]">
            <img data-aos='fade-up' data-aos-duration="1000"
              alt="" className="h-full object-fit object-cover object-contain rounded-full"
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais" />
          </div>
        </div>

        <HashLink to={'#about'} smooth
          className=" h-[3rem] md:text-[3rem] lg:mt-[1rem] md:mt-[-20rem] mt-[-12rem] ">
          <HiArrowDown className="animate-bounce" />
        </HashLink>
        
      </div>
    </div>
  )
}
