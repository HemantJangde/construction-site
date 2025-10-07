import { Facebook, Twitter } from "lucide-react";

import cheif from '../assets/cheif.png'
import cheif2 from '../assets/cheif2.png'
import cheif3 from '../assets/cheif3.png'
export default function TeamSection() {
  const team = [
    {
      name: "Jenny Alexander",
      role: "Chief Executive Officer",
      image: cheif2,
    },
    {
      name: "Esther Howard",
      role: "Civil Engineer",
      image: cheif,
    },
    {
      name: "Ronald Richards",
      role: "Structural Engineer",
      image: cheif3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Meet Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet the Faces <br />
            <span className="text-orange-500">Behind the Structures</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              {/* Image with split background effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l to-white from-[#0C226B] w-4/3 right-0"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover relative z-10"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#0C226B]">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  {[Facebook, Twitter].map((Icon, j) => (
                    <div
                      key={j}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-500 flex items-center justify-center transition-all"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 mx-auto">
            View All
            <span className="bg-[#0C226B] rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">
              +
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
