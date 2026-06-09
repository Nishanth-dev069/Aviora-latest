"use client";

import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  { name: 'IndiGo', logo: '/logos/indigo.png' },
  { name: 'Air India', logo: '/logos/airindia.png' },
  { name: 'Emirates', logo: '/logos/emirates.png' },
  { name: 'Qatar Airways', logo: '/logos/qatar.png' },
  { name: 'SpiceJet', logo: '/logos/spicejet.png' },
  { name: 'Akasa Air', logo: '/logos/akasa.png' },
  { name: 'Etihad Airways', logo: '/logos/etihad.png' },
  { name: 'Fly91', logo: '/logos/fly91.png' },
  { name: 'StarAir', logo: '/logos/starair.png' },
  { name: 'FlyBig', logo: '/logos/flybig.png' },
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
              <div className={styles.logoBox}>
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className={styles.logoImage}
                />
              </div>
              <span className={styles.name}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
