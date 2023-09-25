
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';


function App() {
  const [islogedIn, setlogIn] = useState(false);
  return (
    <div  className="w-[100%] h-[100%] bg-richblack-900 flex flex-col bg-black">
        <Navbar islogedIn={islogedIn} setlogIn={setlogIn} />

         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/login' element={<Login setlogIn={setlogIn} islogedIn = {islogedIn}/>} />
             <Route path='/signup' element={<Signup setlogIn={setlogIn} />} />
             <Route path='/dashboard' element={<Dashboard/>} />
         </Routes>
    </div>
  );
}

export default App;
