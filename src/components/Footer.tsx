import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-4 bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
              Syed Shazaib Zaheer
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer building scalable systems and AI-integrated solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 hover:text-teal-300 transition-colors block group relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="relative">
                    {link}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-fuchsia-400 w-0 group-hover:w-full transition-all"
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Download Resume', href: '/' },
                { label: 'GitHub Profile', href: 'https://github.com' },
                { label: 'LinkedIn Profile', href: 'https://linkedin.com' },
              ].map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.href}
                  className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  {resource.label}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex gap-4">
              {[
                { href: 'mailto:syedshazaib628@gmail.com', icon: Mail, label: 'Email' },
                { href: 'https://github.com', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/50 backdrop-blur-sm"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.3,
                    backgroundColor: 'rgba(20, 184, 166, 0.2)',
                    borderColor: 'rgba(20, 184, 166, 0.6)',
                    color: '#22d3ee',
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-slate-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; {currentYear} Syed Shazaib Zaheer. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400 font-semibold">React</span> + <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400 font-semibold">Framer Motion</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
