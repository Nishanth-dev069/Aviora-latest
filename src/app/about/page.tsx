import Link from 'next/link';
import s from './about.module.css';

const STATS = [
  { num: '2,400+', label: 'Graduates', sub: 'Since founding'            },
  { num: '98%',    label: 'Placement Rate', sub: 'Direct airline hires'  },
  { num: '42',     label: 'Airline Partners', sub: 'Across India + Gulf' },
  { num: '140K+',  label: 'Flight Hours', sub: 'Logged by Aviora cadets' },
];

const MISSION_POINTS = [
  {
    num: '01',
    title: 'Zero to Hero — For Real',
    desc: 'Most academies say Zero to Hero. Aviora builds it: DGCA ground school, simulator, international flight hours in the USA, and airline interview prep — in one seamless program. One academy. One pathway. One outcome.',
  },
  {
    num: '02',
    title: 'Mentors Who Have Flown It',
    desc: 'Every instructor at Aviora is a working or former airline professional. Not a classroom teacher. An airline captain who has sat in the left seat of an A320 at 35,000 feet — and now prepares you to do the same.',
  },
  {
    num: '03',
    title: 'Infrastructure That Takes Aviation Seriously',
    desc: 'Level-D FBS simulator. Digital smart classrooms. Dedicated cabin crew mock aircraft. Aviation library. The Aviora campus is built to replicate real aviation training — because mediocre infrastructure produces mediocre pilots.',
  },
  {
    num: '04',
    title: 'Placement Is Not a Brochure Claim',
    desc: '42 airline and aviation partner companies. Batch walk-ins with IndiGo, Air India, SpiceJet, and international carriers. Placement at Aviora is a structured operation — not a bullet point in a flyer.',
  },
];

const FACILITIES = [
  { icon: '◉', name: 'FBS Flight Simulator',     desc: 'Full Cessna 172 cockpit replication — instruments, controls, emergency scenarios, IMC conditions.' },
  { icon: '◈', name: 'Smart Digital Classrooms', desc: 'High-resolution projection, real-time syllabus tracking, and DGCA-aligned digital content for all 5 papers.' },
  { icon: '◎', name: 'Mock Aircraft Cabin',       desc: 'Full-scale cabin replica for cabin crew training — door operations, PA systems, evacuation drills, service runs.' },
  { icon: '◇', name: 'Grooming Lab',              desc: 'Industry-standard grooming assessment environment — lighting, mirrors, and uniform stations replicating airline assessment centres.' },
  { icon: '⊕', name: 'Aviation Library',          desc: 'DGCA syllabi, POHs, ICAO documents, IATA manuals, and a curated collection of aviation literature and case studies.' },
  { icon: '◆', name: 'Mentorship Rooms',          desc: 'Private consultation spaces for one-on-one sessions with airline pilots — debrief, interview prep, and career counselling.' },
];

const TEAM = [
  { name: 'Capt. Rajeev Sharma',  role: 'Chief Flight Instructor', note: 'Former IndiGo Captain · 12,000 hrs TT · 18 yrs commercial experience' },
  { name: 'Capt. Ananya Krishnan', role: 'Head of Ground School',   note: 'Former Air India A320 FO · DGCA examiner certified' },
  { name: 'Ms. Priya Anand',      role: 'Cabin Crew Programme Lead', note: 'Former Vistara Senior Cabin Crew · 6 years Aviora' },
  { name: 'Mr. Vikram Nair',      role: 'Head of Placement',        note: '15 years aviation HR · ex-IndiGo Talent Acquisition' },
];

