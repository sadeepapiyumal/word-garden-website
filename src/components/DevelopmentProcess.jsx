import React from 'react';
import { 
  PenTool, MonitorSmartphone, Share2, Layers, Search, 
  MessageCircle, BarChart, PlayCircle, ShieldCheck, UserCheck, 
  Settings, LineChart, Code2, Cpu, FileText
} from 'lucide-react';

// Import Visual Assets
import SystemDiagram from '../assets/Visuals/Diagrams/System Diagram.png';
import AppSS1 from '../assets/Visuals/Initial Sketches & Concept/App ss1.png';
import AppSS2 from '../assets/Visuals/Initial Sketches & Concept/App ss2.png';
import ExpertValidation from '../assets/Visuals/Testing & Validation/Expert Validation.png';
import TechnicalTesting from '../assets/Visuals/Testing & Validation/Technical Testing.png';
import Proof1 from '../assets/Visuals/In Feild Captures/Proof1.jpeg';
import Proof2 from '../assets/Visuals/In Feild Captures/Proof2.jpeg';
import Proof3 from '../assets/Visuals/In Feild Captures/Proof3.png';

const DevelopmentProcess = () => {
  return (
    <div style={{ backgroundColor: '#F7F3E9', overflowX: 'hidden', color: '#2d3748' }}>
      
      {/* Intro Header */}
      <section className="section scroll-animate" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, rgba(91,141,239,0.05) 0%, rgba(123,198,123,0.05) 100%)', zIndex: 0 }}></div>
        <div className="container relative z-10 text-center">
          <div className="inline-block" style={{ backgroundColor: '#ffffff', color: '#7BC67B', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', marginBottom: '2rem', letterSpacing: '0.05em', border: '1px solid rgba(123,198,123,0.3)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            PRODUCT JOURNEY
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#1a202c', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Iterative Design <span style={{ color: '#7BC67B' }}>&</span> Development
          </h1>
          <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.4rem', color: '#4a5568' }}>
            A comprehensive UX case study detailing the evolution from initial research sketches to a fully integrated, scalable educational ecosystem.
          </p>
        </div>
      </section>

      {/* Shared Vertical Connecting Line for Timeline feel */}
      <div style={{ position: 'relative' }}>
        <div className="hidden md:block" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', background: 'linear-gradient(180deg, rgba(91,141,239,0) 0%, rgba(91,141,239,0.3) 10%, rgba(123,198,123,0.3) 90%, rgba(123,198,123,0) 100%)', transform: 'translateX(-50%)', zIndex: 0 }}></div>

        {/* 1. Initial Sketches & Concept Exploration */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-right">
                <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>1. Concept Exploration</h2>
                <p className="lead" style={{ color: '#718096' }}>
                  The journey began with extensive brainstorming, focusing on how to translate physical tracing exercises into an engaging, multi-sensory digital experience without inducing cognitive overload.
                </p>
              </div>
              <div className="md:w-1/2 flex gap-4 flex-wrap">
                <div style={{ backgroundColor: '#FEFCBF', padding: '1.5rem', borderRadius: '4px', boxShadow: '2px 4px 10px rgba(0,0,0,0.1)', transform: 'rotate(-3deg)', width: '200px' }}>
                  <PenTool size={24} color="#B7791F" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontFamily: 'cursive', fontSize: '1.1rem', color: '#744210', margin: 0 }}>How do we make tracing fun, not punishing?</p>
                </div>
                <div style={{ backgroundColor: '#EBF8FF', padding: '1.5rem', borderRadius: '4px', boxShadow: '2px 4px 10px rgba(0,0,0,0.1)', transform: 'rotate(2deg)', width: '200px', marginTop: '2rem' }}>
                  <Share2 size={24} color="#2B6CB0" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontFamily: 'cursive', fontSize: '1.1rem', color: '#2C5282', margin: 0 }}>Multiplayer = less isolation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Conceptual Models & System Architecture */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#1A202C', color: '#ffffff', position: 'relative', zIndex: 1 }}>
          <div className="container text-center">
            <h2 style={{ color: '#F7FAFC', marginBottom: '1rem' }}>2. System Architecture</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: '#A0AEC0' }}>
              Defining the technical flow between the AMFS Engine, Cloud Database, and Multiplayer Game Server.
            </p>
            <div className="glass-card flex justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '1.5rem', border: '1px solid rgba(91,141,239,0.3)', boxShadow: '0 0 30px rgba(91,141,239,0.15)' }}>
              <img src={SystemDiagram} alt="System Diagram" style={{ maxWidth: '100%', height: 'auto', borderRadius: '0.5rem' }} />
            </div>
          </div>
        </section>

        {/* 3. Low-Fidelity Wireframes */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>3. Low-Fidelity Wireframes</h2>
                <p className="lead" style={{ color: '#718096' }}>
                  Mapping out the core user journey using clean, grayscale blocks to prioritize layout structure and navigation efficiency over aesthetic details.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1.5rem', display: 'flex', gap: '1rem', border: '2px dashed #CBD5E0' }}>
                  <div style={{ flex: 1, backgroundColor: '#EDF2F7', height: '300px', borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                    <div style={{ height: '40px', backgroundColor: '#E2E8F0', borderRadius: '0.5rem' }}></div>
                    <div style={{ flex: 1, backgroundColor: '#E2E8F0', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Layers size={48} color="#A0AEC0" />
                    </div>
                    <div style={{ height: '60px', backgroundColor: '#E2E8F0', borderRadius: '0.5rem' }}></div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: '#EDF2F7', height: '300px', borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
                    <div style={{ height: '100px', backgroundColor: '#E2E8F0', borderRadius: '0.5rem' }}></div>
                    <div style={{ flex: 1, backgroundColor: '#E2E8F0', borderRadius: '0.5rem' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. First User Feedback Cycle */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#ffffff', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: '#2d3748' }}>4. First User Feedback Cycle</h2>
              <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Real-world usability testing to validate assumptions and gather qualitative data.</p>
            </div>

            <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '3rem' }}>
              <div className="glass-card" style={{ overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src={Proof1} alt="User Testing 1" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', backgroundColor: '#F7FAFC' }}>
                  <div className="flex gap-2 items-center" style={{ color: '#38A169', marginBottom: '0.5rem', fontWeight: '600' }}><MessageCircle size={18} /> "UI is easier to read"</div>
                </div>
              </div>
              <div className="glass-card" style={{ overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src={Proof2} alt="User Testing 2" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', backgroundColor: '#F7FAFC' }}>
                  <div className="flex gap-2 items-center" style={{ color: '#3182CE', marginBottom: '0.5rem', fontWeight: '600' }}><UserCheck size={18} /> "Loved multiplayer mode"</div>
                </div>
              </div>
              <div className="glass-card" style={{ overflow: 'hidden', borderRadius: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <img src={Proof3} alt="User Testing 3" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', backgroundColor: '#F7FAFC' }}>
                  <div className="flex gap-2 items-center" style={{ color: '#DD6B20', marginBottom: '0.5rem', fontWeight: '600' }}><Settings size={18} /> "Needs more adaptive guidance"</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Initial UI Refinements */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-right">
                <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>5. UI/UX Refinements</h2>
                <p className="lead" style={{ color: '#718096' }}>
                  Based on field feedback, the interface was stripped of visually competitive elements. We boosted color contrast, enlarged touch targets, and instituted strict dyslexia-friendly typography rules.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                {/* Simulated Before/After Slider */}
                <div className="glass-card relative" style={{ height: '300px', backgroundColor: '#ffffff', borderRadius: '1.5rem', overflow: 'hidden', display: 'flex' }}>
                  {/* Before */}
                  <div style={{ width: '40%', backgroundColor: '#EDF2F7', padding: '2rem', borderRight: '4px solid #ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.7 }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#A0AEC0', marginBottom: '1rem', letterSpacing: '0.1em' }}>BEFORE</div>
                    <div style={{ width: '100%', height: '40px', backgroundColor: '#CBD5E0', borderRadius: '4px', marginBottom: '1rem' }}></div>
                    <div style={{ width: '80%', height: '20px', backgroundColor: '#CBD5E0', borderRadius: '4px' }}></div>
                  </div>
                  {/* After */}
                  <div style={{ width: '60%', backgroundColor: '#EBF4FF', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#5B8DEF', marginBottom: '1rem', letterSpacing: '0.1em' }}>AFTER</div>
                    <div style={{ width: '100%', height: '60px', backgroundColor: '#ffffff', borderRadius: '1rem', marginBottom: '1rem', border: '2px solid #5B8DEF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5B8DEF', fontWeight: 'bold' }}>Clear CTA</div>
                    <div style={{ width: '90%', height: '30px', backgroundColor: '#ffffff', borderRadius: '1rem' }}></div>
                  </div>
                  
                  {/* Slider Knob */}
                  <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', width: '32px', height: '32px', backgroundColor: '#ffffff', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Code2 size={16} color="#718096" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. High-Fidelity Mockups */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#1A202C', color: '#ffffff', position: 'relative', zIndex: 1 }}>
          <div className="container text-center">
            <h2 style={{ color: '#F7FAFC', marginBottom: '1rem' }}>6. High-Fidelity Ecosystem</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: '#A0AEC0' }}>
              The finalized application interfaces, optimized for accessibility, engagement, and cross-platform performance.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={AppSS1} alt="Mobile App Screen 1" style={{ width: '100%', height: 'auto', borderRadius: '1rem' }} />
                <h4 style={{ marginTop: '1.5rem', color: '#EBF4FF' }}>Adaptive Tracing Interface</h4>
              </div>
              <div className="glass-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={AppSS2} alt="Mobile App Screen 2" style={{ width: '100%', height: 'auto', borderRadius: '1rem' }} />
                <h4 style={{ marginTop: '1.5rem', color: '#EBF4FF' }}>Multiplayer Dashboard</h4>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Heuristic Evaluation & Validation */}
        <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#ffffff', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ color: '#2d3748' }}>7. Heuristic Evaluation</h2>
              <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Rigorous testing metrics confirming strict adherence to accessibility standards.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <img src={ExpertValidation} alt="Expert Validation Metrics" style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div className="flex flex-col gap-6">
                <div className="glass-card" style={{ padding: '1.5rem', backgroundColor: '#F0FFF4', borderLeft: '4px solid #38A169' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 style={{ margin: 0, color: '#276749' }}>Accessibility Validation</h4>
                    <ShieldCheck color="#38A169" />
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#C6F6D5', borderRadius: '4px' }}><div style={{ width: '98%', height: '100%', backgroundColor: '#38A169', borderRadius: '4px' }}></div></div>
                </div>
                
                <div className="glass-card" style={{ padding: '1.5rem', backgroundColor: '#EBF4FF', borderLeft: '4px solid #3182CE' }}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 style={{ margin: 0, color: '#2B6CB0' }}>Navigation Efficiency</h4>
                    <MonitorSmartphone color="#3182CE" />
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#BEE3F8', borderRadius: '4px' }}><div style={{ width: '94%', height: '100%', backgroundColor: '#3182CE', borderRadius: '4px' }}></div></div>
                </div>

                <img src={TechnicalTesting} alt="Technical Testing Data" style={{ width: '100%', height: 'auto', borderRadius: '1rem', marginTop: '1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final Platform Demonstration */}
        <section className="section scroll-animate" style={{ padding: '8rem 0 6rem', position: 'relative', zIndex: 1 }}>
          <div className="container text-center">
            <div style={{ display: 'inline-block', backgroundColor: '#EBF4FF', padding: '1rem', borderRadius: '50%', marginBottom: '2rem' }}>
              <PlayCircle size={48} color="#5B8DEF" />
            </div>
            <h2 style={{ color: '#2d3748', marginBottom: '1.5rem' }}>8. Final Integrated Platform</h2>
            <p className="lead" style={{ maxWidth: '800px', margin: '0 auto 4rem', color: '#718096' }}>
              The culmination of continuous iteration: a fully functional, cloud-synced, multiplayer ecosystem ready for deployment in schools and homes worldwide.
            </p>
            
            <div className="glass-card relative" style={{ backgroundColor: '#1A202C', padding: '1rem', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(91,141,239,0.2)', maxWidth: '900px', margin: '0 auto' }}>
              {/* Simulated Demo Video Area */}
              <div style={{ width: '100%', paddingTop: '56.25%', backgroundColor: '#2D3748', borderRadius: '1rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <MonitorSmartphone size={64} color="#A0AEC0" />
                  <p style={{ color: '#A0AEC0', fontWeight: 'bold', letterSpacing: '0.1em' }}>PLATFORM DEMO READY</p>
                </div>
                {/* Decorative glowing orb inside the screen */}
                <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(91,141,239,0.4) 0%, rgba(91,141,239,0) 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(123,198,123,0.3) 0%, rgba(123,198,123,0) 70%)', borderRadius: '50%' }}></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DevelopmentProcess;
