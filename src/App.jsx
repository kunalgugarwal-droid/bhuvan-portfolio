import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Box,
  Building2,
  Phone,
  Ruler,
  Star,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects / Portfolio", href: "#projects" },
  { label: "About Us / The Studio", href: "#experience" },
  { label: "Services / Expertise", href: "#services" },
  { label: "Contact", href: "/contact" },
];

const spring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const sectionMotion = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const featuredProjects = [
  {
    name: "Aether Residences",
    location: "Bengaluru, India",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1500&q=85",
  },
  {
    name: "The Terraced House",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85",
  },
  {
    name: "Monolith Gallery",
    location: "New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1500&q=85",
  },
  {
    name: "Civic Atrium",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85",
  },
  {
    name: "Noya House",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85",
  },
];

const services = [
  {
    title: "Architectural Design",
    icon: Building2,
    description:
      "Context-led concepts, plans, elevations, and construction-ready design systems for residential and commercial properties.",
  },
  {
    title: "Interior Planning",
    icon: Ruler,
    description:
      "Spatial planning, material palettes, lighting direction, and detail packages that make the architecture feel complete.",
  },
  {
    title: "3D Rendering",
    icon: Box,
    description:
      "Photorealistic visualization, walkthroughs, and presentation imagery that help stakeholders see the project clearly.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    text: "We define the brief, site constraints, ambitions, budget posture, and the emotional quality the space needs to hold.",
  },
  {
    number: "02",
    title: "Concept",
    text: "We translate strategy into massing, plans, sections, material direction, and a distinct architectural language.",
  },
  {
    number: "03",
    title: "Development",
    text: "We refine structure, details, consultants, approvals, and drawings so design intent survives real-world pressure.",
  },
  {
    number: "04",
    title: "Construction",
    text: "We support execution with clear documentation, site coordination, and decisions that protect quality through handover.",
  },
];

const metrics = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Industry Awards" },
  { value: 32, suffix: "M", label: "Sq. ft. Designed" },
];

const testimonials = [
  {
    quote:
      "Their team understood the site, the business case, and the feeling we wanted guests to remember. The final building feels inevitable.",
    name: "Aarav Mehta",
    type: "Boutique Hospitality",
  },
  {
    quote:
      "Every meeting brought clarity. They balanced ambition with budget discipline and gave our family a home with real permanence.",
    name: "Nisha Kapoor",
    type: "Private Residence",
  },
  {
    quote:
      "The design process was calm, intelligent, and exacting. Our commercial project now has a strong identity without feeling loud.",
    name: "Rohan Shah",
    type: "Mixed-Use Development",
  },
];

function Section({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={spring}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Reveal({ children, className = "", delay = 0, amount = 0.25 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    const duration = 1400;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3 shadow-glow backdrop-blur-2xl sm:px-6 lg:flex-nowrap">
        <a href="#home" className="flex items-center gap-3" aria-label="Bhuvan home">
          <span className="grid h-9 w-9 place-items-center rounded-sm border border-white bg-white text-sm font-black text-black">
            BA
          </span>
          <span className="hidden text-sm font-semibold uppercase leading-none tracking-tighter sm:block">
            Bhuvan
            <span className="block font-medium text-neutral-400">Architecture</span>
          </span>
        </a>

        <div className="order-3 flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap pt-1 lg:order-none lg:w-auto lg:overflow-visible lg:pt-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase text-neutral-400 transition hover:text-white sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="rounded-md bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-neutral-200 sm:px-5"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-32 text-center sm:px-6 lg:px-8"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400 sm:text-sm">
            Architecture / Interiors / Urban Strategy
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-balance text-4xl font-black leading-[1.02] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting the next generation of properties and communities.
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
            A premium architecture studio designing precise, memorable places
            for living, hospitality, culture, and long-term urban growth.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9">
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="min-w-36 rounded-md bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-neutral-200 sm:min-w-40"
            >
              Work With Us
            </a>
            <a
              href="#services"
              className="min-w-36 rounded-md border border-white px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:min-w-40"
            >
              Our Services
            </a>
          </div>
        </Reveal>
      </div>
    </motion.section>
  );
}

function FeaturedProjects() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="projects" className="bg-black py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <Reveal>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Portfolio
            </p>
            <h2 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              Our Featured Projects
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-800 bg-neutral-950/60 hover:border-neutral-500 text-white transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-800 bg-neutral-950/60 hover:border-neutral-500 text-white transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </Reveal>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex w-full gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 pl-4 sm:pl-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] scroll-pl-4 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              delay: index * 0.05,
            }}
            className="w-[85vw] md:w-[75vw] lg:w-[65vw] shrink-0 snap-start h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden relative group cursor-grab active:cursor-grabbing"
          >
            <img
              src={project.image}
              alt={`${project.name} architecture project`}
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-left z-10">
              <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {project.location}
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tighter text-white">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
        <div className="w-[10vw] shrink-0 snap-align-none" />
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <h2 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              Services we provide
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-neutral-400 lg:ml-auto">
              Clear design services for clients who need strong ideas, rigorous
              execution, and a built result that feels considered from every angle.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-neutral-800 bg-neutral-950/60 p-7 transition hover:border-neutral-600">
                  <div className="mb-12 grid h-12 w-12 place-items-center rounded-md border border-neutral-800 bg-black">
                    <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tighter text-white">
                    {service.title}
                  </h3>
                  <p className="text-base leading-7 text-neutral-400">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Process
            </p>
            <h2 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              How we deliver every project
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06} amount={0.18}>
              <article className="relative min-h-80 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/60 p-7">
                <p className="absolute -right-3 top-1 text-8xl font-black leading-none tracking-tighter text-white/[0.06]">
                  {step.number}
                </p>
                <p className="mb-10 text-sm font-black tracking-[0.24em] text-neutral-500">
                  {step.number}
                </p>
                <h3 className="mb-5 text-3xl font-black tracking-tighter text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-neutral-400">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-35"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1800&q=85)",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Experience
            </p>
            <h2 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              Building with experience you can measure
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.06}>
              <div className="border-l border-white/20 py-3 pl-5">
                <p className="text-5xl font-black tracking-tighter text-white sm:text-6xl">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-neutral-400">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-black px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Testimonials
            </p>
            <h2 className="text-5xl font-black leading-none tracking-tighter text-white sm:text-6xl md:text-7xl">
              What Our Clients Say About Working With Us
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <article className="relative h-full rounded-lg border border-neutral-800 bg-neutral-950/60 p-7">
                <span className="absolute right-6 top-4 text-7xl font-black leading-none text-white/[0.06]">
                  "
                </span>
                <div className="mb-7 flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-white text-white"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="mb-10 text-lg leading-8 text-neutral-300">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{testimonial.type}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FooterCta() {
  return (
    <>
      <Section
        id="contact"
        className="flex min-h-screen items-center bg-white px-4 py-24 text-black sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10">
          <Reveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-black/50">
              Explore / Get In Touch
            </p>
            <h2 className="max-w-5xl text-6xl font-black leading-none tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              Let's start your project.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-black px-8 py-5 text-base font-black text-white transition hover:bg-neutral-800"
            >
              Get in Touch
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-neutral-900 bg-black px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Bhuvan Architecture. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://instagram.com"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Instagram
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Facebook
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <Experience />
      <Testimonials />
      <FooterCta />
    </main>
  );
}
