import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

import logo from "./assets/logo.png";
import fashion1 from "./assets/fashion1.jpg";
import fashion2 from "./assets/fashion2.jpg";
import fashion3 from "./assets/fashion3.jpg";
import heroVideo from "./assets/VID-20260522-WA0011.mp4";

import ethnic1 from "./assets/1.jpg";
import ethnic2 from "./assets/2.jpg";
import ethnic3 from "./assets/3.jpg";
import ethnic4 from "./assets/4.jpg";
import ethnic5 from "./assets/5.jpg";
import ethnic6 from "./assets/6.jpg";
import ethnic7 from "./assets/7.jpg";
import ethnic8 from "./assets/8.jpg";
import arjunImg from "./assets/arjun.jpg";
import snehaImg from "./assets/sneha.jpg";
import riyaImg from "./assets/riya.jpg";

import poster from "./assets/poster.jpg";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnsRefunds from "./pages/ReturnsRefunds";
import ComingSoon from "./pages/ComingSoon";


function App() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [pincode, setPincode] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  const [showPincodeModal, setShowPincodeModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);
  const [openInfo, setOpenInfo] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

     useEffect(() => {

  // Disable right click
  const disableRightClick = (e) => {
    e.preventDefault();
  };

  // Disable copy
  const disableCopy = (e) => {
    e.preventDefault();
  };

  // Disable cut
  const disableCut = (e) => {
    e.preventDefault();
  };

  // Disable paste
  const disablePaste = (e) => {
    e.preventDefault();
  };

  // Disable keyboard shortcuts
  const disableKeys = (e) => {

    // Ctrl+C
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
    }

    // Ctrl+V
    if (e.ctrlKey && e.key === "v") {
      e.preventDefault();
    }

    // Ctrl+X
    if (e.ctrlKey && e.key === "x") {
      e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }

    // F12
    if (e.key === "F12") {
      e.preventDefault();
    }

  };

  document.addEventListener(
    "contextmenu",
    disableRightClick
  );

  document.addEventListener(
    "copy",
    disableCopy
  );

  document.addEventListener(
    "cut",
    disableCut
  );

  document.addEventListener(
    "paste",
    disablePaste
  );

  document.addEventListener(
    "keydown",
    disableKeys
  );

  return () => {

    document.removeEventListener(
      "contextmenu",
      disableRightClick
    );

    document.removeEventListener(
      "copy",
      disableCopy
    );

    document.removeEventListener(
      "cut",
      disableCut
    );

    document.removeEventListener(
      "paste",
      disablePaste
    );

    document.removeEventListener(
      "keydown",
      disableKeys
    );

  };

}, []);

  const defaultTestimonials = [
    {
      name: "Arjun Mehta",
      role: "Fashion Creator",
      text: "The branding and premium fashion direction already feels different from typical clothing startups.",
      highlight: false,
      image: arjunImg,
    },
    {
      name: "Sneha Kapoor",
      role: "Early Access Member",
      text: "The website experience feels premium and modern. Excited to see the official launch collections.",
      highlight: true,
      image: snehaImg,
    },
    {
      name: "Riya Sharma",
      role: "Streetwear Enthusiast",
      text: "Finally a fashion-tech brand that feels creative, clean, and genuinely premium.",
      highlight: false,
      image: riyaImg,
    },
  ];

  const [reviews, setReviews] = useState([]);
  const allTestimonials = [
    
    ...defaultTestimonials,
    ...reviews,
  ];
  useEffect(() => {

    axios
      .get("https://backend-7a2m.onrender.com/api/reviews/")
      .then((response) => {

        const formattedReviews = response.data.map(
          (item) => ({
            name: item.name,
            role: "Verified Community Member",
            text: item.review,
            highlight: false,
          })
        );

        setReviews(formattedReviews);

      })
      .catch((error) => {
        setReviews([]);
      });

  }, []);

  const handleSubscribe = async () => {

  const validDomains = [
    "gmail.com",
  ];

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    setMessage("Enter a valid email address.");
    return;
  }

  const domain = email.split("@")[1];

  if (!validDomains.includes(domain)) {
    setMessage(
      "Please use a valid email provider."
    );
    return;
  }

    try {

      setLoading(true);
      await axios.post(
        "https://backend-7a2m.onrender.com/api/subscribe/",
        {
          email: email,
        }
      );

      setMessage(
        "You are now on the Zyveniq early access list."
      );

      setEmail("");

    } catch (error) {

      if (error.response?.data?.message?.email) {

        setMessage(
          error.response.data.message.email[0]
        );

      } else {

        setMessage(
          "Something went wrong. Please try again."
        );

      }

    } finally {

      setLoading(false);
    }
  };

  const checkAvailability = () => {

    if (!/^\d{6}$/.test(pincode)) {

      setAvailabilityMessage(
        "Please enter a valid 6-digit pincode."
      );

      return;
    }

    setAvailabilityMessage(
      "Great news! Zyveniq early access is available in your location."
    );

  };

  return (



    <div className="bg-white min-h-screen">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">

        <div className="w-full px-3 md:px-6 xl:px-8 py-3 md:py-5 flex items-center justify-between relative">

          {/* LEFT SIDE */}

          <div className="flex items-center gap-4">

            {/* MENU BUTTON */}

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >

              <div className="space-y-1">
                <div className="w-5 h-[2px] bg-current rounded"></div>
                <div className="w-5 h-[2px] bg-current rounded"></div>
                <div className="w-5 h-[2px] bg-current rounded"></div>
              </div>

            </button>

          </div>

          {/* CENTER LOGO */}

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 md:gap-4">

            {/* GOLD CIRCLE */}

            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-[#FFB703]/40 bg-[#FFF8E1] flex items-center justify-center shadow-[0_0_45px_rgba(255,183,3,0.22)]">

              <img
                src={logo}
                alt="Zyveniq Logo"
                className="w-10 md:w-16 object-contain scale-[1.7] md:scale-[2.00]"
              />

            </div>

            {/* BRAND NAME */}

            <h1 className="text-[#023047] font-black text-lg md:text-3xl tracking-[0.12em] md:tracking-[0.18em]">
              ZYVENIQ
            </h1>

          </div>

          {/* RIGHT */}

          <button
            onClick={() => {
              document
                .getElementById("waitlist")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
           className="inline-flex items-center gap-2 px-3 md:px-7 py-2 md:py-3 mr-1 md:mr-2 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFCA28] text-[#023047] font-bold border border-[#F4B400] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:shadow-[0_0_40px_rgba(255,193,7,0.7)]"
          >
            <span className="text-[#023047] text-[11px] md:text-sm font-bold tracking-wide">
              Join Waitlist
            </span>
          </button>

        </div>

      </nav>
      {/* ================= SLIDE MENU ================= */}

      <motion.div
        initial={{ x: -320 }}
        animate={{
          x: showMenu ? 0 : -320,
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 h-screen w-[300px] z-[9999] bg-white/90 backdrop-blur-2xl border-r border-gray-200 shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-8"
      >

        {/* TOP */}

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-black text-[#023047]">
            Menu
          </h2>

          <button
            onClick={() => setShowMenu(false)}
            className="w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-2xl text-black-500"
          >
            ×
          </button>

        </div>

        {/* LINKS */}

        <div className="mt-16 flex flex-col gap-8">
        <Link
          to="/"
          onClick={() => setShowMenu(false)}
          className="text-left text-2xl font-bold text-[#023047] hover:text-[#FFB703] transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setShowMenu(false)}
          className="text-left text-2xl font-bold text-[#023047] hover:text-[#FFB703] transition-all duration-300"
        >
          About Us
        </Link>

        <Link
          to="/contact"
          onClick={() => setShowMenu(false)}
          className="text-left text-2xl font-bold text-[#023047] hover:text-[#FFB703] transition-all duration-300"
        >
          Contact Us
        </Link>

          <Link
            to="/faqs"
            onClick={() => setShowMenu(false)}
            className="text-left text-2xl font-bold text-[#023047] hover:text-[#FFB703] transition-all duration-300"
          >
            FAQs
          </Link>

        </div>

      </motion.div>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm"
        />
      )}

        <Routes>

          <Route
            path="/"
            element={
              <>
      {/* ================= DELIVERY STRIP ================= */}

      <div className="mt-[72px] md:mt-[96px] w-full bg-white border-b border-gray-100">

        <div className="px-4 md:px-8 py-3 flex items-center justify-start">

          <button
            onClick={() => setShowPincodeModal(true)}
            className="flex items-center gap-1 text-[#023047] hover:opacity-80 transition"
          >

            <span className="font-bold text-[13px] md:text-[15px]">
              Enter Pincode
            </span>

            <span className="text-black/70 text-[12px] md:text-[15px]">
              - to check delivery
            </span>

          </button>

        </div>

      </div>
      
      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-screen flex items-center pt-14 md:pt-6 pb-20 overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-[#ffffff] to-[#edf5fc]" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8ECAE6]/20 blur-3xl rounded-full" />

        <div className="relative w-full px-4 md:px-10 xl:px-14">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
            {/* HERO BRANDING */}

            <div className="flex items-center gap-0 mb-4 -mt-6 md:-mt-16 ml-[-38px] md:-ml-16 w-full">

            <img
              src={logo}
              alt="Zyveniq"
              className="w-40 md:w-52 object-contain"
            />

              <div className="-ml-9 md:-ml-12">

                <h2 className="text-4xl md:text-5xl font-black text-[#023047] leading-none tracking-tight">
                  ZYVENIQ
                </h2>

                <p className="text-[#FFB703] text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] ml-1 mt-1">
                  Wear The Moment
                </p>

              </div>

            </div>
              {/* BADGE */}

              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#fff7df] to-[#ffffff] border border-[#FFD76A] shadow-[0_12px_35px_rgba(255,183,3,0.18)]"
              >

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-4 h-4 rounded-full bg-[#FFB703]/40 animate-ping"></div>

                  <div className="relative w-3 h-3 rounded-full bg-[#FFB703]"></div>

                </div>

                <span className="text-[#023047] text-sm md:text-base font-bold tracking-wide">
                  Early Access Launching Soon
                </span>

              </motion.div>
              
              {/* HEADING */}

              <h1 className="mt-8 text-5xl md:text-6xl font-black leading-[1.05] text-[#023047]">

                Fashion
                <span className="text-[#FFB703]">
                  {" "}Innovation{" "}
                </span>
                Reimagined.

              </h1>

              {/* DESCRIPTION */}

              <p className="mt-8 text-black-600 text-lg leading-8 max-w-2xl">

                Zyveniq blends luxury-inspired fashion,
                modern culture, and intelligent digital
                experiences into one premium ecosystem.

              </p>

              {/* TAGS */}

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="px-5 py-3 bg-white shadow-lg rounded-full text-[#023047] font-medium">
                  Premium Streetwear
                </div>

                <div className="px-5 py-3 bg-[#FFF5D9] rounded-full text-[#023047] font-medium">
                  AI Styling
                </div>

                <div className="px-5 py-3 bg-[#EAF6FF] rounded-full text-[#023047] font-medium">
                  Smart Fashion
                </div>

              </div>
              
              {/* EARLY ACCESS LINE */}

              <div className="mt-5 mb-3">

                <p className="text-[#023047] text-[15px] md:text-[16px] font-medium leading-7">

                  Secure your spot among the
                  <span className="text-[#FB8500] font-extrabold text-[17px]">
                    {" "}first 100 members{" "}
                  </span>
                  and unlock exclusive launch pricing before public release.

                </p>

              </div>

              {/* WAITLIST */}

              <div
                id="waitlist"
                className="mt-0 scroll-mt-40 bg-white p-5 rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-gray-100"
              >

                {/* EMAIL FORM */}

                <div className="flex flex-col md:flex-row gap-4">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="flex-1 px-6 py-5 rounded-2xl border border-gray-200 outline-none text-[#023047] placeholder:text-black-400 focus:border-[#219EBC]"
                  />

                  <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="px-8 py-5 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-[#023047] font-black hover:scale-105 transition-all duration-300 shadow-xl"
                  >

                    {loading
                      ? "Please Wait..."
                      : "Get Early Access"}

                  </button>

                </div>

                {/* EMAIL MESSAGE */}

                {message && (

                  <p className="mt-4 text-[#219EBC] font-medium">
                    {message}
                  </p>

                )}



              </div>

            </motion.div>

            {/* RIGHT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[780px] object-cover rounded-[40px]"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

              {/* FLOATING CARD */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -bottom-10 -left-10 bg-white rounded-[30px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-[320px]"
              >

                <p className="text-[#219EBC] uppercase tracking-[0.3em] text-xs font-bold">
                  Future Fashion
                </p>

                <h3 className="mt-4 text-3xl font-black text-[#023047] leading-tight">

                  Designed For Modern Culture

                </h3>

                <button
                  onClick={() => {
                    document
                      .getElementById("collections")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="mt-6 flex items-center gap-3 text-[#FB8500] font-bold hover:gap-5 transition-all duration-300"
                >
                  Explore Vision
                  <FaArrowRight />
                </button>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="py-32 bg-gradient-to-b from-[#f7fbff] via-white to-[#f9fcff] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8ECAE6]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="w-full px-4 md:px-10 xl:px-14">

          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-[#219EBC] text-sm font-semibold">
              Community Voices
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-[#023047] leading-tight">

              Loved By
              <span className="text-[#FFB703]"> Modern Fashion </span>
              Enthusiasts

            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-black-600 text-lg leading-8">

              Early users and fashion creators are already excited
              about the future Zyveniq experience.

            </p>

          </div>

          {/* REVIEW BUTTON */}

          <div className="flex justify-center mt-12">

            <button
              onClick={() => setShowReviewModal(true)}
              className="px-8 py-4 rounded-full bg-[#023047] text-white font-bold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Leave A Review
            </button>

          </div>

          {/* REVIEW GRID */}

          <div className="grid md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">

            {allTestimonials.map((review, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`rounded-[35px] p-9 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)] shadow-[0_25px_80px_rgba(0,0,0,0.08)] border ${
                  review.highlight
                    ? "bg-gradient-to-br from-[#023047] to-[#0B2942] text-white border-[#0B2942]"
                    : "bg-white text-[#023047] border-gray-100"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`w-16 h-16 overflow-hidden rounded-full flex items-center justify-center font-black text-xl ${
                      review.highlight
                        ? "bg-white/15 text-white border border-white/10"
                        : "bg-[#EAF6FF] text-[#023047]"
                    }`}
                  >
                   <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div>

                    <h3
                      className={`font-black ${
                        review.highlight
                          ? "text-white"
                          : "text-[#023047]"
                      }`}
                    >
                      {review.name}
                    </h3>

                    <p
                      className={`text-sm ${
                        review.highlight
                          ? "text-black-300"
                          : "text-black-500"
                      }`}
                    >
                      {review.role}
                    </p>

                  </div>

                </div>

                <p
                  className={`mt-6 leading-8 ${
                    review.highlight
                      ? "text-white/80"
                      : "text-black-600"
                  }`}
                >

                  “{review.text}”

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= COLLECTIONS ================= */}

      <section
        id="collections"
        className="py-26 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#219EBC] text-sm font-semibold">
              Curated Collections
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-[#023047] leading-tight">

              Premium Fashion
              <span className="text-[#FFB703]"> Experiences</span>

            </h2>

          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr_0.9fr] gap-10 mt-20 items-stretch">

            {[
              {
                image: fashion1,
                title: "Panda Essence",
                tag: "Limited Collection",
                desc: "Minimal streetwear inspired by calm modern aesthetics.",
              },

              {
                image: fashion2,
                title: "Yama Energy",
                tag: "Digital Drop",
                desc: "Bold futuristic graphics designed for expressive culture.",
              },

              {
                image: fashion3,
                title: "Kurukshetra",
                tag: "Creator Edition",
                desc: "Premium oversized silhouettes blended with artistic identity.",
              },

            ].map((item, index) => (
              <Link
                to="/coming-soon"
                key={index}
              >
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="relative rounded-[35px] overflow-hidden group cursor-pointer shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[680px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* CONTENT */}

                <div className="absolute bottom-6 left-6 z-10 pr-6">

                  <p className="text-xs tracking-[0.35em] uppercase text-white/70 font-semibold">
                    {item.tag}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/80">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
              </Link>

            ))}

          </div>

        </div>

      </section>
      {/* ================= SOUL OF ZYVENIQ ================= */}

      <section className="relative py-32 bg-gradient-to-b from-[#f8f5ef] to-white overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8ECAE6]/10 blur-3xl rounded-full"></div>


        {/* MAIN CONTENT */}

        <div className="w-full px-4 md:px-10 xl:px-14">

          {/* SECTION HEADING */}

          <div className="max-w-4xl mb-20">

            <p className="uppercase tracking-[0.35em] text-[#219EBC] text-sm font-semibold">
              The Soul Of Zyveniq
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black text-[#023047] leading-[1.05]">

              Where Heritage Meets
              <span className="text-[#FFB703]"> Modern Fashion.</span>

            </h2>

            <p className="mt-8 text-black text-lg leading-9 max-w-3xl">

              Inspired by Indian craftsmanship, artisan culture, mythology,
              embroidery traditions, and contemporary fashion expression.

            </p>

          </div>
          {/* LUXURY HORIZONTAL GALLERY */}

          <div className="relative mt-16">

            {/* SCROLL WRAPPER */}

            <div className="overflow-x-auto scrollbar-hide pb-6">

              <div className="flex gap-7 w-max px-1">

                {[
                  ethnic1,
                  ethnic2,
                  ethnic3,
                  ethnic4,
                  ethnic5,
                  ethnic6,
                  ethnic7,
                  ethnic8,
                ].map((image, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="relative group overflow-hidden rounded-[34px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white"
                  >

                    <img
                      src={image}
                      alt=""
                      className="w-[320px] h-[420px] object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= BRAND STATS SECTION ================= */}

      <section className="py-26 bg-[#06192B] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-[#8ECAE6] text-sm font-semibold">
              Building The Future
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-white leading-tight max-w-5xl mx-auto">

              A New Generation Of
              <span className="text-[#FFB703]">
                {" "}Fashion Commerce
              </span>

            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-3xl mx-auto">

              Zyveniq combines premium fashion aesthetics,
              intelligent digital experiences, scalable technology,
              and modern creator culture into one evolving ecosystem.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16 items-stretch">
            
          <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3">
            <p className="text-[#8ECAE6] text-sm tracking-[0.3em] uppercase font-semibold">
              Philosophy
            </p>
              <h3 className="text-5xl font-black text-[#FFB703]">
                CULTURE
              </h3>

              <p className="mt-5 text-white text-xl font-bold">
                Fashion Beyond Clothing
              </p>

              <p className="mt-4 text-gray-400 leading-8">
                    Zyveniq is built around identity, storytelling, creativity,
                    and modern culture — where fashion becomes an experience,
                    not just a product.
              </p>

            </div>
            <div className="relative bg-gradient-to-br from-[#0B2942] to-[#102F4A] border border-[#1D4E74] rounded-[40px] p-12 backdrop-blur-xl scale-[1.04] shadow-[0_25px_100px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-500 hover:-translate-y-3">
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#FFB703]/20 blur-3xl rounded-full"></div>
            <p className="text-[#8ECAE6] text-sm tracking-[0.3em] uppercase font-semibold">
              Intelligence
            </p>
              <h3 className="text-5xl font-black text-[#FFB703]">
                AI
              </h3>
              
              <p className="mt-5 text-white text-xl font-bold">
                Intelligent Fashion Discovery
              </p>

              <p className="mt-4 text-gray-400 leading-8">
                Exploring future-ready personalization systems,
                styling intelligence, and immersive commerce experiences.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3">
            <p className="text-[#8ECAE6] text-sm tracking-[0.3em] uppercase font-semibold">
              Expansion
            </p>
              <h3 className="text-5xl font-black text-[#FFB703]">
                PAN
              </h3>

              <p className="mt-5 text-white text-xl font-bold">
                India Expansion Vision
              </p>

              <p className="mt-4 text-gray-400 leading-8">
                Long-term roadmap focused on scalable fulfillment,
                operational growth, and intelligent digital infrastructure.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ================= ZYVENIQ ECOSYSTEM ================= */}

      <section className="py-26 bg-gradient-to-b from-white to-[#f7fbff] border-t border-black/5 overflow-hidden">

      <div className="w-full pl-4 md:pl-10 xl:pl-14"> 

          {/* TOP */}

          <div className="max-w-6xl">

            <p className="uppercase tracking-[0.35em] text-[#219EBC] text-sm font-semibold">
              The Zyveniq Ecosystem
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black text-[#023047] leading-[1.05]">

              More Than A Fashion Brand.
              <span className="text-[#FFB703]">
                {" "}A Modern Digital Culture.
              </span>

            </h2>

            <p className="mt-8 text-black-600 text-lg leading-9 max-w-3xl">

              Zyveniq is building a premium fashion-tech ecosystem where
              modern streetwear, intelligent digital experiences,
              creator culture, and future commerce blend into one
              evolving community-driven platform.

            </p>

          </div>

          {/* MAIN GRID */}

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 mt-20 items-start">

            {/* LEFT LINKS */}

            <div className="grid sm:grid-cols-2 gap-12">

              {/* COMPANY */}

              <div>

                <h3 className="text-[#023047] font-black text-2xl mb-7">
                  Company
                </h3>

                <div className="space-y-4 text-black-500 text-[15px] leading-7">

                <Link
                  to="/about"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  About Zyveniq
                </Link>

                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Careers
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Collaborations
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Investor Relations
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Creator Community
                </Link>

                </div>

              </div>

              {/* SUPPORT */}

              <div>

                <h3 className="text-[#023047] font-black text-2xl mb-7">
                  Support
                </h3>

                <div className="space-y-4 text-black-500 text-[15px] leading-7">

                <Link
                  to="/contact"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Contact Us
                </Link>

                <Link
                  to="/faqs"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  FAQs
                </Link>

                <Link
                  to="/shipping-policy"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Shipping Policy
                </Link>

                <Link
                  to="/returns-refunds"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Returns & Refunds
                </Link>

                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  My Account
                </Link>

                </div>

              </div>

              {/* MORE INFO */}

              <div>

                <h3 className="text-[#023047] font-black text-[26px] mb-7">
                  More Info
                </h3>

                <div className="space-y-4 text-black-500 text-[15px] leading-7">
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  T&C
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Sitemap
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Get Notified
                </Link>
                <Link
                  to="/coming-soon"
                  className="hover:text-[#FB8500] cursor-pointer transition block"
                >
                  Blogs
                </Link>

                </div>

              </div>

              {/* STORE PRESENCE */}

              <div>

                <h3 className="text-[#023047] font-black text-2xl mb-7">
                  Store Presence
                </h3>

                <div className="space-y-4 text-black-500 text-[15px] leading-7">

                  <p>Assam</p>

                  <p className="text-[#FB8500] font-semibold">
                    Expanding Across India
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT CONTENT */}

            

            <div className="space-y-6 w-full border-l border-black/10 pl-12">

              {[
                {
                  icon: "✨",
                  title: "Who We Are",
                  gradient: "from-[#023047] to-[#03506f]",
                  dark: true,

                  content: `
                  Zyveniq is a modern fashion-tech brand being built for the next generation of culture-driven consumers. We are creating a premium ecosystem where fashion, creativity, technology, and storytelling come together to form experiences that feel modern, expressive, and emotionally connected.

                  Our vision goes beyond simply selling clothing. We aim to build a community-driven brand that represents individuality, confidence, digital culture, and evolving fashion identity. Every collection, interface, and experience is designed with strong attention to aesthetics, detail, and premium interaction quality.

                  Zyveniq represents a new era where fashion is not just worn — it is experienced.
                  `,
                },

                {
                  icon: "🚀",
                  title: "What Inspired Zyveniq",
                  gradient: "from-[#FFF8E5] to-white",
                  dark: false,

                  content: `
                  Zyveniq was inspired by the realization that modern fashion consumers are no longer emotionally connected to traditional clothing brands that simply mass-produce designs without identity or storytelling.

                  We saw a growing generation deeply connected to creativity, creator culture, digital experiences, modern aesthetics, anime culture, streetwear, music, technology, and self-expression — yet very few brands truly reflected that energy in a premium and meaningful way.

                  The idea behind Zyveniq was to create a brand that feels emotionally alive, visually modern, digitally immersive, and culturally relevant while still maintaining premium quality and originality.
                  `,
                },

                {
                  icon: "⚡",
                  title: "Why We Are Different",
                  gradient: "from-[#EAF6FF] to-white",
                  dark: false,

                  content: `
                  Most clothing brands focus only on products. Zyveniq focuses on identity, experience, and culture.

                  What makes us different is our combination of premium fashion aesthetics, modern storytelling, intelligent digital experiences, and future-focused brand vision. We are not trying to become another generic ecommerce clothing store.

                  Our customers can expect limited creative collections, strong visual presentation, immersive branding, community-driven experiences, and future innovations that merge fashion with technology and personalization.

                  Every product and interaction is designed to feel intentional, premium, artistic, and culturally connected.
                  `,
                },

                {
                  icon: "🧵",
                  title: "Assam Handloom Heritage",
                  gradient: "from-[#FFF3D2] to-white",
                  dark: false,

                  content: `
                  Zyveniq is deeply inspired by the rich handloom heritage and artisan culture of Assam. Assam has one of the oldest and most respected weaving traditions in India, where craftsmanship, patience, and cultural storytelling are passed across generations.

                  The artistry of Assamese textiles, traditional weaving practices, and handmade craftsmanship reflects authenticity, identity, and timeless creativity — values that strongly influence the Zyveniq philosophy.

                  As the brand evolves, Zyveniq aims to celebrate and modernize elements of Assam’s artistic heritage by blending traditional inspiration with contemporary fashion culture and modern design language.

                  Our long-term vision is to create a platform where modern fashion innovation can coexist with cultural preservation, artisan appreciation, and authentic storytelling.
                  `,
                },

              

              ].map((item, index) => (

                <div
                  key={index}
                  className={`rounded-[40px] overflow-hidden border ${
                    item.dark
                      ? "border-transparent"
                      : "border-gray-100"
                  } shadow-[0_8px_30px_rgba(0,0,0,0.04)]`}
                >

                  <button
                    onClick={() =>
                      setOpenInfo(
                        openInfo === index ? null : index
                      )
                    }
                    className={`w-full text-left p-7 bg-gradient-to-br ${item.gradient}`}
                  >

                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-3">

                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl ${
                          item.dark
                            ? "bg-white/10 text-white"
                            : "bg-white text-[#023047]"
                        }`}>
                          {item.icon}
                        </div>

                        <h3 className={`text-xl md:text-2xl font-black ${
                          item.dark
                            ? "text-white"
                            : "text-[#023047]"
                        }`}>
                          {item.title}
                        </h3>

                      </div>

                      <div className={`text-4xl font-light ${
                        item.dark
                          ? "text-white"
                          : "text-[#023047]"
                      }`}>
                        {openInfo === index ? "−" : "+"}
                      </div>

                    </div>

                  </button>

                  {openInfo === index && (

                    <div
                      className={`px-7 pb-7 pt-2 leading-8 text-[16px] whitespace-pre-line animate-[fadeIn_0.4s_ease] max-w-[620px] ${
                        item.dark
                          ? "bg-[#023047] text-gray-300"
                          : "bg-white text-gray-600"
                      }`}>

                      {item.content}

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
      </>
      }
    />
    <Route
      path="/about"
      element={<About />}
    />
    <Route
      path="/contact"
      element={<Contact />}
    />
    <Route
      path="/faqs"
      element={<FAQs />}
    />
    <Route
      path="/shipping-policy"
      element={<ShippingPolicy />}
    />
    <Route
      path="/returns-refunds"
      element={<ReturnsRefunds />}
    />
    <Route
      path="/coming-soon"
      element={<ComingSoon />}
    />
    </Routes>
      {/* ================= FOOTER ================= */}

      <footer className="relative bg-gradient-to-b from-[#02263D] to-[#011826] text-white py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#219EBC]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between gap-16">

          <div className="flex flex-col items-start">

            {/* Logo */}
            <div className="flex items-center gap-0 mb-6">

              <img
                src={logo}
                alt="Zyveniq"
                className="h-12 w-auto object-contain -mr-7"
              />

              <div className="flex flex-col leading-none">
                <h2 className="text-white font-black tracking-wide text-xl">
                  ZYVENIQ
                </h2>

                <p className="text-[#D4A017] text-[11px] tracking-[0.25em] mt-1 uppercase">
                  Wear The Moment
                </p>
              </div>

            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-sm text-[15px]">
              Reinventing fashion commerce through intelligent digital
              experiences and premium innovation.
            </p>

          </div>

            <div>

              <h3 className="text-2xl font-black">
                Contact
              </h3>

              <p className="mt-6 text-gray-300">
                support@zyveniq.com
              </p>

              <p className="mt-2 text-gray-400">
                Assam, India
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-black">
                Socials
              </h3>

              <div className="flex gap-4 mt-6">

                <a
                  href="https://www.instagram.com/zyveniq__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#219EBC] transition"
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/company/zyveniq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#219EBC] transition"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="https://wa.me/9365005324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#f4f7fb] flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp size={22} />
                </a>
                
              </div>

            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400">
            © Zyveniq Pvt. Ltd. 2026. All Rights Reserved
          </div>

        </div>

      </footer>
      {/* ================= REVIEW MODAL ================= */}

      {showReviewModal && (

        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-xl w-full rounded-[35px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)] relative"
          >

            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-[#219EBC] text-xs font-bold">
              Community Review
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#023047] leading-tight">

              Share Your
              <span className="text-[#FFB703]">
                {" "}Experience
              </span>

            </h2>

            <p className="mt-5 text-gray-600 leading-8">

              Tell the Zyveniq community what excites you
              about the upcoming launch.

            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={reviewName}
                onChange={(e) =>
                  setReviewName(e.target.value)
                }
                className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none focus:border-[#FFB703]"
              />

              <textarea
                placeholder="Write your review..."
                rows="5"
                maxLength={250}
                value={reviewText}
                onChange={(e) =>
                  setReviewText(e.target.value)
                }
                className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none resize-none focus:border-[#FFB703]"
              />
              <p className="text-sm text-gray-400 mt-2 text-right">
                {reviewText.length}/250
              </p>
              <button
                disabled={reviewLoading}
                onClick={async () => {

                  if (
                    reviewName.trim().length < 3 ||
                    reviewText.trim().length < 15
                  ) {
                    alert(
                      "Please enter a proper name and meaningful review."
                    );
                    return;
                   
                  }

                  try {
                    setReviewLoading(true);
                    await axios.post(
                      "https://backend-7a2m.onrender.com/api/reviews/add/",
                      {
                        name: reviewName,
                        review: reviewText,
                      }
                    );

                    alert(
                      "Review submitted successfully."
                    );

                    setReviewName("");
                    setReviewText("");

                    setShowReviewModal(false);

                  } catch (error) {

                    alert("Unable to submit review.");

                  }
                  finally {

                    setReviewLoading(false);

                  }

}}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-[#023047] font-black hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {reviewLoading ? "Submitting..." : "Submit Review"}
      
              </button>

            </div>

          </motion.div>

        </div>

      )}
      {/* ================= PINCODE MODAL ================= */}

      {showPincodeModal && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white max-w-lg w-full rounded-[35px] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)] relative"
          >

            <button
              onClick={() =>
                setShowPincodeModal(false)
              }
              className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-[#219EBC] text-xs font-bold">
              Availability Checker
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#023047] leading-tight">

              Check Delivery
              <span className="text-[#FFB703]">
                {" "}Availability
              </span>

            </h2>

            <p className="mt-5 text-black-600 leading-8">

              Enter your pincode to check whether
              Zyveniq launch access is available
              in your area.

            </p>

            <div className="mt-8">

              <input
                type="text"
                placeholder="Enter your pincode"
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value)
                }
                className="w-full px-6 py-5 rounded-2xl border border-gray-200 outline-none text-[#023047] placeholder:text-gray-400 focus:border-[#FFB703]"
              />

              <button
                onClick={checkAvailability}
                className="w-full mt-5 py-5 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-[#023047] font-black hover:scale-[1.02] transition-all duration-300 shadow-xl"
              >
                Check Availability
              </button>

            </div>

            {availabilityMessage && (

              <div className="mt-6 p-5 rounded-2xl bg-[#F4FAFF] border border-[#D8EEFF]">

                <p className="text-[#219EBC] font-semibold leading-7">
                  {availabilityMessage}
                </p>

              </div>

            )}

          </motion.div>

        </div>

      )}

    </div>




  );
}
export default App;