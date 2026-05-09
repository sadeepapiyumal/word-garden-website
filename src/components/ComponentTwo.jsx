import React from 'react';
import { Mic, Award, ShieldCheck } from 'lucide-react';

const ComponentTwo = () => {
  return (
    <section className="section scroll-animate">
      <div className="container grid grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <div style={{ color: 'var(--color-secondary)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Component 2
          </div>
          <h2>Social Engagement System</h2>
          <p className="lead">
            Integrates real-time voice chat and inclusive rewards to replace traditional leaderboards, designed to encourage peer engagement, collaboration, and social confidence, reducing the isolation often felt by dyslexic learners.
          </p>
          <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginTop: '1rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Mic color="var(--color-primary)" size={28} style={{ marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Voice Chat</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Reducing text-reliance with integrated audio comms.</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <Award color="var(--color-secondary)" size={28} style={{ marginBottom: '1rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>Inclusive Rewards</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Replacing competitive leaderboards with personal milestone badges.</p>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="/assets/component2_mockup_1778261368300.png" 
            alt="Social Engagement System UI Mockup" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ComponentTwo;
