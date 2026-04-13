'use client';
import { useState } from 'react';
import { CONTACT_PHONE_PRIMARY, CONTACT_PHONE_SECONDARY, CONTACT_EMAIL, CONTACT_ADDRESS_LINE_1, CONTACT_ADDRESS_LINE_2, OFFICE_HOURS_WEEKDAY, OFFICE_HOURS_SATURDAY } from '@/lib/constants';
import s from './contact.module.css';

const FAQS = [
  {
    q: 'What are the upcoming intake dates for 2025?',
    a: 'Aviora runs four structured intakes annually — January, April, July, and October. Each cohort is deliberately capped to maintain the instructor-to-student ratio that delivers our 98% placement record. We recommend initiating your application at least 12 weeks before your preferred intake.'
  },
  {
    q: 'Is a Class 1 Medical required before joining?',
    a: 'A DGCA Class 1 Medical Certificate is mandatory before you can commence flight training, but not required at the application stage. Our admissions team will direct you to DGCA-authorised AMEs (Aviation Medical Examiners) in Hyderabad and major cities. Early clearance is strongly advised.'
  },
  {
    q: 'How long does the complete CPL pathway take?',
    a: 'The Zero to Hero CPL program spans 18–24 months, structured across three phases: DGCA Ground School (4–6 months), FBS Simulator Training, and International Flight Hours in the USA (8–12 months). Your final timeline depends on DGCA exam pace and weather windows during the USA phase.'
  },
  {
    q: 'What is the minimum academic qualification required?',
    a: 'Applicants must hold a Class 10+2 certificate with Physics and Mathematics from a recognised board. Students from Arts or Commerce streams can clear a NIOS bridge course — our counsellors will guide you through equivalency options at no extra cost.'
  },
  {
    q: 'Does Aviora assist with airline placement after CPL?',
    a: 'Yes — proactively. Our active Captain network includes screeners at 42 partner airlines. The Aviora Placement Cell runs mock interviews and sim assessments calibrated to specific airline selection profiles. Our 98% placement rate has held for six consecutive years.'
  },
  {
    q: 'Can I visit the campus before enrolling?',
    a: 'Absolutely. We actively encourage campus visits. You will tour our FBS simulator bay, aviation classrooms, grooming labs, and resource library while meeting an active crew member. Schedule directly through our Operations line or WhatsApp — visits run Monday through Saturday.'
  }
];

