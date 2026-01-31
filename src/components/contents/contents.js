import React from 'react';
import { Link } from 'react-router-dom';

const Contents = () => {
  return (
    <div className="py-24 bg-base-200">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            We translate Nepali Sign Language. <br/>
            <span className="text-secondary italic">Automatically.</span>
          </h2>
          <div className="space-y-6 text-lg text-base-content/70 mb-10">
            <p>
              NSLRAPP leverages cutting-edge AI and advanced computer vision to break communication barriers. 
              Our technology instantly recognizes and translates sign language into text, making conversation accessible to everyone.
            </p>
            <p className="font-medium">
              Perfect for businesses looking to be more inclusive and educational institutions aiming for better accessibility.
            </p>
          </div>
          <Link to="/background" className="btn btn-secondary btn-outline btn-lg px-12 hover:scale-105 transition-all">
            Learn Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contents;
