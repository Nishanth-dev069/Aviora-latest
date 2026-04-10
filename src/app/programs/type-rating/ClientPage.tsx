'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './typerating.module.css';

const ATR_PARTNERS = [
  { location: 'Vietnam', city: 'Ho Chi Minh City', flag: '🇻🇳', price: '€16,000', currency: 'EUR', authority: 'DGCA India Approved', facilities: 'Level D FFS · ATR 72-600', duration: '6–7 weeks' },
  { location: 'Madrid, Spain', city: 'Madrid', flag: '🇪🇸', price: '€15,800', currency: 'EUR', authority: 'EASA + DGCA Approved', facilities: 'GTA Madrid · Indra FFS', duration: '6–7 weeks' },
  { location: 'India', city: 'Hyderabad', flag: '🇮🇳', price: '₹13.5 Lakhs', currency: 'INR', authority: 'DGCA India', facilities: 'DGCA Approved ATO', duration: '7–8 weeks' },
];
const BOEING_PARTNERS = [
  { location: 'Vietnam', city: 'Ho Chi Minh City', flag: '🇻🇳', price: '€16,000', currency: 'EUR', authority: 'DGCA India Approved', facilities: 'Level D FFS · B737 NG/MAX', duration: '6–8 weeks' },
  { location: 'Madrid, Spain', city: 'Madrid', flag: '🇪🇸', price: '€15,800', currency: 'EUR', authority: 'EASA + DGCA Approved', facilities: 'GTA Madrid · Boeing FFS', duration: '6–8 weeks' },
  { location: 'Bangkok, Thailand', city: 'Bangkok', flag: '🇹🇭', price: '€14,500', currency: 'EUR', authority: 'DGCA India Approved', facilities: 'Acron Aviation Bangkok · Level D', duration: '7–8 weeks' },
];
const STEPS = [
  { num: '01', title: 'Eligibility Verification', desc: 'Hold a valid DGCA CPL with Instrument Rating and Multi-Engine Rating. Valid DGCA Class 1 Medical Certificate. ICAO Level 4 English proficiency. Aviora verifies all documents within 48 hours.' },
  { num: '02', title: 'Aircraft Type Selection', desc: 'Choose your aircraft type — A320, B737, or ATR — based on your target airline, market demand, and budget. Aviora counsellors guide this decision with current airline hiring intelligence.' },
  { num: '03', title: 'Location & Partner Assignment', desc: 'Select your training location from our global partner network: Vietnam, Madrid Spain, Bangkok, or India. Aviora handles all enrolment, documentation, and coordination with the partner ATO.' },
  { num: '04', title: 'Ground School (Theory Phase)', desc: '3–4 weeks of intensive aircraft systems theory. Covers all DGCA-required subjects for the specific aircraft type. Conducted at the partner facility or partially online before departure.' },
  { num: '05', title: 'Full Flight Simulator Training', desc: 'Minimum 32 hours in a Level D Full Flight Simulator — the highest certification standard. Real-world emergency scenarios, line operations, and cross-crew coordination under TRI-certified instructors.' },
  { num: '06', title: 'DGCA Licence Skill Test', desc: 'Final assessment conducted by a DGCA-authorised Type Rating Examiner (TRE). Upon pass, DGCA endorses your CPL with the specific type rating. Aviora provides post-test placement assistance.' },
];
const ELIGIBILITY = [
  'Valid DGCA Commercial Pilot Licence (CPL)',
  'Instrument Rating (IR) and Multi-Engine Rating (MER)',
  'Valid DGCA Class 1 Medical Certificate',
  'Minimum 200 total logged flight hours',
  'ICAO English Proficiency — Level 4 or above',
  'Valid Indian passport (for overseas training)',
  'No active DGCA suspension or enforcement action',
];
const STATS = [
  { num: '85', label: 'Max cadets per year', sub: 'Limited intake — quality controlled' },
  { num: '3', label: 'Aircraft types', sub: 'A320 · B737 · ATR' },
  { num: '3', label: 'Global locations', sub: 'Vietnam · Spain · Bangkok/India' },
  { num: '6–10', label: 'Weeks to type rated', sub: 'Industry-standard duration' },
];
const AIRCRAFT = [
  { type: 'A320', num: '01', note: 'Operates with IndiGo, Air India, AirAsia India, Vistara, Akasa Air' },
  { type: 'B737', num: '02', note: 'Operates with Air India, SpiceJet, Akasa Air (MAX)' },
  { type: 'ATR',  num: '03', note: 'Operates with IndiGo, Air India Regional, Star Air, Blue Dart' },
];

