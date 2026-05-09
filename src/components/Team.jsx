import React from 'react';
import { User, Link, Mail } from 'lucide-react';

// Import images
import DidulaImg from '../assets/Team Members/Didula.jpeg';
import DulminiImg from '../assets/Team Members/Dulmini.jpeg';
import KasunImg from '../assets/Team Members/Kasun.jpeg';
import KaviruImg from '../assets/Team Members/Kaviru.jpeg';
import NushkanImg from '../assets/Team Members/Nushkan.jpeg';
import PesalaImg from '../assets/Team Members/Pesala.jpeg';
import SadeepaImg from '../assets/Team Members/Sadeepa.jpeg';

const Team = () => {
  const team = [
    { name: "Kaviru Bandara", role: "Researcher", responsibilities: "Multimodal Gameplay Module", image: KaviruImg, email: "kavirumahim@gmail.com" },
    { name: "Prathibha Samarasekara", role: "Researcher", responsibilities: "Social Engagement System", image: DulminiImg, email: "dulminiprathibha@gmail.com" },
    { name: "Piyumal Ranasinghe", role: "Researcher", responsibilities: "Anticipatory Feedback Framework", image: SadeepaImg, email: "sadeepapiyumal530@gmail.com" },
    { name: "Pesala Gunasekara", role: "Researcher", responsibilities: "Cognitive Interaction Engine", image: PesalaImg, email: "pesalagunasekara@gmail.com" }
  ];

  const supervisors = [
    { name: "Mr. Didula Chamara", role: "Project Supervisor", responsibilities: "Academic Guidance, Research Validation", image: DidulaImg, email: "didula.c@sliit.lk.com" },
    { name: "Mr. Nushkan Nismi", role: "Co-Supervisor", responsibilities: "Research Methodology", image: NushkanImg, email: "nushkan.n@sliit.lk" },
    { name: "Dr. Kasun Karunanayake", role: "External Supervisor", responsibilities: "External Guidance", image: KasunImg, email: "ktk@ucsc.cmb.ac.lk" }
  ];

  const renderCards = (members) => (
    <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '4rem' }}>
      {members.map((member, idx) => (
        <div key={idx} className="glass-card text-center flex flex-col items-center">
          <div style={{
            width: '100px', height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '1rem',
            border: '3px solid var(--color-primary-light)'
          }}>
            {member.image ? (
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-background)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <User size={40} color="var(--color-primary)" />
              </div>
            )}
          </div>
          <h4 style={{ marginBottom: '0.25rem' }}>{member.name}</h4>
          <p style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{member.role}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>{member.responsibilities}</p>
          <div className="flex gap-3 justify-center">
            <Link size={20} color="var(--color-primary-light)" style={{ cursor: 'pointer' }} />
            {member.email ? (
              <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                <Mail size={20} color="var(--color-primary-light)" className="hover:scale-110 transition-transform" />
              </a>
            ) : (
              <Mail size={20} color="var(--color-primary-light)" style={{ cursor: 'pointer' }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="team" className="section scroll-animate">
      <div className="container">

        {/* Research Team Section */}
        <div className="section-header text-center">
          <h2 className="text-gradient">The Research Team</h2>
          <p className="lead">Driven by a passion for accessible education and advanced AI integration.</p>
        </div>
        {renderCards(team)}

        {/* Supervisors Section */}
        <div className="section-header text-center">
          <h2 className="text-gradient">Project Supervisors</h2>
          <p className="lead">Guiding our research with expert knowledge and industry experience.</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-6" style={{ width: '100%', maxWidth: '1000px' }}>
            {supervisors.map((member, idx) => (
              <div key={idx} className="glass-card text-center flex flex-col items-center">
                <div style={{
                  width: '100px', height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  border: '3px solid var(--color-primary-light)'
                }}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-background)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <User size={40} color="var(--color-primary)" />
                    </div>
                  )}
                </div>
                <h4 style={{ marginBottom: '0.25rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--color-secondary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>{member.responsibilities}</p>
                <div className="flex gap-3 justify-center">
                  <Link size={20} color="var(--color-primary-light)" style={{ cursor: 'pointer' }} />
                  {member.email ? (
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <Mail size={20} color="var(--color-primary-light)" className="hover:scale-110 transition-transform" />
                    </a>
                  ) : (
                    <Mail size={20} color="var(--color-primary-light)" style={{ cursor: 'pointer' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
