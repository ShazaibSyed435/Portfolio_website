import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "syedshazaib628@gmail.com",
      href: "mailto:syedshazaib628@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 316 9369613",
      href: "tel:+923169369613",
    },
    {
      icon: MapPin,
      label: "Based",
      value: "Islamabad / Rawalpindi, PK",
    },
    {
      icon: Github,
      label: "GitHub",
      value: import.meta.env.VITE_GITHUB_URL.replace("https://", "").replace("www.", ""),
      href: import.meta.env.VITE_GITHUB_URL,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: import.meta.env.VITE_LINKEDIN_URL.replace("https://", "").replace("www.", ""),
      href: import.meta.env.VITE_LINKEDIN_URL,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-8 md:p-14"
        >
          <div className="grid lg:grid-cols-2 gap-7 items-center">
            {/* Left Content */}
            <div>
              <motion.p
                className="text-sm tracking-[0.3em] uppercase text-teal-400 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                ✦ 04 — Let&apos;s Build
              </motion.p>

              <motion.h2
                className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Have a system to ship?
                {/* <span className="block bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent"> */}
                <span className="block bg-gradient-to-r from-teal-400 via-fuchsia-400 to-teal-400 bg-clip-text text-transparent">
                  Let&apos;s talk.
                </span>
              </motion.h2>

              <motion.p
                className="mt-8 text-lg leading-8 text-slate-400 max-w-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Open to junior-mid full-stack roles in Islamabad /
                Rawalpindi, plus freelance MERN, Python automation,
                and AI integration projects.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:syedshazaib628@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-teal-400 via-fuchsia-400 to-teal-400 px-6 py-4 text-slate-950 font-semibold shadow-lg shadow-teal-500/20 transition-all hover:scale-105"
                >
                  <Mail size={18} />
                  syedshazaib628@gmail.com
                </a>

                <a
                  href="tel:+923169369613"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-6 py-4 text-white font-semibold transition-all hover:border-teal-400 hover:text-teal-300"
                >
                  <Phone size={18} />
                  +92 316 9369613
                </a>
              </motion.div>
            </div>

            {/* Right Contact Cards */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    // href={item.href || "#"}
                    target={item.href?.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-3 backdrop-blur-md transition-all hover:border-teal-500/40 hover:bg-slate-900/80"
                  >
                    <div className="flex items-center gap-4">
                      {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-teal-400 border border-slate-700 group-hover:border-teal-500/50"> */}
                        <Icon className=" text-teal-400" size={20} />
                      {/* </div> */}
                      {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-teal-400 border border-slate-700 group-hover:border-teal-500/50">
                        <Icon size={20} />
                      </div> */}

                      <span className="text-slate-400 text-sm sm:text-base">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-right text-sm sm:text-base font-medium text-white ">
                      {item.value}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}