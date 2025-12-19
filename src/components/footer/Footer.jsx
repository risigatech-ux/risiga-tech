import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-semibold text-white mb-4">{title}</h4>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="relative inline-block text-white/70
                         transition-colors duration-300
                         hover:text-white group"
            >
              {link.label}

              {/* underline */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white
                           transition-all duration-300 ease-out
                           group-hover:w-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ---------- Footer ---------- */
const Footer = () => {
  return (
    <footer className="bg-[#343537] border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo + Social */}
          <div>
            <Image
              src="/images/logo/risiga_white_logo_tagline.webp"
              alt="Risiga"
              width={150}
              height={40}
            />

            <div className="text-[16px] font-semibold text-white mt-4">
              Follow us
            </div>

            <div className="flex gap-4 mt-4">
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaInstagram, label: "Instagram" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={i}
                  aria-label={label}
                  className="flex items-center justify-center
                 w-10 h-10 rounded-lg
                 bg-white/10 text-white/70
                 hover:bg-white hover:text-[#014ABA]
                 transition-all duration-300
                 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Talent"
            links={[
              { label: "Browse remote jobs", href: "/jobs" },
              { label: "Get hired", href: "/career" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[{ label: "Blog", href: "/blogs" }]}
          />

          <FooterColumn
            title="Solutions"
            links={[
              { label: "Technology Hiring", href: "/services" },
              { label: "Advisory & Consulting", href: "/consulting" },
              { label: "Recruitment Process Outsourcing", href: "/rpo" },
              { label: "Managed Service Provider", href: "/msp" },
              { label: "Global Capability Center", href: "/gcc" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "About us", href: "/about" },
              { label: "Contact us", href: "/contact" },
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div
          className="max-w-7xl mx-auto px-6 py-4
                  flex flex-col md:flex-row
                  justify-between text-sm text-white/60"
        >
          <span>
            © {new Date().getFullYear()} Risiga Tech. All rights reserved.
          </span>

          <Link
            href="/termsandcondition"
            className="relative inline-block hover:text-white group"
          >
            Terms & conditions
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import Image from "next/image";
// import Link from "next/link";
// import { FaInstagram } from "react-icons/fa";
// import { BiLogoFacebook } from "react-icons/bi";
// import { FaLinkedin } from "react-icons/fa";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
// import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import styles from "./Footer.module.css"; // Adjust the path if necessary

// const Footer = () => {
//   return (
//     <footer className={`${styles.footerMain} text-[#f1f5f9] py-10 pt-20 bg-[#014ABA]`}>
//       {/* 4DA3FF */}
//       <div className="container mx-auto px-5">
//         <div className="flex flex-wrap -mx-4">
//           {/* Logo Section */}
//           <div className="w-full md:w-[35%] xl:w-1/4 px-4 mb-8 md:mb-0">
//             <div className="mb-4 text-center md:text-left">
//               <Image
//                 src="/images/logo/risiga_white_logo_tagline.webp"
//                 alt="Risiga Logo"
//                 width={170} // Adjust width as needed
//                 height={40} // Adjust height as needed
//                 className="h-10 mb-8 mx-auto md:mx-0 cursor-pointer"
//                 rel="preload"
//                 loading="eager"
//                 priority
//               />
//               <p className="mb-3 text-[16px]">
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
//                 consectetur consequatur autem. Maiores enim fugiat iste laborum,
//                 rem distinctio! Laboriosam, recusandae quas error qui ratione
//                 dolorum beatae enim iure, voluptatum accusamus culpa! Pariatur
//                 veritatis totam est quaerat autem sequi sint aperiam mollitia
//                 aut, vitae sapiente amet corrupti repellendus magnam sit!
//               </p>
//             </div>
//           </div>

//           {/* Explore Section */}
//           <div className=" md:w-[20%] xl:w-1/4 w-2/4 px-4 mb-8 md:mb-0 flex justify-center md:justify-end">
//             <div className="mb-4 text-center md:text-left">
//               <h3 className="mb-8 text-lg font-semibold">Explore</h3>
//               <ul className="list-none cursor-pointer">
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/about" rel="preload">
//                     About
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/services" rel="preload">
//                     Services
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/career" rel="preload">
//                     Career
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/blogs" rel="preload">
//                     Blog
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Resources Section */}
//           <div className="w-2/4 md:w-[20%] xl:w-1/4 px-4 mb-8 md:mb-0 flex justify-center md:justify-center">
//             <div className="mb-4 text-center md:text-left">
//               <h3 className="mb-8 text-lg font-semibold">Legal</h3>
//               <ul className="list-none cursor-pointer">
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/privacypolicy" rel="preload">
//                     Privacy policy
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/termsandcondition" rel="preload">
//                     Terms & conditions
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/refundpolicy">Refund Policy</Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/cookiespolicy" rel="preload">
//                     Cookies Policy
//                   </Link>
//                 </li>
//                 <li className={`${styles.underlineonhover} mb-3 `}>
//                   <Link href="/faqs" rel="preload">
//                     FAQs
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Get In Touch Section */}
//           <div className="w-full md:w-[25%] xl:w-1/4 px-4 text-center md:text-left flex justify-center items-center md:justify-normal md:items-start sm:text-center">
//             <div>
//               <h3 className="text-lg font-semibold mb-8">Get In Touch</h3>
//               <div className="text-start">
//                 <div className="md:ml-0 ml-8">
//                   <p className="mb-5 font-[500]">
//                     <HiOutlineBuildingOffice2
//                       style={{ fontSize: "25px" }}
//                       className="inline mr-1 ml-[-30px]"
//                     />
//                     RISIGA TECHNOLOGY PRIVATE LIMITED
//                   </p>
//                   <div className="inline mb-5">
//                     <IoLocationOutline
//                       style={{ fontSize: "25px" }}
//                       className="inline mr-1 ml-[-30px]"
//                     />
//                     Central Mall (Nexus), 6th Floor, Office no. 9, RNT Marg,
//                     Indore, Madhya Pradesh 452010
//                   </div>
//                   <div className="mb-4 mt-5">
//                     <div className="mb-1 text-[#ffffff]">
//                       <MdOutlinePhoneInTalk
//                         style={{ fontSize: "25px" }}
//                         className="inline mr-1 ml-[-30px]"
//                       />
//                       <div className="inline">
//                         Sales:{" "}
//                         <Link
//                           href="tel:+91XXXXXXXXXX"
//                           className="text-[#ffffff] hover:underline font-[600]"
//                           rel="preload"
//                         >
//                           +91 XXXXXXXXXX
//                         </Link>
//                       </div>
//                     </div>
//                     <p className="mb-1 text-[#ffffff] mt-5">
//                       <MdOutlineMail
//                         style={{ fontSize: "25px" }}
//                         className="inline mr-1 ml-[-30px]"
//                       />
//                       Email:{" "}
//                       <Link
//                         href="mailto:contact@risigatech.com"
//                         className="text-[#ffffff] hover:underline font-[600]"
//                         rel="preload"
//                       >
//                         contact@risigatech.com
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-b mt-5"></div>
//       <div className="py-5">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             {/* Copyright text */}
//             <p
//               className="text-sm md:text-base text-center md:text-left mb-3 md:mb-0"
//               style={{ color: "#d9dee4" }}
//             >
//               &#169; {new Date().getFullYear()}, RISIGA TECHNOLOGY PRIVATE
//               LIMITED All rights reserved.
//             </p>

//             {/* Social Icons */}
//             <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 md:gap-8">
//               {/* Image Row */}
//               <div className="flex flex-row items-center justify-center gap-4">
//                 <Image
//                   src="/images/staruo-india.jpeg"
//                   alt="startup-india"
//                   width={150}
//                   height={50}
//                   loading="lazy"
//                   className="cursor-pointer"
//                   style={{ width: "auto", height: "50px", borderRadius: "8px" }}
//                 />
//                 <Image
//                   src="/images/make_in_India.webp"
//                   alt="Make In India"
//                   width={150}
//                   height={50}
//                   loading="lazy"
//                   className="cursor-pointer"
//                   style={{ width: "auto", height: "50px", borderRadius: "8px" }}
//                 />
//               </div>

//               {/* Social Icons Row */}
//               <div className="flex flex-row items-center justify-center gap-4 mt-2 md:mt-0">
//                 <Link
//                   rel="noreferrer"
//                   href="https://www.instagram.com/_risiga_technology"
//                   target="_blank"
//                   aria-label="instagram"
//                 >
//                   <FaInstagram className={styles.socialicon} />
//                 </Link>
//                 <Link
//                   rel="noreferrer"
//                   href="https://www.facebook.com/risigatechpvt"
//                   target="_blank"
//                   aria-label="facebook"
//                 >
//                   <BiLogoFacebook className={styles.socialicon} />
//                 </Link>
//                 <Link
//                   rel="noreferrer"
//                   href="https://www.linkedin.com/company/risiga-tech/"
//                   target="_blank"
//                   aria-label="linkedin"
//                 >
//                   <FaLinkedin className={styles.socialicon} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
