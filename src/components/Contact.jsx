import React, { useState } from 'react';
import { User, Mail, FileText, MessageSquare, Send, MapPin, Users, Heart, Leaf, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch("https://formsubmit.co/ajax/sadeepapiyumal530@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: "New Contact Form Submission - Word Garden" // Custom subject for the email
      })
    })
    .then(response => response.json())
    .then(data => {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    })
    .catch(error => {
        console.log(error);
        setStatus('idle');
        alert("There was an error sending your message. Please try again.");
    });
  };

  return (
    <section id="contact" className="section scroll-animate" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Top Introduction */}
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>We'd love to hear from you!</h2>
          <p className="lead" style={{ color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
            Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'stretch' }}>
          
          {/* Left Card: Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card" style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div className="grid grid-cols-2 gap-5" style={{ marginBottom: '1.25rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568', fontSize: '1rem' }}>
                  <User size={18} color="#9f7aea" /> Your Name
                </label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your name" style={{ width: '100%', padding: '0.875rem 1.25rem', fontSize: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', backgroundColor: '#f7fafc', outline: 'none' }} />
              </div>
              {/* Email */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568', fontSize: '1rem' }}>
                  <Mail size={18} color="#ed64a6" /> Email Address
                </label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" style={{ width: '100%', padding: '0.875rem 1.25rem', fontSize: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', backgroundColor: '#f7fafc', outline: 'none' }} />
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568', fontSize: '1rem' }}>
                <FileText size={18} color="#ed8936" /> Subject
              </label>
              <input required name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Enter the subject" style={{ width: '100%', padding: '0.875rem 1.25rem', fontSize: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', backgroundColor: '#f7fafc', outline: 'none' }} />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontWeight: '500', color: '#4a5568', fontSize: '1rem' }}>
                <MessageSquare size={18} color="#9f7aea" /> Message or Query
              </label>
              <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." rows="4" style={{ width: '100%', padding: '0.875rem 1.25rem', fontSize: '1rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', backgroundColor: '#f7fafc', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            {/* Submit Button */}
            <button 
              disabled={status === 'sending' || status === 'sent'}
              type="submit" 
              className="btn w-full flex items-center justify-center gap-2" 
              style={{ 
                borderRadius: '2rem', 
                padding: '1.1rem', 
                fontSize: '1.1rem', 
                border: 'none', 
                cursor: status === 'sending' || status === 'sent' ? 'not-allowed' : 'pointer',
                backgroundColor: status === 'sent' ? '#38a169' : 'var(--color-secondary)',
                color: 'white',
                opacity: status === 'sending' ? 0.7 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              {status !== 'sent' && <Send size={18} />}
            </button>
          </form>

          {/* Right Card: General Info */}
          <div className="glass-card" style={{ backgroundColor: '#fffdf0', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fefcbf', padding: '0.6rem 1.25rem', borderRadius: '2rem', marginBottom: '2.5rem', color: '#b7791f', fontWeight: '600', fontSize: '1rem' }}>
              <MessageCircle size={20} /> General Contact Info
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Email Info */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', paddingBottom: '2rem', borderBottom: '1px dashed #e2e8f0' }}>
                <div style={{ backgroundColor: '#c6f6d5', padding: '0.875rem', borderRadius: '50%', color: '#38a169', flexShrink: 0 }}>
                  <Mail size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#718096', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>EMAIL</div>
                  <div style={{ fontWeight: '700', color: '#276749', fontSize: '1.15rem', wordBreak: 'break-all' }}>thewordgarden421@gmail.com</div>
                </div>
              </div>

              {/* Institution Info */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', paddingBottom: '2rem', borderBottom: '1px dashed #e2e8f0' }}>
                <div style={{ backgroundColor: '#fed7e2', padding: '0.875rem', borderRadius: '50%', color: '#d53f8c', flexShrink: 0 }}>
                  <MapPin size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#718096', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>INSTITUTION</div>
                  <div style={{ fontWeight: '700', color: '#2d3748', fontSize: '1.15rem' }}>Sri Lanka Institute of Information Technology (SLIIT)</div>
                  <div style={{ color: '#718096', marginTop: '0.25rem', fontSize: '1rem' }}>New Kandy Road, Malabe, Sri Lanka</div>
                </div>
              </div>

              {/* Team Info */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: '#c6f6d5', padding: '0.875rem', borderRadius: '50%', color: '#38a169', flexShrink: 0 }}>
                  <Users size={26} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#2d3748', fontSize: '1.15rem' }}>Team Word Garden</div>
                  <div style={{ color: '#718096', marginTop: '0.25rem', fontSize: '1rem' }}>Cultivating Literacy in an Emotionally Safe World</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div style={{ marginTop: '2.5rem', backgroundColor: '#e6fffa', padding: '1.5rem 2.5rem', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', color: '#285e61', fontWeight: '500', textAlign: 'center', border: '1px solid #b2f5ea' }}>
          <Heart size={24} color="#38b2ac" fill="#38b2ac" />
          <span style={{ fontSize: '1.1rem' }}>Your message matters to us. We will respond as soon as possible!</span>
          <Leaf size={24} color="#38b2ac" />
        </div>

      </div>
    </section>
  );
};

export default Contact;
