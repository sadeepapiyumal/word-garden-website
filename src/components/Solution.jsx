import React from 'react';
import { Cpu, Zap, Network } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="section scroll-animate relative">
      <div className="container grid grid-cols-2 items-center">
        <div>
          <h2 className="text-gradient">The Word Garden Solution</h2>
          <p className="lead">
            We introduce a real-time multiplayer literacy game - PC environment (Unreal Engine) + mobile companion app (Flutter) —
            with voice chat, anticipatory feedback, and non-competitive rewards to build literacy, social confidence, and reduce fear of failure.
          </p>

          <div className="flex flex-col gap-6" style={{ marginTop: 'var(--spacing-8)' }}>
            <div className="flex gap-4">
              <div style={{ color: 'var(--color-primary)' }}><Cpu size={36} /></div>
              <div>
                <h4>AI-Powered Adaptive Learning</h4>
                <p>The system intelligently adjusts difficulty curves in real-time, ensuring optimal cognitive load for each user.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div style={{ color: 'var(--color-secondary)' }}><Network size={36} /></div>
              <div>
                <h4>Multiplayer Interaction</h4>
                <p>Reducing isolation by allowing children to collaborate on educational challenges in synchronized gameplay environments.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div style={{ color: 'var(--color-primary-light)' }}><Zap size={36} /></div>
              <div>
                <h4>Anticipatory Feedback</h4>
                <p>Preventing errors before they occur using predictive haptic and visual cues, drastically lowering learning anxiety.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="glass-card" style={{ width: '100%', maxWidth: '500px', padding: 'var(--spacing-12)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-6)' }}>Platform Core</h3>
            <div style={{ border: '2px dashed var(--color-primary-light)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ margin: '0' }}>Cognitive Interaction Engine</h4>
            </div>
            <div style={{ height: '40px', width: '2px', backgroundColor: 'var(--color-primary-light)', margin: '0 auto' }}></div>
            <div className="flex justify-between gap-4">
              <div style={{ flex: 1, backgroundColor: 'var(--color-background)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-md)' }}>
                <strong>AMFS</strong>
              </div>
              <div style={{ flex: 1, backgroundColor: 'var(--color-background)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-md)' }}>
                <strong>Social Mod</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
