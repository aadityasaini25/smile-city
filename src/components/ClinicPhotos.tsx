import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/2.jpg', alt: 'Modern Clinic Interior' },
    { src: '/images/I.jpg', alt: 'Comfortable Reception Area' },
    { src: '/images/Lab.jpg', alt: 'Advanced Dental Lab' },
    { src: '/images/WhatsApp Image 2025-10-15 at 16.40.24_8b48c6f6.jpg', alt: 'State-of-the-art Equipment' },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-lavender" id="gallery">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Modern Facility</h2>
          <div className="w-24 h-1.5 bg-[#5B216E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="btn-primary"
          >
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
