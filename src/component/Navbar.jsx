import { useEffect, useState } from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { MdClose, MdContactPhone, MdStackedBarChart } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';
import logo from '../assests/logo.png'
import { useStateValues } from '../utils/Provider';
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [theme, setTheme] = useState(localStorage.theme);
  const [{ hamburger }, dispatch] = useStateValues();

  useEffect(() => {
    if (!theme) {
      setTheme('light')
      dispatch({
        type: "SET_MODE",
        mode: theme,
      })
    }
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
    dispatch({
      type: "SET_MODE",
      mode: theme,
    })
  }, [theme, dispatch]);

  const themeHandler = () => {
    if (theme === 'dark') {
      localStorage.setItem("theme", 'light')
      setTheme("light");
      dispatch({
        type: "SET_MODE",
        mode: theme,
      })
      return;
    }

    localStorage.setItem("theme", 'dark');
    setTheme("dark")
    dispatch({
      type: "SET_MODE",
      mode: theme,
    })
  }


  return (
    <div className="w-full h-[60px] dark:bg-[#0f0f0f] shadow-lg md:h-[70px] stcky top-0 z-50 ">
      <nav className="flex items-center justify-between  h-full ">
        <Link to={'/#home'}> <img
          className=" h-[3rem] md:h-[4rem] md:ml-[2rem] rounded-full  ml-[1rem] object-fit object-contain "
          src={logo} alt='' />
        </Link>
        <div className=''>
          <ul
            className=" hidden md:flex items-center  w-auto z-50 p-0  gap-2" >
            <HashLink smooth to={'/#home'}
              className=" font-semibold hover:font-bold  px-5 lg:px-10  text-[#767676] hover:underline underline-offset-[5px]  hover:text-[#262626] md:border-r-[2px] border-r-gray-300"
            >
              <li>{"Home"}</li>
            </HashLink>
            <HashLink to={'/#about'} smooth
              className=" font-semibold hover:font-bold  px-5  lg:px-10 text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
            >
              <li>{"About"}</li>
            </HashLink>
            <HashLink smooth
              className="font-semibold hover:font-bold  px-5 lg:px-10 text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
              to={'/#tech'} >
              <li>{"Tech Stack"}</li>
            </HashLink>
            <HashLink smooth
              className=" font-semibold hover:font-bold  px-5 lg:px-10  text-[#767676] hover:underline hover:text-[#262626] underline-offset-[5px]  md:border-r-[2px] border-r-gray-300"
              to={'/#projects'} >
              <li>{"Projects"}</li>
            </HashLink>
            <HashLink smooth
              className="font-semibold lg:px-10 px-5 hover:font-bold text-[#767676] hover:underline hover:text-[#262626] md:border-r-[2px] underline-offset-[5px]  border-r-gray-300 "
              to={'/#contact'} >
              <li>{"Contact"}</li>
            </HashLink>
            <button type="button" onClick={themeHandler} className="text-lg font-semibold dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{theme === "light" ? '💡 Light' : '🌙 Dark'}</button>

          </ul>

          {
            !hamburger ?
              (<HiMenuAlt2 size={30}
                onClick={() => {
                  dispatch({
                    type: "SET_HAMBURGER",
                    hamburger: true,
                  })
                }}
                className=" sm:hidden text-black cursor-pointer absolute top-4 right-[3rem]"
              />) :
              (
                <MdClose size={30}
                  onClick={() => {
                    dispatch({
                      type: "SET_HAMBURGER",
                      hamburger: false,
                    })
                  }}
                  className="sm:hidden text-black cursor-pointer absolute top-4 right-[3rem]"
                />
              )
          }
          {/* hamburger Menu  */}
          {hamburger && (
            <div className="fixed -top-1 right-2 md:hidden  mt-[4rem] bg-gray-200 bg-opacity-80 z-50">
              <div
                className="  px-8  relative" >
                <ul className=" flex flex-col gap-4 py-[1.5rem]">
                  <button type="button" onClick={themeHandler} className="text-lg font-semibold dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{theme === "light" ? '💡 Light' : '🌙 Dark'}</button>
                  <HashLink className='flex border-b-[1px] border-black items-center gap-2'
                    to={'/#home'} smooth
                    onClick={() => {
                      dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })
                    }}
                  >
                    <BiHome />{"Home"}
                  </HashLink>
                  <HashLink className='flex border-b-[1px] border-black items-center gap-2'
                    to={'/#about'} smooth
                    onClick={() => {
                      dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })
                    }}
                  >
                    <BiUserCircle />{"About"}
                  </HashLink>
                  <HashLink className='flex border-b-[1px] border-black items-center gap-2'
                    to={'/#tech'} smooth
                    onClick={() => {
                      dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })
                    }}
                  >
                    <MdStackedBarChart />{"Tech Stack"}
                  </HashLink>

                  <HashLink className='flex border-b-[1px] border-black items-center gap-2'
                    to={'/#projects'} smooth
                    onClick={() => {
                      dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })
                    }}
                  >
                    <FaProjectDiagram />{"Projects"}
                  </HashLink>

                  <HashLink className='flex  border-b-[1px] border-black  items-center gap-2'
                    to={'/#contact'} smooth
                    onClick={() => {
                      dispatch({
                        type: "SET_HAMBURGER",
                        hamburger: false,
                      })
                    }}
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
