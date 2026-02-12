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
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 text-white rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#5B216E' }}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}