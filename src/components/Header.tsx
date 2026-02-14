import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-premium py-3 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/side board.png"
            alt="SmileCity Orthodontic and Dental Clinic Logo"
            width={200}
            height={50}
            className="h-auto w-48 md:w-56 hover:opacity-90 transition-opacity"
          />
          <div className="hidden lg:block w-px h-10 bg-gray-200"></div>
          <a
            href="https://maps.app.goo.gl/eb46A5CcHnRcx68n6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center md:text-left hover:text-[#5B216E] transition-colors"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">
              <span>📍 Location</span>
            </div>
            <p className="text-sm font-medium text-gray-700 leading-tight">
              M3M 65th Avenue, Sector 65,<br />Gurgaon, Haryana
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