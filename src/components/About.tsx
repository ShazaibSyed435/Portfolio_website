import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    'Full stack MERN development with production-grade architecture',
    'Python automation and AI system integration',
    'Real-time communication systems (WebRTC, WebSockets)',
    'Database optimization achieving 40% performance gains',
    'Linux VPS deployment and DevOps management',
    'Agile workflow and collaborative development',
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A results-driven developer passionate about building scalable systems and solving complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a Full Stack Developer with proven expertise in building production-grade MERN and Python applications. My journey in tech is driven by a passion for solving real-world problems through elegant code and scalable architecture.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              At Global Link, I led end-to-end development of SaaS platforms, architecting everything from frontend interfaces to backend infrastructure. I'm comfortable owning the full development lifecycle and thrive in collaborative environments.
            </p>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div key={index} className="flex items-start gap-3" variants={itemVariants}>
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-200">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-500 to-fuchsia-500 rounded-2xl blur-2xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-teal-400 uppercase mb-2">Primary Stack</h3>
                  <p className="text-slate-200">React, Node.js, Express, MongoDB, Python</p>
                </motion.div>

                <motion.div
                  className="border-t border-slate-700 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-teal-400 uppercase mb-2">Specializations</h3>
                  <p className="text-slate-200">SaaS Architecture, Real-time Systems, AI Integration, Database Optimization</p>
                </motion.div>

                <motion.div
                  className="border-t border-slate-700 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-teal-400 uppercase mb-2">Current Role</h3>
                  <p className="text-slate-200">Full Stack Developer at Global Link Pvt Ltd</p>
                </motion.div>

                <motion.div
                  className="border-t border-slate-700 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-teal-400 uppercase mb-2">Location</h3>
                  <p className="text-slate-200">Islamabad / Rawalpindi, Pakistan</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
