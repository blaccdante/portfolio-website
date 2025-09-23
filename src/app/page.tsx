"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download, Palette, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { GitHubRepos } from "@/components/GitHubRepos";
import { MediaGallery } from "@/components/MediaGallery";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = ['About', 'Skills', 'Projects', 'Contact'];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold text-white"
            >
              Oreofe Daniel Oladepo
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors hover:scale-105 transform"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-white/10"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item, i) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors py-2 px-4 hover:bg-white/10 rounded-lg"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-size-200 animate-gradient">
                Software Engineer
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 block sm:inline bg-size-200 animate-gradient">
                <span className="hidden sm:inline text-white">{" "}| </span>
                <span className="sm:hidden text-white">& </span>
                Animator
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Passionate software engineer with expertise in full-stack development, Web3 technologies, and creative animation. 
              Building scalable applications and innovative digital experiences that merge engineering excellence with artistic vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/blaccdante"
                target="_blank"
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all min-h-[48px] touch-manipulation"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/BlaccdanteCv.pdf"
                target="_blank"
                className="flex items-center justify-center space-x-2 bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 transition-all shadow-lg hover:shadow-white/25 min-h-[48px] touch-manipulation font-medium"
              >
                <Download size={20} />
                <span className="font-medium">Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto mb-6 sm:mb-8"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">Software Engineer & Creative Technologist</h3>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Currently working as a Software Engineer at Manny Business Consult since April 2020, where I direct IT operations 
                  and develop full-stack applications using React.js, Node.js, and Express.js. I specialize in designing 
                  RESTful/GraphQL APIs, database optimization, and ensuring high-performance, scalable solutions.
                </p>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  With a Bachelor&apos;s degree in Computer Science from Babcock University, I combine strong engineering fundamentals 
                  with creative skills in animation and Web3 technologies. I&apos;ve successfully built DeFi platforms, NFT marketplaces, 
                  and bridge aggregators while maintaining a passion for digital art and creative expression.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mt-6 sm:mt-8">
                <a href="mailto:dannysoawesome@gmail.com" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg touch-manipulation" aria-label="Email">
                  <Mail size={24} />
                </a>
                <a href="http://linkedin.com/in/oreofe-oladepo-623595233" target="_blank" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg touch-manipulation" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/blaccdante" target="_blank" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg touch-manipulation" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://www.behance.net/50b26f29" target="_blank" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg touch-manipulation" aria-label="Behance">
                  <Palette size={24} />
                </a>
                <a href="https://linktr.ee/blaccinferno" target="_blank" className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg touch-manipulation" aria-label="Linktree">
                  <ExternalLink size={24} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <MediaGallery />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-black/20">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto mb-6 sm:mb-8"></div>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Here are some of my recent projects showcasing my skills and creativity
            </p>
          </motion.div>
          
          <GitHubRepos />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto mb-6 sm:mb-8"></div>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-2">
              I&apos;m always interested in new opportunities and interesting projects. Let&apos;s connect!
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm sm:text-base px-2">
            © {new Date().getFullYear()} Oreofe Daniel Oladepo. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
