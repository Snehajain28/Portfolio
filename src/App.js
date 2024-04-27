import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Projectpage from "./Pages/Projectpage";
import Navbar from "./component/Navbar";
import { Project_data } from './Data';



function App() {

  return (
    <div className='w-[100vw] '>
         <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/chit-chat' element={<Projectpage data={Project_data.chitchat} />} />
        <Route path='/melody-mates' element={<Projectpage data={Project_data.melodymates} />} />
        <Route path='/go-cart' element={<Projectpage data={Project_data.gocart} />} />
      </Routes>
    </div >
  );
}

export default App;
