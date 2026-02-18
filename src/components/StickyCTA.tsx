import { useState, useEffect } from 'react';
import { X, ChevronUp } from 'lucide-react';

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) setShouldRender(true);
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <>
      {/* Full CTA */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl glass shadow-2xl rounded-3xl p-5 md:p-6 z-50 transition-all duration-500 ease-in-out ${isVisible && !isMinimized
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
          }`}
      >
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-3 -right-3 bg-white text-gray-500 hover:text-red-500 p-1.5 rounded-full shadow-md border border-gray-100 transition-colors z-10"
          aria-label="Minimize"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-0.5">Transform Your Smile Today</h3>
            <p className="text-xs md:text-sm text-gray-600 font-light">MDS Orthodontist Consultation & Digital Scan</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={onBookAppointment}
              className="flex-1 md:flex-none bg-[#5B216E] text-white px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-purple-500/30 hover:-translate-y-1 transition-all shadow-lg"
            >
              Book Appointment
            </button>
            <a
              href="tel:+919211663616"
              className="hidden sm:flex items-center justify-center bg-white text-[#5B216E] border-2 border-purple-100 px-5 py-3 rounded-full font-bold text-sm hover:bg-purple-50 transition-colors"
            >
              📞
            </a>
          </div>
        </div>
      </div>

      {/* Minimized Floating Button */}
      <button
        onClick={() => setIsMinimized(false)}
        className={`fixed bottom-6 right-6 bg-[#5B216E] text-white px-5 py-3 rounded-full font-bold shadow-xl z-50 transition-all duration-500 ease-out flex items-center gap-2 hover:bg-[#4a1b5a] hover:scale-105 ${isVisible && isMinimized
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
      >
        <span>Book Appointment</span>
        <ChevronUp size={16} />
      </button>
    </>
  );
} 