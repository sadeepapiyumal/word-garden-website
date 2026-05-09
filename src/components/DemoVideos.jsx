import React from 'react';

const DemoVideos = () => {
  const videos = [
    { title: "Mobile Application Demo", src: "https://www.youtube.com/embed/bxNopvNw0nY" },
    { title: "Multiplayer Game Demo", src: "https://www.youtube.com/embed/Zx4Iw_vQPZY" },
    { title: "Commercialization Pitch", src: "https://www.youtube.com/embed/W7SSYIiQqL8" }
  ];

  return (
    <section id="demovideos" className="section scroll-animate">
      <div className="container" style={{ maxWidth: '95%' }}>
        <div className="section-header text-center">
          <h2 className="text-gradient">Platform Demonstrations</h2>
          <p className="lead">Experience the Word Garden platform in action.</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div
                className="flex items-center justify-center relative bg-black"
                style={{
                  aspectRatio: '16/9',
                  height: 'auto',
                  borderBottom: '1px solid var(--color-glass-border)'
                }}
              >
                <iframe
                  src={vid.src}
                  title={vid.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ margin: 0, textAlign: 'center' }}>{vid.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;
