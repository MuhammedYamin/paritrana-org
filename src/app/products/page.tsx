"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/Container";
import { Smartphone, Globe, ArrowRight, CheckCircle2, Shield, Download, ExternalLink } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
} as const;

export default function ProductsPage() {
  return (
    <main className="bg-[#f8f7f3] pt-32 sm:pt-28 md:pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-12">
        <Container>
          <div className="max-w-4xl">
            <motion.span
              {...fadeIn}
              className="text-teal-600 font-bold uppercase tracking-[0.4em] text-sm block mb-4"
            >
              Our Ecosystem
            </motion.span>
            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight whitespace-normal lg:whitespace-nowrap"
            >
              PRODUCTS BUILT
              <br className="block md:hidden" />
              <span className="text-slate-400 md:ml-4 lg:ml-6">FOR SCALE.</span>
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Mobile Product Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-y border-slate-200 overflow-hidden relative">
        <div className="absolute hidden lg:block lg:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full lg:w-auto">
          <h2 className="text-[20vw] font-black text-slate-900/[0.03] uppercase leading-none font-arena">
            Mobile
          </h2>
        </div>

        <Container className="max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">

            {/* Mobile App Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 bg-teal-500/[0.08] blur-[100px] rounded-full" />

              <div className="relative w-56 sm:w-64 md:w-72 h-[400px] sm:h-[500px] md:h-[540px] bg-slate-900 rounded-[3rem] border-[6px] sm:border-8 border-slate-800 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                <img
                  src="/images/app.png"
                  alt="Paritrana Mobile App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-12 top-24 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 hidden xl:flex flex-col z-30"
              >
                <div className="flex items-center gap-2 sm:gap-3 text-teal-600 font-bold text-[8px] sm:text-[10px] uppercase tracking-widest mb-1 sm:mb-2">
                  <Smartphone className="w-3 h-3" /> v2.4 Live
                </div>
                <div className="text-slate-900 font-bold text-xs sm:text-sm">Biometric Security</div>
                <div className="text-slate-400 text-[7px] sm:text-[9px]">Ready for iOS & Android</div>
              </motion.div>
            </motion.div>

            {/* Mobile Product Info */}
            <motion.div {...fadeIn} className="space-y-6 lg:pl-10">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-arena uppercase leading-tight">
                  Paritrana Mobile <br /> Core
                </h2>
                <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-[9px] sm:text-[10px]">
                  Enterprise Mobility Solution
                </p>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                "A pocket-sized powerhouse designed for high-frequency data interactions."
              </p>

              <ul className="space-y-3 sm:space-y-4 text-slate-600">
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" /> Real-time Cloud Synchronization
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" /> AES-256 End-to-End Encryption
                </li>
                <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" /> Custom Low-Latency API Framework
                </li>
              </ul>

              <button className="product-btn">
                <span className="box">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                  Download Specs
                </span>
              </button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Enterprise Web Portal Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Text Info */}
            <motion.div {...fadeIn} className="order-2 lg:order-1 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-arena uppercase leading-tight">
                Enterprise <br /> Web Portal
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                The definitive interface for complex data visualization and administrative control.
                Built with a modular architecture that adapts to your corporate infrastructure.
              </p>

              <button className="product-btn">
                <span className="box portal-box">
                  <ExternalLink className="w-4 h-4 text-teal-600" />
                  <span className="relative z-10">Access Portal Demo</span>
                </span>
              </button>
            </motion.div>

            {/* Portal Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="w-full aspect-video max-w-full sm:max-w-lg bg-white rounded-xl border-[4px] sm:border-[6px] border-slate-800 shadow-2xl overflow-hidden relative">
                <div className="w-full h-6 sm:h-8 bg-slate-800 flex items-center px-3 sm:px-4 gap-1 sm:gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <img
                  src="/images/webvi.png"
                  alt="Paritrana Web Interface"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 p-3 sm:p-4 bg-slate-900 text-white rounded-lg text-[8px] sm:text-[10px] font-mono tracking-tighter uppercase">
                Lighthouse Score: 100 // SSR Enabled
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}