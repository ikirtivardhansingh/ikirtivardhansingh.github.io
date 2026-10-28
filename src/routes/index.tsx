import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kirtivardhan Singh — NLP & ML Researcher" },
      { name: "description", content: "Kirtivardhan Singh: ML/NLP researcher, ex-Deloitte engineer, DRDO research intern and former President of ACE, GGSIPU." },
      { property: "og:title", content: "Kirtivardhan Singh — NLP & ML Researcher" },
      { property: "og:description", content: "Research in NLP, neural signals and robotics, backed by industry engineering at Deloitte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: PHOTO },
      { name: "twitter:image", content: PHOTO },
    ],
  }),
  component: Index,
});

const PHOTO = "https://ikirtivardhansingh.github.io/assets/kirtivardhan_presentation1.jpg";

const publications = [
  { title: "Cognitive Intelligent Mapping Rover (CIMR) aka Cognitive Intelligent Agent in Spatial Navigation", authors: "K. Singh, A. Saha", venue: "Zenodo · 2022", status: "Published", link: "https://doi.org/10.5281/zenodo.23215497" },
  { title: "Transformation in Computational Linguistics with Sanskrit: A Brand New Approach to NLP", authors: "K. Singh", venue: "Article · KAPILA, MHRD", status: "1st Ranked", link: "https://ikirtivardhansingh.github.io/old-portfolio/Transformation_in_Computational_Linguistics_with_Sanskrit_A_Brand_New_Approach_to_NLP.html" },
  { title: "Neuro-Symbolic Integration of Pāṇinian Morphological Constraints in Transformer Architectures", authors: "K. Singh, et al.", venue: "cs.CL · 2026", status: "In preparation" },
  { title: "Empirical Evaluation of Semantic Hallucination Metrics in Biomedical Information Extraction", authors: "K. Singh, et al.", venue: "Targeting ACL/EMNLP ARR", status: "In preparation" },
  { title: "Physics-Aware Telemetry Representation for Robust Simulation-Driven Rover Navigation", authors: "K. Singh, A. Shah, et al.", venue: "Preprint · 2026", status: "In preparation" },
  { title: "Sub-50ms Neural Signal Inference on Power-Constrained Embedded Edge SoCs", authors: "K. Singh, et al.", venue: "cs.LG · 2026", status: "In preparation" },
];

const work = [
  { role: "Developer I", org: "Deloitte", place: "Mumbai", time: "Dec 2022 — Sep 2025", highlight: "Built Kreator — Deloitte's internal GovConnect microservice, now the practice-wide standard." },
  { role: "Research Intern, ML & Cognitive Intelligence", org: "INMAS, DRDO", place: "New Delhi", time: "Nov 2021 — Mar 2022", highlight: "Real-time brain-signal pipelines on embedded hardware, under Dr. Ram Singh." },
  { role: "Teaching Assistant, Data Science & ML", org: "VIPS-TC, GGSIPU", place: "New Delhi", time: "Sep 2021 — Apr 2022", highlight: "Taught Data Science & ML to 120+ students." },
  { role: "Full-Stack Developer Intern", org: "Gita Values", place: "Gurugram", time: "Nov 2020 — Mar 2021", highlight: "Built the v1.0.0 apps the platform still runs on." },
];

const projects = [
  { name: "CIMR", tag: "v2.0 in development", desc: "Autonomous rover pipeline: Unity ML-Agents simulation → DL training → Jetson Nano deployment. v2.0 adds RL (PPO/SAC), multi-modal sensor fusion and ORB-SLAM3." },
  { name: "CMEO", tag: "ML tooling", desc: "Concurrent Model Experiment Orchestrator — reduced experiments needed to reach target performance by 32% across 20 datasets via knowledge-driven recommendations." },
  { name: "Real-Time Mental State Estimation", tag: "BCI", desc: "Multi-channel EEG acquisition with real-time preprocessing (artifact removal, filtering, FFT) and a live visualization GUI." },
  { name: "Sanskrit–Devanagari Text Generator", tag: "NLP", desc: "Neural text generation for Devanagari script — the early seed of my Pāṇinian morphology research." },
  { name: "ACE Empathetic Bot", tag: "Conversational AI", desc: "An empathetic chatbot built with the ACE ML team to help users cope with emotional stress." },
];

