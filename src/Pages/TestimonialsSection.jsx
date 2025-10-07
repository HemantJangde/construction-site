import { Star } from "lucide-react";

import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Happy Client",
      image: review1,
      rating: 5,
      title: "Beyond Expectations!",
      feedback:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      name: "Jenny Wilson",
      role: "Happy Client",
      image: review2,
      rating: 5,
      title: "Top-Notch Service!",
      feedback:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];

  return (
    <section className="py-20 bg-[#0C226B] text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Header */}
        <p className="text-orange-500 font-medium mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Experience Shared by <br />
          <span className="text-orange-500">Our Clients</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#122C7E] rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
                <span className="ml-2 text-white font-medium">{t.rating.toFixed(1)}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{t.title}</h3>

              {/* Feedback */}
              <p className="text-gray-300 text-sm mb-6">{t.feedback}</p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
