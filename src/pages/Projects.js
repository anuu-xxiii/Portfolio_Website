import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'CEUS Liver Lesion Classifier',
    subtitle: 'Portal Hypertension Research',
    category: 'Medical AI',
    year: '2026',
    description:
      'Replication and extension of Căleanu et al. 2021, a deep CNN architecture for focal liver lesion classification using Contrast-Enhanced Ultrasound (CEUS) imaging from TCIA dataset (~270 GB DICOM). Under faculty supervision as part of an ongoing research project.',
    tech: ['Python', 'PyTorch', 'DICOM', 'CEUS Imaging', 'TensorFlow', 'pydicom'],
    highlights: ['~270 GB TCIA dataset', 'CEUS & B-mode ultrasound', 'CNN and Feature Extraction'],
    status: 'In Progress',
    statusColor: 'blue',
  },
  {
    id: 2,
    title: 'Clinical SOAP Note Generator',
    subtitle: 'LLM Fine-tuning · Clinical NLP',
    category: 'NLP',
    year: '2025',
    description:
      'Fine-tuned large language model on clinical dialogue corpora to auto-generate structured SOAP (Subjective, Objective, Assessment, Plan) notes from doctor-patient conversations. Reduces clinical documentation time by automating note transcription.',
    tech: ['Python', 'Hugging Face', 'LLM', 'Fine-tuning', 'Clinical NLP', 'BERT'],
    highlights: ['Clinical NLP pipeline', 'SOAP note structure', 'Structured output generation'],
    github: 'https://github.com/your-username/soap-note-generator',
    status: 'Completed',
    statusColor: 'green',
  },
  {
    id: 3,
    title: 'SERS - Student Elective Registration System',
    subtitle: 'Full-Stack · Software Engineering',
    category: 'Software Engineering',
    year: '2026',
    description:
      'Full-stack elective registration platform for Mahindra University. Built with React.js frontend, Spring Boot REST API backend, and PostgreSQL database. Includes student, faculty, and admin dashboards with elective seat management, waitlisting, and semester planning.',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Java', 'REST API', 'UML'],
    highlights: ['3-tier architecture', 'Admin & student dashboards', 'Group NOVA, Team 14'],
    github: 'https://github.com/your-username/sers-elective-system',
    status: 'In-Progress',
    statusColor: 'blue',
  },
  {
    id: 5,
    title: 'SketchCraft',
    subtitle: 'Stable Diffusion · Generative AI',
    category: 'Generative AI',
    year: '2025',
    description:
      'Sketch-to-product visual design generator powered by Stable Diffusion 1.5. Users draw rough sketches on a live canvas interface which are transformed into polished product renders. Built entirely on free-tier Colab T4 GPU with zero API cost, designed for accessibility.',
    tech: ['Python', 'Stable Diffusion 1.5', 'React', 'Canvas API', 'Hugging Face', 'Colab'],
    highlights: ['Zero API cost', 'Live canvas interface', 'Colab T4 compatible'],
    github: 'https://github.com/your-username/sketchcraft',
    status: 'In-Progress',
    statusColor: 'blue',
  },
  {
    id: 4,
    title: 'Cell-Cell Interaction Predictor',
    subtitle: 'sc-RNA-seq · Graph Neural Networks',
    category: 'DNN',
    year: '2025',
    description:
      'ANN and CNN pipeline for predicting cell-cell interactions from single-cell RNA sequencing data, with a planned GNN extension. Part of a DNN group assignment using PyTorch. Explores gene expression patterns to infer intercellular signalling networks.',
    tech: ['Python', 'PyTorch', 'ANN', 'CNN', 'GNN', 'scRNA-seq', 'Pandas'],
    highlights: ['scRNA-seq data', 'GNN extension planned'],
    github: 'https://github.com/your-username/cell-interaction-predictor',
    status: 'In Progress',
    statusColor: 'blue',
  },
  {
    id: 6,
    title: 'Blood Disorder Classification',
    subtitle: 'Basic ML on MATLAB · Published Research',
    category: 'Medical AI',
    year: '2024',
    description:
      'Multi-class blood disorder classification system using Matlab simulations on clinical Blood reports of 100 patients from Kaggle+. Achieved high accuracy across 8 disorder categories including Healthy. Research presented at an international conference in Dubai.',
    tech: ['Python', 'PyTorch', 'CNN', 'ResNet', 'Medical Imaging', 'NumPy'],
    highlights: ['In my first year of college', 'Conference: Dubai 2024', 'Under professor supervision'],
    github: 'https://github.com/your-username/blood-disorder-classification',
    status: 'Published',
    statusColor: 'gold',
  },
];

const categoryColors = {
  'Medical AI': '#2a5fa8',
  'NLP': '#1a6b5f',
  'Generative AI': '#6b3a8a',
  'Computational Biology': '#2a7a4a',
  'Full-Stack': '#8a5a2a',
};

function Projects() {
  return (
    <div className="projects-page">
      {/* ── PAGE HERO ── */}
      <section className="projects-hero">
        <div className="container">
          <div className="gold-line" />
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A selection of research, academic, and engineering work. Spanning healthcare AI,
            generative models, and full-stack systems.
          </p>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="projects-section">
        <div className="container">
          <div className="project-grid">
            {projects.map((p, i) => (
              <article
                className="project-card"
                key={p.id}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="project-header">
                  <div className="project-meta">
                    <span
                      className="project-category"
                      style={{ background: `${categoryColors[p.category]}22`, color: categoryColors[p.category], borderColor: `${categoryColors[p.category]}44` }}
                    >
                      {p.category}
                    </span>
                    <span className={`project-status status-${p.statusColor}`}>{p.status}</span>
                  </div>
                  <span className="project-year">{p.year}</span>
                </div>

                <h2 className="project-title">{p.title}</h2>
                <p className="project-subtitle-text">{p.subtitle}</p>
                <p className="project-desc">{p.description}</p>

                <div className="project-highlights">
                  {p.highlights.map((h, j) => (
                    <span className="highlight-pill" key={j}>✦ {h}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {p.tech.map((t, j) => (
                    <span className="tech-tag" key={j}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="projects-footer">
        <div className="container footer-inner-proj">
          <p>More projects coming soon · <a href="https://github.com/anuu-xxiii" target="_blank" rel="noreferrer">Github Link</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
