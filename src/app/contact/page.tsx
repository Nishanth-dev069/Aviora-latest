'use client';
import Link from 'next/link';
import { useState } from 'react';
import s from './contact.module.css';
import CessnaFly from '@/components/CessnaFly';

const CONTACT_CHANNELS = [
  {
    icon: '✆',
    label: 'Admissions Helpline',
    primary: '+91 40 XXXX XXXX',
    secondary: 'Mon – Sat · 9:00 AM – 7:00 PM IST',
  },
  {
    icon: '✉',
    label: 'Email',
    primary: 'admissions@avioraacademy.com',
    secondary: 'Response within 24 working hours',
  },
  {
    icon: '◎',
    label: 'Campus Address',
    primary: 'Aviora Aviation Academy',
    secondary: 'Hyderabad, Telangana, India',
  },
  {
    icon: '⊕',
    label: 'WhatsApp',
    primary: '+91 XXXXX XXXXX',
    secondary: 'Quick queries · Mon–Sat 9AM–6PM',
  },
];

const TEAM = [
  {
    name: 'Capt. Rajeev Sharma',
    role: 'Head of Admissions',
    note: 'Former IndiGo Captain · 12,000 hrs TT',
    says: 'I joined Aviora because I want to give every cadet the mentorship I never had. Call me directly.',
  },
  {
    name: 'Priya Anand',
    role: 'Senior Admissions Counsellor',
    note: 'Former Vistara Cabin Crew · 6 years Aviora',
    says: 'I know what airlines look for — and I know how to get you there. Let\'s talk.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80"
            alt="Pilot in cockpit looking out at horizon"
            className={s.heroBgImg}
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroGlow} />
        <div className={s.heroContent}>
          <div className={s.eyebrow}>Get in Touch</div>
          <h1 className={s.heroH1}>
            Talk to a Pilot.<br/><em>Not a Salesperson.</em>
          </h1>
          <p className={s.heroPara}>
            Every person you speak to at Aviora is an aviation professional.
            Our admissions counsellors are former airline captains and cabin crew —
            people who have navigated exactly the path you are considering.
          </p>
        </div>
      </section>

      {/* ═══ 2. CHANNEL STRIP ═══ */}
      <section className={s.channelStrip}>
        <div className={s.channelGrid}>
          {CONTACT_CHANNELS.map((ch, i) => (
            <div className={s.channelItem} key={i}>
              <div className={s.channelIcon}>{ch.icon}</div>
              <div className={s.channelLabel}>{ch.label}</div>
              <div className={s.channelPrimary}>{ch.primary}</div>
              <div className={s.channelSecondary}>{ch.secondary}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3. MAIN CONTENT — FORM + TEAM ═══ */}
      <section className={s.mainSection}>
        <div className={s.mainInner}>

          {/* Contact form */}
          <div className={s.formSide}>
            <div className={s.eyebrow}>Send a Message</div>
            <h2 className={s.formH2}>
              We Respond<br/><em>Within 24 Hours.</em>
            </h2>

            {!submitted ? (
              <div className={s.contactForm}>
                <div className={s.formRow}>
                  <div className={s.fieldGroup}>
                    <label className={s.fieldLabel}>Full Name</label>
                    <input className={s.fieldInput} type="text" placeholder="Your full name" />
                  </div>
                  <div className={s.fieldGroup}>
                    <label className={s.fieldLabel}>Mobile / WhatsApp</label>
                    <input className={s.fieldInput} type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className={s.fieldGroup}>
                  <label className={s.fieldLabel}>Email Address</label>
                  <input className={s.fieldInput} type="email" placeholder="your@email.com" />
                </div>
                <div className={s.fieldGroup}>
                  <label className={s.fieldLabel}>Enquiry Type</label>
                  <select className={s.fieldSelect}>
                    <option value="">Select topic</option>
                    <option>Pilot Training Admissions</option>
                    <option>Cabin Crew Admissions</option>
                    <option>Global Training — USA</option>
                    <option>Fees & Payment Plans</option>
                    <option>Placement & Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={s.fieldGroup}>
                  <label className={s.fieldLabel}>Your Message</label>
                  <textarea
                    className={s.fieldTextarea}
                    rows={5}
                    placeholder="Tell us what you'd like to know. We'll respond with direct, honest information."
                  />
                </div>
                <button className={s.formSubmit} onClick={() => setSubmitted(true)}>
                  Send Message →
                </button>
              </div>
            ) : (
              <div className={s.formSuccess}>
                <div className={s.successIcon}>✓</div>
                <div className={s.successTitle}>Message Received</div>
                <p className={s.successText}>
                  Thank you. An Aviora admissions professional will contact you
                  within 24 working hours. Check your email and WhatsApp.
                </p>
                <Link href="/programs" className={s.successLink}>Explore Programs →</Link>
              </div>
            )}
          </div>

          {/* Team side */}
          <div className={s.teamSide}>
            <div className={s.eyebrow}>Speak Directly With</div>
            <h2 className={s.teamH2}>
              Your Admissions<br/><em>Counsellors.</em>
            </h2>
            <div className={s.teamCards}>
              {TEAM.map((member, i) => (
                <div className={s.teamCard} key={i}>
                  <div className={s.teamAccent} />
                  <div className={s.teamName}>{member.name}</div>
                  <div className={s.teamRole}>{member.role}</div>
                  <div className={s.teamNote}>{member.note}</div>
                  <blockquote className={s.teamQuote}>
                    &ldquo;{member.says}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Office hours card */}
            <div className={s.officeCard}>
              <div className={s.officeCardTitle}>Office Hours</div>
              <div className={s.officeRow}>
                <span className={s.officeDay}>Monday – Friday</span>
                <span className={s.officeTime}>9:00 AM – 7:00 PM</span>
              </div>
              <div className={s.officeRow}>
                <span className={s.officeDay}>Saturday</span>
                <span className={s.officeTime}>9:00 AM – 5:00 PM</span>
              </div>
              <div className={s.officeRow}>
                <span className={s.officeDay}>Sunday</span>
                <span className={s.officeTime}>Closed</span>
              </div>
              <div className={s.officeNote}>
                Walk-ins welcome during office hours.<br/>
                Scheduled appointments prioritised.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 4. MAP PLACEHOLDER ═══ */}
      <section className={s.mapSection}>
        <div className={s.mapPlaceholder}>
          <div className={s.mapOverlay}>
            <div className={s.mapContent}>
              <div className={s.mapIcon}>◎</div>
              <div className={s.mapAddress}>Aviora Aviation Academy</div>
              <div className={s.mapCity}>Hyderabad, Telangana, India</div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={s.mapLink}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. BOTTOM CTA ═══ */}
      <section className={s.bottomCta} style={{ position: 'relative', overflow: 'hidden' }}>
        <CessnaFly direction="right" size={32} opacity={0.08} top="50%" delay="3s" />
        <div className={s.bottomCtaInner}>
          <div className={s.eyebrow}>Ready to Begin?</div>
          <h2 className={s.bottomCtaH2}>
            Apply Now.<br/><em>Take Off Soon.</em>
          </h2>
          <Link href="/admissions" className={s.btnPrimary}>Start Your Application →</Link>
        </div>
      </section>

    </main>
  );
}
