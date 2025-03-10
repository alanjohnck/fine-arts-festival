"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function PointsTable() {
  const [pointsData, setPointsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchPointsData = async () => {
    try {
      const response = await fetch("/api/getPoints");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      console.log(data);
      setPointsData(data);
      setLastUpdated(new Date().toLocaleTimeString());
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPointsData();
    const intervalId = setInterval(fetchPointsData, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const sortedData = [...pointsData].sort((a, b) => b.points - a.points);
  const maxPoints = pointsData.length > 0 ? Math.max(...pointsData.map((p) => p.points)) : 1;

  if (loading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">
          <span className="inline-block animate-spin mr-3">⏳</span>
          Loading points data...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-gray-400 to-black px-3 py-4 sm:px-4 sm:py-6 md:p-8">
      <img
        src="/holounion.png"
        className="w-screen h-screen object-cover scale-0 opacity-15 fixed top-0 left-0 z-0"
        alt="Background logo"
      />

      <main className="mx-auto max-w-5xl relative z-10">
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <motion.h1
          className={`mb-5 mt-10 sm:mb-8 md:mb-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center bg-gradient-to-r from-red-200 via-red-400 to-red-800 text-transparent bg-clip-text drop-shadow-sm ${instrument.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Points Table
        </motion.h1>

        {lastUpdated && (
          <p className="text-sm text-gray-600 text-center mb-4">
            Last updated: {lastUpdated}
          </p>
        )}

        <motion.div
          className="bg-black/30 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden border border-white/10 divide-y divide-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="overflow-hidden col-span-full">
            {sortedData.map((participant, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                key={participant.id}
                className={`relative flex items-center p-3 sm:p-4 md:p-6 ${
                  index !== sortedData.length - 1
                    ? "border-b border-white/5"
                    : ""
                } hover:bg-white/5 transition-all duration-300 group`}
              >
                <div
                  className={`
                    flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br
                    ${
                      index === 0
                        ? "from-amber-200 to-yellow-500 text-amber-900"
                        : index === 1
                        ? "from-slate-200 to-slate-400 text-slate-800"
                        : index === 2
                        ? "from-amber-500 to-amber-700 text-amber-100"
                        : "from-slate-600 to-slate-700 text-slate-300"
                    }
                    flex items-center justify-center mr-2 sm:mr-3 md:mr-6 shadow-md`}
                >
                  <span
                    className={`text-sm sm:text-base md:text-xl font-bold ${instrument.className}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className="flex-grow z-10 min-w-0">
                  <div className="text-sm sm:text-base md:text-xl font-bold text-white mb-1 sm:mb-2 flex items-baseline flex-wrap">
                    <span className="truncate">{participant.name}</span>
                    <div
                      className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full ml-1 sm:ml-2 md:ml-3 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      style={{ backgroundColor: participant.color || "#ffffff" }}
                    />
                  </div>

                  <div className="w-full bg-white/5 rounded-full h-1.5 sm:h-2 md:h-2.5 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${participant.color || "#ffffff"}60, ${participant.color || "#ffffff"})`,
                        boxShadow: `0 0 8px ${participant.color || "#ffffff"}50`,
                      }}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(participant.points / maxPoints) * 100}%`,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1 + 0.8,
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end ml-2 sm:ml-3 md:ml-4">
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-white flex items-end shrink-0">
                    <span>{participant.points}</span>
                    <span
                      className={`${instrument.className} text-xs sm:text-sm md:text-base ml-1`}
                    >
                      pts
                    </span>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${participant.color || "#ffffff"})`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

     
    </div>
  );
}