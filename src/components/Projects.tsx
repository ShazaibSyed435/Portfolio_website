import { Github, ExternalLink, Zap, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  metrics: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'SaaS Platform (MERN)',
      description: 'Built full production SaaS with multi-tenant architecture, JWT authentication, role-based access control, and comprehensive REST API layer.',
      impact: 'Delivered scalable platform handling enterprise-level data securely',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'REST API', 'Docker'],
      metrics: '100% uptime in production',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'WebRTC Audio/Video Calling',
      description: 'Engineered real-time peer-to-peer communication system with WebSocket signaling server and low-latency audio/video transmission.',
      impact: 'Live production communication product with reliable connection handling',
      tech: ['WebRTC', 'WebSockets', 'Deno', 'Signal Server', 'Peer-to-Peer'],
      metrics: '<100ms latency, 99.9% reliability',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Legal Document Automation',
      description: 'Python OCR pipeline with NLP processing for automated legal document handling, significantly reducing manual processing workload.',
      impact: 'Reduced manual document handling time by 70%+ for client operations',
      tech: ['Python', 'OCR', 'NLP', 'Tesseract', 'PDF Processing'],
      metrics: '70%+ time reduction, 95% accuracy',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'AI Workflow Automation Bot',
      description: 'Built n8n and Python-powered chatbot with webhook triggers for intelligent workflow automation, deployed to production handling thousands of interactions.',
      impact: 'Automated 1000s of daily interactions without manual intervention',
      tech: ['n8n', 'Python', 'Webhooks', 'AI', 'Automation'],
      metrics: '1000s interactions/day, 24/7 availability',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Database Optimization',
      description: 'Redesigned MongoDB and SQL schemas with strategic indexes and aggregation pipelines, dramatically improving query performance.',
      impact: 'Achieved 40% reduction in query latency across production systems',
      tech: ['MongoDB', 'MySQL', 'Indexing', 'Aggregation Pipeline', 'Query Optimization'],
      metrics: '40% latency reduction, major scalability improvement',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Web Scraping System',
      description: 'Large-scale web scraping automation using Selenium and Python, reliably extracting and processing thousands of data points.',
      impact: 'Automated data extraction eliminating manual scraping workload',
      tech: ['Python', 'Selenium', 'Web Scraping', 'Data Processing'],
      metrics: 'Processes thousands of records daily',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Key Projects & Achievements</h2>
          <p className="text-xl text-slate-300">
            Production-grade systems demonstrating full-stack expertise and measurable impact
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm p-6"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(20, 184, 166, 0.6)',
                boxShadow: '0 20px 60px rgba(20, 184, 166, 0.2)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-fuchsia-500/0 to-teal-500/0 opacity-0 group-hover:opacity-10"
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-teal-400 to-fuchsia-400 text-slate-900 mb-4 font-bold"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {project.icon}
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-slate-100 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <motion.div
                  className="mb-4 p-3 bg-gradient-to-r from-teal-500/20 to-fuchsia-500/20 rounded-lg border border-teal-500/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-teal-200 font-semibold">
                    Impact: {project.impact}
                  </p>
                </motion.div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-300 mb-2">Key Metrics</p>
                  <p className="text-sm text-slate-400">{project.metrics}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600/50 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.3)', borderColor: 'rgba(20, 184, 166, 0.6)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="flex items-center gap-3 pt-4 border-t border-slate-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Github size={18} className="text-teal-400" />
                  <span className="text-sm text-slate-400">View on GitHub</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-teal-600 via-fuchsia-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-teal-600 to-fuchsia-600 opacity-50"
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Want to see more projects?
            </motion.h3>

            <motion.p
              className="text-teal-100 mb-6 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Check out my GitHub for detailed code implementations, contributions, and open-source projects showcasing my development approach.
            </motion.p>

            <motion.a
              href={import.meta.env.VITE_GITHUB_URL}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold relative z-20"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Visit GitHub
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
