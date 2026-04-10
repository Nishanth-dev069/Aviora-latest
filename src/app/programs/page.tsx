'use client';

import Link from 'next/link';
import s from './programs.module.css';
import CessnaFly from '@/components/CessnaFly';

/* ── DATA ──────────────────────────────────────────────────── */
const PROGRAMS = [
  {
    num: '01',
    tag: 'DGCA · CPL',
    title: 'Pilot Training',
    sub: 'Zero to Commercial Pilot Licence',
    desc: 'Complete ground school, FBS simulator, and international flight training in the USA. DGCA-aligned across all 4 written papers. The full CPL pathway.',
    duration: '18 – 24 Months',
    outcome: 'DGCA CPL + Instrument Rating',
    href: '/programs/pilot-training',
    img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&q=80',
  },
  {
    num: '02',
    tag: 'Airlines · IndiGo · AirAsia',
    title: 'Cabin Crew',
    sub: 'Airline-Ready in 6 Months',
    desc: 'Grooming, safety, emergency procedures, mock cabin, and airline interview coaching. Structured for IndiGo, Air India, and international carrier standards.',
    duration: '6 Months',
    outcome: 'Certified Cabin Crew — Airline Ready',
    href: '/programs/cabin-crew',
    img: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=900&q=80',
  },
  {
    num: '03',
    tag: 'FAA · USA · PA-34',
    title: 'Global Training',
    sub: 'Flight Hours in America',
    desc: 'FAA Part 141 certified schools. Phoenix AZ and California Sacramento. PA-34 Piper Seneca multi-engine. 225–252 hours depending on program. The international edge India cannot provide.',
    duration: '7 – 10 Months',
    outcome: '200+ FAA Flight Hours · CPL International Credit',
    href: '/programs/global-training',
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=900&q=80',
  },
  {
    num: '04',
    tag: 'A320 · B737 · ATR',
    title: 'Type Rating',
    sub: 'From CPL to Airline First Officer',
    desc: "Aviora's global type rating partnerships across Vietnam, Madrid Spain, and Bangkok. A320, B737, and ATR programmes for DGCA CPL holders. Max 85 cadets per annual intake.",
    duration: '6 – 10 Weeks',
    outcome: 'DGCA Type Rating — Airline Entry',
    href: '/programs/type-rating',
    img: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=900&q=80',
  },
];

