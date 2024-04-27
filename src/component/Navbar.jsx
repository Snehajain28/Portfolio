import { useEffect, useState } from 'react'
import { FaProjectDiagram } from "react-icons/fa";
import { MdClose, MdContactPhone, MdStackedBarChart } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { HashLink } from 'react-router-hash-link';
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
    <div className="w-full h-[60px] sticky top-0 z-50 bg-white  dark:bg-black dark:shadow-blue-900 dark:shadow-sm shadow-lg md:h-[70px] ">
      <nav className="flex h-full w-[90vw] mx-auto items-center justify-between  ">
        <Link to={'/#home'}> <img
          className=" h-[2.5rem] dark:h-[3.4rem] md:h-[4rem] md:ml-[2rem] rounded-full ml-[1rem] object-fit object-contain "
          src={`${theme === 'light'?
             "data:image/png;base64,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" : "data:image/jpeg;base64,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"}`}
          alt='' />
        </Link>
        <div className=''>
          <ul className=" hidden md:flex md:gap-1 items-center  gap-2" >
            <HashLink smooth to={'/#home'}
              className=" font-semibold hover:font-bold dark:text-gray-200  px-5 lg:px-10  text-[#767676] hover:underline underline-offset-[5px] dark:hover:text-white   hover:text-[#262626] md:border-r-[2px] border-r-gray-300"
            >
              <li>{"Home"}</li>
            </HashLink>
            <HashLink to={'/#about'} smooth
              className=" font-semibold hover:font-bold px-3 dark:text-gray-200  lg:px-10 text-[#767676] hover:underline hover:text-[#262626] dark:hover:text-white    underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
            >
              <li>{"About"}</li>
            </HashLink>
            <HashLink smooth
              className="font-semibold hover:font-bold px-3 dark:text-gray-200 lg:px-10 text-[#767676] hover:underline hover:text-[#262626] dark:hover:text-white    underline-offset-[5px]  md:border-r-[2px] border-r-gray-300 "
              to={'/#tech'} >
              <li>{"Tech Stack"}</li>
            </HashLink>
            <HashLink smooth
              className=" font-semibold hover:font-bold px-3 lg:px-10 dark:text-gray-200 text-[#767676] hover:underline hover:text-[#262626] dark:hover:text-white    underline-offset-[5px]  md:border-r-[2px] border-r-gray-300"
              to={'/#projects'} >
              <li>{"Projects"}</li>
            </HashLink>
            <HashLink smooth
              className="font-semibold lg:px-10  px-3 hover:font-bold dark:text-gray-200 text-[#767676] hover:underline hover:text-[#262626] dark:hover:text-white    md:border-r-[2px] underline-offset-[5px]  border-r-gray-300 "
              to={'/#contact'} >
              <li>{"Contact"}</li>
            </HashLink>
            <button type="button" onClick={themeHandler} className="text-lg font-semibold ml-4 dark:bg-gray-900 dark:text-gray-100 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{theme === "dark" ? '💡 Light' : '🌙 Dark'}</button>

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
                className=" sm:hidden dark:text-white cursor-pointer absolute top-4 right-[3rem]"
              />) :
              (
                <MdClose size={30}
                  onClick={() => {
                    dispatch({
                      type: "SET_HAMBURGER",
                      hamburger: false,
                    })
                  }}
                  className="sm:hidden  dark:text-white cursor-pointer absolute top-4 right-[3rem]"
                />
              )
          }
          {/* hamburger Menu  */}
          {hamburger && (
            <div className="fixed -top-1 right-2 md:hidden  mt-[4rem] bg-gray-200 bg-opacity-80 z-50">
              <div
                className="  px-8  relative" >
                <ul className=" flex flex-col gap-4 py-[1.5rem]">
                  <button type="button" onClick={themeHandler} className="text-lg font-semibold dark:bg-gray-900 dark:text-gray-100 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{theme === "dark" ? '💡 Light' : '🌙 Dark'}</button>
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
