// Experience.jsx
import React from 'react';
import './styles/Experience.css';
import { useNavigate } from 'react-router-dom'


const Experience = () => {
  const navigate = useNavigate();

  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>

      <div className="timeline">
        <div className="timeline-item">
          <h3>2022–Present: Associate Consultant/Lecturer & Senior Research Fellow</h3>
          <p>Uganda Management Institute; Teaching/Research Assistant, UMass Boston</p>
          <p>
            Developed e-learning curricula for 1,000+ students; Led Busoga climate-food research;
            Mentored 200+ entrepreneurs; EAC/UN policy briefs; Published on climate-conflict nexus.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2016–2022: Undersecretary</h3>
          <p>Ministries of Foreign Affairs & Local Government</p>
          <p>
            Directed MATIP II, USMID, PRELNOR (500,000+ beneficiaries);
            RMNCAHN-G health equity for 100,000+ women; Trained 300+ officials.
          </p>
        </div>

        <div className="timeline-item">
          <h3>2013–2016: Senior Private Secretary to Prime Minister</h3>
          <p>Managed $10M+ budgets; Mentored 500+ staff; Cross-ministerial collaboration.</p>
        </div>
      </div>

      <h3>Key Projects</h3>
      <div className="projects-grid">
        <div className="project-card">
          <h4>ESPP2 Youth ($5M)</h4>
          <p>50,000+ youth empowered; 20% employment growth.</p>
        </div>
        <div className="project-card">
          <h4>MATIP II / USMID</h4>
          <p>500,000+ beneficiaries; 30% faster delivery.</p>
        </div>
        <div className="project-card">
          <h4>Busoga Research</h4>
          <p>10% yield boost; Early warning for 5,000+ households.</p>
        </div>
      </div>

       {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/')}>About</button>
        <button className="nav-btn" onClick={() => navigate('/research')}>Research</button>
      </div>
    </section>
  );
};

export default Experience;