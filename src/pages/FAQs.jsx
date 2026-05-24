import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQs() {

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [

    {
      question: "When will my order arrive?",
      answer:
        "Orders usually arrive within 2–5 business days across all regions in India.",
    },

    {
      question: "Do you ship pan-India?",
      answer:
        "Yes, we provide shipping to all states and union territories across India through our optimized logistics network to ensure your products arrive safely and efficiently.",
    },

    {
      question: "Can I exchange or return my order?",
      answer:
        "Yes. We facilitate exchanges and returns within 3–7 days of delivery while maintaining a transparent and customer-centric experience.",
    },

    {
      question: "How do I choose the right size?",
      answer:
        "Please refer to our AI-integrated size chart available on every product page to ensure the perfect fit before placing your order.",
    },

    {
      question: "What if the size is not suitable?",
      answer:
        "We provide seamless exchange options to ensure your comfort and satisfaction with our 240 GSM heavyweight premium wear.",
    },

    {
      question: "What payment methods are available?",
      answer:
        "We support Cash on Delivery (COD), UPI, Digital Wallets, Credit Cards, and Debit Cards.",
    },

    {
      question: "Is the product exactly like the photos?",
      answer:
        "Yes. All product visuals are high-fidelity real-world representations of our luxury streetwear collections.",
    },

    {
      question: "What does Zyveniq mean?",
      answer:
        "Zyveniq is more than a name — it represents a phygital fashion-tech ecosystem built around identity, modern luxury, heritage inspiration, and expressive culture. We believe wearing the moment means expressing who you truly are.",
    },

  ];

  return (

    <div className="bg-[#f7f8fa] min-h-screen text-[#023047]">

      {/* HERO */}

      <section className="bg-[#02263D] text-white pt-40 pb-28 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-sm font-semibold">
            Zyveniq Support
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] max-w-5xl">

            Frequently Asked
            <span className="text-[#FFB703]"> Questions</span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-3xl">

            Everything you need to know about delivery,
            exchanges, sizing, payments, and the Zyveniq experience.

          </p>

        </div>

      </section>

      {/* FAQ SECTION */}

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >

              <button
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
                className="w-full flex items-center justify-between text-left p-8"
              >

                <h3 className="text-xl md:text-2xl font-black text-[#023047] pr-6">
                  {faq.question}
                </h3>

                <div className="text-4xl font-light text-[#FFB703]">
                  {openFAQ === index ? "−" : "+"}
                </div>

              </button>

              {openFAQ === index && (

                <div className="px-8 pb-8 text-black-600 leading-8 text-[16px] animate-[fadeIn_0.35s_ease]">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="pb-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-xs font-semibold">
            Need More Help?
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black text-[#023047] leading-[1.05]">

            We’re Here To
            <span className="text-[#FFB703]"> Help You.</span>

          </h2>

          <p className="mt-8 text-gray-600 leading-8 max-w-2xl mx-auto">

            For additional support, collaborations,
            or order-related assistance, contact the Zyveniq team directly.

          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-10 px-10 py-5 rounded-full bg-[#023047] text-white font-bold hover:bg-[#011826] transition-all duration-300"
          >
            Contact Zyveniq
          </Link>

        </div>

      </section>

    </div>
  );
}