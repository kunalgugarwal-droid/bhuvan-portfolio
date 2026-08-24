import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: spring },
  };

  return (
    <div className="relative min-h-screen bg-black pt-28 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-white">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-[20%] -mb-[10%] h-[600px] w-[600px] rounded-full bg-neutral-800/[0.1] blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.p variants={fadeInUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Get in Touch
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mb-8 text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              Let's craft <br className="hidden sm:block" /> something enduring.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-12 max-w-md text-lg leading-8 text-neutral-400">
              Whether you have a specific project in mind or are just beginning to explore possibilities, our team is ready to listen and provide strategic architectural guidance.
            </motion.p>

            <motion.div variants={staggerContainer} className="flex flex-col gap-8">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-800 bg-neutral-900">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">Studio HQ</h3>
                  <p className="text-neutral-400">124 Architecture Blvd, Suite 400<br />Bengaluru, Karnataka 560001<br />India</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">Phone</h3>
                  <p className="text-neutral-400">+91 98765 43210</p>
                  <p className="text-neutral-500 text-sm mt-1">Mon-Fri, 9am to 6pm IST</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">Email</h3>
                  <a href="mailto:hello@bhuvanarch.com" className="text-neutral-400 transition hover:text-white inline-flex items-center gap-1">
                    hello@bhuvanarch.com <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-950/50 blur-xl" />
            <div className="rounded-2xl border border-neutral-800 bg-black/40 p-8 backdrop-blur-2xl sm:p-12">
              <h2 className="mb-8 text-2xl font-black tracking-tight text-white">Send us a message</h2>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700"
                    placeholder="jane@company.com"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Service Needed</label>
                  <select
                    id="service"
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none [&>option]:bg-neutral-900"
                  >
                    <option value="architecture">Architectural Design</option>
                    <option value="mapping">2D & 3D Mapping (Autodesk)</option>
                    <option value="3d">3D Rendering</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700 resize-none"
                    placeholder="Tell us about your ambition, timeline, and location..."
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-neutral-200"
                >
                  Submit Inquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
