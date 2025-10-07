import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import jcb from '../assets/jcb.png'

const steps = [
  {
    step: "STEP 1",
    title: "Consultation & Planning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    step: "STEP 2",
    title: "Design & Construction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    step: "STEP 3",
    title: "Final Inspection & Handover",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function SetUpSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-blue-900 font-medium mb-2">--How We Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
              How We <span className="text-orange-500">Get It Done</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all">
            Learn More
            <span className="bg-blue-900 text-white rounded-full p-1">
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative mb-33">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                {index === 0 ? (
                  <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.step}
                  </span>
                ) : (
                  <span className="text-orange-500">
                    <ChevronRight className="w-6 h-6" />
                  </span>
                )}
                <p className="text-sm font-semibold text-gray-500">{item.step}</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative excavator (optional image) */}
        <img
          src={jcb}
          alt="Excavator image"
          className="absolute    bottom-0 left-0 w-48 md:w-64 pointer-events-none"
        />
      </div>
    </section>
  );
}
