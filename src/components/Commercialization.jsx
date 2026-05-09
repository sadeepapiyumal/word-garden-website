import React from 'react';
import {
  TrendingUp, Globe2, Brain, Gamepad2, School, Users,
  Heart, Briefcase, Bot, LineChart, ShieldCheck, Cpu,
  Cloud, MonitorSmartphone, LayoutDashboard, Languages,
  Milestone, ArrowRight, BookOpen, Layers, Lightbulb,
  UserCheck, Activity, Award, Network, CheckCircle2
} from 'lucide-react';

const Commercialization = () => {
  return (
    <div style={{ backgroundColor: '#F7F3E9', overflowX: 'hidden', color: '#2d3748' }}>

      {/* 1. Hero Banner */}
      <section className="section scroll-animate" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(135deg, rgba(235, 244, 255, 0) 0%, rgba(240, 255, 244, 0.5) 100%)', zIndex: 0 }}></div>
        <div className="container relative z-10 text-center">
          <div className="inline-block" style={{ backgroundColor: '#e2e8f0', color: '#4a5568', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', marginBottom: '2rem', letterSpacing: '0.05em' }}>
            INVESTOR & RESEARCH BRIEF
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#1a202c', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Commercialization <span className="text-gradient">&</span><br />Future Potential
          </h1>
          <p className="lead" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.4rem', color: '#4a5568' }}>
            Transforming dyslexia education through adaptive multiplayer learning and anticipatory feedback systems.
          </p>

          {/* Abstract AI Illustration using CSS and Icons */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto', height: '300px' }}>
            <div className="glass-card flex items-center justify-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#ffffff', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Brain size={64} color="var(--color-primary)" />
            </div>

            {/* Orbiting nodes */}
            <div style={{ position: 'absolute', top: '20%', left: '15%', padding: '1rem', backgroundColor: '#EBF4FF', borderRadius: '50%', boxShadow: '0 10px 20px rgba(49,130,206,0.2)', animation: 'pulse 3s infinite' }}>
              <Network size={32} color="#3182CE" />
            </div>
            <div style={{ position: 'absolute', bottom: '15%', left: '25%', padding: '1.25rem', backgroundColor: '#F0FFF4', borderRadius: '50%', boxShadow: '0 10px 20px rgba(56,161,105,0.2)', animation: 'pulse 4s infinite 1s' }}>
              <Activity size={40} color="#38A169" />
            </div>
            <div style={{ position: 'absolute', top: '30%', right: '15%', padding: '1.5rem', backgroundColor: '#FFF5F5', borderRadius: '50%', boxShadow: '0 10px 20px rgba(229,62,62,0.2)', animation: 'pulse 3.5s infinite 0.5s' }}>
              <Cpu size={48} color="#E53E3E" />
            </div>
            <div style={{ position: 'absolute', bottom: '25%', right: '20%', padding: '1rem', backgroundColor: '#FAF5FF', borderRadius: '50%', boxShadow: '0 10px 20px rgba(128,90,213,0.2)', animation: 'pulse 4.5s infinite 1.5s' }}>
              <Globe2 size={32} color="#805AD5" />
            </div>

            {/* Connecting SVG Lines */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.3 }}>
              <path d="M 300 150 L 150 100 M 300 150 L 200 250 M 300 150 L 450 120 M 300 150 L 420 230" stroke="#718096" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. Market Opportunity */}
      <section className="section scroll-animate" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#2b6cb0' }}>Market Opportunity</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>Capitalizing on the intersection of Special Education and Advanced AI Tech.</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #3182CE' }}>
              <TrendingUp size={40} color="#3182CE" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem', color: '#2d3748' }}>16.5%</h3>
              <p style={{ fontWeight: '600', color: '#4a5568', margin: '0 0 1rem' }}>Global EdTech CAGR</p>
              <div style={{ height: '6px', background: '#EBF4FF', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: '#3182CE' }}></div>
              </div>
            </div>

            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #38A169' }}>
              <Heart size={40} color="#38A169" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem', color: '#2d3748' }}>$20B+</h3>
              <p style={{ fontWeight: '600', color: '#4a5568', margin: '0 0 1rem' }}>Dyslexia Support Tech</p>
              <div style={{ height: '6px', background: '#F0FFF4', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '70%', height: '100%', background: '#38A169' }}></div>
              </div>
            </div>

            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #805AD5' }}>
              <Bot size={40} color="#805AD5" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem', color: '#2d3748' }}>45%</h3>
              <p style={{ fontWeight: '600', color: '#4a5568', margin: '0 0 1rem' }}>AI Edu Adoption Surge</p>
              <div style={{ height: '6px', background: '#FAF5FF', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '90%', height: '100%', background: '#805AD5' }}></div>
              </div>
            </div>

            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid #DD6B20' }}>
              <Gamepad2 size={40} color="#DD6B20" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem', color: '#2d3748' }}>3x</h3>
              <p style={{ fontWeight: '600', color: '#4a5568', margin: '0 0 1rem' }}>Gamified Learning ROI</p>
              <div style={{ height: '6px', background: '#FFFAF0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: '#DD6B20' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Target Users */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#276749' }}>Target Users & Beneficiaries</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>Building an ecosystem that connects learners, educators, and institutions.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#EBF4FF', padding: '1rem', borderRadius: '1rem' }}><UserCheck size={32} color="#3182CE" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>Dyslexic Children</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>The primary end-users, benefiting from reduced anxiety and adaptive difficulty.</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#F0FFF4', padding: '1rem', borderRadius: '1rem' }}><School size={32} color="#38A169" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>Schools & Districts</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>B2B deployment for inclusive classrooms requiring scalable support tools.</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#FAF5FF', padding: '1rem', borderRadius: '1rem' }}><Briefcase size={32} color="#805AD5" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>EdTech Companies</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>API licensing opportunities for integrating our AMFS engine into existing platforms.</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#FFF5F5', padding: '1rem', borderRadius: '1rem' }}><Activity size={32} color="#E53E3E" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>Special Ed Institutions</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>Targeted deployment for dedicated neurodivergent learning centers.</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#FFFAF0', padding: '1rem', borderRadius: '1rem' }}><Brain size={32} color="#DD6B20" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>Therapists & Clinicians</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>Detailed analytical dashboards providing longitudinal cognitive progress data.</p>
              </div>
            </div>
            <div className="glass-card flex items-start gap-4" style={{ padding: '2rem', backgroundColor: '#F7FAFC' }}>
              <div style={{ backgroundColor: '#E6FFFA', padding: '1rem', borderRadius: '1rem' }}><Users size={32} color="#319795" /></div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem', color: '#2d3748' }}>Parents</h4>
                <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>Companion apps providing real-time insights and home reinforcement strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industry Relevance */}
      <section className="section scroll-animate" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Industry Relevance</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto' }}>Positioned at the nexus of multiple high-growth technological sectors.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="glass-card flex items-center gap-6" style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '1.5rem' }}>
              <div style={{ backgroundColor: '#EBF4FF', padding: '1.5rem', borderRadius: '50%' }}><Cpu size={40} color="#3182CE" /></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem' }}>AI Learning Systems</h3>
                <p style={{ margin: 0, color: '#4a5568' }}>Implementing neural networks to create dynamic, anticipatory environments that learn from user behavior in real-time.</p>
              </div>
              <div style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #3182CE, #EBF4FF)', borderRadius: '4px' }}></div>
            </div>

            <div className="glass-card flex items-center gap-6" style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '1.5rem', marginLeft: '3rem' }}>
              <div style={{ backgroundColor: '#F0FFF4', padding: '1.5rem', borderRadius: '50%' }}><Brain size={40} color="#38A169" /></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem' }}>Cognitive Training</h3>
                <p style={{ margin: 0, color: '#4a5568' }}>Applying neuroscience-backed methodologies to build working memory and phonological processing skills.</p>
              </div>
              <div style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #38A169, #F0FFF4)', borderRadius: '4px' }}></div>
            </div>

            <div className="glass-card flex items-center gap-6" style={{ padding: '2rem', backgroundColor: '#ffffff', borderRadius: '1.5rem', marginLeft: '6rem' }}>
              <div style={{ backgroundColor: '#FAF5FF', padding: '1.5rem', borderRadius: '50%' }}><Gamepad2 size={40} color="#805AD5" /></div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 0.5rem' }}>Gamification & Assistive Tech</h3>
                <p style={{ margin: 0, color: '#4a5568' }}>Merging AAA gaming engagement mechanics with WCAG-compliant assistive technology standards.</p>
              </div>
              <div style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #805AD5, #FAF5FF)', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Practical Real-World Implementation */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#1A202C', color: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: '#F7FAFC' }}>Practical Real-World Implementation</h2>
            <p className="lead" style={{ color: '#A0AEC0', maxWidth: '700px', margin: '0 auto' }}>A structured, risk-mitigated roadmap to market penetration.</p>
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 2rem' }}>
            {/* Connecting Line */}
            <div style={{ position: 'absolute', top: '40px', left: '5%', right: '5%', height: '4px', background: '#4A5568', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '40px', left: '5%', width: '50%', height: '4px', background: '#63B3ED', zIndex: 1, boxShadow: '0 0 10px #63B3ED' }}></div>

            {/* Nodes */}
            {[
              { title: 'Research Prototype', icon: <BookOpen />, status: 'completed' },
              { title: 'School Pilot Testing', icon: <School />, status: 'completed' },
              { title: 'Institutional Deployment', icon: <Briefcase />, status: 'active' },
              { title: 'Commercial EdTech Product', icon: <Award />, status: 'pending' },
              { title: 'Global Learning Platform', icon: <Globe2 />, status: 'pending' }
            ].map((node, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, width: '18%' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: node.status === 'completed' ? '#3182CE' : node.status === 'active' ? '#2B6CB0' : '#2D3748',
                  border: `4px solid ${node.status === 'active' ? '#63B3ED' : '#1A202C'}`,
                  boxShadow: node.status === 'active' ? '0 0 20px rgba(99,179,237,0.5)' : 'none',
                  color: node.status === 'pending' ? '#718096' : '#ffffff',
                  marginBottom: '1rem', transition: 'all 0.3s'
                }}>
                  {React.cloneElement(node.icon, { size: 36 })}
                </div>
                <h5 style={{ textAlign: 'center', margin: 0, color: node.status === 'pending' ? '#A0AEC0' : '#ffffff', fontSize: '1.1rem' }}>
                  {node.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Future Development Possibilities */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#F7FAFC' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#2d3748' }}>Future Development Possibilities</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Scaling the platform's capabilities for broader impact.</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: <Bot />, title: 'AI Personalization', desc: 'Hyper-tuned LLM models for individual learning curves.', color: '#3182CE' },
              { icon: <Cloud />, title: 'Cloud Synchronization', desc: 'Seamless transition between home, school, and therapy.', color: '#38A169' },
              { icon: <Users />, title: 'Multiplayer Classrooms', desc: 'Massively synchronized sessions for 30+ students.', color: '#805AD5' },
              { icon: <LayoutDashboard />, title: 'Teacher Dashboards', desc: 'Holistic class overviews with predictive analytics.', color: '#DD6B20' },
              { icon: <LineChart />, title: 'Parent Analytics', desc: 'Weekly cognitive growth reports via mobile companion.', color: '#319795' },
              { icon: <MonitorSmartphone />, title: 'Mobile Deployment', desc: 'Native iOS/Android optimized learning environments.', color: '#E53E3E' },
              { icon: <Gamepad2 />, title: 'VR/AR Support', desc: 'Immersive spatial computing for kinesthetic learners.', color: '#D69E2E' },
              { icon: <Languages />, title: 'Cross-Language Support', desc: 'Adapting the phonological engine for Spanish, French, etc.', color: '#4A5568' }
            ].map((feature, i) => (
              <div key={i} className="glass-card flex flex-col items-center text-center" style={{ padding: '2rem 1.5rem', backgroundColor: '#ffffff', borderRadius: '1rem', borderBottom: `4px solid ${feature.color}`, transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ backgroundColor: `${feature.color}15`, padding: '1.25rem', borderRadius: '50%', color: feature.color, marginBottom: '1.5rem' }}>
                  {React.cloneElement(feature.icon, { size: 36 })}
                </div>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: '#2d3748' }}>{feature.title}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#718096' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Deployment Pathways */}
      <section className="section scroll-animate" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#2c5282' }}>Strategic Deployment Pathways</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#4a5568' }}>A calculated go-to-market strategy moving from academia to enterprise.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem', alignItems: 'center' }}>
            {[
              'University Research', 'Govt Partnerships', 'School Adoption',
              'Commercial Licensing', 'App Store Deployment', 'International Expansion'
            ].map((step, index) => (
              <React.Fragment key={index}>
                <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '1.5rem 1rem', borderRadius: '1rem', textAlign: 'center', border: '1px solid #E2E8F0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h5 style={{ margin: 0, fontSize: '1.05rem', color: '#2D3748' }}>{step}</h5>
                </div>
                {index < 5 && (
                  <div style={{ display: 'flex', justifyContent: 'center', color: '#A0AEC0' }}>
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Long-Term Sustainability */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>Long-Term Sustainability</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Built for scale, recurring revenue, and continuous technological evolution.</p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div style={{ padding: '2.5rem', backgroundColor: '#F7FAFC', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
              <Layers size={40} color="#3182CE" style={{ marginBottom: '1.5rem' }} />
              <h3>Scalable Cloud Architecture</h3>
              <p style={{ color: '#4A5568', fontSize: '1.1rem' }}>Backend infrastructure designed on AWS/GCP to seamlessly scale from 100 pilot users to 1,000,000+ active global concurrent learners without degradation.</p>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: '#F7FAFC', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
              <TrendingUp size={40} color="#38A169" style={{ marginBottom: '1.5rem' }} />
              <h3>B2B / B2C Subscriptions</h3>
              <p style={{ color: '#4A5568', fontSize: '1.1rem' }}>Dual revenue model targeting school district bulk licensing (B2B) alongside direct-to-parent premium subscription tiers (B2C) for home companion apps.</p>
            </div>

            <div style={{ padding: '2.5rem', backgroundColor: '#F7FAFC', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
              <Lightbulb size={40} color="#D69E2E" style={{ marginBottom: '1.5rem' }} />
              <h3>Continuous AI Learning</h3>
              <p style={{ color: '#4A5568', fontSize: '1.1rem' }}>The system becomes inherently more valuable over time as federated learning models aggregate vast amounts of neurodivergent interaction data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Investor Call-To-Action */}
      <section className="scroll-animate" style={{ padding: '8rem 2rem', background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', color: '#ffffff', lineHeight: '1.2' }}>
            Empowering Dyslexic Learners Through <span style={{ color: '#63B3ED' }}>Intelligent Multiplayer Education</span>
          </h1>
          <p className="lead" style={{ color: '#A0AEC0', marginBottom: '3rem', fontSize: '1.5rem' }}>
            Join us in bridging the accessibility gap and turning early-stage research into global educational reality.
          </p>
          <div className="flex justify-center gap-6">
            <button className="btn" style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', backgroundColor: '#63B3ED', color: '#1A202C', border: 'none', borderRadius: '3rem', fontWeight: 'bold' }}>
              Schedule Investor Demo
            </button>
            <button className="btn" style={{ padding: '1.25rem 2.5rem', fontSize: '1.2rem', backgroundColor: 'transparent', color: '#ffffff', border: '2px solid #4A5568', borderRadius: '3rem', fontWeight: 'bold' }}>
              Download Pitch Deck
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Commercialization;
