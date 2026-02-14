

export default function OrthodonticTypes() {
  const orthoData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/transparent.jpeg",
      description: "Discreetly straighten your teeth with nearly invisible, removable aligners tailored to your smile.",
      benefits: [
        "Virtually invisible for a confident smile",
        "Removable for easy eating and oral hygiene",
        "Smooth, comfortable custom-fit plastic",
        "Predictable results with advanced 3D mapping"
      ]
    },
    {
      title: "Traditional Metal Braces",
      image: "/images/traditional.jpeg",
      description: "A highly effective and reliable solution for correcting complex orthodontic and alignment issues.",
      benefits: [
        "Proven results for children, teens, and adults",
        "Efficiently corrects severe crowding and gaps",
        "Durable stainless steel construction",
        "The most cost-effective orthodontic option"
      ]
    },
    {
      title: "Ceramic Aesthetic Braces",
      image: "/images/Aesthetic.jpg.webp",
      description: "A less noticeable alternative to metal braces, featuring tooth-colored brackets that blend in.",
      benefits: [
        "Blends naturally with your tooth color",
        "Comfortable, rounded bracket design",
        "Effective for a wide range of corrections",
        "Resistant to staining and daily wear"
      ]
    },
    {
      title: "Self-Ligating Braces",
      image: "/images/Self-Ligating Braces.jpeg",
      description: "Modern orthodontic technology designed for faster treatment times and fewer clinic visits.",
      benefits: [
        "Faster tooth movement with reduced friction",
        "Easier to clean without elastic ties",
        "Fewer office visits and adjustments needed",
        "Gentler pressure for enhanced comfort"
      ]
    }
  ];

  return (
    <section className="relative bg-[#0b1120] text-white py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Specialized <span className="text-gradient-gold">Orthodontic Care</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#5B216E] mx-auto rounded-full mb-10 opacity-80"></div>
          <p className="text-center text-gray-400 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            MDS Orthodontist, Aligner Specialist & Invisalign Certified Provider. Expert care led by Dr. K. Purnasri in Gurgaon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {orthoData.map((ortho, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-[32px] shadow-2xl hover:shadow-purple-500/10 hover:bg-slate-800/80 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative rounded-2xl mb-8 aspect-[4/3] flex items-center justify-center overflow-hidden border border-slate-700/50 group-hover:border-purple-500/30 transition-colors bg-white">
                <img
                  src={ortho.image}
                  alt={ortho.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-bold text-center mb-4 text-2xl text-white group-hover:text-white transition-colors">{ortho.title}</h3>
              <p className="text-center mb-8 text-gray-400 leading-relaxed font-light flex-grow">{ortho.description}</p>
              <ul className="space-y-4">
                {ortho.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300">
                    <span className="text-[#d4af37] mt-1 text-xs">✦</span>
                    <span className="font-light leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}