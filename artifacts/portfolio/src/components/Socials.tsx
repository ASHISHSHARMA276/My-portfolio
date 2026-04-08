import React from 'react';
import { motion } from 'framer-motion';
import { SiDiscord, SiInstagram, SiGithub } from 'react-icons/si';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Socials() {
  const socials = [
    {
      name: 'Discord',
      handle: 'Join the server',
      icon: <SiDiscord className="w-6 h-6" />,
      link: 'https://discord.gg/esvKEEBwCJ',
      color: 'hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2]'
    },
    {
      name: 'Instagram',
      handle: '@i_.m_ashish',
      icon: <SiInstagram className="w-6 h-6" />,
      link: 'https://www.instagram.com/i_.m_ashish?igsh=bmFsdmFiNmM4Z3l6',
      color: 'hover:border-transparent hover:text-white hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]'
    },
    {
      name: 'GitHub',
      handle: '@ASHISHSHARMA276',
      icon: <SiGithub className="w-6 h-6" />,
      link: 'https://github.com/ASHISHSHARMA276',
      color: 'hover:bg-[#24292e] hover:text-white hover:border-[#24292e]'
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">something</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to connect.
              I'm currently open for new opportunities.
            </p>
            
            <div className="flex gap-4">
              <a href="mailto:developerashishofficial@gmail.com">
                <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-[0_0_30px_hsla(var(--primary)/0.3)]">
                  <Mail className="mr-2 w-5 h-5" />
                  developerashishofficial@gmail.com
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-6 bg-card border border-border rounded-2xl transition-all duration-300 ${social.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-muted-foreground group-hover:text-current transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{social.name}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-current/80 transition-colors">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-current transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
