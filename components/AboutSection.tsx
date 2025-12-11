"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { SKILLS } from "@/lib/data";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bioVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };


  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div variants={bioVariants} className="relative group">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/50">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20 -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              I am a <strong>Fullstack Web Developer</strong> and Informatics Engineering graduate with over two years of experience in developing and maintaining web applications. 
              My expertise spans <strong>HTML, CSS, JavaScript, PHP, Laravel, Next.js, and MySQL</strong>.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Currently working as a Fullstack Developer at <strong>PT Yooka Arana Niaga</strong>, I focus on implementing efficient, innovative technological solutions that are user-experience oriented. 
              I have a proven track record of optimizing system performance and building robust feature sets for HRIS and donation platforms.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border/50 shadow-sm hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
