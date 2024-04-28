import { HashLink } from "react-router-hash-link";
import { useStateValues } from '../utils/Provider';

function About() {
  
  const [{ hamburger, abc }, dispatch] = useStateValues();

	if (abc) { console.log(hamburger) }
  return (
    <div onClick={() => {
      dispatch({
        type: "SET_HAMBURGER",
        hamburger: false,
      })
    }}
    id="about" className=" dark:bg-black mt-[2rem] text-center h-content  flex justify-center items-center flex-col w-full overflow-x-hidden" >
      <div className="my-10">
        <h1 className='text-4xl font-bold inline border-b-4 border-gray-400'>ABOUT ME</h1>
        <p className="w-[80vw] mx-auto my-[1rem] font-semibold text-center text-xl md:text-2xl mx-auto">Hi, I’m Sneha Jain. Nice to meet you.</p>
        <p className=" lg:w-[50vw] mx-auto w-[80vw]  flex justify-center line-height-[1px] mx-auto mt-3  md:w-10/12 text-[1rem] text-justify "> Here, you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>

      <div className="flex flex-col gap-10 lg:w-[80vw] lg:gap-0  items-center mx-auto lg:flex-row">

        <div >
          <img alt="" className="rounded-lg   object-cover md:w-[18rem] mx-auto h-[15rem]"
            src="https://img.freepik.com/free-vector/programmer-working-with-php_52683-22998.jpg?t=st=1714299301~exp=1714302901~hmac=3198c48dcc8f5cd0c44c52fb24478419a03c9bce4380f3993a2e459511737e50&w=740" />
        </div>

        <div className=" lg:w-[40vw] w-[90vw] mx-auto flex flex-col text-[0.9rem] items-start">

          <li>Currently i m pursuing B.tech from JNCT with <b> 8.12 CGPA.</b> </li>
          <li>I have Scored <b>87%</b> in Class 10th.</li>
          <li>I have Scored <b>86%</b> in Class 12th.</li>
          <li>I have Scored <b>77 percentile </b>in JEE.</li>

          <p className="w-full  text-justify  mt-4 "> I’m a <b>Full Stack Web Developer </b> .I' have develop the  Web Applications that leads to the success of the overall product. Check out some of my work in the <HashLink to={'/#projects'} smooth className="text-blue-600">Projects section</HashLink>.
            Feel free to Connect or Follow me on my
            <a href='https://www.linkedin.com/in/sneha-jain-65b87a228/' target="_blank" rel="noopener noreferrer" className="text-blue-600"> Linkedin </a>
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. I’m also passionate about  music and universes around what I listen to and I’m always curious to learn more when it comes to <b>new technologies</b> and creative coding.</p>
        </div>
      </div>

    </div>
  );
}

export default About;