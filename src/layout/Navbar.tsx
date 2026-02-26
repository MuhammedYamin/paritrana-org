"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/src/components/Container";
import clsx from "clsx";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setScrolled(current > 20);

            if (!open) {
                if (current < 20) {
                    setShow(true);
                } else if (current > lastScroll) {
                    setShow(false);
                } else {
                    setShow(true);
                }
            } else {
                setShow(true);
            }

            setLastScroll(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll, open]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
    ];

    const menuVariants: Variants = {
        initial: { x: "100%", opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
            }
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -120, opacity: 0 }}
                animate={{
                    y: (show || open) ? 0 : -120,
                    opacity: (show || open) ? 1 : 0
                }}
                transition={{
                    duration: loaded ? 0.35 : 0.8,
                    delay: loaded ? 0 : 0.2,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="
                    fixed left-1/2 top-3 md:top-4 z-50
                    w-full max-w-7xl -translate-x-1/2
                    px-3 sm:px-4 md:px-6
                "
            >
                <div
                    className={clsx(
                        "rounded-xl md:rounded-2xl transition-all duration-300",
                        scrolled
                            ? "bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg"
                            : "bg-transparent border-transparent shadow-none"
                    )}
                >
                    <Container>
                        <div className="flex items-center justify-between h-14 sm:h-16">

                            {/* LOGO */}
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}  
                                className="flex items-center h-full"
                            >
                                <div className="
                                    relative 
                                    right-14 h-50 sm:right-10 sm:h-52 md:right-8 md:h-44 
                                    w-58 sm:w-52 md:w-46
                                ">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Paritrana Innovation"
                                        fill
                                        className="
                                            object-contain
                                            scale-100 sm:scale-110 md:scale-125
                                        "
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* DESKTOP NAV */}
                            <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-black">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="group relative inline-block"
                                    >
                                        <span
                                            className="
                                                relative pb-1
                                                text-sm lg:text-base xl:text-lg
                                                font-medium tracking-widest
                                                text-black whitespace-nowrap
                                                antialiased
                                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full 
                                                after:origin-bottom-right after:scale-x-0 after:bg-black 
                                                after:transition-transform after:duration-300 after:ease-out
                                                group-hover:after:origin-bottom-left group-hover:after:scale-x-100
                                            "
                                        >
                                            {link.name}
                                        </span>
                                    </Link>
                                ))}
                            </nav>

                            {/* RIGHT SIDE */}
                            <div className="flex items-center gap-2 sm:gap-4">

                                {/* CTA */}
                                <div className="hidden md:block relative w-[200px] h-16">

                                    <Link
                                        href="/contact"
                                        className=
                                        "absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-transparent border-none cursor-pointer py-2 pr-10"

                                    >
                                        <span className="
                group relative pb-1 text-lg font-medium tracking-widest text-black whitespace-nowrap
                /* The magic fix: subpixel-antialiasing prevents 'shaking' */
                antialiased
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full 
                after:origin-bottom-right after:scale-x-0 after:bg-black 
                after:transition-transform after:duration-300 after:ease-out
                hover:after:origin-bottom-left hover:after:scale-x-100
            ">
                                            Get in Touch

                                            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                                                <svg
                                                    id="arrow-horizontal"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="11"
                                                    viewBox="0 0 46 16"
                                                    className="
                            fill-black 
                            -rotate-45 
                            transition-all duration-300 ease-in-out
                            group-hover:rotate-0
                        "
                                                >
                                                    <path
                                                        d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                                        transform="translate(30)"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </span>
                                    </Link>
                                </div>

                                {/* MOBILE MENU BUTTON */}
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="relative z-50 w-10 h-10 flex items-center justify-center md:hidden"
                                >
                                    <span className={`bar top ${open ? "open" : ""}`} />
                                    <span className={`bar middle ${open ? "open" : ""}`} />
                                    <span className={`bar bottom ${open ? "open" : ""}`} />
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
            </motion.header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
                    >
                        <div className="flex flex-col h-full justify-between px-6 sm:px-10 pt-24 sm:pt-32 pb-10 sm:pb-12">

                            {/* LINKS */}
                            <nav className="flex flex-col gap-5 sm:gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="text-2xl sm:text-3xl md:text-4xl font-light hover:font-semibold transition-all text-black"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setOpen(false)}
                                        className="text-2xl sm:text-3xl md:text-4xl font-light hover:font-semibold transition-all text-black"
                                    >
                                        Get in Touch →
                                    </Link>
                                </motion.div>
                            </nav>

                            {/* SOCIAL */}
                            <div className="flex flex-col gap-6">
                                <div className="h-[1px] w-full bg-gray-300" />

                                <div className="flex items-center gap-6 sm:gap-8 text-black">
                                    <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform"><FaInstagram /></a>
                                    <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform"><FaXTwitter /></a>
                                    <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform"><FaLinkedinIn /></a>
                                    <a href="#" className="text-xl sm:text-2xl hover:scale-110 transition-transform"><FaWhatsapp /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}