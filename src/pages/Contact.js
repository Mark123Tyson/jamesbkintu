import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Contact.css';


export default function Contact() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-top-wrapper">
        <div className="contact-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/about-pic.jpg`}
            alt="James Kintu"
          />
        </div>
        <div className="contact-caption"><h4>James Kintu</h4></div>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:jamesbkintu@gmail.com">jamesbkintu@gmail.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/james-kintu-b46960aa">james-kintu-b46960aa</a></li>
            <li><strong>Phone:</strong> <a href="tel:+256772611055">+256 772611055</a></li>
            <li><strong>Address:</strong> P.O. Box 554, Mukono</li>
            <li><strong>Location:</strong> Kampala, Uganda</li>
          </ul>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <form>
          <h3>Message Me From Here</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/publications')}>Publications</button>
        <button className="nav-btn" onClick={() => navigate('/')}>Home Page</button>
      </div>
    </section>
  );
}
