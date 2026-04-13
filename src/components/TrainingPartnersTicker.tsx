import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  { name: "IndiGo Airlines", short: "IG" },
  { name: "Air India", short: "AI" },
  { name: "Vistara", short: "VS" },
  { name: "SpiceJet", short: "SJ" },
  { name: "Qatar Airways", short: "QA" },
  { name: "Emirates", short: "EK" },
  { name: "Akasa Air", short: "AK" },
  { name: "Go First", short: "GF" },
  { name: "AirAsia India", short: "AA" },
  { name: "Etihad Airways", short: "EY" }
];

export default function TrainingPartnersTicker() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>TRAINING PARTNERS FOR</h3>
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeContent}>
          {/* Repeat slightly more than twice to ensure a seamless infinite loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div key={`${partner.short}-${i}`} className={styles.partnerCard}>
              <div className={styles.monogram}>
                {partner.short}
              </div>
              <span className={styles.partnerName}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
