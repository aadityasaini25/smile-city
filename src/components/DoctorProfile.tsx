import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Meet The <span className="text-gradient-gold">Expert</span></h2>
          <div className="w-24 h-1 bg-[#5B216E] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 md:w-full md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
              <Image
                src="/images/smile.jpg"
                alt="Dr. K. Purnasri"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Dr. K. Purnasri
            </h3>
            <p className="text-[#5B216E] font-bold text-lg uppercase tracking-wider mb-6">
              Orthodontics (Aligner Specialist, Invisalign Certified Provider)
            </p>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                <strong>MDS Orthodontist, Aligner Specialist & Invisalign Certified</strong>
              </p>
              <p>
                With over <strong className="text-gray-900">8 years of experience post BDS</strong>, Dr. K. Purnasri is a dedicated specialist providing precision-driven orthodontic care.
              </p>
              <p>
                At <strong>SmileCity Orthodontic and Dental Clinic</strong>, we follow a specialist-driven practice model, ensuring you receive direct care from the lead doctor throughout your treatment journey.
              </p>
              <p>
                Specializing in creating beautiful, functional smiles using the latest advancements in aligner technology and traditional orthodontics. Her approach combines clinical excellence with personalized patient care.
              </p>
            </div>

            <div className="mt-10">
              <button
                onClick={onBookAppointment}
                className="bg-[#5B216E] text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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