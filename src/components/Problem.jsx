import React from 'react';
import { Focus, Users, Brain, HeartPulse } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      title: "Difficulty Focusing",
      description: "Traditional text-heavy interfaces overwhelm dyslexic learners, causing immediate loss of attention.",
      icon: <Focus size={32} color="var(--color-primary)" />
    },
    {
      title: "Low Engagement",
      description: "Standard learning tools lack gamification and collaborative elements, resulting in isolation and boredom.",
      icon: <Users size={32} color="var(--color-secondary)" />
    },
    {
      title: "Anxiety & Frustration",
      description: "Repeated failures without proactive guidance lead to severe academic anxiety.",
      icon: <HeartPulse size={32} color="#E76F51" />
    },
    {
      title: "No Adaptive Systems",
      description: "One-size-fits-all education fails to adjust to the unique cognitive pace of each dyslexic child.",
      icon: <Brain size={32} color="var(--color-primary-light)" />
    }
  ];

  return (
    <section id="problem" className="section scroll-animate" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <h2>The Challenges Dyslexic Children Face</h2>
          <p className="lead">
            Current educational environments are not designed for neurodivergent minds, resulting in a systemic gap in inclusive learning.
          </p>
        </div>
        
        <div className="grid grid-cols-4">
          {problems.map((problem, index) => (
            <div key={index} className="glass-card text-center flex flex-col items-center gap-4">
              <div style={{ padding: '1rem', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)' }}>
                {problem.icon}
              </div>
              <h3>{problem.title}</h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '1rem' }}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
