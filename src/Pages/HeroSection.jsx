import React from "react";
import { PlayCircle } from "lucide-react";
import TeamImage from "../assets/team.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center overflow-hidden py-16 px-4 sm:px-8 lg:px-16">
      {/* Blue Background Block */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#0a2253]" />

      {/* Orange Accent Shape */}
      <div className="absolute bottom-1/3 left-[8%] text-orange-500 text-4xl sm:text-5xl">
        <span>✦</span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 font-medium mb-2">
            — Award-Winning Construction Excellence
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Where <span className="text-[#102c6f]">Innovation</span> Drives <br />
            <span className="text-[#ff6726]">Structural Perfection</span>
          </h1>

          {/* Service Tags + Description */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {[
                "General Construction Services",
                "Concrete Work",
                "Design and Planning",
                "Civil Works",
                "Pre-Construction",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Image + Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Left - Image */}
          <div className="relative w-full md:w-2/3">
            <img
              src={TeamImage}
              alt="Construction Team"
              className="rounded-2xl w-full h-64 sm:h-80 md:h-[420px] object-cover shadow-xl"
            />
          </div>

          {/* Right - Stats Box */}
          <div className="bg-[#ff6726] text-white p-6 sm:p-8 rounded-2xl shadow-lg w-full md:w-1/3 space-y-4 md:-mt-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold">640+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold">25+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Years of Experience
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold">450+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wide">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
