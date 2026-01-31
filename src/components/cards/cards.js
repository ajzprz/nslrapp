import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const features = [
    {
      title: "Real-time Detection",
      desc: "Instant live translation of Nepali signs using your device's webcam with low latency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Z"/><path d="M7 21h10"/></svg>
      ),
      color: "bg-primary/20 text-primary",
      link: "/realtime"
    },
    {
      title: "Detect from Image",
      desc: "Upload photos containing Nepali sign language and get accurate translations instantly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      ),
      color: "bg-secondary/20 text-secondary",
      link: "/fromimg"
    },
    {
      title: "Detect from Video",
      desc: "Analyze video files for continuous sign language recognition and record results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>
      ),
      color: "bg-accent/20 text-accent",
      link: "/fromvid"
    }
  ];

  return (
    <div className="py-20 px-8 bg-base-100">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-widest text-primary">Powerful Recognition</h2>
        <p className="text-base-content/60 max-w-2xl mx-auto">Multiple ways to interpret Nepali Sign Language using our state-of-the-art model.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="card bg-base-200 border border-base-content/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 group">
            <figure className="px-10 pt-10">
              <div className={`p-8 rounded-full ${feature.color} transition-all duration-500 group-hover:scale-110`}>
                {feature.icon}
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-base-content/70 mb-6">{feature.desc}</p>
              <div className="card-actions">
                <Link to={feature.link} className="btn btn-primary btn-wide shadow-lg shadow-primary/20">Try Demo</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
