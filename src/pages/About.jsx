import React from "react";
import logo from "../assets/logo.png";



export default function About() {
  return (

    <div className="bg-[#f5f5f3] text-[#0b2341]">

      {/* HERO STRIP */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071a33] via-[#0b2341] to-[#102d53] pt-36 pb-32 px-6 text-white">
        
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[12px] text-[#f4b400] text-xl mb-6">
            Wear The Moment
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Fashion Built <br />
            For The <span className="text-[#f4b400]">Future.</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-8">
            Zyveniq is not just another clothing label. We are building
            a premium fashion-tech ecosystem combining intelligent styling,
            hyperlocal experiences, AI-driven personalization, and modern culture.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="relative py-28 px-6 overflow-hidden">

        <div className="absolute -left-20 top-20 w-72 h-72 bg-[#f4b400]/5 rounded-full blur-3xl"></div>

        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#0b2341]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[6px] text-[#f4b400] text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              More Than <br /> A Fashion Brand
            </h2>

            <div className="space-y-6 text-gray-600 leading-8 text-lg">
              <p>
                Zyveniq was born from a simple observation —
                fashion shopping still feels outdated, disconnected,
                and generic.
              </p>

              <p>
                Most brands only sell products. We want to build
                experiences. From AI styling systems to intelligent
                recommendations and fast commerce infrastructure,
                Zyveniq is designed for the next generation of digital fashion.
              </p>

              <p>
                We blend premium aesthetics with technology to create
                something larger than apparel — a scalable ecosystem
                around identity, creativity, and culture.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#f4b400]/10 blur-3xl rounded-full scale-75"></div>
            <div
              className="
                bg-white/80
                backdrop-blur-xl
                border border-white/40
                rounded-[40px]
                p-10
                shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                transition-all
                duration-500
               "
            >
                <img
                src={logo}
                alt="Zyveniq"
                className="w-44 mx-auto mb-8 transition-all duration-500 hover:scale-105"
              />

              <div className="mb-6 text-center">
                <p className="uppercase tracking-[4px] text-xs text-gray-400">
                  Ecosystem Status
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b pb-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <span className="font-semibold transition-colors duration-300 hover:text-[#f4b400]">
                    AI Styling
                  </span>

                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4b400]/10 text-[#f4b400] text-sm font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse"></span>
                    Live
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <span className="font-semibold transition-colors duration-300 hover:text-[#f4b400]">
                    Smart Fashion
                  </span>

                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4b400]/10 text-[#f4b400] text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse"></span>
                  In Progress
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <span className="font-semibold transition-colors duration-300 hover:text-[#f4b400]">
                    Creator Ecosystem
                  </span>

                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4b400]/10 text-[#f4b400] text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse"></span>
                    Expanding
                  </span>
                </div>

                <div className="flex justify-between items-center border-b pb-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <span className="font-semibold transition-colors duration-300 hover:text-[#f4b400]">
                    Hyperlocal Commerce
                  </span>

                  <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4b400]/10 text-[#f4b400] text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#f4b400] animate-pulse"></span>
                    Scaling
                    </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="border-l-4 border-[#f4b400] pl-6">
            <h3 className="text-3xl font-black mb-5">
              Culture Meets Technology
            </h3>

            <p className="text-gray-600 leading-8">
              We believe fashion is evolving beyond products.
              Digital identity, personalization, AI systems,
              creators, and commerce are merging into one connected future.
            </p>
          </div>

          <div className="bg-[#0b2341] rounded-[30px] p-10 text-white">
            <p className="uppercase tracking-[5px] text-[#f4b400] text-xs mb-6">
              Our Vision
            </p>

            <h3 className="text-4xl font-black leading-tight mb-6">
              Intelligent Fashion Experiences
            </h3>

            <p className="text-gray-300 leading-8">
              Zyveniq aims to make fashion more adaptive,
              personalized, immersive, and emotionally connected.
            </p>
          </div>

          <div className="border border-gray-200 rounded-[30px] p-10 bg-[#fafafa]">
            <div className="w-24 h-24 rounded-full border-4 border-[#f4b400] mx-auto mb-8 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#f4b400] rounded-full"></div>
            </div>

            <p className="text-center text-gray-600 leading-8">
              We are creating a future where fashion platforms
              understand people better through technology,
              design intelligence, and digital experiences.
            </p>
          </div>

        </div>
      </section>

      {/* DARK STRIP */}
      <section className="bg-[#0b2341] py-28 px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[7px] text-[#f4b400] text-sm mb-6">
            The Mission
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Building The Future Of <br />
            Intelligent Commerce
          </h2>

          <p className="text-gray-300 text-lg leading-9 max-w-4xl mx-auto">
            Our mission is to merge fashion, AI, logistics,
            personalization, and premium digital experiences
            into one seamless ecosystem that transforms how people
            discover and experience fashion.
          </p>

        </div>
      </section>

      <section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    <div className="text-center">
      <h3 className="text-5xl font-black text-[#0b2341]">AI</h3>
      <p className="text-gray-500 mt-2">Powered Styling</p>
    </div>

    <div className="text-center">
      <h3 className="text-5xl font-black text-[#0b2341]">NEXT</h3>
      <p className="text-gray-500 mt-2">Future of Fashion</p>
    </div>

    <div className="text-center">
      <h3 className="text-5xl font-black text-[#0b2341]">1</h3>
      <p className="text-gray-500 mt-2">Unified Ecosystem</p>
    </div>

  </div>
</section>

      {/* DIFFERENCE SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[6px] text-[#f4b400] text-sm mb-4">
            What Makes Us Different
          </p>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-16">
            Designed Beyond Traditional Ecommerce
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-3xl font-black mb-4">
                  AI Fashion Intelligence
                </h3>

                <p className="text-gray-600 leading-8 max-w-2xl">
                  Recommendation systems designed to understand
                  personal style, compatibility, aesthetics,
                  and fashion identity.
                </p>
              </div>

              <div className="text-[#f4b400] text-6xl font-black">
                01
              </div>
            </div>

            <div className="bg-[#0b2341] text-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-3xl font-black mb-4">
                  Hyperlocal Fashion Delivery
                </h3>

                <p className="text-gray-300 leading-8 max-w-2xl">
                  Fast premium delivery systems designed to
                  create frictionless shopping experiences
                  in modern urban markets.
                </p>
              </div>

              <div className="text-[#f4b400] text-6xl font-black">
                02
              </div>
            </div>

           <div className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h3 className="text-3xl font-black mb-4">
                  Creator & Community Ecosystem
                </h3>

                <p className="text-gray-600 leading-8 max-w-2xl">
                  Zyveniq is building a platform where creators,
                  culture, technology, and fashion communities
                  grow together.
                </p>
              </div>

              <div className="text-[#f4b400] text-6xl font-black">
                03
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="bg-white py-20 md:py-24 px-6 border-t">
        <div className="max-w-5xl mx-auto text-center -mt-8">

          <p className="uppercase tracking-[7px] text-[#f4b400] text-xl mb-6">
            Zyveniq
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Fashion Is Evolving. <br />
            We’re Building <span className="text-[#f4b400]">What Comes Next.</span>
          </h2>

          <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto">
            Merging fashion, technology, and culture into a new digital experience.
          </p>

        </div>
      </section>

    </div>

  );

}