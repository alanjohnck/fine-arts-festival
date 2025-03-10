import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const scheduleData = [
  {
    day: "ദിവസം 1",
    date: "മാർച്ച് 23, 2025",
    events: [
      { time: "9:30 AM - 10:30 AM", title: "നാടോടി നൃത്തം (ആൺ)", location: "വാനപ്രസ്ഥം (ഓഡിറ്റോറിയം)" },
      { time: "10:30 AM - 12:00 PM", title: "സംഗീതം", location: "വാനപ്രസ്ഥം (ഓഡിറ്റോറിയം)" },
      { time: "12:00 PM - 1:30 PM", title: "നൃത്തം", location: "വാനപ്രസ്ഥം (ഓഡിറ്റോറിയം)" },
      { time: "1:30 PM - 3:30 PM", title: "നാടോടി നൃത്തം (ഗ്രൂപ്പ്)", location: "വാനപ്രസ്ഥം (ഓഡിറ്റോറിയം)" },
    

    

    ],
    
  },
  {
    day:"ദിവസം 2",
    date: "മാർച്ച് 24, 2025",
     events:[
    { time: "9:30 AM - 10:30 AM", title: "കേരളനടനം", location: "രണ്ടാമൂഴം (ചൈത്രം)" },
    { time: "10:30 AM", title: "ഉദ്ഘാടനം", location: "രണ്ടാമൂഴം (ചൈത്രം)" },
    { time: "11:30 AM - 1:00 PM", title: "ക്ലാസിക്കൽ ഡാൻസ്", location: "രണ്ടാമൂഴം (ചൈത്രം)" },
    { time: "1:00 PM - 2:30 PM", title: "നൃത്തം", location: "രണ്ടാമൂഴം (ചൈത്രം)" },
    { time: "2:30 PM - 4:30 PM", title: "ഭരതനാട്യം", location: "രണ്ടാമൂഴം (ചൈത്രം)" },
     ]
  },
  {
    day:"ദിവസം 3",
    date: "മാർച്ച് 25, 2025",
     events:[
        { time: "9:30 AM - 11:00 AM", title: "മോണോ ആക്ട്", location: "മഞ്ഞ് (എസ്.കെ പൊറ്റക്കാട് സ്ക്വയർ)" },
        { time: "11:00 AM - 1:00 PM", title: "തുകൽ വാദ്യം (ചെണ്ട /ഇടയ്ക്ക / മദ്ദളം / തബല / പക്കവാദ്യം /മൃദംഗം / ഗഞ്ചിറ /ഘടം / തകിൽ)", location: "മഞ്ഞ് (എസ്.കെ പൊറ്റക്കാട് സ്ക്വയർ)" },
        { time: "1:00 PM - 2:00 PM", title: "മോഹിനിയാട്ടം", location: "മഞ്ഞ് (എസ്.കെ പൊറ്റക്കാട് സ്ക്വയർ)" },
        { time: "2:00 PM - 3:00 PM", title: "മാപ്പിളപ്പാട്ട് (ആൺ & പെൺ)", location: "മഞ്ഞ് (എസ്.കെ പൊറ്റക്കാട് സ്ക്വയർ)" },
        { time: "3:00 PM - 5:00 PM", title: "ദേശഭക്തിഗാനം", location: "മഞ്ഞ് (എസ്.കെ പൊറ്റക്കാട് സ്ക്വയർ)" },,
     ]
  },{
    day:"ദിവസം 4",
    date: "മാർച്ച് 26, 2025",
     events:[
        { time: "9:30 AM - 12:30 PM", title: "ലളിത ഗാനം (ആൺ& പെൺ)", location: "നാലുകെട്ട് (PG UP)" },
        { time: "12:30 PM - 2:00 PM", title: "കവിതാപാരായണം", location: "നാലുകെട്ട് (PG UP)" },
        { time: "2:00 PM - 3:00 PM", title: "ഹിന്ദുസ്‌താനി/കർണാടിക് സംഗീതം/ സെമി ക്ലാസിക്കൽ", location: "നാലുകെട്ട് (PG UP)" },
     ]
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
                    <div className="w-40 font-medium text-gray-700">{event.time}</div>
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
      </div>
    </section>
  );
};

export default Schedule;