// Publications.jsx
import React from 'react';
import './styles/Publications.css';
import { useNavigate } from 'react-router-dom';

export default function Publications() {
  const navigate = useNavigate();

  return (
    <section id="publications" className="publications">
      <h2>Publications</h2>

      <div className="pub-grid">
        <div className="pub-item">
          <h4>2025: Upwards Management</h4>
          <p>
            Mustard Seed International, VA, USA<br />
            Transformational leadership across public & private sectors
          </p>
        </div>

        <div className="pub-item">
          <h4>2024: Climate-Resilient Agriculture in Uganda</h4>
          <p>
            Capability Approach framework<br />
            Shaped EAC regional policy
          </p>
        </div>

        <div className="pub-item">
          <h4>2016: Managing the New Performance Appraisal System</h4>
          <p>
            MA Thesis, Makerere University<br />
            Case: Ministry of Works
          </p>
        </div>

        <div className="pub-item">
          <h4>2005: Performance Management in Uganda’s Public Service</h4>
          <p>
            MA Thesis<br />
            Case: Ministry of ICT
          </p>
        </div>

        <div className="pub-item">
          <h4>Policy Briefs 2016–2023</h4>
          <p>
            10+ briefs on gender, youth, climate<br />
            Government & donor adoption
          </p>
        </div>

        <div className="pub-item">
          <h4>Theses</h4>
          <p>
            MA Global Governance 2015<br />
            MBA 2016<br />
            MA PAM 2005
          </p>
        </div>
      </div>

     {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/research')}>Research</button>
        <button className="nav-btn" onClick={() => navigate('/contact')}>Contacts</button>
      </div>
    </section>
  );
}
