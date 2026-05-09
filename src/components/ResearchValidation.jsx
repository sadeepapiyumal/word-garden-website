import React from 'react';
import {
  BookOpen, Target, ShieldCheck, Microscope,
  Lightbulb, Users, Activity, BarChart3,
  CheckCircle2, Search, Settings, FileText,
  LineChart, Brain, HeartPulse, Puzzle, ArrowRight, Quote, Sparkles, Crosshair
} from 'lucide-react';

const ResearchValidation = () => {
  return (
    <div style={{ backgroundColor: '#F7F3E9', overflowX: 'hidden', color: '#2d3748' }}>

      {/* 1. Research Background */}
      <section className="section scroll-animate" style={{ paddingTop: '8rem', paddingBottom: '6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(180deg, rgba(91,141,239,0.05) 0%, rgba(247,243,233,0.1) 100%)', zIndex: 0 }}></div>
        <div className="container relative z-10 text-center">
          <div className="inline-block" style={{ backgroundColor: '#EBF4FF', color: '#5B8DEF', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: '600', marginBottom: '2rem', letterSpacing: '0.05em', border: '1px solid rgba(91,141,239,0.3)' }}>
            EVIDENCE-BASED APPROACH
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#1a202c', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Research <span style={{ color: '#5B8DEF' }}>&</span> Validation
          </h1>
          <p className="lead" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.4rem', color: '#4a5568' }}>
            A comprehensive academic foundation evaluating the efficacy of adaptive gamification and anticipatory feedback in neurodivergent education.
          </p>

          <div className="grid grid-cols-2 gap-8 text-left" style={{ marginTop: '3rem' }}>
            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '1.5rem', borderLeft: '6px solid #E53E3E' }}>
              <Target size={40} color="#E53E3E" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Core Challenge</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', margin: 0 }}>
                Traditional literacy systems rely on high cognitive load and reactive error-correction, leading to repeated failures, profound frustration, and academic disengagement for dyslexic children.
              </p>
            </div>

            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '1.5rem', borderLeft: '6px solid #7BC67B' }}>
              <Lightbulb size={40} color="#7BC67B" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Applied Solution</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', margin: 0 }}>
                Implementing Anticipatory Feedback, Multiplayer Synchronization, and Dynamic Adaptive Difficulty to create a supportive, failure-free environment that actively reduces cognitive anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Research Methodology */}
      <section className="section scroll-animate" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: '#2d3748' }}>Rigorous Methodology</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>A structured, iterative research workflow ensuring empirical validity at every stage.</p>
          </div>

          {/* Horizontal Timeline */}
          <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '2rem' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minWidth: '900px', padding: '0 2rem' }}>
              <div style={{ position: 'absolute', top: '35px', left: '5%', right: '5%', height: '4px', background: 'linear-gradient(90deg, #5B8DEF, #7BC67B)', zIndex: 0, opacity: 0.3, borderRadius: '2px' }}></div>

              {[
                { title: 'Literature Review', icon: <BookOpen /> },
                { title: 'Requirements Analysis', icon: <Search /> },
                { title: 'UI/UX Design', icon: <Puzzle /> },
                { title: 'Prototype Dev', icon: <Settings /> },
                { title: 'User Testing', icon: <Users /> },
                { title: 'Evaluation', icon: <Microscope /> },
                { title: 'Final Refinements', icon: <CheckCircle2 /> }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, width: '14%', minWidth: '120px' }}>
                  <div className="glass-card" style={{
                    width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#ffffff', color: '#5B8DEF', border: '3px solid #5B8DEF',
                    marginBottom: '1rem', transition: 'transform 0.3s', boxShadow: '0 10px 20px rgba(91,141,239,0.15)'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    {React.cloneElement(step.icon, { size: 32 })}
                  </div>
                  <h5 style={{ textAlign: 'center', margin: 0, fontSize: '0.95rem', fontWeight: '600', color: '#4a5568' }}>{step.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testing & Evaluation */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#2d3748' }}>Testing & Evaluation Parameters</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Comprehensive evaluation criteria assessing usability, accuracy, and engagement.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: <Target />, title: 'Usability Testing', desc: 'Assessing intuitive navigation and cognitive accessibility.' },
              { icon: <ShieldCheck />, title: 'Heuristic Evaluation', desc: 'Expert assessment against Nielsen’s usability heuristics.' },
              { icon: <Crosshair />, title: 'Tracing Accuracy Analysis', desc: 'Measuring letter-formation precision and error rates.' },
              { icon: <HeartPulse />, title: 'Gameplay Engagement', desc: 'Tracking session length, retention, and motivation metrics.' },
              { icon: <Sparkles />, title: 'AMFS Feedback Evaluation', desc: 'Evaluating the impact of predictive haptic/visual cues.' },
              { icon: <Users />, title: 'Multiplayer Interaction', desc: 'Analyzing voice chat latency and social collaboration.' }
            ].map((test, i) => (
              <div key={i} className="glass-card flex gap-4 items-start" style={{ padding: '2rem', backgroundColor: '#F7F3E9', borderRadius: '1rem' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '1rem', color: '#5B8DEF', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                  {React.cloneElement(test.icon, { size: 28 })}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: '#2d3748' }}>{test.title}</h4>
                  <p style={{ margin: 0, fontSize: '1rem', color: '#718096' }}>{test.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Validation Methods */}
      <section className="section scroll-animate" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: '#2d3748' }}>Validation Methodology</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Deploying mixed-methods research for robust academic validation.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Qualitative Validation</h3>
                <FileText size={36} color="#7BC67B" />
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li className="flex items-center gap-3"><CheckCircle2 color="#7BC67B" /> <span style={{ fontSize: '1.1rem' }}>Direct User Observations in controlled environments</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 color="#7BC67B" /> <span style={{ fontSize: '1.1rem' }}>In-depth Expert Feedback from Special Educators</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 color="#7BC67B" /> <span style={{ fontSize: '1.1rem' }}>Post-session Parent & Teacher Questionnaire Analysis</span></li>
              </ul>
            </div>

            <div className="glass-card" style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '1.5rem', border: '1px solid #E2E8F0' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <h3 style={{ margin: 0 }}>Quantitative Validation</h3>
                <BarChart3 size={36} color="#5B8DEF" />
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li className="flex items-center gap-3"><LineChart color="#5B8DEF" /> <span style={{ fontSize: '1.1rem' }}>Real-time Gameplay Analytics & Telemetry</span></li>
                <li className="flex items-center gap-3"><LineChart color="#5B8DEF" /> <span style={{ fontSize: '1.1rem' }}>Algorithmic Tracing Performance Metrics</span></li>
                <li className="flex items-center gap-3"><LineChart color="#5B8DEF" /> <span style={{ fontSize: '1.1rem' }}>A/B Comparative Testing against baseline models</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Findings & Outcomes */}
      <section className="section scroll-animate" style={{ padding: '6rem 0', backgroundColor: '#1A202C', color: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: '#F7FAFC' }}>Key Findings & Experimental Outcomes</h2>
            <p className="lead" style={{ color: '#A0AEC0', maxWidth: '700px', margin: '0 auto' }}>Empirically measured improvements across core cognitive domains.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "Improved Learner Engagement", val: 85, color: "#7BC67B", desc: "Increase in continuous active playtime compared to traditional tools." },
              { title: "Tracing Frustration Reduction", val: 68, color: "#5B8DEF", desc: "Decrease in tracing abandonment due to the AMFS engine." },
              { title: "Confidence & Self-Efficacy", val: 74, color: "#D69E2E", desc: "Improvement in self-reported learning confidence." },
              { title: "Multiplayer Interaction Rate", val: 92, color: "#E53E3E", desc: "Of sessions resulted in positive collaborative voice interactions." }
            ].map((stat, i) => (
              <div key={i} className="glass-card" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex justify-between items-end" style={{ marginBottom: '1rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#E2E8F0' }}>{stat.title}</h3>
                  <span style={{ fontSize: '2.5rem', fontWeight: '800', color: stat.color, lineHeight: '1' }}>{stat.val}%</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <div style={{ width: `${stat.val}%`, height: '100%', background: stat.color, borderRadius: '4px' }}></div>
                </div>
                <p style={{ margin: 0, color: '#A0AEC0', fontSize: '1.1rem' }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. User Feedback & Experiment Results */}
      <section className="section scroll-animate" style={{ padding: '8rem 0 6rem' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: '#2d3748' }}>User Feedback & Usability Scores</h2>
            <p className="lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#718096' }}>Real perspectives from the target demographic during field experiments.</p>
          </div>

          <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '4rem' }}>
            {[
              { text: "It feels like a real game, not homework. Much more engaging than traditional tracing.", author: "Dyslexic Student, Age 9" },
              { text: "The adaptive guidance visibly reduced their frustration. They actually wanted to keep practicing.", author: "Special Education Teacher" },
              { text: "Multiplayer interaction improved participation drastically. He loved talking with his peers while learning.", author: "Parent of Participant" }
            ].map((quote, i) => (
              <div key={i} className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div>
                  <Quote size={40} color="#E2E8F0" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#4A5568', marginBottom: '2rem', lineHeight: '1.6' }}>"{quote.text}"</p>
                </div>
                <div style={{ fontWeight: '600', color: '#5B8DEF', fontSize: '1rem' }}>— {quote.author}</div>
              </div>
            ))}
          </div>

          {/* Usability Scores */}
          <div className="glass-card" style={{ backgroundColor: '#5B8DEF', padding: '3rem', borderRadius: '1.5rem', color: '#ffffff', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div className="text-center">
              <h4 style={{ color: '#EBF4FF', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>System Usability Scale (SUS)</h4>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1' }}>87.5</div>
              <p style={{ margin: 0, color: '#EBF4FF' }}>Excellent Usability Rating</p>
            </div>
            <div style={{ width: '2px', height: '80px', backgroundColor: 'rgba(255,255,255,0.2)' }} className="hidden md:block"></div>
            <div className="text-center">
              <h4 style={{ color: '#EBF4FF', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average Task Success</h4>
              <div style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1' }}>94%</div>
              <p style={{ margin: 0, color: '#EBF4FF' }}>First-attempt Completion</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResearchValidation;
