import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThreeAMFS from './components/ComponentThreeAMFS';
import ComponentFour from './components/ComponentFour';
import DevelopmentProcess from './components/DevelopmentProcess';
import ResearchValidation from './components/ResearchValidation';
import Commercialization from './components/Commercialization';
import DemoVideos from './components/DemoVideos';
import Downloads from './components/Downloads';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Wrapper for the components page
const ComponentsPage = () => (
  <div id="components">
    <ComponentOne />
    <ComponentTwo />
    <ComponentThreeAMFS />
    <ComponentFour />
  </div>
);



function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Add simple intersection observer for fade-in animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    // Wait slightly for DOM to render the new route
    setTimeout(() => {
      document.querySelectorAll('.scroll-animate').forEach((el) => {
        if (!el.classList.contains('animate-fade-in')) {
          el.style.opacity = 0;
          observer.observe(el);
        }
      });
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-container relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2" style={{ top: '40%' }}></div>
      <div className="blob blob-1" style={{ top: '80%', left: 'auto', right: '-10%', backgroundColor: 'rgba(123, 198, 123, 0.3)' }}></div>

      <Navbar />

      <main style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/development" element={<DevelopmentProcess />} />
          <Route path="/research" element={<ResearchValidation />} />
          <Route path="/commercialization" element={<Commercialization />} />
          <Route path="/demo-videos" element={<DemoVideos />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
