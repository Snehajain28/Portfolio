import { Link } from 'react-router-dom'
import { Project_data } from '../Data'
import { FiGithub } from 'react-icons/fi'
import { BiRocket } from 'react-icons/bi'
import { useStateValues } from '../utils/Provider';


export default function Project() {
  const [{ hamburger, abc }, dispatch] = useStateValues();

	if (abc) { console.log(hamburger) }
  return (
    <div id='projects' onClick={() => {
      dispatch({
        type: "SET_HAMBURGER",
        hamburger: false,
      })
    }}
    className=' mt-[4rem] py-[2rem] dark:bg-gradient-to-b from-gray-900 to-black dark:text-white w-full h-content'>
      <h2 className='text-4xl text-center mb-10 w-[12rem] flex justify-center mx-auto  font-bold inline border-b-4 border-gray-400'>
        PROJECTS
      </h2>
      <div className=''>
      <div className="h-full w-full  lg:w-[80vw] lg:gap-10 mx-auto flex gap-5 justify-center flex-wrap">
    {
      Project_data.map((d,i) => {
        return (<div  key={i}
         data-aos="slide-up" className='w-11/12 md:w-[25rem] border-[2px] md:h-[20rem] p-3 rounded-lg flex flex-col '>
         <Link to={d.page}>
         <img 
            className='hover:scale-[1.02]  w-full h-full  object-fit object-cover rounded-lg '
            alt=''
            src={d.src}>
          </img>
          </Link> 
          <p className="text-[1.7rem] text-center ml-5 font-semibold dark:text-primary-light " >{d.name}</p>
          <div className='flex justify-between w-full px-5  mt-4' >
          <a href={d.github} target='_blank' rel="noopener noreferrer">
            <p className='flex scaling hover:bg-gray-200 items-center p-3 md:text-lg md:px-4 md:py-3 text-sm font-semibold rounded-lg gap-2 border border-gray-400 dark:border-gray-600 dark:bg-[#212121]'><FiGithub size={20} />GitHub</p>
          </a>
          <a href={d.link} target='_blank' rel="noopener noreferrer">
            <p className='flex scaling hover:bg-gray-200 items-center p-3 px-4 md:text-lg md:px-4 md:py-3 text-sm font-semibold rounded-lg gap-2 border border-gray-400 dark:border-gray-600 dark:bg-[#212121]'><BiRocket size={20} />Visit</p>
          </a>
        </div>
        </div>)
      })
    }
  </div>
      </div>
    </div>

  )
}
