'use client';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import s from './admissions.module.css';
import Image from 'next/image';
import TrainingPartnersTicker from '@/components/TrainingPartnersTicker';

const PARTNERS = [
  { name: "IndiGo Airlines", short: "IG" },
  { name: "Air India", short: "AI" },
  { name: "Vistara", short: "VS" },
  { name: "SpiceJet", short: "SJ" },
  { name: "Qatar Airways", short: "QA" },
  { name: "Emirates", short: "EK" },
  { name: "Akasa Air", short: "AK" },
  { name: "AirAsia India", short: "AA" },
  { name: "Etihad Airways", short: "EY" },
  { name: "Go First", short: "GF" },
];

const ONBOARDING_7_DAY = [
  {
    day: '1',
    title: 'Application & Pre-Screening',
    desc: 'Candidates submit their online application specifying their program of interest. Our admissions team conducts an initial profile match within 24 hours to ensure minimum age and educational criteria are met. This filters out ineligible candidates immediately.',
    metrics: [
      { label: 'Action Required', value: 'Complete Online Form' },
      { label: 'Turnaround', value: '24 Hours' },
      { label: 'Outcome', value: 'Profile Validation' }
    ]
  },
  {
    day: '2',
    title: 'Admissions Consultation',
    desc: 'A 1-on-1 scheduled telephonic or video consultation with an Aviora counselor (often an active airline pilot or cabin crew member). We discuss your career goals, evaluate your communication skills, and explain training demands honestly.',
    metrics: [
      { label: 'Platform', value: 'Google Meet / Call' },
      { label: 'Duration', value: '30 – 45 Minutes' },
      { label: 'Goal', value: 'Expectation Setting' }
    ]
  },
  {
    day: '3',
    title: 'Document Verification',
    desc: 'Candidates upload digital copies of their 10+2 marksheets, valid government ID, and a passport-size photograph through the secure Aviora admissions portal. All documents are cross-verified with issuing authorities for authenticity.',
    metrics: [
      { label: 'Key Document 1', value: '10+2 Marksheet' },
      { label: 'Key Document 2', value: 'Aadhar / Passport' },
      { label: 'Verification Type', value: 'Digital Authentication' }
    ]
  },
  {
    day: '4',
    title: 'Medical Coordination',
    desc: 'Aviora assists pilot and type rating candidates in scheduling their required DGCA Class 2 or Class 1 medical examinations with approved Aviation Medical Examiners (AMEs) in their respective cities. We provide the approved AME list.',
    metrics: [
      { label: 'Requirement', value: 'DGCA Class 2/1 Medical' },
      { label: 'Applicability', value: 'Pilots Only' },
      { label: 'Assistance', value: 'AME Appointment Booking' }
    ]
  },
  {
    day: '5',
    title: 'Aptitude & Psychometric Assessment',
    desc: 'A standardized 60-minute online assessment covering logical reasoning, spatial awareness, and basic physics/math (for pilots), alongside a psychometric profile to ensure candidates possess the resilience required for airline training environments.',
    metrics: [
      { label: 'Format', value: 'Online MCQ Test' },
      { label: 'Duration', value: '60 Minutes' },
      { label: 'Cut-off', value: '70% Minimum Score' }
    ]
  },
  {
    day: '6',
    title: 'Final Selection & Offer Letter',
    desc: 'The academy\'s selection board reviews the candidate\'s complete profile—comprising the interview, document checks, and aptitude scores. Successful candidates receive a formal Offer Letter outlining program details, start dates, and fee schedules.',
    metrics: [
      { label: 'Issuance', value: 'Digital Signage via Email' },
      { label: 'Validity', value: '14 Days from issuance' },
      { label: 'Next Step', value: 'Acceptance Signature' }
    ]
  },
  {
    day: '7',
    title: 'Enrollment & Seat Confirmation',
    desc: 'The candidate signs the enrollment agreement and pays the initial seat reservation deposit. Upon confirmation, Aviora dispatches the official Welcome Kit, accesses to the cadet portal, and assigns the candidate to their incoming training batch.',
    metrics: [
      { label: 'Action Required', value: 'Seat Deposit Payment' },
      { label: 'Deliverable', value: 'Cadet Portal Access' },
      { label: 'Final Status', value: 'Officially Enrolled' }
    ]
  }
];

const ELIGIBILITY = [
  {
    program: 'Pilot Training',
    href: '/programs/pilot-training',
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
    href: '/programs/cabin-crew',
    items: [
      '10+2 any stream — minimum 50% aggregate',
      'Minimum age: 18 years at time of application',
      'Height: minimum 157.5 cm (Female) · 170 cm (Male)',
      'Standard fitness — no aviation medical certificate required',
      'Good spoken English and presentable personality',
    ],
  },
  {
    program: 'Global Training',
    href: '/programs/global-training',
    items: [
      '10+2 with Physics and Mathematics — minimum 50% aggregate',
      'Minimum age: 18 years at time of application',
      'DGCA Class 1 Medical Certificate (FAA standard) — Aviora assists',
      'Valid passport mandatory — USA & international travel required',
      'English proficiency — ICAO Level 4 standard or equivalent',
    ],
  },
  {
    program: 'Type Rating',
    href: '/programs/type-rating',
    items: [
      'Valid DGCA Commercial Pilot Licence (CPL) — mandatory',
      'Valid DGCA Class 1 Medical Certificate',
      'Minimum age: 21 years',
      'Minimum 200 hours total flight experience recommended',
      'Aircraft systems knowledge of A320 / B737 / ATR preferred',
    ],
  },
];

