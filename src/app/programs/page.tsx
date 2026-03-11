'use client';
import Link from 'next/link';
import s from './programs.module.css';

/* ─── COMPARISON DATA ─── */
interface CompRow {
  label: string;
  pilot: string;
  cabin: string;
  global: string;
  key?: boolean;   // highlighted row
}

const ROWS: CompRow[] = [
  {
    label: 'Program Duration',
    pilot: '18 – 24 Months',
    cabin: '6 Months',
    global: '3 – 6 Months',
    key: false,
  },
  {
    label: 'Educational Eligibility',
    pilot: '10+2 with Physics & Mathematics (min. 50%)',
    cabin: '10+2 Any Stream (min. 50%)',
    global: '10+2 Any Stream · Existing CPL holders preferred',
    key: false,
  },
  {
    label: 'Minimum Age',
    pilot: '17 Years',
    cabin: '18 Years',
    global: '18 Years',
    key: false,
  },
  {
    label: 'Medical Requirement',
    pilot: 'DGCA Class 2 Medical Certificate — mandatory before first solo',
    cabin: 'Standard fitness — no aviation medical required',
    global: 'FAA Class 3 Medical (for flight hours) — arranged by Aviora in USA',
    key: false,
  },
  {
    label: 'Language Requirement',
    pilot: 'English proficiency — ICAO Level 4 minimum',
    cabin: 'Conversational English — tested at interview',
    global: 'ICAO Level 5 English recommended for USA ATC communication',
    key: false,
  },
  {
    label: 'Training Location',
    pilot: 'Hyderabad (Ground + Sim) → USA (Flight Hours)',
    cabin: 'Hyderabad — Aviora Campus',
    global: 'Phoenix, Arizona + Florida, USA — FAA Part 141 Schools',
    key: false,
  },
  {
    label: 'Aircraft Type',
    pilot: 'Cessna 172 Skyhawk (C172S)',
    cabin: 'Not applicable — mock cabin used',
    global: 'Cessna 172 (PPL phase) → Piper Seminole PA-44 (Multi-engine)',
    key: false,
  },
  {
    label: 'Total Flight Hours',
    pilot: '200 hours total (FAA + DGCA combined)',
    cabin: 'Not applicable',
    global: '60 – 200 hours depending on program entry level',
    key: false,
  },
  {
    label: 'Simulator Hours',
    pilot: 'FBS simulator — DGCA counted toward total time',
    cabin: 'Mock aircraft cabin drills — not flight simulation',
    global: 'Glass cockpit sim in USA prior to actual flight hours',
    key: false,
  },
  {
    label: 'Examinations',
    pilot: '5 DGCA written papers + DGCA CPL Skill Test',
    cabin: 'Aviora internal assessment + mock airline interview clearance',
    global: 'FAA PPL written + FAA Practical Test (checkride) + multi-engine add-on',
    key: false,
  },
  {
    label: 'Licence / Certificate',
    pilot: 'CPL (Commercial Pilot Licence) — DGCA, India',
    cabin: 'Aviora Cabin Crew Certificate (airline-recognised)',
    global: 'FAA PPL + FAA Multi-Engine Rating + US logbook hours',
    key: true,
  },
  {
    label: 'DGCA Conversion',
    pilot: 'Directly issued — all training DGCA-compliant',
    cabin: 'Not applicable',
    global: 'FAA hours fully convertible to DGCA CPL — standard conversion route',
    key: true,
  },
  {
    label: 'Career Outcome',
    pilot: 'First Officer → Captain at domestic & international airlines',
    cabin: 'Flight Attendant — domestic & international airlines',
    global: 'CPL (after DGCA conversion) · Multi-engine command · Global airline entry',
    key: true,
  },
  {
    label: 'Batch Size',
    pilot: 'Maximum 20 cadets — intimate classroom learning',
    cabin: 'Maximum 30 candidates per batch',
    global: 'Maximum 8 cadets — individual instructor attention in USA',
    key: false,
  },
  {
    label: 'Placement Support',
    pilot: '42 airline partners · Interview coaching · Type rating guidance',
    cabin: 'Direct airline placement drives · Walk-in coaching',
    global: 'DGCA conversion support · 42 airline partners · Type rating pathways',
    key: false,
  },
  {
    label: 'Starting Salary',
    pilot: '₹80,000 – ₹1,80,000 / month as First Officer',
    cabin: '₹30,000 – ₹75,000 / month (entry domestic)',
    global: '₹80,000 – ₹2,00,000 / month (post CPL conversion)',
    key: false,
  },
  {
    label: 'Next Intake',
    pilot: 'July 2025 — 4 seats remaining',
    cabin: 'June 2025 — 8 seats remaining',
    global: 'August 2025 — 3 seats remaining',
    key: true,
  },
];

