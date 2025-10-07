import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import Logo from "../assets/kklogo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ===== Scroll handler =====
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top bar after scrolling 50px
      if (currentScrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full bg-white  transition-transform duration-500  fixed top-0 left-0 z-50   ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ===== Top Contact Bar ===== */}
      {showTopBar && (
        <div className="hidden md:flex justify-between items-center px-6  text-sm text-gray-600 relative transition-all duration-500">
          {/* Center contact info */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 pt-2 ">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span>(408) 555-0120</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              <span>example@gmail.com</span>
            </div>
          </div>

          {/* Right social icons */}
          <div className="flex items-center gap-3 ml-auto mt-3 text-gray-600">
            <Facebook
              size={16}
              className="cursor-pointer hover:text-orange-500"
            />
            <Twitter
              size={16}
              className="cursor-pointer hover:text-orange-500"
            />
            <Linkedin
              size={16}
              className="cursor-pointer hover:text-orange-500"
            />
            <Instagram
              size={16}
              className="cursor-pointer hover:text-orange-500"
            />
          </div>
        </div>
      )}

      {/* ===== Main Navbar ===== */}
      <nav className="flex justify-between items-center px-6 py-4 relative mt-2 h-15 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="KK Construction"
            className="h-20 w-20 relative left-16 bottom-3 object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-orange-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-500">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
          Get A Quote
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            Services
          </Link>
          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            Blog
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-orange-500"
          >
            Contact Us
          </Link>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition mt-2">
            Get A Quote
          </button>
        </div>
      )}
    </header>
  );
}
