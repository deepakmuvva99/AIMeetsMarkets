import React from 'react'
import NavBar from './components/NavBar/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import Footer from './components/Footer/Footer'
import Signup from './pages/log/Signup'
import Login from './pages/log/Login'
// import Features from './Hero/Features/Features';
// import Contact from './Hero/Contact/Contact';
// import About from './Hero/About/About';
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Company/:CompanyId' element={<Company/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
     </div>
  )
}
export default App
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import Home from "./pages/Home/Home";
// import Company from "./pages/Company/Company";
// import Footer from "./components/Footer/Footer";
// import Signup from "./pages/Login/Signup";
// import Login from "./pages/Login/Login";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Company/:CompanyId" element={<Company />} />
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
