import React, {useRef,useState} from 'react'
import './review.css'
// Import Swiper React components
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import {AiTwotoneStar} from 'react-icons/ai'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules


const Review = () => {
    
  return (
    <>
    <div className='review-section'>
        <div className="videoframe-text-container" data-aos="fade-up">
          <h1>Client <span className="highlight">reviews </span></h1>
          <p>here are some reviews left by our most profitable copytraders.</p>
        </div>
        <div className="review-card-container">
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/24.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>james Donald.</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>I've relied on Axoncopy for more than a year now, and the outcome has been remarkable. This platform links me to expert traders whose moves I can mirror automatically. It removes uncertainty from trading and lets my investments grow with ease. With clear transparency and smart tracking tools, I feel completely assured. Among all I've tried, Axoncopy definitely rises above the rest.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/83.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>paul Mossad.</p>
              </div>
            </div>
            <div className="investor-review-container">
             <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Axoncopy has totally transformed how I navigate the markets. I wanted to begin trading but wasn’t sure how to proceed. Their copytrading system, guided by pros, let me tap into the skills of experienced traders without trading directly. I’ve noticed steady growth and feel confident managing my finances, even though I had no previous experience in trading.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/92.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Michael H.</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Going with Axoncopy has truly been one of my smartest financial choices. Its real-time trade mirroring, paired with a clean interface and transparent analytics, makes it easy to track my account activity. I value the expertise of the traders I follow and the system’s overall consistency. It’s a reliable, professional platform. Definitely a great option for anyone interested.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/76.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Kairo Bensley</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Signing up for Axoncopy has been among the smartest money moves I’ve taken. With live trade syncing, an easy-to-use layout, and insightful data, keeping track of my account is straightforward. I respect the skill level of the traders I mirror and trust the system’s stability. It’s a dependable platform with serious value. Strongly suggest it to anyone looking to grow financially.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/67.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Zaylen Cross</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Using Axoncopy ranks high among my smartest financial choices. Its real-time trade replication, user-friendly design, and detailed insights make monitoring my account effortless. I admire the expertise of the traders I follow and the consistent performance of the platform. It delivers both trust and results. A solid recommendation for anyone ready to take control of their investments.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
          <div className="review-card" data-aos="fade-up">
            <div className="review-card-img-container">
              <img src="/85.jpg" alt="" />
              <div className="review-card-rating-container">
                <div className="rate-icon-container">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className='investor-name'>Mira Okoro</p>
              </div>
            </div>
            <div className="investor-review-container">
              <span className='right-quote'>
                <ImQuotesLeft />
              </span>
              <p>Opting for Axoncopy has proven to be a standout financial move. The platform excels in live trade syncing, and its intuitive layout paired with straightforward analytics makes tracking my account simple. I value the expertise shown by the traders I mirror and trust the platform’s dependability. It’s a solid solution for anyone looking to build wealth with confidence.</p>

              <span className="left-quote">
                <ImQuotesRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review