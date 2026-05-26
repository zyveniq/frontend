import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-[#f7f8fa] min-h-screen text-[#023047]">

      <ScrollToTop />


      {/* HERO SECTION */}

      <section className="bg-[#02263D] text-white pt-40 pb-28 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-sm font-semibold">
            Contact Zyveniq
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] max-w-4xl">

            Let’s Build
            <span className="text-[#FFB703]"> Something </span>
            Meaningful.

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-3xl">

            Whether you are a creator, early supporter, collaborator,
            investor, or someone who simply connects with the Zyveniq vision —
            we would love to hear from you.

          </p>

        </div>

      </section>

      {/* CONTACT CARD */}

      <section className="px-6 -mt-16 pb-28">

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">

          <div className="grid md:grid-cols-2">

            {/* LEFT */}

            <div className="bg-gradient-to-br from-[#023047] to-[#011826] p-12 text-white">

              <p className="uppercase tracking-[0.35em] text-[#FFB703] text-xs font-semibold">
                Reach Us
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight">
                Contact Information
              </h2>

              <p className="mt-6 text-gray-300 leading-8">

                Zyveniq is currently in its early growth phase.
                For all enquiries, collaborations, partnerships,
                and support related questions, connect with us directly.

              </p>

              <div className="mt-12 space-y-8">

                <div>
                  <p className="text-[#FFB703] text-sm uppercase tracking-[0.25em]">
                    Email
                  </p>

                  <a
                    href="mailto:support@zyveniq.com"
                    className="mt-2 block text-2xl font-bold hover:text-[#FFB703] transition"
                  >
                    support@zyveniq.com
                  </a>
                </div>

                <div>
                  <p className="text-[#FFB703] text-sm uppercase tracking-[0.25em]">
                    Location
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Assam, India
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="p-12 flex flex-col justify-between">

              <div>

                <p className="uppercase tracking-[0.35em] text-[#219EBC] text-xs font-semibold">
                  Zyveniq
                </p>

                <h3 className="mt-5 text-4xl font-black leading-tight">
                  Fashion.
                  <br />
                  Culture.
                  <br />
                  Technology.
                </h3>

                <p className="mt-8 text-gray-600 leading-8">

                  We are building a premium fashion-tech ecosystem
                  focused on intelligent commerce, modern identity,
                  creator culture, and immersive digital experiences.

                </p>

              </div>

              {/* SOCIALS */}

              <div className="mt-12 flex items-center gap-5">

                <a
                  href="https://www.instagram.com/zyveniq__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#f4f7fb] flex items-center justify-center hover:bg-[#023047] hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/company/zyveniq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#f4f7fb] flex items-center justify-center hover:bg-[#023047] hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="https://wa.me/9365005324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#f4f7fb] flex items-center justify-center hover:bg-[#023047] hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp size={22} />
                </a>

                

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BOTTOM CTA */}

      <section className="pb-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-xs font-semibold">
            Zyveniq
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black text-[#023047] leading-[1.05]">

            The Future Of Fashion
            <span className="text-[#FFB703]"> Starts Here.</span>

          </h2>

          <Link
            to="/"
            className="inline-flex items-center justify-center mt-10 px-10 py-5 rounded-full bg-[#023047] text-white font-bold hover:bg-[#011826] transition-all duration-300"
          >
            Back To Home
          </Link>

        </div>

      </section>

    </div>
  );
}