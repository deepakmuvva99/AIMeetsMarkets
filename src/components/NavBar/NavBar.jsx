// import React from 'react'
// import './NavBar.css'
// import logo from '../../assets/logo.png'
// import sign from '../../assets/add1.gif'
// import Login from '../../assets/add3.gif'
// const NavBar = () => {
//   return (
//     <div className='navbar'>
//         <img src={logo} alt="logo" className='logo'/>
//         <ul>
//             <li>Home</li>
//             <li>Features</li>
//             <li>Contact</li>
//             <li>Blog</li>
            
//         </ul>
//         <div className="nav-right">
//             <select name="" id="">
//                 <option value="inr"> INDIA</option>
//                 <option value="usd"> USA</option>
//                 <option value="eur"> Europe</option>

//             </select>
//             <button onClick={()=>navigate("/Signup")} className="signup-btn">
//                 SignUp <img src={sign} alt="signup gif" className="signup-gif"/>
//             </button>
//             <button onClick={()=>navigate("/Login")} className="Login-btn">
//                 Login <img src={Login} alt="Login gif" className="Login-gif"/>
//             </button>
//         </div>

//     </div>
//   )
// }

// export default NavBar
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; //
// import './NavBar.css';
// import logo from '../../assets/logo.png';
// import sign from '../../assets/add1.gif';
// import loginGif from '../../assets/add3.gif'; // 

// const NavBar = () => {
//   const navigate = useNavigate(); //

//   return (
//     <div className='navbar'>
//       <img src={logo} alt="logo" className='logo' />
//       <ul>
//         <li>Home</li>
//         <li>Features</li>
//         <li>Contact</li>
//         <li>About</li>
//       </ul>
//       <div className="nav-right">
//         <select name="" id="">
//           <option value="inr"> INDIA</option>
//           <option value="usd"> USA</option>
//           <option value="eur"> Europe</option>
//         </select>
//         <button onClick={() => navigate("/Signup")} className="signup-btn">
//           SignUp <img src={sign} alt="signup gif" className="signup-gif" />
//         </button>
//         <button onClick={() => navigate("/Login")} className="Login-btn">
//           Login <img src={loginGif} alt="Login gif" className="Login-gif" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './NavBar.css';
// import logo from '../../assets/logo.png';
// import sign from '../../assets/add1.gif';
// import loginGif from '../../assets/add3.gif';

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('inr'); // Default value

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value); // Updates selected country
//   };

//   return (
//     <div className="navbar">
//       <img src={logo} alt="logo" className="logo" />
//       <ul>
//         <li onClick={() => handleTabClick('home')} className={activeTab === 'home' ? 'active' : ''}>Home</li>
//         <li onClick={() => handleTabClick('features')} className={activeTab === 'features' ? 'active' : ''}>Features</li>
//         <li onClick={() => handleTabClick('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</li>
//         <li onClick={() => handleTabClick('blog')} className={activeTab === 'blog' ? 'active' : ''}>Blog</li>
//       </ul>
//       <div className="nav-right">
//         <select value={selectedCountry} onChange={handleCountryChange}>
//           <option value="inr">INDIA</option>
//           <option value="usd">USA</option>
//           <option value="eur">Europe</option>
//         </select>
//         <button onClick={() => navigate("/Signup")} className="signup-btn">
//           SignUp <img src={sign} alt="signup gif" className="signup-gif" />
//         </button>
//         <button onClick={() => navigate("/Login")} className="Login-btn">
//           Login <img src={loginGif} alt="Login gif" className="Login-gif" />
//         </button>
//       </div>

//       {/* Content for each section */}
//       <div className="content">
//         {activeTab === 'home' && <div>Welcome to AlphaInsights</div>}
//         {activeTab === 'features' && (
//           <div>
//             <h2>AI Features</h2>
//             <ul>
//               <li>1) Tomorrow's Stock Price Movement Prediction</li>
//               <li>2) Risk Management of Stocks</li>
//               <li>3) Sentiment Analysis</li>
//             </ul>
//           </div>
//         )}
//         {activeTab === 'contact' && (
//           <div>
//             <h2>Contact Information</h2>
//             <p>Email: example@example.com</p>
//             <p>Phone: 123-456-7890</p>
//             <h3>Follow Us</h3>
//             <ul>
//               <li><a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a></li>
//               <li><a href="https://twitter.com/yourprofile">Twitter</a></li>
//               <li><a href="https://www.instagram.com/yourprofile">Instagram</a></li>
//             </ul>
//           </div>
//         )}
//         {activeTab === 'blog' && (
//           <div>
//             <h2>About AlphaInsights</h2>
//             <p>AlphaInsights is a leading provider of AI-driven insights for stock market analysis, offering powerful tools for risk management, price prediction, and sentiment analysis.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';
// import logo from '../../assets/logo.png';
// import sign from '../../assets/add1.gif';
// import loginGif from '../../assets/add3.gif';

// const NavBar = () => {
//   const [activeTab, setActiveTab] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('inr');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//   };

//   return (
//     <div className="navbar">
//       <img src={logo} alt="logo" className="logo" />
//       <ul>
//         <li onClick={() => handleTabClick('home')} className={activeTab === 'home' ? 'active' : ''}>
//           <Link to="/" font-weight="500">Home</Link>
//         </li>
//         <li onClick={() => handleTabClick('features')} className={activeTab === 'features' ? 'active' : ''}>
//           <Link to="/features">Features</Link>
//         </li>
//         <li onClick={() => handleTabClick('contact')} className={activeTab === 'contact' ? 'active' : ''}>
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li onClick={() => handleTabClick('About')} className={activeTab === 'about' ? 'active' : ''}>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//       <div className="nav-right">
//         <select value={selectedCountry} onChange={handleCountryChange}>
//           <option value="inr">INDIA</option>
//           <option value="usd">USA</option>
//           <option value="eur">Europe</option>
//         </select>
//         <button onClick={() => navigate("/Signup")} className="signup-btn">
//           SignUp <img src={sign} alt="signup gif" className="signup-gif" />
//         </button>
//         <button onClick={() => navigate("/Login")} className="Login-btn">
//           Login <img src={loginGif} alt="Login gif" className="Login-gif" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './NavBar.css';
import logo from '../../assets/logo.png';
import sign from '../../assets/add1.gif';
import loginGif from '../../assets/add3.gif';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('inr');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li onClick={() => handleTabClick('home')} className={activeTab === 'home' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => handleTabClick('features')} className={activeTab === 'features' ? 'active' : ''}>
          <Link to="/features">Features</Link>
        </li>
        <li onClick={() => handleTabClick('contact')} className={activeTab === 'contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={() => handleTabClick('about')} className={activeTab === 'about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="nav-right">
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="inr">INDIA</option>
          <option value="usd">USA</option>
          <option value="eur">Europe</option>
        </select>
        <button onClick={() => navigate("/signup")} className="signup-btn">
          SignUp <img src={sign} alt="signup gif" className="signup-gif" />
        </button>
        <button onClick={() => navigate("/login")} className="login-btn">
          Login <img src={loginGif} alt="Login gif" className="login-gif" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;

