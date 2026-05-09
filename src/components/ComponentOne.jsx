import React from 'react';
import { Gamepad2, Users, Lightbulb } from 'lucide-react';

const ComponentOne = () => {
  return (
    <section className="section scroll-animate" style={{ backgroundColor: '#ffffff' }}>
      <div className="container grid grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="/assets/component1_mockup_1778261345538.png" 
            alt="Multimodal Gameplay UI Mockup" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-6">
          <div style={{ color: 'var(--color-primary)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Component 1
          </div>
          <h2>Multimodal Gameplay Module</h2>
          <p className="lead">
            A real-time multiplayer educational game environment where dyslexic learners collaborate, interact, and complete educational challenges together.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="flex items-center gap-4">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)' }}>
                <Users color="var(--color-primary)" />
              </div>
              <span>Synchronized co-op gameplay</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)' }}>
                <Gamepad2 color="var(--color-secondary)" />
              </div>
              <span>Interactive educational challenges</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-full)' }}>
                <Lightbulb color="#E76F51" />
              </div>
              <span>Peer-to-peer communication systems</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComponentOne;
