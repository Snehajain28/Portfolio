import { HashLink } from "react-router-hash-link";

function About() {
  return (
    <div id="about" className=" dark:bg-black mt-[2rem] text-center h-content  flex justify-center items-center flex-col w-[100vw] mx-auto  " >
      <h1 className="text-3xl   md:text-5xl font-bold flex justify-center">ABOUT ME</h1>
      <p className="w-[80vw] mx-auto my-[1rem] font-semibold text-center text-xl md:text-2xl mx-auto">Hi, I’m Sneha Jain. Nice to meet you.</p>
      <p className=" lg:w-[50vw] w-[80vw]  flex justify-center line-height-[1px] mx-auto mt-3  md:w-10/12 text-[1rem] text-justify "> Here, you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      <div className="flex items-center justify-between w-11/12 mx-auto">
      </div>
      <div className="flex flex-col  lg:w-10/12 items-center mx-auto lg:flex-row">
        <img alt="" className="rounded-lg  lg:mt-10 object-cover md:h-[15rem] md:w-[18rem] mx-auto h-[15rem]"
          src="https://img.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg?t=st=1710668476~exp=1710672076~hmac=a5821c8a67976dfa55c04929984e981a6c35cba3d5db6e925bca5b83178447ec&w=900" />

        <p className="w-[90vw] mx-auto text-justify text-[0.9rem] mt-7 md:ml-10 "> I’m a <b>Full Stack Web Developer </b> .I' have develop the  Web Applications that leads to the success of the overall product. Check out some of my work in the <HashLink to={'/#projects'} smooth className="text-blue-600">Projects section</HashLink>.
          Feel free to Connect or Follow me on my Linkedin
          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. I’m also passionate about  music and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
      </div>
    </div>
  );
}

export default About;