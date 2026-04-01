'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

/* ─────────────────────────────────────────────────
   TYPES & CONSTANTS
───────────────────────────────────────────────── */
interface PhaseData {
  eyebrow: string;
  headline: string;
  body: string;
  spd: number;
  alt: number;
  showCta: boolean;
}

// ── Real-world Cessna 172 phase data ──
// Vr (rotate)  = 62 kts   Vx (best angle) = 60 kts
// Vy (best rate) = 74 kts  Cruise = 122 kts  Vne = 163 kts
const PHASES: PhaseData[] = [
  {
    eyebrow: 'On Ground · Pre-Departure',
    headline: 'Where Legends<br/>Learn to <em>Command</em><br/>the Sky.',
    body: 'From first flight to airline captain — Aviora trains the world\'s finest pilots with uncompromising standards, elite instructors, and a Cessna 172 fleet that rivals the best.',
    spd: 0, alt: 0, showCta: true,
  },
  {
    eyebrow: 'Engine Start · Pre-flight Check',
    headline: 'Precision Before<br/><em>Every Single</em><br/>Takeoff.',
    body: 'Our cadets perform every pre-flight check with the rigour demanded by the world\'s safest airlines. No shortcut is ever acceptable.',
    spd: 0, alt: 0, showCta: false,
  },
  {
    eyebrow: 'Taxiing · Runway Holding Point',
    headline: 'Runway in Sight —<br/><em>Cleared</em> for<br/>Take-off.',
    body: 'The final moments on the ground. Surface movement, heading cross-checks, and precise alignment before full power.',
    spd: 12, alt: 0, showCta: false,
  },
  {
    eyebrow: 'Take-off Roll · Full Power',
    headline: 'Full Thrust.<br/><em>Maximum</em><br/>Performance.',
    body: 'Throttle full forward. The C172 accelerates rapidly. Every instrument alive. The runway narrows as speed builds toward rotation.',
    spd: 40, alt: 0, showCta: false,
  },
  {
    eyebrow: 'Vr · Rotate at 55 Knots',
    headline: 'ROTATE —<br/><em>Nose Up</em><br/>at 55 Knots.',
    body: 'Back pressure on the yoke at Vr — 55 knots. The nose rises 8°. The main gear leaves the runway. The C172 is flying.',
    spd: 55, alt: 0, showCta: false,
  },
  {
    eyebrow: 'Initial Climb · Vy 74 Knots',
    headline: 'Wheels Up.<br/><em>Your World</em><br/>Just Changed.',
    body: 'Positive rate confirmed. Best rate of climb — 74 knots. 700 ft per minute. The airfield falls away below.',
    spd: 74, alt: 600, showCta: false,
  },
  {
    eyebrow: 'Climb · Passing 3,500 ft',
    headline: 'Sky Above.<br/><em>Earth Below.</em><br/>You Command.',
    body: 'Steady climb at 74 knots. Engine at 2300 RPM. Outside air temperature drops. The ground is a patchwork of fields and roads.',
    spd: 74, alt: 3500, showCta: false,
  },
  {
    eyebrow: 'Cruising · 8,500 ft · 122 kts',
    headline: 'Cruising at<br/><em>Eight Thousand</em><br/>Five Hundred.',
    body: 'Level cruise at 122 knots true airspeed, 8,500 ft AGL. Mixture leaned, engine smooth. Clear skies, unbroken horizon. This is where Aviora pilots belong.',
    spd: 122, alt: 8500, showCta: false,
  },
];

const PHASE_LABELS = [
  'Ground', 'Eng Start', 'Taxi', 'T/O Roll', 'Vr 55kts', 'Climb Vy', 'Climb 3500', 'Cruise',
];

const FRAME_COUNT = 137;
const getFrameSrc = (i: number) =>
  `/hero-sequence/${String(50 + i).padStart(4, '0')}.webp`;

const TICKER_ITEMS = [
  'DGCA Certified',
  'Cessna 172 Fleet',
  'Level-D FBS Simulators',
  '98% Airline Placement',
  '42 Partner Airlines',
  '2,400+ Graduates',
  '140,000+ Flight Hours',
  'International Training — USA',
];

const FACILITIES = [
  {
    icon: '◈',
    title: 'Aviation Classrooms',
    desc: 'Spacious, purpose-built classrooms with aviation charts, instrument panels, and reference materials — nothing like a school.',
  },
  {
    icon: '⬡',
    title: 'Digital Smart Labs',
    desc: 'Interactive digital classrooms with simulation software, weather systems, and real-time ATC feeds for ground school training.',
  },
  {
    icon: '◎',
    title: 'FBS Flight Simulator',
    desc: 'Full flight simulation replicating the Cessna 172 cockpit in motion. Practice approaches, emergencies, and instrument flying.',
  },
  {
    icon: '◇',
    title: 'Grooming & Personality Lab',
    desc: 'A dedicated training space for cabin crew — full-length mirrors, airline grooming standards, mock presentation setups.',
  },
  {
    icon: '△',
    title: 'Aviation Resource Library',
    desc: 'Curated DGCA study material, ICAO documents, POH manuals, and pilot logbooks available 24/7 to enrolled students.',
  },
  {
    icon: '○',
    title: 'Airline Pilot Mentorship',
    desc: 'Direct one-on-one sessions with active airline pilots — not retired instructors. Real-world guidance at every stage.',
  },
];

