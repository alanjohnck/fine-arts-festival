import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const scheduleData = [
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
  {
    day: "Day 3",
    date: "March 17, 2025",
    events: [
      { time: "9:30 AM", title: "Malayalam Singing", location: "Music Hall" },
      { time: "11:00 AM", title: "Traditional Games", location: "Outdoor Arena" },
      { time: "1:00 PM", title: "Debate Competition", location: "Seminar Room 1" },
      { time: "3:00 PM", title: "Acting & Poetry Reading", location: "Drama Studio" },
    ],
  },
  {
    day: "Day 4",
    date: "March 18, 2025",
    events: [
      { time: "9:30 AM", title: "Indian Classical Music", location: "Auditorium" },
      { time: "12:30 PM", title: "Artistic Showcase", location: "Gallery C" },
      { time: "2:00 PM", title: "Carnatic/Hindustani Music", location: "Music Hall" },
    ],
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Event Schedule</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Plan your visit with our comprehensive schedule of performances, exhibitions, and workshops.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#E63946]">{day.day}</h3>
                <span className="text-[gray-600] font-bold">{day.date}</span>
              </div>
              <div className="space-y-4">
                {day.events.map((event, idx) => (
                  <div key={idx} className="flex border-l-2 border-[#E63946] pl-4 py-2">
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
  );
};

export default Schedule;
