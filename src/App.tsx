import { useEffect } from 'react';

/*COMPONENTS */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*PAGES*/
import Home from './pages/Home';
import About from './pages/About'; 
import Projects from './pages/Projects';
import Services from './pages/Services';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section id="home" className="scroll-mt-24"><Home/></section>
        <section id="about" className="scroll-mt-24"><About/></section>
        <section id="projects" className="scroll-mt-24"><Projects/></section>
        <section id="resume" className="scroll-mt-24"><Resume/></section>
        <section id="services" className="scroll-mt-24"><Services/></section>
        <section id="contact" className="scroll-mt-24"><Contact/></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;