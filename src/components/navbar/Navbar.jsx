"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { name: "Company", path: "/", hasMenu: true },
  { name: "Hire Developers", path: "/", hasMenu: true },
  { name: "Offerings", path: "/", hasMenu: true },
  { name: "Case Studies", path: "/", hasMenu: false },
  { name: "Resources", path: "/", hasMenu: true },
];

const megaMenu = {
  Company: {
    left: [
      { title: "Customers", icon: "👥", href: "/customers" },
      { title: "Events", icon: "📅", href: "/events" },
      { title: "About Us", icon: "ℹ️", href: "/about" },
      { title: "Careers", icon: "💼", href: "/career" },
    ],
    right: {
      image: "/images/nav/company_nav.webp",
      title: "Human Relationships, Not Human Resources",
      desc: "Relationships are the real resource",
    },
  },
};

const hireDevelopersMenu = {
  skills: [
    {
      name: "React.js Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/react",
    },
    {
      name: "Python Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/python",
    },
    {
      name: "Angular Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/angular",
    },
    {
      name: "Full Stack Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/fullstack",
    },
    {
      name: "Salesforce Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/salesforce",
    },
    {
      name: "AI Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/ai",
    },
    {
      name: "SAP Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/sap",
    },
    {
      name: "Java Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/java",
    },
    {
      name: "Node.js Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/node",
    },
    {
      name: "Android Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/android",
    },
    {
      name: "Blockchain Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/blockchain",
    },
    {
      name: "PHP Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/php",
    },
    {
      name: "Flutter Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/flutter",
    },
    {
      name: "DevOps Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/devops",
    },
    {
      name: "Kotlin Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/kotlin",
    },
    {
      name: "Azure Developers",
      icon: "/images/job/angular.webp",
      href: "/hire/azure",
    },
  ],
  industries: [
    { name: "Healthcare", icon: "🩺", href: "/industry/healthcare" },
    { name: "Generative AI", icon: "🤖", href: "/industry/gen-ai" },
    { name: "Fintech", icon: "💳", href: "/industry/fintech" },
    { name: "Startups", icon: "🚀", href: "/industry/startups" },
  ],
};

const offeringsMenu = {
  explore: [
    { title: "Staffing", icon: "👥", href: "/offerings/staffing" },
    { title: "IT Services", icon: "💻", href: "/offerings/it-services" },
    { title: "GCC", icon: "🌍", href: "/offerings/gcc" },
    { title: "RPO", icon: "📋", href: "/offerings/rpo" },
  ],
  products: [{ title: "Hirium", icon: "🚀", href: "/products/hirium" }],
  right: {
    image: "/images/nav/offerings.webp", // replace with your image
    title: "The Smarter Way to Build, Scale, and Succeed",
    desc: "Relationships are the real resource",
  },
};

