'use client';
import Link from 'next/link';
import { useState } from 'react';
import s from './admissions.module.css';
import Image from 'next/image';

const PARTNERS = [
  { name: "IndiGo Airlines", short: "IG" },
  { name: "Air India",       short: "AI" },
  { name: "Vistara",         short: "VS" },
  { name: "SpiceJet",        short: "SJ" },
  { name: "Qatar Airways",   short: "QA" },
  { name: "Emirates",        short: "EK" },
  { name: "Akasa Air",       short: "AK" },
  { name: "AirAsia India",   short: "AA" },
  { name: "Etihad Airways",  short: "EY" },
  { name: "Go First",        short: "GF" },
];

const TIMELINE_STEPS = [
  { num: '01', label: 'Apply Online',         sub: 'Submit in under 10 mins' },
  { num: '02', label: 'Document Submission',  sub: 'Upload ID & marksheet'   },
  { num: '03', label: 'Aptitude & Interview', sub: 'One-on-one counsellor'   },
  { num: '04', label: 'Seat Confirmation',    sub: 'Medical & fee deposit'   },
];

const ELIGIBILITY = [
  {
    program: 'Pilot Training',
    tag: '01',
    items: [
      '10+2 with Physics and Mathematics — minimum 50% aggregate',
      'Minimum age: 17 years at time of first solo flight',
      'DGCA Class 2 Medical Certificate — Aviora assists with AME referral',
      'Valid passport required for USA flight training (Aviora assists)',
      'English proficiency — ICAO Level 4 standard or equivalent',
    ],
  },
  {
    program: 'Cabin Crew',
    tag: '02',
    items: [
      '10+2 any stream — minimum 50% aggregate',
      'Minimum age: 18 years at time of application',
      'Height: minimum 157.5 cm (Female) · 170 cm (Male)',
      'Standard fitness — no aviation medical certificate required',
      'Good spoken English and presentable personality',
    ],
  },
];

const INTAKES = [
  { program: 'Pilot Training', date: 'April 2026', seats: '40 seats', status: 'Closed' },
  { program: 'Cabin Crew',     date: 'August 2026', seats: '75 seats', status: 'Open' },
  { program: 'Pilot Training', date: 'July 2026',   seats: '40 seats', status: 'Open' },
];

