'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './pilot.module.css';

const PILOT_PATHWAY = [
  {
    phase: 'Phase 1',
    title: 'DGCA Ground School',
    duration: '4 – 6 Months',
    detail: 'Max 15 cadets per batch · DGCA-approved instructors · 5 subject papers',
    desc: 'Structured classroom instruction across all five DGCA CPL examination subjects — Air Navigation, Air Regulations, Aviation Meteorology, Technical General, and Technical Specific. Aviora\'s ground school follows the latest DGCA syllabus (CAR Section 7, Series B) with small batches of maximum 15 cadets. Includes topic-wise mock papers, full-length timed tests, and one-on-one doubt sessions with DGCA-approved instructors. Target pass rate: 95% first attempt.',
  },
  {
    phase: 'Phase 2',
    title: 'FBS Simulator Training',
    duration: '2 – 3 Months',
    detail: 'DGCA-counted sim hours · IMC / IFR scenarios · Emergency drill library',
    desc: 'Hands-on time in a Flight Based Simulator replicating the Cessna 172 cockpit — same instruments, same feel, same emergency scenarios you\'ll face in the air. FBS hours count toward total flight time under DGCA rules. Cadets train instrument approaches (ILS, VOR, NDB), crosswind landings, engine-out procedures, stall recovery, and ATC communication under simulated IMC conditions.',
  },
  {
    phase: 'Phase 3',
    title: 'International Flight Training — USA',
    duration: '6 – 10 Months',
    detail: 'FAA Part 141 schools · Phoenix AZ + Florida · 200 hours minimum',
    desc: 'All practical flight hours are flown in the United States on FAA-registered Cessna 172 aircraft from Part 141-approved flight schools in Phoenix, Arizona and Florida. Cadets accumulate a minimum of 200 hours total time — including 100 hours PIC, 20 hours cross-country, 10 hours instrument, and 5 hours night flying — meeting DGCA CPL hour requirements in full.',
  },
  {
    phase: 'Phase 4',
    title: 'Airline Preparation & CPL Skill Test',
    duration: '1 – 2 Months',
    detail: 'DGCA Skill Test prep · Psychometric coaching · 42 airline partner network',
    desc: 'The final stage transitions cadets from trained pilots to airline-ready professionals. Includes DGCA CPL Skill Test preparation, psychometric and aptitude test coaching, airline group exercise workshops, and mock technical and HR interviews with active airline captains. Aviora\'s placement desk actively coordinates with 42 airline partners for batch walk-ins and type rating sponsorship discussions.',
  },
];

const DGCA_SUBJECTS = [
  {
    num: '01',
    name: 'Air Navigation',
    desc: 'Charts and map projections, magnetic variation, dead reckoning, VOR/NDB/GPS position fixing, flight planning, fuel calculations, and en-route track corrections. Typically the highest failure rate DGCA paper — Aviora allocates maximum hours here.',
  },
  {
    num: '02',
    name: 'Air Regulations',
    desc: 'ICAO Annexes 1–19, DGCA CARs and AIC circulars, Air Traffic Services structure, airspace classification, Rules of the Air, licence requirements, aircraft registration, and accident/incident reporting under AAIB.',
  },
  {
    num: '03',
    name: 'Aviation Meteorology',
    desc: 'ICAO standard atmosphere, clouds, visibility and fog formation, thunderstorm structure, mountain wave turbulence, wind shear, icing, tropical weather systems, and METAR/TAF/SIGMET decoding.',
  },
  {
    num: '04',
    name: 'Technical General',
    desc: 'Principles of flight, high-speed aerodynamics, aircraft structures, piston and turbine engine theory, propellers, carburettor icing, fuel systems, hydraulics, electrical systems, and pressurisation.',
  },
  {
    num: '05',
    name: 'Technical Specific',
    desc: 'The Cessna 172 in full — POH limitations, weight and balance, performance charts, systems descriptions, emergency checklists, and aircraft-specific DGCA regulations. Aviora uses the actual Cessna 172S POH.',
  },
];

const HIGHLIGHTS = [
  { num: '200+', label: 'Flight Hours', sub: 'Minimum total time toward DGCA CPL' },
  { num: '95%', label: 'First-Attempt Pass', sub: 'DGCA ground school target' },
  { num: '42+', label: 'Airline Partners', sub: 'Active placement coordination' },
  { num: '15', label: 'Max Batch Size', sub: 'Small cohorts, personal attention' },
];

