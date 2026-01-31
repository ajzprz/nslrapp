import React from 'react';
import Underconstuction from '../components/underconstuction';

function Fromimg () {
    return (
        <div className="py-12 bg-base-100 min-h-screen px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-black mb-8 border-l-8 border-primary pl-6">Detect From Image</h1>
                <Underconstuction/>
            </div>
        </div>
    );
}

export default Fromimg;
