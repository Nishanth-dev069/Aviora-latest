'use client';

import React from 'react';
import Link from 'next/link';
import s from './programs.module.css';

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
      { label: 'Minimum Education', pilot: '10+2 · Physics & Maths · 50%', cabin: '10+2 · Any Stream · 50%', global: '10+2 · Physics & Maths · 50%', typerating: 'Valid DGCA CPL' },
      { label: 'Medical Requirement', pilot: 'DGCA Class 2', cabin: 'Standard Fitness', global: 'DGCA Class 1 (FAA)', typerating: 'Valid DGCA Class 1' },
      { label: 'Minimum Age', pilot: '17 years', cabin: '18 years', global: '18 years', typerating: '21 years' },
    ],
  },
  {
    category: 'TRAINING',
    rows: [
      { label: 'Total Duration', pilot: '18 – 24 Months', cabin: '6 Months', global: '7 – 10 Months', typerating: '6 – 10 Weeks' },
      { label: 'Flight Hours', pilot: '252 Hours', cabin: '—', global: '225 – 252 Hours', typerating: 'Simulator Only' },
      { label: 'Aircraft', pilot: 'Cessna 172', cabin: '—', global: 'PA-34 Piper Seneca', typerating: 'A320 / B737 / ATR' },
      { label: 'Training Location', pilot: 'India + USA', cabin: 'Hyderabad Campus', global: 'Phoenix AZ + California Sacramento', typerating: 'Vietnam · Madrid · Bangkok' },
      { label: 'Simulator', pilot: 'FBS Level D', cabin: 'Mock Cabin', global: 'FAA Certified FTD', typerating: 'Full Flight Simulator (FFS)' },
    ],
  },
  {
    category: 'EXAMINATIONS',
    rows: [
      { label: 'Written Papers', pilot: '4 DGCA Papers', cabin: 'Internal Assessments', global: 'All FAA Written Exams', typerating: 'Aircraft Systems + Procedures' },
      { label: 'Final Assessment', pilot: 'DGCA Skill Test', cabin: 'Airline-Style Interview', global: 'FAA Checkride', typerating: 'DGCA Licence Skill Test' },
      { label: 'Authority', pilot: 'DGCA India', cabin: 'Aviora Certification', global: 'FAA + DGCA Credit', typerating: 'DGCA India' },
    ],
  },
  {
    category: 'CAREER OUTCOMES',
    rows: [
      { label: 'Qualification Awarded', pilot: 'DGCA CPL + IR', cabin: 'Certified Cabin Crew', global: 'FAA Hours + CPL Credit', typerating: 'DGCA Type Rating Endorsement' },
      { label: 'Immediate Role', pilot: 'FO / First Officer', cabin: 'Airline Cabin Crew', global: 'CPL with International Hours', typerating: 'First Officer / Co-Pilot' },
      { label: 'Starting Salary', pilot: '₹2.0L – ₹3.2L / month', cabin: '₹50K – ₹75K / month', global: '₹2.0L – ₹3.2L / month', typerating: '₹2.0L – ₹3.2L / month' },
      { label: 'Placement Support', pilot: 'Airline Placement Assistance', cabin: 'Airline Placement Assistance', global: 'Airline Placement Assistance', typerating: 'Airline Placement Assistance' },
    ],
  },
  {
    category: 'INTAKE',
    rows: [
      { label: 'Annual Intake', pilot: '40 seats', cabin: '75 seats', global: '40 seats', typerating: 'Max 85 cadets / year' },
      { label: 'Next Batch', pilot: 'July 2026', cabin: 'August 2026', global: 'October 2026', typerating: 'Rolling Intake' },
      { label: 'Status', pilot: 'Open', cabin: 'Open', global: 'Open', typerating: 'Enquire' },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className={s.page}>

      {/* ── 1. HERO ── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
            alt="Aviora Programs Cockpit"
            className={s.heroBgImg}
          />
          <div className={s.heroLinearOverlay} />
        </div>

        <svg className={s.flightPathSvg} viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path
            className={s.flightPathLine}
            d="M 0,600 C 300,500 400,200 1000,100"
            fill="none"
            stroke="rgba(100, 145, 222, 0.4)"
            strokeWidth="3"
            strokeDasharray="10, 10"
          />
        </svg>

        <div className={s.heroContent}>
          <h1 className={s.heroH1}>Shape Your Future<br />in the Skies</h1>
          <p className={s.heroP}>
            Four highly-specialised pathways designed with one mission — putting elite Indian aviation professionals into global cockpits and world-class cabins.
          </p>
        </div>

        <div className={s.heroStatsBar}>
          <div className={s.heroStat}>
            <span className={s.statNum}>1,200+</span>
            <span className={s.statLabel}>Graduates</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.heroStat}>
            <span className={s.statNum}>85K+</span>
            <span className={s.statLabel}>Flight Hours</span>
          </div>
          <div className={s.statDivider} />
          <div className={s.heroStat}>
            <span className={s.statNum}>92%</span>
            <span className={s.statLabel}>Placement Rate</span>
          </div>
        </div>
      </section>

      {/* ── 2. PROGRAM CARDS ── */}
      <section className={s.cardSection}>
        <div className={s.cardSectionHead}>
          <p className={s.eyebrow}>Our Programs</p>
          <h2 className={s.cardSectionH2}>Four Pathways.<br /><em>One Destination.</em></h2>
        </div>

        <div className={s.cardGrid}>
          {PROGRAMS.map((p) => (
            <Link key={p.num} href={p.href} className={s.card}>

              {/* Background image */}
              <div className={s.cardImgWrapper}>
                <img src={p.img} alt={p.title} className={s.cardBgImg} />
                <div className={s.cardImgOverlay} />
              </div>

              {/* Large decorative number */}
              <span className={s.cardNum}>{p.num}</span>

              {/* Content */}
              <div className={s.cardContent}>
                <p className={s.cardTag}>{p.tag}</p>
                <h2 className={s.cardTitle}>{p.title}</h2>
                <p className={s.cardSub}>{p.sub}</p>
                <p className={s.cardDesc}>{p.desc}</p>

                <div className={s.cardMeta}>
                  <div className={s.cardMetaItem}>
                    <span className={s.cardMetaLabel}>Duration</span>
                    <span className={s.cardMetaValue}>{p.duration}</span>
                  </div>
                  <div className={s.cardMetaDivider} />
                  <div className={s.cardMetaItem}>
                    <span className={s.cardMetaLabel}>Outcome</span>
                    <span className={s.cardMetaValue}>{p.outcome}</span>
                  </div>
                </div>

                <span className={s.cardCta}>
                  Explore Program
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* Shimmer on hover */}
              <div className={s.cardShimmer} />
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ── */}
      <section className={s.tableSection}>
        <div className={s.tableSectionHead}>
          <h2 className={s.tableSectionH2}>
            Find the Right <em>Pathway.</em>
          </h2>
        </div>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.thLabel}></th>
                <th className={s.thCol}><span className={s.thName}>Pilot Training</span></th>
                <th className={s.thCol}><span className={s.thName}>Cabin Crew</span></th>
                <th className={s.thCol}><span className={s.thName}>Global Training</span></th>
                <th className={s.thCol}><span className={s.thName}>Type Rating</span></th>
              </tr>
            </thead>
            <tbody>
              {TABLE_CATEGORIES.map((cat, i) => (
                <React.Fragment key={i}>
                  <tr className={s.trCatHeader}>
                    <td colSpan={5} className={s.tdCatLabel}>{cat.category}</td>
                  </tr>
                  {cat.rows.map((row) => (
                    <tr key={row.label} className={s.tr}>
                      <td className={s.tdLabel}>{row.label}</td>
                      <td className={s.tdCell}>{row.pilot}</td>
                      <td className={s.tdCell}>{row.cabin}</td>
                      <td className={s.tdCell}>{row.global}</td>
                      <td className={s.tdCell}>{row.typerating}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  );
}