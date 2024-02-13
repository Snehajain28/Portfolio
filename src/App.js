import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodFun from './Pages/FoodFun';
import Main from './Pages/Main';
import MelodyMates from "./Pages/MelodyMates";
import GoCart from "./Pages/GoCart";


function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='overflow-x-hidden text-white bg-black'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/delicious-eats' element={<FoodFun />} />
        <Route path='/melody-mates' element={<MelodyMates />} />
        <Route path='/go-cart' element={<GoCart />} />
     
      </Routes>
    </div>
  );
}

export default App;
