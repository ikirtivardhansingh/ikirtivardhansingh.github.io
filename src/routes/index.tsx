//श्री
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { editorialBody } from "@/portfolio/body";

const TITLE = "Kirtivardhan Singh · Software Developer & NLP Researcher";
const DESC = "Portfolio of Kirtivardhan Singh: natural language processing, computational philology, neuro-symbolic systems and software engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Wires up the theme toggle, mobile menu, email copy and Vanic glyph animation.
    new Function(SCRIPT)();
  }, []);

  return <div className="antialiased overflow-x-hidden" dangerouslySetInnerHTML={{ __html: editorialBody }} />;
}

const SCRIPT = `
  /* --------------------------------------------------------------------- */
  /* 1. Light / Dark Mode Toggle with Persistence                          */
  /* --------------------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  function syncThemeIcons() {
    const isDark = htmlEl.classList.contains('dark');
    if (iconSun && iconMoon) {
      iconSun.classList.toggle('hidden', !isDark);
      iconMoon.classList.toggle('hidden', isDark);
    }
  }

  syncThemeIcons();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      htmlEl.classList.toggle('dark');
      syncThemeIcons();
      try {
        localStorage.setItem('ks-parchment-theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
      } catch (err) {
        /* Ignore storage errors */
      }
    });
  }

  /* --------------------------------------------------------------------- */
  /* 2. Mobile Navigation Drawer                                           */
  /* --------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------------------------- */
  /* 3. One-Click Email Copy (iFrame-safe via document.execCommand)        */
  /* --------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyToast = document.getElementById('copy-toast');
  let toastTimer = null;

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      try {
        const temp = document.createElement('textarea');
        temp.value = 'ikirtivardhan@gmail.com';
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);

        if (copyToast) {
          copyToast.classList.remove('hidden');
          if (toastTimer) clearTimeout(toastTimer);
          toastTimer = setTimeout(function () {
            copyToast.classList.add('hidden');
          }, 2000);
        }
      } catch (err) {
        console.error('Copy failed:', err);
      }
    });
  }

  /* --------------------------------------------------------------------- */
  /* 4. Floating Devanagari & Tamil Script Animation on Vanic Hover        */
  /* --------------------------------------------------------------------- */
  const vanicCard = document.getElementById('vanic-card');
  const glyphLayer = document.getElementById('vanic-glyph-layer');
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const GLYPHS = [
    { text: 'वाणी', script: 'devanagari' },
    { text: 'संधि', script: 'devanagari' },
    { text: 'संस्कृत', script: 'devanagari' },
     { text: 'गुरु', script: 'devanagari' },
    { text: 'कर्म', script: 'devanagari' },
    { text: 'ज्ञान', script: 'devanagari' },
     { text: 'श्री', script: 'devanagari' },
    { text: 'अ', script: 'devanagari' },
    { text: 'क', script: 'devanagari' },
     { text: 'அல்லது', script: 'tamil' },
    { text: 'श्लोक', script: 'devanagari' },
    { text: 'पद', script: 'devanagari' },
    { text: 'தமிழ்', script: 'tamil' },
    { text: 'மொழி', script: 'tamil' },
    { text: 'அறிவு', script: 'tamil' },
    { text: 'க', script: 'tamil' },
    { text: 'இலக்கியம்', script: 'tamil' },
    { text: 'சொல்', script: 'tamil' }
  ];

  const MAX_ACTIVE_GLYPHS = 18;
  let spawnInterval = null;
  let activeGlyphCount = 0;
  let lastIndex = -1;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnIndicGlyph() {
    if (!glyphLayer || prefersReducedMotion || activeGlyphCount >= MAX_ACTIVE_GLYPHS) return;

    let idx = Math.floor(Math.random() * GLYPHS.length);
    if (idx === lastIndex) idx = (idx + 1) % GLYPHS.length;
    lastIndex = idx;
    const item = GLYPHS[idx];

    const el = document.createElement('span');
    el.className = 'floating-glyph ' + item.script;
    el.textContent = item.text;

    /* Spawns exclusively outside the card margins with outward drift */
    const edgeRoll = Math.random();
    let xPct = 0;
    let yPct = 0;
    let outwardX = 0;

    if (edgeRoll < 0.35) {
      /* Left margin outside card */
      xPct = rand(0, 6);
      yPct = rand(12, 88);
      outwardX = rand(-24, -8);
    } else if (edgeRoll < 0.70) {
      /* Right margin outside card */
      xPct = rand(92, 98);
      yPct = rand(12, 88);
      outwardX = rand(8, 24);
    } else if (edgeRoll < 0.85) {
      /* Top perimeter */
      xPct = rand(8, 90);
      yPct = rand(0, 8);
      outwardX = rand(-12, 12);
    } else {
      /* Bottom perimeter */
      xPct = rand(8, 90);
      yPct = rand(90, 98);
      outwardX = rand(-12, 12);
    }

    const sizeRem = rand(1.05, 1.95).toFixed(2);
    const duration = rand(3.2, 4.6).toFixed(2);
    const peakOpacity = rand(0.24, 0.42).toFixed(2);

    el.style.left = xPct.toFixed(1) + '%';
    el.style.top = yPct.toFixed(1) + '%';
    el.style.fontSize = sizeRem + 'rem';
    /* Color is left to your .floating-glyph.devanagari / .tamil CSS rules */
    el.style.setProperty('--dur', duration + 's');
    el.style.setProperty('--peak-opacity', peakOpacity);
    el.style.setProperty('--rot-start', rand(-8, 8).toFixed(1) + 'deg');
    el.style.setProperty('--rot-mid', rand(-5, 5).toFixed(1) + 'deg');
    el.style.setProperty('--rot-end', rand(-8, 8).toFixed(1) + 'deg');
    el.style.setProperty('--drift-mid-x', (outwardX * 0.6 + rand(-6, 6)).toFixed(1) + 'px');
    el.style.setProperty('--drift-mid-y', (-rand(20, 36)).toFixed(1) + 'px');
    el.style.setProperty('--drift-end-x', (outwardX + rand(-10, 10)).toFixed(1) + 'px');
    el.style.setProperty('--drift-end-y', (-rand(50, 78)).toFixed(1) + 'px');

    activeGlyphCount += 1;
    glyphLayer.appendChild(el);

    el.addEventListener('animationend', function () {
      el.remove();
      activeGlyphCount = Math.max(0, activeGlyphCount - 1);
    }, { once: true });
  }

  function startGlyphs() {
    if (prefersReducedMotion || spawnInterval) return;
    spawnIndicGlyph();
    setTimeout(spawnIndicGlyph, 140);
    setTimeout(spawnIndicGlyph, 300);
    spawnInterval = setInterval(spawnIndicGlyph, 340);
  }

  function stopGlyphs() {
    if (spawnInterval) {
      clearInterval(spawnInterval);
      spawnInterval = null;
    }
  }

  if (vanicCard) {
    vanicCard.addEventListener('mouseenter', startGlyphs);
    vanicCard.addEventListener('mouseleave', stopGlyphs);
    vanicCard.addEventListener('focusin', startGlyphs);
    vanicCard.addEventListener('focusout', function (e) {
      if (!vanicCard.contains(e.relatedTarget)) stopGlyphs();
    });
  }
`;
