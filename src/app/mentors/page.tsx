'use client';
import Link from 'next/link';
import s from './mentors.module.css';

const MENTORS = [
  {
    num: '01',
    name: 'Capt. Rajeev Sharma',
    role: 'Chief Flight Instructor',
    credential: 'ATPL · 14,000+ hours · Former IndiGo Captain',
    philosophy: 'Aviation demands precision above everything else. My role is not to teach cadets how to fly an aircraft — it is to teach them how to think like a pilot. That is a different discipline entirely.',
    tags: ['CPL Ground School', 'Simulator Training', 'DGCA Preparation'],
  },
  {
    num: '02',
    name: 'Capt. Ananya Krishnan',
    role: 'Head of Flight Operations',
    credential: 'CPL · 6,200 hours · Multi-Engine & Instrument Rated',
    philosophy: 'The hardest part of becoming a pilot in India is not the flying — it is the system. I decode the DGCA pathway for every cadet so they move through it efficiently, without the wrong detours.',
    tags: ['FAA Training Coordination', 'Cross-Country Navigation', 'USA Program Lead'],
  },
  {
    num: '03',
    name: 'Ms. Priya Anand',
    role: 'Head of Cabin Crew Training',
    credential: 'Former IndiGo Senior Cabin Crew · 9 years operational experience',
    philosophy: 'Airlines hire people, not certificates. What they look for in the interview room is calm, composure, and the ability to read a situation. That is what we build — not just the technical checklist.',
    tags: ['Emergency Procedures', 'Service Standards', 'Interview Coaching'],
  },
  {
    num: '04',
    name: 'Mr. Vikram Nair',
    role: 'Ground School Lead & DGCA Examiner Liaison',
    credential: 'Aviation academic · 11 years DGCA ground school instruction',
    philosophy: 'A cadet who understands why a regulation exists will always perform better in the skill test than one who has memorised it. I teach understanding, not rote. The exam results speak for themselves.',
    tags: ['Air Navigation', 'Meteorology', 'Air Regulations'],
  },
];

const COMBINED_STATS = [
  { num: '21,000+', label: 'Combined flight hours', sub: 'Total logged hours across all instructors' },
  { num: '26+', label: 'Years combined experience', sub: 'In active airline operations' },
  { num: '4', label: 'Airlines flown', sub: 'IndiGo · Air India · International carriers' },
  { num: '100%', label: 'DGCA pass rate', sub: 'Aviora mentored cadets — last 3 batches' },
];

export default function MentorsPage() {
  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Aviora Mentors"
            className={s.heroBgImg}
            fetchPriority="high"
            loading="eager"
          />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <p className={s.heroTag}><span className={s.heroLine} />Aviora Aviation Academy · Mentors</p>
          <h1 className={s.heroH1}>
            Learn From Those<br /><em>Who Have Flown It.</em>
          </h1>
          <p className={s.heroP}>
            Every Aviora instructor is an active or recently retired aviation professional.
            No career academics. No classroom-only faculty. The people who teach here have sat
            in the seat you are working toward.
          </p>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className={s.statStrip}>
        {COMBINED_STATS.map(st => (
          <div key={st.label} className={s.statItem}>
            <span className={s.statNum}>{st.num}</span>
            <span className={s.statLabel}>{st.label}</span>
            <span className={s.statSub}>{st.sub}</span>
          </div>
        ))}
      </div>

      {/* MENTOR GRID */}
      <section className={s.mentorsSection}>
        <div className={s.sectionHead}>
          <p className={s.eyebrow}>The Faculty</p>
          <h2 className={s.sectionH2}>
            Four Professionals.<br /><em>One Standard.</em>
          </h2>
          <p className={s.sectionSub}>
            Aviora's mentorship philosophy is simple: cadets learn from people who have done the job,
            not from people who have only studied it.
          </p>
        </div>

        <div className={s.mentorGrid}>
          {MENTORS.map((mentor) => (
            <div key={mentor.num} className={s.mentorCard}>
              <div className={s.mentorAccent} />
              <div className={s.mentorTop}>
                <span className={s.mentorNum}>{mentor.num}</span>
                <div className={s.mentorTags}>
                  {mentor.tags.map(tag => (
                    <span key={tag} className={s.mentorTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className={s.mentorName}>{mentor.name}</h3>
              <p className={s.mentorRole}>{mentor.role}</p>
              <p className={s.mentorCredential}>{mentor.credential}</p>
              <div className={s.mentorDivider} />
              <blockquote className={s.mentorPhilosophy}>
                &ldquo;{mentor.philosophy}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <p className={s.eyebrowInv}>One-on-One Mentorship</p>
          <h2 className={s.ctaH2}>
            Every Cadet Gets<br /><em>Direct Access.</em>
          </h2>
          <p className={s.ctaP}>
            Mentorship at Aviora is not a scheduled session once a fortnight.
            It is built into the programme structure — daily briefings, weekly 1-on-1 reviews,
            and permanent access to faculty during study hours.
          </p>
          <div className={s.ctaBtns}>
            <Link href="/admissions" className={s.btnGold}>Apply Now</Link>
            <Link href="/contact" className={s.btnLine}>Speak with a Mentor</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
