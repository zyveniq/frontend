import React from "react";
import ScrollToTop from "../ScrollToTop";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-[#023047]">

      <ScrollToTop />

      {/* HERO SECTION */}
      <section className="relative h-[450px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
          alt="fashion"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <p className="uppercase tracking-[0.35em] text-gray-300 text-xs">
            Get In Touch
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl text-white font-serif">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl leading-8">
            We'd love to hear from you. Whether it's a question,
            feedback, collaboration, or support — we're here for you.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#2d2d2d]">
              Send Us a Message
            </h2>

            <p className="mt-5 text-gray-500 leading-8">
              Fill out the form below and we'll get back to you soon.
            </p>

            {/* FORM (SAFE STATIC) */}
            <form className="mt-12 space-y-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-[#023047]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-[#023047]"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full border border-gray-300 px-5 py-4 outline-none resize-none focus:border-[#023047]"
              />

              <button
                type="button"
                className="bg-[#023047] text-white px-10 py-4 uppercase tracking-[0.2em] hover:bg-black transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <p className="uppercase tracking-[0.55em] text-[#D4AF37] text-md font-bold">
              Zyveniq
            </p>

            <h3 className="mt-5 text-5xl font-bold leading-tight text-[#023047]">
              Fashion.
              <br />
              Culture.
              <br />
              Technology.
            </h3>

            <p className="mt-8 text-gray-600 leading-8">
              We are building a premium fashion-tech ecosystem
              focused on intelligent commerce, creator culture,
              and immersive digital experiences.
            </p>

            {/* INFO */}
            <div className="mt-12 space-y-8">

              <div>
                <p className="uppercase tracking-[0.3em] text-[#caa25d] text-xs mb-3">
                  Email
                </p>
                <a href="mailto:support@zyveniq.com" className="text-xl font-semibold">
                  support@zyveniq.com
                </a>
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-[#caa25d] text-xs mb-3">
                  Location
                </p>
                <p className="text-lg text-gray-700">
                  Assam, India
                </p>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="mt-14 flex gap-5">

              <a
                href="https://instagram.com"
                className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#023047] hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://linkedin.com"
                className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#023047] hover:text-white transition"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://wa.me/9365005324"
                className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#023047] hover:text-white transition"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}