import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">Meet The <span className="text-gradient-gold">Expert</span></h2>
          <div className="w-24 h-1.5 bg-[#5B216E] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium border-8 border-white ring-1 ring-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/smile.jpg"
                alt="Dr. K. Purnasri"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Dr. K. Purnasri
            </h3>
            <p className="text-[#5B216E] font-bold text-xl uppercase tracking-widest mb-8 border-b border-purple-100 pb-4 inline-block">
              MDS Orthodontist, Aligner Specialist, Invisalign Certified Provider
            </p>

            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-light">
              <p>
                With over <strong className="text-gray-900">8 years of clinical experience</strong>, Dr. K. Purnasri is a dedicated specialist providing precision-driven orthodontic care. She is recognized for her expertise in complex alignment cases and digital smile design.
              </p>
              <p>
                At <strong>SmileCity Orthodontic and Dental Clinic</strong>, we follow a specialist-driven practice model, ensuring you receive direct care from the lead doctor throughout your treatment journey.
              </p>
              <p>
                Specializing in creating beautiful, functional smiles using the latest advancements in aligner technology and traditional orthodontics. Her approach combines clinical excellence with personalized patient care.
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={onBookAppointment}
                className="btn-primary"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}