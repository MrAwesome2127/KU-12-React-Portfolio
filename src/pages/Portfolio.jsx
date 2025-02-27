import React from 'react';
import appium from '../assets/appium.png';
import playwright from '../assets/playwright.png';
import postman from '../assets/postman.png';
import selenium from '../assets/selenium.jpg';


const Portfolio = () => {
  return (
    <section id="Portfolio" className='page-wrapper'>
      <div className="page-section">
        <h3>Portfolio</h3>
      </div>

      <div className="page-section">
        <p> 
        <div className="flex-item portfolio-item">
            <img src={appium} alt="appium" />
          </div>
          <div className="flex-item portfolio-item">
            <img src={playwright} alt="playwright" />
          </div>
          <div className="flex-item portfolio-item">
            <img src={postman} alt="postman" />
          </div>
          <div className="flex-item portfolio-item">
            <img src={selenium} alt="selenium" />
          </div>
        </p>
      </div>
    </section>
  );
};

export default Portfolio;