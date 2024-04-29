import gocart from './assests/goCart.png'
import chitchat from './assests/chitchat.png'
import melodymates from './assests/Melodymates.png'

export const Project_data = [
    chitchat = {
        src: chitchat,
        name: "Chit Chat",
        page: '/chit-chat',
        technologies: ['react', 'mern', 'full stack', 'tailwind', 'web dev'],
        github: 'https://github.com/Snehajain28/ChitChat',
        link: 'https://chiitchatt.netlify.app/',
        descrption: `User Profiles and Registration:
      Users can create accounts, set up profiles, and manage their information and preferences.
      Posting Pictures and Text: 
      Users can upload pictures accompanied by text posts, sharing their experiences, thoughts, or interests.
      Save Posts: 
      Users can save posts they find interesting, curating a collection of their favorite content for easy access later.
      Follow Other Users: Users can follow other users to customize their feed and stay updated on their posts and activities.Interactions: Users can engage with posts by liking and commenting, fostering a sense of community and interaction among users.Backend powered by Appwrite: The platform' s backend infrastructure is built using Appwrite, providing robust functionality for user authentication, data storage, file management (for pictures), and other essential backend tasks. This ensures reliability, security, and scalability for the platform.`,
    },
    melodymates = {
        src: melodymates,
        page: '/melody-mates',
        name: "Melody Mates",
        technologies: ['react', 'mern', 'full stack', 'tailwind', 'web dev'],
        github: 'https://github.com/Snehajain28/Melody-Mates',
        link: 'https://melody-mates.netlify.app/',
        descrption: 'Welcome to Melody Mates, your music paradise driven by the Spotify API. Immerse in a world of tunes, connect with fellow music enthusiasts, and embark on a melodious journey. Welcome to Melody Mates!',
    },
    gocart = {
        src: gocart,
        name: "Go Cart",
        page: '/go-cart',
        technologies: ['react', 'mern', 'full stack', 'tailwind', 'web dev'],
        github: 'https://github.com/Snehajain28/E-commerce-frontend',
        link: 'https://e-commercely.netlify.app/',
        descrption: ' Welcome to Go Cart, the ultimate online shopping destination equipped with a dynamic backend and user-friendly administrative interface. Discover, shop, and effortlessly oversee your store. Experience the future of e-commerce with Go Cart!',

    }
]

export const Tech_data = [
    {
        shdwcolor: "shadow-orange-500",
        text: "HTML",
        name: "html",
    },
    {
        shdwcolor: "shadow-blue-900",
        text: "CSS",
        name: "css",
    },
    {
        shdwcolor: "shadow-yellow-300",
        text: "Java Script",
        name: "js",
    },
    {
        text: "REACT JS",
        name: "react",
        shdwcolor: "shadow-blue-900",
    }
    ,
    {
        shdwcolor: "shadow-blue-300",
        name: "tailwind",
        text: "Tailwind CSS",
    },
    {
        name: "nodejs",
        text: "Node JS",
        shdwcolor: "shadow-green-500",
    },
    {
        text: "MONGO DB",
        shdwcolor: "shadow-green-500",
        name:"mongodb"
    },
    {
        text: "C++",
        shdwcolor: "shadow-blue-900",
        name:"cpp"
    }
]