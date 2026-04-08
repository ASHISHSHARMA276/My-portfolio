import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiGraphql } from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
  { name: 'React', icon: <SiReact className="w-8 h-8" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: 'Python', icon: <SiPython className="w-8 h-8" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" /> },
  { name: 'GraphQL', icon: <SiGraphql className="w-8 h-8" /> },
  { name: 'Docker', icon: <SiDocker className="w-8 h-8" /> }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative border-y border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I specialize in the modern web stack, prioritizing type safety, scalable architecture, and pixel-perfect UI execution.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-3 gap-4 md:gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl gap-4 hover:border-primary/50 hover:shadow-[0_0_20px_hsla(var(--primary)/0.2)] transition-all duration-300"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}