import React from "react";

export default function ReturnsRefunds() {

  const sections = [

    {
      title: "Return Eligibility",
      content:
        "Customers may request a return within 3 days of receiving their order. To qualify, products must remain unused, unworn, unwashed, and in original condition with packaging and proof of purchase.",
    },

    {
      title: "Non-Returnable Products",
      content:
        "Sale items, discounted products, accessories, customized products, personal-use items, and products damaged due to customer misuse are not eligible for return or exchange.",
    },

    {
      title: "Refund Process",
      content:
        "Once returned products are received and inspected, customers will be notified regarding refund approval. Approved refunds are processed within 5–7 business days through the original payment method wherever applicable.",
    },

    {
      title: "Cash On Delivery Refunds",
      content:
        "For COD orders, refunds are processed through mutually agreed transfer methods after successful verification and approval.",
    },

    {
      title: "Exchange Policy",
      content:
        "Exchanges are supported only for incorrect products, damaged items, defective products, or wrong sizes sent by our team. Exchange requests must be initiated within 24 hours of delivery.",
    },

    {
      title: "Return Shipping Fees",
      content:
        "Shipping charges are generally non-refundable unless the return is caused by our error, including damaged or incorrect products. Return shipping responsibility may vary depending on the case.",
    },

    {
      title: "Order Inspection",
      content:
        "Customers are advised to inspect packages carefully during delivery to ensure the integrity and premium quality of Zyveniq garments before accepting the order.",
    },

  ];

  return (

    <div className="bg-[#f7f8fa] min-h-screen text-[#023047]">

      {/* HERO */}

      <section className="bg-gradient-to-br from-[#021B2E] to-[#02263D] text-white pt-40 pb-28 px-6 relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB703]/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <p className="uppercase tracking-[0.35em] text-[#FFB703] text-sm font-semibold">
            Zyveniq Policies
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] max-w-5xl">

            Returns &
            <span className="text-[#FFB703]"> Refunds</span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-3xl">

            Transparent return and refund policies designed
            to ensure a seamless premium shopping experience.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              3 Day Returns
            </div>

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              Fast Refund Support
            </div>

            <div className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-sm">
              Premium Assistance
            </div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.05)] border border-gray-100">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-black/10 pb-8">

              <div>

                <p className="uppercase tracking-[0.3em] text-[#FFB703] text-xs font-bold">
                  Official Policy
                </p>

                <h2 className="mt-4 text-4xl font-black text-[#023047]">
                  Returns & Refund Guidelines
                </h2>

              </div>

              <div className="text-gray-500 text-sm">
                Last Updated: 23 May 2026
              </div>

            </div>

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

                Need Return Assistance?

              </h2>

              <p className="mt-8 text-gray-300 leading-8 max-w-2xl">

                For refund requests, return support,
                exchange queries, or order assistance,
                contact the Zyveniq support team.

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