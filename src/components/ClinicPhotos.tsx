import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const allPhotos = [
    { src: '/images/2.jpg', alt: 'Clinic Interior 1' },
    { src: '/images/I.jpg', alt: 'Clinic Interior 2' },
    { src: '/images/Lab.jpg', alt: 'Clinic Lab Area' },
    { src: '/images/WhatsApp Image 2025-10-15 at 16.40.24_8b48c6f6.jpg', alt: 'Clinic Equipment' }
  ];

  return (
    <section className="bg-gray-50 p-4 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Our <span className="text-gradient-gold">State-of-the-Art</span> Clinic</h2>
          <div className="w-24 h-1 bg-[#5B216E] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience comfort and precision in our modern facility designed for your best smile journey.</p>
        </div>

        {/* Unified Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {allPhotos.map((img, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl h-64 md:h-80 lg:h-[400px] relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#5B216E] text-white py-4 px-12 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all shadow-md transform hover:-translate-y-1"
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
} 