export default function TypeRatingPage() {
  const [tab, setTab] = useState<'ATR'|'Boeing'>('ATR');
  const partners = tab === 'ATR' ? ATR_PARTNERS : BOEING_PARTNERS;

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=80" alt="Simulator" className={s.heroBgImg} fetchPriority="high" loading="eager" />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/programs" className={s.bcLink}>Programs</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>Type Rating</span>
          </nav>
          <p className={s.heroTag}><span className={s.heroLine} />Type Rating · A320 · B737 · ATR</p>
          <h1 className={s.heroH1}>Fly the Jet.<br /><em>Not Just the Licence.</em></h1>
          <p className={s.heroP}>A type rating is what separates a CPL holder from an airline First Officer. It is the final certification — the endorsement that says you can operate a specific commercial aircraft in line operations. Aviora's global partner network places you in Level D simulators across three continents.</p>
          <Link href="#eligibility" className={s.heroCta}>Check Eligibility →</Link>
        </div>
        <div className={s.statStrip}>
          {STATS.map(st => (
            <div key={st.label} className={s.statItem}>
              <span className={s.statNum}>{st.num}</span>
              <span className={s.statLabel}>{st.label}</span>
              <span className={s.statSub}>{st.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLAINER */}
      <section className={s.explainerSection}>
        <div className={s.explainerInner}>
          <div className={s.explainerLeft}>
            <p className={s.eyebrow}>The Bridge to the Cockpit</p>
            <h2 className={s.explainerH2}>The Bridge Between<br /><em>CPL and the Cockpit.</em></h2>
            <p className={s.explainerPara}>A Commercial Pilot Licence authorises you to fly. A type rating authorises you to fly a specific aircraft that requires advanced training — aircraft above 5,700 kg MTOW, multi-crew operations, pressurised jet systems. Every Indian airline hiring today requires an A320, B737, or ATR type rating before a pilot can sit in the right seat.</p>
            <p className={s.explainerPara}>The training is conducted in a Level D Full Flight Simulator — the highest certification tier available. Inside, the aircraft behaves identically to the real machine. Emergency scenarios, systems failures, instrument approaches, crosswind landings. All executed under the eyes of a Type Rating Instructor.</p>
            <p className={s.explainerPara}>Aviora facilitates type rating through vetted partner ATOs with DGCA India recognition. We manage your enrolment, documentation, visa, and pre-departure prep. After your Licence Skill Test, our placement team engages the airlines.</p>
          </div>
          <div className={s.explainerRight}>
            {AIRCRAFT.map(ac => (
              <div key={ac.type} className={s.aircraftCard}>
                <div className={s.aircraftAccent} />
                <span className={s.aircraftNum}>{ac.num}</span>
                <span className={s.aircraftType}>{ac.type}</span>
                <p className={s.aircraftNote}>{ac.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER TABS */}
      <section className={s.partnersSection}>
        <div className={s.partnersHead}>
          <p className={s.eyebrow}>Global Partner Network</p>
          <h2 className={s.partnersH2}>Train Where<br /><em>Standards Are Highest.</em></h2>
        </div>
        <div className={s.tabBar}>
          {(['ATR','Boeing'] as const).map(t => (
            <button key={t} className={`${s.tabBtn} ${tab===t ? s.tabActive : ''}`} onClick={() => setTab(t)}>
              {t === 'ATR' ? 'ATR Programme' : 'Boeing B737 Programme'}
            </button>
          ))}
        </div>
        <div className={s.partnerGrid}>
          {partners.map(p => (
            <div key={p.location} className={s.partnerCard}>
              <div className={s.partnerTop}>
                <span className={s.partnerFlag}>{p.flag}</span>
                <div><span className={s.partnerCity}>{p.city}</span><span className={s.partnerLoc}>{p.location}</span></div>
                <span className={s.partnerDuration}>{p.duration}</span>
              </div>
              <div className={s.partnerPrice}>{p.price}</div>
              <div className={s.partnerCurrency}>{p.currency}</div>
              <span className={s.partnerBadge}>{p.authority}</span>
              <p className={s.partnerFacilities}>{p.facilities}</p>
            </div>
          ))}
        </div>
        <p className={s.partnersNote}>◆ A320 type rating available via dedicated partner. Enquire for current pricing and available locations.</p>
      </section>

      {/* PROCESS */}
      <section className={s.processSection}>
        <div className={s.processHead}>
          <p className={s.eyebrowDark}>The Process · Step by Step</p>
          <h2 className={s.processH2}>Six Steps to<br /><em>Your Type Rating.</em></h2>
        </div>
        <div className={s.timeline}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={s.timelineStep}>
              <div className={s.stepLeft}>
                <span className={s.stepNum}>{step.num}</span>
                {i < STEPS.length - 1 && <span className={s.stepLine} />}
              </div>
              <div className={s.stepContent}>
                <span className={s.stepPhase}>Phase {step.num}</span>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className={s.eligSection}>
        <div className={s.eligInner}>
          <div className={s.eligCard}>
            <div className={s.eligCardHeader}>Eligibility Requirements</div>
            <ul className={s.eligList}>
              {ELIGIBILITY.map(item => (
                <li key={item} className={s.eligItem}>
                  <span className={s.eligArrow}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.eligCtaCard}>
            <p className={s.eligCtaEye}>Max 85 Cadets · Annual Intake</p>
            <h3 className={s.eligCtaH3}>Ready to Start Your<br /><em>Application?</em></h3>
            <p className={s.eligCtaDesc}>Seats are allocated on a first-come basis. Aviora's admissions team reviews all applications within 72 hours and provides an eligibility confirmation before any commitment.</p>
            <div className={s.eligCtaBtns}>
              <Link href="/admissions" className={s.btnGoldSolid}>Apply Now</Link>
              <Link href="/contact" className={s.btnGoldOutline}>Speak to Admissions</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className={s.ctaStrip}>
        <div className={s.ctaInner}>
          <div>
            <p className={s.eyebrow}>Limited Intake · First Come Basis</p>
            <h2 className={s.ctaH2}>Max 85 cadets per annual intake.<br /><em>Seats are allocated on first-come basis.</em></h2>
          </div>
          <div className={s.ctaBtns}>
            <Link href="/admissions" className={s.btnGold}>Apply Now</Link>
            <Link href="/contact" className={s.btnLine}>Talk to Admissions</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
