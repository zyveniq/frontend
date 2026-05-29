import React, { useState } from "react";
import ScrollToTop from "../ScrollToTop";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      "https://backend-7a2m.onrender.com/api/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed");
    }

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");

  } catch (error) {
    alert("Unable to send message");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="bg-[#FCFBF8] min-h-screen text-[#023047]">

      <ScrollToTop />

      {/* ================= HERO ================= */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=90&w=2400&auto=format&fit=crop"
          alt="fashion"
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <p className="uppercase tracking-[0.45em] text-[#FFB703] text-xs font-bold">
            CONTACT
          </p>

          <h1 className="mt-5 text-6xl md:text-8xl text-white font-serif leading-none">
            Let's Connect.
          </h1>

          <p className="mt-7 text-white/100 max-w-xl leading-8 text-lg">
            Questions, collaborations, partnerships or feedback.
          </p>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto relative">

          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-[#E9E3D8]" />

          <div className="grid lg:grid-cols-2 gap-20">

            {/* ================= LEFT ================= */}

            <div
              className="
              bg-white
              rounded-[28px]
              p-8 md:p-12
              border border-[#ECE7DD]
              shadow-[0_10px_35px_rgba(0,0,0,0.04)]
            "
            >

              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-xs font-bold">
                SEND A MESSAGE
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#023047]">
                We'd Love To Hear From You
              </h2>

              <p className="mt-5 text-black-500 leading-8">
                Share your thoughts, ideas or questions and we'll get back to you.
              </p>

              <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-5"
>

                <input
                  type="text"
                  placeholder="Your Name"
                   value={name}
  onChange={(e) => setName(e.target.value)}
                  className="
                  w-full
                  h-[64px]
                  px-6
                  rounded-2xl
                  border
                  border-[#E6DED2]
                  outline-none
                  bg-white
                  focus:border-[#023047]
                "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                    value={email}
  onChange={(e) => setEmail(e.target.value)}
                  className="
                  w-full
                  h-[64px]
                  px-6
                  rounded-2xl
                  border
                  border-[#E6DED2]
                  outline-none
                  bg-white
                  focus:border-[#023047]
                "
                />

                <textarea
                  rows={7}
                  placeholder="Write your message..."
                    value={message}
  onChange={(e) => setMessage(e.target.value)}
                  className="
                  w-full
                  px-6
                  py-5
                  rounded-2xl
                  border
                  border-[#E6DED2]
                  outline-none
                  resize-none
                  bg-white
                  focus:border-[#023047]
                "
                />

                <button
                  type="submit"
                  className="
                  px-10
                  py-4
                  rounded-full
                  bg-[#023047]
                  text-white
                  uppercase
                  tracking-[0.18em]
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-[0_12px_35px_rgba(2,48,71,0.25)]
                "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="relative flex flex-col justify-center">

              <div
                className="
                absolute
                top-10
                right-0
                w-[260px]
                h-[260px]
                bg-[#FFB703]/10
                blur-[100px]
                rounded-full
              "
              />

              <div className="relative z-10">

                <p className="uppercase tracking-[0.5em] text-[#D4AF37] text-xs font-bold">
                  ZYVENIQ
                </p>

                <h3 className="mt-5 text-5xl md:text-6xl font-black leading-[0.95] text-[#023047]">
                  Fashion.
                  <br />
                  Culture.
                  <br />
                  Technology.
                </h3>

                <p className="mt-8 text-black-600 text-lg leading-8 max-w-md">
                  Inspired by culture.
                  <br />
                  Built for modern expression.
                </p>

                <div className="mt-14 space-y-8">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-3">
                      Email
                    </p>

                    <a
                      href="mailto:support@zyveniq.com"
                      className="text-2xl font-semibold text-[#023047]"
                    >
                      support@zyveniq.com
                    </a>

                  </div>

                  <div>

                    <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs mb-3">
                      Location
                    </p>

                    <p className="text-xl text-gray-700">
                      Assam, India
                    </p>

                  </div>

                </div>

                <div className="mt-12 flex gap-4">

                  <a
                    href="https://instagram.com"
                    className="
                    w-16 h-16
                    rounded-full
                    border border-[#E6DED2]
                    flex items-center justify-center
                    hover:bg-[#023047]
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                  >
                    <FaInstagram size={22} />
                  </a>

                  <a
                    href="https://linkedin.com"
                    className="
                    w-16 h-16
                    rounded-full
                    border border-[#E6DED2]
                    flex items-center justify-center
                    hover:bg-[#023047]
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                  >
                    <FaLinkedinIn size={22} />
                  </a>

                  <a
                    href="https://wa.me/9365005324"
                    className="
                    w-16 h-16
                    rounded-full
                    border border-[#E6DED2]
                    flex items-center justify-center
                    hover:bg-[#023047]
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                  >
                    <FaWhatsapp size={22} />
                  </a>

                                    <a
                    href="https://www.facebook.com/profile.php?id=61589999957861&rdid=5fKVvWF7iWbTp8gY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DAhhCSzWh%2F#"
                    className="
                    w-16 h-16
                    rounded-full
                    border border-[#E6DED2]
                    flex items-center justify-center
                    hover:bg-[#023047]
                    hover:text-white
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                  >
                    <FaFacebook size={22} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}