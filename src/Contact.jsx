import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "*New Website Inquiry - Shree Arbuda Construction*",
      "",
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone || "Not provided"}`,
      `*Email:* ${formData.email}`,
      `*Details:* ${formData.message}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916375683147?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setStatus({
      type: "success",
      message: "Opening WhatsApp with your inquiry...",
    });
  };

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
                  <p className="text-neutral-400">Raniwara, Jalore<br />Rajasthan &ndash; 343048<br />India</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">Phone</h3>
                  <a href="tel:+916375683147" className="text-neutral-400 transition hover:text-white inline-flex items-center gap-1">
                    +91 63756 83147 <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <p className="text-neutral-500 text-sm mt-1">Mon-Fri, 9am to 6pm IST</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neutral-800 bg-neutral-900">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">Email</h3>
                  <a href="mailto:Bhuvansuthar6375@gmail.com" className="text-neutral-400 transition hover:text-white inline-flex items-center gap-1">
                    Bhuvansuthar6375@gmail.com <ArrowUpRight className="h-3 w-3" />
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
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-neutral-800 bg-transparent py-3 text-white transition focus:border-white focus:outline-none placeholder:text-neutral-700 resize-none"
                    placeholder="Tell us about your ambition, timeline, and location..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-md text-sm border ${
                      status.type === "success"
                        ? "bg-emerald-950/40 border-emerald-800/60 text-emerald-300"
                        : "bg-rose-950/40 border-rose-800/60 text-rose-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="group mt-4 inline-flex items-center justify-center gap-2.5 rounded-md bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-neutral-200 active:scale-[0.99] cursor-pointer"
                >
                  <svg
                    className="h-4 w-4 fill-current transition-transform group-hover:scale-110"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
