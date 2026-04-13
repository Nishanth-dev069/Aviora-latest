'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './typerating.module.css';

const AIRCRAFT = [
  { type: 'A320', num: '01', airlines: 'IndiGo · Air India · AirAsia India · Vistara · Akasa Air', desc: 'The most in-demand type rating in Indian aviation. Over 60% of Indian airline fleet seats are A320-family aircraft.' },
  { type: 'B737', num: '02', airlines: 'Air India · SpiceJet · Akasa Air (MAX)', desc: 'The world\'s best-selling jet airliner family. Boeing 737 NG and MAX operators continue expanding across India.' },
  { type: 'ATR',  num: '03', airlines: 'IndiGo · Air India Regional · Star Air · Blue Dart', desc: 'Regional aviation is India\'s fastest-growing segment. ATR type rating opens doors to regional and cargo carriers.' },
];

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
  { num: '85', label: 'Max cadets per year', sub: 'Quality-controlled intake' },
  { num: '3', label: 'Aircraft types', sub: 'A320 · B737 · ATR' },
  { num: '3+', label: 'Global locations', sub: 'Vietnam · Spain · Bangkok · India' },
  { num: '6–10', label: 'Weeks to type rated', sub: 'Industry-standard duration' },
];

export default function TypeRatingPage() {
  const [tab, setTab] = useState<'ATR' | 'Boeing'>('ATR');
  const partners = tab === 'ATR' ? ATR_PARTNERS : BOEING_PARTNERS;

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <img src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=80" alt="Level D Simulator" className={s.heroBgImg} />
          <div className={s.heroOverlay} />
        </div>
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/programs" className={s.bcLink}>← Programs</Link>
            <span className={s.bcSep}>/</span>
            <span className={s.bcCurrent}>Type Rating</span>
          </nav>
          <div className={s.heroTag}>04 — Licence Endorsement</div>
          <h1 className={s.heroH1}>Fly the Jet.<br /><em>Not Just the Licence.</em></h1>
          <p className={s.heroSub}>A type rating is what separates a CPL holder from an airline First Officer. Level D Full Flight Simulator training across three continents — DGCA India approved in every location.</p>
          <div className={s.heroBadges}>
            {['A320 · B737 · ATR', '6–10 Weeks', 'Level D FFS Only', 'DGCA Approved'].map((b, i) => (
              <span className={s.badge} key={i}>{b}</span>
            ))}
          </div>
          <div className={s.heroCtas}>
            <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
            <Link href="/contact" className={s.btnOutline}>Talk to a Pilot</Link>
          </div>
        </div>

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

      {/* AIRCRAFT TYPES */}
      <section className={s.aircraftSection}>
        <div className={s.aircraftHead}>
          <span className={s.eyebrow}>Type Rating Options</span>
          <h2 className={s.sectionH2}>Three Aircraft.<br /><em>One Decision.</em></h2>
          <p className={s.sectionSub}>Choose based on your target airline, the Indian fleet composition, and current hiring patterns. Aviora counsellors will give you an honest market assessment before you commit.</p>
        </div>
        <div className={s.aircraftGrid}>
          {AIRCRAFT.map((ac, i) => (
            <div className={s.aircraftCard} key={i}>
              <div className={s.aircraftCardTop}>
                <span className={s.aircraftNum}>{ac.num}</span>
                <span className={s.aircraftType}>{ac.type}</span>
              </div>
              <p className={s.aircraftDesc}>{ac.desc}</p>
              <div className={s.aircraftAirlines}>
                <span className={s.aircraftAirlinesLabel}>Operates at</span>
                <span className={s.aircraftAirlinesVal}>{ac.airlines}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLAINER */}
      <section className={s.explainerSection}>
        <div className={s.explainerInner}>
          <div className={s.explainerLeft}>
            <span className={s.eyebrow}>What Is a Type Rating</span>
            <h2 className={s.explainerH2}>The Bridge Between<br /><em>CPL and the Cockpit.</em></h2>
          </div>
          <div className={s.explainerRight}>
            <p className={s.explainerPara}>A Commercial Pilot Licence authorises you to fly. A type rating authorises you to fly a specific aircraft that requires advanced training — aircraft above 5,700 kg MTOW, multi-crew operations, pressurised jet systems. Every Indian airline hiring today requires an A320, B737, or ATR type rating before a pilot can sit in the right seat.</p>
            <p className={s.explainerPara}>The training is conducted in a Level D Full Flight Simulator — the highest certification tier available. Inside, the aircraft behaves identically to the real machine. Emergency scenarios, systems failures, instrument approaches, crosswind landings. All executed under the eyes of a Type Rating Instructor with real airline line experience.</p>
            <p className={s.explainerPara}>Aviora facilitates type rating through vetted partner ATOs with DGCA India recognition. We manage your enrolment, documentation, visa, and pre-departure prep. After your Licence Skill Test, our placement team engages the airlines directly.</p>
          </div>
        </div>
      </section>

      {/* PARTNER LOCATIONS */}
      <section className={s.partnersSection}>
        <div className={s.partnersHead}>
          <span className={s.eyebrowDark}>Global Partner Network</span>
          <h2 className={s.partnersH2}>Train Where<br /><em>Standards Are Highest.</em></h2>
        </div>
        <div className={s.tabBar}>
          {(['ATR', 'Boeing'] as const).map(t => (
            <button key={t} className={`${s.tabBtn} ${tab === t ? s.tabActive : ''}`} onClick={() => setTab(t)}>
              {t === 'ATR' ? 'ATR Programme' : 'Boeing B737 Programme'}
            </button>
          ))}
        </div>
        <div className={s.partnerGrid}>
          {partners.map((p, i) => (
            <div className={s.partnerCard} key={i}>
              <div className={s.partnerTop}>
                <span className={s.partnerFlag}>{p.flag}</span>
                <div className={s.partnerLocation}>
                  <span className={s.partnerCity}>{p.city}</span>
                  <span className={s.partnerCountry}>{p.location}</span>
                </div>
                <span className={s.partnerDuration}>{p.duration}</span>
              </div>
              <div className={s.partnerPrice}>{p.price}</div>
              <div className={s.partnerCurrency}>{p.currency}</div>
              <span className={s.partnerBadge}>{p.authority}</span>
              <p className={s.partnerFacilities}>{p.facilities}</p>
              <Link href="/admissions" className={s.partnerCta}>Apply for This Location →</Link>
            </div>
          ))}
        </div>
        <p className={s.partnersNote}>◆ A320 type rating available via dedicated partner. Contact Aviora admissions for current pricing and available locations.</p>
      </section>

      {/* PROCESS */}
      <section className={s.processSection}>
        <div className={s.processHead}>
          <span className={s.eyebrow}>Step by Step</span>
          <h2 className={s.sectionH2}>Six Steps to<br /><em>Your Type Rating.</em></h2>
        </div>
        <div className={s.timeline}>
          {STEPS.map((step, i) => (
            <div className={s.step} key={i}>
              <div className={s.stepLeft}>
                <div className={s.stepCircle}>{step.num}</div>
                {i < STEPS.length - 1 && <div className={s.stepLine} />}
              </div>
              <div className={s.stepBody}>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY + CTA */}
      <section id="eligibility" className={s.eligSection}>
        <div className={s.eligInner}>
          <div className={s.eligCard}>
            <span className={s.eyebrow}>Who Can Apply</span>
            <h3 className={s.eligH3}>Eligibility<br /><em>Requirements</em></h3>
            <ul className={s.eligList}>
              {ELIGIBILITY.map((item, i) => (
                <li className={s.eligItem} key={i}>
                  <span className={s.eligArrow}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.ctaCard}>
            <div className={s.ctaCardEye}>Max 85 Cadets · Annual Intake</div>
            <h3 className={s.ctaCardH3}>Ready to Fly<br /><em>the Jet?</em></h3>
            <p className={s.ctaCardP}>Seats are allocated on a first-come basis. Aviora's admissions team reviews all applications within 72 hours and provides an eligibility confirmation before any financial commitment.</p>
            <div className={s.ctaCardBtns}>
              <Link href="/admissions" className={s.btnPrimary}>Enroll Now →</Link>
              <Link href="/contact" className={s.btnOutline}>Talk to a Pilot</Link>
            </div>
            <div className={s.ctaTrust}>
              <span>DGCA Approved Partners</span>
              <span className={s.dot}>·</span>
              <span>Level D FFS Only</span>
              <span className={s.dot}>·</span>
              <span>First-Come Allocation</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
