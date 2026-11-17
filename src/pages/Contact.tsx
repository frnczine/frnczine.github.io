import { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiLinkedin, FiGithub, FiCopy, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [copied, setCopied] = useState(false);

  const myEmail = "francine.bhaunani@gmail.com"; 
  const formspreeUrl = "https://formspree.io/f/mvkaabaa"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.message || !formData.subject) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1.2rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    background: 'var(--card-bg)',
    color: 'var(--text-main)', 
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    marginTop: '0.5rem',
    transition: 'border-color 0.3s ease',
    appearance: 'none', 
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.95rem',
    color: 'var(--text-light)'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Get in Touch</p>
        <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem auto 1.5rem auto' }}></div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1rem' }}>Let's Connect</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          Have a question, want to work together, or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="about-card" style={{ padding: '3rem' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={labelStyle}>Name</label>
            <input 
              type="text" 
              style={inputStyle} 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              style={inputStyle} 
              placeholder="email@address.com" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label style={labelStyle}>Subject</label>
            <select 
              style={inputStyle}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            >
              <option value="" disabled>Select a subject...</option>
              <option value="Job Opportunity">Job Opportunity / Internship</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea 
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} 
              placeholder="Tell me about your project or inquiry..." 
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="btn-primary"
            style={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '0.5rem',
              opacity: status === 'loading' ? 0.7 : 1,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'} <FiSend />
          </button>

          {status === 'success' && (
            <p style={{ color: '#4ade80', textAlign: 'center', fontWeight: 600, marginTop: '0.5rem' }}>
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#f87171', textAlign: 'center', fontWeight: 600, marginTop: '0.5rem' }}>
              Oops! Please fill out all required fields or try again.
            </p>
          )}
        </form>

        {/*Direct Contact (to my email)*/}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiMail style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }} /> 
            <a href={`mailto:${myEmail}`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              {myEmail}
            </a>
            <button 
              onClick={copyEmail} 
              title="Copy Email" 
              style={{ background: 'transparent', border: 'none', color: 'var(--accent-color)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
            {copied && <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 600 }}>Copied!</span>}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiMapPin style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }} /> Cavite, Philippines
          </div>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/francine-anne-bhaunani-953a1828a/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} className="social-link">
            <FiLinkedin />
          </a>
          <a href="https://github.com/frnczine" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} className="social-link">
            <FiGithub />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;