const resourcesMenu = {
  docs: [
    {
      title: "Blogs",
      icon: "/images/nav/blogs-icon.svg", // replace if needed
      href: "/blogs",
    },
    {
      title: "The Right Hire",
      icon: "/images/nav/right-hire-icon.svg",
      href: "/resources/the-right-hire",
    },
  ],
  right: {
    image: "/images/nav/resources.webp", // main card image
    title: "Ready to Hire Indian Tech Talent - Read This First",
    desc: "Trusted, pre-vetted Indian developers that fit your needs",
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        ${
          scrolled
            ? "bg-white/80 dark:bg-black/70 backdrop-blur-xs shadow-lg"
            : "bg-white/60 dark:bg-black/50 backdrop-blur-xl"
        }
        rounded-full px-10 pt-4 pb-2 min-w-[85vw] max-w-6xl
      `}
      >
        <nav className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/risiga_logo_tagline.webp"
              alt="Logo"
              width={110}
              height={40}
              className="dark:hidden"
              priority
            />
            <Image
              src="/images/logo/risiga_white_logo_tagline.webp"
              alt="Logo Dark"
              width={110}
              height={40}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1 relative list-none">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Nav link */}
                  <Link
                    href={item.path}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium
                              text-black dark:text-white leading-none"
                  >
                    <span className="flex items-center">{item.name}</span>

                    {/* Dropdown arrow */}
                    {item.hasMenu && (
                      <span className="flex items-center justify-center ml-0.5">
                        {hoveredItem === item.name ? (
                          <ChevronUp size={16} strokeWidth={2} />
                        ) : (
                          <ChevronDown size={16} strokeWidth={2} />
                        )}
                      </span>
                    )}
                  </Link>

                  {/* Hover underline */}
                  <span
                    className={`absolute left-4 right-4 -bottom-1 h-[3px] rounded-full bg-violet-600
                      transition-all duration-300
                      ${
                        hoveredItem === item.name
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }
                    `}
                  />

                  <AnimatePresence>
                    {/* ================= COMPANY (UNCHANGED) ================= */}
                    {item.name === "Company" &&
                      hoveredItem === item.name &&
                      megaMenu.Company && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-[130%] left-0 w-[560px]
                        bg-white dark:bg-neutral-800 rounded-2xl shadow-xl
                        border border-gray-200 dark:border-gray-700 p-6 z-50"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <p className="text-xs uppercase text-gray-400 mb-2">
                                Explore Our Company
                              </p>

                              {megaMenu.Company.left.map((m) => (
                                <Link
                                  key={m.title}
                                  href={m.href}
                                  className="flex items-center gap-3 p-3 rounded-xl
                                hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black dark:text-white"
                                >
                                  <span className="text-xl">{m.icon}</span>
                                  <span className="font-medium">{m.title}</span>
                                </Link>
                              ))}
                            </div>

                            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-black dark:text-white">
                              <Image
                                src={megaMenu.Company.right.image}
                                alt="Preview"
                                width={320}
                                height={180}
                                className="rounded-xl object-cover"
                              />
                              <h4 className="mt-4 font-semibold">
                                {megaMenu.Company.right.title}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">
                                {megaMenu.Company.right.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    {/* ================= HIRE DEVELOPERS ================= */}
                    {item.name === "Hire Developers" &&
                      hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 16 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="fixed top-[100%] left-0 max-w-screen
                      bg-white dark:bg-neutral-800 rounded-2xl shadow-xl
                      border-t border-gray-200 dark:border-gray-700
                      z-50 p-6"
                        >
                          {/* BY SKILLS */}
                          <p className="text-xs uppercase text-gray-400 mb-6">
                            By Skills
                          </p>

                          <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                            {hireDevelopersMenu.skills.map((skill) =>
                              skill.href ? (
                                <Link
                                  key={skill.name}
                                  href={skill.href}
                                  className="flex items-center gap-3 text-sm hover:text-violet-600 transition text-black dark:text-white/80"
                                >
                                  {skill.icon?.endsWith(".webp") ? (
                                    <Image
                                      src={skill.icon}
                                      alt={skill.name}
                                      width={32}
                                      height={32}
                                    />
                                  ) : (
                                    <span className="text-xl">
                                      {skill.iconAlt}
                                    </span>
                                  )}
                                  <span className="font-medium">
                                    {skill.name}
                                  </span>
                                </Link>
                              ) : null
                            )}

                            {/* <Link
                              href="/hire"
                              className="flex items-center gap-2 text-violet-600 font-medium"
                            >
                              See all 50+ Skills →
                            </Link> */}
                          </div>

                          <div className="my-8 h-px bg-gray-200 dark:bg-gray-800" />

                          {/* BY INDUSTRY */}
                          <p className="text-xs uppercase text-gray-400 mb-4">
                            By Industry
                          </p>

                          <div className="grid grid-cols-4 gap-6">
                            {hireDevelopersMenu.industries.map((industry) => (
                              <Link
                                key={industry.name}
                                href={industry.href}
                                className="flex items-center gap-3 p-4 rounded-xl
                              border border-gray-200 dark:border-gray-700
                              hover:shadow-md transition text-black dark:text-white/80"
                              >
                                <span className="text-xl">{industry.icon}</span>
                                <span className="font-medium">
                                  {industry.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}

                    {/* ================= OFFERINGS ================= */}
                    {item.name === "Offerings" && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-[130%] left-1/2 -translate-x-1/2
                        w-[700px] bg-white dark:bg-neutral-800 rounded-3xl shadow-xl
                        border border-gray-200 dark:border-gray-700 p-6 z-50"
                      >
                        <div
                          className="grid gap-8"
                          style={{ gridTemplateColumns: "25% 25% 40%" }}
                        >
                          {/* LEFT — EXPLORE OFFERINGS */}
                          <div>
                            <p className="text-xs uppercase text-gray-400 mb-4">
                              Explore Offerings
                            </p>

                            <div className="space-y-3">
                              {offeringsMenu.explore.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-xl
                                  hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black dark:text-white/80"
                                >
                                  <span className="text-xl">{item.icon}</span>
                                  <span className="font-medium">
                                    {item.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* MIDDLE — PRODUCTS */}
                          <div>
                            <p className="text-xs uppercase text-gray-400 mb-4">
                              Products
                            </p>

                            {offeringsMenu.products.map((product) => (
                              <Link
                                key={product.title}
                                href={product.href}
                                className="flex items-center gap-3 p-3 rounded-xl
                                hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black dark:text-white/80"
                              >
                                <span className="text-xl">{product.icon}</span>
                                <span className="font-medium">
                                  {product.title}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT — IMAGE CARD */}
                          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
                            <Image
                              src={offeringsMenu.right.image}
                              alt="Offerings Preview"
                              width={320}
                              height={200}
                              className="rounded-xl object-cover"
                            />
                            <h4 className="mt-4 font-semibold text-black dark:text-white/80">
                              {offeringsMenu.right.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {offeringsMenu.right.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ================= RESOURCES ================= */}
                    {item.name === "Resources" && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-[130%] left-1/2 -translate-x-1/2
                          w-[560px] max-w-[90vw] bg-white dark:bg-neutral-800 rounded-2xl shadow-xl
                          border border-gray-200 dark:border-gray-700 p-6 z-50"
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {/* LEFT — DOCS */}
                          <div className="space-y-3">
                            <p className="text-xs uppercase text-gray-400 mb-2">
                              Docs
                            </p>

                            {resourcesMenu.docs.map((doc) => (
                              <Link
                                key={doc.title}
                                href={doc.href}
                                className="flex items-center gap-3 p-3 rounded-xl
                                  hover:bg-gray-100 dark:hover:bg-gray-800 transition text-black dark:text-white"
                              >
                                <Image
                                  src={doc.icon}
                                  alt={doc.title}
                                  width={24}
                                  height={24}
                                />
                                <span className="font-medium">{doc.title}</span>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT — IMAGE + TITLE + DESCRIPTION */}
                          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-black dark:text-white">
                            <Image
                              src={resourcesMenu.right.image}
                              alt="Resource Preview"
                              width={320}
                              height={180}
                              className="rounded-xl object-cover"
                            />
                            <h4 className="mt-4 font-semibold">
                              {resourcesMenu.right.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              {resourcesMenu.right.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm rounded-full bg-gradient-to-r from-black to-zinc-700 text-white hover:scale-105 transition-transform"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full bg-black text-white dark:bg-white dark:text-black transition"
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
      </motion.header>

      {/* ================= Mobile Bottom Sheet ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-800 rounded-t-3xl p-8"
            >
              <div className="w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-8" />

              <div className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className="text-2xl font-semibold text-black dark:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 text-center py-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
