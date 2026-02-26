"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/src/components/Container";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";


const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
} as const;


const itemVariants: Variants = {
    hidden: {
        y: 30,
        opacity: 0,
        scale: 0.98
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export default function ContactPage() {
    return (
        <main className="bg-[#f8f7f3] pt-32 pb-20">
            <section className="mb-12">
                <Container>

                    <div className="max-w-4xl">
                        <motion.span
                            {...fadeIn}
                            className="text-teal-600 font-bold uppercase tracking-[0.4em] text-sm block mb-4"
                        >
                            Connect with us
                        </motion.span>
                        <motion.h1
                            {...fadeIn}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 leading-[1.1] tracking-tight whitespace-normal lg:whitespace-nowrap"
                        >
                            LET'S ENGINEER
                            <br className="block md:hidden" />
                            <span className="text-slate-400 md:ml-4 lg:ml-6">THE FUTURE.</span>
                        </motion.h1>

                    </div>
                </Container>
            </section>

            <section className="py-24 bg-white border-y border-slate-200 overflow-hidden relative">

                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden"
                        >
                            <form className="flex-1 flex flex-col justify-between relative z-10 min-h-[550px]">
                                <div className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                        <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="name"
                                                className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                                            >
                                                Full Name
                                            </label>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="email"
                                                className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                                            >
                                                Work Email
                                            </label>
                                        </motion.div>
                                    </div>

                                    <motion.div variants={itemVariants} className="space-y-2 relative">
                                        <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                                            Inquiry Type
                                        </label>

                                        <div className="custom-select-container">
                                            <div className="select-selected">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="select-arrow">
                                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                                </svg>
                                            </div>
                                            <div className="select-options-wrapper">
                                                <div>
                                                    <input id="none" name="inquiry" type="radio" defaultChecked />
                                                    <label className="select-option-label block" htmlFor="none">None / Skip</label>
                                                </div>
                                                <div>
                                                    <input id="prod" name="inquiry" type="radio" />
                                                    <label className="select-option-label block" htmlFor="prod">Product Partnership</label>
                                                </div>
                                                <div>
                                                    <input id="gen" name="inquiry" type="radio" />
                                                    <label className="select-option-label block" htmlFor="gen">General Inquiry</label>
                                                </div>
                                                <div>
                                                    <input id="tech" name="inquiry" type="radio" />
                                                    <label className="select-option-label block" htmlFor="tech">Technical Support</label>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer resize-none"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor="message"
                                            className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                                        >
                                            Your Message
                                        </label>
                                    </motion.div>
                                </div>

                                <div className="pt-12 relative mb-15 lg:mb-30">
                                    <motion.button
                                        variants={itemVariants}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative z-20 w-48 py-3.5 bg-slate-900 text-white font-bold rounded-xl overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 hover:bg-teal-600 shadow-lg shadow-teal-900/10"
                                    >
                                        <div className="relative flex items-center justify-center transition-all duration-300 group-hover:translate-x-[3.5rem]">
                                            <div className="group-hover:animate-[fly_0.6s_ease-in-out_infinite_alternate]">
                                                <svg viewBox="0 0 24 24" width="18" height="18" className="transition-transform duration-300 group-hover:translate-x-[0.4em] group-hover:rotate-45 group-hover:scale-110">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="block text-[10px] uppercase tracking-[0.2em] transition-all duration-300 group-hover:translate-x-[8rem]">
                                            Send Message
                                        </span>
                                    </motion.button>
                                </div>
                            </form>

                            <div className="absolute -bottom-1 lg:bottom-0 -left-0 pointer-events-none select-none z-0 opacity-[0.03]">
                                <h2 className="text-[75px] md:text-[100px] lg:text-[160px] font-black uppercase font-arena leading-none text-slate-900">
                                    Connect
                                </h2>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-5 space-y-12"
                        >
                            {/* Contact Cards */}
                            <div className="space-y-8">
                                {[
                                    { icon: Mail, label: "Electronic Mail", val: "solutions@paritrana.com" },
                                    { icon: Phone, label: "Global Support", val: "+1 (555) 000-1234" },
                                    { icon: MapPin, label: "Innovation HQ", val: "Tech Enclave, Silicon Square, IN" },
                                    { icon: Clock, label: "Response Time", val: "Within 24 Business Hours" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1">{item.label}</p>
                                            <p className="text-slate-900 font-bold">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative w-full aspect-video rounded-[32px] bg-slate-200 overflow-hidden border border-slate-200">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping absolute" />
                                        <div className="w-4 h-4 bg-teal-500 rounded-full relative" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-6">
                                    <p className="text-[10px] font-mono text-slate-500 uppercase">Coord: 12.9716° N, 77.5946° E</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

        </main>
    );
}