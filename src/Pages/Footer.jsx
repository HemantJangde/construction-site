import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import logo from '../assets/kklogo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-[#0C226B] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-white/20 pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Let’s <span className="text-orange-500">Connect</span> there
          </h2>
          <button className="mt-6 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium">
            Contact Us
          </button>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} className="bg-orange-500 w-8 h-8 rounded-full"></img>
              <h3 className="font-bold text-2xl">KK construction<span className="text-orange-500">.</span></h3>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} className="bg-white/10 hover:bg-orange-500 transition p-2 rounded-full">
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>(000) 000-0000</li>
              <li>example@gmail.com</li>
              <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get the latest information</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full bg-white/10 text-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none"
              />
              <button className="absolute right-1 top-1 bg-orange-500 hover:bg-orange-600 p-2 rounded-full">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        
      </div>
      <div className="flex flex-col md:flex-row px-10 justify-between items-center text-sm bg-orange-600 w-full text py-6">
          <p>Copyright © 2025 Conztru. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#">User Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
    </footer>
  );
}
