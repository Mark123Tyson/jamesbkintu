import React from 'react';
import { motion } from 'framer-motion';
import './styles/Home.css';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <section className="home">
       
        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/home-bg.jpeg`} alt="James Kintu" />
        </motion.div>
         <motion.div
          className="home-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="accent text-4xl font-semibold mb-3">Doctor James Kintu</h1>
          <p className="text-lg">Governance | Development | Academia</p>
          <p>Experienced leader in Kampala, Uganda, with over 20 years in public service, governance, international development, and academia.</p>
          <p>Dedicated to Uganda’s nation-building via inclusive, evidence-based solutions in climate change governance and gender-inclusive food security.</p>
          <p>Rooted in Amartya Sen’s Capability Approach. PhD (ABD) on climate-food security in Busoga.</p>
          <p>Available for contract roles in public administration, development, consultancy, academia.</p>
        </motion.div>
      </section>
      {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/about')}>About Me</button>
      
      </div>
      
    </div>
  );
}