import Image from "next/image";

export default function SmileSimulator() {
    return (
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-purple-100 text-center relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#5B216E] to-[#d4af37]"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#5B216E] mb-6 tracking-tight leading-tight">
                        See Your New Invisalign Smile in Seconds
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Preview your potential smile transformation instantly using Invisalign SmileView technology.
                    </p>

                    <div className="flex flex-col items-center gap-8 mb-12">
                        <a
                            href="https://providerbio-apac.invisalign.com/sv/1478109#start"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary py-4 px-8 text-lg shadow-lg shadow-purple-500/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group w-full md:w-auto"
                        >
                            <span>Try Smile Simulator Now</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <div className="flex flex-col items-center gap-3 animate-fade-in-up">
                            <div className="p-3 bg-white rounded-xl shadow-md border border-gray-100 transform transition-transform hover:scale-105 duration-300">
                                <Image
                                    src="/images/QRCode.jpeg"
                                    alt="Scan to try SmileView"
                                    width={140}
                                    height={140}
                                    className="rounded-lg"
                                />
                            </div>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Scan to Start</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8 text-left md:text-center">
                        {[
                            { icon: "📸", text: "Click the button or scan the QR code" },
                            { icon: "🤳", text: "Upload or take a selfie" },
                            { icon: "✨", text: "View your simulated smile transformation" }
                        ].map((step, idx) => (
                            <div key={idx} className="flex md:flex-col items-center gap-4 p-5 rounded-xl bg-purple-50/50 border border-purple-100 hover:bg-purple-50 transition-colors duration-300">
                                <span className="text-2xl bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-sm text-[#5B216E]">{step.icon}</span>
                                <p className="text-gray-700 font-medium text-sm leading-snug">{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-gray-400 max-w-lg mx-auto italic border-t border-gray-100 pt-6">
                        Disclaimer: SmileView provides a simulated preview and actual results may vary based on individual dental conditions.
                    </p>
                </div>
            </div>
        </section>
    );
}
