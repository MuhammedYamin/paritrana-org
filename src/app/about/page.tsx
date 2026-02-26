"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/Container";
import {  ArrowRight } from "lucide-react";

export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    } as const;

    return (
        <main className="bg-[#f8f7f3] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 overflow-hidden">

            {/* HERO */}
            <section className="mb-10 md:mb-12">
                <Container>
                    <div className="max-w-4xl">
                        <motion.span
                            {...fadeIn}
                            className="text-teal-600 font-bold uppercase tracking-[0.4em] text-sm block mb-4"
                        >
                            Our Identity
                        </motion.span>

                        <motion.h1
                            {...fadeIn}
                            transition={{ delay: 0.1 }}
                            className="
    text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold
    text-slate-900 leading-[1.1] tracking-tight
   whitespace-normal lg:whitespace-nowrap"
                        >
                            PRECISION IN
                            <br className="block md:hidden" />

                            <span className="text-slate-400 md:ml-4 lg:ml-6">
                                EVERY LAYER.
                            </span>
                        </motion.h1>
                    </div>
                </Container>
            </section>

            {/* METHODOLOGY */}
            <section className="bg-[#f1f5f9] py-10 md:py-12 text-slate-900 relative overflow-hidden border-y border-slate-200">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

                        {/* TEXT */}
                        <motion.div {...fadeIn} className="space-y-6 md:space-y-8">

                            <div className="space-y-3 md:space-y-4">
                                <span className="text-teal-600 font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-xs md:text-sm block">
                                    Our Foundation
                                </span>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-arena leading-tight">
                                    The Methodology of <br />
                                    Continuous Innovation
                                </h2>
                            </div>

                            <div className="flex justify-center w-full">
                                <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg font-light text-justify max-w-3xl md:max-w-4xl">
                                    <p>
                                        Paritrana Innovation Pvt Ltd stands at the intersection of high-fidelity engineering and purposeful design. Our approach is rooted in the philosophy that true innovation is not merely about novelty, but about the surgical precision required to solve the most complex structural and digital challenges of the modern era. Since our inception, we have dedicated ourselves to a rigorous research-driven framework that prioritizes scalability, security, and human-centric utility above all else.
                                    </p>
                                    <p>
                                        By integrating advanced proprietary technologies with a lean, agile methodology, Paritrana delivers products that don't just exist within a market—they redefine it. Our multidisciplinary teams work in a synchronized environment where mathematical logic meets creative intuition, ensuring that every line of code and every physical component serves a greater strategic purpose. We believe that the products of tomorrow are forged in the disciplined experiments of today, pushing the boundaries of what is technically possible to empower global enterprises and individuals alike.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 md:pt-6 border-t border-slate-200 flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-teal-500/30 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                </div>
                                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-slate-400">
                                    Certified Innovation Framework // Protocol 2026-X
                                </span>
                            </div>
                        </motion.div>

                        {/* IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="absolute -inset-2 md:-inset-4 border border-teal-500/10 rounded-[24px] md:rounded-[40px] translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 md:group-hover:translate-x-2 md:group-hover:translate-y-2 transition-transform duration-500" />

                            <div className="aspect-square w-full rounded-xl md:rounded-[16px] bg-slate-200 overflow-hidden shadow-2xl relative">
                                <img
                                    src="/images/about.png"
                                    alt="Paritrana Innovation Laboratory"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 md:translate-y-4 group-hover:translate-y-0">
                                    <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
                                        Interior // HQ Lab-01
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </section>

            {/* STATS */}
            <section className="py-10 md:py-12 bg-white relative overflow-hidden">
                <Container>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-10 lg:gap-x-16 w-full">
                        {[
                            { label: "Engineering Fidelity", val: "99.9%", sub: "Zero-Margin Accuracy" },
                            { label: "Innovation Cycles", val: "04", sub: "Proprietary Frameworks" },
                            { label: "Global Standards", val: "ISO+", sub: "Compliance Ready" },
                            { label: "Market Readiness", val: "Alpha", sub: "V01 Phase // 2026" },
                            { label: "Architecture Core", val: "NextGen", sub: "Scalable Infrastructure" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                transition={{ delay: i * 0.1 }}
                                className="relative group text-center lg:text-left"
                            >
                                <div className="hidden lg:block absolute -left-3 top-0 h-full w-[1px] bg-slate-100 group-hover:bg-teal-500 transition-colors duration-500" />

                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 tracking-tight font-arena">
                                    {stat.val}
                                </div>
                                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-teal-600 font-bold mb-2">
                                    {stat.label}
                                </div>
                                <p className="text-[8px] md:text-[9px] text-slate-400 uppercase tracking-widest font-medium">
                                    {stat.sub}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CULTURE */}
            <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center bg-[#f1f5f9] py-10 md:py-0">

                <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 hidden lg:block">
                    <h2 className="text-[8vw] font-black text-white leading-none uppercase select-none">
                        Innovation
                    </h2>
                </div>

                <Container className="relative z-10">
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full lg:w-1/2 space-y-5 md:space-y-8 text-center lg:text-left">

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                                Driven by Curiosity, Governed by Logic.
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                We combine engineering discipline with forward-thinking design to build systems that are
                                efficient, scalable, and future-ready...
                            </p>

                            <button className="group mx-auto lg:mx-0 flex items-center gap-3 md:gap-4 text-teal-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                                Discover Technology
                                <ArrowRight className="w-3 md:w-4 h-[2px] bg-teal-600 transition-all group-hover:w-6 md:group-hover:w-7" />
                            </button>

                        </div>
                    </div>
                </Container>
            </section>

        </main>
    );
}