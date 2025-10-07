import { MapPin, Ruler, Clock } from "lucide-react";
import { motion } from "framer-motion";
import CommercialConstruction from "../assets/CommercialConstruction.jpg";
import ResidentialConstruction from "../assets/ResidentialConstruction.jpg";

const projects = [
  {
    id: 1,
    title: "The Business Hub",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    location: "New York, USA",
    area: "18,000 square meters",
    duration: "5Y, 3M",
    year: "2020–2025",
    type: "Commercial Construction",
    image: CommercialConstruction,
  },
  {
    id: 2,
    title: "Sky Haven",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    location: "New York, USA",
    area: "500 square meters",
    duration: "1Y, 2M",
    year: "2024–2025",
    type: "Residential Construction",
    image: ResidentialConstruction,
  },
];

export default function CompletedProjects() {
  return (
    <section className="bg-[#081A51] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-2">— Recent Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">Completed Projects</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center bg-[#0C226B] rounded-3xl overflow-hidden shadow-lg`}
            >
              {/* Image */}
              <div
                className="w-full md:w-1/2 h-72 md:h-80 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute bottom-4 left-4 flex gap-2 text-xs">
                  <span className="bg-[#0C226B]/70 px-3 py-1 rounded-full text-white border border-white/20">
                    {project.year}
                  </span>
                  <span className="bg-[#0C226B]/70 px-3 py-1 rounded-full text-white border border-white/20">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <ul className="space-y-2 text-sm text-gray-200 mb-4">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>Location: {project.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-orange-500" />
                    <span>Total Area: {project.area}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Duration: {project.duration}</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-sm text-orange-500 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 text-sm font-semibold transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
