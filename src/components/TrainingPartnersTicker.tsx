import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  "IndiGo Airlines",
  "Air India",
  "Vistara",
  "SpiceJet",
  "Qatar Airways",
  "Emirates",
  "Akasa Air",
  "Go First",
  "AirAsia India",
  "Etihad Airways"
];

export default function TrainingPartnersTicker() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>TRAINING PARTNERS FOR</h3>
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeContent}>
          {/* Repeat slightly more than twice to ensure a seamless infinite loop */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div key={i} className={styles.partnerCard}>
              <span className={styles.partnerName}>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