const MENTORS = [
  {
    initials: 'CA',
    name: 'Capt. Arjun Mehta',
    role: 'Chief Flight Instructor',
    hours: '14,200',
    airlines: ['IndiGo', 'Air India'],
    bio: 'Former A320 Captain with IndiGo. Specialises in DGCA exam preparation and instrument rating. Known for zero-failure DGCA batch results.',
  },
  {
    initials: 'KS',
    name: 'Capt. Kavitha Sharma',
    role: 'Senior CPL Instructor',
    hours: '9,800',
    airlines: ['SpiceJet', 'Go First'],
    bio: 'One of India\'s leading female aviation instructors. Multi-engine specialist with a 100% student pass rate on commercial exams.',
  },
  {
    initials: 'RP',
    name: 'Capt. Rahul Pillai',
    role: 'FBS Simulator Lead',
    hours: '11,400',
    airlines: ['Vistara', 'Air Asia'],
    bio: 'Emergency procedures expert. Designed Aviora\'s entire FBS curriculum based on real airline SOPs. Every student leaves unshakeable.',
  },
];

const GLOBAL_FEATURES = [
  {
    title: 'Open Airspace',
    desc: 'Uncongested training areas with real cross-country navigation — not circuits.',
  },
  {
    title: 'FAA-Recognised Qualifications',
    desc: 'Flight hours logged in the USA are fully recognised by DGCA toward your CPL.',
  },
  {
    title: 'World-Class Training Airports',
    desc: 'Dedicated GA airports with ILS, VOR, and instrument approach procedures.',
  },
  {
    title: 'Aviora Mentor Accompaniment',
    desc: 'You won\'t go alone. An Aviora instructor accompanies every batch to the USA.',
  },
];

/* ─────────────────────────────────────────────────
   PILOT SVG silhouette
───────────────────────────────────────────────── */
function PilotSilhouette() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <path d="M150 240 L20 160 L80 80 L150 60 L220 80 L280 160 Z" fill="currentColor" />
      <path d="M150 60 L150 30 L170 50 L150 60Z" fill="currentColor" />
      <ellipse cx="150" cy="145" rx="90" ry="60" fill="currentColor" opacity="0.5" />
      <path d="M60 160 L20 180 L10 200 L60 190Z" fill="currentColor" />
      <path d="M240 160 L280 180 L290 200 L240 190Z" fill="currentColor" />
      <circle cx="150" cy="100" r="22" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CabinSilhouette() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect x="40" y="100" width="220" height="130" rx="8" fill="currentColor" />
      <path d="M40 120 Q150 60 260 120" fill="currentColor" opacity="0.4" />
      {[80, 120, 160, 200].map((x) => (
        <g key={x}>
          <rect x={x} y="130" width="25" height="40" rx="4" fill="currentColor" opacity="0.3" />
          <rect x={x} y="185" width="25" height="30" rx="4" fill="currentColor" opacity="0.25" />
        </g>
      ))}
      <rect x="40" y="225" width="220" height="5" rx="2" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────────── */
