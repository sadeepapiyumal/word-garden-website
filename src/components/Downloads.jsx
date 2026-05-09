import React from 'react';
import { FileText, Download, Presentation, FileCode } from 'lucide-react';

import ResearchPaper from '../assets/Documents/Research Paper.pdf';
import ResearchProposal from '../assets/Documents/Research Proposal.pdf';
import FinalThesis from '../assets/Documents/Final Thesis.pdf';
import ChecklistDocument from '../assets/Documents/Checklist Document.pdf';
import PresentationSlides from '../assets/Documents/Presentation Slides.pdf';
import ProjectCharter from '../assets/Documents/Project Charter.pdf';

const Downloads = () => {
  const documents = [
    { name: "Research Paper", icon: <FileText size={36} />, color: "var(--color-primary)", file: ResearchPaper },
    { name: "Research Proposal", icon: <FileText size={36} />, color: "var(--color-secondary)", file: ResearchProposal },
    { name: "Final Thesis", icon: <FileCode size={36} />, color: "#E76F51", file: FinalThesis },
    { name: "Checklist Document", icon: <FileText size={36} />, color: "var(--color-primary-light)", file: ChecklistDocument },
    { name: "Presentation Slides", icon: <Presentation size={36} />, color: "var(--color-primary)", file: PresentationSlides },
    { name: "Project Charter", icon: <FileText size={36} />, color: "var(--color-secondary)", file: ProjectCharter }
  ];

  return (
    <section id="downloads" className="section scroll-animate">
      <div className="container" style={{ maxWidth: '95%' }}>
        <div className="section-header text-center">
          <h2 className="text-gradient">Project Documentation</h2>
          <p className="lead">Access all research, technical, and commercialization documents.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {documents.map((doc, idx) => (
            <div key={idx} className="glass-card flex justify-between items-center" style={{ padding: '2.5rem' }}>
              <div className="flex items-center gap-6">
                <div style={{ color: doc.color }}>{doc.icon}</div>
                <a 
                  href={doc.file} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ textDecoration: 'none', color: 'var(--color-text)' }}
                  className="hover:text-blue-500 transition-colors"
                >
                  <h4 style={{ margin: 0, fontSize: '1.4rem', cursor: 'pointer' }}>{doc.name}</h4>
                </a>
              </div>
              <a 
                href={doc.file} 
                download 
                aria-label={`Download ${doc.name}`}
                className="hover:scale-110 transition-transform"
              >
                <Download size={32} color="var(--color-text-light)" style={{ cursor: 'pointer' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
