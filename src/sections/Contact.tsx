"use client";

import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

const Contact = () => {
    const ref = useRef(null);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            }
        }
    };

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

    return (
        <section
            ref={ref}
            className={clsx(
                "relative z-30 bg-white text-white py-20 md:py-32",
                "mt-0 md:-mt-[100vh]",
                "clip-none md:[clip-path:ellipse(180%_100%_at_50%_100%)]"
            )}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-slate-200" />

            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    className="max-w-6xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                >

                    <div className="lg:w-2/5 bg-gradient-to-br from-blue-700 to-indigo-900 p-12 text-white">
                        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6 text-white leading-tight">
                            Let's build something <br /> extraordinary.
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-blue-100/80 mb-12 leading-relaxed text-lg">
                            Have a specific challenge? Our team at Paritrana Innovation is ready to help you engineer the next big thing.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email us at", val: "hello@paritrana.com" },
                                { icon: Phone, label: "Call our office", val: "+1 (555) 000-0000" },
                                { icon: MapPin, label: "Visit us", val: "Innovation Hub, Tech City" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="flex items-center gap-5 group cursor-pointer"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                                            rotate: 5
                                        }}
                                        className="p-4 bg-white/10 rounded-xl border border-white/10 transition-colors group-hover:border-blue-300/50 shadow-lg"
                                    >
                                        <item.icon className="w-6 h-6 text-white transition-colors group-hover:text-blue-200" />
                                    </motion.div>

                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-wider text-blue-200/90">
                                            {item.label}
                                        </p>
                                        <p className="font-semibold text-lg text-white mt-1">
                                            {item.val}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-3/5 bg-white p-12">
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

                                <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                                    >
                                        Full Name
                                    </label>
                                </motion.div>

                                <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="select-arrow"
                                        >
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                                        </svg>
                                    </div>

                                    <div className="select-options-wrapper">
                                        <div>
                                            <input id="none" name="inquiry" type="radio" defaultChecked />
                                            <label className="select-option-label block" htmlFor="none">
                                                None / Skip
                                            </label>
                                        </div>

                                        <div>
                                            <input id="prod" name="inquiry" type="radio" />
                                            <label className="select-option-label block" htmlFor="prod">
                                                Product Partnership
                                            </label>
                                        </div>

                                        <div>
                                            <input id="gen" name="inquiry" type="radio" />
                                            <label className="select-option-label block" htmlFor="gen">
                                                General Inquiry
                                            </label>
                                        </div>

                                        <div>
                                            <input id="tech" name="inquiry" type="radio" />
                                            <label className="select-option-label block" htmlFor="tech">
                                                Technical Support
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative z-0 w-full group">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="block py-3 px-0 w-full text-lg text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute text-sm font-bold text-slate-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                                >
                                    Message...
                                </label>
                            </motion.div>

                            <motion.button
                                variants={itemVariants}
                                whileTap={{ scale: 0.95 }}
                                className="group relative w-full py-4 bg-slate-900 text-white font-bold rounded-xl overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-600 shadow-lg shadow-blue-900/10"
                            >
                                <div className="relative flex items-center justify-center transition-all duration-300 group-hover:translate-x-[5rem]">
                                    <div className="group-hover:animate-[fly_0.6s_ease-in-out_infinite_alternate]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="transition-transform duration-300 group-hover:translate-x-[0.1em] group-hover:rotate-45 group-hover:scale-110"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>

                                <span className="block ml-1 transition-all duration-300 group-hover:translate-x-[10rem]">
                                    Send Message
                                </span>
                            </motion.button>

                            <motion.p variants={itemVariants} className="text-center text-xs text-slate-400">
                                We respect your privacy. No spam, ever.
                            </motion.p>
                        </form>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;