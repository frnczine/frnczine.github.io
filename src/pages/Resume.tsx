import { FiDownload, FiCheckCircle, FiUser, FiTarget, FiCode } from 'react-icons/fi';
import resume from '../assets/FrancineAnne_Bhaunani_Resume.pdf';

const Resume = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2rem' }}>
      <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Resume</p>
      <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem 0 1.5rem 0' }}></div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1rem' }}>My Resume</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/*PROFESSIONAL SUMMARY*/}
        <div className="about-card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
            <FiUser /> Professional Summary
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
            A 4th-year Information Technology student specializing in Web Development with a growing interest in Quality Assurance. Familiar with building responsive web 
            applications using React and Node.js, alongside manual testing and exploring API testing with Postman. Currently seeking an On-the-Job Training (OJT) opportunity 
            in Quality Assurance, Front-End Development, or UI/UX Design where I can apply my foundational skills, adapt quickly to new technologies, and contribute to building reliable software.
          </p>
        </div>

        <div className="about-card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
            <FiTarget /> Quick Snapshot
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <FiCheckCircle color="var(--accent-light)" size={20} style={{ marginTop: '0.2rem' }}/>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-light)' }}>Current Status</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>4th-Year BSIT Student</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <FiTarget color="var(--accent-light)" size={20} style={{ marginTop: '0.2rem' }}/>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-light)' }}>Looking For</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>OJT in QA, Web Dev, or UI/UX</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <FiCode color="var(--accent-light)" size={20} style={{ marginTop: '0.2rem' }}/>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-light)' }}>Core Stack</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>HTML5, CSS, JavaScript, React.js, Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/*resume*/}
        <div style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem 2rem', background: 'var(--card-bg)', border: '2px dashed var(--border-color)', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1rem' }}>
            Want the full details?
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
            Download my complete, formatted resume in PDF format.
          </p>
          <a 
            href={resume}
            download
            className="btn-primary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              margin: 0, 
              padding: '1.2rem 3rem',
              fontSize: '1.1rem',
              boxShadow: '0 10px 25px var(--shadow-primary)'
            }}
          >
            <FiDownload size={22} /> Download Resume (PDF)
          </a>
        </div>

      </div>
    </div>
  );
};

export default Resume;