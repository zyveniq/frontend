import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#021B2E] via-[#02263D] to-[#011826] text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* GLOW EFFECTS */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#219EBC]/10 blur-3xl rounded-full"></div>

      {/* CONTENT */}

      <div className="relative z-10 text-center max-w-4xl">

        <p className="uppercase tracking-[0.35em] text-[#FFB703] text-sm font-semibold">
          Zyveniq Experience
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05]">

          Pardon Our Dust!
          <br />

          <span className="text-[#FFB703]">
            We’re Building Something Amazing.
          </span>

        </h1>

        <p className="mt-10 text-gray-300 text-lg leading-9 max-w-2xl mx-auto">

          This experience is currently under development
          as we continue building the future of fashion,
          technology, and premium digital culture.

          <br /><br />

<h2 className="text-white/100 text-3xl md:text-3xl lg:text-7xl font-black tracking-[0.45em] uppercase mb-8">

  Coming Soon

</h2>

        </p>

        {/* BUTTONS */}

        <div className="mt-14 flex flex-wrap justify-center gap-5">

          <Link
            to="/"
            className="px-10 py-5 rounded-full bg-[#FFB703] text-[#023047] font-black hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_rgba(255,183,3,0.35)]"
          >
            Back To Home
          </Link>

          <Link
            to="/contact"
            className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </div>

  );
}