const TABLE_CATEGORIES = [
  {
    category: 'ELIGIBILITY',
    rows: [
      { label: 'Minimum Education',   pilot: '10+2 · Physics & Maths · 50%', cabin: '10+2 · Any Stream · 50%', global: '10+2 · Physics & Maths · 50%', typerating: 'Valid DGCA CPL' },
      { label: 'Medical Requirement', pilot: 'DGCA Class 2',                  cabin: 'Standard Fitness',         global: 'DGCA Class 1 (FAA)',            typerating: 'Valid DGCA Class 1' },
      { label: 'Minimum Age',         pilot: '17 years',                       cabin: '18 years',                 global: '18 years',                      typerating: '21 years' },
    ],
  },
  {
    category: 'TRAINING',
    rows: [
      { label: 'Total Duration',     pilot: '18 – 24 Months',    cabin: '6 Months',          global: '7 – 10 Months',                      typerating: '6 – 10 Weeks',         highlight: true },
      { label: 'Flight Hours',       pilot: '252 Hours',          cabin: '—',                 global: '225 – 252 Hours',                    typerating: 'Simulator Only' },
      { label: 'Aircraft',           pilot: 'Cessna 172',         cabin: '—',                 global: 'PA-34 Piper Seneca',                 typerating: 'A320 / B737 / ATR' },
      { label: 'Training Location',  pilot: 'India + USA',        cabin: 'Hyderabad Campus',  global: 'Phoenix AZ + California Sacramento', typerating: 'Vietnam · Madrid · Bangkok' },
      { label: 'Simulator',          pilot: 'FBS Level D',        cabin: 'Mock Cabin',         global: 'FAA Certified FTD',                  typerating: 'Full Flight Simulator (FFS)' },
    ],
  },
  {
    category: 'EXAMINATIONS',
    rows: [
      { label: 'Written Papers',   pilot: '4 DGCA Papers',     cabin: 'Internal Assessments',    global: 'All FAA Written Exams',  typerating: 'Aircraft Systems + Procedures' },
      { label: 'Final Assessment', pilot: 'DGCA Skill Test',   cabin: 'Airline-Style Interview', global: 'FAA Checkride',          typerating: 'DGCA Licence Skill Test' },
      { label: 'Authority',        pilot: 'DGCA India',        cabin: 'Aviora Certification',    global: 'FAA + DGCA Credit',      typerating: 'DGCA India' },
    ],
  },
  {
    category: 'CAREER OUTCOMES',
    rows: [
      { label: 'Qualification Awarded', pilot: 'DGCA CPL + IR',              cabin: 'Certified Cabin Crew',      global: 'FAA Hours + CPL Credit',       typerating: 'DGCA Type Rating Endorsement', highlight: true },
      { label: 'Immediate Role',        pilot: 'FO / First Officer',          cabin: 'Airline Cabin Crew',        global: 'CPL with International Hours', typerating: 'First Officer / Co-Pilot',     highlight: true },
      { label: 'Starting Salary',       pilot: '₹2.0L – ₹3.2L / month',      cabin: '₹50K – ₹75K / month',       global: '₹2.0L – ₹3.2L / month',       typerating: '₹2.0L – ₹3.2L / month' },
      { label: 'Placement Support',     pilot: 'Airline Placement Assistance', cabin: 'Airline Placement Assistance', global: 'Airline Placement Assistance', typerating: 'Airline Placement Assistance' },
    ],
  },
  {
    category: 'INTAKE',
    rows: [
      { label: 'Annual Intake', pilot: '40 seats',        cabin: '75 seats',       global: '40 seats',       typerating: 'Max 85 cadets / year' },
      { label: 'Next Batch',    pilot: 'July 2026',       cabin: 'August 2026',    global: 'October 2026',   typerating: 'Rolling Intake',       highlight: true },
      { label: 'Status',        pilot: 'Open',            cabin: 'Open',           global: 'Open',           typerating: 'Enquire' },
    ],
  },
];

