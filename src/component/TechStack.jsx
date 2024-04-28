import { Tech_data } from "../Data";
import { useStateValues } from '../utils/Provider';

export default function TechStack() {

    const [{mode }, dispatch] = useStateValues();

    return (
        <div onClick={() => {
            dispatch({
              type: "SET_HAMBURGER",
              hamburger: false,
            })
          }}
        id="tech" className=' my-[2rem] dark:bg-gradient-to-b lg:w-[70vw] mx-auto from-gray-800 to-black dark:text-white w-full h-content'>
            <div className='max-w-screen-lg h-full p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-4'>
                    <p className='text-4xl font-bold w-[14rem] flex justify-center mx-auto border-b-4 border-gray-400'>TECH STACK</p>
                    <p className='py-10'>These are the technologies I've worked with</p>
                </div>
                <div className='w-[90vw] mx-auto h-full flex flex-wrap gap-5 lg:gap-20 lg:w-[70vw] justify-center text-center '>
                    {
                        Tech_data.map((tech, i) => (
                            <div data-aos="zoom-in"   key={i} className={`${mode ==='dark' && tech.shdwcolor} shadow-xl cursor-pointer h-[8rem]  w-[8rem] duration-500 py-2 rounded-lg`}>
                                <img src={tech.src} alt="" className='w-20 h-20 mx-auto object-contain' />
                                <p className='mt-4'>{tech.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
