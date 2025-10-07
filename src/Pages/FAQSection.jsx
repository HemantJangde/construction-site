import { useState } from "react";
import { Plus, Minus, MessageSquare, Phone } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What services does your company provide?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Are there any hidden costs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt.",
    },
    {
      question: "How is the project cost determined?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How can I track the progress of my project?",
      answer:
        "We provide regular updates and client access to project management tools to track progress in real-time.",
    },
    {
      question: "Do you provide free consultations or quotes?",
      answer:
        "Yes, we offer free initial consultations and quotes to help you plan your project efficiently.",
    },
    {
      question: "What types of projects do you specialize in?",
      answer:
        "We specialize in commercial, residential, and industrial construction with a focus on innovative designs.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-[#0C226B]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 items-start">
        {/* Left: FAQ Accordion */}
        <div className="md:col-span-2">
          <p className="text-orange-500 font-medium mb-2">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Question? <span className="text-orange-500">Look here.</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl p-5 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#0C226B] text-white"
                    : "bg-white text-[#0C226B] shadow-sm"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left font-semibold text-lg"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-orange-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-orange-500" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-sm text-gray-200 md:text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#0C226B] text-white p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl">You have different questions?</h3>
            </div>
            <p className="text-sm mb-6 opacity-80">
              Our team will answer all your questions. We ensure a quick
              response.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium">
              Contact Us
            </button>
          </div>

          <div className="bg-white shadow-md p-6 rounded-2xl text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-orange-500 mb-3" />
              <p className="text-sm text-gray-500">Your Comfort, Our Priority</p>
              <h3 className="font-bold text-2xl text-[#0C226B]">24/7 Service</h3>
              <p className="text-gray-500 text-sm">(0001) 000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
