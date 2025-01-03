import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useStateValues } from '../utils/Provider';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const contacts = [
	{
		id: 1,
		name: 'Behind Sagar Gaire New Jail Road , Karond, Bhopal',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'snehajain28022004@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '6260882351',
		icon: <FiPhone />,
	},
];



const Contact = () => {
	const [{ hamburger, abc }, dispatch] = useStateValues();
	const form = useRef();

	if (abc) { console.log(hamburger) }

	const [formData, setformData] = useState({
		name: "",
		email: "",
		msg: "",
	});


	const changeHandler = (e) => {
		setformData({
			...formData,
			[e.target.name]: e.target.value
		});
	}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
	.send(
		'service_91g0u7b' ,
		'template_adb8ab6',
        {
          from_name: formData.name,
          to_name: "Sneha Jain",
          from_email: formData.email,
          to_email: "snehajain28022004@gmail.com",
          message: formData.msg,
        },
		'u07Nam-2R-a9lfVp5'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

	
	return (
		<div onClick={() => {
			dispatch({
				type: "SET_HAMBURGER",
				hamburger: false,
			})
		}}
			id='contact' className="w-[90vw] mx-auto pb-10 h-content  mt-[4rem]  ">
			<h2 className='text-4xl font-bold w-[15rem] my-10 flex justify-center mx-auto border-b-4 border-gray-400'>
				CONTACT ME
			</h2>
			<p className='lg:w-6/12 lg:w-[60vw] mx-auto w-[90vw] text-justify '>Feel free to Contact me by submitting the form below or connect on social media and I will get back to you as soon as possible</p>
		
			<div className="w-10/12  mx-auto flex flex-col lg:flex-row lg:gap-10 justify-center items-center">
				<div>
					<ul className="space-y-5  my-10">
						{contacts.map((contact) => (
							<li className="flex gap-2 items-center" key={contact.id}>
								<i className="text-2xl dark:text-gray-400 mr-4">
									{contact.icon}
								</i>
								<span className="text-lg  dark:text-ternary-light">
									{contact.name}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div data-aos="fade-up" className="border-[2px] lg:mt-[3rem] mx-auto   md:w-[30rem] rounded-lg p-4 mx-auto dark:bg-secondary-dark rounded-xl shadow-xl ">
					<p className="font-general-medium border-b-[2px] w-[10rem] mx-auto text-center pb-2 dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<form ref={form} onSubmit={sendEmail}>
					<div className="mb-4 rounded-lg md:w-[15rem] md:my-10 md:mx-auto bg-white">
						<TextField
							label="Name"
							variant="outlined"
							size="small"
							required
							name="name"
							value={formData.name}
							onChange={changeHandler}
							className='w-full'
						/>
					</div>
					<div className="mb-4 rounded-lg md:w-[15rem] md:mx-auto  bg-white">
						<TextField
							label="Email"
							variant="outlined"
							size="small"
							required
							name="email"
							value={formData.email}
							onChange={changeHandler}
							className='w-full'
						/>
					</div>
					<div className="mb-4 rounded-lg md:w-[15rem] md:mx-auto md:my-10  bg-white  ">
						<TextField
							label="Message"
							variant="outlined"
							size="small"
							required
							name="msg"
							value={formData.msg}
							onChange={changeHandler}
							className='w-full'
						/>
					</div>

					<div className="font-general-medium mx-auto w-40 px-4 py-2.5  text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<button  type='submit' >Submit</button>
					</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;



