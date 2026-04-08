import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Layers } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPython } from 'react-icons/si';

const projects = [
  {
    id: '1',
    title: 'Neon Protocol',
    description: 'A high-performance decentralized exchange interface built for speed and precision. Features real-time charting, order book matching, and sub-millisecond updates.',
    tech: ['React', 'TypeScript', 'Tailwind', 'WebSockets'],
    icon: <Cpu className="w-6 h-6 text-primary" />,
    color: 'from-primary to-purple-500'
  },
  {
    id: '2',
    title: 'Void Analytics',
    description: 'Dark-mode first analytics dashboard for AI models. Visualizes token usage, latency metrics, and inference quality across thousands of concurrent requests.',
    tech: ['Next.js', 'Framer Motion', 'PostgreSQL', 'D3.js'],
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: '3',
    title: 'Syntax Studio',
    description: 'A beautiful, collaborative code editor embedded in the browser. Supports real-time cursors, syntax highlighting for 40+ languages, and direct deployment.',
    tech: ['React', 'Node.js', 'Yjs', 'Monaco'],
    icon: <Code className="w-6 h-6 text-pink-500" />,
    color: 'from-pink-500 to-rose-400'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A showcase of engineering precision and deliberate design. I build applications that are as beautiful under the hood as they are on the screen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden"
            >
              {/* Decorative top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}