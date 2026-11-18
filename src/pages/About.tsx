import { FiCode, FiCpu, FiTool, FiMapPin, FiBookOpen, FiAward, FiUsers } from 'react-icons/fi';
import ScrollRevealTextEffect from '../components/TextEffect';

const About = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem' }}>
      <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>My Story</p>
      <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem 0 1.5rem 0' }}></div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1.5rem' }}>More Than Just Code</h2>
      
      {/* INTRO (detailed) */}
      <div style={{ fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '800px' }}>

        <ScrollRevealTextEffect
          text="I am a 4th-year Bachelor of Science in Information Technology student at De La Salle University – Dasmariñas, specializing in Web Development. My journey in tech started with a fascination for how design and code come together to solve real-world problems. 
          I am deeply passionate about building user-centric web applications. Beyond just writing code, I focus on ensuring software reliability through Quality Assurance by checking validations, error handling, and responsiveness. I thrive in collaborative team environments, adapting quickly to emerging technologies and continuously broadening my expertise."
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontWeight: 600, marginTop: '1.5rem' }}>
          <FiMapPin color="var(--accent-color)" /> Based in Cavite, Philippines
        </div>
      </div>

      {/*SKILLS OVERVIEW*/}
      <div className="about-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', marginBottom: '2rem' }}>
          <FiCpu /> Skills Overview
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/*1st Column*/}
          <div>
            <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}><FiCode /> Programming & Web Development</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'C#', 'Responsive Web Design', 'CRUD Operations', 'Frontend & Backend'].map(skill => (
                <span key={skill} style={{ padding: '6px 14px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{skill}</span>
              ))}
            </div>

            <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}><FiCode /> Frameworks & Libraries</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Vite', 'React Router'].map(skill => (
                <span key={skill} style={{ padding: '6px 14px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{skill}</span>
              ))}
            </div>
          </div>

          {/*2nd Column*/}
          <div>
            <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}><FiTool /> Software Dev & Integration</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Postman', 'API Testing', 'REST API Integration', 'PayMongo', 'Cloudinary', 'Firebase (Auth, Hosting)'].map(skill => (
                <span key={skill} style={{ padding: '6px 14px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{skill}</span>
              ))}
            </div>

            <h4 style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-light)' }}><FiTool /> UI/UX & Graphic Design</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'CorelDRAW', 'Canva', 'Wireframing', 'Prototyping', 'UI/UX Design Principles', 'Digital Layout Design'].map(skill => (
                <span key={skill} style={{ padding: '6px 14px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/*SOFT SKILLS*/}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FiUsers color="var(--accent-color)" /> Soft Skills
        </h3>
        <div className="about-card" style={{ padding: '2rem' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 2 }}>
            <li><strong>Team Collaboration & Leadership:</strong> Experienced in leading student sections and working within Agile Scrum teams.</li>
            <li><strong>Strong Attention to Details:</strong> Adept at identifying UI/UX inconsistencies and software bugs.</li>
            <li><strong>Time Management and Organization:</strong> Balanced academic honors with capstone development.</li>
            <li><strong>Analytical and Problem-Solving:</strong> Break down complex problems into manageable steps to troubleshoot issues and deliver effective results across projects.</li>
            <li><strong>Adaptability:</strong> Willingness to foster team success, contribute ideas, and adapt to new technologies.</li>
          </ul>
        </div>
      </div>

      {/*EDUCATION TIMELINE*/}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '2rem' }}>Education & Leadership</h3>
        
        <div style={{ borderLeft: '2px solid var(--accent-color)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-2.4rem', top: '0', background: 'var(--accent-color)', borderRadius: '50%', padding: '4px' }}><FiBookOpen color="white" size={16} /></div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-light)' }}>BS Information Technology</h4>
            <p style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>De La Salle University – Dasmariñas | 2023 - Present</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Specialization in Web Development. <br />
              <strong>Dean’s Lister:</strong> 1st Sem (A.Y. 2023–2024), 2nd Sem (A.Y. 2024–2025), 1st & 2nd Sem (A.Y. 2025–2026).
            </p>          
            </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-2.4rem', top: '0', background: 'var(--accent-color)', borderRadius: '50%', padding: '4px' }}><FiAward color="white" size={16} /></div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-light)' }}>Leadership</h4>
            <p style={{ color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Class Vice President (2023-2025)</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Led the BSIT Block/Section and organized academic initiatives. Often takes the lead in group settings, applying strong organizational skills to manage team sprints.
            </p>
          </div>

        </div>
      </div>

      {/*CERTIFICATIONS GRID*/}
      <div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1.5rem' }}>Certifications</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {[
            "Agile Project Management | HP Life (2026)",
            "AI Ready ASEAN | ASEAN Foundation (2026)",
            "API Beginner | Postman (2026)",
            "Get the most out of Jira | Atlassian Learning (2026)",
            "API Testing Path (v12) | Postman (2026)",
            "Introduction to Cybersecurity | Cisco Networking Academy (NetAcad) (2025)",
          ].map((cert, index) => (
            <div key={index} style={{ padding: '1rem 1.5rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s ease' }} className="about-card">
              <FiAward size={20} color="var(--accent-color)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)' }}>{cert}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;