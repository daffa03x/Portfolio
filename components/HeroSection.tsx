"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ParticleBackground from "@/components/ParticleBackground";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Particles */}
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants}>
             <div className="inline-block mb-4">
                <span className="text-sm md:text-base font-semibold text-primary tracking-widest uppercase bg-primary/10 px-4 py-1 rounded-full border border-primary/20">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'UI/UX Enthusiast',
                      2000,
                      'Open Source Contributor',
                      2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
             </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6">
              Hi, I'm <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
                Daffa Putra Permana
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I am a passionate developer focusing on creating intuitive and dynamic user experiences. 
              Let's turn your ideas into reality.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
                href="#projects"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center"
            >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
             <Link
                href="#contact"
                className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm rounded-full font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
                Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
