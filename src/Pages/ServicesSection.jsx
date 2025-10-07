import { Building2, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import Renovations from "../assets/renovatin.jpg";
import Residential from "../assets/residental.jpg";
import Commercial from "../assets/illustration.jpg";

const services = [
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Residential Construction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: Renovations, 
  },
  {
    icon: <Building2 className="w-8 h-8 text-white" />,
    title: "Commercial Construction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: Residential, 
  },
  {
    icon: <Paintbrush className="w-8 h-8 text-white" />,
    title: "Renovations and Remodeling",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: Commercial, 
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 text-center mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-orange-500 font-medium mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Services That Fit <span className="text-orange-500">Your Needs</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100"
            >
              <div
                className="h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }} // ✅ Works now
              >
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-900 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="pt-10 pb-6 px-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <a
                  href="#"
                  className="text-sm text-orange-500 font-medium flex items-center justify-center gap-1 hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 text-sm font-semibold transition-all">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
