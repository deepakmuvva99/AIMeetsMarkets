

// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import axios from 'axios';

// const Home = () => {
//   const [stocks, setStocks] = useState([]);
//   const [query, setQuery] = useState(""); // Search query state

//   useEffect(() => {
//     fetchStockData();
//     const interval = setInterval(fetchStockData, 60000); // Update every 60 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/nifty50"); // Fetch from FastAPI
//       if (response.data && response.data.data) {
//         setStocks(response.data.data.slice(0, 10)); // Get top 10 stocks
//       } else {
//         console.error("Invalid API response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", query);
//   };

//   return (
//     <div className="home">
//       <div className="hero">
//         <h1 className="hero__title">Welcome to <br/>AlphaInsights</h1>
//         <p className="hero__description">
//           AI-driven stock market insights for Nifty 50. Get real-time analysis, predictions, and risk management.
//         </p>

//         <div className="hero__highlights">
//           <span>📊 AI Predictions</span>
//           <span>💡 Sentiment Analysis</span>
//           <span>⚖️ Risk Management</span>
//         </div>

//         <form className="search-container" onSubmit={handleSearch}>
//           <input
//             type="text"
//             className="search-box"
//             placeholder="Search for a stock..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}/>
//           <button type="submit" className="search-btn">🔎 Search</button>
//         </form>
//       </div>

//       {/* Real-Time Stock Table */}
//       <div className="stockTable">
//         <div className="table-layout">
//           <p>#</p>
//           <p>Company</p>
//           <p>Price</p>
//           <p>Change</p>
//         </div>
//         {stocks.length > 0 ? (
//           stocks.map((stock, index) => (
//             <div className="table-layout" key={index}>
//               <p>{index + 1}</p>
//               <p>{stock.symbol.replace(".NS", "")}</p>
//               <p>₹{stock.close.toFixed(2)}</p>
//               <p className={stock.close >= stock.open ? "green" : "red"}>
//                 {(stock.close - stock.open).toFixed(2)} ({((stock.close - stock.open) / stock.open * 100).toFixed(2)}%)
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>Loading stock data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import axios from 'axios';

// const images = [
//   "/images/stock0.jpg",
//   "/images/stock1.jpg",
//   "/images/stock2.jpg",
//   "/images/stock3.jpg",
// ];

// const Home = () => {
//   const [stocks, setStocks] = useState([]);
//   const [query, setQuery] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     fetchStockData();
//     const interval = setInterval(fetchStockData, 60000); // Update every 60 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(sliderInterval);
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/nifty50"); // Fetch from FastAPI
//       if (response.data && response.data.data) {
//         setStocks(response.data.data.slice(0, 10)); // Get top 10 stocks
//       } else {
//         console.error("Invalid API response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", query);
//   };

//   return (
//     <div className="home">
      

//       <div className="hero">
//         <h1 className="hero__title">Welcome to <br/>AlphaInsights</h1>
//         <p className="hero__description">
//           AI-driven stock market insights for Nifty 50. Get real-time analysis, predictions, and risk management.
//         </p>

//         <div className="hero__highlights">
//           <span>📊 AI Predictions</span>
//           <span>💡 Sentiment Analysis</span>
//           <span>⚖️ Risk Management</span>
//         </div>
//       </div>
//       <div className="slider-container">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Slide ${index + 1}`}
//             className={index === currentImageIndex ? "active" : "hidden"}
//           />
//         ))}
//       </div>

//       {/* Real-Time Stock Table */}
//       <div className="stockTable">
//         <div className="table-layout">
//           <p>#</p>
//           <p>Company</p>
//           <p>Price</p>
//           <p>Change</p>
//         </div>
//         {stocks.length > 0 ? (
//           stocks.map((stock, index) => (
//             <div className="table-layout" key={index}>
//               <p>{index + 1}</p>
//               <p>{stock.symbol.replace(".NS", "")}</p>
//               <p>₹{stock.close.toFixed(2)}</p>
//               <p className={stock.close >= stock.open ? "green" : "red"}>
//                 {(stock.close - stock.open).toFixed(2)} ({((stock.close - stock.open) / stock.open * 100).toFixed(2)}%)
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>Loading stock data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import axios from 'axios';

// const images = [
//   "/images/stock0.jpg",
//   "/images/stock1.jpg",
//   "/images/stock2.jpg",
//   "/images/stock3.jpg",
// ];

// const Home = () => {
//   const [stocks, setStocks] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     fetchStockData();
//     const interval = setInterval(fetchStockData, 60000); // Update every 60 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(sliderInterval);
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/nifty50"); // Fetch from FastAPI
//       if (response.data && response.data.data) {
//         setStocks(response.data.data.slice(0, 10)); // Get top 10 stocks
//       } else {
//         console.error("Invalid API response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <div className="hero">
//         <h1 className="hero__title">Welcome to <br/>AlphaInsights</h1>
//         <p className="hero__description">
//           AI-driven stock market insights for Nifty 50. Get real-time analysis, predictions, and risk management.
//         </p>
//         <div className="hero__highlights">
//           <span>📊 AI Predictions</span>
//           <span>💡 Sentiment Analysis</span>
//           <span>⚖️ Risk Management</span>
//         </div>
//       </div>

//       {/* 3D Rotating Image Carousel */}
//       <div className="carousel">
//         <div className="carousel-inner" style={{ transform: `rotateY(${-currentImageIndex * 90}deg)` }}>
//           {images.map((img, index) => (
//             <div className="carousel-item" key={index} style={{ backgroundImage: `url(${img})` }}></div>
//           ))}
//         </div>
//       </div>

