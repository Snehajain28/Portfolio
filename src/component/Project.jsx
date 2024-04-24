import chitchat from '../assests/chitchat.png'
import melodymates from '../assests/Melodymates.png'
import gocart from '../assests/goCart.png'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tech = [
  {
    link: "/chit-chat",
    src: chitchat,
    text: "Chit Chat",
  },
  {
    link: "/melody-mates",
    src: melodymates,
    text: "Melody Mates",
  },
  {
    link: "/go-cart",
    src: gocart,
    text: "Go Cart",
  }

]

const Card = () => {

  return (<div className="h-full w-full  lg:w-[80vw] lg:gap-10 mx-auto flex gap-5 justify-center flex-wrap">
    {
      Tech.map((d,i) => {
        return (<Link to={d.link} key={i}
          className='w-11/12 md:w-[25rem] border-[2px] md:h-[20rem] p-3 rounded-lg flex flex-col '>
         <div className=''>
         <img 
            className='scaling w-full h-full  object-fit object-cover rounded-lg '
            alt=''
            src={d.src}>
          </img>
          </div> 
          <p className="text-[1.7rem] text-center ml-5 font-semibold dark:text-primary-light " >{d.text}</p>
        </Link>)
      })
    }
  </div>)


}


export default function Project() {
  useEffect(()=> {
    AOS.init({duration: 1000})
})
  return (
    <div id='projects' className='w-[100vw] mt-[2rem]'>

      <h2
      className="text-4xl h-[4rem]mb-8 font-bold text-center dark:text-primary-light">
        PROJECTS
      </h2>
      <div className=''>
        <Card />
      </div>
    </div>

  )
}