export default function PilotTrainingPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(s.visible); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${s.reveal}`).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80" alt="Cockpit view" className={s.heroBgImg} />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/programs" className={s.bcLink}>← Programs</Link>
            <span className={s.bcSep}>/</span>
            <span className={s.bcCurrent}>Pilot Training</span>
          </nav>
          <div className={s.heroTag}>01 — Commercial Aviation</div>
          <h1 className={s.heroH1}>Commercial Pilot<br /><em>Training Program</em></h1>
          <p className={s.heroSub}>DGCA ground school · FBS simulator · International flight training in the USA. The complete Zero to CPL pathway — guided by airline captains who have sat in every seat you are about to occupy.</p>
          <div className={s.heroBadges}>
            {['18–24 Months', '10+2 Physics & Maths', 'DGCA CPL Outcome', 'Min. Age 17'].map((b, i) => (
              <span className={s.badge} key={i}>{b}</span>
            ))}
          </div>
          <div className={s.heroCtas}>
            <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
            <Link href="/contact" className={s.btnOutline}>Talk to a Pilot</Link>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className={s.heroStats}>
          {HIGHLIGHTS.map((h, i) => (
            <div className={s.heroStat} key={i}>
              <span className={s.heroStatNum}>{h.num}</span>
              <span className={s.heroStatLabel}>{h.label}</span>
              <span className={s.heroStatSub}>{h.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className={s.introStrip}>
        <div className={s.introText}>
          The Aviora pilot training program is structured in four sequential phases — each one building upon the last, each one non-negotiable. There are no shortcuts here.
        </div>
        <div className={s.introDivider} />
        <div className={s.introDetail}>
          Designed to meet DGCA requirements in full, while exceeding them in every dimension that matters to airlines. Our cadets graduate with the technical knowledge and psychological composure that airline selection panels look for.
        </div>
      </div>

      {/* PHASE TIMELINE */}
      <section className={s.phaseSection}>
        <div className={s.phaseSectionHead + ' ' + s.reveal}>
          <span className={s.eyebrow}>Training Pathway</span>
          <h2 className={s.sectionH2}>Your Journey from<br /><em>Zero to the Cockpit</em></h2>
        </div>

        <div className={s.timeline}>
          {PILOT_PATHWAY.map((step, i) => (
            <div className={`${s.step} ${s.reveal}`} key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={s.stepLeft}>
                <div className={s.stepCircle}>{String(i + 1).padStart(2, '0')}</div>
                {i < PILOT_PATHWAY.length - 1 && <div className={s.stepLine} />}
              </div>
              <div className={s.stepBody}>
                <div className={s.stepPhaseTag}>{step.phase}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <div className={s.stepMetas}>
                  <span className={s.stepMeta}>⏱ {step.duration}</span>
                  <span className={s.stepMeta}>◆ {step.detail}</span>
                </div>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DGCA SUBJECTS */}
      <section className={s.dgcaSection}>
        <div className={s.dgcaHead + ' ' + s.reveal}>
          <span className={s.eyebrow}>Ground School</span>
          <h2 className={s.sectionH2}>Five DGCA Subjects.<br /><em>Zero Compromise.</em></h2>
          <p className={s.sectionSub}>Aviora's ground school is structured around the DGCA CPL written examination — all five papers, taught in sequence, tested rigorously throughout.</p>
        </div>
        <div className={s.subjectsGrid}>
          {DGCA_SUBJECTS.map((sub, i) => (
            <div className={`${s.subjectCard} ${s.reveal}`} key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={s.subjectNum}>{sub.num}</div>
              <h3 className={s.subjectName}>{sub.name}</h3>
              <p className={s.subjectDesc}>{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <div className={s.gallery}>
        {[
          { src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=80', cap: 'Pre-flight · Cessna 172' },
          { src: 'https://images.unsplash.com/photo-1559628233-100c798642d8?w=900&q=80', cap: 'Instrument flying · IFR training' },
          { src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80', cap: 'USA training · Open airspace' },
        ].map((g, i) => (
          <div className={s.galleryItem} key={i}>
            <img src={g.src} alt={g.cap} className={s.galleryImg} loading="lazy" />
            <div className={s.galleryFade} />
            <span className={s.galleryCap}>{g.cap}</span>
          </div>
        ))}
      </div>

      {/* ELIGIBILITY */}
      <section className={s.eligSection}>
        <div className={s.eligInner}>
          <div className={`${s.eligCard} ${s.reveal}`}>
            <span className={s.eyebrow}>Who Can Apply</span>
            <h3 className={s.eligH3}>Eligibility<br /><em>Requirements</em></h3>
            <ul className={s.eligList}>
              {[
                '10+2 with Physics and Mathematics (minimum 50%)',
                'Minimum age 17 years at time of enrollment',
                'Valid Class 2 DGCA Medical Certificate (Class 1 before solo)',
                'ICAO English Proficiency — Level 4 or above',
                'Indian nationality or valid OCI/PIO for DGCA CPL',
              ].map((item, i) => (
                <li className={s.eligItem} key={i}>
                  <span className={s.eligArrow}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${s.ctaCard} ${s.reveal}`}>
            <div className={s.ctaCardEye}>Limited Intake · 2025 Batch</div>
            <h3 className={s.ctaCardH3}>Ready to Begin?</h3>
            <p className={s.ctaCardP}>Our admissions team reviews all applications within 72 hours. Speak with an active airline captain before you commit — no pressure, just honest guidance.</p>
            <div className={s.ctaCardBtns}>
              <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
              <Link href="/contact" className={s.btnOutline}>Talk to a Pilot</Link>
            </div>
            <div className={s.ctaCardTrust}>
              <span>DGCA Certified</span>
              <span className={s.dot}>·</span>
              <span>42 Airline Partners</span>
              <span className={s.dot}>·</span>
              <span>98% Placement</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
