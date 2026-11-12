import { links } from '../lib/site-config';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Header links={links} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects links={links} />
      <Contact links={links} />
      <Footer links={links} />
    </div>
  );
}

