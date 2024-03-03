
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import NavBar from './components/common/NavBar';
import ScrollToTop from './components/ScrollToTop';
import Catalog from './pages/Catalog';


function App() {
  const [islogedIn, setlogIn] = useState(false);
  return (
    <div className="w-[100%] h-[100%] bg-richblack-900 flex flex-col bg-black">
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalog/:catalog' element={Catalog/>} />
      </Routes>
    </div>
  );
}

export default App;
