import { useState } from 'react';
import { FiMapPin, FiLinkedin, FiGithub, FiArrowRight, FiX } from 'react-icons/fi';
import myFormalPic from '../assets/myFormalPic.png';
import Typewriter from '../components/Typewriter';
import { projects } from '../data/projects';
import type { Project } from '../types';

const Home = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const featuredProjects = projects.slice(0, 3);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 2rem 4rem 2rem' }}>
      
      <div className="hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            IT STUDENT • OPEN FOR OJT
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            Bonjour, I'm <br />
            <span style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--accent-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Francine
            </span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            <Typewriter 
              text="Bachelor of Science in Information Technology undergraduate specializing in Web Development. Passionate about building user-centric web applications that enhance user experience." 
              speed={35} 
            />
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ margin: 0 }}>View Projects</a>
            <a href="#contact" className="btn-outline" style={{ margin: 0 }}>Get in Touch</a>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={myFormalPic} 
            alt="Francine Bhaunani" 
            className="profile-image"
            style={{ width: '320px', height: '320px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 50px var(--shadow-primary)' }}
          />
        </div>
      </div>

      {/*BRIEF BIO & TOP SKILLS*/}
      <div className="about-card" style={{ marginTop: '3rem' }}>        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left: Brief Bio */}
          <div>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>About Me</p>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem 0 1.5rem 0' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1rem' }}>Who I Am</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I build functional web apps, design intuitive layouts, and test them to make sure every detail works smoothly.
            </p>
            <a href="#about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-light)', fontWeight: 600, textDecoration: 'none' }}>
              Read my full story <FiArrowRight />
            </a>
          </div>

          {/*Right: Top Skills & Socials*/}
          <div>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Top Skills</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {['HTML5', 'CSS', 'JavaScript', 'React.js', 'Node.js'].map(skill => {
                const isHovered = hoveredSkill === skill;
                return (
                  <span 
                    key={skill} 
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ 
                      padding: '8px 16px', 
                      border: '2px solid var(--accent-light)', 
                      borderRadius: '50px', 
                      color: isHovered ? '#ffffff' : 'var(--accent-light)', 
                      backgroundColor: isHovered ? 'var(--accent-color)' : 'transparent',
                      fontWeight: 600,
                      cursor: 'default',
                      transition: 'all 0.3s ease',
                      boxShadow: isHovered ? '0 4px 15px var(--shadow-primary)' : 'none',
                      transform: isHovered ? 'translateY(-2px)' : 'none'
                    }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '1rem' }}>
              <p style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}><FiMapPin /> Cavite, Philippines</p>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.linkedin.com/in/francine-anne-bhaunani-953a1828a/" target="_blank" rel="noreferrer" className="social-link">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/frnczine" target="_blank" rel="noreferrer" className="social-link">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>

        </div>
      </div>

      {/*FEATURED PROJECTS*/}
      <div style={{ marginTop: '6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Portfolio</p>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem 0 1rem 0' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)' }}>Featured Work</h2>
          </div>
          <a href="#projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-light)', fontWeight: 600, textDecoration: 'none', paddingBottom: '0.5rem' }}>
            View All <FiArrowRight />
          </a>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
              <img src={project.thumbnail} alt={project.title} />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-meta">{project.category}</p>
                <p className="card-text">{project.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*MODAL FOR FEATURED PROJECTS*/}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FiX size={24} />
            </button>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-meta">{selectedProject.category} | {selectedProject.details.year}</p>
            <img src={selectedProject.thumbnail} alt={selectedProject.title} className="modal-image"/>
            <h4 className="modal-subtitle">Overview</h4>
            <p className="modal-text">{selectedProject.details.fullDescription}</p>
            {selectedProject.details.liveLink && (
              <a href={selectedProject.details.liveLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-light)', fontWeight: 600, display: 'inline-block', marginBottom: '1rem', textDecoration: 'underline' }}>
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
                <span key={index} style={{ padding: '0.4rem 1rem', borderRadius: '50px', backgroundColor: 'var(--accent-color)', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', boxShadow: '0 2px 10px var(--shadow-primary)', letterSpacing: '0.5px', display: 'inline-block' }}>
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

export default Home;