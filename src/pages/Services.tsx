import { FiCode, FiLayout, FiCheckCircle } from 'react-icons/fi';

const Services = () => {
  const servicesList = [
    {
      icon: <FiCode />,
      title: "Web Development",
      desc: "Building responsive, functional, and interactive web applications using modern technologies like React, JavaScript, and Tailwind CSS."
    },
    {
      icon: <FiLayout />,
      title: "Web Design / UI Layouts",
      desc: "Designing intuitive user interfaces and wireframes in Figma to ensure a seamless and visually appealing user experience."
    },
    {
      icon: <FiCheckCircle />,
      title: "Manual Testing & QA",
      desc: "Conducting thorough testing of web applications to identify bugs, usability issues, and validations."
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem' }}>
      <p style={{ color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Services</p>
      <div style={{ width: '60px', height: '3px', background: 'var(--accent-color)', margin: '0.5rem 0 1.5rem 0' }}></div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-light)', marginBottom: '1rem' }}>What I Offer</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Here is how I can contribute to your team, project, or organization.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="about-card" 
            style={{ 
              padding: '2.5rem', // More breathing room inside the box
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ 
              fontSize: '2rem', 
              color: 'var(--accent-light)', 
              marginBottom: '1.5rem',
              padding: '1rem',
              background: 'var(--nav-bg)',
              borderRadius: '12px',
              boxShadow: '0 4px 15px var(--shadow-primary)'
            }}>
              {service.icon}
            </div>
            
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-light)', marginBottom: '0.75rem' }}>
              {service.title}
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;