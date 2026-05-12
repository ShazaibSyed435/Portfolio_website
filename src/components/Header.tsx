import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-teal-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-teal-400 to-fuchsia-500 rounded-xl flex items-center justify-center font-bold text-lg text-white relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            SZ
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-400 to-fuchsia-500 rounded-xl -z-10 blur-lg opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-fuchsia-400 hidden sm:inline">
            Syed Shazaib
          </span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-fuchsia-400 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="text-slate-400 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:syedshazaib628@gmail.com"
            className="px-6 py-2 bg-gradient-to-r from-teal-500 to-fuchsia-500 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-teal-400"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {isOpen && (
        <motion.div
          className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-teal-500/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="flex items-center space-x-4 pt-4 border-t border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="https://github.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
