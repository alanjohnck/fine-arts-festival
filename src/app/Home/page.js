import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Gallery from "../components/gallery";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Festival Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 z-10"></div>

        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#E63946]">കപ്പോയേറ</h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-gray-800">FINE ARTS FESTIVAL 2024-25</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            A celebration of creativity, culture, and artistic expression
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/gallery"
              className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About the Festival</h2>
            <p className="text-lg text-gray-700 mb-8">
              The &quot;കപ്പോയേറ&quot; Fine Arts Festival is an annual celebration organized by the HALLA BOL STUDENTS UNION,
              showcasing the incredible artistic talents of students across various disciplines. From traditional art
              forms to contemporary expressions, the festival provides a platform for creative minds to shine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Calendar className="h-10 w-10 text-[#E63946] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Event Dates</h3>
                <p className="text-gray-700">March 15-20, 2025</p>
                <p className="text-gray-700">9:00 AM - 8:00 PM</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MapPin className="h-10 w-10 text-[#E63946] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-700">University Arts Center</p>
                <p className="text-gray-700">Main Campus, Building 4</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="h-10 w-10 text-[#E63946] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Participants</h3>
                <p className="text-gray-700">Over 500 artists</p>
                <p className="text-gray-700">25+ colleges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Arts Gallery</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Explore the stunning artwork from previous festivals and get inspired by the creativity on display.
          </p>

          <Gallery />

          <div className="text-center mt-12">
            <Link
              href="#"
              className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
            >
              View All Artwork <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Event Schedule</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Plan your visit with our comprehensive schedule of performances, exhibitions, and workshops.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                day: "Day 1",
                date: "March 15, 2025",
                events: [
                  { time: "9:00 AM", title: "Opening Ceremony", location: "Main Auditorium" },
                  { time: "11:00 AM", title: "Painting Competition", location: "Exhibition Hall A" },
                  { time: "2:00 PM", title: "Classical Dance Performance", location: "Open Stage" },
                  { time: "5:00 PM", title: "Photography Workshop", location: "Seminar Room 2" },
                ],
              },
              {
                day: "Day 2",
                date: "March 16, 2025",
                events: [
                  { time: "10:00 AM", title: "Sculpture Exhibition", location: "Gallery B" },
                  { time: "1:00 PM", title: "Folk Music Competition", location: "Music Hall" },
                  { time: "4:00 PM", title: "Poetry Recitation", location: "Literary Corner" },
                  { time: "7:00 PM", title: "Theater Performance", location: "Drama Stage" },
                ],
              },
            ].map((day, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-primary">{day.day}</h3>
                  <span className="text-gray-600">{day.date}</span>
                </div>
                <div className="space-y-4">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="flex border-l-2 border-primary pl-4 py-2">
                      <div className="w-24 font-medium text-gray-700">{event.time}</div>
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="px-8 py-3 bg-primary text-white rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors mx-auto inline-flex"
            >
              Download Full Schedule <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">കപ്പോയേറ</h3>
              <p className="text-gray-400">
                FINE ARTS FESTIVAL 2024-25
                <br />
                Organized by HALLA BOL STUDENTS UNION
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: info@kappoyer2025.org</p>
              <p className="text-gray-400">Phone: +91 98765 43210</p>
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