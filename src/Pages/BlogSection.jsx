import { Calendar, ArrowRight } from "lucide-react";

import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.png'

export default function BlogSection() {
  const blogs = [
    {
      title: "How Technology is Revolutionizing Construction",
      category: "Construction Trends",
      date: "March 17, 2025",
      image: blog1,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "5 Essential Steps for a Successful Construction Project",
      category: "Project Management",
      date: "March 16, 2025",
      image: blog2,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Site Safety Tips: Ensuring a Smooth Construction Process",
      category: "Project Management",
      date: "March 15, 2025",
      image: blog3,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <section className="py-20 mt-10 bg-white text-[#0C226B]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
          <div>
            <p className="text-orange-500 font-medium mb-2">News & Blogs</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Latest <span className="text-orange-500">News & Blogs</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium mt-6 md:mt-0 hover:bg-orange-600 transition-all">
            View All Blogs <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 bg-white"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute bottom-0 left-0 bg-[#0C226B] text-white text-sm px-4 py-1 rounded-tr-xl">
                  {blog.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  {blog.date}
                </div>

                <h3 className="text-lg font-bold mb-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{blog.excerpt}</p>

                <a
                  href="#"
                  className="text-orange-500 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    