//       {/* Real-Time Stock Table */}
//       <div className="stockTable">
//         <div className="table-layout">
//           <p>#</p>
//           <p>Company</p>
//           <p>Price</p>
//           <p>Change</p>
//         </div>
//         {stocks.length > 0 ? (
//           stocks.map((stock, index) => (
//             <div className="table-layout" key={index}>
//               <p>{index + 1}</p>
//               <p>{stock.symbol.replace(".NS", "")}</p>
//               <p>₹{stock.close.toFixed(2)}</p>
//               <p className={stock.close >= stock.open ? "green" : "red"}>
//                 {(stock.close - stock.open).toFixed(2)} ({((stock.close - stock.open) / stock.open * 100).toFixed(2)}%)
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>Loading stock data...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import './Home.css';
// import axios from 'axios';

// const images = [
//   "/images/stock0.jpg",
//   "/images/stock1.jpg",
//   "/images/stock2.jpg",
//   "/images/stock3.jpg",
// ];

// const Home = () => {
//   const [stocks, setStocks] = useState([]);
//   const [query, setQuery] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     fetchStockData();
//     const interval = setInterval(fetchStockData, 60000); // Update every 60 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const sliderInterval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(sliderInterval);
//   }, []);

//   const fetchStockData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/nifty50"); // Fetch from FastAPI
//       if (response.data && response.data.data) {
//         setStocks(response.data.data.slice(0, 10)); // Get top 10 stocks
//       } else {
//         console.error("Invalid API response format:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching stock data:", error);
//     }
//   };

//   // Filter stocks based on query
//   const filteredStocks = stocks.filter(stock =>
//     stock.symbol.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <div className="hero">
//         <h1 className="hero__title">Welcome to <br/>AlphaInsights</h1>
//         <p className="hero__description">
//           AI-driven stock market insights for Nifty 50. Get real-time analysis, predictions, and risk management.
//         </p>
//         <div className="hero__highlights">
//           <span>📊 AI Predictions</span>
//           <span>💡 Sentiment Analysis</span>
//           <span>⚖️ Risk Management</span>
//         </div>
//       </div>

//       {/* 3D Rotating Image Carousel */}
//       <div className="carousel">
//         <div className="carousel-inner" style={{ transform: `rotateY(${-currentImageIndex * 90}deg)` }}>
//           {images.map((img, index) => (
//             <div className="carousel-item" key={index} style={{ backgroundImage: `url(${img})` }}></div>
//           ))}
//         </div>
//       </div>

//       {/* Search Bar Above Stock Table */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a stock..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Real-Time Stock Table */}
//       <div className="stockTable">
//         <div className="table-layout">
//           <p>#</p>
//           <p>Company</p>
//           <p>Price</p>
//           <p>Change</p>
//         </div>
//         {filteredStocks.length > 0 ? (
//           filteredStocks.map((stock, index) => (
//             <div className="table-layout" key={index}>
//               <p>{index + 1}</p>
//               <p>{stock.symbol.replace(".NS", "")}</p>
//               <p>₹{stock.close.toFixed(2)}</p>
//               <p className={stock.close >= stock.open ? "green" : "red"}>
//                 {(stock.close - stock.open).toFixed(2)} ({((stock.close - stock.open) / stock.open * 100).toFixed(2)}%)
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No matching stocks found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  "/images/stock0.jpg",
  "/images/stock1.jpg",
  "/images/stock2.jpg",
  "/images/stock3.jpg",
];

const staticStocks = [
  { symbol: "RELIANCE", open: 2825, close: 2845 },
  { symbol: "HDFCBANK", open: 1620, close: 1650 },
  { symbol: "INFY", open: 1400, close: 1420 },
  { symbol: "TCS", open: 3850, close: 3890 },
  { symbol: "ICICIBANK", open: 1065, close: 1080 },
  { symbol: "KOTAKBANK", open: 1770, close: 1795 },
  { symbol: "LT", open: 3600, close: 3650 },
  { symbol: "BHARTIARTL", open: 1210, close: 1235 },
  { symbol: "HINDUNILVR", open: 2560, close: 2580 },
  { symbol: "SBIN", open: 745, close: 755 },
];

const Home = () => {
  const [query, setQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(sliderInterval);
  }, []);

  const filteredStocks = staticStocks.filter(stock =>
    stock.symbol.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero__title">Welcome to <br />AlphaInsights</h1>
        <p className="hero__description">
          AI-driven stock market insights for Nifty 50. Get real-time analysis, predictions, and risk management.
        </p>
        <div className="hero__highlights">
          <span>📊 AI Predictions</span>
          <span>💡 Sentiment Analysis</span>
          <span>⚖️ Risk Management</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `rotateY(${-currentImageIndex * 90}deg)` }}>
          {images.map((img, index) => (
            <div className="carousel-item" key={index} style={{ backgroundImage: `url(${img})` }}></div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a stock..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Stock Table */}
      <div className="stockTable">
        <div className="table-layout">
          <p>#</p>
          <p>Company</p>
          <p>Price</p>
          <p>Change</p>
        </div>
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock, index) => (
            <div className="table-layout" key={index}>
              <p>{index + 1}</p>
              <p>{stock.symbol}</p>
              <p>₹{stock.close.toFixed(2)}</p>
              <p className={stock.close >= stock.open ? "green" : "red"}>
                {(stock.close - stock.open).toFixed(2)} ({((stock.close - stock.open) / stock.open * 100).toFixed(2)}%)
              </p>
            </div>
          ))
        ) : (
          <p>No matching stocks found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

