'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './about.module.css';
import CessnaFly from '@/components/CessnaFly';
import TrainingPartnersTicker from '@/components/TrainingPartnersTicker';
import Image from 'next/image';

const STATS = [
  { num: '100+', label: 'Graduates', sub: 'Since founding'            },
  { num: '98%',    label: 'Placement Rate', sub: 'Direct airline hires'  },
  { num: '10',     label: 'Airline Partners', sub: 'Across India + Gulf' },
  { num: '5000+',  label: 'Flight Hours', sub: 'Logged by Aviora cadets' },
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
    desc: '10 airline and aviation partner companies. Batch walk-ins with IndiGo, Air India, SpiceJet, and international carriers. Placement at Aviora is a structured operation — not a bullet point in a flyer.',
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
  { name: 'Capt. Alok Reddy', role: 'Founder & CPL Ground Instructor', note: 'A320 Rated Airline Pilot with a leading airline in India. Specialises in airline operations, aviation training, and mentoring aspiring pilots from Zero to Airline Pilot. Passionate about building the next generation of aviation professionals.' },
  { name: 'Capt. Chaitanya Mendu', role: 'Senior CPL Ground Instructor', note: 'A320 Rated Airline Pilot and Senior Instructor for Navigation & Technical General. Known for simplifying complex aviation concepts and mentoring aspiring pilots with a strong focus on DGCA exam preparation, technical knowledge, and airline-oriented training. Passionate about shaping disciplined and industry-ready aviators.' },
  { name: 'Capt. Arjun Rao', role: 'Senior CPL Ground Instructor', note: 'Capt. Arjun Rao is an A320 Rated Airline Pilot and Senior Instructor for Meteorology. Recognised for his practical teaching approach and deep understanding of aviation weather systems, he mentors aspiring pilots with a strong focus on DGCA Meteorology preparation and real-world airline operations. Dedicated to building confident and knowledgeable future aviators.' },
];

