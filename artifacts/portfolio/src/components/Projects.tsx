import React from 'react';
import { motion } from 'framer-motion';
import { Music, Globe, Truck, Server, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Floovi Music',
    description: 'A fully-featured music streaming platform built for artists and listeners. Stream, discover, and share music with a sleek modern interface.',
    tech: ['React', 'Vercel', 'Music API', 'Tailwind'],
    icon: <Music className="w-6 h-6 text-primary" />,
    color: 'from-primary to-purple-500',
    link: 'https://floovi-music.vercel.app/',
    badge: 'Live on Vercel'
  },
  {
    id: '2',
    title: 'Floovi',
    description: 'The main Floovi platform — a hub connecting creators, listeners, and communities. Smooth UI with real-time features and a clean experience.',
    tech: ['React', 'Netlify', 'JavaScript', 'CSS'],
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: 'from-blue-400 to-cyan-400',
    link: 'https://floovi.netlify.app/',
    badge: 'Live on Netlify'
  },
  {
    id: '3',
    title: 'Ashoka Transolutions',
    description: 'A professional logistics and transport solutions website. Clean, business-grade web presence for a real-world transport company.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web'],
    icon: <Truck className="w-6 h-6 text-orange-400" />,
    color: 'from-orange-400 to-amber-400',
    link: 'https://www.ashokatransolutions.com/',
    badge: 'Production'
  },
  {
    id: '4',
    title: 'Floovi Hosting',
    description: 'A hosting service platform built and deployed on Render. Provides reliable hosting infrastructure with a modern management interface.',
    tech: ['Node.js', 'Render', 'Hosting', 'Backend'],
    icon: <Server className="w-6 h-6 text-green-400" />,
    color: 'from-green-400 to-emerald-500',
    link: 'https://floovi-hosting.onrender.com/',
    badge: 'Live on Render'
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
            Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Not mock-ups. Not templates. These are live, deployed products built from scratch and used by real people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`card-project-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer block"
            >
              {/* Top gradient accent line */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${project.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground border border-border/50 px-2 py-1 rounded-full bg-background/50">
                      {project.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
