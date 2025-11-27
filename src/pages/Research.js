// ResearchInterests.jsx
import React, { useEffect } from 'react';
import './styles/Research.css';
import { useNavigate } from 'react-router-dom';

export default function ResearchInterests() {
  const navigate = useNavigate();

  useEffect(() => {
    // Run only on touch devices or devices without hover
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 1.0 });

      document.querySelectorAll('.accordion details').forEach(detail => {
        observer.observe(detail);
      });

      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="research" className="research">
      <h2>Research Interests</h2>
      <div className="accordion">
        <details>
          <summary>Governance of Climate Change</summary>
          <p>
            Examines policy frameworks improving climate resilience in East Africa;
            Focuses on stakeholder-led adaptation, cross-sector collaboration,
            innovative funding; Studies early warning systems, EAC/AU regional
            alignment, community-based strategies for fair resource access and
            decision-making participation.
          </p>
        </details>

        <details>
          <summary>Gender for Sustainable Food Security</summary>
          <p>
            Analyzes gender-inclusive approaches strengthening food systems/economic
            empowerment for rural women/youth; Explores structural barriers (land
            access, market linkages, socio-cultural norms); Uses capability
            frameworks to empower women entrepreneurs, improving household
            resilience, SDG alignment (1,2,5,13).
          </p>
        </details>

        <details>
          <summary>Intersection of Climate and Food Security</summary>
          <p>
            Investigates policy gaps, market inefficiencies, gender disparities,
            climate variability in Busoga; Develops scalable models with
            climate-smart agriculture, gender equality, community governance;
            Addresses food insecurity paradox in fertile regions for sustainable
            East African systems.
          </p>
        </details>

        <details>
          <summary>Policy Implementation and Monitoring</summary>
          <p>
            Creates robust M&E frameworks tracking climate/food initiative impacts;
            Analyzes data-driven governance solving implementation issues;
            Promotes accountability in public/donor-funded programs ensuring real
            results from policies.
          </p>
        </details>
      </div>

      <p className="phd-note">
        Current PhD: Explores governance of intensive sugarcane-growing and
        climate change impacts on sustainable food security in Busoga region,
        Eastern Uganda; Fueled by tackling systemic food insecurity in fertile
        areas via inclusive, sustainable strategies.
      </p>

     {/* Navigation Buttons */}
      <div className="contact-navigation">
        <button className="nav-btn" onClick={() => navigate('/experience')}>Experience</button>
        <button className="nav-btn" onClick={() => navigate('/publications')}>Publications</button>
      </div>
    </section>
  );
}
