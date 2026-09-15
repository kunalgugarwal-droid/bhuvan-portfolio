import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, CheckCircle2 } from "lucide-react";

const sectionMotion = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
};

const coverageAreas = [
  "Jalore & surrounding districts",
  "Sirohi & Mount Abu region",
  "Barmer & western Rajasthan",
  "Pali & Jodhpur corridor",
];

export default function ServiceArea() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: "spring", stiffness: 50, damping: 18 }}
      className="relative overflow-hidden bg-neutral-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Subtle radial gradient background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, white 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* ── Left Column — Text & Info ── */}
          <div className="flex flex-col">
            <motion.p
              variants={fadeInUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500"
            >
              Coverage
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl"
            >
              Our Service Area
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mb-10 max-w-lg text-lg leading-8 text-neutral-400"
            >
              Based in Raniwara, Jalore, Rajasthan (343048), Shree Ambuda
              Construction proudly operates within a 100km radius. We bring our
              premium construction and mapping services directly to your site.
            </motion.p>

            {/* ── Stat Card ── */}
            <motion.div
              variants={fadeInUp}
              className="mb-10 flex items-center gap-5 rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900">
                <Navigation className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-4xl font-black tracking-tight text-white">
                  100<span className="text-neutral-500">km</span>
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-400">
                  Service Radius from Raniwara
                </p>
              </div>
            </motion.div>

            {/* ── Coverage Areas List ── */}
            <motion.ul variants={fadeInUp} className="flex flex-col gap-3">
              {coverageAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neutral-500" />
                  <span className="text-base">{area}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right Column — Map ── */}
          <motion.div variants={fadeInUp} className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neutral-700/30 via-transparent to-neutral-700/20 blur-sm" />

            <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              {/* Map label */}
              <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/80 px-4 py-3 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-neutral-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Raniwara, Jalore — Rajasthan
                </span>
                <span className="ml-auto inline-block h-2 w-2 rounded-full bg-green-500/80 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
              </div>

              {/* Map iframe — dark-mode filtered */}
              <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.82565609424!2d72.0463133!3d24.7505297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce4e3da8f8ea7%3A0x6b4f76231945110!2sRaniwara%2C%20Rajasthan%20343040!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Raniwara, Jalore — Shree Ambuda Construction service area"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    filter:
                      "invert(90%) hue-rotate(180deg) contrast(0.8) saturate(0.2)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
