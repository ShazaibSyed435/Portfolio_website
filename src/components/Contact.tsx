import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'syedshazaib628@gmail.com',
      href: 'mailto:syedshazaib628@gmail.com',
      color: 'from-teal-400 to-cyan-400',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+92-316-9369613',
      href: 'tel:+923169369613',
      color: 'from-emerald-400 to-teal-400',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Islamabad / Rawalpindi, Pakistan',
      color: 'from-fuchsia-400 to-pink-400',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300">
            Have a project in mind? Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href || '#'}
                className="flex gap-4 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 text-slate-900 font-bold`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="pt-8 border-t border-slate-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-slate-100 mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {[
                  { href: 'https://github.com', icon: Github, label: 'GitHub' },
                  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/50 backdrop-blur-sm"
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: 'rgba(20, 184, 166, 0.2)',
                      borderColor: 'rgba(20, 184, 166, 0.6)',
                      color: '#22d3ee',
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitted && (
              <motion.div
                className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-emerald-300 font-semibold">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {[
              { id: 'name', label: 'Name', placeholder: 'Your name', type: 'text' },
              { id: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
              { id: 'subject', label: 'Subject', placeholder: 'Project details', type: 'text' },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor={field.id} className="block text-sm font-semibold text-slate-300 mb-2">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formState[field.id as keyof typeof formState]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all backdrop-blur-sm"
                  placeholder={field.placeholder}
                  required
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(20, 184, 166, 0.8)' }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none backdrop-blur-sm"
                placeholder="Tell me about your project..."
                required
                whileFocus={{ scale: 1.02, borderColor: 'rgba(20, 184, 166, 0.8)' }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-fuchsia-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
