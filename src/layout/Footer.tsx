"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/src/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import clsx from "clsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(100);


  const footerLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { id: 'tw', icon: <FaXTwitter />, href: "#", class: "social-tw" },
    { id: 'ig', icon: <FaInstagram />, href: "#", class: "social-ig" },
    { id: 'li', icon: <FaLinkedinIn />, href: "#", class: "social-li" },
  ];

   useEffect(() => {
    const resizeText = () => {
      if (!footerRef.current || !textRef.current) return;

      const containerWidth = footerRef.current.offsetWidth;
      const containerHeight = footerRef.current.offsetHeight;

      textRef.current.style.fontSize = "100px";

      const textWidth = textRef.current.scrollWidth;
      const textHeight = textRef.current.scrollHeight;

      const scale = Math.min(containerWidth / textWidth, containerHeight / textHeight);

      setFontSize(100 * scale);
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => window.removeEventListener("resize", resizeText);
  }, []);

  return (
   <footer
      ref={footerRef}
      className="relative bg-[#f8f7f3] sm:pt-10 pb-10 sm:pb-12 overflow-hidden border-t border-black/5"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <h2
          ref={textRef}
          className="font-black uppercase whitespace-nowrap leading-none text-black/[0.03]"
          style={{ fontSize: `${fontSize}px` }}
        >
          Paritrana
        </h2>
      </div>

  <Container className="relative z-10">

    {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14 md:mb-20">

      {/* Brand */}
      <div className="sm:col-span-2 space-y-4 sm:space-y-6 text-center sm:text-left">
        <Link href="/" className="group relative flex items-center justify-center sm:justify-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-slate-900 flex overflow-hidden"
          >
            {"PARITRANA".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 30, opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.04,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  },
                  hover: {
                    y: -3,
                    color: "#0d9488",
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {char}
              </motion.span>
            ))}

            <motion.span
              variants={{
                initial: { scale: 0, opacity: 0 },
                animate: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.5, type: "spring", stiffness: 200 }
                },
                hover: {
                  scale: [1, 1.4, 1],
                  transition: { repeat: Infinity, duration: 0.6 }
                }
              }}
              className="text-teal-600 ml-1"
            >
              .
            </motion.span>
          </motion.div>
        </Link>

        <p className="text-slate-600 max-w-sm mx-auto sm:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
          Transforming digital visions into extraordinary experiences through
          innovation and precision.
        </p>
      </div>

     {/* Mobile responsive wrapper */}
<div className="sm:hidden flex justify-between w-full gap-6 mb-6">

  {/* Explore links */}
  <div className="flex-1 text-left">
    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-2">
      Explore
    </h4>
    <ul className="space-y-2">
      {footerLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-slate-500 hover:text-teal-600 transition-colors duration-300 text-xs uppercase tracking-tighter"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Connect */}
  <div className="flex-1 text-right">
    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs mb-2">
      Connect
    </h4>
    <ul className="space-y-2">
      <li>
        <a
          href="mailto:contact@paritrana.com"
          className="text-slate-500 hover:text-slate-900 transition-colors text-xs break-all"
        >
          contact@paritrana.com
        </a>
      </li>
      <li>
        <div className="flex justify-end gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              className={clsx(
                "social-link w-10 h-10 rounded-full border-2 border-white bg-white shadow-sm",
                social.class
              )}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="social-icon-spin text-base text-slate-800">
                  {social.icon}
                </span>
              </div>
            </a>
          ))}
        </div>
      </li>
    </ul>
  </div>

</div>

{/* Original Explore + Connect for desktop */}
<div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
  {/* Explore */}
  <div className="text-center sm:text-left">
    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">
      Explore
    </h4>
    <ul className="space-y-3 sm:space-y-4">
      {footerLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-slate-500 hover:text-teal-600 transition-colors duration-300 text-xs sm:text-sm uppercase tracking-tighter"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

 {/* Connect */}
<div className="text-center sm:text-left">
  <h4 className="text-slate-900 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">
    Connect
  </h4>
  <ul className="space-y-4">
    {/* Email */}
    <li>
      <a
        href="mailto:contact@paritrana.com"
        className="text-slate-500 hover:text-slate-900 transition-colors text-xs sm:text-sm break-words sm:break-normal"
      >
        contact@paritrana.com
      </a>
    </li>

    {/* Social icons */}
    <li>
     <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 pt-2">
  {socialLinks.map((social) => (
    <a
      key={social.id}
      href={social.href}
      className={clsx(
        "social-link aspect-square w-10 sm:w-12 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center",
        social.class
      )}
    >
      <span className="social-icon-spin text-base sm:text-xl text-slate-800 flex items-center justify-center">
        {social.icon}
      </span>
    </a>
  ))}
</div>
    </li>
  </ul>
</div>
</div>

    </div>

    {/* Bottom bar */}
    <div className="pt-6 sm:pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">

      <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
        © {currentYear} Paritrana Innovation. All rights reserved.
      </div>

      <div className="flex gap-6 sm:gap-8 text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
        <Link href="/privacy" className="hover:text-slate-900 transition-colors">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-slate-900 transition-colors">
          Terms
        </Link>
      </div>

    </div>
  </Container>
</footer>
  );
}