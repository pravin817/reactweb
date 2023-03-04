import React from 'react';

// Import the bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import the javaScript

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Routes,Route,Navigate  } from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const App =()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route extact path='/' element={<Home/>}/>
      <Route extact path='/about' element={<About/>}/>
      <Route extact path='/service' element={<Service/>}/>
      <Route extact path='/contact' element={<Contact/>}/>
      {/* <Navigate to={<Home/>} /> */}
      {/* <Navigate to="/Home" /> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;