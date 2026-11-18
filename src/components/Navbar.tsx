import { useState, useEffect, useRef } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const isClicking = useRef(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(currentTheme === 'dark');

    const handleScroll = () => {
      if (isClicking.current) return;

      const sections = ['home', 'about', 'projects', 'resume', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
            break;
          }
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentSection = 'contact';
      }
      setActiveSection(currentSection);
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    isClicking.current = true;
    setTimeout(() => {
      isClicking.current = false;
    }, 1500); 
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  };

  const navLinks = [
    { name: 'HOME', path: '#home', id: 'home' },
    { name: 'ABOUT', path: '#about', id: 'about' },
    { name: 'PROJECTS', path: '#projects', id: 'projects' },
    { name: 'RESUME', path: '#resume', id: 'resume' },
    { name: 'SERVICES', path: '#services', id: 'services' },
    { name: 'CONTACT', path: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(124, 58, 138, 0.15)',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1400px', 
          width: '100%', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
      >
        
        {/* BRAND SECTION */}
        <a 
          href="#home" 
          onClick={() => handleNavClick('home')}
          style={{ textDecoration: 'none', color: 'var(--brand-color)', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '3px' }}
        >
          <span><span style={{ color: 'var(--accent-color)' }}>//</span> FRNCZINE</span>
        </a>

        {/*DESKTOP*/}
        <ul 
          className={`nav-links ${isOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            alignItems: 'center',
            margin: 0,
            padding: 0
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className={activeSection === link.id ? 'active' : ''}
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/*ACTIONS*/}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid var(--accent-color)',
              background: 'transparent',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {isDark ? <FiMoon /> : <FiSun />}
          </button>
          
          {/*HAMBURGER*/}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="mobile-toggle"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              fontSize: '1.8rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;