import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from "axios";


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

	async function handleSubmit(e) {
		e.preventDefault();
		const data = new FormData()
		data.append("name", formData.name)
		data.append("email", formData.email)
		data.append("msg", formData.msg)
	
		const res = await axios.post(`/api/v1/product/add-product`, data)
		if (res.status === 200) {
			setformData('');
		}
	}
	return (
		<div id='contact' className="w-full ">
			<div className='h-[70px]'></div>
			<div className="w-10/12 mx-auto flex flex-col justify-center items-center">
				<h2 className="text-4xl text-gray-100 font-bold  dark:text-primary-light mt-12 mb-8">
					CONTACT ME
				</h2>
				<p className='lg:w-6/12 text-center italic'>Feel free to Contact me by submitting the form below or connect on social media and I will get back to you as soon as possible</p>
				<ul className="space-y-5  my-10">
					{contacts.map((contact) => (
						<li className="flex gap-4" key={contact.id}>
							<i className="text-2xl dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg   mb-4 dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
				<div className="">
					<div className="mx-auto ">
						<form
						 data-aos="fade-zoom-in"
						 data-aos-duration="1000"
							onSubmit={handleSubmit}
							className="border-[2px] md:w-[30rem] rounded-lg p-4 mx-auto dark:bg-secondary-dark rounded-xl shadow-xl "
						>
							<p className="font-general-medium border-b-[2px] w-[10rem] mx-auto text-center pb-2 dark:text-primary-light text-2xl mb-8">
								Contact Form
							</p>
							<div className="mb-4 rounded-lg md:w-[15rem] md:my-10 md:mx-auto bg-white">
								<TextField
									label="Name"
									variant="outlined"
									size="small"
									required
									name="name"
									value={formData.name}
									onChange={changeHandler}
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
								/>
							</div>
	
							<div className="font-general-medium mx-auto w-40 px-4 py-2.5  text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
								<button>Submit</button>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Contact;