/* ─── PROGRAM CARDS DATA ─── */
const PROGRAMS = [
  {
    num: '01',
    tag: 'Commercial Aviation',
    title: 'Pilot Training',
    sub: 'Program',
    desc: 'The complete Zero-to-CPL pathway. DGCA ground school in Hyderabad, FBS simulator hours, and international flight training in the USA. Graduate with a DGCA Commercial Pilot Licence and join one of 42 airline partner networks.',
    meta: [
      { label: 'Duration',    val: '18–24 Months'         },
      { label: 'Eligibility', val: '10+2 Physics & Math'  },
      { label: 'Outcome',     val: 'CPL · DGCA'           },
    ],
    href: '/programs/pilot-training',
    accent: true,
  },
  {
    num: '02',
    tag: 'Cabin Crew',
    title: 'Cabin Crew',
    sub: 'Program',
    desc: 'Six months of airline-standard grooming, safety training, communication, and emergency procedures. Graduate with a cabin crew certificate recognised by domestic and international carriers, backed by direct placement drives.',
    meta: [
      { label: 'Duration',    val: '6 Months'            },
      { label: 'Eligibility', val: '10+2 Any Stream'     },
      { label: 'Outcome',     val: 'Airline Ready'       },
    ],
    href: '/programs/cabin-crew',
    accent: false,
  },
  {
    num: '03',
    tag: 'International',
    title: 'Global Training',
    sub: 'USA',
    desc: 'Train on FAA-registered aircraft in Phoenix, Arizona and Florida. Acquire real flight hours in open American airspace on Cessna 172 and multi-engine Piper aircraft — fully convertible to DGCA CPL under Indian regulations.',
    meta: [
      { label: 'Duration',    val: '3–6 Months'          },
      { label: 'Location',    val: 'Phoenix AZ + Florida' },
      { label: 'Outcome',     val: 'FAA · DGCA Convertible' },
    ],
    href: '/programs/global-training',
    accent: false,
  },
];

