import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-premium py-0.5 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/images/side board.png"
            alt="SmileCity Orthodontic and Dental Clinic Logo"
            width={140}
            height={35}
            className="h-auto w-28 md:w-36 hover:opacity-90 transition-opacity"
          />
          <div className="hidden lg:block w-px h-6 bg-gray-200"></div>
          <a
            href="https://maps.app.goo.gl/eb46A5CcHnRcx68n6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center md:text-left hover:text-[#5B216E] transition-colors"
          >
            <div className="flex items-center gap-1 justify-center md:justify-start text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-0">
              <span>📍 Location</span>
            </div>
            <p className="text-[11px] font-medium text-gray-700 leading-tight whitespace-nowrap">
              M3M 65th Avenue, Sector 65, Gurgaon, Haryana
            </p>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+919211663616"
            className="hidden sm:flex flex-col items-end mr-4"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Call Specialist</span>
            <span className="text-[#5B216E] font-bold">+91 9211663616</span>
          </a>
          <button
            onClick={onBookAppointment}
            className="btn-primary shadow-purple-500/20"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}