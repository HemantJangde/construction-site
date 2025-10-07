// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import AboutSection from "./Pages/AboutSection";
import BlogSection from "./Pages/BlogSection";
import ContactUs from "./Pages/ContactUs";
import ServicesSection from "./Pages/ServicesSection";
import FAQSection from "./Pages/FAQSection";
import TeamSection from "./Pages/TeamSection";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="services" element={<ServicesSection />} />
          <Route path="blog" element={<BlogSection />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="team" element={<TeamSection />} />
          <Route path="faq" element={<FAQSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
