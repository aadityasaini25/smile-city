import React from 'react';

const serviceCategories = [
    {
        title: "Orthodontic Specialty",
        icon: "🦷",
        services: [
            "Metal & Ceramic (Clear) Braces",
            "Clear Aligners (Invisalign)",
            "Bite Correction & Jaw Alignment",
            "Teeth Straightening",
            "Teeth Reshaping",
            "Jaw Orthopedics",
            "Braces Adjustment"
        ]
    },
    {
        title: "General & Family Dentistry",
        icon: "👨‍👩‍👧‍👦",
        services: [
            "Routine Dental Check-ups & Cleanings",
            "Tooth-Coloured Fillings",
            "Root Canal Treatment (RCT)",
            "Extractions",
            "Child Care Dentistry",
            "Geriatric (Elderly) Dentistry",
            "Oral Prophylaxis / Teeth Cleaning"
        ]
    },
    {
        title: "Cosmetic & Restorative Care",
        icon: "✨",
        services: [
            "Teeth Whitening",
            "Dental Veneers, Crowns, & Bridges",
            "Smile Makeovers",
            "Teeth Jewellery",
            "Dental Restoration",
            "Inlays and Onlays",
            "Composite Bondings"
        ]
    },
    {
        title: "Advanced Solutions",
        icon: "🔬",
        services: [
            "Dental Implant Fixing",
            "Microscope Integrated Treatments",
            "Oral Rehabilitation",
            "Temporomandibular Joint (TMJ) Disorder",
            "Digital Dental X-Rays",
            "Full & Partial Dentures (Acrylic/Flexible)",
            "Impaction / Impacted Tooth Extraction"
        ]
    }
];

const groupedServices = [
    {
        category: "Orthodontics",
        services: ["Metal & Ceramic Braces", "Invisible/Clear Braces", "Invisalign", "Straightening Teeth", "Teeth Straightening", "Bite Correction", "Jaw Alignment", "Self-Ligating Braces", "Retainers", "Braces Adjustment", "Jaw Orthopedics"]
    },
    {
        category: "General & Family Dentistry",
        services: ["Routine Check-ups", "Teeth Cleaning", "Dental Fillings", "Tooth Coloured Fillings", "Root Canal Treatment (RCT)", "Extractions", "Dental X-Ray", "Bad Breath Treatment", "Flissure Sealant"]
    },
    {
        category: "Cosmetic & Restorative Care",
        services: ["Teeth Whitening", "Dental Veneers", "Smile Makeovers", "Teeth Jewellery", "Teeth Reshaping", "Crowns and Bridges", "Ceramic Crowns", "Composite Bondings", "Smile Designing"]
    },
    {
        category: "Advanced Dental Solutions",
        services: ["Dental Implants", "Implant Prosthesis", "Full & Partial Dentures", "RPD", "Oral Rehabilitation", "TMJ Disorder Treatment", "Micro Dentistry", "Impacted Tooth Extraction"]
    },
    {
        category: "Pediatric & Geriatric Dentistry",
        services: ["Child Care Dentistry", "Geriatric Dentistry", "Elderly Dental Care", "Milk Tooth Extraction", "Pediatric Consultations"]
    }
];

export default function ServicesSection() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Specialized Care</h2>
                    <div className="w-24 h-1.5 bg-[#5B216E] mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        From basic check-ups to advanced orthodontic transformations, we provide all the care your family needs under one roof.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {serviceCategories.map((category, idx) => (
                        <div key={idx} className="card group">
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.services.slice(0, 6).map((service, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-3 text-gray-600 font-light">
                                        <span className="text-[#5B216E] mt-1.5 text-xs">•</span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-lavender p-10 md:p-20 rounded-[3rem] border border-purple-100/50">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight">Comprehensive Dental Treatments</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {groupedServices.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-6">
                                <h4 className="text-xl font-bold text-[#5B216E] border-b border-purple-200 pb-3">{group.category}</h4>
                                <ul className="space-y-3">
                                    {group.services.map((service, sIdx) => (
                                        <li key={sIdx} className="flex items-center gap-3 text-gray-700 font-light hover:text-[#5B216E] transition-colors">
                                            <span className="text-[#d4af37] text-xs">✧</span>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
