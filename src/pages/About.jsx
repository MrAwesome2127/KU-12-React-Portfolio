import React from 'react';
import myPhoto from '../assets/my-photo.jpg';

const About = () => {
  return (
    <section id="about" className='page-wrapper'>
      <div className="page-section">
        <h3>About Me</h3>
      </div>

      <div className="page-section">
        <img src={myPhoto} className="img-circle" />
      </div>

      <br />
      <div className="page-section">
        <p>
          I'm an experienced QA professional skilled in various industries,
          including video streaming, finance, logistics, and
          telecommunications. <br /><br />
          My leadership objective is to unify, structure, and enhance QA
          teams, mentoring Quality Analysts to transition into Quality
          Engineers. I specialize in fostering QA-centric cultures within
          organizations, establishing cross-functional standards and
          documentation to improve deployment success rates. <br /><br />
          I've also created an internship program for future developers,
          providing them with hands-on experience in QA methodologies before
          transitioning to development roles. Let's connect to discuss how
          my expertise can benefit your organization.
        </p>
      </div>
    </section>
  );
};

export default About;