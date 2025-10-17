// // "use client";
// // import { motion } from "framer-motion";
// // import Tilt from "react-parallax-tilt";

// // const reasons = [
// //   {
// //     title: "Local Expertise",
// //     description: "Deep understanding of UAE regulations, culture, and business practices.",
// //     icon: "🌍",
// //   },
// //   {
// //     title: "End-to-End Support",
// //     description: "From setup to scaling—were with you at every step.",
// //     icon: "🔗",
// //   },
// //   {
// //     title: "Premium Service",
// //     description: "White-glove consultancy with fast turnaround and clear communication.",
// //     icon: "🎯",
// //   },
// //   {
// //     title: "Trusted by 1000+ Clients",
// //     description: "Proven track record across industries and business sizes.",
// //     icon: "🤝",
// //   },
// // ];

// // export default function WhyChooseUs() {
// //   return (
// //     <section className="py-24 px-6 bg-gradient-to-br from-[#F9F9F9] to-white text-center relative">
// //       {/* Radial Glow Background */}
// //       <div className="absolute inset-0 pointer-events-none z-0">
// //         <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
// //       </div>

// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.8 }}
// //         className="mb-12 relative z-10"
// //       >
// //         <h2 className="text-3xl font-semibold text-[#1E4E9C] bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent animate-shimmer">
// //           Why Choose Smart Way
// //         </h2>
// //         <p className="mt-4 text-lg text-[#2B2B2B]">
// //           We dont just consult—we partner, guide, and elevate your business journey.
// //         </p>
// //       </motion.div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
// //         {reasons.map((reason, idx) => (
// //           <motion.div
// //             key={idx}
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: idx * 0.2, duration: 0.6 }}
// //           >
// //             <Tilt
// //               glareEnable={true}
// //               glareMaxOpacity={0.15}
// //               glareColor="#D4AF37"
// //               glarePosition="bottom"
// //               scale={1.03}
// //               transitionSpeed={1500}
// //               className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="text-4xl mb-4 animate-pulse">{reason.icon}</div>
// //               <h3 className="text-xl font-semibold text-[#1E4E9C]">{reason.title}</h3>
// //               <p className="mt-2 text-sm text-[#2B2B2B]">{reason.description}</p>
// //             </Tilt>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import React from 'react'

// const WhyChooseUs = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default WhyChooseUs

"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const reasons = [
  {
    title: "Local Expertise",
    description: "Deep understanding of UAE regulations, culture, and business practices.",
    icon: "🌍",
  },
  {
    title: "End-to-End Support",
    description: "From setup to scaling—we’re with you at every step.",
    icon: "🔗",
  },
  {
    title: "Premium Service",
    description: "White-glove consultancy with fast turnaround and clear communication.",
    icon: "🎯",
  },
  {
    title: "Trusted by 1000+ Clients",
    description: "Proven track record across industries and business sizes.",
    icon: "🤝",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#F9F9F9] to-white text-center relative overflow-x-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 relative z-10 max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-[#1E4E9C] bg-gradient-to-r from-[#D4AF37] via-[#f0c75e] to-[#D4AF37] bg-clip-text text-transparent animate-shimmer">
          Why Choose Smart Way
        </h2>
        <p className="mt-4 text-lg text-[#2B2B2B]">
          We don’t just consult—we partner, guide, and elevate your business journey.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full mx-auto relative z-10">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="w-full"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#D4AF37"
              glarePosition="bottom"
              scale={1.03}
              transitionSpeed={1500}
              className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 animate-pulse">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#1E4E9C]">{reason.title}</h3>
              <p className="mt-2 text-sm text-[#2B2B2B]">{reason.description}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
