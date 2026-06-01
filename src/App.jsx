import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
  FaFacebook,
} from "react-icons/fa";

import logo from "./assets/logo.png";
import fashion1 from "./assets/fashion1.jpg";
import fashion2 from "./assets/fashion2.jpg";
import fashion3 from "./assets/fashion3.jpg";
import heroVideo from "./assets/VID-20260522-WA0011.mp4";
import FadeUp from "./pages/FadeUp";

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


import flyer1 from "./assets/flyer1.png";
import flyer2 from "./assets/flyer2.png";
import flyer3 from "./assets/flyer3.png";
import flyer4 from "./assets/flyer4.png";
import flyer1Mobile from "./assets/flyer1-mobile.png";
import flyer2Mobile from "./assets/flyer2-mobile.png";
import flyer3Mobile from "./assets/flyer3-mobile.png";
import flyer4Mobile from "./assets/flyer4-mobile.png";

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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


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
  const [reviewState, setReviewState] = useState("");
  const [reviewLoading, setReviewLoading] = useState(false);
  const [openInfo, setOpenInfo] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth < 768;
const flyers = isMobile
  ? [
      flyer1Mobile,
      flyer2Mobile,
      flyer3Mobile,
      flyer4Mobile,
    ]
  : [
      flyer1,
      flyer2,
      flyer3,
      flyer4,
    ];

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
      name: "Manoj Kumar",
      role: "Early Access Member",
      state: "Mumbai, Maharashtra",
      text: "The branding and premium fashion direction already feels different from typical clothing startups.",
      highlight: false,
      image: arjunImg,
    },
    {
      name: "Nithya Gowda",
      role: "Early Access Member",
      state: "Bengaluru, Karnataka",
      text: "The website experience feels premium and modern. Excited to see the official launch collections.",
      highlight: true,
      image: snehaImg,
    },
    {
      name: "Dipali Das",
      role: "Early Access Member",
      state: "Assam",
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
    state: item.state,
    text: item.review,
    highlight: false,
    image: riyaImg,
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

<div className="
absolute
left-[45%]
-translate-x-1/2
flex
items-center
justify-center
z-10
">

            {/* LOGO */}

            <img
            src={logo}
            alt="Zyveniq Logo"
            className="h-10 md:h-16 w-auto object-contain -mr-7 md:-mr-9"
            />

            {/* BRAND TEXT */}

            <div className="flex flex-col leading-none justify-center">

              <h1 className="text-[#023047] font-black tracking-[0.12em] text-[16px] md:text-4xl">
                ZYVENIQ
              </h1>

              <p className="
text-[#D4A017]
text-[6px]
md:text-[12px]
tracking-[0.12em]
md:tracking-[0.3em]
mt-[2px]
uppercase
font-semibold
whitespace-nowrap
">
                WEAR THE MOMENT
              </p>

            </div>

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
           className="inline-flex items-center gap-2 px-2 md:px-7 py-2 md:py-3 mr-1 md:mr-2 rounded-full bg-gradient-to-r from-[#FFE082] via-[#FFD54F] to-[#FFCA28] text-[#023047] font-bold border border-[#F4B400] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,193,7,0.45)] hover:shadow-[0_0_40px_rgba(255,193,7,0.7)]"
          >
            <span className="text-[#023047] text-[9px] md:text-sm font-bold tracking-wide">
              Join Waitlist
            </span>
          </button>

        </div>

      </nav>
      {/* ================= SLIDE MENU ================= */}

      <motion.div
initial={{ x: -340 }}

animate={{
  x: showMenu ? 0 : -340,
}}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="
fixed
top-0
left-0
h-screen
w-[78vw]
max-w-[320px]
z-[9999]
bg-white
p-8
border-r
border-[#023047]/10
shadow-[0_20px_80px_rgba(0,0,0,0.12)]
"
      >

        {/* TOP */}

        <div className="flex items-center justify-between">

<div>
  <p className="text-[11px] uppercase tracking-[0.35em] text-[#FFB703] font-semibold">
    Navigation
  </p>

  <h2 className="mt-2 text-[32px] font-semibold text-[#023047] tracking-[-0.03em]">
    Menu
  </h2>
</div>

          <button
            onClick={() => setShowMenu(false)}
            className="w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-2xl text-black-500"
          >
            ×
          </button>

        </div>

        <div className="mt-10 flex flex-col pb-28">

  <Link
    to="/"
    onClick={() => setShowMenu(false)}
    className="group flex items-center justify-between py-4 text-[18px] md:text-[24px] font-semibold text-[#023047] hover:text-[#FFB703] transition-all"
  >
    Home
    <span className="text-[#FFB703] opacity-70">→</span>
  </Link>

  <Link
    to="/about"
    onClick={() => setShowMenu(false)}
    className="group flex items-center justify-between py-4 border-t border-[#023047]/8 text-[18px] font-semibold text-[#023047] hover:text-[#FFB703] transition-all"
  >
    About Us
    <span className="text-[#FFB703] opacity-70">→</span>
  </Link>

  <Link
    to="/contact"
    onClick={() => setShowMenu(false)}
    className="group flex items-center justify-between py-4 border-t border-[#023047]/8 text-[18px] font-semibold text-[#023047] hover:text-[#FFB703] transition-all"
  >
    Contact Us
    <span className="text-[#FFB703] opacity-70">→</span>
  </Link>

  <Link
    to="/faqs"
    onClick={() => setShowMenu(false)}
    className="group flex items-center justify-between py-4 border-t border-[#023047]/8 text-[18px] font-semibold text-[#023047] hover:text-[#FFB703] transition-all"
  >
    FAQs
    <span className="text-[#FFB703] opacity-70">→</span>
  </Link>

</div>
        <div className="absolute bottom-6 left-6 right-6">

<div className="border-t border-[#023047]/10 pt-6">

  <h3 className="text-[#023047] text-xl font-bold tracking-[0.08em]">
    <span className="text-[#FFB703]">ZYV</span>ENIQ
  </h3>

  <p className="mt-3 text-[#023047]/55 text-[13px] leading-6">
    Fashion. Culture. Technology.
  </p>

  <p className="mt-4 text-[#023047]/45 text-sm">
    Assam, India
  </p>

</div>

</div>

      </motion.div>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 z-[9998] bg-[#023047]/20 backdrop-blur-[3px] backdrop-blur-sm"
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

<section className="bg-[#F5F1EA] py-0 overflow-hidden">

  <div className="w-full">

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      speed={1200}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      className="zyveniqFlyerSwiper"
    >

      {flyers.map((flyer, index) => (

        <SwiperSlide key={index}>

          <div className="overflow-hidden rounded-none bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

<img
  src={flyer}
  alt=""
  className="w-full h-auto block"
/>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>

      
{/* ================= HERO ================= */}
<section className="bg-[#023047] overflow-hidden py-3 border-y border-[#D4A017]/20">
  <div className="animate-marquee whitespace-nowrap flex">
    <span className="text-[#FFD54F] text-sm md:text-lg font-semibold tracking-[0.4em] uppercase pr-20">
      • ZYVENIQ • LAUNCHING SOON •
    </span>
    <span className="text-[#FFD54F] text-sm md:text-lg font-semibold tracking-[0.4em] uppercase pr-20">
      • ZYVENIQ • LAUNCHING SOON •
    </span>
    <span className="text-[#FFD54F] text-sm md:text-lg font-semibold tracking-[0.4em] uppercase pr-20">
      • ZYVENIQ • LAUNCHING SOON •
    </span>
    <span className="text-[#FFD54F] text-sm md:text-lg font-semibold tracking-[0.4em] uppercase pr-20">
      • ZYVENIQ • LAUNCHING SOON •
    </span>
    <span className="text-[#FFD54F] text-sm md:text-lg font-semibold tracking-[0.4em] uppercase pr-20">
      • ZYVENIQ • LAUNCHING SOON •
    </span>

  </div>
</section>

<section className="
relative
min-h-[100vh]
md:h-[100svh]
overflow-hidden
bg-[#F5F1EA]
">

  {/* VIDEO BACKGROUND */}

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/35" />

  {/* SOFT GRAIN */}

  <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

  {/* CONTENT */}

  <div
className="
relative
z-10
h-full
min-h-[100vh]
flex
flex-col
justify-between
"
>

    {/* TOP */}

    <div className="max-w-[1500px] mx-auto w-full px-5 md:px-10 pt-24 md:pt-36">

      {/* COMING SOON */}

      <p className="text-white/70 text-xs md:text-sm tracking-[0.45em] uppercase font-medium">

        Coming Soon

      </p>

      {/* HUGE HERO */}

      <h1 className="
editorial-font
mt-5
text-[#F8F5F0]
text-[72px]
sm:text-[80px]
md:text-[180px]
leading-[0.95]
md:leading-[0.82]
tracking-[-0.06em]
md:tracking-[-0.08em]
font-semibold
max-w-[500px]
md:max-w-[900px]
">

        Wear
        <br />
        The Moment.

      </h1>

    </div>

    {/* BOTTOM BAR */}

    <div className="w-full border-t border-white/10 backdrop-blur-md bg-black/10">

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-6 md:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

        {/* LEFT */}

        <div>

          <p className="text-[#F8F5F0] text-lg md:text-2xl font-medium">

            Be part of the first release.

          </p>

        </div>

        {/* EMAIL */}

<div
id="waitlist"
className="
flex
w-full
lg:w-auto
flex-col
md:flex-row
gap-4
mt-auto
"
>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-[340px] h-[64px] rounded-full bg-white/10 border border-white/10 px-7 text-white placeholder:text-white/100 outline-none backdrop-blur-xl"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="h-[64px] px-10 rounded-full bg-white text-black font-semibold tracking-[0.08em] hover:bg-[#EAE4DA] transition-all duration-500"
          >

            {loading
              ? "PLEASE WAIT..."
              : "REQUEST ACCESS"}

          </button>

        </div>

      </div>

    </div>

  </div>

</section>



      {/* ================= TESTIMONIALS ================= */}
      <FadeUp>
      {/* ================= TESTIMONIALS ================= */}

<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="py-32 bg-gradient-to-b from-[#f7fbff] via-white to-[#f9fcff] relative overflow-hidden"
>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8ECAE6]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="w-full px-4 md:px-10 xl:px-14">

          <div className="text-center">

            <p className="
inline-flex
items-center
gap-2
text-[#023047]
text-[13px]
md:text-[20px]
font-black
tracking-[0.22em]
uppercase
mb-0
">
              Community Voices
            </p>

            <h2 className="mt-8 text-4xl md:text-6xl font-black text-[#023047] leading-tight">

              Loved By
              <span className="text-[#FFB703]"> Modern Fashion </span>
              Enthusiasts

            </h2>

<p className="mt-8 max-w-2xl mx-auto text-black-600 text-lg leading-8">

  Hundreds of fashion enthusiasts have already shared
  their thoughts about Zyveniq. Now it's your turn to
  join the conversation.

</p>

            

          </div>

          {/* REVIEW BUTTON */}

          <div className="flex justify-center mt-4">

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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.7,
    delay: index * 0.12,
  }}
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

<div>
  <p
    className={`text-sm ${
      review.highlight
        ? "text-white/80"
        : "text-black/100"
    }`}
  >
    {review.role}
  </p>

  <p
    className={`text-xs mt-1 ${
      review.highlight
        ? "text-white/80"
        : "text-black/100"
    }`}
  >
    {review.state}
  </p>
</div>

                  </div>

                </div>

                <p
                  className={`mt-6 leading-8 ${
                    review.highlight
                      ? "text-white/100"
                      : "text-black-600"
                  }`}
                >

                  {review.text}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.section>
      </FadeUp>
      {/* ================= COLLECTIONS ================= */}
      <FadeUp>
<motion.section
  id="collections"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="
inline-flex
items-center
gap-2
text-[#023047]
text-[13px]
md:text-[20px]
font-black
tracking-[0.22em]
uppercase
mb-0
">
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
                whileHover={{
  y: -10,
  scale: 1.015,
}}
transition={{
  duration: 0.35,
}}
                className="relative rounded-[35px] overflow-hidden group cursor-pointer
                shadow-[12px_14px_35px_rgba(0,0,0,0.679)]
                hover:shadow-[18px_20px_60px_rgba(0,0,0,0.35)]
                transition-all duration-300"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="
w-full
h-[420px]
md:h-[680px]
object-cover
transition
duration-700
group-hover:scale-110
"
                />
		 <div className="absolute top-5 right-0.1 z-20">
                  <img
                    src={logo}
                    alt="Zyveniq"
                    className="h-10 md:h-12 w-auto opacity-95"
                 />
                </div>

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

      </motion.section>
      </FadeUp>
      {/* ================= SOUL OF ZYVENIQ ================= */}
      <FadeUp>
      <section className="relative py-20 bg-gradient-to-b from-[#f8f5ef] to-white overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8ECAE6]/10 blur-3xl rounded-full"></div>


        {/* MAIN CONTENT */}

        <div className="w-full px-4 md:px-10 xl:px-14">

          {/* SECTION HEADING */}

          <div className="max-w-4xl mb-20">

            <p className="
inline-flex
items-center
gap-2
text-[#023047]
text-[13px]
md:text-[20px]
font-black
tracking-[0.22em]
uppercase
mb-0
">
              The Soul Of Zyveniq
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black text-[#023047] leading-[1.05]">

              Where Heritage Meets
              <span className="text-[#FFB703]"> Modern Fashion.</span>

            </h2>

            <p className="mt-8 text-black text-lg leading-7 max-w-3xl">

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
                    className="relative group overflow-hidden rounded-[34px] bg-white
                    shadow-[14px_14px_35px_rgba(0,0,0,0.48)] 
                    hover:shadow-[20px_20px_45px_rgba(0,0,0,0.24)]
                    transition-all duration-500"
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
      </FadeUp>
      {/* ================= BRAND STATS SECTION ================= */}
      <FadeUp>
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
      </FadeUp>
      {/* ================= ZYVENIQ ECOSYSTEM ================= */}
      <FadeUp>
      <section className="py-26 bg-gradient-to-b from-white to-[#f7fbff] border-t border-black/5 overflow-hidden">

      <div className="w-full pl-4 md:pl-10 xl:pl-14"> 

          {/* TOP */}

          <div className="max-w-6xl">

            <p className="
inline-flex
items-center
gap-2
text-[#023047]
text-[13px]
md:text-[20px]
font-black
tracking-[0.22em]
uppercase
mb-0
">
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

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20 mt-16 md:mt-20 items-start">

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

            

            <div
  className="
  space-y-5
  w-full
  md:border-l
  md:border-black/10
  md:pl-12
  "
>

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
                  className={`
mx-auto
w-[92%]
max-w-[430px]
md:w-full
md:max-w-none
rounded-[28px]
md:rounded-[40px]
overflow-hidden
border
${
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
                    className={`
w-full
text-left
p-5
md:p-7
bg-gradient-to-br
${item.gradient}
`}
                  >

                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-3">

                        <div className={`
w-10 h-10
md:w-12 md:h-12
rounded-xl flex items-center justify-center text-3xl ${
                          item.dark
                            ? "bg-white/10 text-white"
                            : "bg-white text-[#023047]"
                        }`}>
                          {item.icon}
                        </div>

                        <h3 className={`text-lg md:text-2xl font-black ${
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
      </FadeUp>
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
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp size={22} />
                </a>
                                <a
                  href="https://www.facebook.com/profile.php?id=61589999957861&rdid=5fKVvWF7iWbTp8gY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DAhhCSzWh%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FaFacebook size={22} />
                </a>
                
              </div>

            </div>

          </div>
          
        
{/* BRAND STATEMENT */}

<div className="text-center mb-10">

<p className="
  text-white
  text-[18px]
  md:text-[25px]
  font-black
  tracking-[0.0em]
  translate-y-10
">
    Crafted with
    <span className="text-[#FFB703] mx-2">❤</span>
    in NorthEast India
  </p>

</div>

{/* COPYRIGHT */}

<div className="pt-8 border-t border-white/10">

  <div className="text-center text-gray-400 text-sm md:text-base">
    © Zyveniq Pvt. Ltd. 2026. All Rights Reserved
  </div>

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
              <input
  type="text"
  placeholder="State (e.g. Karnataka)"
  value={reviewState}
  onChange={(e) => setReviewState(e.target.value)}
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
  reviewState.trim().length < 2 ||
  reviewText.trim().length < 15
) {
  alert(
    "Please enter a proper name, state and meaningful review."
  );
  return;
}

                  try {
                    setReviewLoading(true);
                    await axios.post(
                      "https://backend-7a2m.onrender.com/api/reviews/add/",
{
  name: reviewName,
  state: reviewState,
  review: reviewText,
}
                    );

                    alert(
                      "Review submitted successfully."
                    );

                    setReviewName("");
                    setReviewText("");
                    setReviewState("");

                    setShowReviewModal(false);

                  } catch (error) {

                    alert("Unable to submit review.");

                  }
                  finally {

                    setReviewLoading(false);

                  }

}}
                className="w-full py-5 rounded-2xl bg-[#023047] text-white text-[#023047] font-black hover:scale-[1.02] transition-all duration-300 shadow-[8px_8px_0px_rgba(2,48,71,0.12)] disabled:opacity-60 disabled:cursor-not-allowed"
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
                className="w-full mt-5 py-5 rounded-2xl bg-gradient-to-r from-[#FFB703] to-[#D4A017] text-[#023047] font-black hover:scale-[1.02] transition-all duration-300 shadow-xl"
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