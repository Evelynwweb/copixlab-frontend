import React from 'react'
import './mt5section.css'
import { useNavigate } from 'react-router-dom'
const Mt5Section = () => {
    const navigate = useNavigate()
  return (
      <div className='about-section mt5-trade-section' id='about'>
          <div className="about-wrapper copy-trade-wrapper mt5-wrapper">
              
            <div className="why-choose-us-text-container about-text copy-trade-text mt5-text">
                <h1 data-aos="fade-up">Start <span className="highlight">copying </span>& start   <span className="highlight">earning </span></h1>
                <p data-aos="fade-up">
                Experience the sheer brilliance of Mirrorcaps Trading - a revolutionary platform that effortlessly mirrors the success of profitable traders and lets you copy successful strategies or provide your own strategy to others to be copied and profit from that.
              </p>
              <button className="launch-btn cssbuttons-io" data-aos="fade-up" onClick={()=>{
                        navigate('/signup')
                    }}>
                <span>start now!</span>
              </button>
        </div>
        <div className="about-img-container mt5-img" data-aos="fade-up">
            <img src="/start-copy-trading.png" className='forex-img '/>
            </div>
        </div>
    </div>
  )
}

export default Mt5Section