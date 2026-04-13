'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CONTACT_PHONE_PRIMARY, CONTACT_PHONE_SECONDARY, CONTACT_EMAIL, CONTACT_ADDRESS_LINE_1, CONTACT_ADDRESS_LINE_2, OFFICE_HOURS_WEEKDAY, OFFICE_HOURS_SATURDAY } from '@/lib/constants';
import s from './contact.module.css';

const INFO_CARDS = [
  { icon: '◎', title: 'Office Address', line1: CONTACT_ADDRESS_LINE_1, line2: CONTACT_ADDRESS_LINE_2 },
  { icon: '✆', title: 'Phone', line1: CONTACT_PHONE_PRIMARY, line2: CONTACT_PHONE_SECONDARY },
  { icon: '✉', title: 'Email', line1: CONTACT_EMAIL, line2: 'Response within 24 hours' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO SPLIT ═══ */}
      <section className={s.heroSplit}>
        <div className={s.heroImageSide}>
          <img
            src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=1920&q=80"
            alt="ATC Tower and Airfield Operations"
            className={s.heroSplitImg}
            fetchPriority="high"
            loading="eager"
            width={1200}
            height={1600}
          />
          <div className={s.heroLeftOverlay} />
          <div className={s.heroLeftContent}>
            <h1 className={s.heroH1}>Let's Get You Airborne</h1>
            <p className={s.heroPara}>
              Speak directly with aviation professionals. No sales pressure — just real guidance on your path to the cockpit.
            </p>
          </div>
        </div>

        <div className={s.heroFormSide}>
          <div className={s.formWrapper}>
            <div className={s.formLabel}>GET IN TOUCH</div>
            <h2 className={s.formH2}>Send a Message</h2>
            
            {!submitted ? (
              <div className={s.formFields}>
                <div className={s.formRow}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="fullName" className={s.fieldLabel}>FULL NAME</label>
                    <input id="fullName" name="fullName" className={s.fieldInput} type="text" placeholder="Your full name" />
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="mobile" className={s.fieldLabel}>MOBILE / WHATSAPP</label>
                    <input id="mobile" name="mobile" className={s.fieldInput} type="tel" placeholder={CONTACT_PHONE_SECONDARY} />
                  </div>
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="email" className={s.fieldLabel}>EMAIL ADDRESS</label>
                  <input id="email" name="email" className={s.fieldInput} type="email" placeholder="your@email.com" />
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="enquiryType" className={s.fieldLabel}>ENQUIRY TYPE</label>
                  <select id="enquiryType" name="enquiryType" className={s.fieldSelect}>
                    <option value="">Select topic</option>
                    <option value="Pilot Training">Pilot Training</option>
                    <option value="Cabin Crew">Cabin Crew</option>
                    <option value="Global Training">Global Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={s.fieldGroup}>
                  <label htmlFor="message" className={s.fieldLabel}>YOUR MESSAGE</label>
                  <textarea id="message" name="message" className={s.fieldTextarea} rows={4} placeholder="How can we help you?" />
                </div>
                <button className={s.formSubmit} onClick={() => setSubmitted(true)}>
                  Submit Inquiry
                </button>
              </div>
            ) : (
              <div className={s.formSuccess}>
                <svg className={s.planeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <div className={s.successTitle}>Message Received</div>
                <p className={s.successText}>We will get back to you within 24 working hours to answer all your questions.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 2. INFO CARDS ═══ */}
      <section className={s.infoSection}>
        <div className={s.container}>
          <div className={s.infoGrid}>
            {INFO_CARDS.map((card, i) => (
              <div className={s.infoCard} key={i}>
                <div className={s.infoIcon}>{card.icon}</div>
                <h3 className={s.infoTitle}>{card.title}</h3>
                <div className={s.infoText}>{card.line1}</div>
                <div className={s.infoText}>{card.line2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. MAP AND HOURS ═══ */}
      <section className={s.mapHoursSection}>
        <div className={s.containerWide}>
          <div className={s.mapHoursGrid}>
            <div className={s.mapWrapper}>
              <iframe
                className={s.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2085287408466!2d78.38696!3d17.39553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95b0257fd4af%3A0x2d41e66e57f7cfc!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712832000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aviora Aviation Academy Location"
              />
              <div className={s.mapTint}></div>
            </div>
            
            <div className={s.hoursWrapper}>
              <h3 className={s.hoursTitle}>Office Hours</h3>
              <table className={s.hoursTable}>
                <tbody>
                  <tr>
                    <td>Monday – Friday</td>
                    <td>{OFFICE_HOURS_WEEKDAY}</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>{OFFICE_HOURS_SATURDAY}</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
