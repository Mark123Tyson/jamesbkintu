import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './styles/About.css';


export default function About() {
  const navigate = useNavigate();
  return (
    <section id="about" className="about">

      {/* HERO / OVERVIEW SECTION */}
      <div className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="accent">Overview</h2>
          <p>
            Held roles in Ugandan government, UN-funded programs, World Bank/AfDB consultancies, and academia.
            Led multi-million-dollar reforms in health equity, youth empowerment, and sustainable development.
          </p>
          <p>
            Rooted in Amartya Sen’s Capability Approach, combining global practices with local realities for collaboration and outcomes.
          </p>
        </motion.div>

        <motion.div
          className="about-hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/home-bg.jpeg`}
            alt="Doctor James Kintu"
          />
        </motion.div>
      </div>

      {/* GRID FOR REMAINING SECTIONS */}
      <div className="about-grid">
        <div>
          <h3>Education</h3>
          <ul>
            <li>PhD (ABD) Global Governance and Human Security, UMass Boston (exp. 2026)</li>
            <li>MA Global Governance and Human Security, UMass Boston (2015)</li>
            <li>MBA, ESAMI Tanzania (2016)</li>
            <li>MA Public Administration and Management, Makerere (2005)</li>
            <li>BA Social Sciences, Makerere (1999)</li>
          </ul>
        </div>
        <div>
          <h3>Certifications & Training</h3>
          <ul>
            <li>Mediation (UMass, 2017)</li>
            <li>Public Finance (LDC, 2018)</li>
            <li>MAXIMIZERS Leadership Coaching (2025)</li>
            <li>Administrative Law (LDC, 2002)</li>
            <li>M&E (UNDP, 2016)</li>
            <li>Training: China, UK, Italy, Canada, Denmark.</li>
          </ul>
        </div>
        <div>
          <h3>Philosophy & Future</h3>
          <p>Empower via Capability Approach. Founded Bukanga United; youth/Fathers’ Union roles.</p>
          <p>Aspirations: Consultant in climate/food security; MAXIMIZERS coaching; conflict resolution; program leadership.</p>
        </div>
      </div>
  {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
        <button className="nav-btn" onClick={() => navigate('/experience')}>Experience</button>
      </div>
    </section>
  );
}
