import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      initials: "PS",
      date: "6 months ago",
      review: "Dr. Purna Sri is absolutely amazing! I was terrified of dental procedures, but she made me feel so comfortable. My Invisalign treatment was completed in just 8 months and the results are incredible. The clinic is spotless and the staff is so caring."
    },
    {
      name: "Meera Jain",
      initials: "MJ",
      date: "1 months ago",
      review: "Child-friendly environment made my 7-year-old daughter's visit stress-free. The pediatric team is wonderful and she actually looks forward to her dental visits now! They make it fun for kids."
    },
    {
      name: "Amit Verma",
      initials: "AV",
      date: "8 months ago",
      review: "Excellent orthodontic treatment! My braces journey was smooth and the results are perfect. The team monitored my progress closely and adjusted treatment as needed. Very satisfied with the outcome."
    },
    {
      name: "Vikram Singh",
      initials: "VS",
      date: "6 months ago",
      review: "Professional, clean, and modern clinic. Got my dental implants here and the entire process was smooth. Dr. Purna Sri is highly skilled and the results look completely natural. Worth every penny!"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-lavender">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={160}
            height={60}
            className="mx-auto mb-6 object-contain"
          />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Our Patients Say</h2>
          <div className="w-24 h-1 bg-[#5B216E] mx-auto rounded-full mt-6 opacity-60"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-inner" style={{ backgroundColor: '#5B216E' }}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed font-light">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}