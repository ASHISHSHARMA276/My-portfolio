import React from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Socials } from './components/Socials';

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="noise-overlay" />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 backdrop-blur-md bg-background/60 border-b border-border/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
          >
            Ashish{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Sharma
            </span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <a href="#projects" className="hover:text-primary transition-colors">/work</a>
            <a href="#skills" className="hover:text-primary transition-colors">/skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">/experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">/contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Socials />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <p>&copy; {new Date().getFullYear()} Ashish Sharma. Built with intent.</p>
      </footer>
    </div>
  );
}

export default App;
