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

const allServices = [
    "Invisible/Clear Braces", "RCT - Root Canal Treatment", "General Dentistry", "Cosmetic/ Aesthetic Dentistry",
    "Dental Implant Fixing", "Dental cap", "geriatric (elderly) dentistry", "Micro Dentistry",
    "patient-centered dental care", "Child Care Dentistry", "oral prophylaxis/teeth cleaning",
    "microscope integrated dental treatments", "Periodontics and Oral Implantology", "Dental Fillings",
    "BPS Dentures Fixing", "Metal Braces Fixing", "Dental Braces Fixing", "Tooth Coloured Fillings",
    "Implant Prosthesis", "Implant Retained Dentures", "Retention implant dentures",
    "Advanced surgery in Implantology", "Wedding Smile Planner", "Impaction / Impacted Tooth Extraction",
    "Teeth Straightening", "Straightening Teeth (Invisalign)", "Teeth Whitening", "Teeth - Jewellery",
    "Teeth Reshaping", "Artificial Teeth", "Orthodontic Treatment", "Dental Restoration",
    "Dental X-Ray", "Dental Examinations", "Cast Partial Denture", "Preparation for Dentures",
    "Ceramic Dental Braces", "Bad Breath (Halitosis) Treatment", "Crowns and Bridges Fixing",
    "Ceramic Crowns and Bridges Fixing", "Braces Adjustment", "Cleft Lip Repair", "Traumatic injuries Dental",
    "Inlays and Onlays", "Temporomandibular dysfunction", "Temporomandibular Joint Disorder",
    "Straightening Teeth (Conventional Braces)", "Temporomandibular Joint Dysfunction - ATM",
    "Full Denture (Acrylic)", "Removal Partial Denture (RPD)", "Conservative Dentistry",
    "Pit and Fissure Sealant", "Overdentures Fixing", "Composite Bondings", "Cosmetic Filling",
    "Post and Core", "Cosmetic Veneers/Bonding", "Complete/Partial Dentures Fixing",
    "Gum Disease Treatment/ Surgery", "Discolored Tooth Restoration", "Flap Surgery",
    "Flexible Partial/Complete Denture", "Jaw Orthopedics", "Endo Surgery Or Apicoectomy",
    "Oral Rehabilitation"
];

export default function ServicesSection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
                    <div className="w-24 h-1.5 bg-[#5B216E] mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        From basic check-ups to advanced orthodontic transformations, we provide all the care your family needs under one roof.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {serviceCategories.map((category, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#5B216E] hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.services.slice(0, 6).map((service, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-2 text-gray-600 text-sm">
                                        <span className="text-[#5B216E] mt-1">•</span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="bg-[#5B216E]/5 p-10 md:p-16 rounded-[3rem] border border-[#5B216E]/10">
                    <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">A-Z Dental Procedures</h3>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-2">
                        {allServices.sort().map((service, idx) => (
                            <div key={idx} className="flex items-center gap-3 py-1 text-gray-700 text-sm hover:text-[#5B216E] transition-colors">
                                <span className="text-[#d4af37]">✧</span>
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
