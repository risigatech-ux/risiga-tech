"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Home.css";
import { Figtree } from "next/font/google";
import Image from "next/image";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const rotatingTexts = [
  "Recruitment Process Outsourcing",
  "All Kinds of Hiring",
  "Global Capability Center",
];

const services = [
  {
    id: "ai-talent",
    icon: "/images/home/ai.svg",
    title: "AI-Driven Talent Acquisition",
    description:
      "Streamline hiring with our AI-powered system, which sources the top 2% of talent for contract, full-time, and managed roles.\n\nOur process ensures faster, more accurate, and culturally aligned hiring tailored to your business needs.",
    link: "/hire-software-developers",
    imageSrc: "/images/home/ai.webp",
  },
  {
    id: "gcc",
    icon: "/images/home/global.svg",
    title: "Global Capability Centers (GCC)",
    description:
      "Launch your GCC 30% faster with Supersourcing’s end-to-end support. Whether it’s fintech, e-commerce, or AI-driven enterprises, we guide you to the ideal location with cost-efficient solutions.",
    link: "/global-capability-center",
    imageSrc: "/images/home/global2.webp", // Replace with actual image
  },
  {
    id: "rpo",
    icon: "/images/home/recruitment_process.svg",
    title: "Recruitment Process Outsourcing",
    description:
      "Meet surging hiring demands with tailored RPO models designed for permanent placements or seasonal scaling. Our experts ensure exceptional speed, quality, and cost efficiency.",
    link: "/recruitment-process-outsourcing",
    imageSrc: "/images/home/recruitment_process_outsourcing.webp",
  },
  {
    id: "app-dev",
    icon: "/images/home/app_dev.svg",
    title: "App Development",
    description:
      "From startups to global enterprises, we build secure, scalable, and user-focused apps that fuel business growth. Brands like Swiggy, Open Money, and Yellow.ai trust us.",
    link: "/it-services",
    imageSrc: "/images/home/app_development.webp",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Existing Hero Section */}
      <section className="hero-sec relative overflow-hidden bg-gradient-to-br from-[#f6f8ff] to-[#fdfcff]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-40 text-center">
          <div className="hero-pill-mask">
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="hero-pill"
                  initial={{
                    rotateX: -90,
                    opacity: 0,
                    transformOrigin: "50% 50%",
                  }}
                  animate={{
                    rotateX: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotateX: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="hero-pill-mask">
                    <span className="hero-pill-text text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl my-4 py-6 font-bold text-center">
                      {rotatingTexts[index]}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <h1
            className={`${figtree.className} mt-6 text-2xl md:text-3xl lg:text-5xl text-[#1D2434] leading-tight`}
          >
            Services for Global Businesses
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
            We simplify sourcing, hiring, technology, and everything else in
            between.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0249BC] px-2 py-2 md:px-3 md:py-2 text-base font-medium  text-white shadow-lg hover:bg-[#0249BC] transition"
            >
              Schedule a Free Consultation
              <span className="text-xl">
                <Image
                  width={20}
                  height={40}
                  src="/images/home/arrow.svg"
                  alt="Arrow"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 150"
            className="w-full h-[150px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C720,100 720,100 1440,0 L1440,150 L0,150 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* New Services Section - Cloned from Supersourcing */}
      {/* Services Section - Left Sidebar Toggle + Right Dynamic Content */}
      <section className="py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16 lg:mb-24">
            <h4 className="text-3xl md:text-2xl lg:text-3xl font-bold text-[#1D2434]">
              Build, Scale, and Thrive with Supersourcing
            </h4>
            <p className="mt-6 max-w-2xl mx-auto text-md text-gray-600">
              From hiring top talent to building innovative solutions,
              Supersourcing simplifies growth with tailored strategies that
              deliver measurable impact.
            </p>
          </div>

          {/* Main Layout: Left Sidebar + Right Content */}
          <div className="hidden lg:block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* LEFT: TOGGLE (MERGED) */}
              <div className="lg:col-span-3 border-r border-gray-200/70">
                <div className="h-full py-10">
                  {services.map((service, idx) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(idx)}
                      className={`relative w-full flex items-center gap-4 px-8 py-5 text-left transition-all duration-300
              ${activeService === idx ? "bg-white/70" : "hover:bg-white/40"}
            `}
                    >
                      {/* Active Indicator */}
                      {activeService === idx && (
                        <span className="absolute left-0 top-0 h-full w-1 bg-[#0249BC] rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg
                ${activeService === idx ? "bg-[#0249BC]/10" : "bg-white"}
              `}
                      >
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={20}
                          height={20}
                          className={activeService === idx ? "" : "opacity-70"}
                        />
                      </div>

                      {/* Title */}
                      <span
                        className={`text-base font-semibold
                ${activeService === idx ? "text-[#0249BC]" : "text-[#1D2434]"}
              `}
                      >
                        {service.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              

              {/* RIGHT: CONTENT */}
              <div className="lg:col-span-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 px-12 py-16">
                      {/* TEXT */}
                      <div className="lg:col-span-5">
                        <h3 className="text-xl font-bold text-[#1D2434] mb-6">
                          {services[activeService].title}
                        </h3>

                        <p className="text-md text-gray-700 leading-relaxed mb-8">
                          {services[activeService].description}
                        </p>

                        <Link
                          href={services[activeService].link}
                          className="inline-flex items-center gap-3 rounded-lg bg-[#0249BC] px-5 py-2 text-md font-semibold text-white hover:bg-blue-700 transition"
                        >
                          Learn More
                          <span className="text-lg">
                            <Image
                              width={20}
                              height={10}
                              src="/images/home/arrow.svg"
                              alt="Arrow"
                            />
                          </span>
                        </Link>
                      </div>

                      {/* IMAGE */}
                      <div className="lg:col-span-7">
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200 pointer-events-none" />

                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                          <Image
                            src={services[activeService].imageSrc}
                            alt={`${services[activeService].title} preview`}
                            fill
                            className="object-cover "
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ===== MOBILE / TABLET (< LG) ===== */}
<div className="lg:hidden space-y-4">
  {services.map((service, idx) => {
    const isOpen = activeService === idx;

    return (
      <div
        key={service.id}
        className="rounded-2xl bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-white overflow-hidden"
      >
        {/* HEADER */}
        <button
          onClick={() => setActiveService(isOpen ? null : idx)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div className="flex items-center gap-3">
            <Image src={service.icon} alt="" width={22} height={22} />
            <span className="font-semibold text-[#0249BC]">
              {service.title}
            </span>
          </div>

          <span
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </button>

        {/* CONTENT */}
        {isOpen && (
          <div className="px-5 pb-6 space-y-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              {service.description}
            </p>

            <Link
              href={service.link}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0249BC] px-4 py-2 text-sm font-semibold text-white"
            >
              Learn More →
            </Link>

            {/* IMAGE */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={service.imageSrc}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>

        </div>
      </section>
    </>
  );
}

// "use client";

// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import "./Home.css";
// import { Figtree } from "next/font/google";
// import Image from "next/image";

// const figtree = Figtree({
//   subsets: ["latin"],
//   weight: ["700", "800", "900"],
//   display: "swap",
// });

// const rotatingTexts = [
//   "Recruitment Process Outsourcing",
//   "All Kinds of Hiring",
//   "Global Capability Center",
// ];

// export default function Home() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <section className="hero-sec relative overflow-hidden bg-gradient-to-br from-[#f6f8ff] to-[#fdfcff]">
//         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 text-center">
//           {/* Animated Gradient Pill */}
//           {/* <div className="hero-pill"> */}
//             <div className="hero-pill-mask">
//               <div className="flex justify-center">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={index}
//                     className="hero-pill"
//                     initial={{
//                       rotateX: -90,
//                       opacity: 0,
//                       transformOrigin: "50% 50%",
//                     }}
//                     animate={{
//                       rotateX: 0,
//                       opacity: 1,
//                     }}
//                     exit={{
//                       rotateX: 90,
//                       opacity: 0,
//                     }}
//                     transition={{
//                       duration: 0.28,
//                       ease: "easeInOut",
//                     }}
//                     style={{
//                       transformStyle: "preserve-3d",
//                     }}
//                   >
//                     <div className="hero-pill-mask">
//                       <span className="hero-pill-text text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl my-4 py-6 font-bold text-center">
//                         {rotatingTexts[index]}
//                       </span>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           {/* </div> */}

//           {/* Heading */}
//           <h1
//             className={`${figtree.className} mt-6 text-2xl md:text-3xl lg:text-5xl text-[#1D2434] leading-tight`}
//           >
//             Services for Global Businesses
//           </h1>

//           {/* Subheading */}
//           <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
//             We simplify sourcing, hiring, technology, and everything else in
//             between.
//           </p>

//           {/* CTA */}
//           <div className="mt-8 flex justify-center">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 rounded-lg bg-[#0249BC] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-blue-700 transition"
//             >
//               Schedule a Free Consultation
//               <span className="text-xl">
//                 <Image
//                   width={20}
//                   height={40}
//                   src="/images/home/arrow.svg"
//                   alt="Arrow"
//                 />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//           <svg
//             viewBox="0 0 1440 150"
//             className="w-full h-[150px]"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M0,0 C720,100 720,100 1440,0 L1440,150 L0,150 Z"
//               fill="white"
//             />
//           </svg>
//         </div>
//       </section>

//     </>
//   );
// }

//   {/* Services Section */}
//   <section id="services" className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
//         Our Core Services
//       </h3>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {[
//           {
//             icon: Users,
//             title: "AI-Driven Talent Acquisition",
//             desc: "Source top 2% pre-vetted developers for contract or full-time roles with AI matching.",
//           },
//           {
//             icon: Globe,
//             title: "Global Capability Centers (GCC)",
//             desc: "Launch your offshore center 30% faster with end-to-end support.",
//           },
//           {
//             icon: Code,
//             title: "App & Product Development",
//             desc: "Build secure, scalable apps with trusted expert teams.",
//           },
//           {
//             icon: HeadphonesIcon,
//             title: "Recruitment Process Outsourcing (RPO)",
//             desc: "Tailored outsourcing for high-volume permanent or seasonal hiring.",
//           },
//         ].map((service, i) => (
//           <div
//             key={i}
//             className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow"
//           >
//             <service.icon className="h-12 w-12 text-blue-900 mb-4" />
//             <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
//             <p className="text-gray-700 mb-6">{service.desc}</p>
//             <a
//               href="#"
//               className="text-blue-900 font-medium inline-flex items-center hover:underline"
//             >
//               Learn More <ChevronRight className="ml-1 h-4 w-4" />
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
//   {/* Stats / Trust Section */}
//   <section className="py-20 bg-blue-900 text-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h3 className="text-4xl font-bold text-center mb-12">Trusted by Industry Leaders</h3>
//       <div className="grid md:grid-cols-4 gap-8 text-center">
//         {[
//           { stat: "98%", label: "Joining Rate" },
//           { stat: "90%", label: "Faster Hiring" },
//           { stat: "40%", label: "Cost Savings" },
//           { stat: "8.5", label: "NPS Score" },
//         ].map((item, i) => (
//           <div key={i}>
//             <div className="text-5xl font-bold mb-2">{item.stat}</div>
//             <div className="text-xl">{item.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* How It Works */}
//   <section id="how-it-works" className="py-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h3>
//       <div className="grid md:grid-cols-3 gap-12">
//         {[
//           { step: "1", title: "Share Your Requirements", desc: "Book a free call – we understand your needs, tech stack, and culture fit." },
//           { step: "2", title: "Get Handpicked Profiles", desc: "Receive 5+ pre-vetted profiles within 48 hours." },
//           { step: "3", title: "Interview & Onboard Seamlessly", desc: "Interview, trial, and start working with dedicated support." },
//         ].map((item, i) => (
//           <div key={i} className="text-center">
//             <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
//               {item.step}
//             </div>
//             <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
//             <p className="text-gray-700">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* Why Us */}
//   <section id="why-us" className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Risiga Tech</h3>
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {[
//           "Top 2% Pre-Vetted Talent",
//           "50% Faster Project Delivery",
//           "40% Average Cost Savings",
//           "Risk-Free 2-Week Trial",
//           "Dedicated Account Manager",
//           "IP Protection & NDA",
//           "98% Joining Guarantee",
//           "24/7 Support",
//         ].map((benefit, i) => (
//           <div key={i} className="flex items-center gap-4">
//             <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
//             <span className="text-lg text-gray-800">{benefit}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* Testimonials */}
//   <section id="testimonials" className="py-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
//       <div className="grid md:grid-cols-3 gap-8">
//         {[
//           { name: "CTO, Fortune 500 Company", quote: "Risiga Tech transformed our hiring – 90% faster and top-quality talent." },
//           { name: "Founder, YC-Backed Startup", quote: "Best decision for scaling our engineering team remotely." },
//           { name: "Head of Engineering", quote: "Seamless process, great communication, and exceptional developers." },
//         ].map((t, i) => (
//           <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
//             <p className="text-gray-700 italic mb-6">{t.quote}</p>
//             <p className="font-semibold">{t.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
