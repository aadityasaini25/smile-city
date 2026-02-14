interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl glass shadow-2xl rounded-3xl p-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl text-gray-900 mb-1">Transform Your Smile Today</h3>
          <p className="text-gray-600 font-light">MDS Orthodontist Consultation & Digital Scan</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={onBookAppointment}
            className="flex-1 md:flex-none bg-[#5B216E] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-purple-500/30 hover:-translate-y-1 transition-all"
          >
            Book Appointment
          </button>
          <a
            href="tel:+919211663616"
            className="hidden sm:flex items-center justify-center bg-white text-[#5B216E] border-2 border-purple-100 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors"
          >
            📞
          </a>
        </div>
      </div>
    </div>
  );
} 