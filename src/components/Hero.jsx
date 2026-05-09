import React from 'react';
import { PlayCircle, ArrowRight } from 'lucide-react';
import MultiplayerDemoVideo from '../assets/Videos/Multiplayer Game Demo.mp4';

const Hero = () => {
  return (
    <section id="home" className="section scroll-animate" style={{ paddingBottom: '4rem' }}>
      <div className="container grid grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-block" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '600', width: 'fit-content' }}>
            University Final Year Research Project
          </div>
          <h1>
            <span className="text-gradient">Word Garden</span> <br />
            Adaptive Multiplayer Learning Platform
          </h1>
          <p className="lead">
            A futuristic AI-powered educational platform designed specifically for dyslexic children using adaptive learning, multiplayer collaboration, and anticipatory feedback.
          </p>
          <div className="flex gap-4" style={{ marginTop: 'var(--spacing-4)' }}>
            <a href={MultiplayerDemoVideo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PlayCircle size={24} />
              Watch Demo
            </a>
            <button className="btn btn-secondary">
              Explore Research
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="/assets/hero_image_1778261313525.png" 
            alt="Futuristic Educational Concept" 
            className="rounded-lg shadow-lg"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
