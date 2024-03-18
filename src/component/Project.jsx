import React from 'react'
import foodFun from '../assests/foodFun.png'
import melodymates from '../assests/Melodymates.png'
import gocart from '../assests/goCart.png'
import { Link } from 'react-router-dom'


export default function Project() {
  return (
    <div id='projects'>
      <div className='h-[70px]'></div>
      <div className='w-[100vw] '>
        <h2 className="text-4xl font-bold text-center dark:text-primary-light mt-12 mb-8">
          PROJECTS
        </h2>
        <div className='flex flex-wrap mx-auto gap-2 lg:gap-6  w-[80vw] justify-center'>
          <Link to={'/delicious-eats'} data-aos="zoom-in"
            data-aos-duration="2000"
            className='w-11/12 md:w-[25rem] border-[2px] md:h-[20rem] p-3 rounded-lg flex flex-col '>
            <img
              className=' w-full h-full  object-fit object-cover rounded-lg mx-auto'
              alt=''
              src={foodFun}>
            </img>
            <p className="text-[1.7rem] ml-5 font-semibold dark:text-primary-light " >Delicious Eats</p>
          </Link>

          <Link to={'/melody-mates'} data-aos="zoom-in"
            data-aos-duration="2000"
            className='w-11/12 md:w-[25rem] border-[2px] md:h-[20rem] p-3 rounded-lg flex flex-col'>
            <img
              className=' w-full h-full  object-fit object-cover rounded-lg mx-auto'
              alt=''
              src={melodymates}>
            </img>
            <p className="text-2xl mt-3  font-semibold dark:text-primary-light " >Melody Mates</p>
          </Link>

          <Link to={'/go-cart'} data-aos="zoom-in"
            data-aos-duration="2000"
            className='w-11/12 md:w-[25rem] border-[2px] md:h-[20rem] p-3 rounded-lg flex flex-col'>
            <img
              className=' h-full w-full object-fit object-cover rounded-lg mx-auto'
              alt=''
              src={gocart}>
            </img>
            <p className="text-2xl ml-3 mt- 3 font-semibold dark:text-primary-light  mb-6" >Go Cart</p>
          </Link>



        </div>
      </div>
    </div>

  )
}
