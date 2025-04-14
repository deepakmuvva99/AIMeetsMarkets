// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", formData);
//     alert("Signup successful!");
//     navigate("/login"); 
//   };

//   return (
//     <div className="auth-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
//         <button type="submit">Signup</button>
//       </form>
//       <p>Already have an account? <span onClick={() => navigate("/login")} className="link">Login</span></p>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(response.data.message || "Signup successful!");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <span onClick={() => navigate("/login")} className="link">Login</span></p>
    </div>
  );
};

export default Signup;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", formData);
//     alert("Signup successful!");
//     navigate("/login"); 
//   };

//   return (
//     <div className="auth-container">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
//         <button type="submit">Signup</button>
//       </form>
//       <p>Already have an account? <span onClick={() => navigate("/login")} className="link">Login</span></p>
//     </div>
//   );
// };

// export default Signup;