/* ── COMPONENT ─────────────────────────────────────────────── */
export default function ProgramsPage() {
  return (
    <main className={s.page}>

      {/* ── 1. HERO ── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1583396618422-e4bde3d21c58?w=1920&q=80"
            alt="Aviora Programs"
            className={s.heroBgImg}
            fetchPriority="high"
            loading="eager"
          />
          <div className={s.heroImgOverlay} />
        </div>
        <div className={s.heroContent}>
          <p className={s.heroTag}>
            <span className={s.heroTagLine} />
            Aviora Aviation Academy · Programmes
          </p>
          <h1 className={s.heroH1}>
            Choose Your<br /><em>Altitude.</em>
          </h1>
          <p className={s.heroP}>
            Four pathways. One mission — putting Indian aviation professionals into global cockpits and world-class cabins. From your first ground school lesson to your airline type rating.
          </p>
        </div>
        <div className={s.heroScroll}>
          <span className={s.heroScrollLabel}>scroll</span>
          <div className={s.heroScrollLine} />
        </div>
      </section>

      {/* ── 2. PROGRAM CARDS ── */}
      <section className={s.cardSection}>
        <div className={s.cardGrid}>
          {PROGRAMS.map((p, i) => (
            <Link key={p.num} href={p.href} className={`${s.card} ${i === 0 ? s.cardAccent : ''}`}>
              {/* BG image */}
              <img src={p.img} alt={p.title} className={s.cardBgImg} />
              <div className={s.cardBgOverlay} />

              {/* Gold top sweep on hover */}
              <div className={s.cardTopLine} />

              {/* Content */}
              <div className={s.cardInner}>
                <span className={s.cardNum}>{p.num}</span>
                <span className={s.cardTag}>{p.tag}</span>
                <h2 className={s.cardTitle}>{p.title}</h2>
                <p className={s.cardSub}>{p.sub}</p>
                <p className={s.cardDesc}>{p.desc}</p>

                <div className={s.cardMeta}>
                  <div className={s.cardMetaItem}>
                    <span className={s.cardMetaLabel}>Duration</span>
                    <span className={s.cardMetaVal}>{p.duration}</span>
                  </div>
                  <div className={s.cardMetaItem}>
                    <span className={s.cardMetaLabel}>Outcome</span>
                    <span className={s.cardMetaVal}>{p.outcome}</span>
                  </div>
                </div>

                <span className={s.cardCta}>
                  Explore Programme <span className={s.cardArrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cessna transition */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '10px' }}>
        <CessnaFly direction="right" size={44} opacity={0.12} top="50%" delay="1s" />
      </div>

      {/* ── 3. COMPARISON TABLE ── */}
      <section className={s.tableSection}>
        <div className={s.tableSectionHead}>
          <p className={s.eyebrow}>Programme Comparison</p>
          <h2 className={s.tableSectionH2}>
            Find the Right<br /><em>Pathway.</em>
          </h2>
          <p className={s.tableSectionP}>
            Every programme at Aviora is built around a clear outcome. Use this table to compare eligibility, training structure, examination requirements, and career results across all four pathways.
          </p>
        </div>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th className={s.thLabel}></th>
                <th className={s.thCol + ' ' + s.thPilot}>
                  <span className={s.thNum}>01</span>
                  <span className={s.thName}>Pilot Training</span>
                  <span className={s.thSub}>DGCA CPL</span>
                </th>
                <th className={s.thCol + ' ' + s.thCabin}>
                  <span className={s.thNum}>02</span>
                  <span className={s.thName}>Cabin Crew</span>
                  <span className={s.thSub}>Airline-Ready</span>
                </th>
                <th className={s.thCol + ' ' + s.thGlobal}>
                  <span className={s.thNum}>03</span>
                  <span className={s.thName}>Global Training</span>
                  <span className={s.thSub}>FAA · USA</span>
                </th>
                <th className={s.thCol + ' ' + s.thType}>
                  <span className={s.thNum}>04</span>
                  <span className={s.thName}>Type Rating</span>
                  <span className={s.thSub}>A320 · B737 · ATR</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_CATEGORIES.map((cat) => (
                <>
                  {/* Category header row */}
                  <tr key={cat.category} className={s.trCatHeader}>
                    <td colSpan={5} className={s.tdCatLabel}>{cat.category}</td>
                  </tr>
                  {/* Data rows */}
                  {cat.rows.map((row, ri) => (
                    <tr
                      key={row.label}
                      className={`${s.tr} ${ri % 2 === 1 ? s.trAlt : ''} ${row.highlight ? s.trKey : ''}`}
                    >
                      <td className={s.tdLabel}>{row.label}</td>
                      <td className={s.tdCell}>{row.pilot}</td>
                      <td className={s.tdCell}>{row.cabin}</td>
                      <td className={s.tdCell}>{row.global}</td>
                      <td className={s.tdCell}>{row.typerating}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className={s.tfootLabel}>Links</td>
                <td className={s.tfootCol}>
                  <Link href="/programs/pilot-training" className={s.tableCtaLink}>Pilot Training →</Link>
                </td>
                <td className={s.tfootCol}>
                  <Link href="/programs/cabin-crew" className={s.tableCtaLink}>Cabin Crew →</Link>
                </td>
                <td className={s.tfootCol}>
                  <Link href="/programs/global-training" className={s.tableCtaLink}>Global Training →</Link>
                </td>
                <td className={s.tfootCol}>
                  <Link href="/programs/type-rating" className={s.tableCtaLink}>Type Rating →</Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ── 4. ADMISSIONS STRIP ── */}
      <section className={s.admStrip}>
        <div className={s.admInner}>
          <div>
            <p className={s.eyebrow}>Limited Intake · Quality Controlled</p>
            <h2 className={s.admH2}>
              Applications Now<br /><em>Open.</em>
            </h2>
          </div>
          <div className={s.admRight}>
            <Link href="/admissions" className={s.btnGold}>Apply Now</Link>
            <Link href="/contact" className={s.btnLine}>Talk to Admissions</Link>
          </div>
        </div>
      </section>

      {/* ── 5. COUNSELLOR STRIP ── */}
      <div className={s.counselStrip}>
        <div className={s.counselInner}>
          <span className={s.counselDiamond}>◆</span>
          <p className={s.counselP}>
            &ldquo;Every programme we offer is designed around one outcome — airline employment. We do not run programmes that don't have a clear career trajectory.&rdquo;
          </p>
          <Link href="/contact" className={s.counselLink}>Speak with a Counsellor →</Link>
        </div>
      </div>

    </main>
  );
}
