import Link from 'next/link';
import s from './global.module.css';
import CessnaFly from '@/components/CessnaFly';

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Pre-Departure Preparation',
    desc: 'Before you board your flight to Arizona, Aviora ensures you are fully prepared. Ground briefings cover FAA Part 91 rules, US airspace structure (Class A through G), ATC phraseology differences between DGCA and FAA, and VFR flight planning for American airspace. Medical coordination for FAA Class 3 medicals is handled by Aviora prior to departure. Visa (B1/B2 or M1) documentation support is included. Average prep time: 3–4 weeks.',
    duration: '3 – 4 Weeks',
    location: 'Hyderabad, India',
    detail: 'FAA airspace briefing · Visa support · FAA Class 3 medical coordination',
  },
  {
    phase: 'Phase 2',
    title: 'PPL — Private Pilot Licence (USA)',
    desc: 'Training begins at Aviora\'s partner school in Phoenix, Arizona — a FAA Part 141-certified flight school with a fleet of Cessna 172S aircraft. An Aviora Indian instructor accompanies each batch for cultural continuity and familiarity. You complete 40 hours minimum flight time (FAA Part 61 minimum) toward FAA PPL — including 20 hours with instructor and 10 hours solo. FAA PPL written exam and practical test (checkride) conducted in the USA.',
    duration: '6 – 10 Weeks',
    location: 'Phoenix, Arizona, USA',
    detail: 'Cessna 172S · FAA Part 141 school · Aviora instructor accompanies',
  },
  {
    phase: 'Phase 3',
    title: 'Hour Building — Cross-Country & Solo',
    desc: 'After PPL, cadets continue hour building to accumulate the 200 total hours required for DGCA CPL conversion. Hour building includes long cross-country flights across Arizona and Florida, night flying requirements, instrument flying under VFR (simulated IMC with hood), and dual cross-country flights. The open American airspace and year-round VMC weather allows cadets to fly multiple hours per day — a pace impossible in Indian metro airspace.',
    duration: '8 – 14 Weeks',
    location: 'Arizona + Florida, USA',
    detail: '200 hours total target · Cross-country · Night hours · Simulated IMC',
  },
  {
    phase: 'Phase 4',
    title: 'Multi-Engine Rating',
    desc: 'The multi-engine add-on is conducted on the Piper Seminole PA-44 — the industry standard twin-engine trainer for CPL cadets worldwide. Training covers asymmetric thrust, engine-out procedures, Vmc demonstration, multi-engine cruise performance, and multi-engine IFR approaches. FAA Multi-Engine Add-On certificate awarded. This rating is essential for airline type ratings and dramatically increases employability.',
    duration: '2 – 3 Weeks',
    location: 'Florida, USA',
    detail: 'Piper Seminole PA-44 · VMC demo · Engine-out procedures · FAA certificate',
  },
  {
    phase: 'Phase 5',
    title: 'DGCA CPL Conversion (Post-Return)',
    desc: 'On return to India with a completed US logbook, Aviora guides you through the DGCA CPL conversion process. This involves submitting your FAA licence, medical certificate, and authenticated logbook hours to DGCA for recognition. Aviora\'s DGCA liason team handles all paperwork — experience forms, RTR(A) coordination, and CPL Skill Test scheduling. Average conversion time: 60–90 days from submission.',
    duration: '60 – 90 Days',
    location: 'India (DGCA)',
    detail: 'Full paperwork support · RTR(A) · DGCA Skill Test prep',
  },
];

const USA_STATS = [
  { num: '340+',  label: 'Days of VFR weather per year in Phoenix' },
  { num: '200',   label: 'Minimum flight hours for DGCA CPL' },
  { num: 'FAA',   label: 'Part 141 certified partner schools' },
  { num: '100%',  label: 'DGCA-convertible FAA logbook hours' },
];

