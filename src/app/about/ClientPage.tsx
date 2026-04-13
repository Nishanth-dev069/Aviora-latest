'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './about.module.css';
import CessnaFly from '@/components/CessnaFly';
import TrainingPartnersTicker from '@/components/TrainingPartnersTicker';
import Image from 'next/image';

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

const FOUNDER_YEAR = '2014';
const FOUNDER_NAME = 'Capt. Rajeev Sharma';
const STORY_TIMELINE = [
  { year: FOUNDER_YEAR, text: 'Aviora founded with a single training room' },
  { year: '2017', text: 'First batch of 12 cadets graduates and places in airlines' },
  { year: '2019', text: 'FBS Simulator & mock cabin installed on campus' },
  { year: '2023', text: 'Reached 2,000+ total graduates milestone' },
];

export default function ClientPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(`.${s.fadeUp}, .${s.slideIn}`);
    elements.forEach((el) => observer.observe(el));
    
    // Clean up
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={`${s.heroBgWrap} ${s.fadeUp}`}>
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80"
            alt="Aerial view"
            className={s.heroBgImg}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <div className={`${s.eyebrow} ${s.fadeUp}`} style={{ transitionDelay: '0.1s' }}>About Aviora</div>
          <h1 className={`${s.heroH1} ${s.fadeUp}`} style={{ transitionDelay: '0.2s' }}>
            Born from a Passion<br/>
            <em>for Flight.</em>
          </h1>
          <p className={`${s.heroPara} ${s.fadeUp}`} style={{ transitionDelay: '0.3s' }}>
            Transforming dreamers into navigators, and professionals into industry leaders.
          </p>
        </div>
        
        <div className={`${s.heroStats} ${s.fadeUp}`} style={{ transitionDelay: '0.4s' }}>
          {STATS.map((st, i) => (
            <div className={s.heroStat} key={i}>
              <span className={s.heroStatNum}>{st.num}</span>
              <span className={s.heroStatLabel}>{st.label}</span>
              <span className={s.heroStatSub}>{st.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={s.fadeUp} style={{ transitionDelay: '0.5s' }}>
        <TrainingPartnersTicker />
      </section>

      {/* ═══ 2. ORIGIN STORY ═══ */}
      <section className={s.storySection}>
        <div className={s.storyInner}>
          <div className={`${s.storyLeft} ${s.slideIn}`}>
            <div className={s.eyebrow}>Our Story</div>
            <h2 className={s.sectionH2}>
              Built Because the<br/><em>System Was Broken.</em>
            </h2>
            
            <div className={s.storyTimeline}>
              {STORY_TIMELINE.map((item, i) => (
                <div className={s.stItem} key={i}>
                  <div className={s.stVisual}>
                    <div className={s.stDot} />
                    {i < STORY_TIMELINE.length - 1 && <div className={s.stLine} />}
                  </div>
                  <div className={s.stContent}>
                    <h3 className={s.stYear}>{item.year}</h3>
                    <p className={s.stText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${s.storyRight} ${s.fadeUp}`}>
            <div className={s.storyQuote}>
              Every great journey begins with a single moment of clarity. Ours began in {FOUNDER_YEAR}, when {FOUNDER_NAME} — a seasoned aviator with thousands of hours in the skies — looked down at the city of Hyderabad and saw not just rooftops, but untapped potential.
            </div>
            <p className={s.storyPara}>
              <span>Young men and women who dreamed of the cockpit but had no clear path to reach it.</span><br/><br/>
              What started as a modest training room with secondhand manuals and borrowed simulators has grown into one of Telangana's most trusted aviation academies — not through shortcuts, but through relentless commitment to the art and science of flight.
            </p>
            <p className={s.storyPara}>
              <span>We have watched our students walk in uncertain, and fly out transformed.</span> We have seen engineers become captains, dreamers become navigators, and quiet resolve become soaring confidence. Every licence earned here carries with it the weight of real mentorship, real hours, and real sky.
            </p>
            <p className={s.storyPara}>
              We do not simply train pilots. <span>We shape aviators</span> — professionals who carry our name across every airline, every airfield, every altitude. That legacy drives us forward. And we are just getting started.
            </p>
            <div className={s.storySignature}>
              <div className={s.sigLine} />
              <span className={s.sigText}>The Aviora Faculty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cessna transition */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '10px' }}>
        <CessnaFly direction="left" size={36} opacity={0.10} top="50%" delay="2s" />
      </div>

      {/* ═══ 3. MISSION PILLARS ═══ */}
      <section className={s.missionSection}>
        <div className={s.container}>
          <div className={`${s.eyebrow} ${s.fadeUp}`}>What Sets Us Apart</div>
          <h2 className={`${s.sectionH2} ${s.fadeUp}`}>
            Four Things Aviora<br/><em>Does Differently.</em>
          </h2>
          <div className={s.missionGrid}>
            {MISSION_POINTS.map((pt, i) => (
              <div className={`${s.missionCard} ${s.fadeUp}`} style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
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
          <div className={`${s.eyebrow} ${s.fadeUp}`}>Programs Offered</div>
          <h2 className={`${s.sectionH2} ${s.fadeUp}`}>
            Four Programs.<br/><em>One Standard.</em>
          </h2>
          <div className={s.programsRow}>
            <Link href="/programs/pilot-training" className={`${s.programBlock} ${s.fadeUp}`} style={{ transitionDelay: '0.1s' }}>
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
            <Link href="/programs/cabin-crew" className={`${s.programBlock} ${s.fadeUp}`} style={{ transitionDelay: '0.2s' }}>
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
            <Link href="/programs/global-training" className={`${s.programBlock} ${s.fadeUp}`} style={{ transitionDelay: '0.3s' }}>
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
            <Link href="/programs/type-rating" className={`${s.programBlock} ${s.fadeUp}`} style={{ transitionDelay: '0.4s' }}>
              <div className={s.programBlockAccent} />
              <div className={s.programBlockNum}>04</div>
              <div className={s.programBlockTitle}>Type Rating</div>
              <p className={s.programBlockDesc}>
                A320, B737, and ATR programmes for DGCA CPL holders.
                Global partnerships across Vietnam, Madrid, and Bangkok.
              </p>
              <div className={s.programBlockDuration}>6 – 10 Weeks</div>
              <div className={s.programBlockLink}>Full Details →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5. FACILITIES ═══ */}
      <section className={s.facilitiesSection}>
        <div className={s.container}>
          <div className={`${s.eyebrow} ${s.fadeUp}`}>Campus & Infrastructure</div>
          <h2 className={`${s.sectionH2} ${s.fadeUp}`}>
            Built to Train.<br/><em>Not to Impress Brochures.</em>
          </h2>
          <div className={s.facilitiesGrid}>
            {FACILITIES.map((f, i) => (
              <div className={`${s.facilityCard} ${s.fadeUp}`} style={{ transitionDelay: `${(i%3) * 0.1}s` }} key={i}>
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
          <div className={`${s.eyebrow} ${s.fadeUp}`}>Faculty & Leadership</div>
          <h2 className={`${s.sectionH2} ${s.fadeUp}`}>
            Taught by Pilots.<br/><em>Led by Professionals.</em>
          </h2>
          <div className={s.teamGrid}>
            {TEAM.map((m, i) => (
              <div className={`${s.teamCard} ${s.fadeUp}`} style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
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
        <div className={`${s.bottomCtaInner} ${s.fadeUp}`}>
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
