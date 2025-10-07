import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Youtube } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-20 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Have a Project Idea?{" "}
            <span className="text-orange-500">Let's Talk!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Contact Form */}
          <form className="md:col-span-2 bg-white rounded-2xl shadow-md p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">First Name *</label>
                <input
                  type="text"
                  placeholder="Ex. John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Last Name *</label>
                <input
                  type="text"
                  placeholder="Ex. Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number *</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Subject </label>
              <input
                type="text"
                placeholder="Enter subject here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Your Message *</label>
              <textarea
                placeholder="Enter here..."
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info Card */}
          <div className="bg-[#0C226B] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-300">
                  2464 Royal Ln. Mesa, <br /> New Jersey 45463
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-300 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" /> (+000) 000-0000
                </p>
                <p className="text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" /> example@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Open Time</h3>
                <p className="text-gray-300">Monday - Friday : 10:00 - 20:00</p>
                <p className="text-gray-300">Saturday - Sunday : 11:00 - 18:00</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Youtube].map((Icon, i) => (
                  <div
                    key={i}
                    className="bg-orange-500 hover:bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
