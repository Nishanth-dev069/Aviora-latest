'use client';
import Link from 'next/link';
import { useState } from 'react';
import s from './admissions.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Submit Online Application',
    desc: 'Complete the Aviora online application form with your personal details, educational background, and program of choice. Takes 10 minutes. No application fee.',
    time: 'Day 1',
  },
  {
    num: '02',
    title: 'Document Verification',
    desc: 'Upload scanned copies of your 10+2 marksheet, identity proof, and photographs. Our admissions team verifies documents within 48 working hours and sends confirmation.',
    time: '48 Hours',
  },
  {
    num: '03',
    title: 'Admissions Counselling Call',
    desc: 'A one-on-one call with an Aviora admissions counsellor — a working pilot or aviation professional. They answer every question honestly. No sales pressure.',
    time: 'Day 3–5',
  },
  {
    num: '04',
    title: 'Medical / Fitness Check',
    desc: 'Pilot applicants are guided to a DGCA-approved Aviation Medical Examiner (AME) for Class 2 medical. Cabin crew applicants complete a standard fitness declaration. Aviora assists with AME referrals.',
    time: 'Day 5–10',
  },
  {
    num: '05',
    title: 'Offer Letter & Fee Confirmation',
    desc: 'Upon successful verification and medical clearance, Aviora issues a formal Offer of Admission. Seat is reserved upon payment of the confirmation deposit.',
    time: 'Day 10–14',
  },
  {
    num: '06',
    title: 'Induction & Batch Commencement',
    desc: 'Attend Aviora Induction Day — meet your batch, your instructors, and the campus. Ground school begins the following Monday. For pilot cadets, USA travel documentation is initiated in parallel.',
    time: 'Intake Date',
  },
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
  { program: 'Pilot Training', date: 'July 2025', seats: '20 seats', status: 'Open' },
  { program: 'Cabin Crew',     date: 'June 2025', seats: '30 seats', status: 'Open' },
  { program: 'Pilot Training', date: 'January 2026', seats: '20 seats', status: 'Coming Soon' },
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
    a: 'For the Pilot Training program, a valid passport is required before USA travel (typically Month 6–8 of the program). If you do not have a passport, Aviora\'s admissions team will guide you through the application process from day one.',
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

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=80"
            alt="Aircraft cockpit at golden hour"
            className={s.heroBgImg}
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroGlow} />
        <div className={s.heroContent}>
          <div className={s.eyebrow}>Admissions 2025–26</div>
          <h1 className={s.heroH1}>
            Your First Step<br/><em>Into Aviation.</em>
          </h1>
          <p className={s.heroPara}>
            A straightforward, transparent process — no entrance exams, no hidden steps.
            Six clear stages from application to induction.
            Our admissions counsellors are pilots. They have been where you are.
          </p>
          <div className={s.heroActions}>
            <a href="#apply" className={s.btnPrimary}>Apply Now →</a>
            <a href="#eligibility" className={s.btnSecondary}>Check Eligibility</a>
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
                <div className={`${s.intakeStatus} ${intake.status === 'Open' ? s.statusOpen : s.statusSoon}`}>
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
            Six Steps.<br/><em>Zero Complexity.</em>
          </h2>
          <div className={s.processGrid}>
            {STEPS.map((step, i) => (
              <div className={s.processStep} key={i}>
                <div className={s.psTop}>
                  <div className={s.psNum}>{step.num}</div>
                  <div className={s.psTime}>{step.time}</div>
                </div>
                <h3 className={s.psTitle}>{step.title}</h3>
                <p className={s.psDesc}>{step.desc}</p>
                {i < STEPS.length - 1 && <div className={s.psConnector} />}
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
          <div className={s.eligGrid}>
            {ELIGIBILITY.map((prog, i) => (
              <div className={s.eligCard} key={i}>
                <div className={s.eligAccent} />
                <div className={s.eligTag}>{prog.tag}</div>
                <h3 className={s.eligProgram}>{prog.program}</h3>
                <ul className={s.eligList}>
                  {prog.items.map((item, j) => (
                    <li className={s.eligItem} key={j}>
                      <span className={s.eligBullet}>→</span>
                      <span className={s.eligText}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={i === 0 ? '/programs/pilot-training' : '/programs/cabin-crew'}
                  className={s.eligLink}
                >
                  Full Program Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. APPLICATION FORM REDIRECT ═══ */}
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
                <span className={s.applyStatNum}>6 steps</span>
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
                      <option value="pilot">Pilot Training — CPL</option>
                      <option value="cabin">Cabin Crew Program</option>
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
                <button className={s.applySubmit}>
                  Submit Application →
                </button>
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