const FOUNDER_YEAR = '2024';
const FOUNDER_NAME = 'Capt. Rajeev Sharma';
const STORY_TIMELINE = [
  { year: 'Feb 2023', title: 'The Beginning', text: 'Onestop Aviation was born in a small room with a simple mission to create a better pathway for aspiring aviation professionals.' },
  { year: 'Dec 2023', title: 'Officially Registered', text: 'Onestop Aviation became a Private Limited company registered under MCA.' },
  { year: 'Feb 2024', title: 'Mumbai Operations Started', text: 'Student counselling operations launched from a small office in Mumbai.' },
  { year: 'Apr 2024', title: 'First Flight Training Partnership', text: 'Signed the first MOI with an international flight training partner.' },
  { year: 'Sep 2024', title: '40+ Online Students', text: 'Rapid growth in online ground school enrollments.' },
  { year: 'Oct 2024', title: 'License Conversions Launched', text: 'Successfully completed 22 license conversions within the first few months.' },
  { year: 'Feb 2025', title: 'Birth of Aviora Aviation Academy', text: 'Planning began for South India’s biggest aviation training facility.' },
  { year: 'Mar 2025', title: 'Industry Expansion', text: 'Signed multiple MOUs with FTO and ATO partners.' },
  { year: 'Sep 2025', title: 'Major Milestone', text: '100 License Conversions completed and 72 Ground School students trained.' },
  { year: 'Jan 2026', title: 'Hyderabad Facility Acquired', text: 'Secured a 6500 sq.ft aviation campus in Hyderabad.' },
  { year: 'Mar 2026', title: 'Aviora Hyderabad Opened', text: '30+ admissions achieved within the first 15 days of launch.' },
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
            src="/about_hero_v3.png"
            alt="Aviora Aviation Academy Campus"
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

      <section className={`${s.fadeUp} ${s.tickerSection}`} style={{ transitionDelay: '0.5s' }}>
        <TrainingPartnersTicker />
      </section>

      {/* ═══ 2. ORIGIN STORY ═══ */}
      <section className={s.storySection}>
        <div className={s.storyInner}>
          <div className={`${s.storyLeft} ${s.slideIn}`}>
            <div className={s.eyebrow}>Our Story</div>
            <h2 className={s.sectionH2}>
              Built Because The<br/><em>System Was Broken.</em>
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
                    <h4 className={s.stTitle}>{item.title}</h4>
                    <p className={s.stText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${s.storyRight} ${s.fadeUp}`}>
            <div className={s.storyQuote}>
              Every great journey begins with one restless idea. Ours began in February 2023, not inside a massive corporate office, not backed by investors, but inside a small room with a vision that refused to stay small.
            </div>
            <p className={s.storyPara}>
              We didn’t have a perfect roadmap. We didn’t know exactly how it would unfold. But we knew one thing with absolute certainty:<br/><br/>
              <span>India had talent. The aviation industry needed direction. And students deserved better guidance, better mentorship, and better opportunities.</span>
            </p>
            <p className={s.storyPara}>
              That belief became the birth of Onestop Aviation. What started as a small online ground school slowly turned into a growing aviation ecosystem built on trust, networking, relentless effort, and real industry relationships. One student became ten. Ten became dozens. Every counselling call, every late-night planning session, every partnership discussion pushed us one step closer to building something bigger than ourselves.
            </p>
            <p className={s.storyPara}>
              By December 2023, Onestop Aviation was officially registered as a Private Limited company under the MCA transforming an idea into a real organization with a mission to change aviation training in India. In 2024, we stepped into Mumbai with a small office and a massive dream. We began counselling aspiring pilots face-to-face, helping students navigate an industry that often felt confusing and inaccessible. Soon after, we signed our first flight training partnership, opening real pathways for aspiring aviators.
            </p>
            <p className={s.storyPara}>
              Momentum grew rapidly. By September 2024, over 40 students had enrolled in our online ground school programs. In October 2024, we launched License Conversion training and within months, completed 22 successful conversions before the year ended.
            </p>
            <p className={s.storyPara}>
              <span>Then came the turning point. In February 2025, Aviora Aviation Academy was born.</span><br/><br/>
              Not as just another aviation institute, but as a vision to build South India’s most ambitious aviation training facility. A place where future pilots, cabin crew, dispatchers, and aviation professionals could train under one roof with world-class standards and mentorship.
            </p>
            <p className={s.storyPara}>
              The mission accelerated quickly. More MOUs were signed with leading FTO and ATO partners across the industry. By September 2025, we crossed 100 successful License Conversions and trained 72 Ground School students, milestones that once felt impossible inside that tiny room where the dream began.
            </p>
            <p className={s.storyPara}>
              <span>Then came Hyderabad.</span><br/><br/>
              In January 2026, we acquired a 6500 sq.ft aviation facility in the heart of the city. By March 2026, Aviora Aviation Academy officially opened its doors and within just 15 days, welcomed over 30 admissions.
            </p>
            <p className={s.storyPara}>
              That moment proved something powerful.<br/>
              <span>This was never just a business. This was a movement.</span>
            </p>
            
            <h2 className={s.sectionH2} style={{ marginTop: '64px' }}>
              Our<br/><em>Goal.</em>
            </h2>
            <p className={s.storyPara}>
              <span>We are not here to become just another aviation academy. We are here to build an aviation ecosystem that changes how aspiring pilots and aviation professionals are trained in India.</span>
            </p>
            <p className={s.storyPara}>
              Our goal is to remove confusion, eliminate outdated systems, and create a transparent pathway from dream to cockpit. Through world-class mentorship, modern infrastructure, international partnerships, and real industry exposure, we aim to shape aviators who are confident, skilled, and globally ready.
            </p>
            <p className={s.storyPara}>
              Every student who walks through our doors carries a dream. Our responsibility is to give that dream direction.
            </p>
            <p className={s.storyPara}>
              The vision is bigger than classrooms and simulators. We want Aviora Aviation Academy to become a name that represents ambition, credibility, and excellence across the aviation industry.<br/><br/>
              <span>And this is only the beginning.</span>
            </p>

            <div className={s.storySignature} style={{ marginTop: '48px' }}>
              <div className={s.sigLine} />
              <span className={s.sigText}>The Aviora Founders</span>
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
          <h2 className={s.sectionH2}>Four Things Aviora<br /><em>Does Differently.</em></h2>
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
                FAA Part 141 · Sacramento , California , USA · 200 flight hours on Cessna 172.
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
            Built To Train.<br/><em>Not To Impress Brochures.</em>
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
          <h2 className={s.sectionTitle}>Taught By Pilots.<br /><em>Led By Professionals.</em></h2>
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
            The Next Generation Of<br/><em>Indian Aviation Starts Here.</em>
          </h2>
          <div className={s.bottomCtaBtns}>
            <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
            <Link href="/programs"   className={s.btnSecondary}>Explore Programs</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
