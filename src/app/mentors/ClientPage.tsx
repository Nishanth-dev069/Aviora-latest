'use client';
import Link from 'next/link';
import s from './mentors.module.css';

const MENTORS = [
  {
    num: '01',
    name: 'Capt. Alok Reddy',
    role: 'Founder & CPL Ground Instructor',
    credential: 'A320 Rated Airline Pilot with a leading airline in India.',
    philosophy: 'Specialises in airline operations, aviation training, and mentoring aspiring pilots from Zero to Airline Pilot. Passionate about building the next generation of aviation professionals.',
    tags: ['Airline Operations', 'Aviation Training', 'Zero to Airline Pilot'],
  },
  {
    num: '02',
    name: 'Capt. Chaitanya Mendu',
    role: 'Senior CPL Ground Instructor',
    credential: 'A320 Rated Airline Pilot and Senior Instructor for Navigation & Technical General.',
    philosophy: 'Known for simplifying complex aviation concepts and mentoring aspiring pilots with a strong focus on DGCA exam preparation, technical knowledge, and airline-oriented training. Passionate about shaping disciplined and industry-ready aviators.',
    tags: ['Navigation', 'Technical General', 'DGCA Preparation'],
  },
  {
    num: '03',
    name: 'Capt. Arjun Rao',
    role: 'Senior CPL Ground Instructor',
    credential: 'Capt. Arjun Rao is an A320 Rated Airline Pilot and Senior Instructor for Meteorology.',
    philosophy: 'Recognised for his practical teaching approach and deep understanding of aviation weather systems, he mentors aspiring pilots with a strong focus on DGCA Meteorology preparation and real-world airline operations. Dedicated to building confident and knowledgeable future aviators.',
    tags: ['Meteorology', 'Weather Systems', 'Airline Operations'],
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
            src="/hero/mentors_hero.png"
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
            Aviora&apos;s mentorship philosophy is simple: cadets learn from people who have done the job,
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
            <Link href="/admissions" className={s.btnGold}>Enroll Now</Link>
            <Link href="/contact" className={s.btnLine}>Speak with a Mentor</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
