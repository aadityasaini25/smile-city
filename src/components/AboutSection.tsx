import React from 'react';

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-lavender">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5B216E] mb-8 tracking-tight">Welcome to SmileCity Orthodontic and Dental Clinic</h2>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                        At <strong>SmileCity Orthodontic and Dental Clinic</strong> in Gurgaon, we provide a unique, all-in-one approach to your family's oral health. We believe a truly great smile is built on a foundation of expert care, advanced technology, and genuine patient comfort.
                    </p>
                </div>

                <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-premium border border-white/50 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#5B216E] mb-8 tracking-tight">A Unique Advantage: Orthodontic & General Dentistry in One Place</h3>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                            Our clinic is led by <strong>Dr. K. Purnasri</strong>, a specialist in both <strong>Orthodontics (braces and aligners)</strong> and <strong>General Dentistry</strong>.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed font-light">
                            This dual expertise is your advantage. You receive seamless, continuous care for your entire dental journey. Why visit multiple specialists when you can have your routine check-ups, cleanings, and advanced orthodontic work managed with a single, holistic vision for your smile?
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#5B216E]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#5B216E] mb-4">Key Specializations</h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {[
                                "Orthodontics & Dentofacial Orthopedics",
                                "Invisible Aligners (Invisalign)",
                                "General & Family Dentistry",
                                "Cosmetic & Restorative Care",
                                "Smile Designing",
                                "Jaw Alignment Correction"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                    <span className="text-[#5B216E] text-xl">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-[#d4af37]">
                        <h3 className="text-xl md:text-2xl font-bold text-[#5B216E] mb-4">Meet Our Expert</h3>
                        <div className="space-y-4">
                            <p className="font-bold text-xl text-gray-900">Dr. K. Purnasri</p>
                            <ul className="space-y-3">
                                {[
                                    "MDS Orthodontist - Specialist-Driven Care",
                                    "Aligner Specialist & Invisalign Certified",
                                    "8+ Years Experience post BDS",
                                    "Dual Expertise: Ortho & General Dentistry"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                                        <span className="text-[#d4af37] text-xl">🦷</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

