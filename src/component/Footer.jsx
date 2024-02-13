import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className="flex md:text-[2.2rem]  lg:mt-[7rem] text-[2rem] md:mt-20 mt-10 gap-10">
              <a href ='https://www.instagram.com/_._sneha__jain_._/' target = "_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href ='https://github.com/Snehajain28' target = "_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a href ='https://www.linkedin.com/in/sneha-jain-65b87a228/' target = "_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a>
              <a href="mailto:snehajain28022004@gmail.com" target = "_blank" rel="noopener noreferrer"><FiMail/></a>
            </div>
           
    </div>
  )
}
