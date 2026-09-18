import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowUpRight } from "lucide-react";
import heroVideo from "../../intro video/lv_0_20260917114100.mp4";

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

function Reveal({ children, className = "", delay = 0, amount = 0.25 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-32 text-center sm:px-6 lg:px-8"
    >
      {/* Fullscreen Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Shree Arbuda Construction Hero Showcase Video"
      >
        <source src={heroVideo} type="video/mp4" />
        <source src="/intro video/lv_0_20260917114100.mp4" type="video/mp4" />
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark Overlay Gradients for Contrast & Legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Centered Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-300 sm:text-sm">
              Architecture / 2D & 3D Mapping / Urban Strategy
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting the next generation of properties and communities.
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
            Shree Arbuda Construction is a premium architecture studio designing precise, memorable places
            for living, hospitality, culture, and long-term urban growth.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-9">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="group flex min-w-36 items-center justify-center gap-1.5 rounded-md bg-white px-6 py-4 text-sm font-bold text-black transition-all duration-200 hover:bg-neutral-200 sm:min-w-40"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/services"
              className="min-w-36 rounded-md border border-white/80 bg-black/40 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white hover:text-black sm:min-w-40"
            >
              Our Services
            </Link>
            <a
              href="tel:+916375683147"
              className="flex min-w-36 items-center justify-center gap-2.5 rounded-md border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/40 hover:bg-white/20 sm:min-w-40"
            >
              <Phone className="h-4 w-4 text-white" />
              <span>+91 63756 83147</span>
            </a>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}

export { Hero };
