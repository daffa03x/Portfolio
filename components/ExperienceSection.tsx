"use client";

import { motion } from "framer-motion";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and academic background.
          </p>
        </div>

        <div className="space-y-12">
            {/* Work Experience */}
            <div>
                <div className="flex items-center mb-8">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
                </div>

                <div className="relative border-l-2 border-border ml-6 space-y-12">
                    {EXPERIENCE_DATA.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="ml-8 relative"
                        >
                            {/* Dot on line */}
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            
                            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-foreground">{item.role}</h4>
                                    <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full w-fit mt-2 sm:mt-0">
                                        {item.period}
                                    </span>
                                </div>
                                <h5 className="text-lg font-medium text-muted-foreground mb-4">{item.company}</h5>
                                
                                <ul className="list-disc list-outside ml-4 space-y-2 mb-6 text-muted-foreground">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {item.tech.map((tech) => (
                                        <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <div className="flex items-center mb-8">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>

                <div className="relative border-l-2 border-border ml-6 space-y-12">
                    {EDUCATION_DATA.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="ml-8 relative"
                        >
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-purple-500" />
                            
                            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-foreground">{item.institution}</h4>
                                    <span className="text-sm font-medium text-violet-500 px-3 py-1 bg-violet-500/10 rounded-full w-fit mt-2 sm:mt-0">
                                        {item.period}
                                    </span>
                                </div>
                                <h5 className="text-lg font-medium text-muted-foreground mb-1">{item.degree}</h5>
                                {item.gpa && (
                                    <p className="text-sm text-muted-foreground">GPA: <span className="font-semibold text-foreground">{item.gpa}</span></p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
