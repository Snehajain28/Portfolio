import React from 'react'
import gocart from '../assests/goCart.png'
import Navbar from '../component/Navbar'
import { FiGithub } from 'react-icons/fi'
import { BiRocket } from 'react-icons/bi'

export default function GoCart() {
  return (
    <div className='h-[100vh] w-[100vw] bg-black '>
      <Navbar />
      <div className='h-[70px]'></div>
      <div
        className='w-[99vw] lg:w-[80vw] items-center  md:p-10 mb-8 flex flex-col rounded-lg mx-auto p-3'>
        <img
          className='w-[22rem] md:w-[40rem] md:h-[20rem] h-[10rem] object-fit object-cover rounded-lg mx-auto'
          alt=''
          src={gocart}>
        </img>
        <div className='flex flex-col md:gap-4 w-full lg:justify-between  md:my-5 md:ml-4 ml-2 lg:flex-row'>
          <p className="text-[1.5rem] md:text-[2.5rem] lg:ml-10  mt-3 text-gray-100 font-semibold dark:text-primary-light  mb-8" >Go Cart</p>
          <div className='flex flex-wrap lg:w-[26rem] lg:mt-[2rem]  mt-[-1rem] gap-4 '>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90'>react</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>mern</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>full stack</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>tailwind</span>
            <span className='text-[0.7rem] flex items-center md:text-[1rem] text-blue-200 rounded-full px-3 py-1 bg-blue-900 bg-opacity-90  '>web dev</span>
          </div>
        </div>
        <div className='flex gap-6 m-4 my-6' >
          <a href='https://github.com/Snehajain28/E-commerce-frontend' target='_blank' rel="noopener noreferrer">
            <p className='flex items-center p-2 md:text-lg md:px-4 md:py-3 text-sm font-semibold rounded-lg gap-2 bg-[#212121]'><FiGithub size={20} />GitHub</p>
          </a>
          <a href='https://timely-croissant-687f9b.netlify.app/' target='_blank' rel="noopener noreferrer">
            <p className='flex items-center p-2  md:text-lg md:px-4 md:py-3 text-sm font-semibold  rounded-lg gap-2 bg-[#212121]'><BiRocket size={20} />Visit</p>
          </a>
        </div>
        <p className='text-sm  md:text-lg md:w-9/12  md:mt-7  mx-auto leading-6 my-2'>
        Welcome to Go Cart, the ultimate online shopping destination equipped with a dynamic backend and user-friendly administrative interface. Discover, shop, and effortlessly oversee your store. Experience the future of e-commerce with Go Cart!
             </p>   
      </div>
    </div>
  )
}
