import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Projectpage from "./Pages/Projectpage";
import gocart from './assests/goCart.png'
import chitchat from './assests/chitchat.png'
import melodymates from './assests/Melodymates.png'
import Navbar from "./component/Navbar";


const data = {
  chitchat: {
    src:chitchat,
    name:"Chit Chat",
    technologies:['react','mern','full stack','tailwind','web dev'],
    github:'https://github.com/Snehajain28/MelodyMate',
    link:'https://dapper-capybara-8b5422.netlify.app/#',
    descrption:'Welcome to Melody Mates, your music paradise driven by the Spotify API. Immerse in a world of tunes, connect with fellow music enthusiasts, and embark on a melodious journey. Welcome to Melody Mates!',
 
  },
  melodymates: {
    src:melodymates,
    name:"Melody Mates",
    technologies:['react','mern','full stack','tailwind','web dev'],
    github:'https://github.com/Snehajain28/MelodyMate',
    link:'https://dapper-capybara-8b5422.netlify.app/#',
    descrption:'Welcome to Melody Mates, your music paradise driven by the Spotify API. Immerse in a world of tunes, connect with fellow music enthusiasts, and embark on a melodious journey. Welcome to Melody Mates!',
  },
  gocart:{
    src:gocart,
    name:"Go Cart",
    technologies:['react','mern','full stack','tailwind','web dev'],
    github:'https://github.com/Snehajain28/E-commerce-frontend',
    link:'https://timely-croissant-687f9b.netlify.app/',
    descrption:' Welcome to Go Cart, the ultimate online shopping destination equipped with a dynamic backend and user-friendly administrative interface. Discover, shop, and effortlessly oversee your store. Experience the future of e-commerce with Go Cart!',

  }
}

function App() {

  return (
    <div className='w-screen h-screen'>
         <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chit-chat' element={<Projectpage data={data.chitchat} />} />
        <Route path='/melody-mates' element={<Projectpage data={data.melodymates} />} />
        <Route path='/go-cart' element={<Projectpage data={data.gocart} />} />
      </Routes>
    </div >
  );
}

export default App;
