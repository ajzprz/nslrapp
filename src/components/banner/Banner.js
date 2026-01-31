import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-[70vh] bg-base-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      <div className="hero-content text-center z-10">
        <div className="max-w-3xl">
          <div className="badge badge-primary badge-outline mb-4 animate-pulse px-4 py-3">Beta v2.0 Live</div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Bridging Silence with <br/>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 mb-10 leading-relaxed">
            Leading the way in Nepali Sign Language Recognition. Our AI-powered platform provides instant, accurate translation to bridge the communication gap across Nepal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-primary btn-lg shadow-xl shadow-primary/20 bg-gradient-to-r from-primary to-secondary border-none hover:scale-105 transition-transform duration-300">
              Try App Now
            </button>
            <button className="btn btn-outline btn-lg hover:bg-base-content/5 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
