import React from 'react';
import underconstruction from "../under construction.png";

function Underconstuction() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-base-300 rounded-3xl my-12 mx-4 border border-base-content/10">
            <div className="max-w-2xl text-center">
                <img 
                    src={underconstruction} 
                    alt="underconstruction"
                    className="w-full h-auto rounded-3xl shadow-2xl mb-8"
                />
                <h2 className="text-3xl font-black mb-4">Work in Progress</h2>
                <p className="text-base-content/60">We're currently perfecting the Image Detection engine. Stay tuned for a breakthrough in Nepali Sign Language translation!</p>
            </div>
        </div>
    );
}

export default Underconstuction;
