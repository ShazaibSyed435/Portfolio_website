import { Code2, Server, Database, Cpu, Zap, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
  gradient: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Code2 size={24} />,
      title: 'Frontend',
      skills: ['React.js', 'JavaScript/ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'React Context API'],
      color: 'teal',
      gradient: 'from-teal-400 to-cyan-400',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'FastAPI', 'WebSockets'],
      color: 'emerald',
      gradient: 'from-emerald-400 to-teal-400',
    },
    {
      icon: <Database size={24} />,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Schema Design', 'Query Optimization', 'Vector Databases'],
      color: 'orange',
      gradient: 'from-orange-400 to-amber-400',
    },
    {
      icon: <Cpu size={24} />,
      title: 'Python & Automation',
      skills: ['Python', 'Selenium', 'Web Scraping', 'OCR Pipelines', 'n8n Automation', 'NLP'],
      color: 'fuchsia',
      gradient: 'from-fuchsia-400 to-pink-400',
    },
    {
      icon: <Zap size={24} />,
      title: 'Real-Time & AI',
      skills: ['WebRTC', 'AI Chatbots', 'RAG Systems', 'Vector Embeddings', 'Semantic Search'],
      color: 'rose',
      gradient: 'from-rose-400 to-fuchsia-400',
    },
    {
      icon: <Cloud size={24} />,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Linux/Nginx', 'VPS Deployment', 'Git/GitHub', 'cPanel', 'AWS basics'],
      color: 'cyan',
      gradient: 'from-cyan-400 to-blue-400',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-300">
            25+ technologies across full-stack development, from frontend to DevOps
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600 transition-all backdrop-blur-sm p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-fuchsia-500/0 to-teal-500/0 opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{ x: [0, 100, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} text-slate-900 mb-4 font-bold`}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {category.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-slate-100 mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-sm font-medium border border-slate-600/50 hover:border-slate-500 transition-all backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.2)', borderColor: 'rgba(20, 184, 166, 0.5)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity -z-10`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-teal-500/10 via-fuchsia-500/10 to-teal-500/10 rounded-2xl p-8 border border-teal-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-slate-100 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Core Competencies
          </motion.h3>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['MERN Stack', 'SaaS Architecture', 'Real-time Systems', 'AI Integration', 'Database Optimization', 'REST & GraphQL APIs', 'Docker & Deployment', 'Git & Agile'].map(
              (comp, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-gradient-to-r from-teal-400 to-fuchsia-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-slate-200 group-hover:text-teal-300 transition-colors">{comp}</span>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
