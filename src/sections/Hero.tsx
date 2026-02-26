"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Container from "@/src/components/Container";

const Hero = () => {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section ref={ref} className="relative h-auto md:h-[250vh] w-full z-0">

      <div className="relative md:sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">

        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)",
              opacity: 0.15,
              zIndex: 1
            }}
          />

          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '40px 40px',
              opacity: isDesktop ? 0.04 : 0.1,
              zIndex: 2
            }}
          />
        </div>

        <Container>
          <motion.div
            style={isDesktop ? { y, opacity, scale } : {}}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            >
              Redefining Excellence at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Paritrana Innovation
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
            >
              We build cutting-edge solutions designed to protect, empower, and scale your business in the digital age.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <Link href="#contact" className="liquid-button">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="liquid-text tracking-[2px] font-bold text-sm text-black">CONTACT US</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;