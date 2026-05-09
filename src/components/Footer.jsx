import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '4rem 0 2rem 0' }}>
      <div className="container flex flex-col items-center text-center gap-6">
        <h3 style={{ color: '#FFFFFF' }}>Word Garden</h3>
        <p style={{ color: '#A0A0A0', maxWidth: '600px' }}>
          Adaptive Multiplayer Learning Platform for Dyslexic Children. A university final year research project dedicated to making education accessible for everyone.
        </p>
        <p style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '2rem 0' }}>
          Thank you for reviewing our research <Heart size={20} fill="var(--color-secondary)" />
        </p>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#333333', margin: '1rem 0' }}></div>
        <p style={{ color: '#666666', fontSize: '0.85rem' }}>
          © 2026 Word Garden Research Team. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
