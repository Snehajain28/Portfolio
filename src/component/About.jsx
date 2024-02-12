function About() {
  return (
    <div id="about" >
      <div className="h-[70px]"></div>
      <div className="text-white flex h-full  bg-blue-600 ">
        <div className="  p-10 flex flex-col gap-4 " >
          <h1 className="text-3xl md:text-5xl font-bold text-black flex justify-center">ABOUT ME</h1>
          <p className="w-[80vw] font-semibold text-center text-xl md:text-2xl mx-auto">Hi, I’m Sneha Jain. Nice to meet you.</p>
          <p className=" md:ml-[4rem] md:w-10/12 text-lg ml-[-1rem] text-center "> Here, you'll find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
          <div className="flex items-center justify-between w-11/12 mx-auto">

            <div className="flex flex-col lg:w-10/12 items-center mx-auto lg:flex-row">
              <img alt="" className="rounded-lg lg:mt-10 md:h-[15rem] md:w-[18rem] mx-auto h-[15rem]"
                src="data:image/jpeg;base64,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" />

              <p className="italic text-left mt-7 md:ml-10 -ml-8"> I’m a Full Stack Web Developer .I' have develop the  Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                Feel free to Connect or Follow me on my Linkedin 
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. I’m also passionate about  music and universes around what I listen to and I’m always curious to learn more when it comes to new technologies and creative coding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;