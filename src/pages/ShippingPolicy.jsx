import React from "react";

export default function ShippingPolicy() {

  const sections = [

    {
      title: "Processing Time",
      content:
        "All orders are processed within 1–2 business days after confirmation. Orders placed during weekends or public holidays are processed on the next working day.",
    },

    {
      title: "Shipping Time",
      content:
        "Estimated delivery timelines range between 2–5 business days depending on your location. Metropolitan regions usually receive deliveries faster than remote locations.",
    },

    {
      title: "Shipping Coverage",
      content:
        "Zyveniq currently provides delivery services across all states and union territories in India through our expanding logistics network.",
    },

    {
      title: "Shipping Charges",
      content:
        "Shipping fees are calculated dynamically during checkout depending on destination and order size. Select launches and campaigns may include complimentary shipping.",
    },

    {
      title: "Order Tracking",
      content:
        "Customers receive order and shipment updates through email and future tracking integrations. Please ensure accurate shipping information while placing orders.",
    },

    {
      title: "Failed Deliveries",
      content:
        "If delivery fails because of incorrect address information, customer unavailability, or repeated failed attempts, additional delivery charges may apply.",
    },

    {
      title: "Inspection & Support",
      content:
        "We encourage customers to inspect their package upon delivery to ensure product integrity and premium quality standards are maintained.",
    },

  ];

  return (

    <div className="bg-[#f7f8fa] min-h-screen text-[#023047]">

      {/* HERO */}

      <section className="bg-[#02263D] text-white pt-40 pb-28 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-sm font-semibold">
            Zyveniq Policies
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] max-w-5xl">

            Shipping
            <span className="text-[#FFB703]"> Policy</span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-3xl">

            We are committed to delivering a seamless,
            premium, and transparent shipping experience
            across India.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              Pan India Shipping
            </div>

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              2–5 Business Days
            </div>

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              Premium Support
            </div>

          </div>

        </div>

      </section>

      {/* POLICY CONTENT */}

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          {/* INTRO CARD */}

          <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.05)] border border-gray-100">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-black/10 pb-8">

              <div>

                <p className="uppercase tracking-[0.3em] text-[#FFB703] text-xs font-bold">
                  Official Policy
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#023047]">
                  Shipping Guidelines
                </h2>

              </div>

              <div className="text-gray-500 text-sm">
                Last Updated: 23 May 2026
              </div>

            </div>

            {/* SECTIONS */}

            <div className="mt-12 space-y-8">

              {sections.map((item, index) => (

                <div
                  key={index}
                  className="border-b border-black/5 pb-8 last:border-none"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-3 h-14 rounded-full bg-[#FFB703] mt-1"></div>

                    <div>

                      <h3 className="text-2xl font-black text-[#023047]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600 leading-8 text-[16px] max-w-4xl">
                        {item.content}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* SUPPORT BLOCK */}

      <section className="pb-28 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="bg-[#02263D] rounded-[40px] p-12 md:p-16 text-white relative overflow-hidden">

            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[0.3em] text-[#FFB703] text-xs font-semibold">
                Customer Support
              </p>

              <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight max-w-3xl">

                Need Shipping Assistance?

              </h2>

              <p className="mt-8 text-gray-300 leading-8 max-w-2xl">

                For shipping-related queries, delivery support,
                or order assistance, reach out to the Zyveniq support team.

              </p>

              <div className="mt-10 space-y-3">

                <p className="text-xl font-bold">
                  support@zyveniq.com
                </p>

                <p className="text-gray-400">
                  Assam, India
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}