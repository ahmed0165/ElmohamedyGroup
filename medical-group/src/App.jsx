/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  Shield,
  Stethoscope,
  Globe,
  Users,
  Check,
  Send,
  MapPin,
  PhoneCall,
  Mail,
} from "lucide-react";
import AnimatedCounter from "./component/AnimatedCounter";
import ContactForm from "./component/ContactForm";
import Section from "./component/Section";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-blue-600 shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-8">
          <img
            src="/logo.png"
            className="w-[60px] h-[60px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            alt="logo"
          />
          <div className="space-x-6 text-xl">
            <a
              href="#about"
              className="text-white hover:text-blue-200 transition-colors"
            >
              About
            </a>

            <a
              href="#vision"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Vision
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8">
        <div className="absolute inset-0 bg-blue-600 opacity-20 pattern-diagonal" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Your Health, Our Mission
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up">
            Transforming healthcare through innovative medical solutions
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <Section
        id="about"
        title="Who We Are"
        subtitle="Leading Healthcare Innovation"
        bgColor="bg-white"
        textColor="text-blue-600"
        icon={Stethoscope}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Legacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Founded by Dr. Mohammady Shahin with over 40 years of expertise in
              medical product manufacturing.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Our Leadership
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Led by industry veterans with extensive experience in global
              healthcare companies.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section
        id="vision"
        title="Our Vision"
        subtitle="At Our Co., we envision a future where high-quality, affordable medical and hygienic products are accessible to everyone. Working hand in hand with our partners, we are committed to providing safe, innovative solutions for children, women, and adults. Through collaboration, advanced manufacturing, and strict quality standards, we strive to enhance well-being and build a healthier community across the Egyptian market."
        bgColor="bg-gray-50"
        textColor="text-blue-600"
        icon={Shield}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Patient Care",
              desc: "Personalized medical solutions",
            },
            {
              icon: Globe,
              title: "Global Standards",
              desc: "International quality benchmarks",
            },
            {
              icon: Stethoscope,
              title: "Medical Innovation",
              desc: "Cutting-edge healthcare technologies",
            },
          ].map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <Icon className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Let's Connect"
        bgColor="bg-gray-50"
        textColor="text-blue-600"
        icon={Send}
      >
        <div className=" items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 hover:bg-white p-4 rounded-lg transition-colors">
              <MapPin className="text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold text-blue-700">Address</h3>
                <p className="text-gray-600">Cairo, Egypt</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover:bg-white p-4 rounded-lg transition-colors">
              <PhoneCall className="text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold text-blue-700">Phone</h3>
                <p className="text-gray-600">+201102117923 | +201102117934</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover:bg-white p-4 rounded-lg transition-colors">
              <Mail className="text-blue-600" size={32} />
              <div>
                <h3 className="font-semibold text-blue-700">Email</h3>
                <p className="text-gray-600">contact@medicalgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-8 text-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="hover:text-blue-200">
                  About Us
                </a>
                <a href="#services" className="hover:text-blue-200">
                  Services
                </a>
                <a href="#vision" className="hover:text-blue-200">
                  Vision
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="hover:text-blue-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-blue-500 pt-4">
            <p>&copy; 2025 Medical Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
