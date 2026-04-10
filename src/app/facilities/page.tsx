'use client';
import Link from 'next/link';
import s from './facilities.module.css';

const FACILITY_SECTIONS = [
  {
    tag: '01',
    title: 'FBS Full-Motion Simulator',
    sub: 'DGCA-Recognised · Level D Equivalent',
    bg: 'base',
    img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&q=80',
    specs: [
      'Full Cessna 172 cockpit — exact replica hardware',
      '180° visual projection system — day, dusk, night',
      'DGCA-aligned emergency procedure scenarios',
      'IMC and VMC conditions with real weather patterns',
    ],
    desc: 'The Aviora FBS simulator is where instrument approaches are rehearsed, emergency procedures are drilled, and night flying is mastered — before a single real aircraft hour is logged. Every cadet completes a structured simulator curriculum before USA flight training.',
  },
  {
    tag: '02',
    title: 'Digital Ground School Classrooms',
    sub: '5 Classrooms · 40-Seat Capacity Each',
    bg: 'surface',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80',
    specs: [
      '5 smart digital classrooms with projected displays',
      'DGCA syllabus integrated — Air Nav, Met, Tech, Regs',
      '40-seat capacity per room — small batch structure',
      'Aviation chart library and ICAO document access',
    ],
    desc: 'Ground school is where the foundation is built. Aviora classrooms are configured specifically for aviation theory — charts fixed to walls, METAR/TAF boards, instrument diagrams. DGCA aligned across all four CPL written papers.',
  },
  {
    tag: '03',
    title: 'Mock Cabin + Grooming Laboratory',
    sub: 'Airline-Replica Environment',
    bg: 'panel',
    img: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=900&q=80',
    specs: [
      'Airline-replica cabin setup with full row seating',
      'Emergency equipment stations — life vests, exits, rafts',
      'Grooming lab with uniform stations and presentation mirrors',
      'Video recording for debrief and interview preparation',
    ],
    desc: 'The Cabin Crew mock cabin simulates real airline emergency procedures, in-flight service, and passenger management. Grooming sessions here build the professional presentation that IndiGo, Air India, and international carriers evaluate at interview.',
  },
  {
    tag: '04',
    title: 'Aviation Library + Mentorship Rooms',
    sub: 'Study · Research · 1-on-1 Sessions',
    bg: 'base',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80',
    specs: [
      'Curated aviation titles — CPL prep, ATC, meteorology',
      'ICAO documents and DGCA Aeronautical Information Publications',
      'Dedicated 1-on-1 pilot mentorship rooms',
      'Self-study areas with chart tables and instrument trainers',
    ],
    desc: 'Every Aviora pilot cadet has access to structured mentorship. Rooms are assigned to working pilots and senior instructors for one-on-one sessions. The library is purpose-built — no general collection, only aviation.',
  },
];

const STATS = [
  { num: '6', label: 'Facility Types', sub: 'Simulator · Classrooms · Cabin · Library · Mentorship · Briefing' },
  { num: '1', label: 'FBS Level D', sub: 'Full Cessna 172 cockpit · 180° visual' },
  { num: '5', label: 'Digital Classrooms', sub: '40-seat capacity per room' },
  { num: '1', label: 'Mock Cabin', sub: 'Full airline-replica environment' },
];

export default function FacilitiesPage() {
  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=80"
            alt="Aviora Facilities"
            className={s.heroBgImg}
            fetchPriority="high"
            loading="eager"
          />
          <div className={s.heroOverlay} />
          <div className={s.heroGlow} />
        </div>
        <div className={s.heroContent}>
          <p className={s.heroTag}><span className={s.heroLine} />Aviora Aviation Academy · Facilities</p>
          <h1 className={s.heroH1}>
            Where Aviation<br /><em>Professionals Are Made.</em>
          </h1>
          <p className={s.heroP}>
            The difference between a cadet who passes DGCA and one who doesn't often comes down to infrastructure.
            Aviora's facilities are designed around one outcome — producing airline-ready professionals.
          </p>
        </div>

        {/* Stats strip at hero bottom */}
        <div className={s.statStrip}>
          {STATS.map(st => (
            <div key={st.label} className={s.statItem}>
              <span className={s.statNum}>{st.num}</span>
              <span className={s.statLabel}>{st.label}</span>
              <span className={s.statSub}>{st.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITY SECTIONS */}
      {FACILITY_SECTIONS.map((facility, i) => (
        <section
          key={facility.tag}
          className={`${s.facilitySection} ${facility.bg === 'surface' ? s.bgSurface : facility.bg === 'panel' ? s.bgPanel : s.bgBase}`}
        >
          <div className={s.facilityInner}>
            <div className={`${s.facilityContent} ${i % 2 === 1 ? s.facilityContentReverse : ''}`}>
              {/* Text side */}
              <div className={s.facilityText}>
                <p className={s.eyebrow}>{`Facility ${facility.tag}`}</p>
                <h2 className={s.facilityH2}>{facility.title}</h2>
                <p className={s.facilitySub}>{facility.sub}</p>
                <p className={s.facilityDesc}>{facility.desc}</p>
                <ul className={s.specList}>
                  {facility.specs.map(spec => (
                    <li key={spec} className={s.specItem}>
                      <span className={s.specArrow}>→</span>
                      <span className={s.specText}>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image side */}
              <div className={s.facilityImgWrap}>
                <img src={facility.img} alt={facility.title} className={s.facilityImg} loading="lazy" />
                <div className={s.facilityImgOverlay} />
                <div className={s.facilityTag}>{facility.tag}</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <p className={s.eyebrowInv}>Visit the Campus</p>
          <h2 className={s.ctaH2}>
            Experience the Facilities<br /><em>In Person.</em>
          </h2>
          <p className={s.ctaP}>
            Campus visits are scheduled every Saturday. Walk through the simulator, see the classrooms,
            and meet the instructors. No obligation — just clarity.
          </p>
          <div className={s.ctaBtns}>
            <Link href="/admissions" className={s.btnGold}>Apply Now</Link>
            <Link href="/contact" className={s.btnLine}>Schedule a Campus Visit</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
