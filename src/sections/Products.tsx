"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import clsx from 'clsx';
import Container from "@/src/components/Container";

const TextReveal = ({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) => {
  return (
    <span className="overflow-hidden inline-block align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: false }}
        className={clsx("inline-block", className)}
      >
        {text}&nbsp;
      </motion.span>
    </span>
  );
};

const products = [
  {
    title: "Shieldo",
    description: "A powerful mobile application designed to provide personal safety and instant emergency response at your fingertips.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    tag: "Mobile App",
    link: "#shieldo"
  },
  {
    title: "SafeCircle",
    description: "An interactive web platform that builds safer communities through real-time updates and collaborative neighborhood watch tools.",
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    tag: "Web Platform",
    link: "#safecircle"
  }
];

const ProductGrid = () => {
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

  return (
    <section
      ref={ref}
      className={clsx(
        "relative h-auto md:h-[300vh] z-20 bg-slate-50",
        "mt-0 md:-mt-[100vh]",
        "clip-none md:[clip-path:ellipse(180%_100%_at_50%_100%)]"

      )}
    >
      <div
        className="relative md:sticky top-0 h-screen w-full flex items-center overflow-hidden bg-white"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-black/5 blur-sm" />
        <Container className="relative z-10 pt-24 md:pt-32">
          <motion.div

            style={isDesktop ? { y, opacity, scale } : {}}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl md:max-w-none">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight uppercase md:whitespace-nowrap">
                  {"SOLUTIONS BUILT FOR A SAFER TOMORROW.".split(" ").map((word, i) => (
                    <TextReveal
                      key={i}
                      text={word}
                      delay={i * 0.05}
                      className={word.includes("SAFER") ? "text-blue-600" : ""}
                    />
                  ))}
                </h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-slate-600 text-lg"
                >
                  From personal protection to community connectivity, our ecosystems are built with your safety in mind.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a href="/products" className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Explore All Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: 1000 }}>
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  whileHover={{
                    y: -10,
                    rotateY: 6,
                    rotateX: 2,
                    scale: 1.01,
                  }}

                  className="group p-6 md:p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-colors duration-300 border-b-4 hover:border-b-blue-600 cursor-pointer"
                >
                  <div className="mb-5 inline-flex p-3 rounded-xl bg-white shadow-sm group-hover:bg-blue-50 transition-colors duration-300">
                    {React.cloneElement(product.icon as React.ReactElement<any>, {
                      className: "w-6 h-6 text-blue-600"
                    })}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>

                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default ProductGrid;