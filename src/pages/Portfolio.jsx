import React from 'react';
import appium from '../assets/appium.png';
import playwright from '../assets/playwright.png';
import postman from '../assets/postman.png';
import selenium from '../assets/selenium.jpg';
import githubIcon from '../assets/github.svg';

const Portfolio = () => {
  return (
    <section id="Portfolio" className='page-wrapper'>
      <div className="page-section">
        <h3>Portfolio</h3>
        <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src={appium} alt="appium" />
              <a href="https://github.com/LambdaTest/LT-appium-CSharp" target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="portfolio-item">
              <img src={playwright} alt="playwright" />
              <a href="https://github.com/MrAwesome2127/Playwright-CSharp-XUnit" target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            <div className="portfolio-item">
              <img src={postman} alt="postman" />
                <a href="https://github.com/postmanlabs/postman-app-support" target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={githubIcon} alt="GitHub" />
            </a>
            </div>
            <div className="portfolio-item">
              <img src={selenium} alt="selenium" />
              <a href="https://github.com/MrAwesome2127/Selenium-XUnit-CSharp" target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;