import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Aviora Aviation Academy',
  description: 'Official Terms and Conditions governing cadet enrollment, DGCA CPL ground school, USA flight training pathways, simulator access, fee schedules, and student code of conduct at Aviora Aviation Academy.',
  alternates: {
    canonical: 'https://avioraaviation.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions — Aviora Aviation Academy',
    description: 'Terms and Conditions governing enrollment, flight training, and code of conduct at Aviora Aviation Academy.',
    url: 'https://avioraaviation.in/terms-and-conditions',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://avioraaviation.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Terms & Conditions',
          item: 'https://avioraaviation.in/terms-and-conditions',
        },
      ],
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgOverlay} />
        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Legal</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbActive}>Terms &amp; Conditions</span>
          </nav>

          <div className={styles.badgeRow}>
            <div className={styles.verifiedBadge}>
              <span className={styles.verifiedDot} />
              <span>Official Institutional Terms</span>
            </div>
            <span className={styles.docVersion}>Doc ID: AVI-TERMS-2026-V2</span>
          </div>

          <h1 className={styles.heroTitle}>Terms &amp; Conditions of Enrollment</h1>
          <p className={styles.heroSubtitle}>
            These comprehensive terms govern all cadet admissions, ground school curriculum, FAA flight training partnerships in the USA, simulator operations, and professional flight conduct at Aviora Aviation Academy.
          </p>

          <div className={styles.heroMetaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Effective Date</span>
              <span className={styles.metaValue}>January 1, 2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Last Revised</span>
              <span className={styles.metaValue}>August 2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Governing Entity</span>
              <span className={styles.metaValue}>Onestop Aviation Pvt Ltd</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Legal Jurisdiction</span>
              <span className={styles.metaValue}>Courts of Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN 2-COLUMN LAYOUT ── */}
      <div className={styles.mainContainer}>
        {/* ── STICKY SIDEBAR ── */}
        <aside className={styles.sidebar}>
          <div className={styles.tocCard}>
            <div className={styles.tocHeader}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span>Navigation Index</span>
            </div>
            <ul className={styles.tocList}>
              <li>
                <a href="#acceptance" className={styles.tocLink}>
                  <span className={styles.tocNum}>01</span>
                  <span>Acceptance of Agreement</span>
                </a>
              </li>
              <li>
                <a href="#programs-scope" className={styles.tocLink}>
                  <span className={styles.tocNum}>02</span>
                  <span>Scope of Training Programs</span>
                </a>
              </li>
              <li>
                <a href="#eligibility" className={styles.tocLink}>
                  <span className={styles.tocNum}>03</span>
                  <span>Statutory Eligibility &amp; Medical</span>
                </a>
              </li>
              <li>
                <a href="#fee-refunds" className={styles.tocLink}>
                  <span className={styles.tocNum}>04</span>
                  <span>Fees, Milestones &amp; Refunds</span>
                </a>
              </li>
              <li>
                <a href="#safety-conduct" className={styles.tocLink}>
                  <span className={styles.tocNum}>05</span>
                  <span>Aviation Discipline &amp; Safety</span>
                </a>
              </li>
              <li>
                <a href="#simulators" className={styles.tocLink}>
                  <span className={styles.tocNum}>06</span>
                  <span>Simulator Training Policy</span>
                </a>
              </li>
              <li>
                <a href="#mentorship" className={styles.tocLink}>
                  <span className={styles.tocNum}>07</span>
                  <span>Mentorship &amp; Placement</span>
                </a>
              </li>
              <li>
                <a href="#liability" className={styles.tocLink}>
                  <span className={styles.tocNum}>08</span>
                  <span>Jurisdiction &amp; Liability</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.quickSummaryCard}>
            <div className={styles.summaryTitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Cadet Principles</span>
            </div>
            <ul className={styles.summaryList}>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>DGCA &amp; FAA Part 141 syllabus alignment.</span>
              </li>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Zero hidden fees; transparent installment milestones.</span>
              </li>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Direct mentorship from active airline commanders.</span>
              </li>
            </ul>
            <Link href="/privacy-policy" className={styles.switchDocBtn}>
              View Privacy Policy &rarr;
            </Link>
          </div>
        </aside>

        {/* ── CONTENT AREA ── */}
        <div className={styles.contentArea}>
          {/* SECTION 1 */}
          <article id="acceptance" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>01</div>
              <h2 className={styles.cardTitle}>Acceptance of Binding Agreement</h2>
            </div>
            <p className={styles.paragraph}>
              These Terms and Conditions constitute a legally binding agreement between you (&quot;Student&quot;, &quot;Cadet&quot;, &quot;Candidate&quot;, or &quot;Guardian&quot;) and Aviora Aviation Academy, operated by Onestop Aviation Pvt Ltd (&quot;Aviora&quot;, &quot;the Academy&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p className={styles.paragraph}>
              By browsing <Link href="/" className={styles.inlineLink}>avioraaviation.in</Link>, scheduling a flight counseling session, submitting an application through our <Link href="/admissions" className={styles.inlineLink}>Admissions Desk</Link>, or registering for our <Link href="/programs" className={styles.inlineLink}>Training Programs</Link>, you acknowledge that you have read, understood, and agreed to adhere strictly to all terms, policies, safety standards, and regulations herein.
            </p>
          </article>

          {/* SECTION 2 */}
          <article id="programs-scope" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>02</div>
              <h2 className={styles.cardTitle}>Scope of Aviation Training Programs</h2>
            </div>
            <p className={styles.paragraph}>
              Aviora Aviation Academy provides comprehensive, structured aviation curricula across specialized training pathways designed to transition students into airline-ready cockpit and cabin professionals:
            </p>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Training Pathway</th>
                    <th>Core Curriculum Scope</th>
                    <th>Certification / Issuing Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong><Link href="/programs/pilot-training" className={styles.inlineLink}>Commercial Pilot Licence (CPL)</Link></strong></td>
                    <td>DGCA Ground School (Nav, Met, Regs, Tech Gen/Spec) + RTR(A) wireless licensing prep.</td>
                    <td>Directorate General of Civil Aviation (DGCA India) &amp; WPC India</td>
                  </tr>
                  <tr>
                    <td><strong><Link href="/programs/global-training" className={styles.inlineLink}>Global Flight Training (USA)</Link></strong></td>
                    <td>200+ Flight Hours (FAA PPL, Instrument Rating, Commercial Multi-Engine) with DGCA conversion.</td>
                    <td>Federal Aviation Administration (FAA USA Part 141) &amp; DGCA Conversion</td>
                  </tr>
                  <tr>
                    <td><strong><Link href="/programs/type-rating" className={styles.inlineLink}>Type Rating Certification</Link></strong></td>
                    <td>Airbus A320 / Boeing B737 Level D Full Flight Simulator (FFS) multi-crew jet transition.</td>
                    <td>DGCA / EASA Approved Training Organization (ATO)</td>
                  </tr>
                  <tr>
                    <td><strong><Link href="/programs/cabin-crew" className={styles.inlineLink}>Cabin Crew Diploma</Link></strong></td>
                    <td>Aviation hospitality, mock cabin emergency drills (SEP), grooming, and airline interview panels.</td>
                    <td>Aviora Academy Professional Diploma &amp; Airline Recruitment Prep</td>
                  </tr>
                  <tr>
                    <td><strong><Link href="/facilities" className={styles.inlineLink}>Simulator Training</Link></strong></td>
                    <td>Pre-flight instrument procedures, crosswind landings, and engine failure drills on our FBS simulator.</td>
                    <td>Aviora Flight Operations &amp; DGCA Recognized Sim Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 3 */}
          <article id="eligibility" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>03</div>
              <h2 className={styles.cardTitle}>Statutory Eligibility &amp; Medical Prerequisites</h2>
            </div>
            <p className={styles.paragraph}>
              Enrollment in any aviation flight program is contingent upon fulfilling strict regulatory eligibility mandates:
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Age Requirements:</strong> Minimum 17 years to begin DGCA ground school; minimum 18 years to hold an active Commercial Pilot Licence or Cabin Crew flight line appointment.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Academic Qualifications:</strong> 10+2 with Physics and Mathematics (or NIOS equivalent) for pilot candidates. Cabin Crew candidates must have completed 10+2 in any stream.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Medical Fitness:</strong> Pilot cadets must clear DGCA Class 2 medicals followed by DGCA Class 1 medical examination at an authorized IAF Central Medical Establishment (CME) or Civil AME centre.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Language Standard:</strong> Fluent verbal and written English communication matching ICAO Level 4 (Operational) English language proficiency.
                </div>
              </li>
            </ul>
          </article>

          {/* SECTION 4 */}
          <article id="fee-refunds" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>04</div>
              <h2 className={styles.cardTitle}>Fees, Milestone Schedules &amp; Refund Policy</h2>
            </div>
            <h3 className={styles.cardSubTitle}>4.1 Tuition Schedules</h3>
            <p className={styles.paragraph}>
              All course tuition fees, simulator session allocations, study material kits, and international flight training packages are formally itemized in the official <strong>Student Offer Letter</strong> issued upon admission. Fees must be remitted strictly according to agreed installment milestones.
            </p>

            <h3 className={styles.cardSubTitle}>4.2 Refund Regulations</h3>
            <div className={styles.warningBox}>
              <div className={styles.warningTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>Clear Refund Terms</span>
              </div>
              <p className={styles.warningText}>
                <strong>Seat Confirmation Deposit:</strong> Non-refundable as it reserves batch seats, personalized courseware, and simulator slot allocations.<br />
                <strong>Active Batch Tuition:</strong> Tuition fees paid for an active batch or training module are non-refundable once classes or simulator training have officially commenced.<br />
                <strong>Permanent Medical Ineligibility:</strong> If a cadet is declared permanently medically unfit by an official DGCA / IAF Medical Board post-enrollment, unutilized tuition fees may be refunded pro-rata minus administrative fees.<br />
                <strong>Statutory &amp; Third-Party Fees:</strong> Fees paid to external government agencies (DGCA exam fees, FAA testing, TSA clearances, US SEVIS visa fees) are non-refundable by Aviora.
              </p>
            </div>
          </article>

          {/* SECTION 5 */}
          <article id="safety-conduct" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>05</div>
              <h2 className={styles.cardTitle}>Aviation Discipline, Conduct &amp; Air Safety</h2>
            </div>
            <p className={styles.paragraph}>
              Commercial aviation requires uncompromising integrity, personal discipline, and rigorous adherence to standard operating procedures (SOPs). Every cadet enrolled at Aviora agrees to:
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div><strong>Attendance Standard:</strong> Maintain a minimum 85% attendance across all DGCA ground theory lectures and simulator briefings.</div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div><strong>Aviation Grooming &amp; Uniforms:</strong> Wear the prescribed academy uniform and uphold airline-standard grooming within all academy campuses, simulator bays, and airfield hangars.</div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div><strong>Zero Tolerance Policy:</strong> Any substance abuse, harassment, examination fraud, or reckless disregard for flight safety will result in immediate expulsion without refund.</div>
              </li>
            </ul>
          </article>

          {/* SECTION 6 */}
          <article id="simulators" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>06</div>
              <h2 className={styles.cardTitle}>Simulator Training &amp; Facility Access Policy</h2>
            </div>
            <p className={styles.paragraph}>
              Access to our Fixed Base Simulators (FBS) and glass-cockpit training suites in our <Link href="/facilities" className={styles.inlineLink}>Hyderabad training center</Link> is scheduled in coordination with our chief flight instructors:
            </p>
            <p className={styles.paragraph}>
              Cadets must arrive at least 15 minutes prior to their simulator slot for pre-flight briefing. Cancellations or reschedule requests must be submitted at least 24 hours in advance to prevent forfeiture of allotted flight simulator hours.
            </p>
          </article>

          {/* SECTION 7 */}
          <article id="mentorship" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>07</div>
              <h2 className={styles.cardTitle}>Career Mentorship &amp; Airline Placement Disclaimer</h2>
            </div>
            <p className={styles.paragraph}>
              Aviora provides world-class guidance, airline interview preparation, psychometric test rehearsal, and direct mentorship from our <Link href="/mentors" className={styles.inlineLink}>Airline Pilot Mentors</Link> (current and former Boeing/Airbus Captains).
            </p>
            <div className={styles.noticeBox}>
              <div className={styles.noticeTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Statutory Placement Disclaimer</span>
              </div>
              <p className={styles.noticeText}>
                While Aviora boasts a proven track record of cadet success across leading airlines, aviation regulations prohibit guaranteeing airline job offers. Final airline selection depends solely on the candidate&apos;s personal performance in DGCA exams, airline entrance assessments, flight simulator evaluations, and panel interviews.
              </p>
            </div>
          </article>

          {/* SECTION 8 */}
          <article id="liability" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>08</div>
              <h2 className={styles.cardTitle}>Governing Law &amp; Hyderabad Jurisdiction</h2>
            </div>
            <p className={styles.paragraph}>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Republic of India. Any legal dispute, controversy, or claim arising out of or relating to enrollment, training contracts, or website usage shall be subject to the exclusive jurisdiction of the competent courts of <strong>Hyderabad, Telangana, India</strong>.
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <span className={styles.contactRole}>Admissions Desk &amp; Inquiries</span>
                <div className={styles.contactName}>Aviora Aviation Academy</div>
                <div className={styles.contactDetail}>
                  <span>📍</span>
                  <span>Hyderabad, Telangana, India</span>
                </div>
                <div className={styles.contactDetail}>
                  <span>✉️</span>
                  <a href="mailto:admissions@avioraaviation.in">admissions@avioraaviation.in</a>
                </div>
                <div className={styles.contactDetail}>
                  <span>📞</span>
                  <a href="tel:+919100037805">+91 91000 37805</a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.contactRole}>Program Counseling</span>
                <div className={styles.contactName}>Flight Training Guidance</div>
                <div className={styles.contactDetail}>
                  <span>🕒</span>
                  <span>Mon – Sat: 09:30 AM – 06:30 PM IST</span>
                </div>
                <div className={styles.contactDetail}>
                  <span>🌐</span>
                  <Link href="/admissions">Admissions Portal</Link>
                </div>
                <div className={styles.contactDetail}>
                  <span>💬</span>
                  <Link href="/contact">Schedule Academy Visit</Link>
                </div>
              </div>
            </div>

            {/* BOTTOM NAV */}
            <div className={styles.bottomNav}>
              <Link href="/" className={styles.backHomeLink}>
                &larr; Return to Home
              </Link>
              <div className={styles.actionLinks}>
                <Link href="/privacy-policy" className={`${styles.actionBtn} ${styles.actionBtnOutline}`}>
                  Read Privacy Policy
                </Link>
                <Link href="/admissions" className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}>
                  Apply for Admissions
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
