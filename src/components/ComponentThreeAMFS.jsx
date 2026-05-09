import React from 'react';
import { Eye, Hand, Volume2 } from 'lucide-react';

const ComponentThreeAMFS = () => {
  return (
    <section className="section scroll-animate" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header text-center">
          <div style={{ color: '#E76F51', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Component 3
          </div>
          <h2 className="text-gradient">Anticipatory Feedback Framework</h2>
          <p className="lead">
            A proactive guidance system that introduces proactive visual, audio, and haptic cues to guide users before an error occurs to reduce cognitive load, improve learning retention, and boost motivation.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center" style={{ gap: '4rem' }}>
          <div>
            <img 
              src="/assets/component3_mockup_1778261416208.png" 
              alt="Anticipatory Multimodal Feedback System Visualization" 
              className="rounded-lg shadow-lg"
              style={{ width: '100%', border: '4px solid var(--color-background)' }}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="glass-card flex gap-4 items-center">
              <Eye size={40} color="var(--color-primary)" />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Visual Guidance Arrows</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-light)' }}>Predictive tracing analysis prevents misspellings.</p>
              </div>
            </div>
            <div className="glass-card flex gap-4 items-center">
              <Hand size={40} color="var(--color-secondary)" />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Haptic Feedback</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-light)' }}>Physical rumble responses alert users to trajectory drift.</p>
              </div>
            </div>
            <div className="glass-card flex gap-4 items-center">
              <Volume2 size={40} color="#E76F51" />
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>TTS Voice Guidance</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--color-text-light)' }}>Real-time phonetic pronunciation assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentThreeAMFS;
