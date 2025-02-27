import * as React from 'react';
import svgGitHub from '../assets/github.svg';
import svgLinkedIn from '../assets/linkedin.svg';

const Footer = () => {
  return (
    <footer>
      <div class="contact">
        <address>
            <a href="https://github.com/MrAwesome2127">
                <img src={svgGitHub} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/tim-velasquez-80880223/">
                <img src={svgLinkedIn} alt="linkedin" />
            </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;