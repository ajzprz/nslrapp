import React from 'react';

function Background() {
    const stats = [
        { label: "Deaf Population in Nepal", value: "300,000+", color: "text-primary" },
        { label: "Sign Language Schools", value: "Minimal", color: "text-secondary" },
        { label: "Recognition Accuracy", value: "v2.0 Beta", color: "text-accent" }
    ];

    return (
        <div className="py-16 bg-base-100 min-h-screen px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-6">Mission & <span className="text-primary">Background</span></h1>
                    <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
                        NSLRAPP was born from a simple yet powerful question: How can technology break the barriers of silence in Nepal?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Challenge</h2>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            For the deaf and mute community in Nepal, daily communication is a constant struggle. With over 300,000 individuals relying on Nepali Sign Language (NSL), there is a massive gap in accessibility in hospitals, banks, and schools.
                        </p>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            Traditional translation methods are slow, expensive, and often unavailable. NSLRAPP uses artificial intelligence to provide a real-time bridge, converting visual signs into actionable text instantly.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="stats shadow bg-base-200 border border-base-content/5">
                                <div className="stat">
                                    <div className="stat-title">{stat.label}</div>
                                    <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                                    <div className="stat-desc">Information based on current data</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary/5 rounded-[3rem] p-10 md:p-16 border border-primary/10">
                    <h2 className="text-3xl font-bold mb-10 text-center">Why This Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <h3 className="font-bold text-xl">Dignity</h3>
                            <p className="text-base-content/60">Enabling independent communication without needing a human translator 24/7.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.066A5 5 0 0 1 21 8a5 5 0 0 1-9 3 5 5 0 0 1-9-3 5 5 0 0 1 9-1.934Z"/><path d="M22 14h-4v4"/><path d="M2 14h4v4"/><path d="M15 21l-3-3-3 3"/></svg>
                            </div>
                            <h3 className="font-bold text-xl">Accessibility</h3>
                            <p className="text-base-content/60">Making public services reachable for those who use NSL as their first language.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4-8 4-8-4Z"/><path d="m4 10 8 4 8-4"/><path d="m4 14 8 4 8-4"/><path d="M12 22v-4"/></svg>
                            </div>
                            <h3 className="font-bold text-xl">Education</h3>
                            <p className="text-base-content/60">Providing a tool for students to learn and practice sign language effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
