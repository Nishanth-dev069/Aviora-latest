'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import s from './cabin.module.css';

const CABIN_CREW_PATHWAY = [
  {
    phase: 'Phase 1',
    title: 'Aviation Safety & Emergency Procedures',
    duration: '6 Weeks',
    detail: 'Emergency drills · Firefighting · First Aid',
    desc: 'The core of cabin crew duties is passenger safety. Cadets simulate advanced emergency procedures including aircraft evacuation drills, firefighting on-board, First Aid & CPR certification, ditching and water survival techniques, and passenger handling during critical incident management within controlled environments.',
  },
  {
    phase: 'Phase 2',
    title: 'In-Flight Service Excellence',
    duration: '5 Weeks',
    detail: 'Galley operations · Special needs care · Meal protocols',
    desc: 'Deliver five-star hospitality at 35,000 feet. Training covers galley operations, cabin service standards, premium class service, special needs passenger care, catering, bar and duty-free service, and precise meal and beverage service protocols expected by international tier-one carriers.',
  },
  {
    phase: 'Phase 3',
    title: 'Communication & Professional Grooming',
    duration: '4 Weeks',
    detail: 'Voice & diction · Airline grooming · Uniform standards',
    desc: 'The face of the airline. This module encompasses voice, diction, and accent neutralisation. Cadets undergo rigorous professional grooming standards, uniform presentation coaching, skincare and makeup tutorials, etiquette lessons, and Crew Resource Management (CRM) for flawless crew cooperation.',
  },
  {
    phase: 'Phase 4',
    title: 'Mock Drills & Airline Interview Prep',
    duration: '9 Weeks',
    detail: 'Live mock cabin · Profile matching · Selection coaching',
    desc: 'Supplemented heavily with extensive interview profiling coaching tailored to IndiGo, Air India, and international carriers. Includes full emergency drills in a live mock cabin, live service scenarios, group discussion practice, and 1-on-1 performance breakdown sessions ensuring you are instantly recognised as a competitive asset.',
  },
];

const HIGHLIGHTS = [
  { num: '6', label: 'Months Duration', sub: 'Comprehensive airline training' },
  { num: '100%', label: 'Placement Support', sub: 'Airline interview coaching' },
  { num: '18–27', label: 'Age Eligibility', sub: 'The ideal airline entry window' },
  { num: 'Global', label: 'Curriculum', sub: 'Domestic & International standards' },
];