export default function AboutPage() {
  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=80"
            alt="Aircraft wing over clouds — Aviora Aviation Academy"
            className={s.heroBgImg}
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <div className={s.eyebrow}>About Aviora</div>
          <h1 className={s.heroH1}>
            We Train the Pilots<br/>
            <em>India's Airlines Will Hire.</em>
          </h1>
          <p className={s.heroPara}>
            Aviora Aviation Academy is not a ground school with a flight simulator in a room.
            It is a complete aviation training institution — built from the ground up with one purpose:
            to produce airline-ready professionals who get hired.
          </p>
        </div>
        {/* Stats strip inside hero bottom */}
        <div className={s.heroStats}>
          {STATS.map((st, i) => (
            <div className={s.heroStat} key={i}>
              <span className={s.heroStatNum}>{st.num}</span>
              <span className={s.heroStatLabel}>{st.label}</span>
              <span className={s.heroStatSub}>{st.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 2. ORIGIN STORY ═══ */}
      <section className={s.storySection}>
        <div className={s.storyInner}>
          <div className={s.storyLeft}>
            <div className={s.eyebrow}>Our Story</div>
            <h2 className={s.sectionH2}>
              Built Because the<br/><em>System Was Broken.</em>
            </h2>
          </div>
          <div className={s.storyRight}>
            <p className={s.storyPara}>
              When Aviora's founders — airline captains who had trained through India's
              fragmented aviation education system — looked back at their own paths,
              they saw the same problem repeated in every cadet's story:
              too many academies, too little accountability, and no one who actually
              prepared students for the airline interview at the end.
            </p>
            <p className={s.storyPara}>
              Aviora was built to close that gap. One integrated programme, from first
              DGCA textbook to airline walk-in. Infrastructure that looks like aviation,
              not like a tuition centre. Instructors who are pilots, not teachers of pilots.
              And a placement operation backed by 42 real airline partnerships.
            </p>
            <p className={s.storyPara}>
              The result: 2,400+ graduates. A 98% placement rate.
              India's most trusted aviation training institution for aspiring professionals
              who are serious about their careers.
            </p>
            <div className={s.storySignature}>
              <div className={s.sigLine} />
              <span className={s.sigText}>The Aviora Faculty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. MISSION PILLARS ═══ */}
      <section className={s.missionSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>What Sets Us Apart</div>
          <h2 className={s.sectionH2}>
            Four Things Aviora<br/><em>Does Differently.</em>
          </h2>
          <div className={s.missionGrid}>
            {MISSION_POINTS.map((pt, i) => (
              <div className={s.missionCard} key={i}>
                <div className={s.missionAccent} />
                <div className={s.missionNum}>{pt.num}</div>
                <h3 className={s.missionTitle}>{pt.title}</h3>
                <p className={s.missionDesc}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. PROGRAMS STRIP ═══ */}
      <section className={s.programsStrip}>
        <div className={s.programsInner}>
          <div className={s.eyebrow}>Programs Offered</div>
          <h2 className={s.sectionH2}>
            Two Programs.<br/><em>One Standard.</em>
          </h2>
          <div className={s.programsRow}>
            <Link href="/programs/pilot-training" className={s.programBlock}>
              <div className={s.programBlockAccent} />
              <div className={s.programBlockNum}>01</div>
              <div className={s.programBlockTitle}>Pilot Training Program</div>
              <p className={s.programBlockDesc}>
                DGCA ground school · FBS simulator · USA flight hours · CPL outcome.
                The complete Zero to Hero commercial aviation pathway.
              </p>
              <div className={s.programBlockDuration}>18 – 24 Months</div>
              <div className={s.programBlockLink}>Full Program Details →</div>
            </Link>
            <Link href="/programs/cabin-crew" className={s.programBlock}>
              <div className={s.programBlockAccent} />
              <div className={s.programBlockNum}>02</div>
              <div className={s.programBlockTitle}>Cabin Crew Program</div>
              <p className={s.programBlockDesc}>
                Grooming · safety · communication · mock cabin · airline interview prep.
                Transform from applicant to airline-ready in 6 months.
              </p>
              <div className={s.programBlockDuration}>6 Months</div>
              <div className={s.programBlockLink}>Full Program Details →</div>
            </Link>
            <Link href="/programs/global-training" className={s.programBlock}>
              <div className={s.programBlockAccent} />
              <div className={s.programBlockNum}>03</div>
              <div className={s.programBlockTitle}>Global Training — USA</div>
              <p className={s.programBlockDesc}>
                FAA Part 141 · Phoenix AZ · Florida · 200 flight hours on Cessna 172.
                The international edge that Indian airspace cannot provide.
              </p>
              <div className={s.programBlockDuration}>6 – 10 Months</div>
              <div className={s.programBlockLink}>Full Details →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5. FACILITIES ═══ */}
      <section className={s.facilitiesSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>Campus & Infrastructure</div>
          <h2 className={s.sectionH2}>
            Built to Train.<br/><em>Not to Impress Brochures.</em>
          </h2>
          <div className={s.facilitiesGrid}>
            {FACILITIES.map((f, i) => (
              <div className={s.facilityCard} key={i}>
                <div className={s.facilityIcon}>{f.icon}</div>
                <div className={s.facilityName}>{f.name}</div>
                <p className={s.facilityDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. TEAM ═══ */}
      <section className={s.teamSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>Faculty & Leadership</div>
          <h2 className={s.sectionH2}>
            Taught by Pilots.<br/><em>Led by Professionals.</em>
          </h2>
          <div className={s.teamGrid}>
            {TEAM.map((m, i) => (
              <div className={s.teamCard} key={i}>
                <div className={s.teamCardAccent} />
                <div className={s.teamName}>{m.name}</div>
                <div className={s.teamRole}>{m.role}</div>
                <div className={s.teamNote}>{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. BOTTOM CTA ═══ */}
      <section className={s.bottomCta}>
        <div className={s.bottomCtaInner}>
          <div className={s.eyebrow}>Join Aviora</div>
          <h2 className={s.bottomCtaH2}>
            The Next Generation of<br/><em>Indian Aviation Starts Here.</em>
          </h2>
          <div className={s.bottomCtaBtns}>
            <Link href="/admissions" className={s.btnPrimary}>Apply Now →</Link>
            <Link href="/programs"   className={s.btnSecondary}>Explore Programs</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
