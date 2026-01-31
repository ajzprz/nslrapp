import React from 'react';

function Aboutus () {
    const team = [
        { name: "The Visionaries", role: "UI/UX & Strategy", desc: "Focusing on making AI accessible and beautiful for everyone." },
        { name: "The Engineers", role: "AI & Development", desc: "Building the core TensorFlow recognition engine from the ground up." },
    ];

    return (
        <div className="py-16 bg-base-100 min-h-screen px-4">
            <div className="max-w-5xl mx-auto">
                {/* Hero section for About Us */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-black mb-6">About <span className="text-secondary">NSLRAPP</span></h1>
                    <div className="w-24 h-2 bg-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed">
                        We are a group of passionate developers and researchers dedicated to making the world a more inclusive place through technology.
                    </p>
                </div>

                {/* Content section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
                    <div className="order-2 md:order-1">
                        <div className="p-8 bg-base-200 rounded-[2rem] border border-base-content/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-base-content/80 text-lg leading-relaxed mb-4">
                                NSLRAPP started as a research project aimed at understanding the complexities of the Nepali Sign Language. We realized that while global sign languages had many tools, NSL was often overlooked.
                            </p>
                            <p className="text-base-content/80 text-lg leading-relaxed">
                                Our team spent months collecting data, training models, and refining the user experience to create a tool that is not just functional, but a joy to use.
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-8">
                        <h2 className="text-4xl font-black leading-tight">Driven by <span className="italic text-secondary">Purpose.</span></h2>
                        <p className="text-xl text-base-content/70">
                            Our goal is to integrate this technology into public spaces across Nepal, from government offices to local schools.
                        </p>
                        <div className="flex gap-4">
                            <div className="badge badge-outline badge-lg p-6">Innovation</div>
                            <div className="badge badge-outline badge-lg p-6">Inclusion</div>
                        </div>
                    </div>
                </div>

                {/* Team section */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">The Developer Behind the Tech</h2>
                    <div className="card bg-base-200 border border-base-content/10 hover:border-secondary/30 transition-all duration-300 shadow-xl overflow-hidden group">
                        <div className="card-body items-center text-center p-12">
                            <div className="w-32 h-32 rounded-full mb-6 overflow-hidden border-4 border-secondary/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <img 
                                    src="/DSC_1996.jpg" 
                                    alt="Mr. Ajaya Prajapati" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="card-title text-3xl mb-2">Mr. Ajaya Prajapati</h3>
                            <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Solo Developer & AI Researcher</div>
                            <p className="text-base-content/70 text-lg mb-8 leading-relaxed italic">
                                "Dedicated to building intelligent systems that foster a more inclusive and accessible digital future for all communities in Nepal."
                            </p>
                            
                            <div className="flex gap-4">
                                <a 
                                    href="https://github.com/ajzprz" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-primary gap-2 px-8"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                    GitHub
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/ajayaprajapati/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-secondary gap-2 px-8"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
