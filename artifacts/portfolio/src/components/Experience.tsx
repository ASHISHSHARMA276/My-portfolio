import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Senior Design Engineer",
    company: "Acme Studio",
    period: "2022 - Present",
    description: "Leading frontend architecture and design systems for enterprise clients. Bridging the gap between raw engineering and high-fidelity product design."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Nexus Labs",
    period: "2020 - 2022",
    description: "Built scalable microservices and dynamic React frontends. Implemented real-time data pipelines and reduced application latency by 40%."
  },
  {
    id: 3,
    role: "Frontend Engineer",
    company: "Stellar App",
    period: "2018 - 2020",
    description: "Developed core components for a SaaS platform used by 50k+ daily active users. Focused on performance optimization and accessibility."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0 md:border-none">
          {/* Timeline center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
          
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Desktop timeline node */}
                <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-4 border-background items-center justify-center shadow-[0_0_15px_hsla(var(--primary)/0.5)] z-10">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>

                {/* Mobile timeline node */}
                <div className="md:hidden absolute -left-4 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className="pl-6 md:pl-0 md:w-1/2 flex flex-col">
                  <div className={`p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <div className="flex items-center gap-2 text-sm text-primary mb-3 font-mono">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}