const FAQS = [
  {
    q: 'Can I apply if I have failed in Physics or Maths in 10+2?',
    a: 'You must have passed Physics and Mathematics at 10+2 level with minimum 50% aggregate. Compartment or supplementary passes are accepted once results are formally declared.',
  },
  {
    q: 'Do I need to arrange my own DGCA medical?',
    a: 'Aviora provides a list of DGCA-approved Aviation Medical Examiners (AMEs) in Hyderabad and assists with appointments. The medical fee is paid directly to the AME and is not included in program fees.',
  },
  {
    q: 'Is a passport mandatory to apply?',
    a: "For the Pilot Training program, a valid passport is required before USA travel (typically Month 6–8 of the program). If you do not have a passport, Aviora's admissions team will guide you through the application process from day one.",
  },
  {
    q: 'Are payment plans or EMI options available?',
    a: 'Yes. Aviora offers structured fee payment schedules tied to program milestones. EMI arrangements through partner banks are also available. Speak to an admissions counsellor for your personalised plan.',
  },
  {
    q: 'What is the refund policy if I withdraw?',
    a: 'The confirmation deposit is non-refundable once a seat is reserved. Program fees paid beyond the deposit are refundable on a pro-rata basis subject to the withdrawal date and any costs already incurred on your behalf.',
  },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openReq, setOpenReq] = useState<number | null>(0);
  const allPartners = [...PARTNERS, ...PARTNERS];

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <Image
            src="https://images.unsplash.com/photo-1542282245-21d960f58ec7?w=1920&q=80"
            alt="Wide-angle runway view at dawn"
            className={s.heroBgImg}
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroGlow} />

        <div className={s.heroContent}>
          <span className={s.heroEyebrow}>ADMISSIONS · AY 2025–26</span>
          <h1 className={s.heroH1}>Your Flight Plan<br/>Starts Here.</h1>
          <p className={s.heroPara}>
            Join India's elite aviation academy. Seats are limited — secure yours before the runway closes.
          </p>
          <div className={s.heroActions}>
            <a href="#apply" className={s.btnPrimaryApply}>Apply for Intake</a>
            <a href="#prospectus" className={s.btnSecondaryApply}>Download Brochure</a>
          </div>

          {/* 4-step horizontal timeline */}
          <div className={s.heroTimeline}>
            {TIMELINE_STEPS.map((step) => (
              <div className={s.htStep} key={step.num}>
                <div className={s.htNode}>
                  <span className={s.htNodeNum}>{step.num}</span>
                </div>
                <div className={s.htLabel}>{step.label}</div>
                <div className={s.htSub}>{step.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image emerging from bottom */}
        <div className={s.heroImageWrap}>
          <img
            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1400&q=80"
            alt="Aviora Academy campus and students"
          />
        </div>
      </section>

      {/* ═══ PARTNER SCROLL ═══ */}
      <section className={s.partnerSection}>
        <span className={s.partnerLabel}>TRUSTED BY INDIA'S LEADING AVIATION ORGANISATIONS</span>
        <div className={s.partnerMarqueeWrap}>
          <div className={s.partnerMarqueeTrack}>
            {allPartners.map((p, i) => (
              <div className={s.partnerCard} key={i}>
                <div className={s.partnerMonogram}>{p.short}</div>
                <span className={s.partnerName}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 2. INTAKE DATES STRIP ═══ */}
      <section className={s.intakeStrip}>
        <div className={s.intakeInner}>
          <div className={s.intakeLabel}>Current Intakes</div>
          <div className={s.intakeGrid}>
            {INTAKES.map((intake, i) => (
              <div className={s.intakeItem} key={i}>
                <div className={s.intakeProgram}>{intake.program}</div>
                <div className={s.intakeDate}>{intake.date}</div>
                <div className={s.intakeSeats}>{intake.seats}</div>
                <div className={`${s.intakeStatus} ${intake.status === 'Open' ? s.statusOpen : intake.status === 'Closed' ? s.statusClosed : s.statusSoon}`}>
                  {intake.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. PROCESS TIMELINE ═══ */}
      <section className={s.processSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>Admissions Process</div>
          <h2 className={s.sectionH2}>
            Four Steps.<br/><em>Zero Complexity.</em>
          </h2>
          <div className={s.processTimeline}>
            {TIMELINE_STEPS.map((step, i) => (
              <div className={s.tlItem} key={i}>
                <div className={s.tlVisual}>
                  <div className={s.tlDot} />
                  {i < TIMELINE_STEPS.length - 1 && <div className={s.tlLine} />}
                </div>
                <div className={s.tlContent}>
                  <h3 className={s.tlTitle}>{step.label}</h3>
                  <p className={s.tlDesc}>{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ELIGIBILITY ═══ */}
      <section className={s.eligibilitySection} id="eligibility">
        <div className={s.container}>
          <div className={s.eyebrow}>Eligibility Criteria</div>
          <h2 className={s.sectionH2}>
            Do You Qualify<br/><em>for Aviora?</em>
          </h2>
          <div className={s.eligAccordion}>
            {ELIGIBILITY.map((prog, i) => (
              <div className={`${s.reqCard} ${openReq === i ? s.reqOpen : ''}`} key={i} onClick={() => setOpenReq(openReq === i ? null : i)}>
                <div className={s.reqCardHeader}>
                  <div className={s.reqTitleGroup}>
                    <div className={s.reqProgram}>{prog.program}</div>
                  </div>
                  <div className={s.reqToggle}>{openReq === i ? '−' : '+'}</div>
                </div>
                {openReq === i && (
                  <div className={s.reqCardBody}>
                    <ul className={s.reqList}>
                      {prog.items.map((item, j) => (
                        <li className={s.reqItem} key={j}>
                          <span className={s.reqCheckbox}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={i === 0 ? '/programs/cpl' : '/programs/cabin-crew'} className={s.reqLink}>
                      Full Program Details →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. APPLICATION FORM ═══ */}
      <section className={s.applySection} id="apply">
        <div className={s.applyInner}>
          <div className={s.applyLeft}>
            <div className={s.eyebrow}>Apply Now</div>
            <h2 className={s.applyH2}>
              Reserve Your<br/><em>Seat Today.</em>
            </h2>
            <p className={s.applyPara}>
              Applications take under 10 minutes. No entrance examination.
              No application fee. Our admissions team responds within 48 hours.
            </p>
            <div className={s.applyStats}>
              <div className={s.applyStat}>
                <span className={s.applyStatNum}>48 hrs</span>
                <span className={s.applyStatLabel}>Response time</span>
              </div>
              <div className={s.applyStat}>
                <span className={s.applyStatNum}>Zero</span>
                <span className={s.applyStatLabel}>Application fee</span>
              </div>
              <div className={s.applyStat}>
                <span className={s.applyStatNum}>4 steps</span>
                <span className={s.applyStatLabel}>To your seat</span>
              </div>
            </div>
          </div>
          <div className={s.applyRight}>
            <div className={s.applyCard}>
              <div className={s.applyCardHeader}>Start Your Application</div>
              <div className={s.applyCardBody}>
                <p className={s.applyCardText}>
                  Fill in your details and a program of interest.
                  An Aviora admissions counsellor — a pilot or aviation professional —
                  will call you within 48 hours.
                </p>
                <div className={s.applyFormFields}>
                  <div className={s.applyFieldGroup}>
                    <label className={s.applyLabel}>Full Name</label>
                    <input className={s.applyInput} type="text" placeholder="As on official ID" />
                  </div>
                  <div className={s.applyFieldGroup}>
                    <label className={s.applyLabel}>Mobile Number</label>
                    <input className={s.applyInput} type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className={s.applyFieldGroup}>
                    <label className={s.applyLabel}>Email Address</label>
                    <input className={s.applyInput} type="email" placeholder="your@email.com" />
                  </div>
                  <div className={s.applyFieldGroup}>
                    <label className={s.applyLabel}>Program of Interest</label>
                    <select className={s.applySelect}>
                      <option value="">Select a program</option>
                      <option value="cpl">Commercial Pilot — CPL</option>
                      <option value="ppl">Private Pilot — PPL</option>
                      <option value="cabin">Cabin Crew Program</option>
                      <option value="type">Type Rating</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className={s.applyFieldGroup}>
                    <label className={s.applyLabel}>Current Education</label>
                    <select className={s.applySelect}>
                      <option value="">Select</option>
                      <option value="appearing">Appearing 10+2</option>
                      <option value="completed">Completed 10+2</option>
                      <option value="graduate">Graduate / Post-graduate</option>
                    </select>
                  </div>
                </div>
                <button className={s.applySubmit}>Submit Application →</button>
                <p className={s.applyDisclaimer}>
                  By submitting you agree to be contacted by Aviora admissions.
                  We do not share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. FAQ ═══ */}
      <section className={s.faqSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>Common Questions</div>
          <h2 className={s.sectionH2}>
            Admissions<br/><em>FAQ</em>
          </h2>
          <div className={s.faqList}>
            {FAQS.map((faq, i) => (
              <div
                className={`${s.faqItem} ${openFaq === i ? s.faqOpen : ''}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className={s.faqQuestion}>
                  <span className={s.faqQ}>{faq.q}</span>
                  <span className={s.faqToggle}>{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className={s.faqAnswer}>
                    <p className={s.faqA}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. BOTTOM CTA ═══ */}
      <section className={s.bottomCta}>
        <div className={s.bottomCtaInner}>
          <div className={s.eyebrow}>Ready?</div>
          <h2 className={s.bottomCtaH2}>
            The Cockpit is<br/><em>Waiting for You.</em>
          </h2>
          <div className={s.bottomCtaBtns}>
            <a href="#apply" className={s.btnPrimary}>Apply Now →</a>
            <Link href="/contact" className={s.btnSecondary}>Speak to a Counsellor</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
