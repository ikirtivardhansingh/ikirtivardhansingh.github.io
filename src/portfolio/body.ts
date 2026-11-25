export const editorialBody = `
  <!-- ======================================================================= -->
  <!-- STICKY TOP NAVIGATION                                                   -->
  <!-- ======================================================================= -->
  <header class="sticky top-0 z-40 backdrop-blur-md border-b editorial-divider bg-[#F5F0E3]/88 dark:bg-[#111318]/88 transition-colors duration-200">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
      <a href="#top" class="font-serif text-lg font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity">
        Kirtivardhan Singh
      </a>

      <!-- Desktop Links -->
      <nav aria-label="Primary Navigation" class="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
        <a href="#research" class="hover:text-[var(--text-primary)] transition-colors py-2">Research</a>
        <a href="#experience" class="hover:text-[var(--text-primary)] transition-colors py-2">Experience</a>
        <a href="#projects" class="hover:text-[var(--text-primary)] transition-colors py-2">Projects</a>
        <a href="#education" class="hover:text-[var(--text-primary)] transition-colors py-2">Education</a>
        <a href="#contact" class="hover:text-[var(--text-primary)] transition-colors py-2">Contact</a>
      </nav>

      <!-- Controls: Theme Toggle + Mobile Menu -->
      <div class="flex items-center gap-2">
        <button
          id="theme-toggle"
          type="button"
          aria-label="Toggle Light and Dark Mode"
          class="p-2.5 rounded-xl border editorial-divider bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <svg id="icon-sun" class="hidden w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"></path>
          </svg>
          <svg id="icon-moon" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          class="md:hidden p-2.5 rounded-xl border editorial-divider bg-[var(--bg-card)] text-[var(--text-secondary)]"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t editorial-divider bg-[var(--bg-card)] px-5 py-3 space-y-1">
      <a href="#research" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tag)]">Research</a>
      <a href="#experience" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tag)]">Experience</a>
      <a href="#projects" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tag)]">Projects</a>
      <a href="#education" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tag)]">Education</a>
      <a href="#contact" class="mobile-nav-link block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tag)]">Contact</a>
    </div>
  </header>

  <main id="top" class="max-w-4xl mx-auto px-5 sm:px-8 py-14 sm:py-20 space-y-20 sm:space-y-24">

    <!-- ===================================================================== -->
    <!-- HERO SECTION                                                          -->
    <!-- ===================================================================== -->
    <section aria-labelledby="hero-name" class="max-w-3xl">
      <!-- Location Eyebrow in Editorial Forest Green -->
      <div class="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-[#2D6A4F] dark:text-[#52B788] mb-3.5">
        <span class="w-2 h-2 rounded-full bg-[#2D6A4F] dark:bg-[#52B788]"></span>
        <span>Gurugram, India</span>
      </div>

      <!-- Display Name -->
      <h1 id="hero-name" class="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.12]">
        Kirtivardhan Singh
      </h1>

      <!-- Italicized NLP Subtitle -->
      <p class="mt-2.5 font-serif italic text-lg sm:text-xl text-[var(--text-secondary)]">
        Natural Language Processing · Computational Philology · Neuro-Symbolic Systems
      </p>

      <!-- Identity-Focused Introduction -->
      <p class="mt-6 text-base sm:text-[1.05rem] text-[var(--text-secondary)] leading-[1.78]">
        I am a developer and independent researcher drawn to the boundary between formal structure and statistical learning. My curiosity sits where classical languages, disciplined engineering, and modern machine learning meet, asking how explicit linguistic knowledge can make language models more faithful, interpretable, and grounded beyond high-resource English corpora.
      </p>

      <!-- Exact 5 Hero Action Buttons -->
      <div class="hero-actions">
        <a href="#resume-pdf" class="btn btn-primary" target="_blank" rel="noopener">
          Resume (PDF)
        </a>
        <a href="https://github.com/ikirtivardhansingh" class="btn btn-secondary" target="_blank" rel="noopener">
          GitHub <span class="btn-arrow">↗</span>
        </a>
        <a href="https://vanic.org" class="btn btn-secondary" target="_blank" rel="noopener">
          Vanic <span class="btn-arrow">↗</span>
        </a>
        <a href="https://linkedin.com/in/ikirtivardhan" class="btn btn-secondary" target="_blank" rel="noopener">
          LinkedIn <span class="btn-arrow">↗</span>
        </a>
        <a href="mailto:ikirtivardhan@gmail.com" class="btn btn-secondary">
          Email
        </a>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- RESEARCH SECTION                                                      -->
    <!-- ===================================================================== -->
    <section id="research" aria-labelledby="research-heading" class="scroll-mt-24 space-y-6">
      <div class="flex items-baseline justify-between border-b editorial-divider pb-3">
        <h2 id="research-heading" class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
          Research
        </h2>
        <span class="font-mono text-xs text-[var(--text-muted)]">Corpora &amp; Systems ML</span>
      </div>

      <div class="space-y-5">
        <!-- VANIC CARD WITH FLOATING DEVANAGARI & TAMIL HOVER GLYPHS -->
        <div class="vanic-stage">
          <div id="vanic-glyph-layer" class="vanic-glyph-layer" aria-hidden="true"></div>

          <article id="vanic-card" class="editorial-card relative z-10 rounded-2xl p-6 sm:p-7 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 class="font-serif text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                  Vanic · Classical Indic Computational Philology Platform
                </h3>
                <p class="text-sm text-[var(--text-muted)] mt-0.5">
                  Founder &amp; Lead Architect · Sept. 2025 – Present
                </p>
              </div>
              <div class="flex items-center gap-3 text-xs font-mono shrink-0 pt-0.5">
                <a href="https://vanic.org" target="_blank" rel="noopener noreferrer" class="vanic-trigger text-[#23414D] dark:text-[#7EB8CC] hover:underline">
                  vanic.org ↗
                </a>
                <a href="https://library.vanic.org/manifest" target="_blank" rel="noopener noreferrer" class="vanic-trigger text-[#2D6A4F] dark:text-[#52B788] hover:underline">
                  manifest ↗
                </a>
              </div>
            </div>

            <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
              Built a 7-tier nested commentary ingestion workbench (Studio), an 82-scheme transliteration engine (Lipi), a client-side Sanskrit lexicon of <strong class="font-medium text-[var(--text-primary)]">230,186 headwords</strong> across six reference dictionaries, and a cross-script content-level deduplication pipeline backed by a live SHA-256 provenance manifest.
            </p>

            <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
              As of the <span class="font-mono text-xs">Nov. 2026</span> manifest snapshot, auditing <strong class="font-medium text-[var(--text-primary)]">2,200 archival files</strong> removed <strong class="font-medium text-[var(--text-primary)]">29.5% duplicate verses</strong> and <strong class="font-medium text-[var(--text-primary)]">59 fully redundant books</strong>, yielding <strong class="font-medium text-[var(--text-primary)]">77.8M deduplicated tokens</strong>, <strong class="font-medium text-[var(--text-primary)]">3.42M unique verses</strong>, and <strong class="font-medium text-[var(--text-primary)]">1.93M unique surface forms</strong>. Currently evaluating boundary <em>sandhi</em> and nested <em>samāsa</em> failures on the 701-verse Bhagavad-Gītā subset.
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">77.8M Tokens</span>
              <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">3.42M Unique Verses</span>
              <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">230K Lexicon</span>
              <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">SHA-256 Provenance</span>
            </div>
          </article>
        </div>

        <!-- DRDO · INMAS -->
        <article class="editorial-card rounded-2xl p-6 sm:p-7 space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
            <div>
              <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">
                DRDO · Institute of Nuclear Medicine &amp; Allied Sciences (INMAS)
              </h3>
              <p class="text-sm text-[var(--text-muted)] mt-0.5">
                Research Intern (ML &amp; Cognitive Intelligence) · New Delhi · Nov. 2021 – Mar. 2022
              </p>
            </div>
          </div>

          <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
            Engineered a real-time physiological signal-processing pipeline integrating EEG, fNIRS, ECG, and GSR streams on ARM-class embedded hardware to estimate cognitive workload and stress in virtual environments. Built multi-channel acquisition, artifact removal, bandpass filtering, FFT spectral extraction, and a live signal-visualization interface.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">ARM Embedded SoC</span>
            <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">EEG / fNIRS / ECG / GSR</span>
            <span class="editorial-tag font-mono text-[11px] px-2.5 py-1 rounded-lg">FFT Spectral DSP</span>
          </div>
        </article>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- EXPERIENCE SECTION (SOFTWARE DEVELOPER + TEACHING)                    -->
    <!-- ===================================================================== -->
    <section id="experience" aria-labelledby="experience-heading" class="scroll-mt-24 space-y-6">
      <div class="flex items-baseline justify-between border-b editorial-divider pb-3">
        <h2 id="experience-heading" class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
          Experience
        </h2>
        <span class="font-mono text-xs text-[var(--text-muted)]">Industry &amp; Teaching</span>
      </div>

      <div class="space-y-5">
        <!-- Deloitte LLP -->
        <article class="editorial-card rounded-2xl p-6 sm:p-7 space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">
              Deloitte LLP · Developer I
            </h3>
            <span class="font-mono text-xs text-[var(--text-muted)]">Dec. 2022 – Sept. 2025 · Mumbai, India</span>
          </div>
          <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
            Developed full-stack enterprise applications and distributed backend services for large-scale public-sector platforms. Built reusable modular components, delivered 15+ production features across Agile release cycles, and refactored legacy workflows into asynchronous services to improve platform reliability and latency.
          </p>
        </article>

        <!-- Teaching Assistant -->
        <article class="editorial-card rounded-2xl p-6 sm:p-7 space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">
              VIPS-TC, GGSIPU · Undergraduate Teaching Assistant (Data Science &amp; ML)
            </h3>
            <span class="font-mono text-xs text-[var(--text-muted)]">Sept. 2021 – Apr. 2022 · New Delhi</span>
          </div>
          <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
            Mentored 120+ freshman and sophomore students through hands-on Data Science and Machine Learning labs, technical workshops, code reviews, and coursework grading.
          </p>
        </article>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- SELECTED PROJECTS SECTION                                             -->
    <!-- ===================================================================== -->
    <section id="projects" aria-labelledby="projects-heading" class="scroll-mt-24 space-y-6">
      <div class="flex items-baseline justify-between border-b editorial-divider pb-3">
        <h2 id="projects-heading" class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
          Selected Projects
        </h2>
        <span class="font-mono text-xs text-[var(--text-muted)]">Benchmarks, Robotics &amp; ML Systems</span>
      </div>

      <!-- 4 Primary Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- 1. NormGist -->
        <article class="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">NormGist</h3>
              <span class="font-mono text-xs text-[var(--text-muted)]">Nov. 2026</span>
            </div>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
              Cross-cultural norm distillation and 6-arm deterministic log-probability benchmark across <strong class="font-medium text-[var(--text-primary)]">2,615 NormAd v2 scenarios</strong> (75 countries) and <strong class="font-medium text-[var(--text-primary)]">22,990 CultureBank entries</strong> on Qwen2.5-7B-Instruct, with automated anti-leakage tests. Cluster-distilled summaries outperform raw RAG by <span class="font-mono text-xs font-medium text-[#2D6A4F] dark:text-[#52B788]">+0.0374 Macro-F1 (p &lt; 10⁻⁶)</span>.
            </p>
          </div>
          <div class="flex items-center justify-between pt-3 border-t editorial-divider text-xs font-mono">
            <span class="text-[var(--text-muted)]">PyTorch · BGE · Qwen2.5-7B</span>
            <a href="https://github.com/ikirtivardhansingh/NormGist" target="_blank" rel="noopener noreferrer" class="text-[#23414D] dark:text-[#7EB8CC] hover:underline">
              GitHub ↗
            </a>
          </div>
        </article>

        <!-- 2. CIMR -->
        <article class="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">CIMR</h3>
              <span class="font-mono text-xs text-[var(--text-muted)]">Feb. 2022</span>
            </div>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
              <em>Cognitive Intelligent Mapping Rover</em> · end-to-end autonomous spatial navigation pipeline spanning Unity ML-Agents simulation, reinforcement learning policy training, and edge deployment on NVIDIA Jetson Nano. Published as an Undergraduate Technical Report.
            </p>
          </div>
          <div class="flex items-center justify-between pt-3 border-t editorial-divider text-xs font-mono">
            <span class="text-[var(--text-muted)]">Unity ML-Agents · RL · Jetson Nano</span>
            <a href="https://doi.org/10.5281/zenodo.23215497" target="_blank" rel="noopener noreferrer" class="text-[#23414D] dark:text-[#7EB8CC] hover:underline">
              Zenodo DOI ↗
            </a>
          </div>
        </article>

        <!-- 3. CMEO (Separate Primary Card) -->
        <article class="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">CMEO</h3>
              <span class="font-mono text-xs text-[var(--text-muted)]">ML Orchestration</span>
            </div>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
              <em>Concurrent Model Experiment Orchestrator</em> · decoupled Node.js HTTP orchestrator and Python ML engine supporting config validation, concurrent experiment execution, lifecycle event hooks, UUID experiment tracking, and model persistence/serving.
            </p>
          </div>
          <div class="flex items-center justify-between pt-3 border-t editorial-divider text-xs font-mono">
            <span class="text-[var(--text-muted)]">Node.js · Python · FastAPI</span>
            <a href="https://github.com/ikirtivardhansingh/CMEO" target="_blank" rel="noopener noreferrer" class="text-[#23414D] dark:text-[#7EB8CC] hover:underline">
              GitHub ↗
            </a>
          </div>
        </article>

        <!-- 4. IFEE (Separate Primary Card) -->
        <article class="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="font-serif text-xl font-semibold text-[var(--text-primary)]">IFEE</h3>
              <span class="font-mono text-xs text-[var(--text-muted)]">Data Profiling</span>
            </div>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
              <em>Intelligent Feature Engineering Engine</em> · automated dataset-intelligence platform that profiles raw tabular data for types, missingness, high-cardinality columns, and leakage/quality issues to generate reusable preprocessing pipelines with profiling metadata.
            </p>
          </div>
          <div class="flex items-center justify-between pt-3 border-t editorial-divider text-xs font-mono">
            <span class="text-[var(--text-muted)]">Python · Pandas · Scikit-learn</span>
            <a href="https://github.com/ikirtivardhansingh/IFEE" target="_blank" rel="noopener noreferrer" class="text-[#23414D] dark:text-[#7EB8CC] hover:underline">
              GitHub ↗
            </a>
          </div>
        </article>
      </div>

      <!-- Developer Tooling: Compact Card for FieldSense -->
      <div class="pt-1">
        <p class="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2.5">Developer Tooling</p>
        <article class="editorial-card rounded-2xl p-5 sm:p-6 space-y-2">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 class="font-serif text-lg font-semibold text-[var(--text-primary)]">
              FieldSense · Rule-Based VS Code Schema &amp; Documentation Extension
            </h3>
            <span class="font-mono text-xs text-[var(--text-muted)]">JavaScript · VS Code API · Zero-LLM</span>
          </div>
          <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
            Built during my time at Deloitte to automate JSON API/schema field documentation and catch schema drift without LLMs. Queries organization metadata APIs, parses recurring sprint specifications (<code class="font-mono text-xs">.docx</code> / <code class="font-mono text-xs">.xlsx</code>), generates rule-based field descriptions, updates files in place, and surfaces type mismatches or missing fields directly as VS Code diagnostics.
          </p>
        </article>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- ACADEMIC FOUNDATION (UNBOXED ON PARCHMENT CANVAS)                     -->
    <!-- ===================================================================== -->
    <section id="education" aria-labelledby="education-heading" class="scroll-mt-24">
      <div class="border-t border-b editorial-divider py-9 space-y-4">
        <div class="flex items-baseline justify-between">
          <h2 id="education-heading" class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
            Academic Foundation
          </h2>
          <span class="font-mono text-xs text-[var(--text-muted)]">June 2022</span>
        </div>

        <div class="space-y-1.5">
          <h3 class="font-serif text-xl font-medium text-[var(--text-primary)]">
            Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi
          </h3>
          <p class="text-sm sm:text-[0.95rem] text-[var(--text-secondary)]">
            Bachelor of Computer Applications (B.C.A.) · GPA: <strong class="font-medium text-[var(--text-primary)]">8.75 / 10.0</strong>
          </p>
          <p class="font-mono text-xs sm:text-[0.82rem] text-[#2D6A4F] dark:text-[#52B788]">
            WES-Evaluated U.S. Equivalency: Bachelor's Degree | 3.91 / 4.0 (160.0 Semester Credits)
          </p>
        </div>

        <p class="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
          <span class="font-medium text-[var(--text-primary)]">Coursework:</span>
          Mathematics I–IV (Calculus, Linear Algebra, Discrete Math, Graph Theory, Probability &amp; Statistics, Linear Optimization, Numerical Analysis), Data Structures, Operating Systems, Computer Architecture, Computer Networks, DBMS, Data Warehousing &amp; Data Mining, Artificial Intelligence.
        </p>
      </div>
    </section>

    <!-- ===================================================================== -->
    <!-- LEADERSHIP & SERVICE (MINIMAL, NO HONORS)                             -->
    <!-- ===================================================================== -->
    <section id="leadership" aria-labelledby="leadership-heading" class="space-y-5">
      <h2 id="leadership-heading" class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
        Leadership &amp; Service
      </h2>

      <div class="space-y-4 text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <strong class="font-medium text-[var(--text-primary)]">President &amp; R&amp;D Head, ACE &amp; CSI Chapter (VIPS-TC)</strong>
            · Led a 1,300+ member student developer community and directed HackVSIT (2,200+ participants).
          </div>
          <span class="font-mono text-xs text-[var(--text-muted)] shrink-0">2019 – 2022</span>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <strong class="font-medium text-[var(--text-primary)]">Teaching Volunteer, National Service Scheme (NSS)</strong>
            · Taught foundational subjects to primary and elementary students from underserved communities in Delhi.
          </div>
          <span class="font-mono text-xs text-[var(--text-muted)] shrink-0">2019 – 2021</span>
        </div>
      </div>
    </section>

  </main>

  <!-- ======================================================================= -->
  <!-- CLEAN FOOTER WITH ONE-CLICK EMAIL COPY                                  -->
  <!-- ======================================================================= -->
  <footer id="contact" class="scroll-mt-24 border-t editorial-divider mt-10">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div class="space-y-2">
        <div class="font-serif text-lg font-semibold text-[var(--text-primary)]">Kirtivardhan Singh</div>
        <div class="flex flex-wrap items-center gap-2.5">
          <button
            id="copy-email-btn"
            type="button"
            class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border editorial-divider bg-[var(--bg-card)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--border-stone-hover)] transition-colors"
          >
            <span>ikirtivardhan@gmail.com</span>
            <span class="font-sans font-medium text-[#2D6A4F] dark:text-[#52B788]">Copy</span>
          </button>
          <span id="copy-toast" role="status" aria-live="polite" class="hidden text-xs font-medium text-[#2D6A4F] dark:text-[#52B788]">
            Copied
          </span>
        </div>
      </div>

      <div class="flex flex-col sm:items-end gap-2">
        <div class="flex flex-wrap items-center gap-5 text-sm font-medium text-[var(--text-secondary)]">
          <a href="https://github.com/ikirtivardhansingh" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
          <a href="https://vanic.org" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">Vanic</a>
          <a href="https://library.vanic.org/manifest" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">Manifest</a>
          <a href="https://linkedin.com/in/ikirtivardhan" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
        </div>
        <p class="font-mono text-xs text-[var(--text-muted)]">Gurugram, India · Updated Nov. 2026</p>
      </div>
    </div>
  </footer>
`;
