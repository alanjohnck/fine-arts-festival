"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  Download,
  FileText,
  Award,
  Star,
  Music
} from "lucide-react";
import Navbar from "../components/Navbar";
import Gallery from "../components/gallery";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    gallery: false,
    rules: false
  });

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "gallery", "rules"];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.75;
          
          setIsVisible(prev => ({
            ...prev,
            [section]: isInView
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex flex-col gap-5">
          <Image
            src="/bgarts.jpg"
            alt="Festival Background"
            fill
            className="object-cover opacity-[.55] md:translate-y-[3%]"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-radial from-[#E63946]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10"></div>
        
        <div className={`container mx-auto px-4 z-20 text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <div className="w-72 h-64">
              <Image
                src="/logo.png"
                alt="Festival Logo"
                fill
                className="w-32 h-64"
                priority
              />
            </div>
          </div>
          
          <h2 className="text-1xl md:text-4xl font-medium mb-8 text-gray-800">
            <span className="inline-block animate-pulse">✦</span> FINE ARTS FESTIVAL 2024-25 <span className="inline-block animate-pulse">✦</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            A celebration of creativity, culture, and artistic expression
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center mt-10">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-[#E63946] text-white rounded-full hover:bg-[#c5323f] transition-colors flex items-center gap-2 shadow-lg"
            >
              View Gallery <ArrowRight size={16} />
            </Link>
            <a
              href="/rules.pdf"
              className="px-8 py-3 border-2 border-[#E63946] text-[#E63946] rounded-full hover:bg-[#E63946]/10 transition-colors flex items-center gap-2"
            >
              Rules & Guidelines <FileText size={16} />
            </a>
          </div>
        </div>
        
        {/* Floating animated elements */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full bg-[#E63946]/20 animate-float1 z-5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#E63946]/30 animate-float2 z-5"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full bg-[#1D3557]/20 animate-float3 z-5"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E63946]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1D3557]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1D3557]">About the Festival</h2>
              <div className="w-20 h-1 bg-[#E63946]"></div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The &quot;കപ്പോയേറ&quot; Fine Arts Festival is an annual celebration organized by the HALLA BOL STUDENTS UNION,
              showcasing the incredible artistic talents of students across various disciplines. From traditional art
              forms to contemporary expressions, the festival provides a platform for creative minds to shine and connect.
            </p>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              The Zamorin&apos;s Guruvayurappan College in Kozhikode stands as one of Kerala&apos;s most venerable educational institutions, dedicated to delivering quality education since 1877. Originating as Kerala Vidyashala, a noble endeavor aimed at educating the ruling family&apos;s members, the institution has evolved significantly over the past 140 years. Today, it offers a comprehensive range of academic programs, including 12 undergraduate and 9 postgraduate courses, alongside 7 research centers. This growth has enabled the college to educate tens of thousands of students, reinforcing its legacy as a cornerstone of academic excellence in the region.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <Calendar className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Dates</h3>
                <p className="text-gray-700">March 12-13, 2025</p>
                <p className="text-gray-700">9:00 AM - 5:00 PM</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <MapPin className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-gray-700">Zamorin&apos;s Guruvayurappan College</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <Users className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Participants</h3>
                <p className="text-gray-700">11 Departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1D3557]">Festival Highlights</h2>
            <div className="w-20 h-1 bg-[#E63946] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">Experience the diverse range of artistic expressions and events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-[#457B9D]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-[#457B9D]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitions</h3>
              <p className="text-gray-700">Over 20 different categories including painting, sculpture, photography and digital art</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-[#457B9D]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-[#457B9D]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exhibitions</h3>
              <p className="text-gray-700">Featured galleries showcasing outstanding student and faculty artworks</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-[#457B9D]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Music className="h-8 w-8 text-[#457B9D]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performances</h3>
              <p className="text-gray-700">Live music, dance, and theatrical performances throughout the festival</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-[#457B9D]/10 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-[#457B9D]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Workshops</h3>
              <p className="text-gray-700">Interactive sessions led by renowned artists and industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div>
              <h3 className="text-2xl font-bold mb-4">കപ്പോയേറ</h3>
              <p className="text-gray-400">
                FINE ARTS FESTIVAL 2024-25
                <br />
                Organized by HALLA BOL STUDENTS UNION
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              
              <p className="text-gray-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 95623 27739 
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} കപ്പോയേറ Fine Arts Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}