export default function ProgramsPage() {
  return (
    <main className={s.page}>

      {/* ── 1. PAGE HERO ── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Commercial aircraft on runway at dusk"
            className={s.heroBgImg}
          />
          <div className={s.heroImgOverlay} />
        </div>
        <div className={s.heroContent}>
          <span className={s.eyebrow}>Aviora Programs</span>
          <h1 className={s.heroH1}>
            Choose Your<br/><em>Aviation Path.</em>
          </h1>
          <p className={s.heroP}>
            Three world-class programs. One standard of excellence.
            Whether you want to sit left seat, serve in the cabin,
            or earn your wings in America — your career starts here.
          </p>
        </div>
        <div className={s.heroScroll}>
          <span className={s.heroScrollLabel}>Select a Program</span>
          <div className={s.heroScrollLine} />
        </div>
      </section>

      {/* ── 2. PROGRAM CARDS ── */}
      <section className={s.cardSection}>
        <div className={s.cardGrid}>
          {PROGRAMS.map((p) => (
            <Link key={p.num} href={p.href} className={`${s.card} ${p.accent ? s.cardAccent : ''}`}>
              <div className={s.cardNum}>{p.num}</div>
              <div className={s.cardTag}>{p.tag}</div>
              <h2 className={s.cardTitle}>
                {p.title}<br/><em>{p.sub}</em>
              </h2>
              <p className={s.cardDesc}>{p.desc}</p>
              <div className={s.cardMeta}>
                {p.meta.map((m, i) => (
                  <div className={s.cardMetaItem} key={i}>
                    <span className={s.cardMetaLabel}>{m.label}</span>
                    <span className={s.cardMetaVal}>{m.val}</span>
                  </div>
                ))}
              </div>
              <div className={s.cardCta}>
                <span>Explore Program</span>
                <span className={s.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ── */}
      <section className={s.tableSection}>
        <div className={s.tableSectionHead}>
          <span className={s.eyebrow}>Side-by-Side</span>
          <h2 className={s.tableSectionH2}>
            Full Program<br/><em>Comparison</em>
          </h2>
          <p className={s.tableSectionP}>
            Every detail you need to make an informed decision —
            eligibility, training structure, certifications, career outcomes, and intake dates.
          </p>
        </div>

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th className={s.thLabel}>Program Detail</th>
                <th className={`${s.thCol} ${s.thPilot}`}>
                  <span className={s.thNum}>01</span>
                  <span className={s.thName}>Pilot Training</span>
                  <span className={s.thSub}>CPL · DGCA · 18–24 mo</span>
                </th>
                <th className={`${s.thCol} ${s.thCabin}`}>
                  <span className={s.thNum}>02</span>
                  <span className={s.thName}>Cabin Crew</span>
                  <span className={s.thSub}>Certificate · 6 mo</span>
                </th>
                <th className={`${s.thCol} ${s.thGlobal}`}>
                  <span className={s.thNum}>03</span>
                  <span className={s.thName}>Global Training</span>
                  <span className={s.thSub}>FAA · USA · 3–6 mo</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={`${s.tr} ${row.key ? s.trKey : ''} ${i % 2 === 1 ? s.trAlt : ''}`}
                >
                  <td className={s.tdLabel}>{row.label}</td>
                  <td className={s.tdPilot}>{row.pilot}</td>
                  <td className={s.tdCabin}>{row.cabin}</td>
                  <td className={s.tdGlobal}>{row.global}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={s.tfootRow}>
                <td className={s.tfootLabel}>Apply</td>
                <td className={s.tfootCol}>
                  <Link href="/programs/pilot-training" className={s.tableCtaLink}>
                    View Pilot Program →
                  </Link>
                </td>
                <td className={s.tfootCol}>
                  <Link href="/programs/cabin-crew" className={s.tableCtaLink}>
                    View Cabin Crew →
                  </Link>
                </td>
                <td className={s.tfootCol}>
                  <Link href="/programs/global-training" className={s.tableCtaLink}>
                    View Global Training →
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ── 4. ADMISSIONS STRIP ── */}
      <section className={s.admStrip}>
        <div className={s.admInner}>
          <div className={s.admLeft}>
            <span className={s.eyebrow}>Ready to Begin?</span>
            <h2 className={s.admH2}>Take the First Step.<br/><em>Apply Today.</em></h2>
          </div>
          <div className={s.admRight}>
            <Link href="/admissions" className={s.btnGold}>Apply Now →</Link>
            <Link href="/contact"    className={s.btnLine}>Talk to Admissions</Link>
          </div>
        </div>
      </section>

      {/* ── 5. COUNSELLOR STRIP ── */}
      <section className={s.counselStrip}>
        <div className={s.counselInner}>
          <span className={s.counselDiamond}>✦</span>
          <p className={s.counselP}>
            Not sure which program fits your goals? Our admissions team are pilots
            and aviation professionals — they have walked the same path you are considering.
          </p>
          <Link href="/contact" className={s.counselLink}>
            Speak to a Counsellor →
          </Link>
        </div>
      </section>

    </main>
  );
}
