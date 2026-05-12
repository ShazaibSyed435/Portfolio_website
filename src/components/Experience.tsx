import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface JobExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
}

export default function Experience() {
  const experiences: JobExperience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Global Link Pvt Ltd',
      period: 'Apr 2025 – Present',
      location: 'Rawalpindi, Pakistan',
      type: 'On-site',
      achievements: [
        'Led end-to-end development of MERN SaaS applications with production-grade scalability',
        'Built and integrated REST APIs using Node.js, Express, and Flask for third-party integrations',
        'Designed optimized SQL/NoSQL schemas achieving 40% reduction in query latency',
        'Engineered real-time audio calling feature using WebRTC and WebSocket signaling',
        'Developed Python automation solutions for document processing and web scraping',
        'Built AI chatbot systems using Python, n8n, and webhook integrations',
        'Managed production deployments on Linux VPS with Nginx and cPanel configurations',
      ],
    },
    {
      title: 'MERN Stack Developer (Intern)',
      company: 'Morosoft Labs',
      period: 'Nov 2024 – Mar 2025',
      location: 'Rawalpindi, Pakistan',
      type: 'On-site',
      achievements: [
        'Built full-stack features using React, Node.js, Express, and MongoDB within agile sprints',
        'Developed and integrated REST APIs for efficient frontend-backend data exchange',
        'Diagnosed and resolved critical backend bugs improving application stability',
        'Contributed to Git workflows including code reviews, pair debugging, and feature releases',
      ],
    },
  ];

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

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Work Experience</h2>
          <p className="text-xl text-slate-300">
            Building production systems and driving real business impact
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <motion.div
                className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-teal-500 via-fuchsia-500 to-teal-500 opacity-50"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ originY: 0 }}
              />

              <motion.div
                className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-r from-teal-400 to-fuchsia-400 rounded-full border-4 border-slate-950"
                whileHover={{ scale: 1.3, boxShadow: '0 0 30px rgba(20, 184, 166, 0.6)' }}
              />

              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-slate-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      className="text-lg bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {exp.company}
                    </motion.p>
                  </div>
                  <motion.span
                    className="inline-flex px-3 py-1 bg-gradient-to-r from-teal-500/20 to-fuchsia-500/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30 w-fit backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.type}
                  </motion.span>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-slate-400 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-teal-400" />
                    <span>{exp.location}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div key={achIndex} className="flex gap-3" variants={achievementVariants}>
                      <ArrowRight size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-200">{achievement}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-teal-500/10 via-fuchsia-500/10 to-teal-500/10 rounded-xl border border-teal-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: 'rgba(20, 184, 166, 0.6)' }}
        >
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
            >
              <Briefcase className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Open to Opportunities</h3>
              <p className="text-slate-300">
                Currently seeking junior to mid-level positions in Islamabad/Rawalpindi area where strong Node.js, React, and Python skills can drive real business impact. Available for remote work and relocations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
