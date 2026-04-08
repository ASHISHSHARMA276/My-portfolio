import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="gradient-glow top-0 left-1/4 -translate-y-1/2" />
      <div className="gradient-glow bottom-0 right-1/4 translate-y-1/2 bg-blue-500/10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] mb-8"
        >
          <span className="block text-foreground">Ashish</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-cyan-400">
            Sharma
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          Senior Design Engineer. I craft digital experiences that live at the intersection of extreme performance and striking aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <div className="flex gap-4">
            <a href="#projects">
              <Button size="lg" className="h-14 px-8 text-base rounded-full group overflow-hidden relative shadow-[0_0_20px_hsla(var(--primary)/0.2)]">
                <span className="relative z-10 flex items-center">
                  Explore Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </a>
            
            <a href="#discord" className="inline-flex">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-card hover:bg-card hover:border-[#5865F2] hover:text-[#5865F2] transition-colors group">
                <SiDiscord className="mr-2 w-5 h-5 text-[#5865F2] group-hover:scale-110 transition-transform" />
                Join Discord
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}