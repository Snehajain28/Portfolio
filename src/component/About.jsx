function About() {
  return (
    <div id="about" >
      <div className="h-[70px]"></div>
      <div className=" p-10 flex  justify-center flex-col gap-4 w-[100vw]  " >
        <div className="text-center">
          <h1 className="text-3xl  md:text-5xl font-bold flex justify-center">ABOUT ME</h1>
          <p className="w-[80vw] mx-auto font-semibold text-center text-xl md:text-2xl mx-auto">Hi, I’m Sneha Jain. Nice to meet you.</p>
          <p className=" lg:w-[50vw] flex justify-center mx-auto mt-3  w-[90vw] -ml-[1.5rem]  md:w-10/12 text-lg  text-justify "> Here, you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          <div className="flex items-center justify-between w-11/12 mx-auto">
          </div>
          <div className="flex flex-col  lg:w-10/12 items-center mx-auto lg:flex-row">
            <img alt="" className="rounded-lg  lg:mt-10 object-cover md:h-[15rem] md:w-[18rem] mx-auto h-[15rem]"
              src="https://img.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg?t=st=1710668476~exp=1710672076~hmac=a5821c8a67976dfa55c04929984e981a6c35cba3d5db6e925bca5b83178447ec&w=900" />

            <p className="w-[90vw] mx-auto text-justify text-[0.9rem] mt-7 md:ml-10 -ml-[1.5rem]"> I’m a Full Stack Web Developer .I' have develop the  Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              Feel free to Connect or Follow me on my Linkedin
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. I’m also passionate about  music and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;