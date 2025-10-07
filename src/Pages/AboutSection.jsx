import React from "react";
import { Plus } from "lucide-react";
import HandShake from "../assets/handshake.jpg";
import hook from "../assets/hook.png";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden py-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col items-center justify-center text-center lg:text-left">
        {/* Header Text */}
        <div className="w-full lg:w-[85%] space-y-3">
          <p className="text-sm font-medium text-orange-500 tracking-wide">
            — Who We Are
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-blue-900">
            <span className="text-orange-500">Crafting Excellence</span> <br />
            in Every Project
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Learn More Button */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2 shadow hover:bg-orange-600 transition">
            Learn More
          </button>
          <div className="bg-blue-900 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold">
            <Plus size={18} />
          </div>
        </div>

        {/* Lower Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
          {/* Left Image with Overlay */}
          <div className="relative w-full sm:w-[380px] md:w-[480px] lg:w-[500px] h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={HandShake}
              alt="Business handshake"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-orange-500 text-white font-semibold text-sm px-3 py-1 rounded-md shadow">
              25+ Years of Experience
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-blue-900 text-white rounded-2xl p-6 w-full sm:w-[380px] md:w-[480px] lg:w-[500px] h-[220px] sm:h-[260px] md:h-[300px] flex flex-col justify-between">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <div className="flex items-center justify-between mt-4">
              <p className="text-orange-400 font-semibold text-sm sm:text-base">
                Our Mission
              </p>
              <div className="bg-orange-500 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold">
                <Plus size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hanging Hook */}
      <img
        src={hook}
        alt="Crane Hook"
        className="absolute top-4 right-4 sm:top-6 sm:right-10 w-10 sm:w-14 md:w-16 h-auto object-contain"
      />
    </section>
  );
}