const skills = {
  ML: ["PyTorch", "TensorFlow", "Scikit-learn", "RL (PPO/SAC)", "ORB-SLAM3", "Unity ML-Agents", "BrainFlow", "ONNX/TensorRT"],
  Systems: ["Python", "C++", "JavaScript", "SQL", "PostgreSQL", "Node.js", "Flask", "REST", "Microservices"],
  Cloud: ["GCP", "Docker", "Git", "CI/CD"],
};

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-14 animate-rise">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">{label}</h2>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <main className="relative mx-auto max-w-2xl px-6">
        <nav className="flex items-center justify-between py-8 text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">KS</span>
          <div className="flex items-center gap-5">
            <a href="#research" className="hover:text-foreground">Research</a>
            <a href="#work" className="hover:text-foreground">Experience</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#leadership" className="hover:text-foreground">Leadership</a>
            <ThemeToggle />
          </div>
        </nav>

        <header className="pb-10 pt-16 animate-rise">
          <img src={PHOTO} alt="Kirtivardhan Singh" className="mb-8 h-24 w-24 rounded-full object-cover ring-2 ring-primary/60" />
          <p className="mb-4 text-sm text-primary">NLP & ML Researcher · Ex-Deloitte · Gurugram, India</p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            Kirtivardhan <span className="text-gradient">Singh</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I work where language, cognition and machines meet — from Pāṇinian morphology in transformers
            to hallucination in biomedical NLP and real-time neural signals. Nearly three years of
            production engineering at Deloitte, research at DRDO, and former President of ACE, GGSIPU.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:ikirtivardhan@gmail.com" className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Email me</a>
            <a href="https://linkedin.com/in/ikirtivardhan" target="_blank" rel="noreferrer" className="glass rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">LinkedIn</a>
            <a href="https://github.com/ikirtivardhansingh" target="_blank" rel="noreferrer" className="glass rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-secondary">GitHub</a>
          </div>
        </header>

        <Section id="research" label="Publications & Preprints">
          <ul className="space-y-4">
            {publications.map((p) => (
              <li key={p.title} className="glass rounded-xl p-5 transition hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold leading-snug">
                    {p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-primary">{p.title} ↗</a> : p.title}
                  </h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${p.status === "Published" ? "bg-brand text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{p.status}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.authors} · <span className="text-accent">{p.venue}</span></p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" label="Experience">
          <ol className="space-y-10 border-l border-border pl-6">
            {work.map((w) => (
              <li key={w.role} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand" />
                <p className="text-xs text-muted-foreground">{w.time} · {w.place}</p>
                <h3 className="font-semibold">{w.role} · <span className="text-primary">{w.org}</span></h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.highlight}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" label="Projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <div key={p.name} className="glass rounded-xl p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="text-xs text-accent">{p.tag}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="leadership" label="Leadership & Service">
          <div className="glass rounded-xl p-6">
            <p className="text-xs text-muted-foreground">2019 — 2022 · ACE, VIPS-TC, GGSIPU</p>
            <h3 className="mt-1 text-2xl font-semibold">President, <span className="text-gradient">Association of Computer Enthusiasts</span></h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Led the developer community of North Delhi under VIPS Technical Campus with the Computer Society of India.
              Rose from freshman member to ML Team Mentor, R&D Lead, and 6th President — organising 25+ talks and
              3 major technical events, mentoring 300+ students, and partnering with communities across India.
              Also part of the TEDxVIPS organising team (2021).
            </p>
          </div>
          <div className="mt-4 glass rounded-xl p-6">
            <p className="text-xs text-muted-foreground">2019 — 2021 · National Service Scheme</p>
            <h3 className="mt-1 text-lg font-semibold">Teaching Volunteer</h3>
            <p className="mt-2 text-sm text-muted-foreground">Taught elementary and primary students from underserved communities in Delhi.</p>
          </div>
        </Section>

        <Section id="about" label="Education, Skills & Awards">
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold">Bachelor of Computer Applications — GGSIPU, New Delhi</h3>
            <p className="mt-1 text-sm text-muted-foreground">2022 · GPA 8.75/10 · WES US equivalent 3.91/4.0</p>
          </div>
          <div className="mt-6 space-y-4">
            {Object.entries(skills).map(([k, list]) => (
              <div key={k}>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => <span key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-1.5 text-sm text-muted-foreground">
            <li>🏆 Winner, KAPILA National Innovation Program 2021 — Ministry of HRD</li>
            <li>🏆 Deloitte Spot Award 2024</li>
            <li>📜 Salesforce Platform Developer I, Administrator, JavaScript Developer, AI Specialist · Coursera ML Specialization</li>
          </ul>
        </Section>

        <Section id="contact" label="Contact">
          <p className="font-display text-3xl font-semibold">
            Let's talk <span className="text-gradient">language & ideas.</span>
          </p>
          <a href="mailto:ikirtivardhan@gmail.com" className="mt-4 inline-block text-primary hover:underline">ikirtivardhan@gmail.com</a>
        </Section>

        <footer className="py-10 text-xs text-muted-foreground">© 2026 Kirtivardhan Singh</footer>
      </main>
    </div>
  );
}
