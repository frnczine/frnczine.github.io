import { useState } from 'react';
import { FiX } from 'react-icons/fi';

import { projects } from '../data/projects';
import type { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="section">
      <p className="text-sm font-semibold text-[var(--accent-color)] uppercase tracking-wider">Portfolio</p>
      <div className="section-divider"></div>
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle mb-8">
        Some of the projects I've worked on during my academic journey and personal growth.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card" 
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} />
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-meta">{project.category}</p>
              <p className="card-text">{project.shortDesc}</p>
              <div className="card-tags">
                {project.tools.slice(0, 3).map((tool, index) => (
                  <span key={index} className="tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*MODAL*/}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX size={24} />
            </button>

            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-meta">{selectedProject.category} | {selectedProject.details.year}</p>
            
            <img 
              src={selectedProject.thumbnail} 
              alt={selectedProject.title} 
              className="modal-image"
            />

            <h4 className="modal-subtitle">Overview</h4>
            <p className="modal-text">{selectedProject.details.fullDescription}</p>

            {/*Live Link Button*/}
            {selectedProject.details.liveLink && (
              <a 
                href={selectedProject.details.liveLink} 
                target="_blank" 
                rel="noreferrer" 
                style={{ color: 'var(--accent-light)', fontWeight: 600, display: 'inline-block', marginBottom: '1rem', textDecoration: 'underline' }}
              >
                View Live Project ↗
              </a>
            )}

            <h4 className="modal-subtitle">Project Highlights</h4>
            <ul className="modal-list">
              {selectedProject.details.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <h4 className="modal-subtitle">Tech Stack</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {selectedProject.tools.map((tool, index) => (
                <span 
                  key={index} 
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    backgroundColor: 'var(--accent-color)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    boxShadow: '0 2px 10px var(--shadow-primary)',
                    letterSpacing: '0.5px',
                    display: 'inline-block'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;