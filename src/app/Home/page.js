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
        <div className="absolute inset-0 z-0">
          <Image
            src="/logoholo.jpg"
            alt="Festival Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-radial from-[#E63946]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10"></div>
        
        <div className={`container mx-auto px-4 z-20 text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-8xl font-bold mb-4 text-[#E63946]">കപ്പോയേറ</h1>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E63946]"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-gray-800">
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
            The Zamorin&apos;s Guruvayurappan College in Kozhikode stands as one of Kerala&apos;s most venerable educational institutions, dedicated to delivering quality education since 1877. Originating as Kerala Vidyashala, a noble endeavor aimed at educating the ruling family&apos;s members, the institution has evolved significantly over the past 140 years. Today, it offers a comprehensive range of academic programs, including 12 undergraduate and 9 postgraduate courses, alongside 7 research centers. This growth has enabled the college to educate tens of thousands of students, reinforcing its legacy as a cornerstone of academic excellence in the region.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl  border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <Calendar className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event Dates</h3>
                <p className="text-gray-700">March 15-20, 2025</p>
                <p className="text-gray-700">9:00 AM - 8:00 PM</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <MapPin className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-gray-700">University Arts Center</p>
                <p className="text-gray-700">Main Campus, Building 4</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform">
                <div className="bg-[#E63946]/10 p-4 rounded-full inline-block mb-6">
                  <Users className="h-8 w-8 text-[#E63946]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Participants</h3>
                <p className="text-gray-700">Over 500 artists</p>
                <p className="text-gray-700">25+ colleges</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-gray-400 flex items-center gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@kappoyer2025.org
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
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

      {/* Styles for custom animations */}
      