import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aviora Aviation Academy',
  description: 'Privacy Policy of Aviora Aviation Academy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Legal</div>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>Last updated: May 2026</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.para}>
              Aviora Aviation Academy (&quot;Aviora&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            <p className={styles.para}>
              By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
            <p className={styles.para}>We collect information you provide directly to us, including:</p>
            <ul className={styles.list}>
              <li><strong>Personal Identification:</strong> Full name, date of birth, nationality, passport details.</li>
              <li><strong>Contact Information:</strong> Email address, mobile number, residential address.</li>
              <li><strong>Academic Information:</strong> 10+2 marksheets, educational qualifications, institution details.</li>
              <li><strong>Medical Information:</strong> DGCA medical fitness status (where applicable for pilot programs).</li>
              <li><strong>Payment Information:</strong> Fee payment details processed via secure third-party gateways.</li>
              <li><strong>Communication Records:</strong> Messages, enquiries, and correspondence you send us.</li>
            </ul>
            <p className={styles.para}>We also automatically collect certain information when you use our website:</p>
            <ul className={styles.list}>
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent, and referral sources</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
            <p className={styles.para}>We use the information we collect to:</p>
            <ul className={styles.list}>
              <li>Process and evaluate your admission application</li>
              <li>Communicate about your enrollment, training progress, and placement</li>
              <li>Coordinate visa, medical, and travel documentation for international training</li>
              <li>Send you important notices, updates, and training schedules</li>
              <li>Process fee payments and issue receipts</li>
              <li>Comply with legal and regulatory obligations (DGCA, FAA, etc.)</li>
              <li>Improve our website and services based on usage patterns</li>
              <li>Respond to enquiries and provide customer support</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Sharing of Information</h2>
            <p className={styles.para}>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul className={styles.list}>
              <li><strong>Partner Flight Schools & ATOs:</strong> Required to process your enrollment at training facilities in India, the USA, or other international locations.</li>
              <li><strong>Visa & Travel Agencies:</strong> To assist with M1 visa applications and international travel coordination.</li>
              <li><strong>Medical Examiners (AMEs):</strong> For DGCA or FAA medical referrals.</li>
              <li><strong>Airline Partners:</strong> With your consent, for placement assistance and walk-in programs.</li>
              <li><strong>Regulatory Authorities:</strong> DGCA, FAA, or other bodies as required by law.</li>
              <li><strong>Payment Processors:</strong> Secure third-party payment gateways for fee transactions.</li>
            </ul>
            <p className={styles.para}>All third-party partners are contractually bound to maintain confidentiality and may only use your data for the specific purpose for which it was shared.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Retention</h2>
            <p className={styles.para}>
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, including for the duration of your training program and for a period thereafter as required by law or regulatory compliance. Academic and medical records may be retained for up to 7 years post-completion.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Security</h2>
            <p className={styles.para}>
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className={styles.list}>
              <li>SSL/TLS encryption for all data transmitted via our website</li>
              <li>Secure access controls and password-protected systems</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Restricted staff access on a need-to-know basis</li>
            </ul>
            <p className={styles.para}>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Cookies</h2>
            <p className={styles.para}>
              Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device. We use:
            </p>
            <ul className={styles.list}>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality.</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our site (e.g., Google Analytics).</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences.</li>
            </ul>
            <p className={styles.para}>You can control cookies through your browser settings. Disabling cookies may affect certain features of the website.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Rights</h2>
            <p className={styles.para}>You have the right to:</p>
            <ul className={styles.list}>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time.</li>
              <li><strong>Data Portability:</strong> Request transfer of your data in a structured format.</li>
            </ul>
            <p className={styles.para}>To exercise any of these rights, please contact us at <a href="mailto:admissions@avioraacademy.com,fly@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com / fly@avioraacademy.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Children&apos;s Privacy</h2>
            <p className={styles.para}>
              Our services are not directed to individuals under the age of 17. We do not knowingly collect personal information from minors. If we become aware that we have inadvertently collected data from a minor, we will promptly delete it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Changes to This Policy</h2>
            <p className={styles.para}>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the new policy on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy regularly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p className={styles.para}>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            <div className={styles.contactBlock}>
              <p><strong>Aviora Aviation Academy</strong></p>
              <p>3rd Floor, Skyline Plaza, Banjara Hills</p>
              <p>Hyderabad, Telangana — 500 034, India</p>
              <p>Email: <a href="mailto:admissions@avioraacademy.com,fly@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com / fly@avioraacademy.com</a></p>
              <p>Phone: <a href="tel:+914023456789" className={styles.emailLink}>+91 40 2345 6789</a></p>
            </div>
          </section>

          <div className={styles.backBar}>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
            <Link href="/terms-and-conditions" className={styles.backLink}>Terms &amp; Conditions →</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
