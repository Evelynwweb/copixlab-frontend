import React from 'react'
import './copytrade.css'
import { useNavigate } from 'react-router-dom'
const Copytrade = () => {
    const navigate = useNavigate()
  return (
      <div className='about-section copy-trade-section' id='about'>
          <div className="about-wrapper copy-trade-wrapper about-copy-trade-section">
              
            <div className="why-choose-us-text-container about-text copy-trade-text">
                <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2 >what we do at</h2>
                </div>
                <h1 data-aos="fade-up" className='copytrade-header'>Copixlab</h1>
                <p data-aos="fade-up">
                At Copixlab, we provide accurate forex analysis to help investors maximize profits through copy trading. Using MT4 and MT5, our experts analyze the markets with technical and fundamental strategies, identifying high-probability trades. We share real-time signals, market updates, and risk assessments directly through our Telegram channel, allowing investors to copy top-performing trades effortlessly.
                  </p>
        </div>
        <div className="about-page-img forex-img-container">
            <img src="/copixmockup2.png" className='forex-img '/>
            </div>
        </div>
    </div>
  )
}

export default Copytrade