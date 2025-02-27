import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="page-section">
        <h3>Contact</h3>
      </div>
      
      <br />
      <div className="page-section">
        <p>
          Please fill out the form below to contact me.
          <form className='form-group'>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </p>
      </div>
    </section>
  );
};

export default Contact;
          