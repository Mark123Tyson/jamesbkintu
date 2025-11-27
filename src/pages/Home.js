import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import './styles/About.css';

export default function HomeAbout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">

      {/* HERO SECTION */}
      <section className="home">
        <motion.div className="home-image" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <img src={`${process.env.PUBLIC_URL}/images/home-bg.jpeg`} alt="Doctor James Kintu" />
        </motion.div>

        <motion.div className="home-content" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <h1 className="accent text-4xl font-semibold mb-3">Doctor James Kintu</h1>
          <p className="text-lg">Governance | Development | Academia</p>
          <p>Experienced leader in Kampala, Uganda, with over 20 years in public service, governance, international development, and academia.</p>
          <p>Dedicated to Uganda’s nation-building via inclusive, evidence-based solutions in climate change governance and gender-inclusive food security.</p>
          <p>Rooted in Amartya Sen’s Capability Approach. PhD (ABD) on climate-food security in Busoga.</p>
          <p>Available for contract roles in public administration, development, consultancy, academia.</p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        
        {/* Elegant "About Me" Heading with Perfect Spacing */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span>About Me</span>
        </motion.div>

        {/* Hero Overview */}
        <div className="about-hero">
          <motion.div className="about-hero-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h3>My Overview</h3>
            <p>Held roles in Ugandan government, UN-funded programs, World Bank/AfDB consultancies, and academia. Led multi-million-dollar reforms in health equity, youth empowerment, and sustainable development.</p>
            <p>Rooted in Amartya Sen’s Capability Approach, combining global practices with local realities for collaboration and outcomes.</p>
          </motion.div>

          <motion.div className="about-hero-image" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <img src={`${process.env.PUBLIC_URL}/images/strong.jpg`} alt="Doctor James Kintu" />
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div className="about-grid" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div><h3>Education</h3><ul>
            <li>PhD (ABD) Global Governance and Human Security, UMass Boston (exp. 2026)</li>
            <li>MA Global Governance and Human Security, UMass Boston (2015)</li>
            <li>MBA, ESAMI Tanzania (2016)</li>
            <li>MA Public Administration and Management, Makerere (2005)</li>
            <li>BA Social Sciences, Makerere (1999)</li>
          </ul></div>
          <div><h3>Certifications & Training</h3><ul>
            <li>Mediation (UMass, 2017)</li>
            <li>Public Finance (LDC, 2018)</li>
            <li>MAXIMIZERS Leadership Coaching (2025)</li>
            <li>Administrative Law (LDC, 2002)</li>
            <li>M&E (UNDP, 2016)</li>
            <li>Training: China, UK, Italy, Canada, Denmark.</li>
          </ul></div>
          <div><h3>Philosophy & Future</h3>
            <p>Empower via Capability Approach. Founded Bukanga United; youth/Fathers’ Union roles.</p>
            <p>Aspirations: Consultant in climate/food security; MAXIMIZERS coaching; conflict resolution; program leadership.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="contact-navigation">
          <button className="nav-btn" onClick={() => navigate('/experience')}>
            View Full Experience
          </button>
        </div>
      </section>
    </div>
  );
}