export default function CabinCrewPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(s.visible); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${s.reveal}`).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80" alt="Cabin Crew" className={s.heroBgImg} style={{ objectPosition: 'center 30%' }} />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/programs" className={s.bcLink}>← Programs</Link>
            <span className={s.bcSep}>/</span>
            <span className={s.bcCurrent}>Cabin Crew</span>
          </nav>
          <div className={s.heroTag}>02 — Hospitality & Safety</div>
          <h1 className={s.heroH1}>Cabin Crew<br /><em>Training Programme</em></h1>
          <p className={s.heroSub}>Airline-ready in 6 months. Grooming, safety, emergency procedures, mock cabin, and airline interview coaching. Structured for IndiGo, Air India, and international carrier standards.</p>
          <div className={s.heroBadges}>
            {['6 Months', '10+2 Any Stream', 'Airline Ready Outcome', 'Age 18–27'].map((b, i) => (
              <span className={s.badge} key={i}>{b}</span>
            ))}
          </div>
          <div className={s.heroCtas}>
            <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
            <Link href="/contact" className={s.btnOutline}>Talk to Admissions</Link>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className={s.heroStats}>
          {HIGHLIGHTS.map((h, i) => (
            <div className={s.heroStat} key={i}>
              <span className={s.heroStatNum}>{h.num}</span>
              <span className={s.heroStatLabel}>{h.label}</span>
              <span className={s.heroStatSub}>{h.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STRIP */}
      <div className={s.introStrip}>
        <div className={s.introText}>
          Cabin crew are the first line of safety in the sky and the face of every airline. Our premier certification delivers 6 months of elite training.
        </div>
        <div className={s.introDivider} />
        <div className={s.introDetail}>
          Elevating applicants onto the fast-track required by tier-one international airlines. Our graduates are instantly recognised as highly polished, confident, and professional aviation assets.
        </div>
      </div>

      {/* PHASE TIMELINE */}
      <section className={s.phaseSection}>
        <div className={s.phaseSectionHead + ' ' + s.reveal}>
          <span className={s.eyebrow}>Training Pathway</span>
          <h2 className={s.sectionH2}>Your Journey to<br /><em>The Skies</em></h2>
        </div>

        <div className={s.timeline}>
          {CABIN_CREW_PATHWAY.map((step, i) => (
            <div className={`${s.step} ${s.reveal}`} key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={s.stepLeft}>
                <div className={s.stepCircle}>{String(i + 1).padStart(2, '0')}</div>
                {i < CABIN_CREW_PATHWAY.length - 1 && <div className={s.stepLine} />}
              </div>
              <div className={s.stepBody}>
                <div className={s.stepPhaseTag}>{step.phase}</div>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <div className={s.stepMetas}>
                  <span className={s.stepMeta}>⏱ {step.duration}</span>
                  <span className={s.stepMeta}>◆ {step.detail}</span>
                </div>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className={s.dgcaSection}>
        <div className={s.dgcaHead + ' ' + s.reveal}>
          <span className={s.eyebrow}>Career Opportunities</span>
          <h2 className={s.sectionH2}>Where Will You<br /><em>Fly Next?</em></h2>
          <p className={s.sectionSub}>Aviora ensures you are prepared for top Indian and international airlines.</p>
        </div>
        <div className={s.subjectsGrid}>
          {[
            { num: '01', name: 'Domestic Airlines', desc: 'IndiGo, Air India, SpiceJet, Akasa Air' },
            { num: '02', name: 'International Carriers', desc: 'Emirates, Qatar Airways, AirAsia, Etihad' },
            { num: '03', name: 'Charter & Corporate', desc: 'Private jet crew, corporate aviation hospitality' },
            { num: '04', name: 'Ground Services', desc: 'Ground Hostess, VIP lounge hospitality, Airport Guest Relations' }
          ].map((sub, i) => (
            <div className={`${s.subjectCard} ${s.reveal}`} key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={s.subjectNum}>{sub.num}</div>
              <h3 className={s.subjectName}>{sub.name}</h3>
              <p className={s.subjectDesc}>{sub.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <div className={s.gallery}>
        {[
          { src: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=900&q=80', cap: 'In-Flight Service' },
          { src: 'https://images.unsplash.com/photo-1569032549301-52b3112bd2fc?w=900&q=80', cap: 'Safety & Emergency' },
          { src: 'https://images.unsplash.com/photo-1628108426027-3806eb553bb8?w=900&q=80', cap: 'Airline Grooming' },
        ].map((g, i) => (
          <div className={s.galleryItem} key={i}>
            <img src={g.src} alt={g.cap} className={s.galleryImg} loading="lazy" />
            <div className={s.galleryFade} />
            <span className={s.galleryCap}>{g.cap}</span>
          </div>
        ))}
      </div>

      {/* ELIGIBILITY */}
      <section className={s.eligSection}>
        <div className={s.eligInner}>
          <div className={`${s.eligCard} ${s.reveal}`}>
            <span className={s.eyebrow}>Who Can Apply</span>
            <h3 className={s.eligH3}>Eligibility<br /><em>Requirements</em></h3>
            <ul className={s.eligList}>
              {[
                '10+2 from recognised board (Any Stream)',
                'Age 18 – 27 years',
                'Height: 157 cm (Female) / 170 cm (Male)',
                'Fit and healthy — no visible tattoos',
                'Fluent English; additional language an advantage',
                'Pleasant personality and communication skills',
              ].map((item, i) => (
                <li className={s.eligItem} key={i}>
                  <span className={s.eligArrow}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${s.ctaCard} ${s.reveal}`}>
            <div className={s.ctaCardEye}>Airline Linked Programme</div>
            <h3 className={s.ctaCardH3}>Ready For<br /><em>Takeoff?</em></h3>
            <p className={s.ctaCardP}>Our admissions team assesses candidates for airline compatibility before enrollment to ensure the highest placement success.</p>
            <div className={s.ctaCardBtns}>
              <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
              <Link href="/contact" className={s.btnOutline}>Talk to Admissions</Link>
            </div>
            <div className={s.ctaCardTrust}>
              <span>100% Placement Assistance</span>
              <span className={s.dot}>·</span>
              <span>IndiGo / Air India Focus</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
