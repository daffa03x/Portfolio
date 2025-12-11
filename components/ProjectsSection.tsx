"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Project } from "@/types";
import Tilt from "react-parallax-tilt";

const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for building things.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === category
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background border-border text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {/* Projects Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                  <Tilt 
                    tiltMaxAngleX={10} 
                    tiltMaxAngleY={10} 
                    scale={1.05} 
                    transitionSpeed={2500}
                    className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full"
                  >
                        <div className="relative h-56 w-full overflow-hidden">
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center space-x-4">
                                <a 
                                    href={project.repoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background/20 backdrop-blur-md rounded-full hover:bg-background/40 text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 border border-white/20"
                                    title="View Code"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a 
                                    href={project.demoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background/20 backdrop-blur-md rounded-full hover:bg-background/40 text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 border border-white/20"
                                    title="View Live Demo"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                        </div>

                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        <div className="absolute top-3 right-3 z-20">
                            <span className="px-3 py-1 text-xs font-semibold bg-black/60 text-white rounded-full backdrop-blur-md border border-white/10">
                                {project.category}
                            </span>
                        </div>
                        </div>

                        <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                        </div>
                  </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