export default function HomePage() {
  /* Refs */
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const atmSkyRef = useRef<HTMLDivElement>(null);
  const runwayRef = useRef<HTMLDivElement>(null);
  const progFillRef = useRef<HTMLDivElement>(null);
  const vsbFillRef = useRef<HTMLDivElement>(null);
  const vsbValRef = useRef<HTMLSpanElement>(null);
  const valSpeedRef = useRef<HTMLSpanElement>(null);
  const valAltRef = useRef<HTMLSpanElement>(null);
  const hudLeftRef = useRef<HTMLDivElement>(null);
  const hudRightRef = useRef<HTMLDivElement>(null);
  const phaseDotsRef = useRef<HTMLDivElement>(null);
  const phaseHeadRef = useRef<HTMLDivElement>(null);
  const eyebrowElRef = useRef<HTMLDivElement>(null);
  const h1ElRef = useRef<HTMLHeadingElement>(null);
  const bodyElRef = useRef<HTMLParagraphElement>(null);
  const ctaElRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const vspeedBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ── Body class for layout ── */
    document.body.classList.add('homepage-active');
    return () => document.body.classList.remove('homepage-active');
  }, []);

  /* ── STAR FIELD ── */
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Star { x: number; y: number; r: number; phase: number; }
    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.65,
      r: Math.random() * 1.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    let tick = 0;
    let rafId: number;
    let currentAlpha = 0;

    function drawStars() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      tick += 0.016;
      stars.forEach((s) => {
        const b = 0.35 + 0.65 * Math.sin(tick + s.phase);
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(210,225,255,${currentAlpha * b})`;
        ctx!.fill();
      });
      rafId = requestAnimationFrame(drawStars);
    }
    drawStars();

    /* Expose alpha setter via canvas data */
    (canvas as HTMLCanvasElement & { setAlpha: (a: number) => void }).setAlpha = (a: number) => {
      currentAlpha = a;
    };

    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ── IMAGE SEQUENCE + GSAP SCROLL ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /* Set canvas buffer to exactly match source resolution */
    canvas.width = 1280;
    canvas.height = 720;

    /* Frame image cache */
    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    let currentFrame = 0;

    /* Draw placeholder / blank frame */
    function drawPlaceholder() {
      if (!ctx) return;
      ctx.fillStyle = '#0E1525';
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);
      /* Horizon glow */
      const grad = ctx.createLinearGradient(0, canvas!.height * 0.55, 0, canvas!.height * 0.75);
      grad.addColorStop(0, 'rgba(220,120,30,0.18)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, canvas!.height * 0.55, canvas!.width, canvas!.height * 0.45);
      /* Runway lines */
      ctx.strokeStyle = 'rgba(255,215,60,0.2)';
      ctx.lineWidth = 2;
      ctx.setLineDash([40, 30]);
      ctx.beginPath();
      ctx.moveTo(canvas!.width / 2, canvas!.height * 0.7);
      ctx.lineTo(canvas!.width / 2, canvas!.height);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function renderFrame(index: number) {
      const img = images[index];
      if (img && img.complete && img.naturalWidth > 0) {
        ctx!.drawImage(img, 0, 0, 1280, 720);
      } else {
        drawPlaceholder();
      }
    }

    /* Load frame 0 → show canvas */
    function loadFrame(index: number): Promise<void> {
      return new Promise((resolve) => {
        if (images[index]) { resolve(); return; }
        const img = new Image();
        img.src = getFrameSrc(index);
        img.onload = () => { images[index] = img; resolve(); };
        img.onerror = () => { images[index] = null; resolve(); };
      });
    }

    /* Load first frame then show canvas */
    loadFrame(0).then(() => {
      drawPlaceholder();
      canvas.style.opacity = '1';
    });

    /* Preload frames 1-49 immediately for instant scrub from first touch */
    for (let i = 1; i < 50; i++) loadFrame(i);

    /* Preload frames 50-299 in background via idle callbacks, batches of 25 */
    if ('requestIdleCallback' in window) {
      for (let batch = 50; batch < FRAME_COUNT; batch += 25) {
        const start = batch;
        const end = Math.min(FRAME_COUNT, batch + 25);
        window.requestIdleCallback(() => {
          for (let i = start; i < end; i++) loadFrame(i);
        });
      }
    } else {
      setTimeout(() => { for (let i = 50; i < FRAME_COUNT; i++) loadFrame(i); }, 1000);
    }

    if (prefersReduced) {
      /* Static — just show frame 0 */
      canvas.style.opacity = '1';
      return;
    }

    /* ── GSAP ── */
    let cleanup: (() => void) | undefined;
    let isMounted = true;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      if (!isMounted) return;
      
      gsap.registerPlugin(ScrollTrigger);

      let currentPhaseIdx = 0;

      /* Helper refs */
      const progFill = progFillRef.current;
      const vsbFill = vsbFillRef.current;
      const vsbVal = vsbValRef.current;
      const valSpeed = valSpeedRef.current;
      const valAlt = valAltRef.current;
      const runway = runwayRef.current;
      const atmSky = atmSkyRef.current;
      const starsEl = starsCanvasRef.current as (HTMLCanvasElement & { setAlpha: (a: number) => void }) | null;
      const eyebrowEl = eyebrowElRef.current;
      const h1El = h1ElRef.current;
      const bodyEl = bodyElRef.current;
      const ctaEl = ctaElRef.current;
      const scrollHint = scrollHintRef.current;
      const phaseHead = phaseHeadRef.current;
      const phaseDots = phaseDotsRef.current;

      /* Update phase */
      function updatePhase(i: number) {
        currentPhaseIdx = i;

        /* Dots */
        if (phaseDots) {
          phaseDots.querySelectorAll('[data-ph]').forEach((el, j) => {
            if (j === i) {
              el.classList.add(styles.phActive);
            } else {
              el.classList.remove(styles.phActive);
            }
          });
        }

        /* Scroll hint */
        if (i > 0 && scrollHint) {
          gsap.to(scrollHint, { opacity: 0, duration: 0.4 });
        }

        if (!phaseHead || !eyebrowEl || !h1El || !bodyEl || !ctaEl) return;

        /* Cross-fade with blur */
        const container = document.getElementById('phase-headline');
        if (!container) return;

        // Lock height during transition
        container.style.minHeight = container.scrollHeight + 'px';

        gsap.to(container, {
          opacity: 0,
          y: 10,
          filter: 'blur(4px)',
          duration: 0.22,
          onComplete: () => {
            eyebrowEl.textContent = PHASES[i].eyebrow;
            h1El.innerHTML = PHASES[i].headline;
            bodyEl.textContent = PHASES[i].body;
            ctaEl.style.display = PHASES[i].showCta ? 'flex' : 'none';

            // Release height lock
            container.style.minHeight = '';

            gsap.to(container, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.4,
              ease: 'power2.out',
            });
          },
        });
      }

      /* ScrollTrigger */
      const st = ScrollTrigger.create({
        trigger: '#hero-scene',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,   // Tight scrub for near-zero lag canvas tracking
        onUpdate(self) {
          const p = self.progress;

          /* Image frame */
          const frame = Math.min(FRAME_COUNT - 1, Math.floor(p * FRAME_COUNT));
          if (frame !== currentFrame) {
            currentFrame = frame;
            renderFrame(frame);
          }

          /* Progress bar */
          if (progFill) progFill.style.width = `${p * 100}%`;

          /* Phase */
          const phaseIndex = Math.min(7, Math.floor(p * 8));
          if (phaseIndex !== currentPhaseIdx) updatePhase(phaseIndex);

          /* Interpolated HUD */
          const fracWithin = (p * 8) - phaseIndex;
          const nextIdx = Math.min(7, phaseIndex + 1);
          const spd = PHASES[phaseIndex].spd + (PHASES[nextIdx].spd - PHASES[phaseIndex].spd) * fracWithin;
          const alt = PHASES[phaseIndex].alt + (PHASES[nextIdx].alt - PHASES[phaseIndex].alt) * fracWithin;
          if (valSpeed) valSpeed.textContent = Math.round(spd).toString();
          if (valAlt) valAlt.textContent = Math.round(alt).toLocaleString('en-IN');

          /* V-speed bar — C172 Vne = 163 kts */
          if (vsbFill) vsbFill.style.width = `${Math.min(100, (spd / 163) * 100)}%`;
          if (vsbVal) vsbVal.textContent = `${Math.round(spd)} kts`;

          /* Runway fade */
          if (runway) {
            const rwOpacity = p < 0.55 ? 1 : Math.max(0, 1 - (p - 0.55) * 5);
            runway.style.opacity = rwOpacity.toString();
          }

          /* Stars & sky shift at cruise */
          if (p > 0.72) {
            const lp = (p - 0.72) / 0.28;
            if (starsEl?.setAlpha) starsEl.setAlpha(Math.min(0.75, lp * 1.1));
            if (atmSky) atmSky.style.background = `linear-gradient(180deg, rgba(4,12,38,${Math.min(0.55, lp * 0.6)}) 0%, rgba(14,21,37,${Math.min(0.2, lp * 0.25)}) 55%, transparent 100%)`;
          } else {
            if (starsEl?.setAlpha) starsEl.setAlpha(0);
            if (atmSky) atmSky.style.background = 'radial-gradient(ellipse 80% 50% at 42% 38%, rgba(220,120,30,0.14) 0%, transparent 70%)';
          }
        },
      });

      /* Intro animation */
      let tl: any;
      const initIntro = async () => {
        const overlayEl = document.getElementById('intro-overlay');
        const chars = document.querySelectorAll('.intro-char');
        const line = document.querySelector('.intro-line');
        const sub = document.querySelector('.intro-sub');

        // If React hasn't painted them yet, retry in 50ms
        if (!overlayEl || chars.length === 0) {
           setTimeout(initIntro, 50);
           return;
        }

        // Prevent scroll during intro
        document.body.style.overflow = 'hidden';

        tl = gsap.timeline();
        tl
          // Letters stagger up
          .to(chars, {
            opacity: 1, y: 0,
            duration: 0.9, stagger: 0.07, ease: 'power3.out', delay: 0.3,
          })
          // Gold line expands
          .to(line, {
            width: 180, opacity: 1, duration: 0.7, ease: 'power2.inOut',
          }, '-=0.2')
          // Subtitle fades in
          .to(sub, {
            opacity: 1, duration: 0.5,
          }, '-=0.2')
          // Hold for 1 second
          .to({}, { duration: 1.0 })
          // Entire overlay fades out
          .to(overlayEl, {
            opacity: 0, duration: 1.0, ease: 'power2.inOut',
            onComplete: () => {
              const el = document.getElementById('intro-overlay');
              if (el) el.style.display = 'none';
              // Re-enable scroll
              document.body.style.overflow = '';
            },
          })
          // Nav fades in
          .to('#main-nav', { opacity: 1, duration: 0.5 }, '-=0.5')
          // HUD elements fade in
          .to(['#hud-left', '#hud-right'], { opacity: 1, stagger: 0.1, duration: 0.6 }, '-=0.3')
          // Phase dots
          .to('#phase-dots', { opacity: 1, duration: 0.5 }, '-=0.4')
          // Hero headline
          .to('#phase-headline', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
          // V-speed bar
          .to('#vspeed-bar', { opacity: 1, duration: 0.4 }, '-=0.3')
          // Scroll hint
          .to('#scroll-hint', { opacity: 1, duration: 0.5 }, '-=0.2');
      };

      initIntro();

      cleanup = () => {
        st.kill();
        if (tl) tl.kill();
      };
    })();

    return () => { 
      isMounted = false;
      if (cleanup) cleanup(); 
    };
  }, []);

  /* ── SECTION REVEALS ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('[data-reveal-el]').forEach((el) => {
        el.classList.add(styles.revealed);
        el.classList.add(styles.visible);
      });
      return;
    }

    /* Eyebrow / section-title / section-sub entrance */
    const textRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          textRevealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(
      `.${styles.eyebrowLight}, .${styles.eyebrowDark}, .${styles.sectionTitle}, .${styles.sectionTitleDark}, .${styles.sectionSub}`
    ).forEach((el) => textRevealObserver.observe(el));

    /* Card reveals with stagger */
    const cardRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const idx = parseInt(el.dataset.revealIndex || '0');
          setTimeout(() => el.classList.add(styles.revealed), idx * 110);
          cardRevealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-card-reveal]').forEach((el, i) => {
      (el as HTMLElement).dataset.revealIndex = i.toString();
      cardRevealObserver.observe(el);
    });

    /* Stat counters */
    function animateCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.target || '0');
      const suffix = el.dataset.suffix || '';
      const numEl = el.querySelector('[data-stat-num]') as HTMLElement;
      if (!numEl) return;

      let startTs: number | null = null;
      const duration = 2400;
      function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

      function step(timestamp: number) {
        if (!startTs) startTs = timestamp;
        const elapsed = timestamp - startTs;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(easeOut(progress) * target);
        numEl.textContent = current.toLocaleString('en-IN') + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          numEl.classList.add(styles.done);
        }
      }
      requestAnimationFrame(step);
    }

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => {
            el.classList.add(styles.revealed);
            animateCounter(el);
          }, i * 120);
          statObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-stat]').forEach((el) => statObserver.observe(el));

    return () => {
      textRevealObserver.disconnect();
      cardRevealObserver.disconnect();
      statObserver.disconnect();
    };
  }, []);

  /* ─────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────── */
  return (
    <>
      {/* INTRO OVERLAY — rendered only on homepage */}
      <div id="intro-overlay">
        <div className="intro-logo">
          {'AVIORA'.split('').map((char, i) => (
            <span key={i} className="intro-char">{char}</span>
          ))}
        </div>
        <div className="intro-line" />
        <div className="intro-sub">Cleared for departure · Runway 28L</div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className={styles.heroScene} id="hero-scene">
        <div className={styles.heroSticky}>

          {/* Canvas */}
          <canvas ref={heroCanvasRef} className={styles.heroCanvas} />

          {/* Stars */}
          <div className={styles.starsWrapper}>
            <canvas ref={starsCanvasRef} className={styles.starsCanvas} />
          </div>

          {/* Atmospheric Sky */}
          <div className={styles.atmSky} ref={atmSkyRef} />

          {/* Vignette */}
          <div className={styles.atmVignette} />

          {/* Film grain */}
          <div className={styles.filmGrain} />

          {/* Runway overlay */}
          <div className={styles.runwayOverlay} ref={runwayRef}>
            <div className={styles.rwCenterLine} />
            <div className={`${styles.rwEdge} ${styles.rwEdgeLeft}`} />
            <div className={`${styles.rwEdge} ${styles.rwEdgeRight}`} />
          </div>

          {/* HUD Left — Airspeed */}
          <div id="hud-left" className={styles.hudLeft} ref={hudLeftRef}>
            <div className={styles.hudLabel}>Airspeed</div>
            <div className={styles.hudValue}><span ref={valSpeedRef}>0</span></div>
            <div className={styles.hudUnit}>Knots IAS</div>
          </div>

          {/* HUD Right — Altitude */}
          <div id="hud-right" className={styles.hudRight} ref={hudRightRef}>
            <div className={styles.hudLabel}>Altitude</div>
            <div className={styles.hudValue}><span ref={valAltRef}>0</span></div>
            <div className={styles.hudUnit}>Feet AGL</div>
          </div>

          {/* Phase dots */}
          <div id="phase-dots" className={styles.phaseDots} ref={phaseDotsRef}>
            {PHASE_LABELS.map((label, i) => (
              <div key={i} className={`${styles.phItem} ${i === 0 ? styles.phActive : ''}`} data-ph={i}>
                <span className={styles.phLabel}>{label}</span>
                <div className={styles.phDot} />
              </div>
            ))}
          </div>

          {/* Phase headline */}
          <div id="phase-headline" className={styles.phaseHeadline} ref={phaseHeadRef}>
            <div className={styles.eyebrowHero} ref={eyebrowElRef}>
              {PHASES[0].eyebrow}
            </div>
            <h1
              className={styles.heroH1}
              ref={h1ElRef}
              dangerouslySetInnerHTML={{ __html: PHASES[0].headline }}
            />
            <p className={styles.heroBody} ref={bodyElRef}>{PHASES[0].body}</p>
            <div className="hero-ctas" ref={ctaElRef}>
              <Link href="/programs/pilot-training" className={styles.btnHeroPrimary}>
                Explore Pilot Training
              </Link>
              <Link href="/programs/cabin-crew" className={styles.btnHeroOutline}>
                Become Cabin Crew
              </Link>
            </div>
          </div>

          {/* V-Speed bar */}
          <div id="vspeed-bar" className={styles.vspeedBar} ref={vspeedBarRef}>
            <span className={styles.vsbLabel}>V-Speed</span>
            <div className={styles.vsbTrack}>
              <div className={styles.vsbFill} ref={vsbFillRef} />
            </div>
            <span className={styles.vsbVal} ref={vsbValRef}>0 kts</span>
          </div>

          {/* Scroll progress */}
          <div className={styles.scrollProg}>
            <div className={styles.scrollProgFill} ref={progFillRef} />
          </div>

          {/* Scroll hint */}
          <div id="scroll-hint" className={styles.scrollHint} ref={scrollHintRef}>
            <span>Scroll to Take Off</span>
            <div className={styles.shLine} />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — TICKER
      ═══════════════════════════════════════════ */}
      <div className={styles.tickerSection}>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerTape}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={styles.tickItem}>
                <span className={styles.tickDot}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 3 — PROGRAMS
      ═══════════════════════════════════════════ */}
      <section className={styles.programsSection} id="programs">
        <div className={styles.container}>

          <div className={styles.sectionHead}>
            <div className={styles.eyebrowLight}>Flight Programs</div>
            <h2 className={styles.sectionTitle}>
              Courses Built for Those<br />Who <em>Dare to Ascend</em>
            </h2>
            <p className={styles.sectionSub}>
              Every Aviora program is engineered by veteran captains who
              commanded the exact aircraft you are training for.
            </p>
          </div>

          <div className={styles.programsGrid}>

            {/* Card 1 — Pilot Training */}
            <div className={styles.programCard} data-card-reveal>
              <div className={styles.pcInner}>
                <div className={styles.pcNum}>01</div>
                <div className={styles.pcBadge}>Pilot Training</div>
                <h3 className={styles.pcTitle}>
                  Commercial Pilot<br /><em>Licence Program</em>
                </h3>
                <p className={styles.pcDesc}>
                  Your command begins here. From DGCA ground school preparation
                  to international flight training in the United States — a complete
                  Zero to Hero pathway guided by airline captains.
                </p>
                <ul className={styles.pcHighlights}>
                  <li>DGCA Ground School — all 5 subjects</li>
                  <li>Flight Based Simulator (FBS) Training</li>
                  <li>International Training in the USA</li>
                  <li>Airline mentorship &amp; career placement</li>
                </ul>
                <div className={styles.pcFooter}>
                  <Link href="/programs/pilot-training" className={styles.btnProgram}>
                    <span>Explore Pilot Training</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className={styles.pcMeta}>CPL · ATP Pathway</div>
                </div>
              </div>
              <div className={styles.pcVisual} style={{ color: 'var(--navy)' }}>
                <PilotSilhouette />
              </div>
            </div>

            {/* Card 2 — Cabin Crew */}
            <div className={styles.programCard} data-card-reveal>
              <div className={styles.pcInner}>
                <div className={styles.pcNum}>02</div>
                <div className={styles.pcBadge}>Cabin Crew</div>
                <h3 className={styles.pcTitle}>
                  Cabin Crew<br /><em>Training Program</em>
                </h3>
                <p className={styles.pcDesc}>
                  Elegance under pressure. Our cabin crew program transforms
                  aspiring flight attendants into confident, safety-trained
                  professionals ready for the world&apos;s leading airlines.
                </p>
                <ul className={styles.pcHighlights}>
                  <li>Airline grooming &amp; personality development</li>
                  <li>Cabin safety &amp; emergency procedures</li>
                  <li>Mock aircraft cabin training</li>
                  <li>Interview preparation &amp; placement</li>
                </ul>
                <div className={styles.pcFooter}>
                  <Link href="/programs/cabin-crew" className={styles.btnProgram}>
                    <span>Become Cabin Crew</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className={styles.pcMeta}>6-Month Intensive</div>
                </div>
              </div>
              <div className={styles.pcVisual} style={{ color: 'var(--navy)' }}>
                <CabinSilhouette />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3A — FACILITIES
      ═══════════════════════════════════════════ */}
      <section className={`${styles.facilitiesSection} ${styles.darkSection}`} id="facilities">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.twoColHead}`}>
            <div>
              <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>World-Class Infrastructure</div>
              <h2 className={styles.sectionH2}>
                A Campus Built<br />for <em>Real Aviation</em>
              </h2>
            </div>
            <p className={styles.bodyCopy} style={{ maxWidth: 360, alignSelf: 'flex-end' }}>
              Aviora&apos;s training environment is designed to replicate industry
              conditions from day one — not a classroom. A cockpit.
            </p>
          </div>

          <div className={styles.facilitiesGrid}>
            {FACILITIES.map((f, i) => (
              <div className={styles.facilityCard} key={i} data-card-reveal>
                <div className={styles.fcIcon}>{f.icon}</div>
                <div className={styles.fcNum}>0{i + 1}</div>
                <h3 className={styles.fcTitle}>{f.title}</h3>
                <p className={styles.fcDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3B — MENTORS & INSTRUCTORS
      ═══════════════════════════════════════════ */}
      <section className={`${styles.mentorsSection} ${styles.darkSection}`} id="mentors">
        <div className={styles.container}>
          <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The People Behind Your Wings</div>
          <div className={styles.mentorsHeader}>
            <h2 className={styles.sectionH2}>
              Learn From Those Who<br /><em>Commanded the Skies</em>
            </h2>
            <Link href="/mentors" className={styles.btnOutlineLight}>
              Meet All Instructors &rarr;
            </Link>
          </div>

          <div className={styles.mentorsGrid}>
            {MENTORS.map((m, i) => (
              <div className={styles.mentorCard} key={i} data-card-reveal>
                <div className={styles.mcAvatar}>{m.initials}</div>
                <div className={styles.mcInfo}>
                  <div className={styles.mcName}>{m.name}</div>
                  <div className={styles.mcRole}>{m.role}</div>
                  <div className={styles.mcHours}>{m.hours} hours total time</div>
                </div>
                <p className={styles.mcBio}>{m.bio}</p>
                <div className={styles.mcAirlines}>
                  {m.airlines.map((a, j) => (
                    <span className={styles.mcAirlineTag} key={j}>{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className={styles.mentorsStrip}>
            <div className={styles.msStat}>
              <span className={styles.msNum}>18,000+</span>
              <span className={styles.msLabel}>Avg. Instructor Hours</span>
            </div>
            <div className={styles.msDivider} />
            <div className={styles.msStat}>
              <span className={styles.msNum}>12</span>
              <span className={styles.msLabel}>Active Airline Captains</span>
            </div>
            <div className={styles.msDivider} />
            <div className={styles.msStat}>
              <span className={styles.msNum}>6</span>
              <span className={styles.msLabel}>Type Ratings Between Them</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3C — GLOBAL TRAINING (USA)
      ═══════════════════════════════════════════ */}
      <section className={`${styles.globalSection} ${styles.darkSection}`} id="global-training">
        <div className={styles.globalInner}>

          {/* Left content panel */}
          <div className={styles.globalContent}>
            <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>International Flight Training</div>
            <h2 className={styles.sectionH2}>
              Train Where<br />the Sky Has<br /><em>No Limits</em>
            </h2>
            <p className={styles.bodyCopy} style={{ marginTop: 20, marginBottom: 36 }}>
              Aviora&apos;s exclusive partnership brings you real flight hours in the
              United States — open airspace, FAA standards, and internationally
              recognised qualifications that Indian skies simply can&apos;t offer.
            </p>

            <div className={styles.globalFeatures}>
              {GLOBAL_FEATURES.map((f, i) => (
                <div className={styles.gfItem} key={i}>
                  <div className={styles.gfDot} />
                  <div>
                    <div className={styles.gfTitle}>{f.title}</div>
                    <div className={styles.gfDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/global-training" className={styles.btnGold} style={{ marginTop: 48, display: 'inline-block' }}>
              Explore Global Program &rarr;
            </Link>
          </div>

          {/* Right visual panel */}
          <div className={styles.globalVisual}>
            {/* US outline SVG — stylised, not realistic */}
            <div className={styles.globalMapContainer}>
              <svg className={styles.usMap} viewBox="0 0 400 260"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylised US map outline — simplified polygon */}
                <path
                  d="M40,60 L80,40 L140,35 L200,38 L260,40 L310,50 L350,65
                    L360,100 L355,140 L340,170 L300,185 L260,190 L220,195
                    L180,190 L140,185 L100,175 L60,160 L35,130 L30,95 Z"
                  stroke="rgba(200,150,62,0.25)" strokeWidth="1.5" fill="rgba(200,150,62,0.04)"
                />
                {/* State grid lines — subtle */}
                <line x1="160" y1="38" x2="165" y2="185" stroke="rgba(200,150,62,0.07)" strokeWidth="1" />
                <line x1="240" y1="40" x2="245" y2="188" stroke="rgba(200,150,62,0.07)" strokeWidth="1" />
                <line x1="40" y1="110" x2="355" y2="118" stroke="rgba(200,150,62,0.07)" strokeWidth="1" />

                {/* Training location dots */}
                <circle cx="120" cy="155" r="5" fill="var(--gold)" opacity="0.9" />
                <circle cx="120" cy="155" r="12" stroke="var(--gold)" strokeWidth="1" opacity="0.3" />
                <circle cx="120" cy="155" r="20" stroke="var(--gold)" strokeWidth="0.5" opacity="0.15" />

                <circle cx="280" cy="130" r="4" fill="var(--gold)" opacity="0.7" />
                <circle cx="280" cy="130" r="10" stroke="var(--gold)" strokeWidth="1" opacity="0.25" />

                {/* Flight path arc between dots */}
                <path d="M120,155 Q200,60 280,130"
                  stroke="rgba(200,150,62,0.3)" strokeWidth="1"
                  strokeDasharray="4 6" fill="none" />

                {/* Labels */}
                <text x="100" y="175" fill="rgba(200,150,62,0.5)"
                  fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="2">PHOENIX</text>
                <text x="260" y="148" fill="rgba(200,150,62,0.5)"
                  fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="2">FLORIDA</text>
              </svg>
              <div className={styles.mapLabel}>Active Training Locations</div>
            </div>

            {/* Stats */}
            <div className={styles.globalStats}>
              <div className={styles.gsItem}>
                <div className={styles.gsNum}>FAA</div>
                <div className={styles.gsLabel}>Licensed Training Airports</div>
              </div>
              <div className={styles.gsItem}>
                <div className={styles.gsNum}>VFR+</div>
                <div className={styles.gsLabel}>300 Days Flying Weather</div>
              </div>
              <div className={styles.gsItem}>
                <div className={styles.gsNum}>DGCA</div>
                <div className={styles.gsLabel}>Hours Count Toward CPL</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LEGACY
      ═══════════════════════════════════════════ */}
      <section className={styles.legacySection} id="legacy">
        <div className={styles.container}>
          <div className={styles.legacyHeader}>
            <div className={styles.eyebrowDark}>By the Numbers</div>
            <h2 className={styles.sectionTitleDark}>
              Decades of Excellence,<br /><em>Measured in Altitude</em>
            </h2>
          </div>

          <div className={styles.statsGrid}>
            {[
              { target: 2400, suffix: '+', label: 'Pilots Graduated' },
              { target: 98, suffix: '%', label: 'Placement Rate' },
              { target: 140, suffix: 'K+', label: 'Flight Hours Logged' },
              { target: 42, suffix: '+', label: 'Airline Partners' },
            ].map((stat, i) => (
              <div
                key={i}
                className={styles.statItem}
                data-stat
                data-target={stat.target}
                data-suffix={stat.suffix}
              >
                <div className={styles.statNumber} data-stat-num>0</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.legacyWatermark} aria-hidden="true">AVIORA</div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — ALUMNI VOICES
      ═══════════════════════════════════════════ */}
      <section className={styles.alumniSection} id="alumni">
        <div className={styles.container}>

          <div className={styles.sectionHead}>
            <div className={styles.eyebrowLight}>Alumni Voices</div>
            <h2 className={styles.sectionTitle}>
              Captains Who Once Sat<br /><em>Where You Are Now</em>
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>

            {[
              {
                initials: 'RK',
                text: 'Aviora didn\'t just teach me to fly. They taught me to command. Zero to 737 First Officer in 26 months — the standard of training here is genuinely world-class.',
                name: 'Rahul Kapoor',
                role: 'First Officer · IndiGo Airlines',
              },
              {
                initials: 'SM',
                text: 'The simulator scenarios are things most pilots never face in 30 years. By graduation I was unshakeable. No other academy came close to the depth here.',
                name: 'Sneha Mehta',
                role: 'Captain · AirAsia India',
              },
              {
                initials: 'AV',
                text: 'My mentor had 18,000 hours and treated me as a peer from day one. That relationship — that calibre of instruction — simply doesn\'t exist anywhere else.',
                name: 'Arjun Verma',
                role: 'Senior Captain · Emirates',
              },
            ].map((t, i) => (
              <div key={i} className={styles.tcard} data-card-reveal>
                <div className={styles.tcardQuoteMark}>&ldquo;</div>
                <blockquote className={styles.tcardText}>{t.text}</blockquote>
                <div className={styles.tcardAuthor}>
                  <div className={styles.tcardAvatar}>{t.initials}</div>
                  <div>
                    <div className={styles.tcardName}>{t.name}</div>
                    <div className={styles.tcardRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA
      ═══════════════════════════════════════════ */}
      <section className={styles.ctaSection} id="cta">
        <div className={styles.ctaWatermark} aria-hidden="true">AVIORA</div>
        <div className={`${styles.container} ${styles.ctaContainer}`}>
          <div className={styles.ctaEyebrowWrap}>
            <div className={styles.eyebrowDark} style={{ opacity: 1, transform: 'none' }}>
              Ready for Departure
            </div>
          </div>
          <h2 className={styles.ctaTitle}>
            Are You Ready to<br /><em>Take the Controls?</em>
          </h2>
          <p className={styles.ctaBody}>
            The cockpit waits only for those serious about the sky.
            Our 2025 intake is extremely limited — reserve your assessment today.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/admissions" className={styles.btnCtaPrimary}>
              Enroll for 2025
            </Link>
            <Link href="/contact" className={styles.btnCtaOutline}>
              Send an Enquiry
            </Link>
          </div>
          <div className={styles.ctaTrust}>
            <span>DGCA Certified</span>
            <span className={styles.trustDot}>·</span>
            <span>42 Airline Partners</span>
            <span className={styles.trustDot}>·</span>
            <span>98% Placement</span>
          </div>
        </div>
      </section>

    </>
  );
}
