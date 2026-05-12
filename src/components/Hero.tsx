import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-64 h-64 bg-fuchsia-500/30 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -50, 0], x: [0, -50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-fuchsia-500/20 border border-teal-500/30 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-teal-400" />
            <span className="text-sm font-semibold text-teal-300">Welcome to my portfolio</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <motion.span
              className="block text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Full Stack Developer &
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-fuchsia-400 to-teal-400 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI Systems Builder
            </motion.span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Results-driven developer with 1+ year of experience building production-grade MERN and Python applications. Specializing in scalable SaaS platforms, AI-powered systems, and real-time communication architectures.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'Node.js', 'Python', 'WebRTC', 'AI/ML'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium text-teal-300 border border-teal-500/30 hover:border-teal-500 transition-all backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(20, 184, 166, 0.2)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-semibold group relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-teal-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center">
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 text-slate-100 rounded-lg border-2 border-teal-500/30 hover:border-teal-500 transition-all font-semibold backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.2)', borderColor: 'rgba(20, 184, 166, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>

          <motion.a
            // href="/"
            href="/Syed_Shazaib_Zaheer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 text-slate-200 rounded-lg border border-slate-700 hover:border-fuchsia-500/50 transition-all font-semibold backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(217, 70, 239, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            download
          >
            <Download size={20} className="mr-2" />
            Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-slate-400 text-sm mb-8">Currently based in Islamabad/Rawalpindi, Pakistan</p>

          <motion.div
            className="inline-flex items-center justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '5+', label: 'Major Projects' },
              { value: '25+', label: 'Tech Skills' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
