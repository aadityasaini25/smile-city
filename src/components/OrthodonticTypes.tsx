

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
    <section className="relative bg-[#0b1120] text-white p-4 md:p-12 lg:p-16 pb-24 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Expert <span className="text-gradient-gold">Orthodontic Care</span>
          </h2>
          <div className="w-24 h-1 bg-[#1a897f] mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-center text-gray-400 mb-8 md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Orthodontics (Aligner Specialist, Invisalign Certified Provider). Specialist-driven practice by Dr. K. Purnasri in Gurgaon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {orthoData.map((ortho, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative bg-white/5 rounded-xl mb-6 h-48 flex items-center justify-center overflow-hidden border border-slate-700/50 group-hover:border-brandTeal/30 transition-colors">
                <img
                  src={ortho.image}
                  alt={ortho.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-center mb-4 text-xl text-white group-hover:text-[#1a897f] transition-colors">{ortho.title}</h3>
              <p className="text-center mb-6 text-sm text-gray-400 leading-relaxed min-h-[60px]">{ortho.description}</p>
              <ul className="space-y-3">
                {ortho.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-[#1a897f] mt-0.5">✓</span>
                    <span className="font-light">{benefit}</span>
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