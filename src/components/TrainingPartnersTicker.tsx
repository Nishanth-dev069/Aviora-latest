import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  { name: 'IndiGo',        color: '#6441C1', abbr: 'IG' },
  { name: 'Air India',     color: '#C8102E', abbr: 'AI' },
  { name: 'Emirates',      color: '#D71921', abbr: 'EK' },
  { name: 'Qatar Airways', color: '#5C0632', abbr: 'QA' },
  { name: 'SpiceJet',      color: '#E2231A', abbr: 'SJ' },
  { name: 'Vistara',       color: '#4B2A7A', abbr: 'VS' },
  { name: 'Etihad',        color: '#BD8B13', abbr: 'EY' },
  { name: 'Akasa Air',     color: '#FF6621', abbr: 'AK' },
  { name: 'AirAsia',       color: '#FF0000', abbr: 'AA' },
  { name: 'Go First',      color: '#073D7F', abbr: 'GF' },
];

export default function TrainingPartnersTicker() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className={styles.container}>
      <p className={styles.label}>
        Trusted by India&rsquo;s Leading Aviation Organisations
      </p>
      <div className={styles.track}>
        <div className={styles.tape}>
          {doubled.map((p, i) => (
            <div key={i} className={styles.card}>
              {/* Typographic logo — greyscale by default, colored on hover */}
              <span
                className={styles.logoMark}
                style={{ '--brand-color': p.color } as React.CSSProperties}
              >
                {p.abbr}
              </span>
              <span className={styles.name}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
