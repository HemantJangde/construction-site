import { motion } from "framer-motion";
import { Cpu, UserCog, Clock, Award, Play } from "lucide-react";
import planing from "../assets/planing.jpg";

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-orange-500" />,
    title: "Advanced Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: <UserCog className="w-6 h-6 text-orange-500" />,
    title: "Expert Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-500" />,
    title: "On-Time Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: <Award className="w-6 h-6 text-orange-500" />,
    title: "Award Winning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <p className="text-orange-500 font-medium mb-2 uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Building Trust, <br />
            <span className="text-orange-500">Delivering Excellence</span>
          </h2>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 text-sm sm:text-base font-semibold flex items-center gap-2 transition-all">
              Learn More
              <span className="bg-blue-900 text-white rounded-full p-1">
                <Play className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 h-auto md:h-[420px] flex justify-center">
            <img
              src={planing}
              alt="Planning process"
              className="w-full h-[260px] sm:h-[340px] md:h-full rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right: Features Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-1/2 bg-[#0C226B] rounded-2xl text-white p-6 sm:p-8 shadow-xl h-auto md:h-[420px] flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-start">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