const CHANNELS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    label: 'Operations Desk',
    value: CONTACT_PHONE_PRIMARY,
    sub: 'Mon–Sat  ·  09:00–18:00 IST',
    href: `tel:${CONTACT_PHONE_PRIMARY}`
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Admissions Email',
    value: CONTACT_EMAIL,
    sub: 'Response within 24 hours',
    href: `mailto:${CONTACT_EMAIL}`
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
        <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c9.756 0 14.983-8.152 14.983-15.237 0-4.075-1.587-7.908-4.514-10.109z"/>
      </svg>
    ),
    label: 'WhatsApp Line',
    value: CONTACT_PHONE_SECONDARY,
    sub: 'Fastest response channel',
    href: `https://wa.me/${CONTACT_PHONE_SECONDARY?.replace(/\D/g, '')}`
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
      </svg>
    ),
    label: 'Campus Address',
    value: CONTACT_ADDRESS_LINE_1,
    sub: CONTACT_ADDRESS_LINE_2,
    href: 'https://maps.google.com/?q=Banjara+Hills+Hyderabad'
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className={s.page}>

      {/* ══════════════ HERO ══════════════ */}
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className={s.heroGradient} />

        <div className={s.heroInner}>
          <div className={s.heroLeft}>
            <div className={s.eyebrow}>Aviora Control Tower</div>
            <h1 className={s.heroH1}>
              We're Ready<br/>
              When <em>You Are.</em>
            </h1>
            <p className={s.heroBody}>
              Our admissions team is staffed by real aviation professionals — active CPL holders and certified instructors ready to answer every question on your path to the cockpit.
            </p>

            {/* STATS BAR */}
            <div className={s.heroStats}>
              <div className={s.hStat}>
                <span className={s.hStatNum}>24h</span>
                <span className={s.hStatLabel}>Response Guarantee</span>
              </div>
              <div className={s.hStatDiv} />
              <div className={s.hStat}>
                <span className={s.hStatNum}>4</span>
                <span className={s.hStatLabel}>Annual Intakes</span>
              </div>
              <div className={s.hStatDiv} />
              <div className={s.hStat}>
                <span className={s.hStatNum}>98%</span>
                <span className={s.hStatLabel}>Placement Rate</span>
              </div>
            </div>
          </div>

          {/* CONTACT CHANNELS */}
          <div className={s.heroRight}>
            {CHANNELS.map((ch, i) => (
              <a key={i} href={ch.href} className={s.channelCard} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <div className={s.channelIcon}>{ch.icon}</div>
                <div className={s.channelBody}>
                  <div className={s.channelLabel}>{ch.label}</div>
                  <div className={s.channelValue}>{ch.value}</div>
                  <div className={s.channelSub}>{ch.sub}</div>
                </div>
                <div className={s.channelArrow}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FORM + FAQ ══════════════ */}
      <section className={s.mainSection}>
        <div className={s.container}>
          <div className={s.mainGrid}>

            {/* LEFT — FORM */}
            <div className={s.formWrap}>
              <div className={s.sectionEyebrow}>Send a Message</div>
              <h2 className={s.sectionH2}>Transmit<br/><em>Your Enquiry</em></h2>
              <p className={s.sectionSub}>Every enquiry is read personally by our admissions team. Include as much detail as you can for a tailored response.</p>

              {!submitted ? (
                <form className={s.form} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className={s.formRow}>
                    <div className={s.fieldGroup}>
                      <label htmlFor="fullName" className={s.label}>Full Name</label>
                      <input id="fullName" name="fullName" className={s.input} type="text" placeholder="Your full name" required />
                    </div>
                    <div className={s.fieldGroup}>
                      <label htmlFor="mobile" className={s.label}>Mobile / WhatsApp</label>
                      <input id="mobile" name="mobile" className={s.input} type="tel" placeholder="+91 98765 43210" required />
                    </div>
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="email" className={s.label}>Email Address</label>
                    <input id="email" name="email" className={s.input} type="email" placeholder="your@email.com" required />
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="program" className={s.label}>Program of Interest</label>
                    <select id="program" name="program" className={s.select}>
                      <option value="">Select a program</option>
                      <option>Commercial Pilot Licence (CPL)</option>
                      <option>Cabin Crew Training</option>
                      <option>Global Training USA Pathway</option>
                      <option>Airbus A320 Type Rating</option>
                    </select>
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="message" className={s.label}>Your Message</label>
                    <textarea id="message" name="message" className={s.textarea} rows={4} placeholder="Tell us about your current qualifications and your aviation goal..." />
                  </div>
                  <button type="submit" className={s.submitBtn}>
                    <span>Send Enquiry</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2L15 22 11 13 2 9 22 2z"/>
                    </svg>
                  </button>
                </form>
              ) : (
                <div className={s.successState}>
                  <div className={s.successRing}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className={s.successH3}>Message Received</h3>
                  <p className={s.successP}>Your enquiry is in our system. An admissions officer will contact you within 24 hours — or by the next working day if received after hours.</p>
                </div>
              )}
            </div>

            {/* RIGHT — FAQ */}
            <div className={s.faqWrap}>
              <div className={s.sectionEyebrow}>Before You Ask</div>
              <h2 className={s.sectionH2}>Pre-Flight<br/><em>Briefing</em></h2>
              <p className={s.sectionSub}>Answers to the questions every aspiring aviator has — before picking up the phone.</p>

              <div className={s.faqList}>
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    className={`${s.faqItem} ${activeFaq === i ? s.faqOpen : ''}`}
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <div className={s.faqRow}>
                      <span className={s.faqNum}>0{i + 1}</span>
                      <span className={s.faqQ}>{faq.q}</span>
                      <span className={s.faqChevron}>{activeFaq === i ? '−' : '+'}</span>
                    </div>
                    {activeFaq === i && (
                      <div className={s.faqA}>{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════ MAP & HOURS ══════════════ */}
      <section className={s.baseSection}>
        <div className={s.container}>
          <div className={s.baseSectionHead}>
            <div className={s.eyebrow}>Find Us</div>
            <h2 className={s.baseSectionH2}>Base of <em>Operations</em></h2>
          </div>

          <div className={s.baseGrid}>
            <div className={s.mapWrap}>
              <iframe
                className={s.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2085287408466!2d78.38696!3d17.39553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95b0257fd4af%3A0x2d41e66e57f7cfc!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712832000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aviora Aviation Academy — Hyderabad Campus"
              />
              <div className={s.mapGrid} />
            </div>

            <div className={s.detailsWrap}>
              <div className={s.detailBlock}>
                <div className={s.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <div>
                  <div className={s.detailLabel}>Campus Address</div>
                  <div className={s.detailValue}>{CONTACT_ADDRESS_LINE_1}</div>
                  <div className={s.detailSub}>{CONTACT_ADDRESS_LINE_2}</div>
                </div>
              </div>

              <div className={s.detailDivider} />

              <div className={s.detailBlock}>
                <div className={s.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                  </svg>
                </div>
                <div>
                  <div className={s.detailLabel}>Duty Roster</div>
                  <ul className={s.roster}>
                    <li><span>Mon – Fri</span><span>{OFFICE_HOURS_WEEKDAY}</span></li>
                    <li><span>Saturday</span><span>{OFFICE_HOURS_SATURDAY}</span></li>
                    <li><span>Sunday</span><span className={s.closed}>Ground Stop</span></li>
                  </ul>
                </div>
              </div>

              <div className={s.detailDivider} />

              <div className={s.accredBlock}>
                <div className={s.accredLabel}>Recognised By</div>
                <div className={s.accredList}>
                  <span className={s.accredBadge}>DGCA India</span>
                  <span className={s.accredBadge}>FAA Recognised</span>
                  <span className={s.accredBadge}>CAPA Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
