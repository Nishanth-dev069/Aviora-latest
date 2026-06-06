import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../privacy-policy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Aviora Aviation Academy',
  description: 'Terms and Conditions governing use of Aviora Aviation Academy services, programs, and website.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Legal</div>
          <h1 className={styles.heroTitle}>Terms &amp; Conditions</h1>
          <p className={styles.heroSub}>Last updated: May 2025</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.inner}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p className={styles.para}>
              By accessing our website, submitting an application, or enrolling in any program offered by Aviora Aviation Academy (&quot;Aviora&quot;, &quot;the Academy&quot;, &quot;we&quot;, &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </p>
            <p className={styles.para}>
              These Terms govern your use of our website at avioraacademy.com and all services, programs, and training offered by Aviora Aviation Academy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Programs & Services</h2>
            <p className={styles.para}>Aviora Aviation Academy offers the following training programs:</p>
            <ul className={styles.list}>
              <li><strong>DGCA Ground School</strong> — Theory preparation for DGCA CPL examinations.</li>
              <li><strong>Integrated CPL Program</strong> — Full pilot training pathway including ground school, simulator, and flight training in India and the USA.</li>
              <li><strong>Global Training Program (USA)</strong> — International flight training at FAA Part 141 certified schools in Sacramento, California.</li>
              <li><strong>Cabin Crew Program</strong> — Airline cabin crew grooming, safety training, and placement preparation.</li>
              <li><strong>Type Rating</strong> — DGCA-recognised type rating programs for A320, B737, and ATR aircraft.</li>
              <li><strong>Foreign Licence Conversion</strong> — Assistance with converting FAA or EASA licences to DGCA CPL.</li>
            </ul>
            <p className={styles.para}>
              Program content, fees, duration, and locations are subject to change. Aviora reserves the right to modify or discontinue any program with reasonable notice to enrolled students.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Eligibility & Admissions</h2>
            <p className={styles.para}>Admission to any Aviora program is subject to meeting the eligibility criteria specified for each program. General requirements include:</p>
            <ul className={styles.list}>
              <li>Minimum age of 17 years (for first solo flight) or 18 years as applicable.</li>
              <li>Completion of 10+2 with Physics and Mathematics (for pilot programs) or 10+2 in any stream (for cabin crew).</li>
              <li>Satisfactory medical fitness as per DGCA or FAA standards (for pilot programs).</li>
              <li>Valid Indian passport for international training programs.</li>
            </ul>
            <p className={styles.para}>
              Aviora reserves the right to refuse admission to any applicant who does not meet the eligibility criteria or whose profile is deemed unsuitable. Aviora&apos;s decision on admissions is final and binding.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Fees, Payments & Refunds</h2>
            <h3 className={styles.subTitle}>4.1 Fee Payment</h3>
            <p className={styles.para}>
              Program fees must be paid as per the schedule outlined in your Offer Letter. An initial seat deposit is required to confirm enrollment. Failure to pay fees on time may result in deferment or cancellation of enrollment.
            </p>
            <h3 className={styles.subTitle}>4.2 Refund Policy</h3>
            <p className={styles.para}>Refunds are governed by the following conditions:</p>
            <ul className={styles.list}>
              <li><strong>Cancellation before program commencement:</strong> Seat deposit is non-refundable. Additional fees paid may be refunded at Aviora&apos;s discretion after deducting administrative costs.</li>
              <li><strong>Cancellation after program commencement:</strong> No refund of fees paid for the current phase of training.</li>
              <li><strong>Medical disqualification:</strong> If a student is medically disqualified post-enrollment (confirmed by an approved AME), fees may be partially refunded after deducting incurred costs, subject to review.</li>
              <li><strong>Visa rejection:</strong> In cases of M1 visa rejection for reasons outside the student&apos;s control, Aviora will work with the student to find alternative solutions. Fees paid for the domestic phase are non-refundable.</li>
            </ul>
            <p className={styles.para}>All refund requests must be submitted in writing to <a href="mailto:admissions@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com</a> within 14 days of the event giving rise to the claim.</p>

            <h3 className={styles.subTitle}>4.3 Third-Party Costs</h3>
            <p className={styles.para}>
              Certain costs — including but not limited to DGCA examination fees, medical examination fees, visa fees, flight training charges at partner ATOs, and accommodation costs — are payable directly to third parties and are outside Aviora&apos;s refund policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Student Responsibilities</h2>
            <p className={styles.para}>As a student of Aviora Aviation Academy, you are responsible for:</p>
            <ul className={styles.list}>
              <li>Attending all scheduled ground school sessions, simulator sessions, and flight briefings.</li>
              <li>Maintaining a minimum attendance of 80% across all training components.</li>
              <li>Adhering to all safety protocols, aviation regulations (DGCA, FAA), and academy rules.</li>
              <li>Maintaining respectful and professional conduct toward instructors, staff, and fellow students.</li>
              <li>Providing accurate and truthful information in all applications and documentation.</li>
              <li>Obtaining and maintaining valid DGCA medical certificates (for pilot programs) throughout training.</li>
              <li>Ensuring your passport and visa documents remain valid for the full duration of international training.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Placement Assistance</h2>
            <p className={styles.para}>
              Aviora provides placement assistance to eligible graduates through our airline partner network. However, Aviora does not guarantee employment or placement with any specific airline. Placement outcomes depend on individual performance, airline requirements, and market conditions at the time of graduation.
            </p>
            <p className={styles.para}>
              Walk-in programs, airline connections, and referrals provided by Aviora are supplementary services and do not constitute an employment guarantee. Final hiring decisions rest entirely with the recruiting airline.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
            <p className={styles.para}>
              All content on the Aviora website — including text, graphics, logos, icons, images, course materials, and software — is the property of Aviora Aviation Academy and is protected under applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent from Aviora.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
            <p className={styles.para}>
              To the maximum extent permitted by law, Aviora Aviation Academy shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of our services, including but not limited to:
            </p>
            <ul className={styles.list}>
              <li>Loss of employment or expected income</li>
              <li>Visa rejection or delays by immigration authorities</li>
              <li>Medical disqualification decisions by approved AMEs</li>
              <li>DGCA or FAA examination failures</li>
              <li>Force majeure events including natural disasters, pandemics, or airspace restrictions</li>
            </ul>
            <p className={styles.para}>
              Aviora&apos;s total liability shall not exceed the fees paid by you for the specific program in question.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Code of Conduct</h2>
            <p className={styles.para}>Aviora maintains a strict code of conduct. The Academy reserves the right to terminate enrollment without refund in cases of:</p>
            <ul className={styles.list}>
              <li>Provision of false or misleading information in applications</li>
              <li>Ragging, harassment, or bullying of any kind</li>
              <li>Substance abuse on academy premises or during training activities</li>
              <li>Serious violations of aviation safety protocols</li>
              <li>Conduct bringing disrepute to Aviora or its partner institutions</li>
              <li>Non-payment of dues after written notice</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Governing Law & Dispute Resolution</h2>
            <p className={styles.para}>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.
            </p>
            <p className={styles.para}>
              Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation. If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Amendments</h2>
            <p className={styles.para}>
              Aviora reserves the right to amend these Terms and Conditions at any time. Material changes will be communicated to enrolled students via email or notice on the student portal. Continued use of our services after such changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Contact Us</h2>
            <p className={styles.para}>For questions regarding these Terms and Conditions, please contact:</p>
            <div className={styles.contactBlock}>
              <p><strong>Aviora Aviation Academy — Admissions Office</strong></p>
              <p>3rd Floor, Skyline Plaza, Banjara Hills</p>
              <p>Hyderabad, Telangana — 500 034, India</p>
              <p>Email: <a href="mailto:admissions@avioraacademy.com" className={styles.emailLink}>admissions@avioraacademy.com</a></p>
              <p>Phone: <a href="tel:+914023456789" className={styles.emailLink}>+91 40 2345 6789</a></p>
            </div>
          </section>

          <div className={styles.backBar}>
            <Link href="/privacy-policy" className={styles.backLink}>← Privacy Policy</Link>
            <Link href="/" className={styles.backLink}>Back to Home →</Link>
          </div>

        </div>
      </div>
    </main>
  );
}