const INTAKES = [
  { program: 'Pilot Training', date: 'April 2026', seats: '40 seats', status: 'Closed' },
  { program: 'Cabin Crew', date: 'August 2026', seats: '75 seats', status: 'Open' },
  { program: 'Pilot Training', date: 'July 2026', seats: '40 seats', status: 'Open' },
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

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    program: '',
    education: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        program: formData.program,
        education: formData.education,
      };

      // Send to Admin
      await emailjs.send(
        'service_7b7bf2b',
        'template_zxw602a',
        templateParams,
        { publicKey: 'X8vIIQSyMtWBrTNOk' }
      );

      // Send to Customer
      await emailjs.send(
        'service_7b7bf2b',
        'template_o3oktlr',
        templateParams,
        { publicKey: 'X8vIIQSyMtWBrTNOk' }
      );

      setSubmitStatus({ 
        type: 'success', 
        message: 'Application submitted successfully! Our admissions counsellor will contact you soon.' 
      });
      setFormData({ fullName: '', phone: '', email: '', program: '', education: '' });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const errorMsg = error?.text || error?.message || String(error);
      setSubmitStatus({ 
        type: 'error', 
        message: `Error submitting application: ${errorMsg}` 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={s.page}>

      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80"
            alt="Commercial airplane taking off into the sky"
            className={s.heroBgImg}
          />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <span className={s.heroEyebrow}>ADMISSIONS · AY 2025–26</span>
          <h1 className={s.heroH1}>Your Flight Plan<br /><em>Starts Here.</em></h1>
          <p className={s.heroPara}>
            Join India's elite aviation academy. Seats are limited — secure yours before the runway closes. Applications take under 10 minutes.
          </p>
          <div className={s.heroActions}>
            <a href="#apply" className={s.btnPrimaryApply}>Apply for Intake</a>
            <a href="#prospectus" className={s.btnSecondaryApply}>Download Brochure</a>
          </div>
        </div>

        {/* HERO STATS BAR REPLACING INTAKE STRIP */}
        <div className={s.heroStats}>
          {INTAKES.map((intake, i) => (
            <div className={s.heroStat} key={i}>
              <span className={s.heroStatNum}>{intake.date}</span>
              <span className={s.heroStatLabel}>{intake.program} — {intake.seats}</span>
              <span className={s.heroStatSub}>
                <span className={`${s.statusDot} ${intake.status === 'Open' ? s.dotOpen : intake.status === 'Closed' ? s.dotClosed : s.dotSoon}`} />
                {intake.status} Intake
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PARTNER SCROLL ═══ */}
      <TrainingPartnersTicker />



      {/* ═══ 3. PROCESS TIMELINE ═══ */}
      <section className={s.processSection}>
        <div className={s.container}>
          <div className={s.eyebrow}>Admissions Process</div>
          <h2 className={s.sectionH2}>
            Your First 7 Days At<br /><em>Aviora Academy.</em>
          </h2>

          <div className={s.timelineContainer}>
            {ONBOARDING_7_DAY.map((step, i) => (
              <div className={s.dayRow} key={i}>
                <div className={s.daySide}>
                  <div className={s.dayCircle}>
                    <span className={s.dayLabel}>Day</span>
                    <span className={s.dayNum}>{step.day}</span>
                  </div>
                  {i < ONBOARDING_7_DAY.length - 1 && <div className={s.dayLine} />}
                </div>
                <div className={s.dayBody}>
                  <h3 className={s.dayTitle}>{step.title}</h3>
                  <p className={s.dayDesc}>{step.desc}</p>

                  <div className={s.dayGrid}>
                    {step.metrics.map((m, j) => (
                      <div className={s.dayBlock} key={j}>
                        <div className={s.dayBlockTitle}>{m.label}</div>
                        <div className={s.dayBlockVal}>{m.value}</div>
                      </div>
                    ))}
                  </div>
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
            Do You Qualify<br /><em>for Aviora?</em>
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
                    <Link href={prog.href} className={s.reqLink}>
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
              Reserve Your<br /><em>Seat Today.</em>
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
                <form onSubmit={handleSubmit}>
                  <div className={s.applyFormFields}>
                    <div className={s.applyFieldGroup}>
                      <label className={s.applyLabel}>Full Name</label>
                      <input className={s.applyInput} type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="As on official ID" required />
                    </div>
                    <div className={s.applyFieldGroup}>
                      <label className={s.applyLabel}>Mobile Number</label>
                      <input className={s.applyInput} type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className={s.applyFieldGroup}>
                      <label className={s.applyLabel}>Email Address</label>
                      <input className={s.applyInput} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
                    </div>
                    <div className={s.applyFieldGroup}>
                      <label className={s.applyLabel}>Program of Interest</label>
                      <select className={s.applySelect} name="program" value={formData.program} onChange={handleInputChange} required>
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
                      <select className={s.applySelect} name="education" value={formData.education} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="appearing">Appearing 10+2</option>
                        <option value="completed">Completed 10+2</option>
                        <option value="graduate">Graduate / Post-graduate</option>
                      </select>
                    </div>
                  </div>
                  
                  {submitStatus.message && (
                    <div style={{ marginTop: '16px', padding: '12px', borderRadius: '4px', fontSize: '14px', background: submitStatus.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: submitStatus.type === 'success' ? '#22c55e' : '#ef4444', border: `1px solid ${submitStatus.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}` }}>
                      {submitStatus.message}
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className={s.applySubmit} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application →'}
                  </button>
                  <p className={s.applyDisclaimer}>
                    By submitting you agree to be contacted by Aviora admissions.
                    We do not share your information with third parties.
                  </p>
                </form>
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
            Admissions<br /><em>FAQ</em>
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
            The Cockpit is<br /><em>Waiting for You.</em>
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
