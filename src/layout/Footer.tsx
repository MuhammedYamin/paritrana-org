"use client";
import React from "react";
import Container from "@/src/components/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import clsx from "clsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative bg-[#f8f7f3] pt-24 pb-12 overflow-hidden border-t border-black/5">

      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <h2 className="text-[18vw] font-black text-black/[0.03] uppercase leading-none">
          Paritrana
        </h2>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="group relative flex items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: false, amount: 0.5 }}
                className="text-2xl font-bold tracking-[0.3em] uppercase text-slate-900 flex overflow-hidden"
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

            <p className="text-slate-600 max-w-sm text-lg leading-relaxed">
              Transforming digital visions into extraordinary experiences through
              innovation and precision.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-teal-600 transition-colors duration-300 text-sm uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@paritrana.com" className="text-slate-500 hover:text-slate-900 transition-colors text-sm break-all">
                  contact@paritrana.com
                </a>
              </li>
              <li>
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      className={clsx(
                        "social-link w-12 h-12 rounded-full border-2 border-white bg-white shadow-sm",
                        social.class
                      )}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="social-icon-spin text-xl text-slate-800">
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

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            © {currentYear} Paritrana Innovation. All rights reserved.
          </div>

          <div className="flex gap-8 text-[10px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}