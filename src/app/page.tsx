'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';
import CessnaFly from '@/components/CessnaFly';
import RevealOnScroll from '@/components/RevealOnScroll';
import TrainingPartnersTicker from '@/components/TrainingPartnersTicker';

const FRAME_COUNT = 242;
const getFrameSrc = (i: number) => `/hero-sequence/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;

const TICKER_ITEMS = ['DGCA Certified', 'Cessna 172 Fleet', 'Level-D FBS Simulators', '98% Airline Placement', '42 Partner Airlines', '2,400+ Graduates', '140,000+ Flight Hours', 'International Training — USA'];
const FACILITIES = [
  { icon: '◈', title: 'Aviation Classrooms', desc: 'Spacious, purpose-built classrooms with aviation charts, instrument panels, and reference materials — nothing like a school.' },
  { icon: '⬡', title: 'Digital Smart Labs', desc: 'Interactive digital classrooms with simulation software, weather systems, and real-time ATC feeds for ground school training.' },
  { icon: '◎', title: 'FBS Flight Simulator', desc: 'Full flight simulation replicating the Cessna 172 cockpit in motion. Practice approaches, emergencies, and instrument flying.' },
  { icon: '◇', title: 'Grooming & Personality Lab', desc: 'A dedicated training space for cabin crew — full-length mirrors, airline grooming standards, mock presentation setups.' },
  { icon: '△', title: 'Aviation Resource Library', desc: 'Curated DGCA study material, ICAO documents, POH manuals, and pilot logbooks available 24/7 to enrolled students.' },
  { icon: '○', title: 'Airline Pilot Mentorship', desc: 'Direct one-on-one sessions with active airline pilots — not retired instructors. Real-world guidance at every stage.' },
];
const MENTORS = [
  { initials: 'CA', name: 'Capt. Arjun Mehta', role: 'Chief Flight Instructor', hours: '14,200', airlines: ['IndiGo', 'Air India'], bio: 'Former A320 Captain with IndiGo. Specialises in DGCA exam preparation and instrument rating. Known for zero-failure DGCA batch results.' },
  { initials: 'KS', name: 'Capt. Kavitha Sharma', role: 'Senior CPL Instructor', hours: '9,800', airlines: ['SpiceJet', 'Go First'], bio: 'One of India\'s leading female aviation instructors. Multi-engine specialist with a 100% student pass rate on commercial exams.' },
  { initials: 'RP', name: 'Capt. Rahul Pillai', role: 'FBS Simulator Lead', hours: '11,400', airlines: ['Vistara', 'Air Asia'], bio: 'Emergency procedures expert. Designed Aviora\'s entire FBS curriculum based on real airline SOPs. Every student leaves unshakeable.' },
];
const GLOBAL_FEATURES = [
  { title: 'Open Airspace', desc: 'Uncongested training areas with real cross-country navigation — not circuits.' },
  { title: 'FAA-Recognised Qualifications', desc: 'Flight hours logged in the USA are fully recognised by DGCA toward your CPL.' },
  { title: 'World-Class Training Airports', desc: 'Dedicated GA airports with ILS, VOR, and instrument approach procedures.' },
  { title: 'Aviora Mentor Accompaniment', desc: 'You won\'t go alone. An Aviora instructor accompanies every batch to the USA.' },
];

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

export default function HomePage() {
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);
  const heroSceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add('homepage-active');
    return () => document.body.classList.remove('homepage-active');
  }, []);

  /* ── IMAGE SEQUENCE + SCROLL ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = heroCanvasRef.current;
    const scene  = heroSceneRef.current;
    if (!canvas || !scene) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    let currentFrame = 0;
    let lastGoodFrame = -1;
    let rafId = 0;

    function drawCover(img: HTMLImageElement) {
      const iR = img.naturalWidth / img.naturalHeight;
      const cR = canvas!.width / canvas!.height;
      let dW = canvas!.width, dH = canvas!.height, oX = 0, oY = 0;
      if (cR > iR) { dH = canvas!.width / iR; oY = (canvas!.height - dH) / 2; }
      else         { dW = canvas!.height * iR; oX = (canvas!.width - dW) / 2; }
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = '#050E2D';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      ctx!.drawImage(img, oX, oY, dW, dH);
    }

    function renderFrame(index: number) {
      const img = images[index];
      if (img && img.complete && img.naturalWidth > 0) { drawCover(img); lastGoodFrame = index; }
      else if (lastGoodFrame >= 0 && images[lastGoodFrame]) drawCover(images[lastGoodFrame]!);
    }

    function loadFrame(index: number) {
      if (images[index]) return;
      const img = new Image();
      img.src = getFrameSrc(index);
      img.onload  = () => { images[index] = img; if (index === currentFrame) renderFrame(index); };
      img.onerror = () => { images[index] = null; };
    }

    // Frame 0 first — show canvas
    const img0 = new Image();
    img0.src = getFrameSrc(0);
    img0.onload = () => { images[0] = img0; renderFrame(0); canvas.style.opacity = '1'; };

    // Eager load first 80 frames
    for (let i = 1; i < Math.min(80, FRAME_COUNT); i++) loadFrame(i);
    // Lazy load rest
    if ('requestIdleCallback' in window) {
      for (let b = 80; b < FRAME_COUNT; b += 30) {
        const s = b, e = Math.min(FRAME_COUNT, b + 30);
        window.requestIdleCallback(() => { for (let i = s; i < e; i++) loadFrame(i); }, { timeout: 600 });
      }
    } else {
      setTimeout(() => { for (let i = 80; i < FRAME_COUNT; i++) loadFrame(i); }, 300);
    }

    function handleResize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
      renderFrame(currentFrame);
    }
    window.addEventListener('resize', handleResize);

    if (prefersReduced) {
      canvas.style.opacity = '1';
      return () => window.removeEventListener('resize', handleResize);
    }

    // ── PURE SCROLL APPROACH ──
    // CSS makes #hero-sticky position:sticky so NO JS pinning needed.
    // We just read how far the scene has scrolled and map that to frames.
    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect   = scene!.getBoundingClientRect();
        const sceneH = scene!.offsetHeight - window.innerHeight;
        if (sceneH <= 0) return;
        // progress: 0 when top of scene at top of viewport, 1 when bottom of scene at bottom
        const progress = Math.max(0, Math.min(1, -rect.top / sceneH));
        const frame = Math.min(FRAME_COUNT - 1, Math.floor(progress * (FRAME_COUNT - 1)));
        if (frame !== currentFrame) {
          currentFrame = frame;
          renderFrame(frame);
        }
        // Pre-fetch ahead
        for (let a = 1; a <= 20; a++) loadFrame(Math.min(FRAME_COUNT - 1, frame + a));
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* ── SECTION REVEALS ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { document.querySelectorAll('[data-reveal-el]').forEach((el) => { el.classList.add(styles.revealed); el.classList.add(styles.visible); }); return; }
    const textObs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.visible); textObs.unobserve(e.target); } }); }, { threshold: 0.2 });
    document.querySelectorAll(`.${styles.eyebrowLight},.${styles.eyebrowDark},.${styles.sectionTitle},.${styles.sectionTitleDark},.${styles.sectionSub}`).forEach((el) => textObs.observe(el));
    const cardObs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { const el = e.target as HTMLElement; setTimeout(() => el.classList.add(styles.revealed), parseInt(el.dataset.revealIndex || '0') * 110); cardObs.unobserve(e.target); } }); }, { threshold: 0.15 });
    document.querySelectorAll('[data-card-reveal]').forEach((el, i) => { (el as HTMLElement).dataset.revealIndex = i.toString(); cardObs.observe(el); });
    function animateCounter(el: HTMLElement) {
      const target = parseInt(el.dataset.target || '0'); const suffix = el.dataset.suffix || ''; const numEl = el.querySelector('[data-stat-num]') as HTMLElement; if (!numEl) return;
      let startTs: number | null = null; const duration = 2400; const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      function step(ts: number) { if (!startTs) startTs = ts; const prog = Math.min((ts - startTs) / duration, 1); numEl.textContent = Math.round(easeOut(prog) * target).toLocaleString('en-IN') + suffix; if (prog < 1) requestAnimationFrame(step); else numEl.classList.add(styles.done); }
      requestAnimationFrame(step);
    }
    const statObs = new IntersectionObserver((entries) => { entries.forEach((e, i) => { if (e.isIntersecting) { const el = e.target as HTMLElement; setTimeout(() => { el.classList.add(styles.revealed); animateCounter(el); }, i * 120); statObs.unobserve(el); } }); }, { threshold: 0.3 });
    document.querySelectorAll('[data-stat]').forEach((el) => statObs.observe(el));
    return () => { textObs.disconnect(); cardObs.disconnect(); statObs.disconnect(); };
  }, []);

  return (
    <>
      <section ref={heroSceneRef} className={styles.heroScene} id="hero-scene">
        <div className={styles.heroSticky} id="hero-sticky">
          <canvas ref={heroCanvasRef} className={styles.heroCanvas} />
          {/* Hero Content Overlay */}
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>DGCA Certified · Est. 2009</div>
              <h1 className={styles.heroH1}>
                Where Legends<br />Learn to <em>Command</em><br />the Sky.
              </h1>
              <p className={styles.heroBody}>
                From first flight to airline captain — Aviora trains India&apos;s finest pilots with uncompromising standards, elite instructors, and a Cessna 172 fleet that rivals the best.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/programs/pilot-training" className={styles.btnHeroPrimary}>Explore Pilot Training</Link>
                <Link href="/admissions" className={styles.btnHeroOutline}>Apply for 2025</Link>
              </div>
            </div>
          </div>
          <div className={styles.heroScrollHint}>
            <span>Scroll to Take Off</span>
            <div className={styles.heroScrollLine} />
          </div>
        </div>
      </section>

      {/* ═══ TICKER ═══ */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '1px', background: 'var(--border-gold)' }}>
        <CessnaFly direction="right" size={40} opacity={0.18} top="-20px" delay="0s" />
      </div>
      <div className={styles.tickerSection}>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerTape}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={styles.tickItem}><span className={styles.tickDot}>✦</span>{item}</span>
            ))}
          </div>
        </div>
      </div>
      <TrainingPartnersTicker />

      {/* ═══ PROGRAMS ═══ */}
      <section className={styles.programsSection} id="programs">
        <div className={styles.container}>
          <RevealOnScroll className={styles.sectionHead}>
            <div className={styles.eyebrowLight}>Flight Programs</div>
            <h2 className={styles.sectionTitle}>Courses Built for Those<br />Who <em>Dare to Ascend</em></h2>
            <p className={styles.sectionSub}>Every Aviora program is engineered by veteran captains who commanded the exact aircraft you are training for.</p>
          </RevealOnScroll>
          <div className={styles.programsGrid}>
            <div className={styles.programCard} data-card-reveal>
              <div className={styles.pcInner}>
                <div className={styles.pcNum}>01</div><div className={styles.pcBadge}>Pilot Training</div>
                <h3 className={styles.pcTitle}>Commercial Pilot<br /><em>Licence Program</em></h3>
                <p className={styles.pcDesc}>Your command begins here. From DGCA ground school preparation to international flight training in the United States — a complete Zero to Hero pathway guided by airline captains.</p>
                <ul className={styles.pcHighlights}><li>DGCA Ground School — all 5 subjects</li><li>Flight Based Simulator (FBS) Training</li><li>International Training in the USA</li><li>Airline mentorship &amp; career placement</li></ul>
                <div className={styles.pcFooter}>
                  <Link href="/programs/pilot-training" className={styles.btnProgram}><span>Explore Pilot Training</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
                  <div className={styles.pcMeta}>CPL · ATP Pathway</div>
                </div>
              </div>
              <div className={styles.pcVisual} style={{ color: 'var(--navy)' }}><PilotSilhouette /></div>
            </div>
            <div className={styles.programCard} data-card-reveal>
              <div className={styles.pcInner}>
                <div className={styles.pcNum}>02</div><div className={styles.pcBadge}>Cabin Crew</div>
                <h3 className={styles.pcTitle}>Cabin Crew<br /><em>Training Program</em></h3>
                <p className={styles.pcDesc}>Elegance under pressure. Our cabin crew program transforms aspiring flight attendants into confident, safety-trained professionals ready for the world&apos;s leading airlines.</p>
                <ul className={styles.pcHighlights}><li>Airline grooming &amp; personality development</li><li>Cabin safety &amp; emergency procedures</li><li>Mock aircraft cabin training</li><li>Interview preparation &amp; placement</li></ul>
                <div className={styles.pcFooter}>
                  <Link href="/programs/cabin-crew" className={styles.btnProgram}><span>Become Cabin Crew</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
                  <div className={styles.pcMeta}>6-Month Intensive</div>
                </div>
              </div>
              <div className={styles.pcVisual} style={{ color: 'var(--navy)' }}><CabinSilhouette /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FACILITIES ═══ */}
      <section className={`${styles.facilitiesSection} ${styles.darkSection}`} id="facilities">
        <div className={styles.container}>
          <div className={`${styles.sectionHead} ${styles.twoColHead}`}>
            <div><div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>World-Class Infrastructure</div><h2 className={styles.sectionH2}>A Campus Built<br />for <em>Real Aviation</em></h2></div>
            <p className={styles.bodyCopy} style={{ maxWidth: 360, alignSelf: 'flex-end' }}>Aviora&apos;s training environment is designed to replicate industry conditions from day one — not a classroom. A cockpit.</p>
          </div>
          <div className={styles.facilitiesGrid}>
            {FACILITIES.map((f, i) => (<div className={styles.facilityCard} key={i} data-card-reveal><div className={styles.fcIcon}>{f.icon}</div><div className={styles.fcNum}>0{i + 1}</div><h3 className={styles.fcTitle}>{f.title}</h3><p className={styles.fcDesc}>{f.desc}</p></div>))}
          </div>
        </div>
      </section>

      {/* ═══ MENTORS ═══ */}
      <section className={`${styles.mentorsSection} ${styles.darkSection}`} id="mentors">
        <div className={styles.container}>
          <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The People Behind Your Wings</div>
          <div className={styles.mentorsHeader}><h2 className={styles.sectionH2}>Learn From Those Who<br /><em>Commanded the Skies</em></h2><Link href="/mentors" className={styles.btnOutlineLight}>Meet All Instructors &rarr;</Link></div>
          <div className={styles.mentorsGrid}>
            {MENTORS.map((m, i) => (<div className={styles.mentorCard} key={i} data-card-reveal><div className={styles.mcAvatar}>{m.initials}</div><div className={styles.mcInfo}><div className={styles.mcName}>{m.name}</div><div className={styles.mcRole}>{m.role}</div><div className={styles.mcHours}>{m.hours} hours total time</div></div><p className={styles.mcBio}>{m.bio}</p><div className={styles.mcAirlines}>{m.airlines.map((a, j) => <span className={styles.mcAirlineTag} key={j}>{a}</span>)}</div></div>))}
          </div>
          <div className={styles.mentorsStrip}>
            <div className={styles.msStat}><span className={styles.msNum}>18,000+</span><span className={styles.msLabel}>Avg. Instructor Hours</span></div>
            <div className={styles.msDivider} />
            <div className={styles.msStat}><span className={styles.msNum}>12</span><span className={styles.msLabel}>Active Airline Captains</span></div>
            <div className={styles.msDivider} />
            <div className={styles.msStat}><span className={styles.msNum}>6</span><span className={styles.msLabel}>Type Ratings Between Them</span></div>
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL TRAINING ═══ */}
      <section className={`${styles.globalSection} ${styles.darkSection}`} id="global-training">
        <div className={styles.globalInner}>
          <div className={styles.globalContent}>
            <div className={`${styles.eyebrow} ${styles.eyebrowLight}`}>International Flight Training</div>
            <h2 className={styles.sectionH2}>Train Where<br />the Sky Has<br /><em>No Limits</em></h2>
            <p className={styles.bodyCopy} style={{ marginTop: 20, marginBottom: 36 }}>Aviora&apos;s exclusive partnership brings you real flight hours in the United States — open airspace, FAA standards, and internationally recognised qualifications that Indian skies simply can&apos;t offer.</p>
            <div className={styles.globalFeatures}>
              {GLOBAL_FEATURES.map((f, i) => (<div className={styles.gfItem} key={i}><div className={styles.gfDot} /><div><div className={styles.gfTitle}>{f.title}</div><div className={styles.gfDesc}>{f.desc}</div></div></div>))}
            </div>
            <Link href="/global-training" className={styles.btnGold} style={{ marginTop: 48, display: 'inline-block' }}>Explore Global Program &rarr;</Link>
          </div>
          <div className={styles.globalVisual}>
            <div className={styles.globalMapContainer}>
              <svg className={styles.usMap} viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40,60 L80,40 L140,35 L200,38 L260,40 L310,50 L350,65 L360,100 L355,140 L340,170 L300,185 L260,190 L220,195 L180,190 L140,185 L100,175 L60,160 L35,130 L30,95 Z" stroke="rgba(200,150,62,0.25)" strokeWidth="1.5" fill="rgba(200,150,62,0.04)" />
                <line x1="160" y1="38" x2="165" y2="185" stroke="rgba(200,150,62,0.07)" strokeWidth="1" /><line x1="240" y1="40" x2="245" y2="188" stroke="rgba(200,150,62,0.07)" strokeWidth="1" /><line x1="40" y1="110" x2="355" y2="118" stroke="rgba(200,150,62,0.07)" strokeWidth="1" />
                <circle cx="120" cy="155" r="5" fill="var(--gold)" opacity="0.9" /><circle cx="120" cy="155" r="12" stroke="var(--gold)" strokeWidth="1" opacity="0.3" /><circle cx="120" cy="155" r="20" stroke="var(--gold)" strokeWidth="0.5" opacity="0.15" />
                <circle cx="280" cy="130" r="4" fill="var(--gold)" opacity="0.7" /><circle cx="280" cy="130" r="10" stroke="var(--gold)" strokeWidth="1" opacity="0.25" />
                <path d="M120,155 Q200,60 280,130" stroke="rgba(200,150,62,0.3)" strokeWidth="1" strokeDasharray="4 6" fill="none" />
                <text x="100" y="175" fill="rgba(200,150,62,0.5)" fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="2">PHOENIX</text>
                <text x="260" y="148" fill="rgba(200,150,62,0.5)" fontSize="9" fontFamily="Space Mono, monospace" letterSpacing="2">FLORIDA</text>
              </svg>
              <div className={styles.mapLabel}>Active Training Locations</div>
            </div>
            <div className={styles.globalStats}>
              <div className={styles.gsItem}><div className={styles.gsNum}>FAA</div><div className={styles.gsLabel}>Licensed Training Airports</div></div>
              <div className={styles.gsItem}><div className={styles.gsNum}>VFR+</div><div className={styles.gsLabel}>300 Days Flying Weather</div></div>
              <div className={styles.gsItem}><div className={styles.gsNum}>DGCA</div><div className={styles.gsLabel}>Hours Count Toward CPL</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEGACY ═══ */}
      <section className={styles.legacySection} id="legacy">
        <div className={styles.container}>
          <div className={styles.legacyHeader}><div className={styles.eyebrowDark}>By the Numbers</div><h2 className={styles.sectionTitleDark}>Decades of Excellence,<br /><em>Measured in Altitude</em></h2></div>
          <div className={styles.statsGrid}>
            {[{ target: 2400, suffix: '+', label: 'Pilots Graduated' }, { target: 98, suffix: '%', label: 'Placement Rate' }, { target: 140, suffix: 'K+', label: 'Flight Hours Logged' }, { target: 42, suffix: '+', label: 'Airline Partners' }].map((stat, i) => (
              <div key={i} className={styles.statItem} data-stat data-target={stat.target} data-suffix={stat.suffix}><div className={styles.statNumber} data-stat-num>0</div><div className={styles.statLabel}>{stat.label}</div></div>
            ))}
          </div>
        </div>
        <div className={styles.legacyWatermark} aria-hidden="true">AVIORA</div>
      </section>

      {/* ═══ ALUMNI ═══ */}
      <section className={styles.alumniSection} id="alumni">
        <div className={styles.container}>
          <div className={styles.sectionHead}><div className={styles.eyebrowLight}>Alumni Voices</div><h2 className={styles.sectionTitle}>Captains Who Once Sat<br /><em>Where You Are Now</em></h2></div>
          <div className={styles.testimonialsGrid}>
            {[
              { initials: 'RK', text: 'Aviora didn\'t just teach me to fly. They taught me to command. Zero to 737 First Officer in 26 months — the standard of training here is genuinely world-class.', name: 'Rahul Kapoor', role: 'First Officer · IndiGo Airlines' },
              { initials: 'SM', text: 'The simulator scenarios are things most pilots never face in 30 years. By graduation I was unshakeable. No other academy came close to the depth here.', name: 'Sneha Mehta', role: 'Captain · AirAsia India' },
              { initials: 'AV', text: 'My mentor had 18,000 hours and treated me as a peer from day one. That relationship — that calibre of instruction — simply doesn\'t exist anywhere else.', name: 'Arjun Verma', role: 'Senior Captain · Emirates' },
            ].map((t, i) => (
              <div key={i} className={styles.tcard} data-card-reveal>
                <div className={styles.tcardQuoteMark}>&ldquo;</div>
                <blockquote className={styles.tcardText}>{t.text}</blockquote>
                <div className={styles.tcardAuthor}><div className={styles.tcardAvatar}>{t.initials}</div><div><div className={styles.tcardName}>{t.name}</div><div className={styles.tcardRole}>{t.role}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUICK CONTACT ═══ */}
      <section className={styles.hcSection} id="quick-contact">
        <div className={styles.container}>
          <div className={styles.sectionHead} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className={styles.eyebrowLight}>Operations & Enquiries</div>
            <h2 className={styles.sectionTitle}>Get in Touch with <em>Aviora</em></h2>
          </div>
          <div className={styles.hcGrid}>
            <div className={styles.hcCard} data-card-reveal>
              <div className={styles.hcIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <h3 className={styles.hcTitle}>Call Operations</h3>
              <div className={styles.hcText}>+91 40 2345 6789</div>
              <div className={styles.hcText}>+91 98765 43210 (WhatsApp)</div>
            </div>
            <div className={styles.hcCard} data-card-reveal>
              <div className={styles.hcIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <h3 className={styles.hcTitle}>Email Admissions</h3>
              <div className={styles.hcText}>admissions@avioraacademy.com</div>
              <div className={styles.hcText}>Response within 24 hours</div>
            </div>
            <div className={styles.hcCard} data-card-reveal>
              <div className={styles.hcIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              </div>
              <h3 className={styles.hcTitle}>Campus Headquarters</h3>
              <div className={styles.hcText}>3rd Floor, Skyline Plaza, Banjara Hills<br/>Hyderabad, Telangana — 500034</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={styles.ctaSection} id="cta">
        <div className={styles.ctaWatermark} aria-hidden="true">AVIORA</div>
        <div className={`${styles.container} ${styles.ctaContainer}`}>
          <div className={styles.ctaEyebrowWrap}><div className={styles.eyebrowDark} style={{ opacity: 1, transform: 'none' }}>Ready for Departure</div></div>
          <h2 className={styles.ctaTitle}>Are You Ready to<br /><em>Take the Controls?</em></h2>
          <p className={styles.ctaBody}>The cockpit waits only for those serious about the sky. Our 2025 intake is extremely limited — reserve your assessment today.</p>
          <div className={styles.ctaButtons}><Link href="/admissions" className={styles.btnCtaPrimary}>Enroll for 2025</Link><Link href="/contact" className={styles.btnCtaOutline}>Send an Enquiry</Link></div>
          <div className={styles.ctaTrust}><span>DGCA Certified</span><span className={styles.trustDot}>·</span><span>42 Airline Partners</span><span className={styles.trustDot}>·</span><span>98% Placement</span></div>
        </div>
      </section>
    </>
  );
}