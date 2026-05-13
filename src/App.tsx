/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, Home, Grid, User, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 'monolith-apartment',
    title: 'MONOLITH APARTMENT',
    category: 'Architecture / Spatial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMAK9sNcRG2RQV_bEuJtYwzZVCBltFGInWNcHh7PittNhcYXlfKN9fFxY9qWcvoA8elrDifFtON7xg-8wB19aZi1FCHxOkSIS8cej-1BOlk57sejPlzKwWxFYGmNdBhQ_c4-cb6VxE8R_qcPCQ-5QxcEoIzvk799U7ssqsmNrNhRMS9s0SPfnQ1eElbvm5WoIasMkr3vNCV0pAf-dwBFJLNxb9_4OGZb7cvG6JERUbLWp7xpg0NorzGCmQXmXsi_YnHc2UThen1w',
    alt: 'Minimalist apartment building with clean lines'
  },
  {
    id: 'typography-archive',
    title: 'TYPOGRAPHY ARCHIVE',
    category: 'Editorial / Print',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoXNY92ZH_VjolJb-hXnvXCI1BPsyCKe3qGceqI6W-ACQSFNDlFHKRaLro3Ra2NGrYUYV_JzMUVBXeIMFbHPiHPCfmBR14yLgR8qnLxf-AhJeBdG0_InAX12a84Sj4iVpgUFRZkvggI8uKqi7vM-ZvJ5uMBg88UHqj1VibLGyPz_0dUaGjdFPoI5Q0a3Vn0F2Rx_aZevjaFkqAXX0Wr5yHzdPYW0J3z7i2uikV5EoNHqYUTqQ7FCBs4DTKYp70L-6AgmWqAa3gJQ',
    alt: 'Modernist typography and editorial layout design'
  },
  {
    id: 'temporal-identity',
    title: 'TEMPORAL IDENTITY',
    category: 'Branding / Identity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvisXpAcTRcqnKDHy16CfcXet_cnl-TCbPbSSLY0beFYGTFVB6U0UnVRIrEAixDk8JKuBEGLME5LVKSNNC4yOgv2aZ95BmLyskAGQ1dmd5WYAtGdj0bp14_pa_6_kFwKcUXPTtKfuFLXVtp0SuqxbZdpG8IgKHAfI_-XJ8q9NMPIS1SrqYEMNw7EMN_YvzcimW0_rtTmfTOB1cQmu4S6WZn7HUAGnl3N7oFfVQM_ot1iImVwGOe8I00z3S_ZzBJEHY7cuEGvkvyQ',
    alt: 'Luxury watch product photography'
  },
  {
    id: 'digital-canvas',
    title: 'DIGITAL CANVAS',
    category: 'Digital / Web UI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQbXWYP0DLH3BWy0V10NLZ8RmMSkxzY-QyqGZn8FN-hox_OjCvG3R9Kv7SlpchpnKkpxt0FXMWb7ev4i2TlQJitbhBvDWSHby-7YSFgYXNVvkoQDawDHu8jDop9IyfSPj2oJKCyFuXAg-XSZ8_GwosZ-_KtPxSm6snq-GhjI4RiDMK6YJoxdqzh7nviELukNdTRhhCbx3-FdyFAqr9Z024NNWZ-CWzYOGK0r6-75Phu120eQOj-EXgFNorXN5lnSLmw7MGM3wcSQ',
    alt: 'Cleanist website user interface on screen'
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-alabaster/80 backdrop-blur-md z-50 border-b border-charcoal/5">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button id="menu-toggle" className="hover:opacity-60 transition-opacity">
              <Menu size={24} strokeWidth={1.5} />
            </button>
            <span className="font-serif text-3xl tracking-tighter font-bold">JJnKn</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="body-md hover:text-gold transition-colors">Home</a>
            <a href="#" className="body-md font-bold border-b-2 border-gold py-1">Work</a>
            <a href="#" className="body-md hover:text-gold transition-colors">About</a>
            <a href="#" className="body-md hover:text-gold transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center">
            <button className="headline-sm hover:text-gold transition-colors">Contact</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-40 pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          {/* Hero Section */}
          <section className="mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="display-lg mb-6"
            >
              Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="body-lg text-slate max-w-2xl"
            >
              A curated selection of works defined by structural precision and editorial aesthetics.
            </motion.p>
          </section>

          {/* Project Grid */}
          <div className="flex flex-col gap-32">
            {projects.map((project, index) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-8 bg-charcoal/5">
                  <motion.img 
                    src={project.image} 
                    alt={project.alt}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
                  <h2 className="headline-md group-hover:text-gold transition-colors">{project.title}</h2>
                  <span className="label-caps text-slate">{project.category}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-charcoal/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="headline-sm tracking-widest font-bold">ARCHIVE</div>
          
          <div className="flex gap-8">
            {['Instagram', 'LinkedIn', 'Dribbble', 'Email'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="body-md text-slate hover:text-gold transition-colors hover:opacity-100"
              >
                {social}
              </a>
            ))}
          </div>

          <p className="body-md text-slate/50">
            © 2024 DESIGN ARCHIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-alabaster border-t border-charcoal/10 flex justify-around items-center px-4 z-50">
        <a href="#" className="flex flex-col items-center gap-1 text-slate">
          <Home size={20} />
          <span className="label-caps text-[10px]">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-charcoal border-t-2 border-gold pt-1">
          <Grid size={20} />
          <span className="label-caps text-[10px]">Work</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate">
          <User size={20} />
          <span className="label-caps text-[10px]">About</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-slate">
          <Mail size={20} />
          <span className="label-caps text-[10px]">Contact</span>
        </a>
      </nav>
    </div>
  );
}
