import { FaRegHandPeace } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiArrowDown } from "react-icons/hi";
import Typewriter from 'typewriter-effect';
import { HashLink } from "react-router-hash-link";
import { BiDownload, BiLogoInstagram } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useStateValues } from '../utils/Provider';


export default function Home() {

  useEffect(()=> {
    AOS.init({duration: 1000})
})
const [{ hamburger, abc }, dispatch] = useStateValues();

	if (abc) { console.log(hamburger) }

  return (
    <div onClick={() => {
      dispatch({
        type: "SET_HAMBURGER",
        hamburger: false,
      })
    }}
    id="home" className="relative dark:text-black h-[90vh] overflow-x-hidden h-content cursor-pointer items-center flex-col flex w-[100vw]">
      <div className="flex flex-col md:w-[90vw] mx-auto md:gap-[5rem] lg:gap-0 lg:flex-row-reverse  items-center xs:gap-8 gap-5">
        <div className="h-[7rem] xs:h-[9rem] xs:mt-[2rem] mt-3 md:mt-[4rem] md:h-[15rem] lg:h-[20rem] lg:mt-[2rem] ">
          <img data-aos='fade-up' data-aos-duration="1000"
            alt="" className="h-full rounded-full"
            src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais" />
        </div>

        <div className="flex flex-col w-[90vw] mx-auto h-full lg:gap-6 gap-4 justify-center items-center ">
          <h1 data-aos='fade-up' data-aos-duration="1000" className=" md:text-[3rem]  lg:mt-[6rem] text-3xl justify-center flex items-center gap-2 font-extrabold">
            <FaRegHandPeace className="animate-bounce" /> Hello, I'm Sneha Jain</h1>
          <p data-aos='fade-up' data-aos-duration="1000"
            className=" md:text-[2rem] text-xl text-green-500  font-bold">Full Stack Web Developer</p>
          <span className='italic font-semibold  text-center lg:ml-[1.7rem] flex text-[1rem] ml-[1.7rem] h-[2rem] lg:w-[24rem] w-9/12 md:text-[1.5rem]'>
            <span>I &nbsp;</span>
            <Typewriter
              options={{
                strings: ['enjoy tackling coding challenges.', 'build tech websites.', 'design and code beautifully simple things', 'love what I do.'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div data-aos='fade-up' data-aos-duration="1000"
            className="flex md:text-[2.1rem]  lg:mt-[1.5rem] text-[1.7rem] md:mt-20 mt-6 gap-8">
            <a href='https://www.instagram.com/_._sneha__jain_._/' target="_blank" rel="noopener noreferrer"> <BiLogoInstagram className="logo" />  </a>
            <a href='https://github.com/Snehajain28' target="_blank" rel="noopener noreferrer"> <FiGithub className="logo" />  </a>
            <a href='https://www.linkedin.com/in/sneha-jain-65b87a228/' target="_blank" rel="noopener noreferrer"><FiLinkedin className="logo" />  </a>
            <a href="mailto:snehajain28022004@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail className="logo" /></a>
          </div>
          <a href='https://drive.google.com/file/d/1cw-zd0ZTRtwU9g3S6q297jQ-B5RjU_ex/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-100 hover:bg-gray-200  flex gap-3 items-center text-black rounded-lg py-1 xs:py-2 xs:mt-0 mt-1 px-3 font-semibold">
              Resume  <BiDownload size={25} />
            </button>
          </a>
        </div>
      </div>
      <HashLink to={'#about'} smooth>
        <HiArrowDown className="animate-bounce md:text-[3rem] mt-[1.7rem]   text-[1.5rem]" />
      </HashLink>
    </div>

  )
}
