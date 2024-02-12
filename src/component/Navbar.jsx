import { useState } from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { MdClose, MdContactPhone, MdStackedBarChart } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';
import logo from '../assests/logo.png'


export default function Navbar() {

  const showMenu = true;
  const [sidenav, setSidenav] = useState(false);

  return (
    <div
      className="w-full h-[60px] bg-white md:h-[70px] fixed top-0 z-50 ">
      <nav className="flex items-center justify-between  h-full ">
        <div onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          })
        }}>
          <img className=" h-[3rem] md:h-[4rem] md:ml-[2rem] rounded-full  ml-[1rem] object-fit object-contain "
            src={logo} alt='' />
        </div>
        <div className=''>
          {showMenu && (
            <ul
              className=" hidden md:flex items-center  w-auto z-50 p-0  gap-2" >
              <HashLink smooth to={'#home'}
                className=" font-semibold hover:font-bold  px-5 lg:px-10  text-[#767676] hover:underline underline-offset-[5px]  hover:text-[#262626] md:border-r-[2px] border-r-gray-300"
              >
                <li>{"Home"}</li>
              </HashLink>
              <HashLink to={'#about'} smooth
                className=" font-semibold hover:font-bold  px-5  lg:px-10 text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
              >
                <li>{"About"}</li>
              </HashLink>
              <HashLink smooth
                className="font-semibold hover:font-bold  px-5 lg:px-10 text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
                to={'#tech'} >
                <li>{"Tech Stack"}</li>
              </HashLink>
              <HashLink smooth
                className=" font-semibold hover:font-bold  px-5 lg:px-10  text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300"
                to={'#projects'} >
                <li>{"Projects"}</li>
              </HashLink>
              <HashLink smooth
                className="font-semibold lg:px-10 px-5 hover:font-bold text-[#767676] hover:underline hover:text-[#262626] md:border-r-[2px] underline-offset-[5px]  border-r-gray-300 "
                to={'#contact'} >
                <li>{"Contact"}</li>
              </HashLink>
            </ul>
          )}
          {
            !sidenav ?
              (<HiMenuAlt2 size={30}
                onClick={() => setSidenav(!sidenav)}
                className=" sm:hidden text-black cursor-pointer absolute top-4 right-[3rem]"
              />) :
              (
                <MdClose size={30}
                  onClick={() => setSidenav(!sidenav)}
                  className="sm:hidden text-black cursor-pointer absolute top-4 right-[3rem]"
                />
              )
          }
          {/* hamburger Menu  */}
          {sidenav && (
            <div className="fixed top-0 right-3 md:hidden  mt-[4rem] bg-gray-300 bg-opacity-80 z-50">
              <div
                className="  px-7 py-5relative" >
                <ul className=" flex flex-col gap-5 py-[2rem]">
                  <HashLink className='flex border-b-[1px] items-center gap-2'
                    to={'#home'} smooth
                    onClick={() => setSidenav(false)}
                  >
                    <BiHome />{"Home"}
                  </HashLink>
                  <HashLink className='flex border-b-[1px] items-center gap-2'
                    to={'#about'} smooth
                    onClick={() => setSidenav(false)}
                  >
                    <BiUserCircle />{"About"}
                  </HashLink>
                  <HashLink className='flex border-b-[1px] items-center gap-2'
                    to={'#tech'} smooth
                    onClick={() => setSidenav(false)}
                  >
                    <MdStackedBarChart />{"Tech Stack"}
                  </HashLink>

                  <HashLink className='flex border-b-[1px] items-center gap-2'
                    to={'#projects'} smooth
                    onClick={() => setSidenav(false)}
                  >
                    <FaProjectDiagram />{"Projects"}
                  </HashLink>

                  <HashLink className='flex  items-center gap-2'
                    to={'#contact'} smooth
                    onClick={() => setSidenav(false)}
                  >
                    <MdContactPhone /> {"Contact"}
                  </HashLink>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav >
    </div >
  )
}
