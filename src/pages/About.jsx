import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wonder">
      <h1>🚀 Meet AlphaInsights</h1>
      <p>
        Welcome to the future of investing.
      </p>
      <p>
        AlphaInsights isn’t just another stock tool — it's your intelligent co-pilot in the stock market universe. 
        Blending powerful AI with clean, actionable insights, we decode the pulse of Nifty 50 and beyond — so you don’t just follow the market… you lead it.
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>📊 Real-Time Predictions</h3>
          <p>Our AI models don’t sleep. Get smart forecasts powered by deep learning, updated as markets move.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Sentiment Scanner</h3>
          <p>From tweets to financial news — we listen, analyze, and tell you what the market mood really is.</p>
        </div>
        <div className="feature-card">
          <h3>⚖️ Risk Radar</h3>
          <p>Spot risk before it spots you. Instantly assess stock volatility and get personalized risk scores.</p>
        </div>
      </div>

      <p>
        We’re not here to predict the future — we’re here to **prepare you for it**. Whether you're a first-time investor or a seasoned trader, AlphaInsights helps you stay ahead with clarity, confidence, and class.
      </p>

      <p className="tagline">
        💡 AlphaInsights — Where Data Meets Vision.
      </p>
    </div>
  );
};

export default About;
