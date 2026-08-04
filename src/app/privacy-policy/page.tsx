import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aviora Aviation Academy',
  description: 'Official Privacy Policy of Aviora Aviation Academy (Onestop Aviation Pvt Ltd). Comprehensive transparency regarding DGCA & FAA student data protection, admissions records, and 256-bit security standards.',
  alternates: {
    canonical: 'https://avioraaviation.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy — Aviora Aviation Academy',
    description: 'Privacy Policy and Data Protection Framework for Aviora Aviation Academy.',
    url: 'https://avioraaviation.in/privacy-policy',
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
          name: 'Privacy Policy',
          item: 'https://avioraaviation.in/privacy-policy',
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
            <span className={styles.breadcrumbActive}>Privacy Policy</span>
          </nav>

          <div className={styles.badgeRow}>
            <div className={styles.verifiedBadge}>
              <span className={styles.verifiedDot} />
              <span>Official Regulatory Notice</span>
            </div>
            <span className={styles.docVersion}>Doc ID: AVI-POL-2026-V2</span>
          </div>

          <h1 className={styles.heroTitle}>Privacy Policy &amp; Data Protection</h1>
          <p className={styles.heroSubtitle}>
            Aviora Aviation Academy (operated under Onestop Aviation Pvt Ltd) is dedicated to maintaining the highest ethical, legal, and operational standards in securing student, cadet, and applicant personal data across all pilot training, cabin crew, and international flight programs.
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
              <span className={styles.metaLabel}>Statutory Jurisdiction</span>
              <span className={styles.metaValue}>Hyderabad, Telangana, India</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Compliance Scope</span>
              <span className={styles.metaValue}>DGCA India · FAA USA · IT Act 2000</span>
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
              <span>Table of Contents</span>
            </div>
            <ul className={styles.tocList}>
              <li>
                <a href="#intro" className={styles.tocLink}>
                  <span className={styles.tocNum}>01</span>
                  <span>Introduction &amp; Scope</span>
                </a>
              </li>
              <li>
                <a href="#data-collected" className={styles.tocLink}>
                  <span className={styles.tocNum}>02</span>
                  <span>Information We Collect</span>
                </a>
              </li>
              <li>
                <a href="#data-usage" className={styles.tocLink}>
                  <span className={styles.tocNum}>03</span>
                  <span>How We Use Your Data</span>
                </a>
              </li>
              <li>
                <a href="#data-sharing" className={styles.tocLink}>
                  <span className={styles.tocNum}>04</span>
                  <span>Third-Party Disclosures</span>
                </a>
              </li>
              <li>
                <a href="#security" className={styles.tocLink}>
                  <span className={styles.tocNum}>05</span>
                  <span>256-Bit Storage Security</span>
                </a>
              </li>
              <li>
                <a href="#cookies" className={styles.tocLink}>
                  <span className={styles.tocNum}>06</span>
                  <span>Cookies &amp; Analytics</span>
                </a>
              </li>
              <li>
                <a href="#rights" className={styles.tocLink}>
                  <span className={styles.tocNum}>07</span>
                  <span>Your Rights &amp; Consent</span>
                </a>
              </li>
              <li>
                <a href="#grievance" className={styles.tocLink}>
                  <span className={styles.tocNum}>08</span>
                  <span>Grievance &amp; Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.quickSummaryCard}>
            <div className={styles.summaryTitle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Our Security Pledge</span>
            </div>
            <ul className={styles.summaryList}>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Zero selling or renting of cadet profiles to advertisers.</span>
              </li>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Encrypted medical assessment and SEVIS visa transmissions.</span>
              </li>
              <li>
                <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Compliant with Indian Digital Personal Data Protection guidelines.</span>
              </li>
            </ul>
            <Link href="/terms-and-conditions" className={styles.switchDocBtn}>
              View Terms &amp; Conditions &rarr;
            </Link>
          </div>
        </aside>

        {/* ── CONTENT AREA ── */}
        <div className={styles.contentArea}>
          {/* SECTION 1 */}
          <article id="intro" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>01</div>
              <h2 className={styles.cardTitle}>Introduction &amp; Regulatory Scope</h2>
            </div>
            <p className={styles.paragraph}>
              Aviora Aviation Academy, operated under Onestop Aviation Pvt Ltd (&quot;Aviora&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), is committed to safeguarding the privacy and confidentiality of personal, educational, and aviation training information entrusted to us by students, parents, alumni, and prospective applicants.
            </p>
            <p className={styles.paragraph}>
              This Privacy Policy explains how we collect, store, process, transfer, and safeguard your data when you visit <Link href="/" className={styles.inlineLink}>avioraaviation.in</Link>, interact with our flight counselors, submit an application through our <Link href="/admissions" className={styles.inlineLink}>Admissions Desk</Link>, or enroll in our <Link href="/programs" className={styles.inlineLink}>Aviation Training Programs</Link>.
            </p>
            <div className={styles.noticeBox}>
              <div className={styles.noticeTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Aviation Industry Compliance</span>
              </div>
              <p className={styles.noticeText}>
                Because aviation training is subject to strict statutory standards overseen by the Directorate General of Civil Aviation (DGCA India) and the Federal Aviation Administration (FAA USA), certain categories of identification, medical records, and logbook hours must be processed and preserved under legal regulatory mandates.
              </p>
            </div>
          </article>

          {/* SECTION 2 */}
          <article id="data-collected" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>02</div>
              <h2 className={styles.cardTitle}>Information We Collect</h2>
            </div>
            <p className={styles.paragraph}>
              To evaluate applicant aptitude, deliver certified ground school and simulator instruction, and coordinate international flight hours, we collect specific data categories:
            </p>

            <div className={styles.tableContainer}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Specific Details Collected</th>
                    <th>Primary Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Identity Records</strong></td>
                    <td>Full legal name, DOB, gender, nationality, passport details, Aadhaar / PAN card.</td>
                    <td>Student verification, DGCA computer number application, and TSA flight security clearances.</td>
                  </tr>
                  <tr>
                    <td><strong>Contact &amp; Emergency</strong></td>
                    <td>Email, primary phone, WhatsApp, permanent address, parent/guardian contact.</td>
                    <td>Batch scheduling, flight training updates, emergency flight safety notifications.</td>
                  </tr>
                  <tr>
                    <td><strong>Academic Records</strong></td>
                    <td>10th &amp; 10+2 marks cards (Physics &amp; Maths verification), college degrees.</td>
                    <td>Eligibility verification for <Link href="/programs/pilot-training" className={styles.inlineLink}>CPL Ground School</Link> &amp; <Link href="/programs/cabin-crew" className={styles.inlineLink}>Cabin Crew Diploma</Link>.</td>
                  </tr>
                  <tr>
                    <td><strong>Aviation Medical Data</strong></td>
                    <td>DGCA Class 1 / Class 2 medical certificates, FAA Medical reports, audiometry &amp; vision.</td>
                    <td>Ensuring medical fitness as required by DGCA and FAA flight examiners before solo flights.</td>
                  </tr>
                  <tr>
                    <td><strong>Flight Training Logs</strong></td>
                    <td>Dual/solo flight hours, simulator hours on our <Link href="/facilities" className={styles.inlineLink}>FBS Level D simulator</Link>, exam scores.</td>
                    <td>DGCA logbook certification, Type Rating endorsement, and airline placement dossiers.</td>
                  </tr>
                  <tr>
                    <td><strong>Financial Records</strong></td>
                    <td>Tuition invoices, bank transfer receipts, installment payment transaction IDs.</td>
                    <td>Accounting, GST compliance, and student fee ledger management. (Card details are never stored on our servers).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* SECTION 3 */}
          <article id="data-usage" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>03</div>
              <h2 className={styles.cardTitle}>How We Use Your Data</h2>
            </div>
            <p className={styles.paragraph}>
              Aviora Aviation Academy processes collected data solely for legitimate educational, regulatory, and student support operations:
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Admissions &amp; Batch Allocation:</strong> Reviewing student eligibility, issuing official admission offer letters, and assigning classroom batches.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>International Flight School Transfer:</strong> Processing SEVIS I-20 documentation and US M-1 visa paperwork for students pursuing the <Link href="/programs/global-training" className={styles.inlineLink}>Global Flight Training Pathway (USA)</Link>.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Flight Simulator Operations:</strong> Allocating individual and multi-crew simulator slots on our Boeing/Airbus certified simulators in our <Link href="/facilities" className={styles.inlineLink}>training facilities</Link>.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <div>
                  <strong>Airline Placement Preparation:</strong> Formatting cadet CVs, flight logs, and simulator performance evaluations with our <Link href="/mentors" className={styles.inlineLink}>Airline Pilot Mentors</Link> for airline interview boards.
                </div>
              </li>
            </ul>
          </article>

          {/* SECTION 4 */}
          <article id="data-sharing" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>04</div>
              <h2 className={styles.cardTitle}>Third-Party Disclosures &amp; Sharing</h2>
            </div>
            <p className={styles.paragraph}>
              <strong>Aviora strictly maintains a zero-monetization policy.</strong> We do not sell, rent, lease, or trade cadet data to any external telemarketers, commercial aggregators, or third-party advertisers. Disclosures are strictly limited to the following essential operational stakeholders:
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <strong>Civil Aviation Authorities:</strong> Direct submission of medical files, exam registrations, and logbook certifications to DGCA (India), FAA (USA), or ICAO member state authorities as required by aviation law.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <strong>Partner Flight Academies (USA):</strong> Transmission of cadet academic dossiers to FAA Part 141 approved partner flight academies for flight line onboarding.
                </div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <strong>Airline Recruitment Boards:</strong> Submission of candidate credentials to airline recruitment teams (e.g. IndiGo, Air India, Akasa Air) solely upon candidate request and written consent.
                </div>
              </li>
            </ul>
          </article>

          {/* SECTION 5 */}
          <article id="security" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>05</div>
              <h2 className={styles.cardTitle}>256-Bit Storage Security &amp; Retention</h2>
            </div>
            <p className={styles.paragraph}>
              All student documents, application transcripts, and identity proofs are stored in encrypted cloud repositories featuring 256-bit SSL encryption in transit and at rest. Physical paper files are safeguarded in access-controlled administrative archives at our Hyderabad headquarters.
            </p>
            <div className={styles.warningBox}>
              <div className={styles.warningTitle}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>7-Year Aviation Retention Mandate</span>
              </div>
              <p className={styles.warningText}>
                In accordance with Directorate General of Civil Aviation rules, flight instruction hours, ground school attendance records, and simulator logs are legally preserved for a mandatory minimum period of 7 years following course completion.
              </p>
            </div>
          </article>

          {/* SECTION 6 */}
          <article id="cookies" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>06</div>
              <h2 className={styles.cardTitle}>Cookies &amp; Website Analytics</h2>
            </div>
            <p className={styles.paragraph}>
              Our website uses technical cookies and Google Analytics 4 (GA4) measurement tags to analyze overall traffic trends, track device responsiveness, and refine our <Link href="/blog" className={styles.inlineLink}>Aviation Career Guides</Link> and <Link href="/news" className={styles.inlineLink}>Aviation News</Link> content.
            </p>
            <p className={styles.paragraph}>
              You may manage or disable cookies via your browser settings at any time without forfeiting access to course information or program applications.
            </p>
          </article>

          {/* SECTION 7 */}
          <article id="rights" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>07</div>
              <h2 className={styles.cardTitle}>Cadet Rights &amp; Consent Management</h2>
            </div>
            <p className={styles.paragraph}>
              Every cadet and website visitor possesses statutory rights under the Information Technology Act and applicable Indian data protection principles:
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div><strong>Right to Access:</strong> You may request a verified digital copy of all personal records and flight logs held in your student file.</div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div><strong>Right to Rectification:</strong> You may update or correct passport details, emergency contacts, or academic transcripts at any time.</div>
              </li>
              <li className={styles.featureItem}>
                <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div><strong>Marketing Opt-Out:</strong> You can unsubscribe from non-essential promotional communications with a single click.</div>
              </li>
            </ul>
          </article>

          {/* SECTION 8 */}
          <article id="grievance" className={styles.docCard}>
            <div className={styles.cardSectionHeader}>
              <div className={styles.sectionBadgeNum}>08</div>
              <h2 className={styles.cardTitle}>Grievance Officer &amp; Legal Desk</h2>
            </div>
            <p className={styles.paragraph}>
              If you have inquiries, data update requests, or regulatory privacy concerns, you may contact our designated compliance officer or admissions desk directly:
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <span className={styles.contactRole}>Data Protection &amp; Legal Officer</span>
                <div className={styles.contactName}>Onestop Aviation Pvt Ltd</div>
                <div className={styles.contactDetail}>
                  <span>📍</span>
                  <span>Aviora Aviation Academy, Hyderabad, Telangana, India</span>
                </div>
                <div className={styles.contactDetail}>
                  <span>✉️</span>
                  <a href="mailto:info@avioraaviation.in">info@avioraaviation.in</a>
                </div>
                <div className={styles.contactDetail}>
                  <span>📞</span>
                  <a href="tel:+919100037805">+91 91000 37805</a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.contactRole}>Admissions &amp; Cadet Support</span>
                <div className={styles.contactName}>Student Affairs Desk</div>
                <div className={styles.contactDetail}>
                  <span>🕒</span>
                  <span>Monday – Saturday: 09:30 AM – 06:30 PM IST</span>
                </div>
                <div className={styles.contactDetail}>
                  <span>🌐</span>
                  <Link href="/admissions">Admissions Intake Portal</Link>
                </div>
                <div className={styles.contactDetail}>
                  <span>💬</span>
                  <Link href="/contact">Direct Contact Form</Link>
                </div>
              </div>
            </div>

            {/* BOTTOM NAV */}
            <div className={styles.bottomNav}>
              <Link href="/" className={styles.backHomeLink}>
                &larr; Return to Home
              </Link>
              <div className={styles.actionLinks}>
                <Link href="/terms-and-conditions" className={`${styles.actionBtn} ${styles.actionBtnOutline}`}>
                  Read Terms &amp; Conditions
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
