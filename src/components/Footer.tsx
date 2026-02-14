import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <div className="bg-white p-6 rounded-2xl inline-block mb-8 shadow-xl">
            <Image
              src="/images/side board.png"
              alt="SmileCity Orthodontic and Dental Clinic"
              width={240}
              height={60}
              className="h-auto opacity-100"
            />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            SmileCity Orthodontic and Dental Clinic: MDS Orthodontist, Aligner Specialist & Invisalign Certified Providers. Specialist-driven orthodontic care for your perfect smile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-20">
          <div className="space-y-6">
            <h3 className="font-bold text-white text-xl border-b border-gray-800 pb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919211663616" className="block text-[#d4af37] font-bold text-2xl hover:scale-105 transition-transform inline-block">+91 9211663616</a>
              <p className="text-gray-300 font-medium">SmileCity Orthodontic and Dental Clinic</p>
              <a href="mailto:smilecity.gurgaon@gmail.com" className="text-sm hover:text-white transition-colors block">smilecity.gurgaon@gmail.com</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-white text-xl border-b border-gray-800 pb-4">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-3">
              <span className="text-[#d4af37] text-2xl mt-0.5">🕒</span>
              <div className="text-gray-300 space-y-2">
                <p className="font-bold">Mon–Sun</p>
                <p>10:00 AM – 08:00 PM</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-white text-xl border-b border-gray-800 pb-4">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/QwtqpBP4TbuHRDGw6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block"
            >
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="text-3xl mt-0.5">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#d4af37] transition-colors">
                  R2, LG-28, Lower Ground Floor,<br />
                  M3M 65th Avenue, Sector 65,<br />
                  Gurgaon, Haryana
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 h-full">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">Payment Methods Accepted</h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                { name: "Credit & Debit Card", icon: "💳" },
                { name: "Cash", icon: "💵" },
                { name: "Cheque", icon: "📝" },
                { name: "No Cost EMI", icon: "🏦" }
              ].map((method, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>{method.icon}</span>
                  {method.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#5B216E] font-medium">No Cost EMI facility available for all major treatments.</p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[300px] shadow-inner border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449209.6223271191!2d76.45548820495607!3d28.40567023225028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d236290a87c99%3A0xdc58194b5d4bb14d!2sSmileCity%20Orthodontic%20and%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1770839727547!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SmileCity Orthodontic and Dental Clinic - Sector 65, Gurgaon"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SmileCity Orthodontic and Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}