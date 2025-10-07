import { Mail } from "lucide-react";

import jcb from '../assets/jcb.png'
import hook from '../assets/hook.png'  
export default function NewsletterSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Decorative Crane Hook */}
      <img
        src={hook}
        alt="Crane Hook image"
        className="absolute left-10 top-0 w-16 md:w-24 object-contain"
      />

      {/* Decorative Excavator */}
      <img
        src={jcb}
        alt="Excavator image"
        className="absolute right-0 bottom-0 w-44 md:w-72 object-contain"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
        {/* Small Title */}
        <p className="text-sm uppercase tracking-wider text-[#0C226B] mb-3">
          — Our Newsletter
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0C226B]">
          Join Our Newsletter for{" "}
          <span className="text-orange-500">Exclusive Deals & Construction Insights!</span>
        </h2>

        {/* Email Subscription Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full sm:w-auto">
            <Mail className="text-[#0C226B] w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm flex-1 w-64"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
