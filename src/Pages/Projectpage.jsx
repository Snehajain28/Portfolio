import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { BiRocket } from 'react-icons/bi'
import { useStateValues } from '../utils/Provider';

export default function Projectpage({ data }) {

  const [{ hamburger, abc }, dispatch] = useStateValues();

  if (abc) { console.log(hamburger) }

  return (
    <div onClick={() => {
      dispatch({
        type: "SET_HAMBURGER",
        hamburger: false,
      })
    }}
      className='h-[100vh] w-[100vw] dark:bg-black '>
      <div
        className='w-[90vw] lg:w-[80vw] items-center  md:p-10 mb-8 flex flex-col rounded-lg mx-auto p-3'>
        <img
          className='w-[22rem] md:w-[40rem] md:h-[20rem] h-[10rem] object-fit object-cover rounded-lg shadow-lg border'
          alt=''
          src={data.src}>
        </img>
        <div className='flex flex-col md:gap-4 w-full lg:justify-between  md:my-5 md:ml-4 ml-2 lg:flex-row'>
          <p className="text-[1.5rem] md:text-[2.5rem] lg:ml-10  mt-3 text-gray-900 font-semibold dark:text-gray-100 mb-8" >{data.name}</p>
          <div className='flex flex-wrap lg:w-[26rem] lg:mt-[2rem]  mt-[-1rem] gap-4 '>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90'>react</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>mern</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>full stack</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>tailwind</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>web dev</span>
          </div>
        </div>
        <div className='flex gap-6 m-4 my-6' >
          <a href={data.github} target='_blank' rel="noopener noreferrer">
            <p className='flex items-center p-2 md:text-lg md:px-4 md:py-3 text-sm font-semibold rounded-lg gap-2 border border-gray-900 dark:bg-[#212121]'><FiGithub size={20} />GitHub</p>
          </a>
          <a href={data.link} target='_blank' rel="noopener noreferrer">
            <p className='flex border-gray-900 border items-center p-2  md:text-lg md:px-4 md:py-3 text-sm font-semibold  rounded-lg gap-2 border-gray-900 dark:bg-[#212121]'><BiRocket size={20} />Visit</p>
          </a>
        </div>
        <p className='text-sm  md:text-lg md:w-9/12  md:mt-7  mx-auto leading-6 my-2'>
          {data.descrption}
        </p>
      </div>
    </div>
  )
}
