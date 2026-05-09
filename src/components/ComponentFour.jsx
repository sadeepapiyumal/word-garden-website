import React from 'react';
import { Activity, BrainCircuit, LineChart } from 'lucide-react';

const ComponentFour = () => {
  return (
    <section className="section scroll-animate">
      <div className="container grid grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <div style={{ color: 'var(--color-primary-light)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Component 4
          </div>
          <h2>Cognitive Interaction Engine</h2>
          <p className="lead">
            An intelligent personalization system that adapts game difficulty, rewards, tracing complexity, and educational progression according to the learner’s performance, engagement level, and learning behavior.
          </p>
          <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
            <div className="flex items-center gap-3">
              <Activity color="var(--color-secondary)" />
              <span style={{ fontWeight: '500' }}>Engagement Tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <BrainCircuit color="var(--color-primary)" />
              <span style={{ fontWeight: '500' }}>Adaptive Difficulty</span>
            </div>
            <div className="flex items-center gap-3">
              <LineChart color="#E76F51" />
              <span style={{ fontWeight: '500' }}>Progression Mapping</span>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="/assets/component4_mockup_1778261438207.png" 
            alt="Cognitive Interaction Engine Dashboard" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ComponentFour;
