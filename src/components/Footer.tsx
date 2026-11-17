import { FiLinkedin, FiGithub, FiHeart, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      marginTop: '4rem',
      background: 'var(--card-bg)',
      backdropFilter: 'blur(16px)',
      borderRadius: '40px 40px 0 0', 
      borderTop: '1px solid var(--border-color)',
      borderLeft: '1px solid var(--border-color)',
      borderRight: '1px solid var(--border-color)',
      padding: '1.5rem 3rem', // Slightly more horizontal padding, slim vertical
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
            <div style={{ 
              width: '30px', 
              height: '3px', 
              background: 'linear-gradient(90deg, var(--accent-color), var(--accent-light))',
              borderRadius: '2px'
            }}></div>
            <span style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '2px', color: 'var(--brand-color)' }}>
              <span style={{ color: 'var(--accent-color)' }}>//</span> FRNCZNE
            </span>
          </a>

          <div style={{ display: 'flex', gap: '0.8rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1.5rem' }}>
            <a href="https://www.linkedin.com/in/francine-anne-bhaunani-953a1828a/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'all 0.3s' }} className="hover:text-[var(--accent-color)] hover:-translate-y-0.5">
              <FiLinkedin />
            </a>
            <a href="https://github.com/frnczine" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', transition: 'all 0.3s' }} className="hover:text-[var(--accent-color)] hover:-translate-y-0.5">
              <FiGithub />
            </a>
          </div>
        </div>

        {/*Quick Links*/}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#home" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">Home</a>
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">About</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">Projects</a>
          <a href="#resume" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">Resume</a>
          <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">Services</a>
          <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }} className="hover:text-[var(--accent-color)] transition-colors">Contact</a>
        </div>

        {/* Right: Contact Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
           <a href="mailto:francine.bhaunani@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', textDecoration: 'none' }} className="hover:text-[var(--accent-color)] transition-colors">
             <FiMail /> Email Me
           </a>
           <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
             <FiMapPin /> Cavite, PH
           </span>
        </div>

      </div>

      {/* Bottom Tiny Copyright */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '1rem auto 0 auto', 
        paddingTop: '1rem', 
        borderTop: '1px solid var(--border-color)',
        display: 'flex', 
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>
          &copy; {currentYear} Francine Anne Bhaunani. All Rights Reserved.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          Built with <FiHeart color="var(--accent-color)" size={12} /> using React, TypeScript & Tailwind.
        </p>
      </div>

    </footer>
  );
};

export default Footer;