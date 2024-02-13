import React from 'react'
import foodFun from '../assests/foodFun.png'
import melodymates from '../assests/Melodymates.png'
import gocart from '../assests/goCart.png'
import { Link } from 'react-router-dom'


export default function Project() {
  return (
    <div id='projects'>
      <div className='h-[70px]'></div>
      <div className='w-[100vw] mx-auto'>
        <h2 className="text-4xl text-gray-100 font-bold text-center dark:text-primary-light mt-12 mb-8">
          PROJECTS
        </h2>
        <div data-aos="fade-up"
          data-aos-duration="3000"
          className='w-11/12 md:w-9/12 md:p-10 mb-8 flex flex-col border-[2px] rounded-lg mx-auto p-3'>
          <img
            className='w-[18rem] md:w-[30rem] md:h-[15rem] h-[9rem] object-fit object-cover rounded-lg mx-auto'
            alt=''
            src={foodFun}>
          </img>
          <div>
            <p className="text-[1.5rem] ml-2 mt-3 text-gray-100 font-semibold dark:text-primary-light  mb-8" >Delicious Eats</p>
            <p className='text-sm mt-[-1rem] leading-6 my-7'>
              Introducing Delicious Eats: Your new favorite food delivery app! I've crafted it using MERN stack technology. Connect with various restaurants and savor pure vegetarian options. Welcome to Delicious Eats!</p>
            <div className='flex items-center'>
              <div className='flex flex-wrap w-8/12  gap-4 '>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>react</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>mern</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>full stack</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>web dev</span>
              </div>
              <Link to={'/delicious-eats'} className='bg-red-600 flex justify-center items-center rounded-lg w-4/12  h-[2.3rem] '>Know More</Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="3000"

          className='w-11/12 mb-8 md:w-9/12 border-[2px] md:p-10 rounded-lg mx-auto p-3'>
          <img
            className='w-[18rem] md:w-[30rem] md:h-[15rem] h-[9rem] object-fit object-cover rounded-lg mx-auto'
            alt=''
            src={melodymates}>
          </img>
          <div>
            <p className="text-2xl ml-3 mt-3 text-gray-100 font-semibold dark:text-primary-light  mb-8" >Melody Mates</p>
            <p className='text-sm mt-[-1rem] leading-6 my-7'>
              Welcome to Melody Mates, your music paradise driven by the Spotify API. Immerse in a world of tunes, connect with fellow music enthusiasts, and embark on a melodious journey. Welcome to Melody Mates!
            </p>

            <div className='flex items-center'>
              <div className='flex flex-wrap w-8/12  gap-4 '>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>react</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>mern</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>full stack</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>web dev</span>
              </div>
              <Link to={'/melody-mates'} className='bg-red-600 flex justify-center items-center rounded-lg w-4/12  h-[2.3rem] '>Know More</Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-up"
          data-aos-duration="3000"
          className='w-11/12 border-[2px] md:w-9/12 md:p-10 rounded-lg mx-auto p-3'>
          <img
            className='w-[18rem] md:w-[30rem] md:h-[15rem] h-[9rem] object-fit object-cover rounded-lg mx-auto'
            alt=''
            src={gocart}>
          </img>
          <div>
            <p className="text-2xl ml-3 mt- 3 text-gray-100 font-semibold dark:text-primary-light  mb-8" >Go Cart</p>

            <p className='text-sm mt-[-1rem] leading-6 my-7'>

              Welcome to Go Cart, the ultimate online shopping destination equipped with a dynamic backend and user-friendly administrative interface. Discover, shop, and effortlessly oversee your store. Experience the future of e-commerce with Go Cart!
            </p>

            <div className='flex items-center'>
              <div className='flex flex-wrap w-8/12  gap-4 '>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>react</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>mern</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>full stack</span>
                <span className='text-[0.6rem] rounded-full px-3 py-1 bg-gray-700  '>web dev</span>
              </div>
              <Link to={'/go-cart'} className='bg-red-600 flex justify-center items-center rounded-lg w-4/12  h-[2.3rem] '>Know More</Link>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
