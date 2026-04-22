import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import profile from "../assets/profile.jpg";

/* ── DATA ── */
const researchInterests = [
  { icon: '🫀', title: 'Medical Imaging AI', desc: 'Deep learning for liver lesion classification using CEUS & B-mode ultrasound data using CNNs and Feature Learning.' },
  { icon: '📋', title: 'Clinical NLP', desc: 'LLM fine-tuning on clinical corpora for automated SOAP note generation using 10,000+ clinical samples.' },
  { icon: '🧬', title: 'Computational Biology', desc: 'Cell-Cell Interaction prediction from scRNA-seq data using GNNs.' },
  { icon: '🩸', title: 'Hematology ML', desc: 'Basic ML based Blood disorder classification, presented at an international conference.' },
];

const skills = [
  'Python', 'ML', 'Deep Learning', 'NLP', 'Computer Vision', 'Web Development', 'Software Engineering', 'PyTorch', 'React.js', 'Spring Boot',
  'PostgreSQL', 'Canva', 'MySQL', 'OOPS in Java'
];

/* ── COMPONENT ── */
function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add('visible');
  }, []);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-label">AI Researcher · Mahindra University</p>
            <h1 className="hero-name">
              Ananya<br />
              <em>Agrawal</em>
            </h1>
            <p className="hero-tagline">
              Building intelligent systems at the intersection of<br />
              <span className="gold-text">Healthcare</span> and <span className="gold-text">Artificial Intelligence</span>.
            </p>
            <div className="hero-actions">
              <NavLink to="/projects" className="btn-primary">View Projects</NavLink>
              <a href="mailto:se23uari010@mahindrauniversity.edu.in" className="btn-ghost">Get in Touch</a>
            </div>
          </div>
          <div className="hero-avatar-wrap">
            <div className="avatar-ring">
              <div className="avatar-image">
                <img src={profile} alt="Ananya" />
              </div>
            </div>
            <div className="avatar-decoration" />
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line" />
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hi! I'm Ananya, an AI undergrad student (ID: SE23UARI010) at
                <strong> Mahindra University, Hyderabad</strong>, with an 8.4 CGPA and a deep
                focus on healthcare AI. My work is driven by the question: <em>how can AI make
                  medicine smarter?</em>
              </p>
              <p>
                I am doing a research project on developing ML/DL models for "Early Detection of Portal Hypertension" in upper & lower gastrointestinal tract.
                Working on clinical and ultrasound imaging datasets to identify varices and get SSM (spleen stiffness
                measurement) for prediction using CNN and Feature engineering for improved model performance.
                Also, I served as <strong>Head Volunteer</strong> at the AIHW 2025 (AI in Healthcare and Wellness International Conference) among others.
              </p>
              <p>
                When I'm not building models, I'm a passionate baker and Mystery-Thriller novel ethusiast.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">8.4</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">4+</span>
                <span className="stat-label">Research Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">1</span>
                <span className="stat-label">Conference Publication</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section research-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line" />
            <h2 className="section-title">Research Areas</h2>
          </div>
          <div className="research-grid">
            {researchInterests.map((r, i) => (
              <div className="research-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="research-header">
                  <div className="research-icon">{r.icon}</div>
                  <h3>{r.title}</h3>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAL DETAILS ── */}
      <section className="section details-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line" />
            <h2 className="section-title">Personal Details</h2>
          </div>
          <div className="details-grid">
            <div className="detail-block">
              <table className="details-table">
                <tbody>
                  <tr>
                    <td className="detail-key">Name</td>
                    <td className="detail-val">Ananya Agrawal</td>
                  </tr>
                  <tr>
                    <td className="detail-key">College</td>
                    <td className="detail-val">Mahindra University, Hyderabad</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Student ID</td>
                    <td className="detail-val">SE23UARI010</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Programme</td>
                    <td className="detail-val">B.Tech in Artificial Intelligence</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Phone</td>
                    <td className="detail-val">+91 89770 42328</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Personal Email</td>
                    <td className="detail-val">ananyaagrawal2301@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="detail-key">College Email</td>
                    <td className="detail-val">se23uari010@mahindrauniversity.edu.in</td>
                  </tr>
                  <tr>
                    <td className="detail-key">Location</td>
                    <td className="detail-val">Hyderabad, Telangana, India</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="skills-block">
              <h3 className="skills-heading">Technical Skills</h3>
              <div className="skills-cloud">
                {skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <footer className="home-footer">
        <div className="container footer-inner">
          <p className="footer-quote">
            <em>"Turning coffee into ideas, and ideas into something real."</em>
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/anuu-xxiii" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://github.com/anuu-xxiii" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
            <a href="mailto:ananyaagrawal2301@gmail.com" className="footer-link">Email</a>
          </div>
          <p className="footer-copy">© 2026 Ananya Agrawal · Mahindra University</p>
        </div>
      </footer>

    </div>
  );
}

export default Home;
