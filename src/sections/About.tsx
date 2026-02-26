"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from 'clsx';
import Container from "@/src/components/Container";
import { ArrowRight } from 'lucide-react';

const TextReveal = ({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) => {
  return (
    <span className="overflow-hidden inline-block align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: false }}
        className={clsx("inline-block", className)}
      >
        {text}&nbsp;
      </motion.span>
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const checkScreen = () => setIsDesktop(window.innerWidth >= 768);

  checkScreen(); 
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -150]);
const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      className={clsx(
        "relative w-full z-10 bg-white",
        "h-auto md:h-[300vh]",
        "mt-0 md:-mt-[100vh]",
        "clip-none md:[clip-path:ellipse(180%_100%_at_50%_100%)]"
      )}
    >

      <div className="relative md:sticky top-0 h-auto md:h-screen w-full overflow-hidden bg-slate-50 flex items-center">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] md:w-[120%] h-10 bg-black/5 blur-xl rounded-[100%]" />

        <Container className="relative z-10 pt-20 sm:pt-24 md:pt-32 pb-16 md:pb-0">
          
   <motion.div
  style={
    isDesktop
      ? { y: yTransform, opacity: opacityTransform, scale: scaleTransform }
      : { y: 0, opacity: 1, scale: 1 }
  }

            className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-12 items-center"
          >

            {/* IMAGE */}
            <div className="relative flex justify-center lg:justify-start">
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-white"
              >
                <img
                  src="/images/aboutsec.png"
                  alt="Paritrana Innovation"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="relative z-10 w-full h-full p-3 sm:p-4 flex flex-col justify-end">
                  <div className="bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-xl border border-slate-100 shadow-lg max-w-[200px] sm:max-w-[220px]">
                    <p className="text-blue-600 font-extrabold text-xl sm:text-2xl">10+</p>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm leading-tight">
                      Years of collective innovation
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-6 -right-6 w-32 sm:w-40 h-32 sm:h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            </div>

            {/* TEXT */}
            <div className="flex flex-col space-y-5 sm:space-y-6">
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight uppercase">
                {"Beyond Technology, We Build Solutions.".split(" ").map((word, i) => (
                  <TextReveal
                    key={i}
                    text={word}
                    delay={i * 0.05}
                    className={word.includes("Build") ? "text-blue-600" : ""}
                  />
                ))}
              </h2>

              <div className="text-slate-600 leading-relaxed text-base sm:text-lg flex flex-wrap">
                {"At Paritrana Innovation, our name reflects our core philosophy: to provide protection through progress. We engineer tools that bridge the gap between complex problems and seamless user experiences.".split(" ").map((word, i) => (
                  <TextReveal key={i} text={word} delay={0.2 + (i * 0.01)} className="text-slate-600" />
                ))}
              </div>

              {/* CARDS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ perspective: 1000 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4"
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    rotateY: 8,
                    rotateX: 2,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="p-4 sm:p-5 border-l-4 border-blue-600 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-300 rounded-r-xl cursor-default"
                >
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    Empowering industries with secure, scalable, and intuitive digital ecosystems.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -12,
                    rotateY: 8,
                    rotateX: 2,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="p-4 sm:p-5 border-l-4 border-indigo-500 bg-white shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 rounded-r-xl cursor-default"
                >
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    To become the global standard for innovation that prioritizes human impact.
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-2 sm:pt-4"
              >
                <a href="#contact" className="group text-blue-600 font-bold flex items-center gap-2 text-base sm:text-lg">
                  Meet the team behind the tech
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

            </div>

          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default About;