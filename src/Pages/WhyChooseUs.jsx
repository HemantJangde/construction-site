import { motion } from "framer-motion";
import { Cpu, UserCog, Clock, Award, Play } from "lucide-react";
import planing from "../assets/planing.jpg"

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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4  ">
        {/* Left Side */}
        <div className="w-full ">
          <p className="text-orange-500 font-medium mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Building Trust, <br />{" "}
            <span className="text-orange-500">Delivering Excellence</span>
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 text-sm font-semibold flex relative left-238 bottom-12 items-center gap-2 transition-all">
            Learn More
            <span className="bg-blue-900 text-white rounded-full p-1">
              <Play className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Right Side */}
        <div className="relative grid grid-cols-2 gap-10">
          <div className="bg-[url('/assets/planing.jpg')] bg-cover object-cover bg-center h-75 md:h-96 ">
           <img src={planing} alt=""className="  h-75 md:h-102 rounded-2xl w-full object-cover" />
          </div>
         
          {/* Floating Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="absolute -bottom-7 right-0 w-full md:w-[50%] bg-[#0C226B] rounded-2xl text-white p-6 shadow-lg"
          >
            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
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
