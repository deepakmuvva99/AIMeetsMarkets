// // import React from 'react';
// // import './Features.css'
// // const Features = () => {
// //   return (
// //     <div>
// //       <h2>Our AI Features</h2>
// //       <ul>
// //         <li>1) Tomorrow's Stock Price Movement Prediction</li>
// //         <li>2) Risk Management of Stocks</li>
// //         <li>3) Sentiment Analysis</li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Features;
// import React, { useState } from "react";
// import "./Features.css";

// const Features = () => {
//   const [search, setSearch] = useState("");
//   const companyData = [
//     {
//       name: "Reliance Industries",
//       todayPrice: "₹2,600",
//       predictedPrice: "₹2,650",
//       risk: "Low",
//       sentiment: "Positive",
//     },
//     {
//       name: "Tata Motors",
//       todayPrice: "₹800",
//       predictedPrice: "₹820",
//       risk: "Medium",
//       sentiment: "Neutral",
//     },
//     {
//       name: "Infosys",
//       todayPrice: "₹1,600",
//       predictedPrice: "₹1,590",
//       risk: "High",
//       sentiment: "Negative",
//     },
//   ];

//   const filteredCompanies = companyData.filter((company) =>
//     company.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* AlphaInsights Branding */}
//       <div className="text-center mb-8">
//         <h1 className="text-5xl font-bold text-blue-700">AlphaInsights</h1>
//         <img src="/logo.png" alt="AlphaInsights Logo" className="mx-auto w-24 h-24 mt-4" />
//       </div>

//       {/* AI Features Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md text-center mb-6">
//         <h2 className="text-3xl font-semibold text-gray-800">Our AI Features</h2>
//         <div className="grid md:grid-cols-3 gap-4 mt-4">
//           <div className="p-4 bg-blue-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">📈 Tomorrow's Stock Price Movement Prediction</h3>
//           </div>
//           <div className="p-4 bg-green-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">⚖️ Risk Management of Stocks</h3>
//           </div>
//           <div className="p-4 bg-yellow-100 rounded-lg shadow">
//             <h3 className="text-xl font-semibold">💬 Sentiment Analysis</h3>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-4">
//         <input
//           type="text"
//           placeholder="Search NIFTY50 Companies..."
//           className="p-3 w-1/2 border rounded-lg shadow"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Data Table */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-3 border">Company Name</th>
//               <th className="p-3 border">Today's Price</th>
//               <th className="p-3 border">Predicted Price</th>
//               <th className="p-3 border">Risk Management</th>
//               <th className="p-3 border">Sentiment Analysis</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCompanies.map((company, index) => (
//               <tr key={index} className="text-center">
//                 <td className="p-3 border">{company.name}</td>
//                 <td className="p-3 border">{company.todayPrice}</td>
//                 <td className="p-3 border">{company.predictedPrice}</td>
//                 <td className="p-3 border">{company.risk}</td>
//                 <td className="p-3 border">{company.sentiment}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Features;
import React, { useState } from "react";
import "./Features.css";


const Features = () => {
  const [search, setSearch] = useState("");
  const companyData = [
    {
      name: "Reliance Industries",
      todayPrice: "₹2,600",
      predictedPrice: "₹2,650",
      risk: "Low",
      score:"0.8",
      sentiment: "Positive",
      IDM:"YES",
    },
    {
      name: "Tata Motors",
      todayPrice: "₹800",
      predictedPrice: "₹820",
      risk: "Medium",
      score:"0.8",
      sentiment: "Neutral",
      IDM:"YES",
    },
    {
      name: "Infosys",
      todayPrice: "₹1,600",
      predictedPrice: "₹1,590",
      risk: "High",
      score:"0.8",
      sentiment: "Negative",
      IDM:"YES",
    },
  ];

  const filteredCompanies = companyData.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="features-container">
      <h1 className="features-title"></h1>
      <img src="src/assets/logo.png" alt="AlphaInsights Logo" className="logo" />
      
      <div className="features-section">
        <h2 className="features-subtitle">Our AI Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">📈 Stock Price Prediction</h3>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">⚖️ Risk Management</h3>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">💬 Sentiment Analysis</h3>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search NIFTY50 Companies..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Today's Price</th>
              <th>Predicted Price</th>
              <th>Risk Management</th>
              <th>Risk Score</th>
              <th>Sentiment Analysis</th>
              <th>IDM</th>

            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.todayPrice}</td>
                <td>{company.predictedPrice}</td>
                <td>{company.risk}</td>
                <td>{company.score}</td>
                <td>{company.sentiment}</td>
                <td>{company.IDM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Features;