export default function GlobalTrainingPage() {
  return (
    <main className={s.page}>

      {/* BREADCRUMB */}
      <nav className={s.breadcrumb}>
        <Link href="/programs" className={s.breadcrumbLink}>← All Programs</Link>
        <span className={s.breadcrumbSep}>/</span>
        <span className={s.breadcrumbCurrent}>Global Training — USA</span>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
            alt="Aerial view of Arizona desert from small aircraft"
            className={s.heroBgImg}
            fetchPriority="high"
            loading="eager"
          />
          <div className={s.heroOverlay} />
        </div>
        <CessnaFly direction="right" size={52} opacity={0.15} top="65%" delay="0s" />
        <div className={s.heroContent}>
          <div className={s.heroTag}>03 — International Training</div>
          <h1 className={s.heroH1}>Global Training<br/><em>Program — USA</em></h1>
          <p className={s.heroSub}>
            Earn real flight hours in the United States on FAA-registered aircraft.
            Open airspace. Year-round VFR weather. Professional aviation infrastructure.
            Every hour fully convertible to your DGCA CPL.
          </p>
          <div className={s.heroMeta}>
            {[
              { label: 'Duration',  val: '3 – 6 Months'             },
              { label: 'Location',  val: 'Phoenix AZ + Florida'      },
              { label: 'Aircraft',  val: 'C172 + Piper Seminole'     },
              { label: 'Outcome',   val: 'FAA · DGCA Convertible'    },
            ].map((m, i) => (
              <div className={s.metaItem} key={i}>
                <span className={s.metaLabel}>{m.label}</span>
                <span className={s.metaVal}>{m.val}</span>
              </div>
            ))}
          </div>
          <Link href="/admissions" className={s.heroCta}>Apply Now →</Link>
        </div>
      </section>

      {/* USA STATS BAR */}
      <div className={s.statsBar}>
        {USA_STATS.map((st, i) => (
          <div className={s.statItem} key={i}>
            <span className={s.statNum}>{st.num}</span>
            <span className={s.statLabel}>{st.label}</span>
          </div>
        ))}
      </div>

      {/* WHY USA SECTION */}
      <section className={s.whySection}>
        <div className={s.whyContent}>
          <span className={s.eyebrow}>Why the United States</span>
          <h2 className={s.sectionH2}>The World's Best Environment<br/><em>to Learn to Fly</em></h2>
        </div>
        <div className={s.whyGrid}>
          {[
            {
              title: 'Uncongested Airspace',
              body: 'Indian metro airspace is saturated — student pilots frequently wait 45–90 minutes on the ground for IFR clearances. Phoenix, Arizona sits under Class D airspace with immediate access to vast VFR practice areas. You fly more hours in 8 weeks in Arizona than you would in 6 months in India.',
            },
            {
              title: '340+ VMC Days per Year',
              body: 'Phoenix averages less than 8 inches of rainfall annually — meaning clear skies for VFR flying almost every day of the year. Compare that to Indian monsoon seasons that ground flights for 3–4 months. Weather delays in Arizona are measured in hours, not weeks.',
            },
            {
              title: 'FAA Standard = Global Standard',
              body: 'The FAA is recognised by 190+ countries. FAA-trained pilots are respected worldwide. More importantly for Indian cadets, FAA flight hours are directly recognised by DGCA for CPL licence conversion under bilateral aviation agreements — every hour you fly in the USA counts.',
            },
            {
              title: 'Professional GA Infrastructure',
              body: 'US general aviation airports have full FBO services, flight planning rooms, professional weather briefing stations, and experienced CFIs. You train in an environment that expects professional behaviour — the same culture airlines look for in First Officer candidates.',
            },
          ].map((w, i) => (
            <div className={s.whyCard} key={i}>
              <div className={s.whyCardNum}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className={s.whyCardTitle}>{w.title}</h3>
              <p className={s.whyCardBody}>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <div className={s.gallery}>
        {[
          {
            src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=75',
            alt: 'Cessna 172 pre-flight on American tarmac',
            cap: 'Pre-flight · Cessna 172 · Phoenix',
          },
          {
            src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=75',
            alt: 'Small aircraft in flight over Arizona',
            cap: 'Solo cross-country · Arizona VFR',
          },
          {
            src: 'https://images.unsplash.com/photo-1559628233-100c798642d8?w=800&q=75',
            alt: 'Glass cockpit instrument panel in training aircraft',
            cap: 'Glass cockpit · Instrument training',
          },
        ].map((g, i) => (
          <div className={s.galleryItem} key={i}>
            <img src={g.src} alt={g.alt} className={s.galleryImg} loading="lazy" />
            <div className={s.galleryFade} />
            <span className={s.galleryCap}>{g.cap}</span>
          </div>
        ))}
      </div>

      {/* PHASE TIMELINE */}
      <section className={s.phaseSection}>
        <div className={s.phaseSectionInner}>
          <span className={s.eyebrow}>Training Pathway</span>
          <h2 className={s.sectionH2}>
            Your Complete<br/><em>USA Journey</em>
          </h2>
          <div className={s.timeline}>
            {PHASES.map((ph, i) => (
              <div className={s.step} key={i}>
                <div className={s.stepLeft}>
                  <div className={s.stepCircle}>{String(i + 1).padStart(2, '0')}</div>
                  {i < PHASES.length - 1 && <div className={s.stepLine} />}
                </div>
                <div className={s.stepBody}>
                  <div className={s.stepPhaseTag}>{ph.phase}</div>
                  <h3 className={s.stepTitle}>{ph.title}</h3>
                  <div className={s.stepMeta}>
                    <span className={s.stepMetaItem}>⏱ {ph.duration}</span>
                    <span className={s.stepMetaItem}>📍 {ph.location}</span>
                  </div>
                  <p className={s.stepDesc}>{ph.desc}</p>
                  <div className={s.stepDetail}>{ph.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <div>
            <span className={s.eyebrow}>Limited Seats</span>
            <h2 className={s.ctaH2}>Fly America.<br/><em>Build Your Logbook.</em></h2>
          </div>
          <div className={s.ctaBtns}>
            <Link href="/admissions" className={s.btnGold}>Apply Now →</Link>
            <Link href="/contact"    className={s.btnLine}>Speak to a Counsellor</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
