import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="row">
        {/* Contact Form Section */}
        <div className="contact-form col">
          {/* <h2>Contact Me</h2> */}
          <form className="contact-form" noValidate>
            <div>
              <label htmlFor="name">Your Name (required)</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div>
              <label htmlFor="email">Your Email (required)</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info col">
          <h4>Get in Touch</h4>
          <p>I’d love to hear from you! Please fill out the contact form or reach out using the information below:</p>

          <div className="address-box">
            <div className="address-contact">
              <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-phone fa-stack-1x fa-inverse"></i></span>
              <div className="address-content">📞 +91 - 7758891497</div>
            </div>

            <div className="address-contact">
              <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span>
              <div className="address-content"><a href="mailto:nilamkarande3010@gmail.com">nilamkarande3010@gmail.com</a></div>
            </div>

            <div className="address-contact">
              <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-linkedin fa-stack-1x fa-inverse"></i></span>
              <div className="address-content"><a href="https://www.linkedin.com/in/nilam-karande-680a3719b/" target="_blank" rel="noopener noreferrer">LinkedIn: Nilam Karande</a></div>
            </div>

            <div className="address-contact">
              <span className="fa-stack"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-github fa-stack-1x fa-inverse"></i></span>
              <div className="address-content"><a href="https://github.com/NilamKarande" target="_blank" rel="noopener noreferrer">GitHub: NilamKarande</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;